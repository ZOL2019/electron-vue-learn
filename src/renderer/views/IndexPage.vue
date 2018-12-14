<template>
    <el-container>
        <el-header>
            <el-row>
                <el-col :span="4"><div class="logo">ZOL2018</div></el-col>
                <el-col :span="16"><div class="title">自定义报表工厂</div></el-col>
                <el-col :span="4"><div class="menu-title">用户：我自己个儿</div></el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>{{showPage}}<!--<component :is="showPage"/>--></el-main>
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

<style scoped lang="scss">
    $background_color: #7eb0ff;
    .el-header{
        background-color: $background_color;
    }
    .logo{
        text-align: center;
    }
    .title{
        text-align: center;
    }
    .menu-title{
        text-align: left;
    }
</style>