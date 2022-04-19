<script lang="ts" setup>
import dayjs from 'dayjs'
import { useBlockListManager } from '~/useCaces/block'
import { useRoute } from '#imports'

const route = useRoute()
const { items, pages, refresh, setPage } = useBlockListManager()
/** Init **/
if (null == route.query.page) {
  setPage(0)
} else {
  refresh()
}
</script>

<template>
  <div id="users-detail-blocks">
    <div class="content">
      <div class="table-container scrollable-y is-fullheight pb-6">
        <table class="table is-fullwidth is-hoverable is-striped">
          <thead class="is-sticky" style="top: 0;">
          <tr>
            <th style="width: 50%">ユーザ名</th>
            <th style="width: 50%">作成日時</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(it, i) in items" :key="i" class="is-clickable">
            <td>{{ it.user.name }}</td>
            <td>{{ dayjs(it.createdAt).format('YYYY/MM/DD HH:mm') }}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <nav class="pagination is-centered mx-auto" style="width: 48rem">
        <a class="pagination-previous" @click="setPage(Math.max(0, parseInt($route.query.page) - 1))">前へ</a>
        <a class="pagination-next" @click="setPage(Math.min(pages.length - 1, parseInt($route.query.page) + 1))">次へ</a>
        <ul class="pagination-list m-0">
          <li v-for="it in pages" :key="it">
            <a :class="{ 'is-current': String(it - 1) === $route.query.page }"
               class="pagination-link"
               @click="setPage(it - 1)"
            >{{ it }}</a>
          </li>
        </ul>
      </nav>
    </div>

    <footer class="tabs is-fullwidth is-toggle mt-auto">
      <ul>
        <router-link :to="`/users/${$route.params.userId}/blocks`" custom v-slot="{ navigate, isActive }">
          <li :class="{ 'is-active': isActive }" @click="navigate"><a>ブロック</a></li>
        </router-link>
        <router-link :to="`/users/${$route.params.userId}/mutes`" custom v-slot="{ navigate, isActive }">
          <li :class="{ 'is-active': isActive }" @click="navigate"><a>ミュート</a></li>
        </router-link>
      </ul>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.content {
  height: calc(100% - 4.5rem);
}
.table thead {
  background: lightcyan;
}
.pagination {
  position: absolute;
  bottom: 4rem;
  left: 3.5rem;
  right: 0;
  width: 100%;
  background: white;
}
</style>
