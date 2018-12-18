<template>
    <div>
        <el-container>
            <el-header>
                <el-button class="refresh" plain @click="readdir"><i class="el-icon-refresh" ></i>刷新</el-button>
                <el-button class="edit" plain @click="adddir"><i class="el-icon-edit" ></i>添加</el-button>
            </el-header>
            <el-main>
                <el-table
                        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize).filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                        stripe
                        style="width: 100%"
                >
                    <el-table-column
                            label="编号"
                            prop="idx">
                    </el-table-column>
                    <el-table-column
                            label="文件名"
                            prop="name">
                    </el-table-column>
                    <el-table-column
                            align="right">
                        <template slot="header" slot-scope="scope">
                            <el-input
                                    v-model="search"
                                    size="mini"
                                    placeholder="输入关键字搜索"/>
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
      created () {
        this.readdir()
      },
      methods: {
        readdir () {
          this.tableData = FileOperation.readdir('./static/docs')
          this.total = this.tableData.length
          this.pageSize = 5
          this.currentPage = 1
          this.search = ''
        },
        adddir () {

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
        }
      }
    }
</script>

<style scoped>
    .el-header el-button{
        font-size: 16px;
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
</style>