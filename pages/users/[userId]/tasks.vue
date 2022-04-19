<script lang="ts" setup>
import { useRoute } from '#imports'
import Abnormal from '~/fragments/users/_userId/tasks/Abnormal.vue'
import Unnormal from '~/fragments/users/_userId/tasks/Unnormal.vue'
import Normal from '~/fragments/users/_userId/tasks/Normal.vue'

const route = useRoute()
/** Init **/
</script>

<template>
  <div id="users-detail-tasks">

    <Abnormal v-if="'2' === $route.query.tab" />
    <Unnormal v-else-if="'1' === $route.query.tab" />
    <Normal v-else />

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
