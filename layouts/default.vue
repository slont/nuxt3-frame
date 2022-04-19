<template>
  <div id="app">
    <GlobalHeader />
    <SideBar />
    <NuxtChild />
  </div>
</template>

<script lang="ts">
</script>

<style lang="scss" deep>
#app {
  > main {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
}
</style>

<style lang="scss" scoped>
#app {
  display: grid;
  grid-template-rows: $global-header-height 1fr;
  grid-template-columns: 150px 1fr;
  height: 100%;

  .global-header {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }
  .side-bar {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
}
</style>
