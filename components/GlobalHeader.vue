<template>
  <header class="global-header">
    <nav class="navbar">
      <div class="navbar-brand">
        <a href="/" class="logo navbar-item px-6">ロゴ</a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Link AAA
          </a>
        </div>
        <div class="navbar-end">
          <a class="navbar-item">
            Link BBB
          </a>
          <div class="navbar-item">
            <button class="button">Button AAA</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
.global-header {
  height: $global-header-height;
}
.navbar {
  height: 100%;
  background: gainsboro;
}
.item {
  padding: 0.5rem 1rem;
}
</style>
