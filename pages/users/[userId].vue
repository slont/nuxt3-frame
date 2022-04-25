<script lang="ts" setup>
import { computed, provide, reactive, ref, useRoute } from '#imports'
import { createUserRepo } from '~/repos/user'
import { UserIK } from '~/useCaces/injection'

const route = useRoute()
const isReady = ref(true)  // FIXME: falseに
const isActiveModal = ref(false)
const user = reactive({
  id: '',
  name: '',
  gender: '',
})

const lastDir = computed(() => route.path.split('/').slice(-1)[0])

provide(UserIK, user)

/** Init **/
createUserRepo().get(route.params.userId as string).then(res => {
  Object.assign(user, res)
  isReady.value = true
})
</script>

<template>
  <main id="users-detail">
    <header class="is-flex is-align-items-center is-justify-content-center">
      <div class="tabs is-toggle is-toggle-rounded mb-0">
        <ul>
          <router-link :to="`/users/${$route.params.userId}/detail`" custom v-slot="{ navigate, isActive }">
            <li :class="{ 'is-active': isActive }" @click="navigate"><a>基本情報</a></li>
          </router-link>
          <router-link :to="`/users/${$route.params.userId}/tasks?tab=0`" custom v-slot="{ navigate, isActive }">
            <li :class="{ 'is-active': isActive }" @click="navigate"><a>タスク</a></li>
          </router-link>
          <router-link :to="`/users/${$route.params.userId}/blocks`" custom v-slot="{ navigate }">
            <li :class="{ 'is-active': /\/users\/\w+\/(blocks|mutes)/.test($route.path) }" @click="navigate"><a>ブロック/ミュート</a></li>
          </router-link>
        </ul>
      </div>

      <div class="is-absolute" style="right: 1rem">
        <router-link v-if="'detail' === lastDir" to="edit" custom v-slot="{ navigate }">
          <button class="button is-success is-inverted" @click="navigate">
            <span>編集</span>
          </button>
        </router-link>
        <button v-else-if="'tasks' === lastDir" class="button is-primary is-inverted" @click="isActiveModal = true">
          <span>新規作成</span>
        </button>
        <router-link v-else-if="['blocks', 'mutes'].includes(lastDir)" to="createBlock" custom v-slot="{ navigate }">
          <button class="button is-success is-inverted" @click="navigate">
            <span>新規作成</span>
          </button>
        </router-link>
      </div>
    </header>

    <NuxtChild v-if="isReady" class="scrollable-y is-flex is-flex-direction-column" />
  </main>

  <TaskCreateModal v-model="isActiveModal" />
</template>

<style lang="scss" scoped>
$header-height: 5rem;

header {
  height: $header-height;
  background: lightpink;
}
.scrollable-y {
  height: calc(100% - #{$header-height});
}
.tabs a {
  background: $white;
}
</style>

<style lang="scss" deep>
$header-height: 5rem;

.scrollable-y {
  height: calc(100% - #{$header-height});
}
</style>
