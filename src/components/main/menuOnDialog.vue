<template>
    <el-dialog :visible.sync="menuOnDialogVisible">
        <div slot="title" class="dialog-title">
            <i class="fa fa-th-large m-r-10" aria-hidden="true"></i> 
            {{$t('header.menuConfiguration')}}
        </div>
        <div class="body">
            <el-form>
                <el-form-item :label="$t('label.deviceOs')" :label-width="formLabelWidth">
                    <el-checkbox-group v-model="osType">
                        <el-checkbox label="android" @change="checked=>selectOs(checked, groupType.android)">Android</el-checkbox>
                        <el-checkbox label="linux" @change="checked=>selectOs(checked, groupType.linux)">Linux</el-checkbox>
                        <el-checkbox label="windows" @change="checked=>selectOs(checked, groupType.windows)">Windows</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item :label="$t('label.functionMenu')" :label-width="formLabelWidth">
                    <el-checkbox-group v-model="menu">
                        <el-checkbox 
                        v-for="item in functionMenu" 
                        :label="item.value" 
                        :key="item.value" v-show="menuIsShow(item.os)">{{$t(item.label)}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button @click="menuOnDialogVisible = false" size="small">
                {{$t('global.cancel')}}
            </el-button>
            <el-button type="primary" @click="setServerMenu()" size="small">{{$t('global.confirm')}}</el-button>
        </div>
    </el-dialog>
    
</template>
<script>

import {getServerMenuApi, setServerConfigApi, getRepoServerApi, getQRcodeDataApi, setServerMenuApi, getServerConfigApi} from "../restfulapi/serverConfigApi"
import handleResponse from '../restfulapi/handleResponse';
import {setSession, getSession, checkSession} from "../../assets/js/storage"
import {applicationTitle, downloadBaseUrl, functionMenu, groupType} from "../../assets/js/constant"
import qrCode from '@chenfengyuan/vue-qrcode';
import {mapState} from 'vuex'

export default {
    
    data(){
         let menuArray = [];
        functionMenu.forEach((item) => {
            if(item.default){
                menuArray.push(item.value)
            }
        })
        return{
            menuOnDialogVisible: false,
            groupType,
            functionMenu,
            osType: [groupType.android, groupType.linux, groupType.windows],
            menu: menuArray,
            formLabelWidth: "120px"
        }

    },

    components: {
        qrCode
    },

    methods: {
        menuIsShow(os){
            return _g.matchInArray(this.osType, os)||os == 'mix'
        },
        
        selectOs(value, cid){
            if(value){
                this.menu.forEach(menuItem => {
                    functionMenu.forEach(menuObj => {
                        if(menuObj.os.indexOf(cid)>-1){
                            if(this.menu.indexOf(menuObj.value) == -1){
                                this.menu.push(menuObj.value)
                            }
                        }
                        
                    })
                })
            }
        },
        setServerMenu(){
            if(this.osType.length == 0){
                this.$message({
                    message: this.$t('configuration.noOs'),
                    type: 'warning'
                });
                return;
            }
            if(this.menu.length == 0){
                this.$message({
                    message: this.$t('configuration.noMenu'),
                    type: 'warning'
                });
                return;
            }
            let menu = [];
            this.menu.forEach(menuItem => {
                let res = false;
                functionMenu.forEach(menuObj => {
                    if(menuObj.value == menuItem){
                        this.osType.forEach((osItem) => {
                            if(menuObj.os.indexOf(osItem)>-1|| menuObj.os == groupType.mix){
                                res = true;
                            }
                        })
                    }
                })
                
                if(res){
                    menu.push(menuItem);
                }
            })
            // console.log(menu);
            setServerMenuApi(this.username, this.osType, menu).then((res) => {
                this.menuOnDialogVisible = false;
                handleResponse(res, (data) => {
                    if(data.status === "CHANGED"){
                        this.$swal("", this.$t('global.success'), "success", {button: this.$t('global.confirm')}).then(() => {
                            _g.menuChange(menu);
                            this.getConfiguration();
                        })
                    }else{
                        _g.handleError(res)
                    }
                })
            })
        },
        getConfiguration(){
            if(cookie.checkCookie("apphub_username")){
                this.username = cookie.getCookie("apphub_username");
                getServerMenuApi(this.username).then((res) => {
                    handleResponse(res, (data) => {
                        if(data.menu){;
                            this.menu = data.menu;
                            this.osType = data.ostype;
                            let count = this.menu.length;
                            _g.osStatusCount(this.osType.length);
                            setSession("apphub_menu", this.menu);
                            setSession("apphub_os", this.osType);
                        }
                    })
                })
                getServerConfigApi(this.username);
            }
        },
    },
    watch: {
        menuChange(){
            this.getConfiguration()
        },

        osStatusCount(){
            this.getConfiguration()
        }
    },
    computed:{
        ...mapState({
            menuStatusCount: "menuStatusCount",
            osStatusCount: "osStatusCount",
        }), 
    },
    created(){
        this.getConfiguration();
    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/colors";
 .introduce {
    padding: 5px;
    color: #606266;
    font-size:14px;
}
.can-click{
    color: $primary-color;
    cursor: pointer;
    text-decoration: underline;
}
</style>
