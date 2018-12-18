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
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
      name: 'AsidePage'
    }
</script>

<style scoped>
    .el-menu,.el-menu-item{
        border: transparent;
    }
</style>