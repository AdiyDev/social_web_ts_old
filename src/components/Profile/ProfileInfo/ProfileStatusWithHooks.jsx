import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activeteEditMode = () => {
    setEditMode(true);
  };

  const deactiveteEditMode = () => {
    setEditMode(false);
  };

  const onStatusChange = e => {
    setStatus(e.currentTarget.value);
    props.updateStatus(status);
  };

  const handleFocus = e => {
    e.target.select();
  };

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
  );
};

export default ProfileStatusWithHooks;
