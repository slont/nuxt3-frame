export type ApiResponseArray<T> = {
  items: T[]
  count: number
  totalCount?: number
}

export type Gender = 'male' | 'female'

export type User = {
  id: string
  name: string
  gender: Gender
}

export type Block = {
  user: User
  createdAt: Date
}
