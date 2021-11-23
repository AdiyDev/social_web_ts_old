export type fiealValidatorType = (value: string) => string | undefined

export const required: fiealValidatorType = value => {
  if (value) return undefined

  return 'Field required'
}

export const maxLengthCreator =
  (maxLength: number): fiealValidatorType =>
  value => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`

    return undefined
  }
