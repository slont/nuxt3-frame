<template>
  <nav class="side-bar menu">
    <ul class="menu-list p-3">
      <li>
        <nuxt-link to="/users" :class="{ 'is-active': $route.path.startsWith('/users') }">
          ユーザ
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/sections" :class="{ 'is-active': $route.path.startsWith('/sections') }">
          セクション
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
.side-bar {
  background: lightgreen;
  font-weight: bold;
}
</style>
