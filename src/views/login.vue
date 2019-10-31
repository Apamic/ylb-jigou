<template>
    <div class="loginbox">
        <div class="log">
            <div class="left">
                <img src="../assets/images/logo.png" alt="">
            </div>
            <div class="right">
                <div class="top">
                    <span class="title1"><strong>医联邦</strong></span><span class="title2">您的机构管理助手</span>
                </div>
                <el-input class="inp" v-model="input1" placeholder="请输入您的医疗机构账号"></el-input>
                <el-input class="inp" type="password" v-model="input2" placeholder="请输入您的密码" @keyup.enter.native="gologin"></el-input>
                <div class="checkcode">
                    <el-input class="yz" v-model="input3" placeholder="请输入验证码" @keyup.enter.native="gologin"></el-input>
                    <!-- <el-input class="yz-cr" v-model="checkCode" ></el-input> -->
                    <div class="yz-cr" style="margin-top:5px;" @click="getNewImg">
                        <img :src="imgSrc" alt="">
                    </div>
                </div>
                <el-button type="primary" class="loginbtn" @click="gologin">登陆</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import {login} from "../api/api"
import {newLogin} from "../api/api"
import md5 from 'js-md5'
import {getCaptcha} from '../api/api'
 export default {
    data(){
        return{
            input1:'',
            input2:'',
            input3:'',
            checkCode:'',
            count:1,
            imgSrc:'http://47.92.25.25:8011/captcha',
            encryption:""
        }
    },
    methods:{
        getNewImg(){
            this.count++;
            this.imgSrc = 'http://47.92.25.25:8011/captcha?count='+this.count
        },
        CalcuMD5(pwd){
            pwd = pwd.toUpperCase();
            pwd = md5(pwd);
            return pwd;
        },
        gologin(){
            this.count++;
            this.imgSrc = 'http://47.92.25.25:8011/captcha?count='+this.count
            // console.log("点击登陆了")
                // if(this.input3.toUpperCase()==this.checkCode.toUpperCase()){
                    var pwd=this.input2+"eHealth!"
                    pwd = md5(pwd);
                    // this.input2=pwd
                    this.encryption=pwd
                var newLoginList={
                    "account": this.input1,
                    "loginType": 1,
                    "pwd": this.encryption,
                    "sysType": 1003102,
                    "captcha":this.input3
                }
                newLogin(newLoginList).then(data=>{
                    // console.log(data,"登陆")
                    // console.log(data)
                    if(data.rtnCode==1){
                        // console.log("登陆成功",data.data.userObj)
                        // console.log("登陆成功")
                        var orgId=data.data.userObj.orgId
                        localStorage.setItem("orgId",orgId)
                        localStorage.setItem("token",data.data.tid)
                        localStorage.setItem("orgName",data.data.userObj.orgNames)
                        localStorage.setItem("logo",data.data.userObj.orgUrl)
                        localStorage.setItem("govId",data.data.userObj.govId)

                        let exp = new Date();
                        exp.setTime(exp.getTime() + 864000000);
                        document.cookie = "token" + "="+ encodeURI(data.data.tid) + ";expires=" + exp.toGMTString()+";path=/";

                        document.cookie = "user" + "="+ encodeURI(JSON.stringify(data.data.userObj)) + ";expires=" + exp.toGMTString()+";path=/";

                        let lgUser = {};
                        lgUser.orgId =  orgId;
                        lgUser.orgName = data.data.userObj.orgName;
                        localStorage.setItem("org_user",JSON.stringify(lgUser));
                        this.$router.push("/marketing")
                    }else{
                        alert("请输入正确的用户名或密码")
                        this.input1='';
                        this.input2='';
                        this.input3='';
                        
                    }
                })
        }
    },
    created(){
        // var code = "";    
        // var codeLength = 4;//验证码的长度   
        // var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');//随机数   
        // for(var i = 0; i < codeLength; i++) {
        //       //循环操作   
        //       var index = Math.floor(Math.random()*61);//取得随机数的索引（0~35）   
        //       code += random[index];//根据索引取得随机数加到code上   
        // }   
        // this.checkCode = code;

    }
}
</script>

<style lang="scss" scoped>
.loginbox{
    width: 100%;
    // height: 540px;
    height: 100%;
    background-image: url(../assets/images/bj.jpg);
    background-repeat:no-repeat;
    background-size:100% 100%;
    // background-color: pink;
    position:absolute; 
    left:0; 
    top:0; 
    width:100%;
    height:100%;
    .log{
        width: 52%;
        height: 57%;
        background-color: #fff;
        margin-left:24%;
        margin-top:10%;
        .left{
            width: 50%;
            height: 100%;
            // background-color: pink;
            float:left;
            background-image: url(../assets/images/left.jpg);
            background-repeat:no-repeat;
            background-size:100% 100%;
            position: relative;
            img{
                width: 24%;
                height: 19%;
                position: absolute;
                top:0;
                left:0;
                bottom:0;
                right:0;
                margin:auto;
            }
        }
        .right{
            width: 50%;
            height: 100%;
            float:left;
            position: relative;
            .top{
                margin-bottom:10%;
                margin-top:18%;
                margin-left:10%;
                .title1{
                    color:#0076FF;
                    font-size:24px;
                }
                .title2{
                    color:#0076FF;
                    font-size:14px;
                    margin-left:10px;
                }
            }
            .inp{
                width: 80%;
                margin-left:10%;
                margin-bottom:10px;
            }
            .checkcode{
                margin-left:10%;
                width: 80%;
                .yz{
                    width: 55%;
                    display: block;
                    float:left;
                    margin-right:5%;

                }
                .yz-cr{
                    width: 40%;
                    display: block;
                    float:left;
                    border-radius: 5px;
                    text-align: center;
                    color:#0076FF;
                    font-size:26px;
                    // position: absolute;
                    // margin-left:10%;
                    // margin-top:50px
                }

            }
            
            
            .loginbtn{
                width: 80%;
                margin:10px 0 0 10%;
                font-size:18px;
            }
        }
    }
}
</style>

