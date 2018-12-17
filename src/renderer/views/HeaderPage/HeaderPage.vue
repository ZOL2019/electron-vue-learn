<template>
    <div>
        <el-row>
            <el-col :span="4"><div class="logo">ZOL2018</div></el-col>
            <el-col :span="16"><div class="title">自定义报表工厂</div></el-col>
            <el-col :span="4"><div class="menu-title">用户：我自己个儿</div></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
      name: 'HeaderPage'
    }
</script>

<style scoped>
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