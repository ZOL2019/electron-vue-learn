<template>
    <el-container>
        <el-header>
            <el-row>
                <el-col :span="4">index-page</el-col>
                <el-col :span="16">Table-Operation</el-col>
                <el-col :span="4"><span>{{showPage}}</span></el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
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