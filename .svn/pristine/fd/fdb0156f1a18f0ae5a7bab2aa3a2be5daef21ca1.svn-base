<template>

</template>
<script>

import commonHe from '../../components/commonHe'
export default {
    data(){
        return{
        //tab切换方法默认第1个
        activeName: 'first',
        fits: ['这里是昵称'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        input1: '',
        select: '',
        value: '',
        form: { region: '' },
        // 图文下拉：
        options:[],
        status:[],
        selectOption:'',
        selectStatus:'',
        // 图文搜索框：
        searchTitle:'',
        // 图文操作按钮：
        buttons:"",
        //表格
        tableData: [{
            name: '王小虎',
            leixing:'机构',
            age: '20',
            guanzhu:'李四等3人',
            laiyuan:'通过网上注册',
            date: '2019-05-02',
          }, {
            name: '张三',
            leixing:'机构',
            age: '20',
            guanzhu:'李四等3人',
            laiyuan:'通过网上注册',
            date: '2019-05-02',
          }],
        tableData7:
        [
        {
         name:'儿科专家',
         num1:'8',
         date:'2018-12-23 12:23:12',
        },
        {
         name:'名医医生',
         num1:'6',
         date:'2018-12-23 12:23:12',
        }
        ],
        formInline: {
          user: '',
          region: ''
        },
        // 分页：
        total:5,
        currentPage:1,// 当前页码
        pageSize:5,

        };
    },
    methods: {
                // 分页：
        handleSizeChange(val){
           console.log("长度改变:"+val)
        },
    //   翻页函数：
        handleCurrentChange(val){
            var searchList={
            "newsStyle": 1,
            "pageNum": val,
            "pageSize": 5,
            "sourceType":this.selectOption,
            "status":this.selectStatus,
            "title":this.searchTitle
        }
        mediaTuwen(searchList).then(data=>{
            // console.log("医院自媒体",data)
            let tableData = data.data;
            tableData.forEach(item=>{
                item.isHideBool = item.isHide===0?true:false;
            })
            this.tableData=tableData
            // console.log("this.table",this.tableData)
        })  
        },  
        handleClick(tab, event) {
            console.log(tab, event);
        },
        onSubmit() {
            console.log('submit!');
        },
        active_text(newsId,isHide){
        //   console.log(a,b)
        var status=1;
        if(isHide==true){
            status=0;
        }
        var hideList={
            "isHide": status,
            "newsId": newsId
        }
        hide(hideList).then(data=>{
            console.log("显隐操作",data)
            if(data.rtnCode==1){
                // this.isHide=!isHide
                this.$message({
                    message: '操作成功',
                    type: 'success'
                });
            }
        })

      },
      goSearch(){
          console.log(this.selectOption,this.selectStatus)

        var searchList={
            "newsStyle": 1,
            "pageNum": 1,
            "pageSize": 5,
            "sourceType":this.selectOption,
            "status":this.selectStatus,
            "title":this.searchTitle
        }
        mediaTuwen(searchList).then(data=>{
            this.total=data.total
            console.log("医院自媒体数据",data)
            let tableData = data.data;
            tableData.forEach(item=>{
                item.isHideBool = item.isHide===0?true:false;
            })
            this.tableData=tableData
            // console.log("this.table",this.tableData)
        })  
    },
    //   按钮操作：
    operation(item,list){
        // console.log(item,list)
        if(item=="撤回"){
            this.$confirm('此操作将撤回该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            var recallList={
                "newsId": list.newsId,
                "status": 0
            }
            reCall(recallList).then(data=>{
                console.log(data)
                if(data.rtnCode==1){
                    this.$message({
                    type: 'success',
                    message: '撤回成功!'
                });

                }
            })
        }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消撤回'
            });          
        });    
             
        }else if(item=="下线"){
            this.$confirm('此操作将下线该文章, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                var recallList={
                    "newsId": list.newsId,
                    "status": 4
                }
                reCall(recallList).then(data=>{
                    console.log(data)
                    if(data.rtnCode==1){
                        this.$message({
                        type: 'success',
                        message: '操作成功!'
                    });

                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消下线'
                });          
            }); 
        }else if(item=="删除"){
            this.$confirm('此操作将删除该文章, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                var recallList={
                    "newsId": list.newsId,
                }
                newsDelete(recallList).then(data=>{
                    console.log(data)
                    if(data.rtnCode==1){
                        this.$message({
                        type: 'success',
                        message: '操作成功!'
                    });

                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            }); 
        }else if(item=="查看"){
            localStorage.setItem('newsId', list.newsId);
            this.$router.push('/mediaShow')
        }else if(item=="编辑"){
            localStorage.setItem('newsId', list.newsId);
            this.$router.push('/edit')
        }
    }
    },
    components:{
        commonHe,
        
    },
    mounted(){
        let w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //浏览器宽度
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
        document.getElementsByClassName("style-box")[0].style.height = (h - 68) + "px";
        document.getElementsByClassName("style-box")[0].style.width = (w - 200) + "px";
        document.getElementById("box").style.width = (w - 280) + "px";
        document.getElementById("box").style.height = (h - 120) + "px";
    },
    // created(){
    //     // 图文：
    //     var searchList={
    //         "newsStyle": 1,
    //         "pageNum": 1,
    //         "pageSize": 5,
    //     }
    //     mediaTuwen(searchList).then(data=>{
    //         this.total=data.total
    //         console.log("医院自媒体数据",data)
    //         let tableData = data.data;
    //         tableData.forEach(item=>{
    //             item.isHideBool = item.isHide===0?true:false;
    //         })
    //         this.tableData=tableData
    //     })  
    //     status().then(data=>{
    //         this.options=data.data.sourceList
    //         this.status=data.data.statusList
            
    //     })
    // },



    updated(){

        
    }

}
</script>

<style lang="scss">
 @import '../../styles/hxmstyle.css';
 $left-width:300px;
.style-box{
    background:rgba(245,245,245,1);
    position: absolute;
    left:200px;
    top:68px;
    overflow-y: auto;
}
.xjks-k .el-dialog__footer{background:#fff; width:100%; float:left;}
.xjks-k .dialog-footer{ margin:auto; width:260px;   padding-left: 40px;}

 </style>