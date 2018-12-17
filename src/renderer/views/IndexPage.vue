<template>
    <el-container>
        <el-header>
            <header-page/>
        </el-header>
        <el-container>
            <el-aside width="200px"><aside-page/></el-aside>
            <el-main><component :is="currentPage"/></el-main>
        </el-container>
    </el-container>
</template>

<script>
    import HeaderPage from './HeaderPage/HeaderPage'
    import MainPage from './MainPage/MainPage'
    import AsidePage from './AsidePage/AsidePage'

    import FileOperation from '../utils/FileSystem/FileOperation'

    export default {
      name: 'IndexPage',
      components: { MainPage, AsidePage, HeaderPage },
      data () {
        return {
          currentPage: 'MainPage'
        }
      },
      computed: {
        changeCurrentPage () {
          return this.$store.state.Pages.currentPage
        }
      },
      created () {
        this.readdir()
      },
      methods: {
        readdir () {
          FileOperation.access()
          let data = []
          data = FileOperation.readdir()
          console.log(data)
        }
      },
      watch: {
        changeCurrentPage (pageName) {
          this.currentPage = pageName
        }
      }
    }
</script>

<style scoped lang="scss">
    $background_color: #7eb0ff;
    .el-header{
        background-color: $background_color;
    }
</style>