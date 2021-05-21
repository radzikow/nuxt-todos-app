<template>
  <div class="content-wrapper container-fluid">
    <div class="row">
      <div class="col-12 col-sm-10 offset-sm-1 col-xl-8 offset-xl-2">
        <h1 class="title">Umów spotkanie</h1>
        <div class="content">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
  head() {
    return {
      title: "Schedule",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Schedule subpage in todos app"
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
