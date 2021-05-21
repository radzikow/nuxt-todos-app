<template>
  <div class="content-wrapper container-fluid">
    <div class="row">
      <div class="col-12 col-sm-10 offset-sm-1 col-xl-8 offset-xl-2">
        <h1 class="title">Strona główna</h1>
        <div class="content">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: 'Todos app',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Welcome to the todos app'
        }
      ]
    }
  }
})
</script>

<style scoped lang="scss">
</style>
