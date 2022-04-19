<script lang="ts" setup>
import { useRoute } from '#imports'

const route = useRoute()
const onClickTab = (tab: number) => {
}
/** Init **/
</script>

<template>
  <div id="users-detail-tasks">

    <footer class="tabs is-fullwidth is-toggle mt-auto">
      <ul>
        <router-link :to="{ query: { tab: '0' } }" custom v-slot="{ navigate }">
          <li :class="{ 'is-active': '0' === $route.query.tab }" @click="navigate"><a>普通のタスク</a></li>
        </router-link>
        <router-link :to="{ query: { tab: '1' } }" custom v-slot="{ navigate }">
          <li :class="{ 'is-active': '1' === $route.query.tab }" @click="navigate"><a>普通じゃないタスク</a></li>
        </router-link>
        <router-link :to="{ query: { tab: '2' } }" custom v-slot="{ navigate }">
          <li :class="{ 'is-active': '2' === $route.query.tab }" @click="navigate"><a>ヤバいタスク</a></li>
        </router-link>
      </ul>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
</style>
