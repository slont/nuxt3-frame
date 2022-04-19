<script lang="ts" setup>
/** Init **/
</script>

<template>
  <main id="users-detail">
    <header class="is-flex is-align-items-center is-justify-content-center">
      <div class="tabs is-toggle is-toggle-rounded">
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
    </header>

    <NuxtChild class="scrollable-y is-flex is-flex-direction-column" />
  </main>
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
</style>

<style lang="scss" deep>
$header-height: 5rem;

.scrollable-y {
  height: calc(100% - #{$header-height});
}
</style>
