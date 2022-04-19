<script lang="ts" setup>
/** Init **/
</script>

<template>
  <div id="users-detail-mutes">
    <div>mutes</div>

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
