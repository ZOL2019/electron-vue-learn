<template>
    <el-container>
        <el-header>
            <header-page/>
        </el-header>
        <el-container>
            <el-aside><aside-page/></el-aside>
            <el-main><component :is="currentPage"/></el-main>
        </el-container>
    </el-container>
</template>

<script>
    import HeaderPage from './HeaderPage/HeaderPage'
    import MainPage from './MainPage/MainPage'
    import AsidePage from './AsidePage/AsidePage'
    import NewPage from './NewPage/NewPage'
    import BackPage from './BackPage/BackPage'
    import SettingPage from './SettingPage/SettingPage'

    export default {
      name: 'IndexPage',
      components: { MainPage, AsidePage, HeaderPage, NewPage, BackPage, SettingPage },
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
      },
      methods: {
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
    $content_height: 564px;
    $content_width: 840px;
    $menu_width: 240px;
    $border_style: 1px solid #eee;
    .el-header{
        background-color: $background_color;
    }
    .el-aside{
        max-width: $menu_width;
        height: $content_height;
        border-right: $border_style;
        border-bottom: $border_style;
    }
    .el-main{
        min-width: $content_width;
        height: $content_height;
        border-bottom: $border_style;
    }
</style>