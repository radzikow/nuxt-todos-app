<template>
  <div class="content-wrapper container-fluid">
    <div class="row">
      <div class="contact-wrapper col-12 col-sm-10 offset-sm-1 col-xl-8 offset-xl-2">
        <h1 class="title">Kontakt</h1>
        <div class="content">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  head() {
    return {
      title: "Contact",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Contact subpage in todos app",
        },
      ],
    };
  }
}
</script>

<style scoped lang="scss">
</style>
