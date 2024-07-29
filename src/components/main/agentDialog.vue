<template>
    <el-dialog :visible.sync="agentDialogVisible">
        <div slot="title" class="dialog-title">
            <i class="fa fa-download m-r-10" aria-hidden="true"></i> 
            {{$t('configuration.agentDownload')}}
        </div>
       <div class="body">
            <div class="agentInfo">
                <p>
                    <span class="agentlable">{{$t('configuration.googleDrive')}}</span> <a :href="googleAddress" target="_blank" class="agentVal">{{googleAddress}}</a>
                </p>
                 <p>
                    <span class="agentlable">{{$t('configuration.baiduyun')}}</span> <a :href="address" target="_blank" class="agentVal">{{address}}</a>
                    
                </p>
                <p>
                    <span class="agentlable">{{$t('configuration.fetchCode')}}</span> <span class="agentVal">{{fetchcode}}</span>
                </p>
                
            </div>
           
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button @click="agentDialogVisible = false" size="small">
                {{$t('global.cancel')}}
            </el-button>
        </div>
    </el-dialog>
</template>
<script>
import {applicationTitle, downloadBaseUrl, fetchcode, address, googleAddress} from "../../assets/js/constant"


export default {
    
    data(){
        
        return{
            downloadOptions:[
                {name: "Rk3288", value: "rk3288"},
                {name:"Rk3399", value: "rk3399"}, 
                {name: "Baytrail", value: "baytrail"}, 
                {name: "Imx6", value: "imx6"}, 
                {name: "Apollolake", value: "apollolake"}, 
                {name: "Aim", value: "aim"}
            ],
            agentDialogVisible: false,
            address: address,
            googleAddress,
            fetchcode: fetchcode,
            formLabelWidth: "12rem"
        }

    },

    methods: {
        downloadAgent(keywords){
            window.location.href=downloadBaseUrl+"/downloadApp?pkgname=com.adv.client&keywords="+keywords;
        }
   
    },

    created(){

    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/colors";
    .agentInfo{

        .agentlable{
            display: inline-block;
            width: 210px;
            text-align: right;
            font-size: 15px;
            color: #606266;
            line-height: 40px;
            font-weight: 600;
        }
        .agentVal{
            margin-left: 10px;
            color: $primary-color;
        }
        a{
            text-decoration: underline;;
        }
    }
    .googleDrive{
        margin-top: 20px;
        border-top:1px solid #ddd;
        padding-top: 20px;
    }
</style>
