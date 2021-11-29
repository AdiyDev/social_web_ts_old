import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChatMessageType } from '../../api/chat-api'
import {
  sendMessagesListening,
  startMessagesListening,
  stopMessagesListening
} from '../../redux/chat-reducer'
import { AppStateType } from '../../redux/redux-store'

export const ChatPage: React.FC = () => {
  return (
    <div>
      <Chat />
    </div>
  )
}

const Chat: React.FC = () => {
  const dispatch = useDispatch()
  const status = useSelector((state: AppStateType) => state.chat?.status)

  useEffect(() => {
    dispatch(startMessagesListening())
    return () => {
      dispatch(stopMessagesListening())
    }
  }, []) // eslint-disable-line

  return (
    <div>
      {status === 'error' && (
        <div>Some error occured. Please refresh the page</div>
      )}
      <Messages />
      <AddMessageForm />
    </div>
  )
}

const Messages: React.FC = () => {
  const messages = useSelector((state: AppStateType) => state.chat.messages)

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
      <img style={{ width: '30px', height: 30 }} src={message?.photo} alt="" />
      <br />
      <b>{message?.userName}</b>
      <sup>{message?.userId}</sup>
      <br />
      {message?.message}
      <hr />
    </div>
  )
}

const AddMessageForm: React.FC = () => {
  const [message, setMessage] = useState('')
  const status = useSelector((state: AppStateType) => state.chat?.status)
  const dispatch = useDispatch()

  const sendMessageHandler = () => {
    if (!message) {
      return
    }
    dispatch(sendMessagesListening(message))
    setMessage('')
  }

  return (
    <div>
      <div>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button disabled={status !== 'ready'} onClick={sendMessageHandler}>
          Send
        </button>
      </div>
    </div>
  )
}
