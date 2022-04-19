import { reactive, useRoute } from '#imports'
import { Gender, User } from '~/type'
import { useListManager } from '~/useCaces/list'
import { createUserRepo, FilterQuery } from '~/repos/user'
import { Item } from '~/components/Dropdown.vue'

export const useUserListManager = () => {
  const route = useRoute()
  const listManager = useListManager<User>()
  const userRepo = createUserRepo()
  const data = reactive({
    name: '',
    gender: '',
  })
  const GENDER_LIST: Item[] = [
    { key: '', name: '全て' },
    { key: 'male', name: '男性' },
    { key: 'female', name: '女性' },
  ]

  // ページネーションありき
  const getList = async () => listManager.handleGetList(userRepo.getList(createQuery()))
  // 現在のクエリで頭から取り直したい時
  const refresh = async () => {
    setFilterFromQuery()
    await getList()
  }
  const reset = async () => {
    data.name = ''
    data.gender = ''
    await getList()
  }

  // ランディング時のURLクエリをセット
  const setFilterFromQuery = () => {
    data.name = (route.query.name ?? '') as string
    data.gender = (route.query.gender ?? '') as string
  }

  const createQuery = (): FilterQuery => {
    return {
      ...listManager.createQuery(),
      'filter[like]name': data.name || undefined,
      'filter[eq]gender': data.gender || undefined,
    }
  }

  /** filters **/
  const findByName = async (name: string) => {
    await listManager.pushRoute('name', name)
    await getList()
  }
  const filterByGender = async (gender: Gender | '') => {
    await listManager.pushRoute('gender', gender)
    await getList()
  }

  return {
    GENDER_LIST,
    items: listManager.items,
    data,
    getList, refresh, reset,
    findByName, filterByGender,
    setPerPage: listManager.setPerPage,
  }
}
