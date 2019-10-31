<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="zhenge">
                    <div class="yggl-ym qunfa-ym">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="新建群发" name="first">
                                <el-alert  title="为保障用户体验，群发功能严禁发布色情低俗、暴力血腥、政治谣言等各类违反法律法规及相关政策规定的信息。一旦发现，我们将取消群发资格。" type="warning"> </el-alert>
                                <div class="hzxqjbxx-t m-t-10">
                                    <span>群发信息</span>
                                </div>
                                <div class="qunfanr m-t-20">
                                    <el-form ref="form" :model="form" label-width="80px">
                                        <el-form-item label="群发内容">
                                            <div class="qunfanrk">
                                                <img src="../../assets/images/0.jpg">
                                                <div class="qunfayou">
                                                    <h2>一张“黑洞”需要拍两年？有了它或许就不会让大家等那么久了</h2>
                                                    <p>医院介绍</p>
                                                </div>
                                            </div>
                                        </el-form-item>
                                        
                                        <el-form-item label="群发时间">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="立即发送"></el-radio>
                                                <el-radio label="定时发送"></el-radio>
                                                <el-date-picker
                                                v-model="value1"
                                                type="datetime"
                                                placeholder="选择日期时间">
                                                </el-date-picker>
                                            </el-radio-group>
                                        </el-form-item> 
                                    </el-form>
                                </div>
                                <div class="hzxqjbxx-t m-t-10"> 
                                    <span>群发给医健云用户</span>
                                </div>
                                <div class="tishi tishilan">
                                    <span><i class="el-icon-bell"></i>温馨提示：为保障用户体验，医健云用户账号每个用户每天只能收到一条群发消息，年龄性别只对医健云平台有效</span>
                                </div>
                                <div class="qunfanr qunfanr1">
                                    <el-form ref="form" :model="form" label-width="80px">
                                        <el-form-item label="群发年龄">
                                            <el-checkbox-group v-model="form.type">
                                            <el-checkbox label="全部" name="type"></el-checkbox>
                                            <el-checkbox label="≤19" name="type"></el-checkbox>
                                            <el-checkbox label="20-29" name="type"></el-checkbox>
                                            <el-checkbox label="30-39" name="type"></el-checkbox>
                                            <el-checkbox label="40-49" name="type"></el-checkbox>
                                            <el-checkbox label="≥50" name="type"></el-checkbox>
                                            </el-checkbox-group>
                                        </el-form-item>
                                        
                                        <el-form-item label="群发性别">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="全部"></el-radio>
                                                <el-radio label="男"></el-radio>
                                                <el-radio label="女"></el-radio>
                                            </el-radio-group>
                                        </el-form-item> 
                                    </el-form>
                                </div>
                                <div class="hzxqjbxx-t m-t-10"> 
                                    <span>同步到第三方平台</span>
                                    <router-link to="/qfgl">+添加更多第三方账号</router-link>
                                </div>
                                <div class="tupxuan">
                                    <el-checkbox v-model="checked1" border>
                                        <div class="xuanktuw">
                                            <div class="xuanktuimg">
                                                <img src="../../assets/images/0.jpg">
                                            </div>
                                            <div class="xuanktuwen">
                                                <img src="../../assets/images/weibo.png">
                                            </div>   
                                        </div>
                                    </el-checkbox>
                                    <el-checkbox v-model="checked2" label="备选项2" border>
                                        <div class="xuanktuw">
                                            <div class="xuanktuimg">
                                                <img src="../../assets/images/touxiang.jpg">
                                            </div>
                                            <div class="xuanktuwen">
                                                <img src="../../assets/images/weixin.png">
                                            </div>   
                                        </div>
                                    </el-checkbox>
                                    <el-checkbox v-model="checked3" border>
                                        <div class="xuanktuw">
                                            <div class="xuanktuimg">
                                                <img src="../../assets/images/touxiang2.jpg">
                                            </div>
                                            <div class="xuanktuwen">
                                                <img src="../../assets/images/toutiao.png">
                                            </div>   
                                        </div>
                                    </el-checkbox>
                                </div>
                                <div class="bfb-m-15"><el-button type="primary" @click="onSubmit">群发</el-button></div>
                                

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
            checked1: true,
            checked2: false,
            checked3: false,
            //tab切换
            activeName: 'first',
            //tab切换结束
            form: { resource: '',type: [],},
            pickerOptions: {
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                    picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                    }
                }]
            },
        value1: '',
        };
    },
    methods: {
    //tab切换
        handleClick(tab, event) {
        console.log(tab, event);
      },
    //tab切换结束
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
