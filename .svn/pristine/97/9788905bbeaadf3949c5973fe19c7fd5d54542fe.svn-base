<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="zhenge">
                    <div class="qfgl-ym">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="群发记录" name="first">
                                <div class="hxmjcbiao">
                                    <el-table  :data="tableData" style="width: 100%">
                                        <el-table-column label="文章标题">
                                            <div class="tdtuwen">
                                                <div class="tdtuwen-tu"><img src="../../assets/images/0.jpg"/></div>
                                                <div class="tdtuwen-wen">
                                                    <h2>国务院任免翁铁慧、郑富芝国务院任免翁铁慧</h2>
                                                    <div class="fbrq"><span>发布日期:</span>2019-03-01 08:45:01</div>
                                                    <div class="ydl"><span>阅读量:</span>0</div>
                                                    <div class="fbpt">
                                                        <span>发布平台：</span>
                                                        <img src="../../assets/images/logo.png"/>
                                                        <img src="../../assets/images/关注.png"/>
                                                        <img src="../../assets/images/员工.png"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-table-column>

                                    </el-table>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="第三方平台账号" name="second">
                                <div class="buju">
                                    <el-row :gutter="20">
                                        <el-col :span="8">
                                        <div class="grid-content">
                                            <div class="dsf-t"><span>微博</span></div>
                                            <div class="dsf-b">
                                                <div class="wbdms">未绑定</div>
                                            </div>
                                            <div class="dsf-w"><el-button type="primary">立即绑定</el-button></div>
                                        </div>
                                        </el-col>
                                        <el-col :span="8">
                                        <div class="grid-content">
                                            <div class="dsf-t"><span>微博微信公众平台</span></div>
                                            <div class="dsf-b">
                                                <div class="pttuwen">
                                                    <div class="pttuwen-z"><el-image shape="circle"  style="width: 100px; height: 100px" :src="url"></el-image></div>
                                                    <div class="pttuwen-y">
                                                        <div class="pttuwen-ys"><span>已绑定：</span>协和医院</div>
                                                        <div class="pttuwen-yx">3434234@qq.com</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dsf-w1">
                                                <div class="zuodi"><span>状态：</span><el-tag type="success">正常</el-tag><i class="el-icon-refresh"></i></div>
                                                <div class="youdi"><el-button type="primary">进入</el-button></div>   
                                            </div>
                                        </div>    
                                        </el-col>
                                        <el-col :span="8">
                                        <div class="grid-content">
                                            <div class="dsf-t"><span>今日头条</span></div>
                                            <div class="dsf-b">
                                                <div class="wbdms">未绑定</div>
                                            </div>
                                            <div class="dsf-w"><el-button type="primary">立即绑定</el-button></div>
                                        </div>    
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div> 
                </div>
            </div>    
        </div> 
    </div>
</template>

<script>
import commonHe from '../../components/commonHe'
export default {
    data(){
        return{
            //tab切换方法默认第1个
            activeName: 'first',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            input1: '',
        select: '',
        value: '',
        form: { region: '' },
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
          }, {
            name: '小虎',
            leixing:'机构',
            age: '30',
            guanzhu:'李四等3人',
            laiyuan:'通过网上注册',
            date: '2019-10-02',
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

        };
    },
    methods: {
       handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit() {
        console.log('submit!');
      },
    },
    components:{
        commonHe
    },
    created(){
        this.userId=localStorage.getItem("userId")
        // alert(this.userId)
    },
    mounted(){
        let w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //浏览器宽度
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
        document.getElementsByClassName("style-box")[0].style.height = (h - 68) + "px";
        document.getElementsByClassName("style-box")[0].style.width = (w - 200) + "px";
        document.getElementById("box").style.width = (w - 280) + "px";
        document.getElementById("box").style.height = (h - 120) + "px";
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



 </style>
