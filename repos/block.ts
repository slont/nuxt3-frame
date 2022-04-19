import { Block } from '~/type'
import dayjs from 'dayjs'

export type FilterQuery = {
  page?: number
  perPage?: number
}

export const createBlockRepo = () => {
  const getList = async (query: FilterQuery = {}) => {
    const start = query.page * (query.perPage ?? 20)
    const items = BLOCKS
        .slice(start, start + (query.perPage ?? 20))

    return {
      items,
      count: items.length,
      totalCount: BLOCKS.length,
    }
  }

  return {
    getList,
  }
}

const BLOCKS: Block[] = [...Array(200)].map((_, i) => ({
  user: {
    id: `${i + 1}`,
    name: `name ${i + 1}`,
    gender: i % 2 ? 'male' : 'female',
  },
  createdAt: dayjs().add(- (i + 3), 'hour').toDate()
}))
