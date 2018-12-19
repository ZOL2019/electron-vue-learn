<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item>
                <label>基本信息</label>
                <el-form-item>
                    <el-col :span="12">
                        <el-form-item label="表单名称" prop="nameForm" label-width="80px">
                            <el-input v-model="ruleForm.nameForm" clearable placeholder="请输入表单名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="表单编号" prop="nameNo" label-width="80px">
                            <el-input v-model="ruleForm.nameNo" :disabled="true" clearable placeholder="请输入自定义编号"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-col :span="8">
                        <el-form-item label="购货单位" prop="purchaseUnits" label-width="80px">
                            <el-input v-model="ruleForm.purchaseUnits" clearable placeholder="请输入表单名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="仓库" prop="warehouseName" label-width="80px">
                            <el-input v-model="ruleForm.warehouseName" clearable placeholder="请输入仓库"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="日期" prop="dateForm" label-width="80px">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.dateForm" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-col :span="12">
                        <el-form-item label="计划数量总和" prop="tmpFlag" label-width="100px">
                            <el-input v-model="ruleForm.tmpFlag" clearable placeholder="计划数量总和"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="金额总计" prop="tmpFlag" label-width="100px">
                            <el-input v-model="ruleForm.tmpFlag" clearable placeholder="金额总计"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-form-item label="备注信息" prop="tmpFlag" label-width="100px">
                        <el-input v-model="ruleForm.tmpFlag" clearable placeholder="备注信息"></el-input>
                    </el-form-item>
                </el-form-item>
                <el-form-item>
                    <el-col :span="12">
                        <el-form-item label="制单人" prop="tmpFlag" label-width="100px">
                            <el-input v-model="ruleForm.tmpFlag" clearable placeholder="制单人"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="提货人电话" prop="tmpFlag" label-width="100px">
                            <el-input v-model="ruleForm.tmpFlag" clearable placeholder="提货人电话"></el-input>
                        </el-form-item>
                    </el-col>
                </el-form-item>
            </el-form-item>
            <el-form-item>
                <label>详细信息</label>
                <el-form-item v-for="(item, index) in ruleForm.detailList">
                    <el-form-item>
                        <el-col :span="2"><label>序号：{{index + 1}}</label></el-col>
                        <el-col :span="22" style="text-align: right"><el-button @click="removeListItem(item)">删除</el-button></el-col>
                    </el-form-item>
                    <hr class="hr-top"/>
                    <el-form-item>
                        <el-col :span="6">
                            <el-form-item label="商品名称" prop="tmpFlag" label-width="80px">
                                <el-input v-model="ruleForm.tmpFlag" clearable placeholder="商品名称"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="规格" prop="tmpFlag" label-width="80px">
                                <el-input v-model="ruleForm.tmpFlag" clearable placeholder="规格"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="产地" prop="tmpFlag" label-width="80px">
                                <el-input v-model="ruleForm.tmpFlag" clearable placeholder="产地"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="单位" prop="tmpFlag" label-width="80px">
                                <el-input v-model="ruleForm.tmpFlag" clearable placeholder="单位"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item>
                        <el-col :span="6">
                            <el-form-item label="计划数量" prop="tmpFlag" label-width="80px">
                                <el-input v-model="ruleForm.tmpFlag" clearable placeholder="计划数量"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="实发数量" prop="tmpFlag" label-width="80px">
                                <el-input v-model="ruleForm.tmpFlag" clearable placeholder="实发数量"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="单价" prop="tmpFlag" label-width="80px">
                                <el-input v-model="ruleForm.tmpFlag" clearable placeholder="单价"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="金额" prop="tmpFlag" label-width="80px">
                                <el-input v-model="ruleForm.tmpFlag" clearable placeholder="金额"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <hr class="hr-bottom" />
                </el-form-item>
            </el-form-item>
            <el-form-item>
                <el-col :span="12">
                    <el-button @click="addListItem">新增明细</el-button>
                </el-col>
                <el-col :span="3">
                    <el-button @click=""><i class="el-icon-view"></i>预览</el-button>
                </el-col>
                <el-col :span="3">
                    <el-button @click=""><i class="el-icon-upload"></i>保存</el-button>
                </el-col>
                <el-col :span="3">
                    <el-button @click=""><i class="el-icon-printer"></i>打印</el-button>
                </el-col>
                <el-col :span="3">
                    <el-button @click=""><i class="el-icon-download"></i>下载</el-button>
                </el-col>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
      name: 'NewPage',
      data () {
        return {
          ruleForm: {
            nameForm: '重庆兼容商贸有限公司提货单',
            nameNo: '201812120001',
            purchaseUnits: '重庆XX有限公司',
            warehouseName: '半山B',
            dateForm: new Date(),
            detailList: [{
              value: ''
            }],
            tmpFlag: 'tmp'
          },
          rules: {
            nameForm: [
              { required: true, message: '例如：重庆兼容商贸有限公司提货单', trigger: 'blur' },
              { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
            ],
            nameNo: [
              { required: false, message: '自动生成编号', trigger: 'blur' }
            ],
            dateForm: [
              { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ]
          }
        }
      },
      methods: {
        removeListItem (item) {
          let index = this.ruleForm.detailList.indexOf(item)
          if (index > 0) {
            this.ruleForm.detailList.splice(index, 1)
          } else {
            if (index === 0) {
              this.$message({
                showClose: true,
                message: '表单明细至少保留1条！',
                type: 'warning'
              })
            }
          }
        },
        addListItem () {
          this.ruleForm.detailList.push({
            value: ''
          })
        }
      }
    }
</script>

<style scoped>
    .el-form-item{
        margin-top: 5px;
    }
    .hr-top{
        border: 1px dotted #eee;
    }
    .hr-bottom{
        border: 1px dotted #eee;
    }
</style>