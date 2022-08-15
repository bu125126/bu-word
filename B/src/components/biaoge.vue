<template>
    <div>
        <div class="ping">
            <el-button class="el-icon-delete" type="primary">删除选中</el-button>
            <template>
                <el-select v-model="form" placeholder="地址" style="width:150px; margin-left: 30px;">
                    <el-option label="广东省" value="广东省"></el-option>
                    <el-option label="湖南省" value="湖南省"></el-option>
                    <el-option label="福建省" value="福建省"></el-option>
                </el-select>
            </template>
            <el-input placeholder="用户名" v-model="key" style="width:300px; margin-left: 30px;" @blur="ss">
            </el-input>
        </div>
        <el-table :data="tableData.slice((pageNum - 1) * pageSize, pageNum * pageSize)" border style="width: 100%">
            <el-table-column prop="" width="50" type="selection">
            </el-table-column>
            <el-table-column prop="id" label="ID" width="60">
            </el-table-column>
            <el-table-column prop="name" label="用户名">
            </el-table-column>
            <el-table-column prop="money" label="账号余额">
            </el-table-column>
            <el-table-column prop="thumb" label="头像(查看大图)">
                <template slot-scope="scope">
                    <viewer :images="images">
                        <img :src="scope.row.thumb" class="img" >
                    </viewer>
                </template>
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column prop="state" label="状态">
                <template slot-scope="scope">
                    <el-tag type="success" v-if="scope.row.state == '成功'">成功</el-tag>
                    <el-tag type="danger" v-else>失败</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="注册时间">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="bj(scope.row)"><i class="el-icon-edit"></i>编辑
                    </el-button>
                    <el-button type="text" size="small" @click="del(scope.row.id)"> <i class="el-icon-delete"></i>删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 编辑 -->
        <el-dialog title="编辑" :visible.sync="dialogFormVisible" width="500px">
            <el-form :model="form">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input v-model="form.address" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="edit">确 定</el-button>
            </div>
        </el-dialog>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum"
            :page-sizes="[1, 3, 5, 7]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length">
        </el-pagination>
    </div>
</template>

<script>
import data from '../assets/table.json'
export default {
    name:"images",
    data() {
        return {
            form: '',
            tableData: data.list,
            checked: false,
            key: "",
            dialogFormVisible: false,
            form: {
                name: "",
                address: ""
            },
            formLabelWidth: "80px",
            id: 0,
            pageSize: 5,
            pageNum: 1,
           images:[]
        };
    },

    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageNum - 1
            this.pageSize = val
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.pageNum = val
        },
        ss() {
            let a = this.tableData.filter(item => {
                return item.name.includes(this.key)
            })
            this.tableData = a

            let b = this.tableData.filter(item => {
                return item.address.includes(this.form)
            })
            this.tableData = b
        },
        bj(row) {
            console.log(row);
            this.dialogFormVisible = true
            this.form = row
            this.id = row.id
        },
        edit(row) {
            for (let i = 0; i < this.tableData.length; i++) {
                if (this.id == this.tableData[i].id) {
                    this.tableData[i].name = this.form.name
                    this.tableData[i].address = this.form.address
                }
            }
            console.log(row, '123');
            this.dialogFormVisible = false
        },
        del(id) {
            console.log(id);
            this.tableData.splice(id, 1)
        }
    },
};
</script>

<style lang="scss" scoped>
.img {
    height: 40px;
}
</style>