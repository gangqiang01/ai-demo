const swalFun = {
    methods: {
        swalWarnDo(content){
            return swal({
                title: this.$t('global.areYouSure'),
                text: content,
                icon: "warning",
                buttons: true,  
                dangerMode: true,
                buttons: [this.$t('global.cancel'), this.$t('global.confirm')]
            })
        },
    
        swalSuccessDo(content){
            return swal({
                title: this.$t('global.areYouSure'),
                text: content,
                icon: "success",
                buttons: true,  
                dangerMode: true,
                buttons: [this.$t('global.cancel'), this.$t('global.confirm')]
            })
        },
    
        swalErrorDo(content){
            return swal({
                title: this.$t('global.areYouSure'),
                text: content,
                icon: "error",
                buttons: true,  
                dangerMode: true,
                buttons: [this.$t('global.cancel'), this.$t('global.confirm')]
            })
        },
    
        swalInfoDo(content){
            return swal({
                title,
                text: content,
                icon: "info",
                buttons: true,  
                dangerMode: true,
                buttons: [cancelButtonText, confirmButtonText]
            })
        },
    
        swalSuccess(content){
            return swal("", content, "success", {button: this.$t('global.confirm')})
        },
    
        swalInfo(content){
            return swal("", content, 'info', {button: this.$t('global.confirm')});
        },
    },
}

export default swalFun;