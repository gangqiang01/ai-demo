<template>
    <div class="wrapper" >
        <home-header :isCollapse="isCollapse" @collapseAsideNavbar="collapse"></home-header>
        <div class="body">
            <div class="menu">
                <el-menu 
                    :default-active="activeItem" 
                    class="el-menu-vertical"  
                    :unique-opened="isUnique"
                    :collapse="isCollapse">
                    <router-link to="/main/ai_demo/object_recognition_image_detect">
                        <el-menu-item index="object_recognition_image_detect">
                            <i class="fa fa-podcast m-r-10 icon-left" ></i>
                            <span slot="title">物体识别图片检测</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/main/ai_demo/object_recognition_video_detect">
                        <el-menu-item index="object_recognition_video_detect">
                            <svg t="1711522147192" class="icon m-r-10 icon-left" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3377" width="200" height="200"><path d="M665.301333 354.965333h-31.509333a123.605333 123.605333 0 0 0-19.541333-45.973333l22.464-22.464a23.253333 23.253333 0 0 0 0-33.301333 23.232 23.232 0 0 0-33.301334 0l-22.698666 22.72a124.010667 124.010667 0 0 0-46.677334-18.773334v-31.146666a23.253333 23.253333 0 0 0-23.466666-23.445334c-13.141333 0-23.466667 10.325333-23.466667 23.445334v31.573333a123.946667 123.946667 0 0 0-45.76 19.648l-21.76-22.165333a23.68 23.68 0 0 0-33.301333-0.469334 23.658667 23.658667 0 0 0-0.448 33.301334l22.549333 22.976a123.093333 123.093333 0 0 0-18.538667 45.930666h-31.210666c-13.12 0-23.466667 10.304-23.466667 23.445334a23.253333 23.253333 0 0 0 23.466667 23.445333h31.509333a123.52 123.52 0 0 0 19.370667 45.738667l-22.250667 22.250666a23.168 23.168 0 0 0 0 33.301334c4.202667 4.693333 10.282667 7.04 16.384 7.04 6.122667 0 12.202667-2.346667 16.874667-7.04l22.464-22.442667a122.837333 122.837333 0 0 0 46.506666 18.88v31.210667c0 13.12 10.282667 23.445333 23.424 23.445333s23.466667-10.282667 23.466667-23.445333v-31.509334a123.584 123.584 0 0 0 45.994667-19.562666l21.952 21.994666c4.245333 4.693333 10.325333 7.04 16.426666 7.04 6.122667 0 12.202667-2.346667 16.874667-7.04a23.253333 23.253333 0 0 0 0-33.301333l-22.250667-22.250667c9.173333-13.738667 15.616-29.376 18.709334-46.208h31.210666a23.253333 23.253333 0 0 0 23.488-23.445333 23.232 23.232 0 0 0-23.488-23.402667zM512 456.704c-42.666667 0-77.376-34.688-77.376-77.354667S469.333333 301.994667 512 301.994667s77.333333 34.688 77.333333 77.354666S554.666667 456.704 512 456.704z" p-id="3378"></path><path d="M853.333333 42.666667H170.666667C111.829333 42.666667 64 90.517333 64 149.333333v554.645334c0 58.837333 47.829333 106.666667 106.666667 106.666666h256.128v128H315.093333a21.333333 21.333333 0 1 0 0 42.666667h393.813334a21.333333 21.333333 0 1 0 0-42.666667h-121.450667v-128H853.333333c58.794667 0 106.666667-47.829333 106.666667-106.666666V149.333333c0-58.816-47.872-106.666667-106.666667-106.666666zM170.666667 85.333333h682.666666c35.285333 0 64 28.714667 64 64v468.608H106.666667V149.333333c0-35.285333 28.714667-64 64-64z m374.122666 853.312h-75.328v-128h75.328v128z m308.544-170.666666H170.666667c-35.285333 0-64-28.736-64-64v-43.370667h810.666666v43.370667c0 35.264-28.714667 64-64 64z" fill="#030000" p-id="3379"></path></svg>
                            <span slot="title">物体识别视频检测</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/main/ai_demo/mask_recognition_image_detect">
                        <el-menu-item index="mask_recognition_image_detect">
                            <i class="fa fa-podcast m-r-10 icon-left" ></i>
                            <span slot="title">口罩检测</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/main/ai_demo/car_recognition_image_detect">
                        <el-menu-item index="car_recognition_image_detect">
                            <svg t="1711522147192" class="icon m-r-10 icon-left" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3377" width="200" height="200"><path d="M665.301333 354.965333h-31.509333a123.605333 123.605333 0 0 0-19.541333-45.973333l22.464-22.464a23.253333 23.253333 0 0 0 0-33.301333 23.232 23.232 0 0 0-33.301334 0l-22.698666 22.72a124.010667 124.010667 0 0 0-46.677334-18.773334v-31.146666a23.253333 23.253333 0 0 0-23.466666-23.445334c-13.141333 0-23.466667 10.325333-23.466667 23.445334v31.573333a123.946667 123.946667 0 0 0-45.76 19.648l-21.76-22.165333a23.68 23.68 0 0 0-33.301333-0.469334 23.658667 23.658667 0 0 0-0.448 33.301334l22.549333 22.976a123.093333 123.093333 0 0 0-18.538667 45.930666h-31.210666c-13.12 0-23.466667 10.304-23.466667 23.445334a23.253333 23.253333 0 0 0 23.466667 23.445333h31.509333a123.52 123.52 0 0 0 19.370667 45.738667l-22.250667 22.250666a23.168 23.168 0 0 0 0 33.301334c4.202667 4.693333 10.282667 7.04 16.384 7.04 6.122667 0 12.202667-2.346667 16.874667-7.04l22.464-22.442667a122.837333 122.837333 0 0 0 46.506666 18.88v31.210667c0 13.12 10.282667 23.445333 23.424 23.445333s23.466667-10.282667 23.466667-23.445333v-31.509334a123.584 123.584 0 0 0 45.994667-19.562666l21.952 21.994666c4.245333 4.693333 10.325333 7.04 16.426666 7.04 6.122667 0 12.202667-2.346667 16.874667-7.04a23.253333 23.253333 0 0 0 0-33.301333l-22.250667-22.250667c9.173333-13.738667 15.616-29.376 18.709334-46.208h31.210666a23.253333 23.253333 0 0 0 23.488-23.445333 23.232 23.232 0 0 0-23.488-23.402667zM512 456.704c-42.666667 0-77.376-34.688-77.376-77.354667S469.333333 301.994667 512 301.994667s77.333333 34.688 77.333333 77.354666S554.666667 456.704 512 456.704z" p-id="3378"></path><path d="M853.333333 42.666667H170.666667C111.829333 42.666667 64 90.517333 64 149.333333v554.645334c0 58.837333 47.829333 106.666667 106.666667 106.666666h256.128v128H315.093333a21.333333 21.333333 0 1 0 0 42.666667h393.813334a21.333333 21.333333 0 1 0 0-42.666667h-121.450667v-128H853.333333c58.794667 0 106.666667-47.829333 106.666667-106.666666V149.333333c0-58.816-47.872-106.666667-106.666667-106.666666zM170.666667 85.333333h682.666666c35.285333 0 64 28.714667 64 64v468.608H106.666667V149.333333c0-35.285333 28.714667-64 64-64z m374.122666 853.312h-75.328v-128h75.328v128z m308.544-170.666666H170.666667c-35.285333 0-64-28.736-64-64v-43.370667h810.666666v43.370667c0 35.264-28.714667 64-64 64z" fill="#030000" p-id="3379"></path></svg>
                            <span slot="title">密集人口统计</span>
                        </el-menu-item>
                    </router-link>

                    <router-link to="/main/ai_demo/car_recognition_video_detect">
                        <el-menu-item index="car_recognition_video_detect">
                            <svg t="1711522147192" class="icon m-r-10 icon-left" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3377" width="200" height="200"><path d="M665.301333 354.965333h-31.509333a123.605333 123.605333 0 0 0-19.541333-45.973333l22.464-22.464a23.253333 23.253333 0 0 0 0-33.301333 23.232 23.232 0 0 0-33.301334 0l-22.698666 22.72a124.010667 124.010667 0 0 0-46.677334-18.773334v-31.146666a23.253333 23.253333 0 0 0-23.466666-23.445334c-13.141333 0-23.466667 10.325333-23.466667 23.445334v31.573333a123.946667 123.946667 0 0 0-45.76 19.648l-21.76-22.165333a23.68 23.68 0 0 0-33.301333-0.469334 23.658667 23.658667 0 0 0-0.448 33.301334l22.549333 22.976a123.093333 123.093333 0 0 0-18.538667 45.930666h-31.210666c-13.12 0-23.466667 10.304-23.466667 23.445334a23.253333 23.253333 0 0 0 23.466667 23.445333h31.509333a123.52 123.52 0 0 0 19.370667 45.738667l-22.250667 22.250666a23.168 23.168 0 0 0 0 33.301334c4.202667 4.693333 10.282667 7.04 16.384 7.04 6.122667 0 12.202667-2.346667 16.874667-7.04l22.464-22.442667a122.837333 122.837333 0 0 0 46.506666 18.88v31.210667c0 13.12 10.282667 23.445333 23.424 23.445333s23.466667-10.282667 23.466667-23.445333v-31.509334a123.584 123.584 0 0 0 45.994667-19.562666l21.952 21.994666c4.245333 4.693333 10.325333 7.04 16.426666 7.04 6.122667 0 12.202667-2.346667 16.874667-7.04a23.253333 23.253333 0 0 0 0-33.301333l-22.250667-22.250667c9.173333-13.738667 15.616-29.376 18.709334-46.208h31.210666a23.253333 23.253333 0 0 0 23.488-23.445333 23.232 23.232 0 0 0-23.488-23.402667zM512 456.704c-42.666667 0-77.376-34.688-77.376-77.354667S469.333333 301.994667 512 301.994667s77.333333 34.688 77.333333 77.354666S554.666667 456.704 512 456.704z" p-id="3378"></path><path d="M853.333333 42.666667H170.666667C111.829333 42.666667 64 90.517333 64 149.333333v554.645334c0 58.837333 47.829333 106.666667 106.666667 106.666666h256.128v128H315.093333a21.333333 21.333333 0 1 0 0 42.666667h393.813334a21.333333 21.333333 0 1 0 0-42.666667h-121.450667v-128H853.333333c58.794667 0 106.666667-47.829333 106.666667-106.666666V149.333333c0-58.816-47.872-106.666667-106.666667-106.666666zM170.666667 85.333333h682.666666c35.285333 0 64 28.714667 64 64v468.608H106.666667V149.333333c0-35.285333 28.714667-64 64-64z m374.122666 853.312h-75.328v-128h75.328v128z m308.544-170.666666H170.666667c-35.285333 0-64-28.736-64-64v-43.370667h810.666666v43.370667c0 35.264-28.714667 64-64 64z" fill="#030000" p-id="3379"></path></svg>
                            <span slot="title">汽车路面视频检测</span>
                        </el-menu-item>
                    </router-link>
                </el-menu>
            </div>
            
            <div class="home-content" id="homeContant">
                <div class="cf home-content-box">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div> 
          <!-- <home-footer></home-footer> -->
    </div>

</template>


<style lang='scss'>
.el-menu{
    font-size: 13px;
    .el-menu-item{
        height: 46px;
        line-height: 46px;
    } 
    .el-submenu:not(.is-active){
        .el-submenu__title{
            height: 46px;
            line-height: 46px;
            .el-submenu__icon-arrow{
                color: rgba(0,0,0,.85);
            }
        }
        .el-submenu__title:hover {
            background: linear-gradient(90deg, #FFFFFF, #80CEF8);
            color: #38474e !important;
            i{
                color: #38474e !important;  
            }
        }
    } 
    .el-submenu.is-active{
        .el-submenu__title{
            background-color: #008cd6;
            color: #fff;
            height: 46px;
            line-height: 46px;
            i{
                color: #fff;  
            }
        } 
        .el-submenu__title:hover {
             background-color: #008cd6;
            // font-weight: 700;
            color: #fff;
            height: 46px;
            line-height: 46px;
            i{
                color: #fff;  
            }
        }
    }
}
    
</style>
<style lang='scss' scoped>
    @import "../assets/css/colors";
    $nav-icon-color : $primary-color; 
    $header-height : 56px;
    $aside-width : 256px;

    .wrapper{
        display: -webkit-flex;
        display: flex;
        height: 100vh;
        flex-flow: column nowrap;
        .body{
            display: -webkit-flex;
            flex: 1 1 auto;
            height: -webkit-calc(100% - 56px);
            height: -moz-calc(100% - 56px);
            height: calc(100% - 56px);
            display: flex;
            flex-flow: row nowrap;
            background: $body-bg-color;
            .menu{
                // box-shadow: 0px 0px 14px 0px rgba(2, 72, 109, 0.2);
                // border-top: 2px solid $body-bg-color;
                background: linear-gradient(0deg, #E6EDF3, #FFFFFF) !important;
                ul{
                    padding-top: 20px;
                    background: linear-gradient(0deg, #E6EDF3, #FFFFFF) !important;
                }
                height: 100%; 
                box-sizing: border-box;
                overflow-y: auto;
                overflow-x: hidden;
                span:hover{
                    text-decoration: none !important;
                }
                .el-menu>a>.el-menu-item:hover{
                    outline: 0;
                    background-color: #008cd6;
                    color: #fff !important;
                    i{
                        color: #fff;
                    }
                    svg path{
                        fill: #fff;
                    }
                }
                .el-menu>a>.el-menu-item.is-active{
                    background-color: #008cd6;
                    font-weight: 700;
                    color: #fff !important;
                    svg path{
                        fill: #fff;
                    }
                }
                //关闭侧边栏
                .el-menu-vertical:not(.el-menu--collapse){
                    @media (max-width: 1024px){
                        width: 210px;
                    } 
                    @media (min-width: 1025px) and (max-width:1680px){
                        width: 230px;
                    } 
                    @media (min-width: 1681px) {
                        width: $aside-width;
                    } 
                    
                }
                .el-menu{
                    height: 100%; 
                    box-sizing: border-box;
                    i {
                        display: inline-block;                    
                    } 
                    .el-submenu{
                        .el-menu-item-group{
                            .el-menu-item.is-active{
                                background: linear-gradient(90deg, #FFFFFF, #80CEF8);
                                border-right: 4px solid #008cd6;
                                color: #008cd6 !important;
                            }
                            .el-menu-item:hover {
                                outline: 0;
                                background: linear-gradient(90deg, #FFFFFF, #80CEF8);
                                color: #303133 !important;
                                i{
                                    color:  #909399 !important;
                                }
                            }
                        }
                        
                    }
                }
                .securityicon{
                    margin-left: -2px;
                }
                .el-menu--collapse{
                    height: 100%;
                }
            }
            .home-content{
                flex:1;
                margin-right: 0;
                height: 100%;
                overflow-y: auto;
                //overflow-x: hidden;
                overflow-x: auto;
                .fade-enter-actice, .fade-leave-active{
                    transition: opacity .5s
                } 
                .fade-enter, .fade-leave-active{
                    opacity: 0;
                }
                .home-content-box{
                    @media (max-width: 1024px){
                        padding: 0 5px 5px 5px;
                    } 
                    @media (min-width: 1025px) and (max-width:1680px){
                        padding: 0 10px 5px 10px;
                    } 
                    @media (min-width: 1681px) {
                        padding: 0 20px 10px 20px;
                    } 
                }
            }
        }

        
    }

    
</style>

<script>
    import {mapState} from 'vuex'
    import homeHeader from './main/header'
    import homeFooter from './main/footer'
    import { getSession, checkSession } from '../assets/js/storage'
    import handleResponse from '@/components/restfulapi/handleResponse'
    export default {
        name: 'home',
        data() {
            return {
                defaultIconColor:"#909399",
                activeIconColor: "#fff",
                subActiveIconColor: "#008cd6",
                isCollapse: false,
                activeItem: 'devicelist',
                isUnique: true,
                menu: []
            };
        },
        methods: {
            collapse(){
                this.isCollapse = this.isCollapse? false: true;
            },
        },

        created(){
            this.activeItem = this.$route.meta.menuname;
        },
        mounted(){
            if(this.$route.query.screen && this.$route.query.screen =='full'){
                document.getElementsByClassName("dm-header")[0].style.display='none';
                document.getElementsByClassName("el-menu-vertical")[0].style.display ='none';
            }else{
                document.getElementsByClassName("dm-header")[0].style.display='flex';
                document.getElementsByClassName("el-menu-vertical")[0].style.display ='black';
            }
        },
        computed: {

        },
        watch: {
            $route(to, from){
                this.activeItem = to.meta.menuname;
            },
        },
        components:{
            homeHeader,
            homeFooter
        },
    }
</script>