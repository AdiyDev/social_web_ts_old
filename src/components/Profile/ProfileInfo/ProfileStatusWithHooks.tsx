import React, { useState, useEffect, ChangeEvent } from 'react'

type PropsType = {
  status: string
  updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = props => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activeteEditMode = () => {
    setEditMode(true)
  }

  const deactiveteEditMode = () => {
    setEditMode(false)
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
    props.updateStatus(status)
  }

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.select()
  }

  return (
    <ul>
      {!editMode && (
        <li>
          <span onDoubleClick={activeteEditMode}>{status || '------'}</span>
        </li>
      )}
      {editMode && (
        <li>
          <input
            autoFocus={true}
            onBlur={deactiveteEditMode}
            onChange={onStatusChange}
            onFocus={handleFocus}
            value={status}
          />
        </li>
      )}
    </ul>
  )
}

export default ProfileStatusWithHooks
