<template>
    <div>
        <commonHe></commonHe>
        <div>
            <iframe id="show-iframe" frameborder=0 scrolling="yes" style="overflow-y:auto;"  v-bind:src="financeUrl" ></iframe>
        </div> 
    </div>
</template>
<script>
import commonHe from '../components/commonHe'
import {financeUrl} from '../api/api'

export default {
    data() {
      return {
          orgId:'',
          orgName:localStorage.getItem("orgName"),
          financeUrl: financeUrl + '?orgId=' + this.orgId
      };
    },
    components:{
        commonHe
    },
    created(){
        this.orgId=localStorage.getItem("orgId");
        this.financeUrl = financeUrl + '?orgId=' + this.orgId;
    },
    mounted(){
      let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
      document.getElementById("show-iframe").style.height = (h - 68) + "px";
      let w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //浏览器高度
      document.getElementById("show-iframe").style.width = (w - 201) + "px";
    }
}
</script>
