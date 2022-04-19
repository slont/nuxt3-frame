import { reactive, ref, useRoute, useRouter } from '#imports'
import { ApiResponseArray } from '~/type'

type Data = {
  perPage: number
  sortKey: string
  sortOrder: 'asc' | 'desc'
  isLoading: boolean
}

export const useListManager = <T>() => {
  const route = useRoute()
  const router = useRouter()
  const items = ref<T[]>([])
  const data = reactive<Data>({
    perPage: 20,
    sortKey: 'createdAt',
    sortOrder: 'desc',
    isLoading: false,
  })

  const handleGetList = async (getListPromise: Promise<ApiResponseArray<T>>, callback = (res: ApiResponseArray<T>) => {}) => {
    if (data.isLoading) return Promise.reject({ message: 'loading'})

    data.isLoading = true
    return getListPromise.then(res => {
      (items.value as T[]) = res.items
      callback(res)
    }).finally(() => {
      data.isLoading = false
    })
  }

  const createQuery = () => {
    return {
      perPage: data.perPage,
      sort: data.sortKey && data.sortOrder ? `${data.sortKey},${data.sortOrder}` : undefined
    }
  }

  const pushRoute = async (key: string, value: any) => {
    const query = { ...route.query, [key]: value ?? undefined }
    if (JSON.stringify(query) !== JSON.stringify(route.query)) {
      await router.push({query}).catch(() => {})
    }
  }

  const setPerPage = (perPage: number) => data.perPage = perPage

  return {
    items,
    data,
    handleGetList, createQuery, pushRoute, setPerPage,
  }
}
