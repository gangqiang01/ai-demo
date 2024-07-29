import swal from 'sweetalert'
import router from '../../router'
import self from "../../main"

let handleResponse = function(res, cb, isLoading = true){
    if(isLoading){
        _g.closeGlobalLoading();
    }
    if(res === undefined){
        console.error("data is undefined")
        return;
    }
    if(res.status != 401){
        cb(res.data)
    }
};
let handleError = function(res) {
    switch (res.status) {
        case 401:
        
            swal("", self.$t('global.loginExpired'),"error").then((val) =>{
                if(val){
                    _g.doBeforeLoginout();
                    router.replace({
                        path: '/',
                        query: {redirect: router.currentRoute.fullPath}
                    })
                }
            });
            
            break
        // case 400:
        default :
            console.log(res)
    }
}
export default handleResponse;