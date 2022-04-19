import { User } from '~/type'

export type FilterQuery = {
  'filter[like]name'?: string
  'filter[eq]gender'?: string
  perPage?: number
}

export const createUserRepo = () => {
  const getList = async (query: FilterQuery = {}) => {
    const items = USERS
        .filter(it => null == query['filter[like]name'] || it.name.includes(query['filter[like]name']))
        .filter(it => null == query['filter[eq]gender'] || query['filter[eq]gender'] === it.gender)
        .slice(0, query.perPage ?? 100)

    return {
      items,
      count: items.length,
    }
  }

  return {
    getList,
  }
}

const USERS: User[] = [...Array(50)].map((_, i) => ({
  id: `${i + 1}`,
  name: `name ${i + 1}`,
  gender: i % 2 ? 'male' : 'female',
}))
