<template>
    <div>
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
                <el-button type="primary" @click="showDialog(0)">新增菜单</el-button>
            </el-form-item>
        </el-form>

        <!-- table start -->
            <table-tree :columns="columns" :tree-structure="true" :data-source="menuData"></table-tree>
        <!-- table end -->

        <!-- pagination start -->
        <el-pagination 
            @current-change="initList" 
            layout="total, prev, pager, next, jumper" 
            :total="searchParamas.total" 
            :page-size="searchParamas.pageSize">
        </el-pagination>
        <!-- pagination end -->
        
        <!-- dialog start -->
        <el-dialog 
            :title="title[titleStatus]"  
            v-if="dialogStatus" 
            :visible.sync="dialogStatus"
            center
            style="width:1000px;margin: 0 auto">
            <add-form :btn-type="titleStatus" :menu="menuData" @refresh="refresh"></add-form>
        </el-dialog>
        <!-- dialog end -->
    </div>
</template>

<script>
    import addForm from './addForm'
    import tableTree from './tableTree'
    export default {
        data() {
            return {
                columns: [
                    {
                        text: '菜单',
                        dataIndex: 'menuName'
                    },
                    {
                        text: '类型',
                        dataIndex: 'menuType'
                    },
                    {
                        text: '路径',
                        dataIndex: 'request'
                    },
                    {
                        text: '权限',
                        dataIndex: 'permission'
                    },
                    {
                        text: '备注',
                        dataIndex: 'remark'
                    }
                ],
                menuData: [],
                searchParamas: {
                    total: 0,
                    pageNum: 1,
                    pageSize: 10
                },
                dialogStatus: false,
                title: ['新增菜单', '修改菜单'],
                titleStatus: 0,
                id: '',
                defaultProps: {
                    children: 'menuBeans',
                    label: 'menuName'
                }
            }
        },
        computed: {
            menuist(){
                
            }
        },
        methods: {
            initList(currentPage) {
                this.searchParamas.pageNum = currentPage || this.searchParamas.pageNum
                this.$apis.getMenuResult(this.searchParamas).then(res=> {
                    if(res.code ===1) {
                        this.menuData = res.menus
                        this.searchParamas.total = res.total
                    }
                })
            },
            showDialog(status, row) {
                this.dialogStatus = true
                this.titleStatus = status
                if(row) {
                    console.log(row)
                    this.id = row.id
                }
            },
            deleteRow(row) {

            },
            refresh() {
                this.initList()
                this.dialogStatus= false
            }
        },
        components: {
            addForm,
            tableTree
        },
        mounted() {
            this.initList()
        }
    }
</script>

<style lang="less" scoped>
</style>