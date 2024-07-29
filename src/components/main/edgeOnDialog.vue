<template>
    <el-dialog :visible.sync="edgeOnDialogVisible"  width="45%">
        <div slot="title" class="dialog-title">
            <i class="fa fa-qrcode m-r-10" aria-hidden="true"></i> 
            {{$t('configuration.degeOnDeployAppDownload')}}
        </div>
       <div class="body text-center">
            <qr-code :value="downloadQrCodeValue" :options="{ width: 260}"　class="block-center"></qr-code>
            <ul>
                <li class="introduce">
                    {{$t('configuration.scanQRCode')}}
                </li>
                <li class="introduce">
                    {{$t('configuration.scanQRCode1')}}
                </li>
                <li class="introduce">
                    <i class="fa fa-hand-o-right m-r-5" aria-hidden="true"></i>
                    <span @click="downDeployApp()" class="can-click">
                        {{$t('global.download')}}
                    </span>
                </li>
            </ul>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button @click="edgeOnDialogVisible = false" size="small">
                {{$t('global.cancel')}}
            </el-button>
        </div>
    </el-dialog>
    
</template>
<script>

import {getServerConfigApi, setServerConfigApi, getRepoServerApi, getQRcodeDataApi} from "../restfulapi/serverConfigApi"
import handleResponse from '../restfulapi/handleResponse';
import {setSession, getSession, checkSession} from "../../assets/js/storage"
import {applicationTitle, downloadBaseUrl} from "../../assets/js/constant"
import qrCode from '@chenfengyuan/vue-qrcode';

export default {
    
    data(){
        return{
            downloadQrCodeValue: "http://124.223.16.7:30002/DEPLOYREPO/AppHub.apk",
            configQrCodeValue: "",
            isShowConfigQrCode: false,
            edgeOnDialogVisible: false
        }
    },

    components: {
        qrCode
    },

    methods: {
        getQRcodeData(){
            getQRcodeDataApi().then((data) => {
                handleResponse((data), (res) => {
                    if(_g.isObject(res)){
                        console.log("qrcodedata:"+JSON.stringify(res));
                        this.configQrCodeValue = JSON.stringify(res);
                        this.isShowConfigQrCode = true;
                    }
                })
            })
        },

        downDeployApp(){
            window.location.href= this.downloadQrCodeValue;
        },
        
        downloadConfigFile(){
            window.location.href="/api/configmgr/downloadConfigFile";
        },
    },

    created(){
        this.getQRcodeData();
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
