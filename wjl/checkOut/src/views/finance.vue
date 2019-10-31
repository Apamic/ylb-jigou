<template>
    <div>
        <commonHe></commonHe>
        <div>
            <iframe id="show-iframe" frameborder=0 scrolling="yes" style="overflow-y:auto;" :src="'http://47.92.25.25/finance/page/finance/bill_org.shtml?orgId='+orgId"></iframe>
        </div> 
    </div>
</template>
<script>
import commonHe from '../components/commonHe'
export default {
    data() {
      return {
          orgId:'',
          orgName:localStorage.getItem("orgName")
      };
    },
    components:{
        commonHe
    },
    created(){
        this.orgId=localStorage.getItem("orgId")
    },
    mounted(){
      let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
      document.getElementById("show-iframe").style.height = (h - 68) + "px";
      let w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //浏览器高度
      document.getElementById("show-iframe").style.width = (w - 201) + "px";
    }
}
</script>
