<script lang="ts" setup>
import { useUserListManager } from '~/useCaces/user'
import Dropdown from '~/components/Dropdown.vue'

const { GENDER_LIST, items, data, refresh, reset, findByName, filterByGender, setPerPage } = useUserListManager()

/** Init **/
setPerPage(50)
refresh()
</script>

<template>
  <main id="users-index">
    <header class="is-flex is-align-items-flex-end">
      <div class="field is-grouped px-4 py-2 mb-0">
        <div class="control">
          <label class="label">名前</label>
          <input v-model="data.name" type="text" class="input" @input="findByName($event.target.value)">
        </div>
        <div class="control">
          <label class="label">性別</label>
          <Dropdown v-model="data.gender" :items="GENDER_LIST" @update:modelValue="filterByGender">
            <button class="button is-outlined">
              <span v-if="data.gender">{{ data.gender }}</span>
              <span v-else>全て</span>
              <span class="icon is-small">
                <img src="@/assets/img/icons/caretDown.svg" alt="">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </Dropdown>
        </div>
      </div>
      <div class="is-flex flex-1 py-2 pr-4">
        <button class="button is-info is-outlined is-inverted" @click="reset"><span>クリア</span></button>
        <router-link to="/createUser" custom v-slot="{ navigate }">
          <button class="button is-primary ml-auto" @click="navigate">
            <span>新規作成</span>
          </button>
        </router-link>
      </div>
    </header>

    <div class="table-container scrollable-y">
      <table class="table is-fullwidth is-hoverable is-striped">
        <thead class="is-sticky" style="top: 0;">
        <tr>
          <th style="width: 2rem"><input type="checkbox"></th>
          <th style="width: 4rem">ID</th>
          <th style="width: 24rem">名前</th>
          <th>性別</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="it in items" :key="it.id" class="is-clickable" @click="$router.push(`/users/${it.id}/detail`)">
          <td><input type="checkbox"></td>
          <td>{{ it.id }}</td>
          <td>{{ it.name }}</td>
          <td>{{ it.gender }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style lang="scss" scoped>
$header-height: 5rem;

header {
  height: $header-height;
  background: lightpink;
}
.table thead {
  background: lightcyan;
}
.table-container {
  height: calc(100% - #{$header-height});
}
</style>
