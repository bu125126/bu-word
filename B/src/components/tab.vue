<template>
    <div>
        <template>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane :label="`未读消息(${unread.length})`" name="first">
                    <div v-for="(item, index) in unread" :key="index">
                        <el-row :gutter="24">
                            <el-col :span="16">
                                <div class="grid-content bg-purple">{{ item.title }}</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="grid-content bg-purple">{{ item.date }}</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="grid-content bg-purple">
                                    <el-button @click="yidu(item)">标为已读</el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <el-button type="primary" @click="quan">全部标为已读</el-button>
                </el-tab-pane>
                <el-tab-pane :label="`已读消息(${Read.length})`" name="second">
                    <div v-for="(item, index) in Read" :key="index">
                        <el-row :gutter="24">
                            <el-col :span="14">
                                <div class="grid-content bg-purple">{{ item.title }}</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="grid-content bg-purple">{{ item.date }}</div>
                            </el-col>
                            <el-col :span="2">
                                <div class="grid-content bg-purple">
                                    <el-button type="danger" @click="del(item)">删除</el-button>
                                </div>
                            </el-col>
                            <el-col :span="2">
                                <div class="grid-content bg-purple">
                                    <el-button type="info" @click="hywd(item)">还原未读</el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <el-button type="danger" @click="delAll">删除全部</el-button>
                </el-tab-pane>
                <el-tab-pane :label="`回收站 (${recycle.length})`" name="third">
                    <div v-for="(item, index) in recycle" :key="index">
                        <el-row :gutter="24">
                            <el-col :span="14">
                                <div class="grid-content bg-purple">{{ item.title }}</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="grid-content bg-purple">{{ item.date }}</div>
                            </el-col>
                            <el-col :span="4">
                                <div class="grid-content bg-purple">
                                    <el-button @click="huan(item)">还原</el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <el-button type="danger" @click="qk">清空回收站</el-button>
                </el-tab-pane>
            </el-tabs>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['unread', 'Read', 'recycle'])
    },
    data() {
        return {
            activeName: "first",
        };
    },
    methods: {
        handleClick() {
            console.log();
        },
        yidu(item) {
            this.$store.commit('yidu', item,)
        },
        quan() {
            this.$store.commit('quan')
        },
        del(item) {
            this.$store.commit('del', item)
        },
        delAll() {
            this.$store.commit('delAll')
        },
        hywd(item) {
            this.$store.commit('hywd', item)
        },
        huan(item) {
            this.$store.commit('huan', item)
        },
        qk() {
            this.$store.commit('qk')
        }
    },
};
</script>

<style lang="scss" scoped>
.el-row {
    margin-bottom: 20px;
    border-bottom: 1px solid gray;
    padding-bottom: 5px;
}
</style>