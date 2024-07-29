<template>
<div class="text-center page_footer">
    <p >
       {{version}} © {{releaseDate}}
    </p>
</div>
    
</template>

<style lang='scss' scoped>
    @import "../../assets/css/colors";
    .page_footer{
        background-color: transparent;
        font-size: 13px;
        padding: 5px;
        // z-index: 2001;
        font-weight: 700;
        color: var(--textColor,#323232);
        position: absolute;
        bottom:5px;
        left: 46%
        
    }
   
</style>

<script>
    import {releaseDate, power, version} from "../../assets/js/constant"
    export default{
        data(){
            return {
                releaseDate,
                power,
                version
            }
        }
    }
</script>
