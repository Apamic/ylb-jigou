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
                <el-input class="inp" type="password" v-model="input2" placeholder="请输入您的密码"></el-input>
                <el-input class="inp yz" v-model="input3" placeholder="请输入验证码"></el-input>

                <el-input class="yz-cr" v-model="checkCode"></el-input>
                <!-- <span class="yz-cr" v-model="checkCode">1234</span> -->
                <!-- <input type="text" placeholder="请输入您的医疗机构账号">
                <input type="text" placeholder="请输入您的密码">
                <input type="text" placeholder="请输入验证码"> -->
                <el-button type="primary" class="loginbtn" @click="gologin">登陆</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import {login} from "../api/api"
import {newLogin} from "../api/api"
import md5 from 'js-md5'
export default {
    data(){
        return{
            input1:'',
            input2:'',
            input3:'',
            checkCode:''
        }
    },
    methods:{
        CalcuMD5(pwd){
            pwd = pwd.toUpperCase();
            pwd = md5(pwd);
            return pwd;
            // alert(pwd)
        },
      
        // gologin(){
        //     if(this.input3.toUpperCase()==this.checkCode.toUpperCase()){
        //         var loginList={
        //             "account":this.input1,
        //             "pwd":this.input2,
        //             "sysType":1003102
        //         }
        //         login(loginList).then(data=>{
        //             console.log(data)
        //             if(data.rtnCode==1){
        //                 let exp = new Date();
        //                 exp.setTime(exp.getTime() + 864000000);
        //                 document.cookie = "token" + "="+ encodeURI(data.data.user.token) + ";expires=" + exp.toGMTString()+";path=/";
        //                 document.cookie = "user" + "="+ encodeURI(JSON.stringify(data.data.user)) + ";expires=" + exp.toGMTString()+";path=/";
        //                 // 机构id：
        //                 var orgId=data.data.user.orgId
        //                 // var orgId="910361211323850752"
        //                 var orgName=data.data.user.orgName
        //                 // userid:
        //                 localStorage.setItem("userId",data.data.user.userId)
        //                 // console.log("userid",data.data.user.userId)
        //                 // console.log("机构",orgId)
        //                 localStorage.setItem("orgId",orgId)
        //                 localStorage.setItem("orgName",orgName)
        //                 localStorage.setItem("token",data.data.user.token)
        //                 localStorage.setItem("logo",data.data.user.logo)

        //                 this.$router.push("/marketing")
        //             }else{
        //                 alert("请输入正确的用户名或密码")
        //                 this.input1='';
        //                 this.input2='';
        //                 this.input3='';
        //                 var code = "";    
        //                 var codeLength = 4;//验证码的长度   
        //                 var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');//随机数   
        //                 for(var i = 0; i < codeLength; i++) {
        //                 //循环操作   
        //                 var index = Math.floor(Math.random()*61);//取得随机数的索引（0~35）   
        //                 code += random[index];//根据索引取得随机数加到code上   
        //                 }   
        //                 this.checkCode = code;
        //             }
        //         // console.log("下级",data.data)
        //         // console.log(data)
        //         })
        //     }else{
        //         alert("验证码输入有误")
        //         var code = "";    
        //         var codeLength = 4;//验证码的长度   
        //         var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');//随机数   
        //         for(var i = 0; i < codeLength; i++) {
        //               //循环操作   
        //             var index = Math.floor(Math.random()*61);//取得随机数的索引（0~35）   
        //             code += random[index];//根据索引取得随机数加到code上   
        //         }   
        //         this.checkCode = code;
        //     }
        // },

        gologin(){
            // console.log("点击登陆了")
                if(this.input3.toUpperCase()==this.checkCode.toUpperCase()){
                    var pwd=this.input2+"eHealth!"
                    pwd = md5(pwd);
                    this.input2=pwd
                var newLoginList={
                    "account": this.input1,
                    "loginType": 1,
                    "pwd": this.input2,
                    "sysType": 1003102
                }
                newLogin(newLoginList).then(data=>{
                    // console.log(data)
                    if(data.rtnCode==1){
                        console.log("登陆成功",data.data.userObj)
                        // console.log("登陆成功")
                        var orgId=data.data.userObj.orgId
                        localStorage.setItem("orgId",orgId)
                        localStorage.setItem("token",data.data.tid)
                        localStorage.setItem("orgName",data.data.userObj.orgName)
                        localStorage.setItem("logo",data.data.userObj.photoUrl) 
                        let exp = new Date();
                        exp.setTime(exp.getTime() + 864000000);
                        document.cookie = "token" + "="+ encodeURI(data.data.tid) + ";expires=" + exp.toGMTString()+";path=/";

                        document.cookie = "user" + "="+ encodeURI(JSON.stringify(data.data.userObj)) + ";expires=" + exp.toGMTString()+";path=/";
                        // 机构id：
                        // // var orgId="910361211323850752"
                        // var orgName=data.data.user.orgName
                        // // userid:
                        // localStorage.setItem("userId",data.data.user.userId)
                        // // console.log("userid",data.data.user.userId)
                        // // console.log("机构",orgId)
                        // 
                        this.$router.push("/marketing")
                    }else{
                        alert("请输入正确的用户名或密码")
                        this.input1='';
                        this.input2='';
                        this.input3='';
                        var code = "";    
                        var codeLength = 4;//验证码的长度   
                        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');//随机数   
                        for(var i = 0; i < codeLength; i++) {
                        //循环操作   
                        var index = Math.floor(Math.random()*61);//取得随机数的索引（0~35）   
                        code += random[index];//根据索引取得随机数加到code上   
                        }   
                        this.checkCode = code;
                    }
                // console.log("下级",data.data)
                // console.log(data)
                })


            }else{
                alert("验证码输入有误")
                this.input3="";
                var code = "";    
                var codeLength = 4;//验证码的长度   
                var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');//随机数   
                for(var i = 0; i < codeLength; i++) {
                      //循环操作   
                      var index = Math.floor(Math.random()*61);//取得随机数的索引（0~35）   
                      code += random[index];//根据索引取得随机数加到code上   
                }   
                this.checkCode = code;
            }
        }
    },
    created(){
        var code = "";    
        var codeLength = 4;//验证码的长度   
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');//随机数   
        for(var i = 0; i < codeLength; i++) {
              //循环操作   
              var index = Math.floor(Math.random()*61);//取得随机数的索引（0~35）   
              code += random[index];//根据索引取得随机数加到code上   
        }   
        this.checkCode = code;
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
            .yz{
                width: 40%;
            }
            .yz-cr{
                width: 35%;
                // height: 38px;
                border-radius: 5px;
                // line-height: 38px;
                text-align: center;
                color:#0076FF;
                font-size:26px;
                // margin-top:-30px;
                position: absolute;
                // margin-left:55%;
                left:55%;
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

