<template>
    <div class="continer">
        <div class="left">
            <div class="phone">
                <div class="top">首页</div>
                <div class="bottom">
                    <div v-if="display.select1">
                        <span class="img"><img src="../../../assets/images/bar-index.png" alt=""></span>
                        <p>{{input1}}</p> 
                    </div>
                    <div v-if="display.select2">
                        <span class="img"><img src="../../../assets/images/bar-mall.png" alt=""></span>
                        <p>{{input2}}</p> 
                    </div>
                    <div v-if="display.select3">
                        <span class="img"><img src="../../../assets/images/bar-group.png" alt=""></span>
                        <p>{{input3}}</p> 
                    </div>
                    <div v-if="display.select4">
                        <span class="img"><img src="../../../assets/images/bar-message.png" alt=""></span>
                        <p>{{input4}}</p> 
                    </div>
                    <div v-if="display.select5">
                        <span class="img"><img src="../../../assets/images/bar-mine.png" alt=""></span>
                        <p>{{input5}}</p> 
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="right-box" v-if="display.select1"> 
                <div class="delete" @click="close1">×</div>
                <div class="first">
                    <div class="mc">名称</div>
                    <el-input class="inp" size="small" v-model="input1" placeholder="请输入内容"></el-input>
                </div>
                <div class="second">
                    <div class="tb">图标</div>
                    <div class="icon">
                        <img src="../../../assets/images/0.jpg" alt="">
                        <span>修改</span>
                    </div>
                    <div class="icon selected">
                        <img src="../../../assets/images/0.jpg" alt="">
                        <span>修改</span>
                    </div>
                </div>
                <div class="status">
                    <div class="wxz">未选中</div>
                    <div class="xz">选中</div>
                </div>
                <div class="third">
                    <div class="tz">跳转链接</div>
                    <el-select class="sel" size="small" v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="right-box" v-if="display.select2">
                <div class="delete"  @click="close2">×</div>
                <div class="first">
                    <div class="mc">名称</div>
                    <el-input class="inp" size="small" v-model="input2" placeholder="请输入内容"></el-input>
                </div>
                <div class="second">
                    <div class="tb">图标</div>
                    <div class="icon">
                        <img src="../../../assets/images/0.jpg" alt="">
                        <span>修改</span>
                    </div>
                    <div class="icon selected">
                        <img src="../../../assets/images/0.jpg" alt="">
                        <span>修改</span>
                    </div>
                </div>
                <div class="status">
                    <div class="wxz">未选中</div>
                    <div class="xz">选中</div>
                </div>
                <div class="third">
                    <div class="tz">跳转链接</div>
                    <el-select class="sel" size="small" v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="right-box" v-if="display.select3">
                <div class="delete"  @click="close3">×</div>
                <div class="first">
                    <div class="mc">名称</div>
                    <el-input class="inp" size="small" v-model="input3" placeholder="请输入内容"></el-input>
                </div>
                <div class="second">
                    <div class="tb">图标</div>
                    <div class="icon">
                        <img src="../../../assets/images/0.jpg" alt="">
                        <span>修改</span>
                    </div>
                    <div class="icon selected">
                        <img src="../../../assets/images/0.jpg" alt="">
                        <span>修改</span>
                    </div>
                </div>
                <div class="status">
                    <div class="wxz">未选中</div>
                    <div class="xz">选中</div>
                </div>
                <div class="third">
                    <div class="tz">跳转链接</div>
                    <el-select class="sel" size="small" v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="right-box" v-if="display.select4">
                <div class="delete"  @click="close4">×</div>
                <div class="first">
                    <div class="mc">名称</div>
                    <el-input class="inp" size="small" v-model="input4" placeholder="请输入内容"></el-input>
                </div>
                <div class="second">
                    <div class="tb">图标</div>
                    <div class="icon">
                        <img src="../../../assets/images/0.jpg" alt="">
                        <span>修改</span>
                    </div>
                    <div class="icon selected">
                        <img src="../../../assets/images/0.jpg" alt="">
                        <span>修改</span>
                    </div>
                </div>
                <div class="status">
                    <div class="wxz">未选中</div>
                    <div class="xz">选中</div>
                </div>
                <div class="third">
                    <div class="tz">跳转链接</div>
                    <el-select class="sel" size="small" v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="right-box" v-if="display.select5">
                <div class="delete"  @click="close5">×</div>
                <div class="first">
                    <div class="mc">名称</div>
                    <el-input class="inp" size="small" v-model="input5" placeholder="请输入内容"></el-input>
                </div>
                <div class="second">
                    <div class="tb">图标</div>
                    <div class="icon">
                        <img src="../../../assets/images/0.jpg" alt="">
                        <span>修改</span>
                    </div>
                    <div class="icon selected">
                        <img src="../../../assets/images/0.jpg" alt="">
                        <span>修改</span>
                    </div>
                </div>
                <div class="status">
                    <div class="wxz">未选中</div>
                    <div class="xz">选中</div>
                </div>
                <div class="third">
                    <div class="tz">跳转链接</div>
                    <el-select class="sel" size="small" v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="plus" @click="plus">+添加导航</div>
            <div class="notice">导航数最多添加5个</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.continer{
    .left{
        float:left;
        .phone{
            width: 300px;
            height: 500px;
            border:solid 1px #ededed;
            background:#F5F5F5;
            .top{
                width: 100%;
                height: 50px;
                // background-color: pink;
                background-image: url(../../../assets/images/bar.png);
                background-repeat: no-repeat;
                background-size:300px 50px;
                text-align: center;
                line-height: 67px;
                font-size:13px;
            }
            .bottom{
                width: 100%;
                height: 49px;
                background-color: #fff;
                margin-top:400px;
                border-top:1px solid #ededed;
                display: flex;
                justify-content: space-around;
                div{
                    width: 50px;
                    height: 50px;
                    // background-color: pink;
                    text-align: center;
                    background-image: url();
                    position: relative;
                    // line-height: 20px;
                    overflow: hidden;
                    .img{
                        display: block;
                        width: 24px;
                        height: 24px;
                        // background-color: red;
                        margin-left:13px;
                        margin-top:8px;
                        img{
                            width: 24px;
                            height: 24px;
                        }
                    }
                    p{
                        margin-top:2px;
                        font-size:10px;
                    }
                }
            }
        }
    }
    .right{
        float:left;
        width: 400px;
        height: 500px;
        border:1px solid #ededed;
        margin-left:30px;
        overflow-y: auto;
        background:#F5F5F5;
        .right-box{
            width: 370px;
            height: 250px;
            margin:15px auto;
            border:1px solid #ededed;
            background-color: #fff;
            overflow: hidden;
            position: relative;
            .delete{
                width: 28px;
                height: 28px;
                line-height: 25px;
                cursor: pointer;
                text-align: center;
                border-radius: 50%;
                position: absolute;
                top:0;
                right:0;
                z-index: 5;
                color:#fff;
                font-size:25px;
                background-color:rgb(172, 169, 169);
                display: none;
            }
            .first{
                margin-left:20px;
                width: 360px;
                overflow: hidden;
                .mc{
                    width: 80px;
                    float:left;
                    color:#222222;
                    font-size:15px;
                    margin-top:20px;
                    // background-color: pink;
                }
                .inp{
                    width: 150px;
                    float:left;
                    margin-top:15px;
                }
            }
            .second{
                margin-left:20px;
                width: 360px;
                overflow: hidden;
                .tb{
                    width: 80px;
                    float:left;
                    color:#222222;
                    font-size:15px;
                    margin-top:20px;
                }
                .icon{
                    width: 55px;
                    height: 60px;
                    float:left;
                    margin-top:23px;
                    border:1px solid #deeded;
                    cursor: pointer;
                    img{
                        width: 35px;
                        height: 35px;
                        margin-top:5px;
                        margin-left:10px;
                    }
                    span{
                        width: 55px;
                        height: 18px;
                        display: block;
                        text-align: center;
                        line-height: 18px;
                        color:#fff;
                        font-size:10px;
                        background-color: #7c7b7b;
                        border-right:1px solid #7c7b7b;
                    }
                }
                .selected{
                    margin-left:20px;
                }
            }
            .status{
                width: 360px;
                overflow: hidden;
                margin-top:5px;
                .wxz{
                    float:left;
                    width: 55px;
                    text-align: center;
                    margin-left:100px;
                    color:#222222;
                    font-size:12px;
                }
                .xz{
                    float:left;
                    width: 55px;
                    text-align: center;
                    color:#222222;
                    font-size:12px;
                    margin-left:24px;
                }
            }
            .third{
                width: 360px;
                overflow: hidden;
                margin-left:20px;
                .tz{
                    width: 80px;
                    float:left;
                    color:#222222;
                    font-size:15px;
                    margin-top:20px;
                }
                .sel{
                    width: 150px;
                    margin-top:23px;
                }

            }
        }
        .right-box:hover{
            .delete{
                display: block;
            }
        }
        .plus{
            width: 370px;
            height: 45px;
            margin-left:6px;
            background-color: #fff;
            border:1px solid #ededed;
            line-height: 45px;
            text-align: center;
            color:#0076FF;
            cursor: pointer;
        }
        .notice{
            margin-left:7px;
            margin-top:5px;
            color:#666666;
            font-size:14px;
            margin-bottom:10px;
        }
    }
}

</style>
<script>
export default {
    data(){
        return{
            // 控制显隐：
            display:{
                select1:true,
                select2:true,
                select3:true,
                select4:true,
                select5:true,
            },

            // 首页输入框：
            input1:'首页',
            input2:'商城',
            input3:'小组',
            input4:'消息',
            input5:'我的',

            
            options: [{
              value: '1',
              label: '首页'
            }, {
              value: '2',
              label: '商城'
            }, {
              value: '3',
              label: '小组'
            }, {
              value: '4',
              label: '消息'
            }, {
              value: '5',
              label: '我的'
            }],
            value: ''
        }
    },
    methods:{
        close1(){
            this.display.select1=false
        },
        close2(){
            this.display.select2=false
        },
        close3(){
            this.display.select3=false
        },
        close4(){
            this.display.select4=false
        },
        close5(){
            this.display.select5=false
        },
        plus(){
            for(var i in this.display){
               if(this.display[i]==false){
                   this.display[i]=true;
                   return
               }
            }
        }
    }
}
</script>


