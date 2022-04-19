<script lang="ts" setup>
import dayjs from 'dayjs'
import { useBlockListManager } from '~/useCaces/block'

const { items, refresh } = useBlockListManager()
/** Init **/
refresh()
</script>

<template>
  <div id="users-detail-blocks">
    <div>
      <div class="table-container scrollable-y">
        <table class="table is-fullwidth is-hoverable is-striped">
          <thead class="is-sticky" style="top: 0;">
          <tr>
            <th style="width: 4rem">ユーザ名</th>
            <th>作成日時</th>
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
</style>
