<script lang="ts" setup>
import { computed, reactive } from '#imports'
import { User } from '~/type'

const user = reactive<Omit<User, 'id'>>({
  name: '',
  gender: 'male',
})

const isValid = computed(() => user.name && user.gender)
</script>

<template>
  <div id="create-user">
    <header class="p-4">
      <p class="has-text-weight-bold">ユーザ作成</p>
    </header>
    <div class="px-4" style="width: 32rem;">
      <div class="field">
        <label class="label">User Name</label>
        <input v-model="user.name" type="text" class="input">
      </div>
      <div class="field">
        <label class="label">User Name</label>
        <div class="control">
          <label class="radio">
            <input v-model="user.gender" value="male" type="radio">
            <span>男性</span>
          </label>
          <label class="radio">
            <input v-model="user.gender" value="female" type="radio">
            <span>女性</span>
          </label>
        </div>
      </div>
      <div class="buttons">
        <button class="button is-light" @click="$router.back">
          <span>戻る</span>
        </button>
        <button class="button is-primary" :disabled="!isValid">
          <span>作成</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
