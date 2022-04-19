import { computed, reactive, useRoute } from '#imports'
import { Block } from '~/type'
import { useListManager } from '~/useCaces/list'
import { Item } from '~/components/Dropdown.vue'
import { createBlockRepo, FilterQuery } from '~/repos/block'

export const useBlockListManager = () => {
  const route = useRoute()
  const listManager = useListManager<Block>()
  const blockRepo = createBlockRepo()
  const data = reactive({
    page: 0,
    totalCount: 0,
  })

  // ページネーションありき
  const getList = async () => listManager
      .handleGetList(blockRepo.getList(createQuery()), res => {
        data.totalCount = res.totalCount
      })
  // 現在のクエリで頭から取り直したい時
  const refresh = async () => {
    setFilterFromQuery()
    await getList()
  }
  const reset = async () => {
    data.page = 0
    await getList()
  }

  // ランディング時のURLクエリをセット
  const setFilterFromQuery = () => {
    data.page = parseInt((route.query.page ?? '0') as string)
  }

  const createQuery = (): FilterQuery => {
    return {
      ...listManager.createQuery(),
      'page': data.page ?? undefined,
    }
  }

  const pages = computed(() => {
    const pageCount = Math.floor(data.totalCount / listManager.data.perPage) + (data.totalCount % listManager.data.perPage ? 1 : 0)
    return [...Array(pageCount)].map((_, i) => i + 1)
  })

  /** filters **/
  const setPage = async (page: number) => {
    data.page = page
    await listManager.pushRoute('page', page)
    await getList()
  }

  return {
    items: listManager.items,
    data,
    getList, refresh, reset,
    pages, setPage,
    setPerPage: listManager.setPerPage,
  }
}
