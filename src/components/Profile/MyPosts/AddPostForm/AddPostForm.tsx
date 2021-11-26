import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import {
  createField,
  GetStringKeys,
  Input
} from '../../../common/FormsControls/FormsControls'
import {
  maxLengthCreator,
  required
} from '../../../../utils/validators/validators'

type PropsType = {}
export type AddPostFormValuesType = {
  newPostText: string
}
type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const maxLength30 = maxLengthCreator(30)

const AddPostForm: React.FC<
  InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType
> = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<AddPostFormValuesTypeKeys>(
          'Your post',
          'newPostText',
          [required, maxLength30],
          Input
        )}
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

export default reduxForm<AddPostFormValuesType, PropsType>({
  form: 'profile-add-post'
})(AddPostForm)
