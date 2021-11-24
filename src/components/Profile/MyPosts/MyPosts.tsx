import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import AddPostForm, { AddPostFormValuesType } from './AddPostForm/AddPostForm'
import { postsType } from '../../../types/types'

export type MapPropsType = {
  posts: Array<postsType>
}
export type DispatchPropsType = {
  addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {
  const postsElements = [...props.posts]
    .reverse()
    .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

  const onAddPost = (values: AddPostFormValuesType) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

const MyPostsMemorized = React.memo(MyPosts)

export default MyPostsMemorized
