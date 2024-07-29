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
                </div>
            </el-col> 
            <el-col :span="10">
                <div class="right"> 
                    <div class="title">检测结果</div> 
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
            const reader = new FileReader();

            reader.onload = (e) => {
                this.inputSrc = e.target.result;
            };

            reader.readAsDataURL(this.file);
        },

        detect(){
            this.detectLoading = true;
            addAiDetectApi(this.file).then((data) => {
                this.detectLoading = false;
                handleResponse(data, (res) => {
                    if(res.code === 200){
                        this.outputSrc = "/v1/aiDetect/image/"+this.file.name
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
        .el-upload-list__item, .el-upload--picture-card, .detect_img{
            width: 260px !important;
            height: 260px !important;
            line-height: 260px!important;
        }
        .center{
            padding-top: 80px;
        }
    } 
    @media (min-width: 1025px) and (max-width:1680px){
        .el-upload-list__item, .el-upload--picture-card, .detect_img{
            width: 380px !important;
            height: 380px !important;
            line-height: 380px!important;
        }
        .center{
            padding-top: 120px;
        }
    } 
    @media (min-width: 1681px) {
        .el-upload-list__item, .el-upload--picture-card, .detect_img{
            width: 450px !important;
            height: 450px !important;
            line-height: 450px!important;
        }
        .center{
            padding-top: 180px;
        }
    } 
    
    .el-image__error{
        display: none
    }
</style>
<style lang="scss" scoped>
    .detect{
        padding: 20px;
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
