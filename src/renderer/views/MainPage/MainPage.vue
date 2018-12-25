<template>
    <div>
        <el-container>
            <el-header style="height: 24px">
                <div class="list-title">表单列表查询</div>
            </el-header>
            <el-main>
                <div>
                    <el-input placeholder="请输入关键词" v-model="search">
                    <el-button slot="prepend" icon="el-icon-refresh" @click="readdir"></el-button>
                    <el-button slot="append" icon="el-icon-search" @click="searchdir"></el-button>
                    </el-input>
                </div>
                <el-table :data="searchData.slice((currentPage-1)*pageSize,currentPage*pageSize)" stripe style="width: 100%">
                    <el-table-column label="编号" type="index"width="100px">
                    </el-table-column>
                    <el-table-column label="文件名">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px" v-html="dataFormat(scope.row.name)"></span>
                        </template>
                    </el-table-column>
                    <el-table-column width="200px">
                        <template slot="header" slot-scope="scope">
                            <label>功能操作</label>
                        </template>
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                            <el-button
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[5, 10]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total"
                        background
                >
                </el-pagination>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import FileOperation from '../../utils/FileSystem/FileOperation'
    export default {
      name: 'MainPage',
      data () {
        return {
          total: 0, // 默认数据总数
          pageSize: 5, // 每页的数据条数
          currentPage: 1, // 默认开始页面
          tableData: [],
          search: ''
        }
      },
      computed: {
        searchData () {
          const search = this.search
          let data = []
          if (search) {
            data = FileOperation.readdir('./static/docs').filter(data => {
              return Object.keys(data).some(key => {
                return String(data[key]).toLowerCase().indexOf(search) > -1
              })
            })
            this.tableData = data
          }
          this.total = this.tableData.length
          this.currentPage = 1
          return this.tableData
        }
      },
      watch: {
      },
      created () {
        this.readdir()
      },
      methods: {
        dataFormat (val) {
          if (val.indexOf(this.search) !== -1 && this.search !== '') {
            return val.replace(this.search, '<span style="color:red">' + this.search + '</span>')
          } else {
            return val
          }
        },
        readdir () {
          this.tableData = FileOperation.readdir('./static/docs')
          this.total = this.tableData.length
          this.pageSize = 5
          this.currentPage = 1
          this.search = ''
        },
        searchdir () {
          const search = this.search
          let data = []
          if (search) {
            data = FileOperation.readdir('./static/docs').filter(data => {
              return Object.keys(data).some(key => {
                return String(data[key]).toLowerCase().indexOf(search) > -1
              })
            })
            this.tableData = data
          }
          this.total = this.tableData.length
          this.currentPage = 1
          return this.tableData
        },
        handleEdit (index, row) {
          console.log(index, row)
        },
        handleDelete (index, row) {
          console.log(index, row)
        },
        handleSizeChange: function (val) {
          this.pageSize = val
        },
        handleCurrentChange: function (val) {
          this.currentPage = val
        },
        message (message, type) {
          this.$message({
            showClose: true,
            message: message,
            type: type
          })
        }
      }
    }
</script>

<style scoped>
    .el-header{
        font-size: 18px;
    }
    .refresh{
        color: #11a5ff;
    }
    .edit{
        color: #ff3ee7;
    }
    .el-pagination{
        text-align: center;
    }
    .list-title{
        color: #11a5ff;
        text-align: left;
        font-weight: bold;
    }
</style>