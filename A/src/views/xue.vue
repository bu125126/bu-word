<template>
    <div>
        <div class="box">学员管理</div>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    学员状态 
                        <el-select v-model="form" placeholder="请选择">
             <el-option label="禁用" value="0"></el-option>
           <el-option label="启用" value="1"></el-option>
                       </el-select>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    学生名称
                    <el-input v-model="key" placeholder="请输入学生关键字" style="width: 200px;" />
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    手机号
                    <el-input v-model="keysj" placeholder="请输入手机号" style="width: 200px;" />
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-button @click="xue">搜索 <i class="el-icon-search"></i> </el-button>
                    <el-button @click="chong">重置</el-button>
                </div>
            </el-col>
        </el-row>
        <div class="a">
            <el-button type="primary">新增学员</el-button>
            <el-button type="primary">批量导入</el-button>
            <el-button type="primary">批量导出</el-button>
            <el-button type="primary">查看报表</el-button>
        </div>
        <template>
            <el-table :data="tableData.slice((pageNum-1)*pageSize,pageNum*pageSize)" border style="width: 100%">
                <el-table-column fixed prop="date" width="50px">
                    <el-checkbox v-model="checked" />
                </el-table-column>

                <el-table-column prop="nickname" label="学生名称">
                    <template slot-scope="scope">
                        <el-image :src="scope.row.avatar" class="img"></el-image>
                        <span>{{ scope.row.nickname }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="mobile" label="手机号">
                </el-table-column>
                <el-table-column prop="status" label="状态">
                    <template slot-scope="scope">
                        <div v-if="scope.row.status == 1">启用</div>
                        <div v-else>禁用</div>
                    </template>
                </el-table-column>
                <el-table-column prop="created_at" label="创建时间" :formatter='dateFormat'>
                    
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="250">
                    <template>
                        <el-button type="text" size="small">详情</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                        <el-button type="text" size="small">禁用</el-button>
                        <el-button type="text" size="small">删除</el-button>
                        <el-button type="text" size="small">重置密码</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </template>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum"
            :page-sizes="[1, 3, 5, 7]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length">
        </el-pagination>
    </div>
</template>

<script>
import list from '../assets/list.json'
export default {
    data() {
        return {
            tableData: list,
            checked: false,
            key: '',
            keysj: '',
            pageNum:1,
            pageSize:10,
            form:{}
            
        };
    },
    
    methods: {
          dateFormat(row, column) {
                let date = new Date(parseInt(row.created_at) * 1000);
                let Y = date.getFullYear() + '-';
                let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) + '-' : date.getMonth() + 1 + '-';
                let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
                let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
                let m = date.getMinutes()  < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
                let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
                return Y + M + D + h + m + s;
            },
        chong() {
            this.tableData = list
        },
        xue() {
            let a = this.tableData.filter(item => {
                return item.nickname.includes(this.key)
            })
            this.tableData = a

            let b = this.tableData.filter(item => {
                return item.mobile.includes(this.keysj)
            })
            this.tableData = b

            let c = this.tableData.filter(item => {
                return item.status=this.form
            })
            this.tableData = c
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageNum = 1
            this.pageSize = val
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.pageNum=val
        },
    },

};
</script>

<style lang="scss" scoped>
.img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    vertical-align: middle;
}

.box {
    font-size: 18px;
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
}

.el-row {
    margin-top: 10px;
}

.a {
    margin: 20px 0px;
}
</style>