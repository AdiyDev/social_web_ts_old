import React, { useEffect, useState } from 'react'

const wsChannel = new WebSocket(
  'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
)

export type ChatMessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}

export const ChatPage: React.FC = () => {
  return (
    <div>
      <Chat />
    </div>
  )
}

const Chat: React.FC = () => {
  return (
    <div>
      <Messages />
      <AddMessageForm />
    </div>
  )
}

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([])

  useEffect(() => {
    wsChannel.addEventListener('message', (e: MessageEvent) => {
      let newMessages = JSON.parse(e?.data)
      setMessages(prevMessages => [...prevMessages, ...newMessages])
    })
    return () => {}
  }, [])

  return (
    <div style={{ height: '400px', overflowY: 'auto' }}>
      {messages.map((m, index: number) => (
        <Message key={index} message={m} />
      ))}
    </div>
  )
}
const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  return (
    <div>
      <img style={{ width: '30px', height: 30 }} src={message?.photo} alt="" />\
      <i>{message?.userId}</i>
      <b>{message?.userName}</b>
      <br />
      {message?.message}
      <hr />
    </div>
  )
}

const AddMessageForm: React.FC = () => {
  const [message, setMessage] = useState('')

  const sendMessage = () => {
    if (!message) {
      return
    }

    wsChannel.send(message)
    setMessage('')
  }
  return (
    <div>
      <div>
        <textarea onChange={e => setMessage(e.target.value)}></textarea>
      </div>
      <div>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}
