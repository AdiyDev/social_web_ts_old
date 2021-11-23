import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import AddMessageForm from './AddMessageForm/AddMessageForm'
import { initialStateType } from '../../redux/dialogs-reducer'

type PropsType = {
  dialogsPage: initialStateType
  sendMessage: (messageText: string) => void
}

export type NewMessageFormValuesType = {
  newMessageBody: string
}

const Dialogs: React.FC<PropsType> = props => {
  const dialogsElements = props.dialogsPage.dialogs.map(d => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ))
  const messegesElements = props.dialogsPage.messages.map(m => (
    <Message message={m.message} key={m.id} />
  ))

  const addNewMessage = (values: NewMessageFormValuesType) => {
    props.sendMessage(values.newMessageBody)
  }

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>{dialogsElements}</ul>
      <ul className={s.messages}>
        {messegesElements}
        {/* @ts-ignore */}
        <AddMessageForm onSubmit={addNewMessage} />
      </ul>
    </div>
  )
}

export default Dialogs
