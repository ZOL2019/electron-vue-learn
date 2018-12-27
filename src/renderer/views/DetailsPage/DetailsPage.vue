<template>
    <div>
        <el-container>
        <el-header style="height: 24px">
            <el-button @click="changeCurrentPage('MainPage')"  type="primary">返回</el-button>
        </el-header>
        <el-main>
            <div class="text-center">{{changeDetail}}</div>
        </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
  name: 'DetailsPage',
  data () {
    return {
      detail: []
    }
  },
  computed: {
    changeDetail () {
      const name = this.$store.state.Details.detail.name
      this.getDetail(name)
      return name
    }
  },
  created () {

  },
  watch: {
  },
  methods: {
    getDetail (val) {
      this.detail.push(val)
      console.error(this.detail)
    },
    changeCurrentPage (val) {
      this.$store.dispatch('CHANGE_INDEX_PAGE_ACTIONS', val)
    }
  }
}
</script>

<style scoped>
    .text-center{
        text-align: center;
        font-size: 18px;
        font-weight: bold;
    }
</style>