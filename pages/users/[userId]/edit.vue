<script lang="ts" setup>
import { computed, inject, reactive } from '#imports'
import deepcopy from 'deepcopy'
import { UserIK } from '~/useCaces/injection'

const user = reactive(deepcopy(inject(UserIK)!))

const isValid = computed(() => user.name && user.gender)
</script>

<template>
  <div id="edit-user">
    <header class="p-4">
      <p class="has-text-weight-bold">ユーザ編集</p>
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
        <button class="button is-success" :disabled="!isValid">
          <span>保存</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
