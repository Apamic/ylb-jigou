
<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="yysz-ys hzglys">
                    <div class="cigystyle">
                        <div class="tounrk">
                            <div class="zuotximg" style="overflow:hidden"><img :src="todo.photoUrl" alt="" style="width:100%;height:100%"></div>
                            <ul class="hzxqtouul">
                                <li>昵称：{{ todo.nickName}}</li>
                                <li>年龄：{{ todo.age }}</li>
                                <li>来源：{{ todo.source }}</li>
                                <li>姓名：{{ todo.userName }}</li>
                                <li>创建时间：{{ todo.timeCreate }}</li>
                                <li>手机：{{ todo.mobile }}</li>
                            </ul>
                        </div>
                        <div class="hzxqnr">
                                <el-tabs v-model="activeName" @tab-click="handleClick">
                                <el-tab-pane label="基本信息" name="first">
                                    <div class="hzxq-jbxx">
                                        <div class="hzxqjbxx-t">
                                            <span>基本信息</span>
                                        </div>
                                        <div class="hzxqjbxx-nr">
                                            <ul class="jbxxulnr">
                                                <li>身高：{{ todo2.perHeight }} </li>
                                                <li>体重：{{ todo2.perWeight }}</li>
                                                <li>血型：{{ todo2.perBlood }}</li>  
                                            </ul>
                                        </div>
                                    </div>
                                </el-tab-pane>
                                <!-- <el-tab-pane label="订单信息" name="second">
                                    <div class="dingdanxx">
                                        <table class="ddxxtable" cellpadding="0" cellspacing="0" width="100%" >
                                            <tr>
                                                <th>商品</th>
                                                <th>单价/数量</th>
                                                <th>医生</th>
                                                <th>患者</th>
                                                <th>下单时间</th>
                                                <th>订单状态</th>
                                                <th>实付金额</th>
                                                <th>操作</th>
                                            </tr>
                                            <tr>
                                                <td colspan="8">
                                                    <ul>
                                                        <li>
                                                        <span>商户订单号：</span>
                                                        <p>E20150830013701057749062</p>	
                                                        </li>
                                                        <li>
                                                        <span>支付方式：</span>
                                                        <p> 微信支付</p>	
                                                        </li>
                                                        <li>
                                                        <span>微信订单号：</span>
                                                        <p>4200000240201902222463279844</p>	
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>	
                                                <td><img src="../../assets/images/PIC1.png"/>介入手术术后康复</td>
                                                <td><span>1.00</span>
                                                    <p>(1件)</p></td>
                                                <td>吴超雄</td>
                                                <td>刘奎</td>
                                                <td>2019-01-05 <p>11:12:27</p></td>
                                                <td>待受理</td>
                                                <td>¥600.00</td>
                                                <td><a href="">查看详情</a></td>
                                            </tr>
                                        </table>
                                    </div>
                                </el-tab-pane> -->
                                <!-- <el-tab-pane label="就诊信息" name="third">就诊信息</el-tab-pane>
                                <el-tab-pane label="随访信息" name="fourth">随访信息</el-tab-pane>
                                <el-tab-pane label="预约信息" name="fifth">预约信息</el-tab-pane>
                                <el-tab-pane label="健康档案" name="sixth">健康档案</el-tab-pane> -->
                            </el-tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import {patientBasic} from '../../api/api'

import commonHe from '../../components/commonHe'
export default {
 data() {
      return {
        //以下是li里面的内容
        todo:{
            name: 'dong风',age:'16',laiyuan:'医生二维码注册',name2:'张医生',date:'2019/8/16',tel:'13689072880'
        },
        todo2:{
            num1: '183cm',num2:'80kg',xuexing:'O型血'
        },
        //以上是li里面的内容
        activeName: 'first',
        input1: '',
        select: '',
        value: '',
        form: { region: '' },
        //表格 
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit() {
        console.log('submit!');
      }
    },
    components:{
        commonHe
    },
    mounted(){
        let w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //浏览器宽度
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
        document.getElementsByClassName("style-box")[0].style.height = (h - 68) + "px";
        document.getElementsByClassName("style-box")[0].style.width = (w - 200) + "px";
        document.getElementById("box").style.width = (w - 280) + "px";
        document.getElementById("box").style.height = (h - 120) + "px";
    },
    created(){
        var basic=localStorage.getItem("basic")
        this.todo=JSON.parse(basic)
        
        var searchList={
            "userId":JSON.parse(basic).userId
        }
        patientBasic(searchList).then(data=>{
            this.todo2=data.data
        })
    }
};
</script>
<style lang="scss">


 @import '../../styles/hxmstyle.css';
 $left-width:300px;
.style-box{ background:rgba(245,245,245,1); position: absolute; left:200px; top:68px; overflow-y: auto;}
.el-select .el-input { width: 130px;}
.input-with-select .el-input-group__prepend { background-color: #fff;}

.tounrk{background-color: #fff; position: relative; border-radius: 8px; min-height: 100px; width: 100%; padding: 10px; box-sizing: border-box;}
.zuotximg{width: 80px; height: 80px; position: absolute; left: 10px; top:10px; border-radius: 40px; background-color: #e8f0f6;}
.tounrk .hzxqtouul{padding-left: 100px; box-sizing: border-box; margin-top: 15px;}
.hzxqtouul{width: 100%; float: right;}
.hzxqtouul li{list-style: none; float: left; width: 33%; font-size: 14px; margin-bottom: 10px;}
.hzxqjbxx-t{padding-top:8px; box-sizing: border-box;}
.hzxqjbxx-t span{border-left: solid 6px #0076ff; padding-left: 10px; }
 </style> 