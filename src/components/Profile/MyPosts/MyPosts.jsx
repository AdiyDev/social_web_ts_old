import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { reduxForm, Field } from 'redux-form'
import {
  required,
  maxLengthCreator
} from '../../../utils/validators/validators'
import { Textarea } from './../../common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h3>My posts</h3>
      <Field
        name="newPostText"
        component={Textarea}
        placeholder={'Post message'}
        validate={[required, maxLength10]}
      />
      <button>add post</button>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(
  AddNewPostForm
)

const MyPosts = React.memo(props => {
  const postsElements = props.profilePage.posts.map(p => (
    <Post message={p.message} key={p.id} likesCount={p.likesCount} />
  ))

  const onAddPost = values => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <ul className={s.posts}>{postsElements}</ul>
    </div>
  )
})

export default MyPosts
