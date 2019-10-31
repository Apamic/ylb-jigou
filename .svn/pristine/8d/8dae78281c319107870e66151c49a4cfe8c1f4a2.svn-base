
<template>
    <div>
      <commonHe v-if="isShowMenu == 1"></commonHe>
        <div class="style-box">
            <div  id="box">
                <div class="zhenge">
                    <div class="yggl-ym">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <!-- 图文： -->
                            <el-tab-pane label="图文" name="first">
                                <div class="hzglys-t nrgl-t">
                                    <el-row class="gdbtn">
                                        <div class="xuanzhong-btn">
                                            <el-button>
                                                <div class="xuanzhong-btn"><router-link to="/chuangtw">创作图文</router-link></div>
                                            </el-button>
                                        </div>
                                    </el-row>
                                    <div class="zuhe" style="width:700px;margin-left:20px;padding-right:0;position:relative;">
                                        <div class="dandusk" style="margin-left:0px;float:left">
                                            <template>
                                                    <span style="color:gray">来源：</span>
                                                    <el-select v-model="selectOption" placeholder="全部">
                                                        <el-option
                                                            v-for="item in options"
                                                            :key="item.sourceTypeName"
                                                            :label="item.sourceTypeName"
                                                            :value="item.sourceType">
                                                        </el-option>
                                                    </el-select>
                                            </template>
                                        </div>
                                        <div class="dandusk" style="float:left;margin-left:10px;width:500px">
                                            <template>
                                                <span style="color:gray">状态：</span>
                                                <el-select  v-model="selectStatus" placeholder="全部" >
                                                    <el-option
                                                        size="medium"
                                                        v-for="item in status"
                                                        :key="item.statusName"
                                                        :label="item.statusName"
                                                        :value="item.status">
                                                    </el-option>
                                                </el-select>
                                            </template>
                                            <el-input style="margin-top:-40px;width:200px;margin-left:180px;float:left" placeholder="请输入文章标题" v-model="searchTitle" class="input-with-select twinput">

                                            </el-input>
                                        </div>
                                        <el-button type="primary" size="" style="float:left;margin-left:155px " @click="twgoSearch">搜索</el-button>

                                    </div>
                                </div>
                                <div class="hxmjcbiao" >
                                    <el-table  :data="tableData" style="width: 100%">
                                        <el-table-column label="文章标题">
                                            <div class="tdtuwen" slot-scope="scope">
                                                <div class="tdtuwen-tu"><img :src="scope.row.photoUrl"/></div>
                                                <div class="tdtuwen-wen">
                                                    <h2>{{scope.row.title}}</h2>
                                                    <p>{{scope.row.tpName}}</p>
                                                    <div class="tdwensj">
                                                        <span>{{scope.row.timeCreate}}</span>
                                                        <el-tag v-if="scope.row.statusName == '已发布'" type="success">{{scope.row.statusName}}</el-tag>
                                                        <el-tag v-else-if="scope.row.statusName == '审核中'" type="danger">{{scope.row.statusName}}</el-tag>
                                                        <el-tag v-else type="info">{{scope.row.statusName}}</el-tag>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-table-column>
                                        <el-table-column  prop="sourceTypeName"  label="类型"  width="100">
                                        </el-table-column>
                                        <el-table-column label="是否显示" width="80">
                                            <template slot-scope="scope">
                                                <el-switch  v-model="scope.row.isHide"
                                                    :disabled="scope.row.status!=2"
                                                    active-color="#409EFF"
                                                    :active-value="0" :inactive-value="1"
                                                    @change="active_text(scope.row)">
                                                </el-switch>
                                            </template>
                                        </el-table-column>
                                        <el-table-column  label="操作" width="160">
                                            <div slot-scope="scope">
                                                <span v-for="(item,index) in scope.row.buttons"
                                                    :key="index">
                                                    <span v-if="item=='预览'" @click="operation(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <span v-if="item=='编辑'" @click="operation(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <span v-if="item=='删除'" @click="operation(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <span v-if="item=='下线'" @click="operation(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <span v-if="item=='分享'" @click="operation(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <!-- <span v-if="item==''" ><router-link to="/mediaShow">{{item}}</router-link></span> -->
                                                    <span v-if="item=='提交审核'" @click="operation(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <span v-if="item=='撤回'" @click="operation(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                </span>
                                                <el-dialog
                                                    title="预览"
                                                    :visible.sync="previewTw"
                                                    class="pre_show"
                                                    :close-on-click-modal="false"
                                                    >
                                                    <div style="height:100%;">
                                                        <iframe  frameborder=0 scrolling="yes" style="overflow-y:auto;height:100%;width:100%;" v-bind:src="previewTwUrl"></iframe>
                                                    </div>
                                                </el-dialog>
                                                <el-dialog
                                                    title="微信扫码分享"
                                                    :visible.sync="shareTw"
                                                    style="text-align:center;"
                                                    class="code_share"
                                                    :close-on-click-modal="false"
                                                    >
                                                    <div style="overflow:hidden;margin:auto">
                                                        <img style="width:160px;height:160px;" :src="shareTwUrl" alt="">
                                                    </div>
                                                    <div @click="downloadCode" style="cursor:pointer; width:200px;text-align:center;height:30px;margin:-10px auto 10px;color:#0076FF;font-size:15px;">下载二维码</div>
                                                    <div class="lianjie-right" style="clear: both;">
                                                      <span style="display:block;width:180px;height:30px;line-height:30px;padding-left:5px;float:left;overflow:hidden;white-space:nowrap;text-overflow: ellipsis;border:1px solid #e5e6e7;margin-left:40px;background-color:#f2f2f2;color:#666666;">{{twLink}}</span>
                                                      <el-button size="mini"
                                                      type="primary"
                                                      style="margin-top:0px;height:32px;float:left;"
                                                      v-clipboard:copy="twLink"
                                                      v-clipboard:success="onCopy"
                                                      v-clipboard:error="onError"
                                                      >复制</el-button>
                                                    </div>
                                                </el-dialog>
                                            </div>
                                        </el-table-column>
                                    </el-table>
                                </div>
                                <el-pagination
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="currentPage"
                                    :page-sizes="[10, 20, 30, 100]"
                                    :page-size="pageSize"
                                    background
                                    layout="prev, pager, next"
                                    :total="total"
                                    class="tuwenFenye"
                                    style="padding-top:50px;margin-left:750px;overflow:hidden;text-align:right">
                                </el-pagination>
                            </el-tab-pane>
                            <!-- 图集： -->
                            <el-tab-pane label="图集" name="second">
                                <div class="hzglys-t nrgl-t">
                                    <el-row class="gdbtn">
                                        <div class="xuanzhong-btn">
                                            <el-button>
                                                <div class="xuanzhong-btn"><router-link to="/chuangtw1">创作图集</router-link></div>
                                            </el-button>
                                        </div>
                                    </el-row>
                                    <div class="zuhe" style="width:700px;margin-left:20px;padding-right:0;position:relative;">
                                        <div class="dandusk" style="margin-left:0px;float:left">
                                            <template >
                                                    <span style="color:gray">来源：</span>
                                                    <el-select v-model="selectOption" placeholder="全部">
                                                        <el-option
                                                            v-for="item in options"
                                                            :key="item.sourceTypeName"
                                                            :label="item.sourceTypeName"
                                                            :value="item.sourceType">
                                                        </el-option>
                                                    </el-select>
                                            </template>
                                        </div>
                                        <div class="dandusk" style="float:left;margin-right:80px;width:500px">
                                            <template>
                                                <span style="color:gray">状态：</span>
                                                <el-select  v-model="selectStatus" placeholder="全部">
                                                    <el-option
                                                        v-for="item in status"
                                                        :key="item.statusName"
                                                        :label="item.statusName"
                                                        :value="item.status">
                                                    </el-option>
                                                </el-select>
                                            </template>
                                            <el-input style="margin-top:-40px;width:200px;margin-left:180px;float:left" placeholder="请输入图集标题" v-model="searchTitleTj" class="input-with-select">

                                            </el-input>
                                        </div>
                                        <el-button type="primary" size="" style="float:left;margin-left:85px" @click="goSearchTj">搜索</el-button>
                                    </div>
                                </div>
                                <div class="hxmjcbiao">
                                    <el-table  :data="tjTableData" style="width: 100%">
                                        <el-table-column label="文章标题">
                                            <div class="tdtuwen" slot-scope="scope">
                                                <div class="tdtuwen-tu"><img :src="scope.row.photoUrl"></div>
                                                <div class="tdtuwen-wen">
                                                    <h2>{{scope.row.title}}</h2>
                                                    <p>{{scope.row.tpName}}</p>
                                                    <div class="tdwensj">
                                                        <span>{{scope.row.timeCreate}}</span>
                                                        <el-tag v-if="scope.row.statusName == '已发布'" type="success">{{scope.row.statusName}}</el-tag>
                                                        <el-tag v-else-if="scope.row.statusName == '审核中'" type="danger">{{scope.row.statusName}}</el-tag>
                                                        <el-tag v-else type="info">{{scope.row.statusName}}</el-tag>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-table-column>
                                        <el-table-column  prop="leixing"  label="类型"  width="100">
                                            <span  slot-scope="scope">{{scope.row.sourceTypeName}}</span>
                                        </el-table-column>
                                        <el-table-column label="是否显示" width="80">
                                            <template slot-scope="scope">
                                                <el-switch  v-model="scope.row.isHide"
                                                    :disabled="scope.row.status!=2"
                                                    active-color="#409EFF"
                                                    :active-value="0" :inactive-value="1"
                                                    @change="active_text(scope.row)">
                                                </el-switch>
                                            </template>
                                        </el-table-column>
                                        <el-table-column label="操作" width="180">
                                            <div slot-scope="scope">
                                                <span v-for="(item,index) in scope.row.buttons"
                                                    :key="index">
                                                    <!-- <span @click="operation(item,scope.row)"><router-link to="">{{item}}</router-link></span> -->
                                                    <span v-if="item=='预览'" @click="operationTj(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <span v-if="item=='编辑'" @click="operationTj(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <span v-if="item=='删除'" @click="operationTj(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <span v-if="item=='下线'" @click="operationTj(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <span v-if="item=='分享'" @click="operationTj(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <span v-if="item=='提交审核'" @click="operationTj(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <span v-if="item=='撤回'" @click="operationTj(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                </span>
                                                <el-dialog
                                                    title="预览"
                                                    :visible.sync="previewTj"
                                                    class="pre_show"
                                                    :close-on-click-modal="false"
                                                    >
                                                    <div style="height:100%;">
                                                        <iframe  frameborder=0 scrolling="yes" style="overflow-y:auto;height:100%;width:100%;" v-bind:src="previewTjUrl"></iframe>
                                                    </div>
                                                </el-dialog>
                                                <el-dialog
                                                    title="微信扫码分享"
                                                    :visible.sync="shareTj"
                                                    style="text-align:center;"
                                                    class="code_share"
                                                    :close-on-click-modal="false"
                                                    >
                                                    <div style="overflow:hidden;margin:auto">
                                                        <img style="width:160px;height:160px;" :src="shareTwUrl" alt="">
                                                    </div>
                                                    <div @click="downloadCode" style="cursor:pointer; width:200px;text-align:center;height:30px;margin:-10px auto 10px;color:#0076FF;font-size:15px;">下载二维码</div>
                                                    <div class="lianjie-right" style="clear: both;">
                                                      <span style="display:block;width:180px;height:30px;line-height:30px;padding-left:5px;float:left;overflow:hidden;white-space:nowrap;text-overflow: ellipsis;border:1px solid #e5e6e7;margin-left:40px;background-color:#f2f2f2;color:#666666;">{{twLink}}</span>
                                                      <el-button size="mini"
                                                      type="primary"
                                                      style="margin-top:0px;height:32px;float:left;"
                                                      v-clipboard:copy="twLink"
                                                      v-clipboard:success="onCopy"
                                                      v-clipboard:error="onError"
                                                      >复制</el-button>
                                                    </div>
                                                </el-dialog>
                                            </div>
                                        </el-table-column>
                                    </el-table>
                                </div>
                                <el-pagination
                                    @size-change="handleSizeChangeTj"
                                    @current-change="handleCurrentChangeTj"
                                    :current-page="currentPageTj"
                                    :page-sizes="[10, 20, 30, 100]"
                                    :page-size="pageSize"
                                    background
                                    layout="prev, pager, next"
                                    :total="totalTj"
                                    class="tuwenFenye"
                                    style="padding-top:50px;margin-left:750px;overflow:hidden;text-align:right">
                                </el-pagination>
                            </el-tab-pane>
                            <el-tab-pane label="视频" name="third">
                                <div class="hzglys-t nrgl-t">
                                    <el-row class="gdbtn">
                                        <div class="xuanzhong-btn">
                                            <el-button>
                                                <div class="xuanzhong-btn"><router-link to="/videoEdit">创作视频</router-link></div>
                                            </el-button>
                                        </div>
                                    </el-row>
                                    <div class="zuhe" style="width:700px;margin-left:20px;padding-right:0;position:relative;">
                                        <div class="dandusk" style="margin-left:0px;float:left">
                                            <template >
                                                    <span style="color:gray">来源：</span>
                                                    <el-select v-model="selectOption" placeholder="全部">
                                                        <el-option
                                                            v-for="item in options"
                                                            :key="item.sourceTypeName"
                                                            :label="item.sourceTypeName"
                                                            :value="item.sourceType"
                                                            >
                                                        </el-option>
                                                    </el-select>
                                            </template>
                                        </div>
                                        <div class="dandusk" style="float:left">
                                            <template>
                                                <span style="color:gray">状态：</span>
                                                <el-select  v-model="selectStatus" placeholder="全部" >
                                                    <el-option
                                                        size="medium"
                                                        v-for="item in status"
                                                        :key="item.statusName"
                                                        :label="item.statusName"
                                                        :value="item.status">
                                                    </el-option>
                                                </el-select>
                                            </template>
                                            <el-input style="margin-top:-40px;width:200px;margin-left:185px !important;float:left" placeholder="请输入视频标题" v-model="spSearchTitle" class="input-with-select">

                                            </el-input>
                                        </div>
                                        <el-button class="sp-button" type="primary" size="" style="float:left;margin-left:160px !important;" @click="goSearchSp">搜索</el-button>
                                    </div>
                                </div>
                                <div class="hxmjcbiao">
                                    <el-table  :data="spTableData" style="width: 100%">
                                        <el-table-column label="文章标题" >
                                            <div class="tdtuwen" slot-scope="scope">
                                                <div class="tdtuwen-tu"><img :src="scope.row.photoUrl"></div>
                                                <div class="tdtuwen-wen">
                                                    <h2>{{scope.row.title}}</h2>
                                                    <p>{{scope.row.tpName}}</p>
                                                    <div class="tdwensj">
                                                        <span>{{scope.row.timeCreate}}</span>
                                                        <el-tag v-if="scope.row.statusName == '已发布'" type="success">{{scope.row.statusName}}</el-tag>
                                                        <el-tag v-else-if="scope.row.statusName == '审核中'" type="danger">{{scope.row.statusName}}</el-tag>
                                                        <el-tag v-else type="info">{{scope.row.statusName}}</el-tag>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-table-column>
                                        <el-table-column  prop="leixing"  label="类型"  width="100">
                                            <span  slot-scope="scope">{{scope.row.sourceTypeName}}</span>
                                        </el-table-column>
                                        <el-table-column label="是否显示" width="80">
                                            <template slot-scope="scope">
                                                <el-switch  v-model="scope.row.isHide"
                                                    :disabled="scope.row.status!=2"
                                                    active-color="#409EFF"
                                                    :active-value="0" :inactive-value="1"
                                                    @change="active_text(scope.row)">
                                                </el-switch>
                                            </template>
                                        </el-table-column>

                                        <el-table-column label="操作" width="180">
                                            <div slot-scope="scope">
                                                <span v-for="(item,index) in scope.row.buttons"
                                                    :key="index">
                                                    <!-- <span @click="operationSp(item,scope.row)"><router-link to="">{{item}}</router-link></span> -->
                                                    <span v-if="item=='预览'" @click="operationSp(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <span v-if="item=='编辑'" @click="operationSp(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <span v-if="item=='删除'" @click="operationSp(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <span v-if="item=='下线'" @click="operationSp(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <span v-if="item=='分享'" @click="operationSp(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <span v-if="item=='提交审核'" @click="operationSp(item,scope.row)"><router-link to="">{{item}}</router-link></span>
                                                    <span v-if="item=='撤回'" @click="operationSp(item,scope.row)"><router-link to="">{{item}}</router-link></span>

                                                </span>
                                                <el-dialog
                                                    title="预览"
                                                    :visible.sync="previewSp"
                                                    class="pre_show"
                                                    :close-on-click-modal="false"
                                                    >
                                                    <div style="height:100%;">
                                                        <iframe  frameborder=0 scrolling="yes" style="overflow-y:auto;height:100%;width:100%;" v-bind:src="previewSpUrl"></iframe>
                                                    </div>
                                                </el-dialog>
                                                <el-dialog
                                                    title="微信扫码分享"
                                                    :visible.sync="shareSp"
                                                    style="text-align:center;"
                                                    class="code_share"
                                                    :close-on-click-modal="false"
                                                    >
                                                    <div style="overflow:hidden;margin:auto">
                                                        <img style="width:160px;height:160px;" :src="shareTwUrl" alt="">
                                                    </div>
                                                    <div @click="downloadCode" style="cursor:pointer; width:200px;text-align:center;height:30px;margin:-10px auto 10px;color:#0076FF;font-size:15px;">下载二维码</div>
                                                    <div class="lianjie-right" style="clear: both;">
                                                      <span style="display:block;width:180px;height:30px;line-height:30px;padding-left:5px;float:left;overflow:hidden;white-space:nowrap;text-overflow: ellipsis;border:1px solid #e5e6e7;margin-left:40px;background-color:#f2f2f2;color:#666666;">{{twLink}}</span>
                                                      <el-button size="mini"
                                                      type="primary"
                                                      style="margin-top:0px;height:32px;float:left;"
                                                      v-clipboard:copy="twLink"
                                                      v-clipboard:success="onCopy"
                                                      v-clipboard:error="onError"
                                                      >复制</el-button>
                                                    </div>
                                                </el-dialog>
                                            </div>

                                        </el-table-column>


                                    </el-table>
                                </div>
                                <el-pagination
                                    @size-change="handleSizeChangeSp"
                                    @current-change="handleCurrentChangeSp"
                                    :current-page="currentPageSp"
                                    :page-sizes="[10, 20, 30, 100]"
                                    :page-size="pageSize"
                                    background
                                    layout="prev, pager, next"
                                    :total="totalSp"
                                    class="tuwenFenye"
                                    style="padding-top:50px;margin-left:750px;overflow:hidden;text-align:right">
                                </el-pagination>
                            </el-tab-pane>
                            <el-tab-pane label="文章分组" name="fourth">
                                <div class="tishikuang">文章分组功能可帮助您更高效地分类管理文章，让用户更加便捷找到所需文章。</div>
                                <el-row class="tou-btn">
                                    <el-button type="primary" @click="alertVisible = true">添加分组</el-button>
                                    <!-- 添加文章分组弹窗： -->
                                    <el-dialog title="添加分组" :visible.sync="alertVisible" class="group_dialog" :close-on-click-modal="false">
                                        <el-form :model="form">
                                            <el-form-item label="分组名称" :label-width="formLabelWidth">
                                                <el-input v-model="groupName" autocomplete="off" style="width:99%;"></el-input>
                                            </el-form-item>
                                        </el-form>
                                        <div slot="footer" class="dialog-footer" style="margin-top:-100px;position:relative;">
                                            <el-button @click="alertVisible = false" style="position: absolute;right:80px;">取 消</el-button>
                                            <el-button type="primary" @click="groupSure" style="position: absolute;right:0;">确 定</el-button>
                                        </div>
                                    </el-dialog>
                                    <!-- 编辑分组弹窗： -->
                                    <el-dialog title="修改分组名称" :visible.sync="alertEditVisible" class="group_dialog" :close-on-click-modal="false">
                                        <el-form :model="form">
                                            <el-form-item label="分组名称" :label-width="formLabelWidth">
                                                <el-input v-model="editGroupName" autocomplete="off" style="width:99%;"></el-input>
                                            </el-form-item>
                                        </el-form>
                                        <div slot="footer" class="dialog-footer" style="margin-top:-100px;position:relative;">
                                            <el-button @click="alertEditVisible = false" style="position: absolute;right:80px;">取 消</el-button>
                                            <el-button type="primary" @click="groupEditSure" style="position: absolute;right:0px;">确 定</el-button>
                                        </div>
                                    </el-dialog>
                                    <!-- 完 -->

                                    <div class="sousuo1">
                                        <el-input v-model="groupSearchInp" placeholder="请输入分组名称"></el-input>
                                        <el-button type="primary" style="background-color:#409EFF;color:white" @click="groupSearch">搜索</el-button>
                                    </div>
                                </el-row>
                                <div class="hxmbiaoge2">
                                    <el-table ref="multipleTable" :data="articleData"  tooltip-effect="dark"
                                    style="width: 100%" >
                                        <el-table-column prop="name"  label="分组名称" width="120">
                                            <span slot-scope="scope">
                                                {{scope.row.classifyName}}
                                            </span>
                                        </el-table-column>
                                        <el-table-column prop="num1"  label="文章数">
                                            <span slot-scope="scope">
                                                {{scope.row.number}}
                                            </span>
                                        </el-table-column>
                                        <el-table-column prop="date"  label="创建时间" >
                                            <span slot-scope="scope">
                                                {{scope.row.timeCreate}}
                                            </span>
                                        </el-table-column>

                                        <el-table-column  label="操作" width="220" >
                                            <span slot-scope="scope">
                                                <el-button @click="goManage(scope.row)" type="text" size="small">内容管理</el-button>
                                                <el-button @click="editArticel(scope.row.classifyId)" type="text" size="small">编辑</el-button>
                                                <el-button @click="shareArticel(scope.row.classifyId)" type="text" size="small">分享</el-button>
                                                <el-button @click="deleteArticel(scope.row.classifyId)" type="text" size="small">删除</el-button>

                                            </span>
                                        </el-table-column>
                                    </el-table>
                                    <el-dialog
                                      title="微信扫码访问文章列表"
                                      :visible.sync="isShowShareGroup"
                                      style="text-align:center;"
                                      class="code_share"
                                      :close-on-click-modal="false"
                                    >
                                      <div style="overflow:hidden;margin:auto">
                                        <img style="width:160px;height:160px;" :src="shareGroupUrl" alt="">
                                      </div>
                                      <div @click="downloadGroupCode()" style="cursor:pointer; width:200px;text-align:center;height:30px;margin:-10px auto 10px;color:#0076FF;font-size:15px;">下载二维码</div>
                                      <div class="lianjie-right" style="clear: both;">
                                        <span style="display:block;width:180px;height:30px;line-height:30px;padding-left:5px;float:left;overflow:hidden;white-space:nowrap;text-overflow: ellipsis;border:1px solid #e5e6e7;margin-left:40px;background-color:#f2f2f2;color:#666666;">{{shareGroupLink}}</span>
                                        <el-button size="mini"
                                                   type="primary"
                                                   style="margin-top:0px;height:32px;float:left;"
                                                   v-clipboard:copy="shareGroupLink"
                                                   v-clipboard:success="onCopy"
                                                   v-clipboard:error="onError"
                                        >复制</el-button>
                                      </div>
                                    </el-dialog>
                                </div>
                                <!-- 文章分组翻页： -->
                                <el-pagination
                                    @size-change="groupSizeChange"
                                    @current-change="groupCurrentChange"
                                    :current-page="groupCurrentPage"
                                    :page-sizes="[10, 20, 30, 100]"
                                    :page-size="groupPageSize"
                                    background
                                    layout="prev, pager, next"
                                    :total="groupTotal"
                                    class="tuwenFenye"
                                    style="padding-top:50px;margin-left:750px;overflow:hidden;text-align:right">
                                </el-pagination>
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
// 图文查询接口导入：
import {mediaTuwen} from '../../api/api'
// 状态下拉：
import {status} from '../../api/api'
// 控制显隐：
import {hide} from '../../api/api'
// 操作按钮撤回和下线：
import {reCall} from '../../api/api'
// 删除：
import {newsDelete} from '../../api/api'
// 图集：
import pics from '../../components/media/pics'
// 文章分组查询接口：
import {newsClassifies} from '../../api/api'
// 文章分组删除按钮：
import {newsClassifiesDelete} from '../../api/api'
// 文章分组添加：
import {newsClassifiesAdd} from '../../api/api'
// 文章分组编辑：
import {newsClassifiesUpdate} from '../../api/api'
import {newsDetail} from '../../api/api'
// 预览接口：
import {previewHtml} from '../../api/api'
// 分享接口：
import {newsShare} from '../../api/api'
// 二维码下载：
import {codeDownload} from '../../api/api'
// 分组分享接口
import {groupShare} from '../../api/api'
import {groupCodeDownload} from '../../api/api'

export default {
    data(){
        return{
            isShowMenu : 1,
            // 二维码下载：
            downloadId:'',
            // 视频分享：
            shareSp:false,
            shareSpUrl:'',
            // 图文分享：
            shareTw:false,
            shareTwUrl:'',
            twLink:'123',
            // 图集分享：
            shareTj:false,
            shareTjUrl:'',

            // 视频预览：
            previewSp:false,
            previewSpUrl:'',
            // 图文预览：
            previewTw:false,
            previewTwUrl:'',
            // 图集预览：
            previewTj:false,
            previewTjUrl:'',
            //分组分享
            isShowShareGroup:false,
            shareGroupUrl:'',
            shareGroupLink:'',
            groupDownloadId : '',

        // 视频翻页：
        totalSp:5,
        currentPageSp:1,
        // 图集翻页：
        currentPageTj:1,
        totalTj:8,
        pageSizeTj:5,
        // 图集输入框：
        searchTitleTj:'',

        //tab切换方法默认第1个
        activeName: 'first',
        fits: ['这里是昵称'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        input1: '',
        select: '',
        value: '',
        form: { region: '' },
        // 图文下拉：
        options:[],
        status:[],
        selectOption:'',
        selectStatus:'',
        // 图文搜索框：
        searchTitle:'',
        // 图文操作按钮：
        buttons:"",
        //表格
        tableData: [],
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
        //图文 分页：
        total:5,
        currentPage:1,// 当前页码
        pageSize:5,
        searchTwVal:1,
        // 图集：
        tjInput:'',
        tjSelectOption:'',
        tjOptions:'',
        tjTableData:[],
        // 视频：
        spTableData:[],
        spSearchTitle:'',

        // 文章分组：
        // 翻页：
        groupTotal:5,
        groupCurrentPage:1,// 当前页码
        groupPageSize:5,

        articleData:[],
        groupSearchInp:'',
        // 添加分组弹框：
        formLabelWidth: '120px',
        alertVisible:false,
        groupName:'',

        // 编辑弹窗：
        alertEditVisible:false,
        editGroupName:'',
        };
    },
    methods: {
      handleClose(){
        console.log('ok1234')
      },
        // 点击下载二维码：
        downloadCode(){
            window.location.href =codeDownload+this.downloadId
        },
        // 点击复制分享链接：
        // 点击复制按钮：
        onCopy () {
        this.$message({
          message: `复制成功！`,
          type: 'success'
        });

        },
        onError () {
        this.$message({
          message: `复制失败！`,
          type: 'warning'
        });
        },

        // 图集搜索：
        twTj(){
            alert("111")
        },
        // 图文搜索：
        twgoSearch(){
            var searchList={
            "newsStyle": 1,
            "pageNum": 1,
            "pageSize": 5,
            "sourceType":this.selectOption,
            "status":this.selectStatus,
            "title":this.searchTitle
        }
        mediaTuwen(searchList).then(data=>{
            this.total=data.total
            console.log("医院自媒体数据",data)
            let tableData = data.data;
            tableData.forEach(item=>{
                item.isHideBool = item.isHide===0?true:false;
            })
            this.tableData=tableData
            // console.log("this.table",this.tableData)
        })
        },
        // 视频搜做函数：
        goSearchSp(){
            // alert(this.spSearchTitle)
            var searchList={
            "newsStyle": 6,
            "pageNum": 1,
            "pageSize": 5,
            "sourceType":this.selectOption,
            "status":this.selectStatus,
            "title":this.spSearchTitle
        }
        mediaTuwen(searchList).then(data=>{
            this.spTableData = data.data;

        })


        },
        // 图集操作按钮：
        operationTj(item,list){
            if(item=="删除"){
            this.$confirm('此操作将删除该图集, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                var recallList={
                    "newsId": list.newsId,
                }
                newsDelete(recallList).then(data=>{
                    console.log(data)
                    if(data.rtnCode==1){
                        this.$message({
                        type: 'success',
                        message: '操作成功!'
                    });
                        var searchList={
                            "newsStyle": 5,
                            "pageNum": 1,
                            "pageSize": 5,
                            "sourceType":this.selectOption,
                            "status":this.selectStatus,
                            "title":this.searchTitleTj
                        }
                        mediaTuwen(searchList).then(data=>{
                            this.tjTableData = data.data;
                            this.totalTj=data.total
                        })
                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }else if(item=="预览"){
            // localStorage.setItem('newsId', list.newsId);
            // this.$router.push('/atlasShow')
            this.previewTj=true;
                var newsId=list.newsId;
                var list={
                  "newsId": newsId
                }
                previewHtml(list).then(data=>{
                    console.log("预览视频取到的信息",data)
                    this.previewTjUrl=data.data
                    console.log(this.previewSpUrl)
                })
        }else if(item=="编辑"){
            localStorage.setItem('newsId', list.newsId);
            this.$router.push('/atlasEdit')
        }else if(item=="下线"){
            this.$confirm('此操作将下线该文章, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                var recallList={
                    "newsId": list.newsId,
                    "status": 4
                }
                reCall(recallList).then(data=>{
                    console.log(data)
                    if(data.rtnCode==1){
                        this.$message({
                        type: 'success',
                        message: '操作成功!'
                    });
                    var searchList={
                            "newsStyle": 5,
                            "pageNum": 1,
                            "pageSize": 5,
                            "sourceType":this.selectOption,
                            "status":this.selectStatus,
                            "title":this.searchTitleTj
                        }
                        mediaTuwen(searchList).then(data=>{
                            this.tjTableData = data.data;
                            this.totalTj=data.total
                        })
                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消下线'
                });
            });

        }else if(item=="提交审核"){
            this.$confirm('确认提交?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                var recallList={
                    "newsId": list.newsId,
                    "status": 1
                }
                reCall(recallList).then(data=>{
                    // console.log(data)
                    if(data.rtnCode==1){
                        this.$message({
                        type: 'success',
                        message: '操作成功!'
                    });
                    var searchList={
                            "newsStyle": 5,
                            "pageNum": 1,
                            "pageSize": 5,
                            "sourceType":this.selectOption,
                            "status":this.selectStatus,
                            "title":this.searchTitleTj
                        }
                        mediaTuwen(searchList).then(data=>{
                            this.tjTableData = data.data;
                            this.totalTj=data.total
                        })

                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消提交'
                });
            });

        }else if(item=='分享'){
            this.shareTj=true
            this.downloadId=list.newsId;
            var shareList={
                    "newsId": list.newsId,
                }
            newsShare(shareList).then(data=>{
                // console.log(data,"分享")
                this.shareTwUrl=data.data.shareCode
                this.twLink=data.data.shareUrl
            })
        }else if(item=="撤回"){
              this.$confirm('此操作将撤回该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            var recallList={
                "newsId": list.newsId,
                "status": 0
            }
            reCall(recallList).then(data=>{
                console.log(data)
                if(data.rtnCode==1){
                    this.$message({
                    type: 'success',
                    message: '撤回成功!'
                });
                var searchList={
                            "newsStyle": 5,
                            "pageNum": 1,
                            "pageSize": 5,
                            "sourceType":this.selectOption,
                            "status":this.selectStatus,
                            "title":this.searchTitleTj
                        }
                        mediaTuwen(searchList).then(data=>{
                            this.tjTableData = data.data;
                            this.totalTj=data.total
                        })
                }
            })
        }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消撤回'
            });
        });

        }

        },
        // 视频按钮操作：
        operationSp(item,list){
            if(item=="查看"){
                // console.log(item,"aa",list)
                localStorage.setItem('videoNewsId', list.newsId);
                this.$router.push('/videoShow')
            }else if(item=="编辑"){

                localStorage.setItem('videoNewsId', list.newsId);
                this.$router.push('/editVideo')
            }else if(item=="删除"){
                this.$confirm('此操作将删除该视频, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                var recallList={
                    "newsId": list.newsId,
                }
                newsDelete(recallList).then(data=>{
                    // console.log(data)
                    if(data.rtnCode==1){
                        this.$message({
                        type: 'success',
                        message: '操作成功!'
                    });
                        var searchList={
                        "newsStyle": 6,
                        "pageNum": 1,
                        "pageSize": 5,
                        "sourceType":this.selectOption,
                        "status":this.selectStatus,
                        "title":this.spSearchTitle
                    }
                    mediaTuwen(searchList).then(data=>{
                        this.spTableData = data.data;
                    })


                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });

            }else if(item=="提交审核"){
                this.$confirm('确认提交?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                var recallList={
                    "newsId": list.newsId,
                    "status": 1
                }
                reCall(recallList).then(data=>{
                    // console.log(data)
                    if(data.rtnCode==1){
                        this.$message({
                        type: 'success',
                        message: '操作成功!'
                    });
                     var searchList={
                        "newsStyle": 6,
                        "pageNum": this.currentPageSp,
                        "pageSize": 5,
                        "sourceType":this.selectOption,
                        "status":this.selectStatus,
                        "title":this.spSearchTitle
                    }
                    mediaTuwen(searchList).then(data=>{
                        this.spTableData = data.data;
                        this.totalSp=data.total
                    })

                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消提交'
                });
            });



            }else if(item=="撤回"){
                this.$confirm('确认撤回?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                var recallList={
                "newsId": list.newsId,
                "status": 0
            }
            reCall(recallList).then(data=>{
                // console.log(data)
                if(data.rtnCode==1){
                    this.$message({
                    type: 'success',
                    message: '撤回成功!'
                });
                var searchList={
                    "newsStyle": 6,
                    "pageNum": this.currentPageSp,
                    "pageSize": 5,
                    "sourceType":this.selectOption,
                    "status":this.selectStatus,
                    "title":this.spSearchTitle
                }
                mediaTuwen(searchList).then(data=>{
                    // console.log("视频提交")
                    this.spTableData = data.data;
                    this.totalSp=data.total
                })
                }
            })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消撤回'
                });
            });
            }else if(item=="预览"){
                // alert("预览弹窗")
                this.previewSp=true;
                var newsId=list.newsId;
                var list={
                  "newsId": newsId
                }
                previewHtml(list).then(data=>{
                    // console.log("预览视频取到的信息",data)
                    this.previewSpUrl=data.data
                    console.log(this.previewSpUrl)
                })

            }else if(item=="分享"){
                this.shareSp=true;
                this.downloadId=list.newsId;
                var shareList={
                        "newsId": list.newsId,
                    }
                newsShare(shareList).then(data=>{
                    // console.log(data,"分享")
                    this.shareTwUrl=data.data.shareCode
                    this.twLink=data.data.shareUrl
                })
            }
        },
        // 视频预览关闭：
        preSpClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
        // 视频翻页：
        handleSizeChangeSp(val){
        //    console.log("长度改变:"+val)
        },
        handleCurrentChangeSp(val){
            this.currentPageSp=val;
            var searchList={
            "newsStyle": 6,
            "pageNum": val,
            "pageSize": 5,
            "sourceType":this.selectOption,
            "status":this.selectStatus,
            "title":this.spSearchTitle
        }
        mediaTuwen(searchList).then(data=>{
            this.spTableData = data.data;
            this.totalSp=data.total

        })



        },


        // 图集搜索函数：
        goSearchTj(){
            // alert("111")
            var searchList={
            "newsStyle": 5,
            "pageNum": 1,
            "pageSize": 5,
            "sourceType":this.selectOption,
            "status":this.selectStatus,
            "title":this.searchTitleTj
        }
        mediaTuwen(searchList).then(data=>{
            this.tjTableData = data.data;
            this.totalTj=data.total
        })
        },
                // 分页：
        handleSizeChange(val){
        //    console.log("长度改变:"+val)
        },

        // 图集翻页：
        handleSizeChangeTj(val){
        //    console.log("长度改变:"+val)
        },
        handleCurrentChangeTj(val){
            var tjList={
            "newsStyle": 5,
            "pageNum": val,
            "pageSize": 5,
        }
        mediaTuwen(tjList).then(data=>{
            // this.total=data.total
            console.log("图集数据",data)
            this.tjTableData = data.data;
            this.totalTj=data.total

        })
        },
    //   翻页函数：
        handleCurrentChange(val){
            this.searchTwVal=val
            var searchList={
            "newsStyle": 1,
            "pageNum": val,
            "pageSize": 5,
            "sourceType":this.selectOption,
            "status":this.selectStatus,
            "title":this.searchTitle
        }
        mediaTuwen(searchList).then(data=>{
            // console.log("医院自媒体",data)
            let tableData = data.data;
            tableData.forEach(item=>{
                item.isHideBool = item.isHide===0?true:false;
            })
            this.tableData=tableData
            // console.log("this.table",this.tableData)
        })
        },
        handleClick(tab, event) {
            // console.log(tab, event);
        },
        onSubmit() {
            console.log('submit!');
        },

        // 显隐操作：
        active_text(obj){
          let newsId = obj.newsId;
          let status = obj.status;
            console.log("显隐操作","11")

            if(status=="2"){
                var hideList={
                    "isHide": obj.isHide,
                    "newsId": newsId
                }
                hide(hideList).then(data=>{
                    console.log("显隐操作",data)
                    if(data.rtnCode==1){
                        // this.isHide=!isHide
                        this.$message({
                            message: '操作成功',
                            type: 'success'
                        });
                    }
                })

        }
        //   console.log(a,b)


      },
      goSearch(){
        //   console.log(this.selectOption,this.selectStatus)
        var searchList={
            "newsStyle": 1,
            "pageNum": this.searchTwVal,
            "pageSize": 5,
            "sourceType":this.selectOption,
            "status":this.selectStatus,
            "title":this.searchTitle
        }
        mediaTuwen(searchList).then(data=>{
            this.total=data.total
            console.log("医院自媒体数据",data)
            let tableData = data.data;
            tableData.forEach(item=>{
                item.isHideBool = item.isHide===0?true:false;
            })
            this.tableData=tableData
            // console.log("this.table",this.tableData)
        })
    },
    //   按钮操作：
    operation(item,list){
        // console.log(item,list)
        if(item=="撤回"){
            this.$confirm('此操作将撤回该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            var recallList={
                "newsId": list.newsId,
                "status": 0
            }
            reCall(recallList).then(data=>{
                console.log(data)
                if(data.rtnCode==1){
                    this.$message({
                    type: 'success',
                    message: '撤回成功!'
                });
                }
                var searchList={
                        "newsStyle": 1,
                        "pageNum": this.searchTwVal,
                        "pageSize": 5,
                        "sourceType":this.selectOption,
                        "status":this.selectStatus,
                        "title":this.searchTitle
                    }
                    mediaTuwen(searchList).then(data=>{
                        this.total=data.total
                        // console.log("删除医院自媒体数据",data)
                        let tableData = data.data;
                        tableData.forEach(item=>{
                            item.isHideBool = item.isHide===0?true:false;
                        })
                        this.tableData=tableData

                    })
            })
        }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消撤回'
            });
        });

        }else if(item=="分享"){
            this.shareTw=true
            this.downloadId=list.newsId;
            var shareList={
                    "newsId": list.newsId,
                }
            newsShare(shareList).then(data=>{
                console.log(data,"分享")
                this.shareTwUrl=data.data.shareCode
                this.twLink=data.data.shareUrl
            })

        }else if(item=="下线"){
            this.$confirm('此操作将下线该文章, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                var recallList={
                    "newsId": list.newsId,
                    "status": 4
                }
                reCall(recallList).then(data=>{
                    console.log(data)
                    if(data.rtnCode==1){
                        this.$message({
                        type: 'success',
                        message: '操作成功!'
                    });
                    var searchList={
                        "newsStyle": 1,
                        "pageNum": this.searchTwVal,
                        "pageSize": 5,
                        "sourceType":this.selectOption,
                        "status":this.selectStatus,
                        "title":this.searchTitle
                    }
                    mediaTuwen(searchList).then(data=>{
                        this.total=data.total
                        // console.log("删除医院自媒体数据",data)
                        let tableData = data.data;
                        tableData.forEach(item=>{
                            item.isHideBool = item.isHide===0?true:false;
                        })
                        this.tableData=tableData

                    })

                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消下线'
                });
            });
        }else if(item=="删除"){
            this.$confirm('此操作将删除该文章, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                var recallList={
                    "newsId": list.newsId,
                }
                newsDelete(recallList).then(data=>{
                    // console.log(data)
                    if(data.rtnCode==1){
                        this.$message({
                        type: 'success',
                        message: '操作成功!'
                    });
                    var searchList={
                        "newsStyle": 1,
                        "pageNum": this.searchTwVal,
                        "pageSize": 5,
                        "sourceType":this.selectOption,
                        "status":this.selectStatus,
                        "title":this.searchTitle
                    }
                    mediaTuwen(searchList).then(data=>{
                        this.total=data.total
                        // console.log("删除医院自媒体数据",data)
                        let tableData = data.data;
                        tableData.forEach(item=>{
                            item.isHideBool = item.isHide===0?true:false;
                        })
                        this.tableData=tableData
                        // console.log("this.table",this.tableData)
                    })
                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }else if(item=="预览"){
            this.previewTw=true;
            var newsId=list.newsId;
            var list={
              "newsId": newsId
            }
            previewHtml(list).then(data=>{
                console.log("预览图文取到的信息",data)
                this.previewTwUrl=data.data
                console.log(this.previewTwUrl)
            })

        }else if(item=="编辑"){
            localStorage.setItem('newsId', list.newsId);
            this.$router.push('/edit')
        }else if(item=="提交审核"){
            this.$confirm('此操作将提交该文章, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                var recallList={
                    "newsId": list.newsId,
                    "status": 1
                }
                reCall(recallList).then(data=>{
                    console.log(data)
                    if(data.rtnCode==1){
                        this.$message({
                        type: 'success',
                        message: '操作成功!'
                    });
                    var searchList={
                        "newsStyle": 1,
                        "pageNum": this.searchTwVal,
                        "pageSize": 5,
                        "sourceType":this.selectOption,
                        "status":this.selectStatus,
                        "title":this.searchTitle
                    }
                    mediaTuwen(searchList).then(data=>{
                        this.total=data.total
                        let tableData = data.data;
                        tableData.forEach(item=>{
                            item.isHideBool = item.isHide===0?true:false;
                        })
                        this.tableData=tableData

                    })

                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消提交'
                });
            });
        }
    },

    // 文章分组按钮操作：
    deleteArticel(classifyId){
        this.$confirm('此操作将删除该分组, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            var classifyIdList={
                "classifyId": classifyId
            }
            newsClassifiesDelete(classifyIdList).then(data=>{
                console.log(data)
                if(data.rtnCode==1){
                        this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });

                    var articleList={
                        "pageNum": 1,
                        "pageSize": 5
                    }
                    newsClassifies(articleList).then(data=>{
                        console.log("再取文章分组",data)
                        this.articleData=data.data
                    })
                }else{
                    this.$message({
                        type: 'info',
                        message: '删除失败'
                    });
                }
            })

        }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
          });
        });
    },
    // 编辑：
    editArticel(classifyId){
        localStorage.setItem("classifyId",classifyId)
        this.alertEditVisible=true
    },
    // 分享
    shareArticel(classifyId){
      this.isShowShareGroup = true;
      this.groupDownloadId = classifyId;

      let json = {
        "classifyId": classifyId
      }

      groupShare(json).then(data=>{
        this.shareGroupUrl = data.data.shareCode
        this.shareGroupLink = data.data.shareUrl
      })
    },
    // 点击下载二维码：
    downloadGroupCode(){
      console.log(groupCodeDownload + this.groupDownloadId)
      window.location.href = groupCodeDownload + this.groupDownloadId
    },
    groupEditSure(){
        if(this.editGroupName){
            var groupAddList={
                "classifyName":this.editGroupName,
                "classifyId": localStorage.getItem("classifyId")
            }
            newsClassifiesUpdate(groupAddList).then(data=>{
                if(data.rtnCode==1){
                    this.alertEditVisible=false
                    this.$message({
                        type: 'success',
                        message: '分组修改成功!'
                    });
                    var articleList={
                        "pageNum": this.groupCurrentPage,
                        "pageSize": 5
                    }
                    newsClassifies(articleList).then(data=>{
                        console.log("添加再取文章分组",data)
                        this.articleData=data.data
                    })
                    this.editGroupName='';
                }
                console.log(data)
            })

        }else{
            this.$message({
                type: 'info',
                message: '分组名称不能为空!'
            });

        }
    },

    // 添加分组：
    groupSure(){
        if(this.groupName){
            var groupAddList={
                "classifyName":this.groupName
            }
            newsClassifiesAdd(groupAddList).then(data=>{
                this.alertVisible=false
                if(data.rtnCode==1){
                    this.$message({
                        type: 'success',
                        message: '添加分组成功!'
                    });
                    var articleList={
                        "pageNum": 1,
                        "pageSize": 10
                    }
                    newsClassifies(articleList).then(data=>{
                        console.log("添加再取文章分组",data)
                        this.articleData=data.data
                    })
                    this.groupName='';
                }
                console.log(data)
            })

        }else{
            this.$message({
                type: 'info',
                message: '分组名称不能为空!'
            });

        }

    },
    // 内容管理：
    goManage(list){
        localStorage.setItem("groupContent",JSON.stringify(list))
        this.$router.push("/contentManage")
    },
    // 文章分组搜索：
    groupSearch(){
        var groupSearchList={
                "pageNum": 1,
                "pageSize": 5,
                "classifyName":this.groupSearchInp
            }
        newsClassifies(groupSearchList).then(data=>{
            // console.log(data)
            this.articleData=data.data
            this.groupTotal=data.total
        })
    },
    // 文章分组翻页：
        groupSizeChange(val){
            console.log("长度改变:"+val)
        },
    //   翻页函数：
        groupCurrentChange(val){
            this.groupCurrentPage=val
            var groupSearchList={
                "pageNum": val,
                "pageSize": 5,
                "classifyName":this.groupSearchInp
            }
        newsClassifies(groupSearchList).then(data=>{
            // console.log(data)
            this.articleData=data.data
            this.groupTotal=data.total
        })

        },


    },
    components:{
        commonHe,
        pics
    },
    mounted(){
        let w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //浏览器宽度
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
        document.getElementsByClassName("style-box")[0].style.height = (h - 68) + "px";
        document.getElementsByClassName("style-box")[0].style.width = (w - 200) + "px";
        document.getElementById("box").style.width = (w - 280) + "px";
        document.getElementById("box").style.height = (h - 120) + "px";

      if(this.isShowMenu == 0){
        document.getElementsByClassName("style-box")[0].style.left = 0;
        document.getElementsByClassName("style-box")[0].style.top = 0;
        document.getElementsByClassName("style-box")[0].style.height = "auto";
        document.getElementsByClassName("style-box")[0].style.width = "100%";
        document.getElementById("boxs").style.width = "100%";
        document.getElementById("boxs").style.height = "auto"
      }
    },
    created(){
        // 图文：
        var searchList={
            "newsStyle": 1,
            "pageNum": 1,
            "pageSize": 5,
        }
        mediaTuwen(searchList).then(data=>{
            this.total=data.total
            console.log("医院自媒体数据",data)
            let tableData = data.data;
            tableData.forEach(item=>{
                item.isHideBool = item.isHide===0?true:false;
            })
            this.tableData=tableData
        })
        status().then(data=>{
            this.options=data.data.sourceList
            this.status=data.data.statusList

        })


        // 图集：
        var tjList={
            "newsStyle": 5,
            "pageNum": 1,
            "pageSize": 5,
        }
        mediaTuwen(tjList).then(data=>{
            // this.total=data.total
            console.log("图集数据",data)
            this.tjTableData = data.data;
            this.totalTj=data.total

        })

        // 视频：
        var spList={
            "newsStyle": 6,
            "pageNum": 1,
            "pageSize": 5,
        }
        mediaTuwen(spList).then(data=>{
            console.log("视频数据",data)
            this.spTableData = data.data;
            this.totalSp=data.total

        })

        // 文章分组：

        var articleList={
            "pageNum": 1,
            "pageSize": 5
        }
        newsClassifies(articleList).then(data=>{
            console.log("文章分组",data)
            this.articleData=data.data
            this.groupTotal=data.total
        })

      this.isShowMenu = localStorage.getItem("isShowMenu");

      if(this.isShowMenu == undefined || this.isShowMenu != 0){
        this.isShowMenu = 1;
      }
    },
    updated(){
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
.el-tabs__item{
    font-size: 17px;
    font-weight: bold;
}
.xjks-k .el-dialog__footer{background:#fff; width:100%; float:left;}
.xjks-k .dialog-footer{ margin:auto; width:260px;   padding-left: 40px;}

  .code_share .el-dialog{width:320px !important;height: 320px !important;}
  .pre_show .el-dialog{width:380px !important;height:80% !important;}
  .group_dialog .el-dialog{height:196px !important;}
  .group_dialog .el-dialog__body{padding:20px !important;}

 .code_share .el-button--mini,.pre_show .el-button--mini,.group_dialog .el-button--mini{border-radius: 0 !important;}
 .el-dialog__body{padding:0 !important;height:calc(100% - 55px) !important;}
 </style>


