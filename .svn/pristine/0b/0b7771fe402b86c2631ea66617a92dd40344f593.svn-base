<template>
    <div>
        <commonHe></commonHe>
        <div>
            <iframe id="show-iframe" frameborder=0 scrolling="yes" style="overflow-y:auto;" v-bind:src="mallUrl"></iframe>
        </div> 
    </div>
</template>
<script>
import commonHe from '../components/commonHe'
import {mallUrl} from '../api/api'
export default {
    data() {
      return {
            orgName:localStorage.getItem("orgName"),
            mallUrl : mallUrl
      };
    },
    components:{
        commonHe
    },
    mounted(){
      let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
      document.getElementById("show-iframe").style.height = (h - 68) + "px";
      let w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //浏览器高度
      document.getElementById("show-iframe").style.width = (w - 201) + "px";
    }
}
</script>
<style lang="scss" scoped>
$left-width:200px;
#show-iframe{
    width: 800px;
    height: 800px;
}
</style>


