<template>
    <div>
        <commonHe></commonHe>
        <div>
            <iframe id="show-iframe" frameborder=0 scrolling="yes" style="overflow-y:auto;" :src="'http://60.205.104.221:9099/serv/info_list.aspx?userid='+userId"></iframe>
        </div> 
        <!-- <div>333333333333</div> -->
    </div>
</template>
<script>
import commonHe from '../../components/commonHe'
export default {
    data(){
        return{
            userId:""
        }
    },
    components:{
        commonHe
    },
    created(){
        this.userId=localStorage.getItem("userId")
        // alert(this.userId)
    },
    mounted(){
      let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
      document.getElementById("show-iframe").style.height = (h - 68) + "px";
      let w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //浏览器高度
      document.getElementById("show-iframe").style.width = (w - 201) + "px";
    }
}
</script>

