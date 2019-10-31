<template>
    <div>
        <commonHe></commonHe>
        <div class="paper-box">
            <div class="notice">您可使用组件自由搭建医院内容，如添加医生、自定义页面名称、添加轮播图等，个性化装修医院主页。</div>

            <div class="phone">
                <div class="top">湖北大学附属医院</div>
                <div class="mall-box" v-if="mall">
                    <div class="close" @click="closemall">×</div>
                    <div class="bt">
                        <div class="bt-l">
                            {{title}}
                        </div>
                        <div class="bt-r">更多 ></div>
                    </div>
                    <div class="sets">
                        <div class="set">
                            <div class="img">
                                <img src="../../assets/images/0.jpg" alt="">
                            </div>
                            <div class="desc">
                                每年123大健康体检套餐中老年父母体检套餐体检套餐
                            </div>
                            <div class="price">
                                <span class="price-now">￥<span>880</span></span>
                                <span class="price-pass">￥<span>8800</span></span>
                            </div>
                        </div>
                        <div class="set">
                            <div class="img">
                                <img src="../../assets/images/0.jpg" alt="">
                            </div>
                            <div class="desc">
                                每年大健康体检套餐中老年父母体检套餐体检套餐
                            </div>
                            <div class="price">
                                <span class="price-now">￥<span>880</span></span>
                                <span class="price-pass">￥<span>8800</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="add">
                    <p>添加组件</p>
                    <div class="options">
                        <div>搜索</div>
                        <div>海报</div>
                        <div>导航</div>
                        <div>科室导航</div>
                        <div>精选专家</div>
                        <div>知识付费</div>
                        <div @click="openmall">健康服务</div>
                        <div>特色科室</div>
                        <div>文章咨询</div>
                        <div>富文本</div>
                    </div>
                </div>
            </div>
            <div class="let-box" v-if="mall">
                <div class="title">医疗服务</div>
                <div class="name">
                    <span class="mc">标题名称</span>
                    <el-input class="btmc" v-model="title" placeholder="请输入内容"></el-input>
                </div>
                <div class="source">
                    <span class="ly">商品来源</span>
                    <input class="checkbox" type="checkbox" checked>
                    <span class="fz">分组</span>
                    <div class="showgoods">
                        <div class="xz" @click="addGoods">+选择分组商品</div>
                        <div class="xz-desc">此页面最多显示前<span>50</span>个，已添加<span>1</span>个</div>
                        <div class="show-set">
                            <div class="goods-img"><img src="../../assets/images/0.jpg" alt=""></div>
                            <div class="goods-desc">入职体检套餐告诉对方公司甲方公司</div>
                        </div>
                    </div>
                </div>
                <div class="select-box" v-if="chose">
                    <div class="sel-title">选择商品<span @click="closeAdd">×</span></div>
                    <div class="sel-sel">
                        <el-input
                            class="sel-inp"
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="input2">
                        </el-input>
                        <el-button type="primary">搜索</el-button>
                    </div>
                    <div class="sel-tr">
                        <span>分组名称</span>
                        <span>商品数</span>
                        <span>分组时间</span>
                    </div>
                    <div class="no-source" v-if="nodata">
                        <i class="el-icon-s-promotion icon"></i>
                        <p>...暂时没有数据</p>
                    </div>
                    <div class="sel-td" v-if="havedata">
                        <span>分组名称</span>
                        <span>商品数</span>
                        <span>分组时间</span>
                    </div>

                    <!-- <div class="sel-sel">
                        <input type="checkbox" class="sel-check">
                        <div class="sel-img">
                            <img src="../../assets/images/0.jpg" alt="">
                        </div>
                        <div class="sel-desc">
                            <p class="desc-name">介入手术术后康复</p>
                            <span class="desc-price"><span>￥</span>1580.00</span>
                        </div>
                    </div>
                    <div class="sel-sel">
                        <input type="checkbox" class="sel-check">
                        <div class="sel-img">
                            <img src="../../assets/images/0.jpg" alt="">
                        </div>
                        <div class="sel-desc">
                            <p class="desc-name">介入手术术后康复</p>
                            <span class="desc-price"><span>￥</span>1580.00</span>
                        </div>
                    </div>
                    <div class="sel-sel">
                        <input type="checkbox" class="sel-check">
                        <div class="sel-img">
                            <img src="../../assets/images/0.jpg" alt="">
                        </div>
                        <div class="sel-desc">
                            <p class="desc-name">介入手术术后康复</p>
                            <span class="desc-price"><span>￥</span>1580.00</span>
                        </div>
                    </div> -->

                    <div class="sel-bottom">
                        <el-button class="cancel">取消</el-button>
                        <el-button type="primary">确认</el-button>
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
            title:"健康商城",
            mall:true,
            input:'',
            input2:'',
            chose:false,
            havedata:false,
            nodata:true
        }
    },
    components:{
        commonHe,
    },
    methods:{
        closemall(){
            this.mall=false;
        },
        openmall(){
            this.mall=true;
        },
        addGoods(){
            this.chose=true;
        },
        closeAdd(){
           this.chose=false; 
        }
    },
    mounted(){
        let w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        document.getElementsByClassName("paper-box")[0].style.width = (w - 200) + "px";
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
        document.getElementsByClassName("paper-box")[0].style.height = (h - 68) + "px";
    }
}
</script>
<style lang="scss" scoped>
.paper-box{
    margin-left:200px;
    background-color: #fff;
    overflow: hidden;
    .notice{
        width: 640px;
        height: 32px;
        border:1px solid #FF4F0A;
        font-size:12px;
        color:#FF4F0A;
        line-height: 32px;
        padding-left:10px;
        margin-top:20px;
        margin-left:20px;
    }
    .phone{
        width: 330px;
        height: 530px;
        border:1px solid #ededed;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: #F5F5F5;
        margin-top:20px;
        margin-left:20px;
        float:left;
        .top{
            width: 330px;
            height: 55px;
            background-image: url(../../assets/images/bar.png);
            background-size:325px 55px;
            padding-right:5px;
            text-align: center;
            line-height: 83px;
            font-size:13px;
        }

        .mall-box:hover{
            .close{
                display: block;
            }
        }
        .mall-box{
            width: 100%;
            background-color: #fff;
            margin-bottom:12px;
            overflow: hidden;
            position: relative;
            .close{
                width: 25px;
                height: 25px;
                background:rgb(228, 227, 227);
                font-size:25px;
                line-height: 21px;
                text-align: center;
                border-radius: 50%;
                position: absolute;
                top:2px;
                left:298px;
                cursor: pointer;
                display: none;
                // color:#fff;
            }
            .bt{
                width: 100%;
                height: 36px;
                margin-top:30px;
                margin-left:20px;
                margin-bottom:10px;
                .bt-l{
                    width:144px;
                    height:36px;
                    font-size:18px;
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    color:rgba(4,11,28,1);
                    line-height:36px;
                    float:left;
                }
                .bt-r{
                    width:52px;
                    height:36px;
                    font-size:13px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgb(128, 128, 131);
                    line-height:36px;
                    float:right;
                    margin-right:20px;
                }
            }
            .sets{
                .set{
                    float:left;
                    width: 133px;
                    height: 175px;
                    margin-left:20px;
                    // background-color: pink;
                    .img{
                        width: 133px;
                        height: 107px;
                        overflow: hidden;
                        border-radius: 5px;
                        img{
                            width: 133px;
                            height: 107px;
                        }
                    }
                    .desc{
                        font-weight:600;
                        font-family:PingFangSC-Medium;
                        font-size: 14px;
                        color:rgba(4,11,28,1);
                        line-height: 19px;
                        margin-top:10px;
                        overflow: hidden;
                        text-overflow:ellipsis;//文本溢出显示省略号
                        white-space:nowrap;
                        
                    }
                    .price{
                        .price-now{
                            color:#FF0000;
                            font-size:16px;
                            margin-top:6px;
                            display: block;
                            float:left;
                        }
                        .price-pass{
                            color:rgb(125, 126, 128);
                            font-size:13px;
                            margin-top:9px;
                            display: block;
                            float:left;
                            // line-height: 23px;
                            margin-left:5px;
                            text-decoration: line-through;
                        }
                    }
                }
            }
        }
        .add{
            width: 100%;
            height: 266px;
            background-color: #fff;
            text-align: center;
            overflow: hidden;
            p{
                font-weight:bold;
                font-size:14px;
            }  
            .options{
                margin-left:8px;
                div{
                    display: block;
                    width: 88px;
                    height: 40px;
                    background:rgba(0,118,255,.1);
                    color:rgba(4,11,28,1);
                    float:left;
                    margin-top:10px;
                    line-height: 40px;
                    text-align: center;
                    margin-left:10px;
                    cursor: pointer;
                }

            }  
            
            

        }
    }
    .phone::-webkit-scrollbar{
        width: 6px;
        height: 6px;
        background-color: #f5f5f5;
    }
    .phone::-webkit-scrollbar-thumb{
        height: 20px;
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(90, 88, 88, 0.3);
        background-color: rgb(192, 189, 189);
    }
    .let-box{
        width: 700px;
        height: 530px;
        background:rgba(245,245,245,1);;
        border:1px solid #ededed;
        float:left;
        margin-top:20px;
        margin-left:10px;
        overflow-y: auto;
        .title{
           color:#040B1C;
           font-weight:bold;
           font-size:16px;
           width: 600px;
           height: 60px;
           margin:auto;
           line-height: 60px;
           border-bottom: 1px solid rgba(230,230,230,1); 
           
        }
        .name{
            margin-left:50px;
            margin-top:25px;
            .mc{
                display:block;
                float:left;
            }
            .btmc{
                width: 200px;
                margin-left:40px;
                margin-top:-9px;
            }
        }
        .source{
            margin-left:50px;
            margin-top:20px;
            .checkbox{
                margin-left:35px;
            }
            .showgoods{
                margin-top:20px;
                width: 600px;
                background-color: #fff;
                .xz{
                    width: 120px;
                    height: 30px;
                    float:left;
                    border:dashed 1px #0076FF ;
                    color:#0076FF;
                    line-height: 30px;
                    text-align: center;
                    font-size:15px;
                    margin-top:10px;
                    margin-left:10px;
                    cursor: pointer;
                }
                .xz-desc{
                    color:rgb(124, 123, 123);
                    float:left;
                    margin-left:10px;
                    margin-top:15px;
                }
                // margin-left:20px;
                .show-set{
                    color:#040B1C;
                    font-size:14px;
                    width: 600px;
                    height: 70px;
                    overflow: hidden;
                    .goods-img{
                        width: 50px;
                        height: 50px;
                        margin-top:10px;
                        margin-left:10px;
                        float:left;
                        img{
                            width: 50px;
                            height: 50px;
                        }
                    }
                    .goods-desc{
                        float: left;
                        line-height: 70px;
                        margin-left:20px;
                    }

                }
            }
            
        }
        .select-box{
            width: 600px;
            border:1px solid #ededed;
            background-color: #fff;
            margin-left:50px;
            margin-top:30px;
            .sel-title{
                width: 590px;
                height: 40px;
                line-height: 40px;
                padding-left:10px;
                border-bottom:1px solid #ededed;
                span{
                    float:right;
                    margin-right:15px;
                    font-size:25px;
                    cursor: pointer;
                }
            }
            .sel-inp{
                width: 300px;
                margin-top:10px;
                margin-left:10px;
            }
            .sel-sel{
                width: 100%;
                height: 60px;
                margin-top:10px;
                .sel-check{
                    float:left;
                    margin-top:15px;
                    margin-left:10px;
                }
                .sel-img{
                    width: 40px;
                    height: 40px;
                    overflow: hidden;
                    float:left;
                    margin-left:10px;
                    img{
                        width: 40px;
                        height: 40px;
                    }
                }
                .sel-desc{
                    height: 60px;
                    float:left;
                    margin-left:10px;
                    overflow: hidden;
                    .desc-name{
                        height: 20px;
                        font-size:13px;
                        line-height: 20px;
                        margin-top:0px;
                    }
                    .desc-price{
                        display: block;
                        height: 20px;
                        font-size:13px;
                        line-height: 20px;
                        margin-top:-13px;
                        color:#FF0000;
                    }

                }

            }
            .sel-tr{
                width: 100%;
                height: 30px;
                border:1px solid #ededed;
                span{
                    display: block;
                    width:33.3%;
                    float:left;
                    text-align: center;
                    line-height: 30px;
                }
            }
            .no-source{
                width: 100%;
                height: 300px;
                position: relative;
                overflow: hidden;
                .icon{
                    // display: block;
                    position: absolute;
                    top:0;
                    left:0;
                    right:0;
                    bottom: 0;
                    margin:auto;
                    text-align: center;
                    font-size:30px;
                    line-height: 240px;
                }
                p{
                    width: 100%;
                    text-align: center;
                    margin-top:160px;
                }
            }
            .sel-td{
                width: 100%;
                height: 30px;
                border-bottom:1px solid #ededed;
                margin-bottom:50px;
                span{
                    display: block;
                    width:33.3%;
                    float:left;
                    text-align: center;
                    line-height: 30px;
                }
            }
            .sel-bottom{
                border-top:1px solid #ededed;
                padding-top:10px;
                padding-bottom:10px;
                .cancel{
                    margin-left:220px;
                    
                }

            }
        }

    }
    .let-box::-webkit-scrollbar{
        width: 6px;
        height: 6px;
        background-color: #f5f5f5;
    }
    .let-box::-webkit-scrollbar-thumb{
        height: 20px;
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(90, 88, 88, 0.3);
        background-color: rgb(192, 189, 189);
    }
}
</style>


