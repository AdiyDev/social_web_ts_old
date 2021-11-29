const subscribers = {
  'messages-received': [] as MessagesReceivedSubscribersType[],
  'status-changed': [] as StatusChangedSubscribersType[]
}

let ws: WebSocket | null = null
type EventsNamesType = 'messages-received' | 'status-changed'

const closeHandler = () => {
  notifiSubscribersAboutStatus('pending')
  setTimeout(createChannel, 3000)
}

const messageHandler = (e: MessageEvent) => {
  const newMessages = JSON.parse(e?.data)
  subscribers['messages-received'].forEach(s => s(newMessages))
}
const openHandler = () => {
  notifiSubscribersAboutStatus('ready')
}
const errorHandler = () => {
  notifiSubscribersAboutStatus('error')
  console.error('RESTART PAGE')
}

const cleanUp = () => {
  ws?.removeEventListener('close', closeHandler)
  ws?.removeEventListener('message', messageHandler)
  ws?.addEventListener('open', openHandler)
  ws?.addEventListener('error', errorHandler)
}

const notifiSubscribersAboutStatus = (status: StatusType) => {
  subscribers['status-changed'].forEach(s => s(status))
}

function createChannel() {
  cleanUp()
  ws?.close()
  ws = new WebSocket(
    'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
  )
  notifiSubscribersAboutStatus('pending')
  ws.addEventListener('close', closeHandler)
  ws.addEventListener('message', messageHandler)
  ws.addEventListener('open', openHandler)
  ws.addEventListener('error', errorHandler)
}

export const chatAPI = {
  start() {
    createChannel()
  },
  stop() {
    subscribers['messages-received'] = []
    subscribers['status-changed'] = []
    cleanUp()
    ws?.close()
  },
  subscribe(
    eventName: EventsNamesType,
    callback: MessagesReceivedSubscribersType | StatusChangedSubscribersType
  ) {
    // @ts-ignore
    subscribers[eventName].push(callback)
    return () => {
      // @ts-ignore
      subscribers[eventName] = subscribers[eventName].filter(
        // @ts-ignore
        s => s !== callback
      )
    }
  },
  unsubscribe(
    eventName: EventsNamesType,
    callback: MessagesReceivedSubscribersType | StatusChangedSubscribersType
  ) {
    // @ts-ignore
    subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
  },
  sendMessage(message: string) {
    ws?.send(message)
  }
}

type MessagesReceivedSubscribersType = (messages: ChatMessageAPIType[]) => void
type StatusChangedSubscribersType = (status: StatusType) => void

export type StatusType = 'pending' | 'ready' | 'error'
export type ChatMessageAPIType = {
  message: string
  photo: string
  userId: number
  userName: string
}
