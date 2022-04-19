<script lang="ts" setup>
import { useUserListManager } from '~/useCaces/user'

const { items, getList, reset } = useUserListManager()

/** Init **/
reset()
</script>

<template>
  <main id="users-index">
    <header></header>
    <table>
      <thead class="table">
        <tr>
          <th></th>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="it in items" :key="it.id">
          <td><input type="checkbox"></td>
          <td>{{ it.id }}</td>
          <td>{{ it.name }}</td>
          <td>{{ it.gender }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style lang="scss" scoped>
</style>
