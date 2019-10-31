<template>
    <div>
        <commonHe></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="zhenge">
                    <div class="yggl-ym nrsh">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="待审核" name="first">
                                <div class="hzglys-t nrgl-t">  
                                    <div class="zuhe">
                                        <div class="dandusk">
                                            <el-form ref="form" :model="form" label-width="60px">
                                                <el-form-item label="来源">
                                                    <el-select v-model="form.region" placeholder="全部">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-form>
                                        </div>
                                        <div class="xiank180">
                                            <el-input placeholder="请输入文章标题" v-model="input1" class="input-with-select">
                                                <el-button slot="append">搜索</el-button>
                                            </el-input>
                                        </div> 
                                    </div>  
                                </div>
                                <div class="hxmjcbiao">
                                    <el-table  :data="tableData" style="width: 100%">
                                        <el-table-column label="文章标题">
                                            <div class="tdtuwen">
                                                <div class="tdtuwen-tu"><img src="../../assets/images/0.jpg"/></div>
                                                <div class="tdtuwen-wen">
                                                    <h2>国务院任免翁铁慧、郑富芝国务院任免翁铁慧</h2>
                                                    <p>医院介绍</p>
                                                    <div class="tdwensj">
                                                        <span>2019-03-01 08:45:01</span>
                                                        <el-tag type="warning">待审核</el-tag>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-table-column>
                                        <el-table-column  prop="leixing"  label="类型"  width="100">
                                        </el-table-column>
                                        
                                        <el-table-column label="操作" width="160">  
                                            <router-link to="">查看</router-link>
                                            <router-link to="">编辑</router-link>
                                            <router-link to="/qunfa">群发</router-link>
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="已通过" name="second">
                                <div class="hzglys-t nrgl-t">  
                                    <div class="zuhe">
                                        <div class="dandusk">
                                            <el-form ref="form" :model="form" label-width="60px">
                                                <el-form-item label="来源">
                                                    <el-select v-model="form.region" placeholder="全部">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-form>
                                        </div>
                                        <div class="xiank180">
                                            <el-input placeholder="请输入文章标题" v-model="input1" class="input-with-select">
                                                <el-button slot="append">搜索</el-button>
                                            </el-input>
                                        </div> 
                                    </div>  
                                </div>
                                <div class="hxmjcbiao">
                                    <el-table  :data="tableData" style="width: 100%">
                                        <el-table-column label="文章标题">
                                            <div class="tdtuwen">
                                                <div class="tdtuwen-tu"><img src="../../assets/images/0.jpg"/></div>
                                                <div class="tdtuwen-wen">
                                                    <h2>国务院任免翁铁慧、郑富芝国务院任免翁铁慧</h2>
                                                    <p>医院介绍</p>
                                                    <div class="tdwensj">
                                                        <span>2019-03-01 08:45:01</span>
                                                        <el-tag type="success">已通过</el-tag>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-table-column>
                                        <el-table-column  prop="leixing"  label="类型"  width="100">
                                        </el-table-column>
                                        
                                        <el-table-column label="操作" width="160">  
                                            <router-link to="/huanzxq">查看</router-link>
                                            <router-link to="/huanzxq">编辑</router-link>
                                            <router-link to="/huanzxq">群发</router-link>
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="未通过" name="third">
                                <div class="hzglys-t nrgl-t">  
                                    <div class="zuhe">
                                        <div class="dandusk">
                                            <el-form ref="form" :model="form" label-width="60px">
                                                <el-form-item label="来源">
                                                    <el-select v-model="form.region" placeholder="全部">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-form>
                                        </div>
                                        <div class="xiank180">
                                            <el-input placeholder="请输入文章标题" v-model="input1" class="input-with-select">
                                                <el-button slot="append">搜索</el-button>
                                            </el-input>
                                        </div> 
                                    </div>  
                                </div>
                                <div class="hxmjcbiao">
                                    <el-table  :data="tableData" style="width: 100%">
                                        <el-table-column label="文章标题">
                                            <div class="tdtuwen">
                                                <div class="tdtuwen-tu"><img src="../../assets/images/0.jpg"/></div>
                                                <div class="tdtuwen-wen">
                                                    <h2>国务院任免翁铁慧、郑富芝国务院任免翁铁慧</h2>
                                                    <p>医院介绍</p>
                                                    <div class="tdwensj">
                                                        <span>2019-03-01 08:45:01</span>
                                                        <el-tag type="info">未通过</el-tag>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-table-column>
                                        <el-table-column  prop="leixing"  label="类型"  width="100">
                                        </el-table-column>
                                        
                                        <el-table-column label="操作" width="160">  
                                            <router-link to="/huanzxq">查看</router-link>
                                            <router-link to="/huanzxq">编辑</router-link>
                                            <router-link to="/huanzxq">群发</router-link>
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="全部" name="fourth">
                                <div class="hzglys-t nrgl-t">  
                                    <div class="zuhe">
                                        <div class="dandusk">
                                            <el-form ref="form" :model="form" label-width="60px">
                                                <el-form-item label="来源">
                                                    <el-select v-model="form.region" placeholder="全部">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-form>
                                        </div>
                                        <div class="xiank180">
                                            <el-input placeholder="请输入文章标题" v-model="input1" class="input-with-select">
                                                <el-button slot="append">搜索</el-button>
                                            </el-input>
                                        </div> 
                                    </div>  
                                </div>
                                <div class="hxmjcbiao">
                                    <el-table  :data="tableData" style="width: 100%">
                                        <el-table-column label="文章标题">
                                            <div class="tdtuwen">
                                                <div class="tdtuwen-tu"><img src="../../assets/images/0.jpg"/></div>
                                                <div class="tdtuwen-wen">
                                                    <h2>国务院任免翁铁慧、郑富芝国务院任免翁铁慧</h2>
                                                    <p>医院介绍</p>
                                                    <div class="tdwensj">
                                                        <span>2019-03-01 08:45:01</span>
                                                        <el-tag type="success">待审核</el-tag>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-table-column>
                                        <el-table-column  prop="leixing"  label="类型"  width="100">
                                        </el-table-column>
                                        
                                        <el-table-column label="操作" width="160">  
                                            <router-link to="/huanzxq">查看</router-link>
                                            <router-link to="/huanzxq">编辑</router-link>
                                            <router-link to="/huanzxq">群发</router-link>
                                        </el-table-column>
                                    </el-table>
                                </div>
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
            //tab切换方法默认第1个
            activeName: 'first',
            fits: ['这里是昵称'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            input1: '',
        select: '',
        value: '',
        form: { region: '' },
        //表格
        tableData: [{
            name: '王小虎',
            leixing:'机构',
            age: '20',
            guanzhu:'李四等3人',
            laiyuan:'通过网上注册',
            date: '2019-05-02',
          }, {
            name: '张三',
            leixing:'机构',
            age: '20',
            guanzhu:'李四等3人',
            laiyuan:'通过网上注册',
            date: '2019-05-02',
          }, {
            name: '小虎',
            leixing:'机构',
            age: '30',
            guanzhu:'李四等3人',
            laiyuan:'通过网上注册',
            date: '2019-10-02',
          }],
        tableData7:
        [
        {
         name:'儿科专家',
         num1:'8',
         date:'2018-12-23 12:23:12',
        },
        {
         name:'名医医生',
         num1:'6',
         date:'2018-12-23 12:23:12',
        }
        ],
        formInline: {
          user: '',
          region: ''
        },

        };
    },
    methods: {
       handleClick(tab, event) {
        console.log(tab, event);
      },
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
.xjks-k .el-dialog__footer{background:#fff; width:100%; float:left;}
.xjks-k .dialog-footer{ margin:auto; width:260px;   padding-left: 40px;}
 </style>
