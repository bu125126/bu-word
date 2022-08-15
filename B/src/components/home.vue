<template>
    <div>
        <el-container>
            <el-header>
                <i class="el-icon-s-unfold"></i>
                后台管理系统
                <div class="el-icon-rank" @click="fullScreen()"></div>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        admin<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#fff" text-color="#000"
                        active-text-color="#ffd04b" router>
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-c-scale-to-original"></i>
                                <span>图书管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-edit-outline"></i>
                                <span>后台管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-s-flag"></i>
                                <span>国际化</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-menu-item index="biaoge">
                            <i class="el-icon-s-grid"></i>
                            <span slot="title">基础表格</span>
                        </el-menu-item>
                        <el-menu-item index="tab">
                            <i class="el-icon-s-promotion"></i>
                            <span slot="title">tab选项卡</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import screenfull from "screenfull";
export default {
    data() {
        return {
            fullscreen: false
        };
    },

    mounted() {

    },

    methods: {
        // 点击全屏展示
        fullScreen() {
            if (!screenfull.isEnabled) {
                this.$message({
                    message: 'you browser can not work',
                    type: 'warning'
                })
                return false
            }
            screenfull.toggle()
        },

    },
};
</script>

<style lang="scss" scoped>
.el-header {
    background-color: #545c64;
    line-height: 60px;
    font-size: 25px;
    color: white;
    font-weight: bold;
    position: relative;

    .el-icon-rank {
        position: absolute;
        top: 15px;
        right: 200px;
        transform: rotate(45deg);
    }

    .el-dropdown {
        color: white;
        position: absolute;
        top: 0px;
        right: 100px;
    }
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

</style>