<template>
    <div>
        <el-container>
        <el-header style="height: 24px">
            <el-button @click="changeCurrentPage('MainPage')"  type="primary">返回</el-button>
        </el-header>
        <el-main>
            <div class="text-center">{{changeDetail}}</div>
            <div class="table-list">
                <table border="1" cellspacing="0">
                    <tr>
                        <td colspan="12">{{detail[0][1]}}</td>
                        <td colspan="3">{{detail[1][1]}}</td>
                    </tr>
                    <tr>
                        <td colspan="2">{{detail[2][0]}}</td>
                        <td colspan="4">{{detail[2][1]}}</td>
                        <td colspan="1">{{detail[3][0]}}</td>
                        <td colspan="4">{{detail[3][1]}}</td>
                        <td colspan="1">{{detail[4][0]}}</td>
                        <td colspan="3">{{detail[4][1]}}</td>
                    </tr>
                    <tr>
                        <td colspan="12">{{detail[0][1]}}</td>
                        <td colspan="3">{{detail[1][1]}}</td>
                    </tr>

                </table>
            </div>
        </el-main>
        </el-container>
    </div>
</template>

<script>
import ExcleOperation from '../../utils/FileSystem/ExcleOperation'
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
      const detail = ExcleOperation.readExcle(val)
      this.detail = JSON.parse(detail)[0].data
      // ExcleOperation.writeJson(detail, 'olGyJson')
      console.error(this.detail)
    },
    changeCurrentPage (val) {
      this.$store.dispatch('CHANGE_INDEX_PAGE_ACTIONS', val)
    }
  }
}
</script>

<style scoped lang="scss">
    .text-center{
        text-align: center;
        font-size: 18px;
        font-weight: bold;
    }
    .table-list{
        font-size: 14px;
        table{
            width: 800px;
            tr{
                td{
                    width: 42px;
                }
            }
        }
    }
</style>