<template>
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;"> -->
    <div>
        <div class="dm-header">
            <ul class="nav-left" >
                <li>
                    <i class="fa fa-bars pointer" aria-hidden="true" @click="collapseAsideNavbar()"></i>
                </li>
                <li>
                    <!-- {{appTitle}} -->
                    <span class="title">
                        AppHub/
                    </span>
                    <span class="subTitle">
                        AI-Demo
                    </span>
                </li>
            </ul>
        </div>
    </div>

</template>
<style lang="scss" scoped>
    @import "../../assets/css/colors"; 
    .dm-header{
        height: 56px !important;
        box-sizing:border-box;
        background: #fff;
        border-top: 8px solid;
        border-image-source: linear-gradient(90deg, #008CD6 0%, #004280 100%);
        border-image-slice: 1;
        display: -webkit-flex;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        padding:0 24px;
        box-shadow: 0px 2px 4px rgba(50, 50, 51, 0.3);
        position: relative;
        z-index: 1002;
        .nav-left{
            padding: 0;
            margin: 0;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            padding-top:2px;
            li{ 
                margin-right:10px;
                img{
                    // width: 320px;
                    height:56px;
                    position: relative;
                    top:-1px;
                }
                &:nth-child(1){
                    margin-right:0;
                    width: 16px;
                    height: 16px;
                }
                color:#89898A;
                .title{
                    margin-left:10px;
                    color: #09457D;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight:800;
                    font-size: 28px;
                }  
                .subTitle{
                    position:relative;
                    left: -8px;
                    display: inline-block;
                    color: #1E86C2;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 23px;
                    line-height: 39px;
                }
            }
        }
        .nav-right{
            padding:0;
            margin:0;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            li{  
                i{
                    color: #89898A;
                    font-size:1.5rem;
                }
                .astore{
                    cursor: pointer;
                    position: relative;
                    top: 16px;
                }
                margin-left: 16px;
                color: #89898A;  
            }                   
        }
    }
    .msgContainer{
        max-height: 22rem;
        max-width: 20rem;
        overflow-y: auto;
        overflow-x: hidden;
        .moreMsg{
            color: $primary-color;
            font-weight: 600;
            text-align: center;
        }
    }
    .msgHeader{
        color: $primary-color;
        font-weight: 700;
    }
    //dropdown element in body root 
    .qrIntroduce {
        color: rgba(0,0,0,0.6);
        font-size: 14px;
        // margin-top: -20px;
    }
    @-webkit-keyframes bell-shake {
        1% {
            -webkit-transform: rotateZ(15deg);
            transform-origin: 50% 0%;
        }
        2% {
            -webkit-transform: rotateZ(-15deg);
            transform-origin: 50% 0%;
        }
        3% {
            -webkit-transform: rotateZ(20deg);
            transform-origin: 50% 0%;
        }
        4% {
            -webkit-transform: rotateZ(-20deg);
            transform-origin: 50% 0%;
        }
        5% {
            -webkit-transform: rotateZ(15deg);
            transform-origin: 50% 0%;
        }
        6% {
            -webkit-transform: rotateZ(-15deg);
            transform-origin: 50% 0%;
        }
        7% {
            -webkit-transform: rotateZ(0);
            transform-origin: 50% 0%;
        }
        100% {
            -webkit-transform: rotateZ(0);
            transform-origin: 50% 0%;
        }
    }
    @-moz-keyframes bell-shake {
        1% {
            -moz-transform: rotateZ(15deg);
            transform-origin: 50% 0%;
        }
        2% {
            -moz-transform: rotateZ(-15deg);
            transform-origin: 50% 0%;
        }
        3% {
            -moz-transform: rotateZ(20deg);
            transform-origin: 50% 0%;
        }
        4% {
            -moz-transform: rotateZ(-20deg);
            transform-origin: 50% 0%;
        }
        5% {
            -moz-transform: rotateZ(15deg);
            transform-origin: 50% 0%;
        }
        6% {
            -moz-transform: rotateZ(-15deg);
            transform-origin: 50% 0%;
        }
        7% {
            -moz-transform: rotateZ(0);
            transform-origin: 50% 0%;
        }
        100% {
            -moz-transform: rotateZ(0);
            transform-origin: 50% 0%;
        }
    }
    @keyframes bell-shake {
        1% {
            transform: rotateZ(15deg);
            transform-origin: 50% 0%;
        }
        2% {
            transform: rotateZ(-15deg);
            transform-origin: 50% 0%;
        }
        3% {
            transform: rotateZ(20deg);
            transform-origin: 50% 0%;
        }
        4% {
            transform: rotateZ(-20deg);
            transform-origin: 50% 0%;
        }
        5% {
            transform: rotateZ(15deg);
            transform-origin: 50% 0%;
        }
        6% {
            transform: rotateZ(-15deg);
            transform-origin: 50% 0%;
        }
        7% {
            transform: rotateZ(0);
            transform-origin: 50% 0%;
        }
        100% {
            transform: rotateZ(0);
            transform-origin: 50% 0%;
        }
    }

    .bellShake{
        -webkit-animation: bell-shake 40s ease 1;
        -moz-animation: bell-shake 40s ease 1;
        animation: bell-shake 40s ease 1;
    }

    .el-dropdown-menu__item.is-disabled{
        color: #606266;
    }
    .el-dropdown-menu__item{
        cursor: default;
    }

    .el-dropdown-menu__item:not(.is-disabled):hover {
        background-color: #fff;
        color: #606266;
    }

    .user-manager{
        color: $primary-color;
        padding: 5px;
        cursor:  pointer !important;
    }
    .iconClass{
        position: relative;
        top: 5px;
        left: 5px;
    }

</style>
<script>
export default{
    name: 'mainHeader',
    data(){

    },
    methods:{
        collapseAsideNavbar(){
            this.$emit("collapseAsideNavbar", "")
        },
    }
    
}

</script>

