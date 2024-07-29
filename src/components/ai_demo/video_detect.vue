<template>
    <div class="detect content-box">
        <el-row> 
            <el-col :span="10">
                <div class="left">
                    <div class="title">检测视频</div>
                    <div class="detect_video">
                        <video id="inputVideoPlayer" autoplay controls width="420" height="420"></video>
                    </div> 
                </div>
            </el-col> 
            <el-col :span="4">
                <div class="center">
                    <div class="item uploadBtn">
                        <el-button size="mini" type="primary" @click="dispatchUploadFile()" class="m-r-10"><i class="fa fa-cloud-upload m-r-10"></i>上传检测视频</el-button> 
                        <input type="file" ref="licenseFile" name="licensefile" accept="video/*" @change="getlicenseFile($event)">
                    </div>
                    <div class="item">
                        <el-button
                        size="mini" 
                        type="success"
                        @click="detect()"
                        class="button"
                        :loading="detectLoading"
                        >
                        <i class="fa fa-podcast m-r-10"></i>
                        开始检测
                    </el-button>
                    </div>
                </div>
            </el-col> 
            <el-col :span="10">
                <div class="right"> 
                    <div class="title">检测结果</div> 
                    <div class="detect_video" v-loading="detectLoading">
                        <video id="outputVideoPlayer" autoplay controls width="420" height="420"></video>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>    
</template>
<script>

import handleResponse from "../../components/restfulapi/handleResponse";
import {    
    getAiDetectImageApi,
    getAiDetectVideoApi,
    addAiDetectApi,
    deleteAiDetectApi,} from "../../components/restfulapi/aiDetectApi";

export default {
    name: 'devicestatus',
    data() {
        return {
            inputSrc: "",
            outputSrc: "",
            file: null,
            detectLoading: false
        }
    },

    methods: {

        dispatchUploadFile(){
             this.$refs.licenseFile.dispatchEvent(new MouseEvent('click')) 
        },
        getlicenseFile(event){
            this.licenseFile = null;
            this.file = event.target.files[0]; 
            if (this.file) {  
                var url = URL.createObjectURL(this.file);  
                document.getElementById('inputVideoPlayer').src = url;  
            }  
        },

        detect(){
            this.detectLoading = true;
            addAiDetectApi(this.file).then((data) => {
                this.detectLoading = false;
                handleResponse(data, (res) => {
                    if(res.code === 200){
                        document.getElementById('outputVideoPlayer').src = "/v1/aiDetect/video/"+this.file.name
                        this.$swal("", this.$t('global.success'), "success", {button: this.$t('global.confirm')})
                    }else{
                        _g.handleError(res)
                    }
                })
            })
        }
    },
    watch: {
        
    },
    created() {
        
    },
    beforeDestroy() {
        
    },
}
</script>
<style lang="scss">
    @media (max-width: 1024px){
        .el-upload-list__item, .el-upload--picture-card, .detect_video{
            width: 420px !important;
            height: 420px !important;
            line-height: 420px!important;
        }
        .center{
            padding-top: 120px;
        }
    } 
    @media (min-width: 1025px) and (max-width:1680px){
        .el-upload-list__item, .el-upload--picture-card, .detect_video{
            width: 420px !important;
            height: 420px !important;
            line-height: 420px!important;
        }
        .center{
            padding-top: 120px;
        }
    } 
    @media (min-width: 1681px) {
        .el-upload-list__item, .el-upload--picture-card, .detect_video{
            width: 420px !important;
            height: 420px !important;
            line-height: 420px!important;
        }
        .center{
            padding-top: 120px;
        }
    } 
    
    .el-image__error{
        display: none
    }
</style>
<style lang="scss" scoped>
    .detect{
        padding: 20px;
        .detect_video{
            background-color: #fbfdff;
            // border: 1px dashed #c0ccda;
            display: inline-block;
            border-radius: 6px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            background-color: #333333;
        }
        .title{
            color: #8492a6;
            font-size: 14px;
            margin-bottom: 20px;
        }
        .left{
            text-align: center;
        }
        .center{
            text-align: center;
            .button{
                margin-top: 20px;
            }
            .uploadBtn{
                display: inline-block;
                padding: 10px;
                text-align: left;
                input[type=file] {
                    display: none;
                }
            }
        }
        .right{
            text-align: center;
        }
    }
</style>
