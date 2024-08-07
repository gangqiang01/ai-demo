<template>
    <div class="detect content-box">
        <el-row> 
            <el-col :span="10">
                <div class="left">
                    <div class="title">检测图片</div>
                    <div class="detect_img">
                        <el-image :src="inputSrc" fit="fill" :preview-src-list="[inputSrc]"></el-image> 
                    </div> 
                </div>
            </el-col> 
            <el-col :span="4">
                <div class="center">
                    <div class="item uploadBtn">
                        <el-button size="mini" type="primary" @click="dispatchUploadFile()" class="m-r-10"><i class="fa fa-cloud-upload m-r-10"></i>上传检测图片</el-button> 
                        <input type="file" ref="licenseFile" name="licensefile" @change="getlicenseFile($event)">
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
                    <div class="title" v-if="imageStatus==0">检测中...</div> 
                    <div class="title" v-else>检测结果</div> 
                    <div class="detect_img" v-loading="detectLoading">
                        <el-image :src="outputSrc" fit="fill" :preview-src-list="[outputSrc]"></el-image> 
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
            imageStatus: 1,
            fileOptions:[],
            detectedFilename: "",
            module: "car_image"
        }
    },

    methods: {
        selectDetectedFile(){
            this.outputSrc = "/v1/aiDetect/image/"+this.detectedFilename+"?module="+this.module
            this.inputSrc = "/v1/aiDetect/image/"+this.detectedFilename+"?type=data&module="+this.module
        },
        dispatchUploadFile(){
             this.$refs.licenseFile.dispatchEvent(new MouseEvent('click')) 
        },
        getlicenseFile(event){
            this.licenseFile = null;
            this.file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                this.inputSrc = e.target.result;
            };

            reader.readAsDataURL(this.file);
        },

        detect(){
            this.detectLoading = true;
            this.imageStatus=0;
            this.interval = window.setInterval(() => {
                if(this.file!= null&& this.file.name){
                    this.getDetectStatus()
                }
            }, 3000);
            this.outputSrc = "";
            addAiDetectApi(this.file, "dir", this.module).then((data) => {
                this.detectLoading = false;
                handleResponse(data, (res) => {
                    if(res.code === 200){
                        this.imageStatus=1
                        this.outputSrc = "/v1/aiDetect/image/"+this.file.name+"?module="+this.module
                        this.$swal("", this.$t('global.success'), "success", {button: this.$t('global.confirm')})
                    }else{
                        _g.handleError(res)
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
                            window.clearInterval(this.interval)
                            this.imageStatus=1;
                            this.outputSrc = "/v1/aiDetect/image/"+this.file.name+"?module="+this.module
                        }else{
                            this.imageStatus=0;
                        }
                    }
                })
            })
        },

        getDetectedFiles(){
            getAiDetectedFilesApi("image", this.module).then((data) => {
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
        .el-upload-list__item, .el-upload--picture-card, .detect_img{
            width: 320px !important;
            height: 320px !important;
            line-height: 320px!important;
        }
        .center{
            padding-top: 120px;
        }
    } 
    @media (min-width: 1025px) and (max-width:1680px){
        .el-upload-list__item, .el-upload--picture-card, .detect_img{
            width: 450px !important;
            height: 450px !important;
            line-height: 450px!important;
        }
        .center{
            padding-top: 180px;
        }
    } 
    @media (min-width: 1681px) {
        .el-upload-list__item, .el-upload--picture-card, .detect_img{
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
</style>
<style lang="scss" scoped>
    .detect{
        padding: 10px;
        .detect_img{
            background-color: #fbfdff;
            border: 1px dashed #c0ccda;
            display: inline-block;
            border-radius: 6px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
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
