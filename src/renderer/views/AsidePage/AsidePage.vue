<template>
    <div>
        <el-menu>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>菜单</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">基本功能</template>
                    <el-menu-item index="1-1" @click="changeCurrentPage"><i class="el-icon-view"></i>表单查看</el-menu-item>
                    <el-menu-item index="1-2"><i class="el-icon-edit-outline"></i>新增表单</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-loading"></i>
                    <span>设置</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">系统功能</template>
                    <el-menu-item index="2-1"><i class="el-icon-news"></i>表单备份</el-menu-item>
                    <el-menu-item index="2-2"><i class="el-icon-setting"></i>系统设置</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
      name: 'AsidePage',
      methods: {
        changeCurrentPage () {
          this.$store.state.Pages.currentPage = 'MainPage'
        }
      }
    }
</script>

<style scoped>
    .el-menu,.el-menu-item{
        border: transparent;
    }
</style>