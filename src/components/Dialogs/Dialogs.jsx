import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { Redirect } from 'react-router-dom'
import AddMessageForm from './AddMessageForm/AddMessageForm'

const Dialogs = props => {
  const dialogsElements = props.dialogsPage.dialogs.map(d => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ))
  const messegesElements = props.dialogsPage.messages.map(m => (
    <Message message={m.message} key={m.id} />
  ))

  const addNewMessage = values => {
    props.sendMessage(values.newMessageBody)
  }

  if (!props.isAuth) return <Redirect to={'/login'} />
  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>{dialogsElements}</ul>
      <ul className={s.messages}>
        {messegesElements}
        <AddMessageForm onSubmit={addNewMessage} />
      </ul>
    </div>
  )
}

export default Dialogs
