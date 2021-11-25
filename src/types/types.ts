export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export type PhotosType = {
  small: string | null
  large: string | null
}

export type ProfileType = {
  userId: number
  aboutMe: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
}

export type UsersType = {
  id: number
  name: string
  status: string
  message: string
  photos: PhotosType
  followed: boolean
  totalCount: number
  error: string
  location: {
    country: string
    city: string
  }
}
