<template>
    <div class="detect content-box">
        <el-row> 
            <el-col :span="10">
                <div class="left">
                    <div class="title">检测视频</div>
                    <div class="detect_video">
                        <video id="inputVideoPlayer" autoplay loop controls></video>
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
                    <div class="item">
                        <div class="sub">选择已检测的文件</div>
                        <el-select 
                        v-model="detectedFilename"  
                        class="max-w-210" 
                        size="mini"
                        @change="selectDetectedFile">
                            <el-option
                                v-for="item in fileOptions"
                                :key="item.filename"
                                :label="item.filename"
                                :value="item.filename">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col> 
            <el-col :span="10">
                <div class="right"> 
                    <div class="title" v-if="status==0">检测中...</div> 
                    <div class="title" v-else>检测结果</div> 
                    <div class="detect_video" v-loading="detectLoading">
                        <video id="outputVideoPlayer" autoplay loop controls></video>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>    
</template>
<script>

import handleResponse from "../../components/restfulapi/handleResponse";
import {  
    getAiDetectedFilesApi,
    getAiDetectStatusApi, 
    addAiDetectApi,
    deleteAiDetectApi,} from "../../components/restfulapi/aiDetectApi";

export default {
    name: 'devicestatus',
    data() {
        return {
            inputSrc: "",
            outputSrc: "",
            file: null,
            detectLoading: false,
            interval : null,
            status: 1,
            fileOptions:[],
            detectedFilename: "",
            module: "car_video"
        }
    },

    methods: {
        selectDetectedFile(){
            document.getElementById('outputVideoPlayer').src = "/v1/aiDetect/video/"+this.detectedFilename+"?module="+this.module
            document.getElementById('inputVideoPlayer').src = "/v1/aiDetect/video/"+this.detectedFilename+"?type=data&module="+this.module
        },

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
            this.status = 0;
            window.clearInterval(this.interval)
            this.interval = window.setInterval(() => {
                this.getDetectStatus();
            }, 5000)
            addAiDetectApi(this.file, "video", this.module).then((data) => {
                this.detectLoading = false;
                handleResponse(data, (res) => {
                    if(res.code === 200){
                        document.getElementById('outputVideoPlayer').src = "/v1/aiDetect/video/"+this.file.name+"?module="+this.module
                        this.$swal("", this.$t('global.success'), "success", {button: this.$t('global.confirm')})
                    }
                })
            })
        },

        getDetectStatus(){
            getAiDetectStatusApi(this.file.name, this.module).then((data) => {
                handleResponse(data, (res) => {
                    if(res.code === 200){
                        if (res.data==1){
                            this.detectLoading = false;
                            this.getDetectedFiles()
                            this.status=1;
                            window.clearInterval(this.interval)
                            document.getElementById('outputVideoPlayer').src = "/v1/aiDetect/video/"+this.file.name+"?module="+this.module

                        }else{
                            this.imageStatus=0;
                        }
                    }
                })
            })
        },

        getDetectedFiles(){
            getAiDetectedFilesApi("video", this.module).then((data) => {
                handleResponse(data, (res) => {
                    if(res.code === 200){
                        this.fileOptions = res.data;
                    }
                })
            })
        }
    },
    watch: {
        
    },
    created() {
        this.getDetectedFiles();
    },
    beforeDestroy() {
        window.clearInterval(this.interval)
    },
}
</script>
<style lang="scss">
    @media (max-width: 1024px){
        #inputVideoPlayer, #outputVideoPlayer{
            width: 320px;
            height: 320px;
        }
        .el-upload-list__item, .el-upload--picture-card, .detect_video{
            width: 320px !important;
            height: 320px !important;
            line-height: 320px!important;
        }
        .center{
            padding-top: 120px;
        }
    } 
    @media (min-width: 1025px) and (max-width:1680px){
        #inputVideoPlayer, #outputVideoPlayer{
            width: 450px;
            height: 450px;
        }
        .el-upload-list__item, .el-upload--picture-card, .detect_video{
            width: 450px !important;
            height: 450px !important;
            line-height: 450px!important;
        }
        .center{
            padding-top: 180px;
        }
    } 
    @media (min-width: 1681px) {
        #inputVideoPlayer, #outputVideoPlayer{
            width: 580px;
            height:580px;
        }
        .el-upload-list__item, .el-upload--picture-card, .detect_video{
            width: 580px !important;
            height: 580px !important;
            line-height: 580px!important;
        }
        .center{
            padding-top: 210px;
        }
    } 
    
    .el-image__error{
        display: none
    }
    .right{
        .el-loading-spinner{
            top: 0;
            margin-top: -21px;
            width: 100%;
            text-align: center;
            position: absolute;
        }
    }
</style>
<style lang="scss" scoped>
    .detect{
        padding: 10px;
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
            .el-loading-spinner{
                margin-top: -21px;
                width: 100%;
                text-align: center;
                position: absolute;
            }
        }

        .item{
            margin-top: 10px;
            .sub{
                font-size: 14px;
                color: #aeaeae;
                margin-bottom: 5px;
            }
        }
    }
</style>
