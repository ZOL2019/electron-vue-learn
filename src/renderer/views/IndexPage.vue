<template>
    <div>
        index-page
    <span>{{showPage}}</span>
    </div>
</template>

<script>
    export default {
      name: 'IndexPage',
      computed: {
        showPage () {
          return this.$store.state.Pages.currentPage
        }
      }
    }
</script>

<style scoped>

</style>