<template>
    <el-dialog :visible.sync="dialogProfileVisible">
        <div slot="title" class="dialog-title">
            <i class="fa fa-cog m-r-10" aria-hidden="true"></i>
            Configuration
        </div>
        <el-form  :model="serverForm" :rules="rules" ref="serverForm" >
            <el-form-item label="User Name:" :label-width="formLabelWidth" prop="name">
                <el-input v-model.trim="serverForm.username" autocomplete="off" class="w-300" disabled></el-input>
            </el-form-item> 
            <!-- <el-form-item label="Backend Server Address:" :label-width="formLabelWidth" prop="backendServer">
                <el-input v-model.trim="serverForm.backendServer" autocomplete="off" class="w-300" placeholder="exp: http://172.21.73.144:30010"></el-input>
            </el-form-item>   -->
            <el-form-item label="APP Repo Server Address:" :label-width="formLabelWidth" prop="appRepoServer">
                <el-input v-model.trim="serverForm.appRepoServer" autocomplete="off" class="w-300" placeholder="Exp: http://172.21.73.144:30001"></el-input>
            </el-form-item>
            <el-form-item label="APP Download Repo Server Address:" :label-width="formLabelWidth" prop="appDownloadServer">
                <el-input v-model.trim="serverForm.appDownloadServer" autocomplete="off" class="w-300" placeholder="Exp: http://172.21.73.144:30002"></el-input>
            </el-form-item>
            <el-form-item label="VNC Server IP:" :label-width="formLabelWidth" prop="vncServerIp">
                <el-input v-model.trim="serverForm.vncServerIp" autocomplete="off" class="w-300" placeholder="Exp: 172.21.73.144"></el-input>
            </el-form-item>  
            <el-form-item label="VNC Server Port:" :label-width="formLabelWidth" prop="vncServerPort">
                <el-input v-model.trim="serverForm.vncServerPort" autocomplete="off" class="w-300" placeholder="Exp: 9191"></el-input>
            </el-form-item>     
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogProfileVisible = false">Cancel</el-button>
            <el-button type="primary" @click="confirmServerAddress()">Confirm</el-button>
        </div>
    </el-dialog>
</template>

<script>

import {getServerConfigApi, setServerConfigApi} from "../restfulapi/serverConfigApi"
import handleResponse from '../restfulapi/handleResponse';
import {setSession, checkSession, getSession } from '../../assets/js/storage';

export default {
    
    data(){
        let validateServerAddress = (rule,value,callback)=>{
            let reg=new RegExp(/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/);
            if(!reg.test(value)&&value.length != 0){
                return callback(new Error ('Server address error'))
            }else{callback()};
        };

        let validateServerIP = (rule,value,callback)=>{
            let reg=new RegExp( /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/);
            if(!reg.test(value)&&value.length != 0){
                return callback(new Error ('Server IP error'))
            }else{callback()};
        };

        let validateServerPort = (rule,value,callback)=>{
            let reg=new RegExp(  /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/);
            if(!reg.test(value)&&value.length != 0){
                return callback(new Error ('Server Port error'))
            }else{callback()};
        };
        return{
            dialogProfileVisible: false,
            formLabelWidth: "310px",
            serverForm: {
                username: "",
                backendServer: "",
                appRepoServer: "",
                appDownloadServer: "",
                vncServerIp: "",
                vncServerPort: "" 
            },
            rules: {
                backendServer: {validator: validateServerAddress, trigger: 'blur'},
                appRepoServer: {validator: validateServerAddress, trigger: 'blur'},
                appDownloadServer: {validator: validateServerAddress, trigger: 'blur'},
                vncServerIp: {validator: validateServerIP, trigger: 'blur'},
                vncServerPort: {validator: validateServerPort, trigger: 'blur'},
            }
        }

    },

    methods: {
        confirmServerAddress(){
            this.$refs.serverForm.validate((valid) => {
                if (valid) {
                    setServerConfigApi(
                        this.serverForm.username,
                        this.serverForm.appRepoServer,
                        this.serverForm.appDownloadServer,
                        this.serverForm.vncServerIp,
                        this.serverForm.vncServerPort).then((res) => {
                        handleResponse(res, (data) => {
                            if(data.status === "CHANGED"){
                                this.dialogProfileVisible = false; 
                                this.$swal("", "Success", "success").then(() => {
                                    this.getConfiguration();
                                })
                            }else{
                                _g.handleError(res)
                            }
                        })
                    })
                }
            })
        },
        getConfiguration(){
            this.serverForm.username = cookie.getCookie("apphub_username");
            if(cookie.checkCookie("apphub_username")){
                getServerConfigApi(this.serverForm.username).then((res) => {
                    handleResponse(res, (data) => {
                        this.serverForm.username = data.name;
                        this.serverForm.appRepoServer = data.apprepoip;
                        // this.serverForm.appDownloadServer = data.appdownloadaddress;
                        this.serverForm.vncServerIp = data.vncip;
                        this.serverForm.vncServerPort = data.vncport;
                        setSession("appRepoServerAddress", this.serverForm.appRepoServer);
                        setSession("appDownloadServerAddress", this.serverForm.appDownloadServer);
                        setSession("vncServerIp", this.serverForm.vncServerIp);
                        setSession("vncServerPort", this.serverForm.vncServerPort);
                    })
                })
            }else{
                this.$swal("", "Login expired", "info").then(() => {
                    this.$router.replace("/");
                    return;
                })
                    
            }

        },
   
    },

    created(){
        this.getConfiguration();
    },
}
</script>
