import swal from 'sweetalert'
import router from '../../router'
import self from "../../main"
const semver = require('semver')

const commonFn = {
    //refresh page
    shallowRefresh(name){
        router.replace({path: '/home/refresh', query: {name: name}})
    },
    //loginout 
    loginOut(){
        router.replace("/")
    },
    //stringify obj
    j2s(obj) {
        return JSON.stringify(obj)
    },
    // close global loading
    closeGlobalLoading() {
        setTimeout(() => {
        store.dispatch('showLoading', false)
        }, 0)
    },
    //open global loading
    openGlobalLoading() {
        setTimeout(() => {
        store.dispatch('showLoading', true)
        }, 0)
    },
    //dispatch function to store action
    onlineDeviceCount(val){
        store.dispatch('onlineDeviceCount', val)
    },
    licenseStatusCount(val){
        store.dispatch('licenseStatusCount', val)
    },
    deviceMsgCount(val){
        store.dispatch('deviceMsgCount', val)
    },

    peripheralMsgCount(val){
        store.dispatch('peripheralMsgCount', val)
    },
    deviceStatusCount(val){
        store.dispatch('deviceStatusCount', val)
    },

    /*menuStatusCount(val){
        store.dispatch("menuStatusCount", val)
    },*/

    menuChange(val) {
        store.dispatch("menuChange", val)
    },

    osStatusCount(val){
        store.dispatch("osStatusCount", val)
    },

    switchLangCount(val){
        store.dispatch('switchLangCount', val)
    },

    iconStatusCount(val){
        store.dispatch('iconStatusCount', val)
    },

    swalWarnDo(title= "Are You Sure?", subject, confirmButtonText="confirm", cancelButtonText="cancel"){
        return swal({
            title,
            text: subject,
            icon: "warning",
            buttons: true,  
            dangerMode: true,
            buttons: [cancelButtonText, confirmButtonText]
        })
    },

    swalSuccessDo(title= "Are You Sure?", subject,  confirmButtonText="confirm", cancelButtonText="cancel"){
        return swal({
            title,
            text: subject,
            icon: "success",
            buttons: true,  
            dangerMode: true,
            buttons: [cancelButtonText, confirmButtonText]
        })
    },

    swalErrorDo(title= "Are You Sure?", subject,  confirmButtonText="confirm", cancelButtonText="cancel"){
        return swal({
            title,
            text: subject,
            icon: "error",
            buttons: true,  
            dangerMode: true,
            buttons: [cancelButtonText, confirmButtonText]
        })
    },

    swalInfoDo(title= "Are You Sure?", subject,  confirmButtonText="confirm", cancelButtonText="cancel"){
        return swal({
            title,
            text: subject,
            icon: "info",
            buttons: true,  
            dangerMode: true,
            buttons: [cancelButtonText, confirmButtonText]
        })
    },
    
    handleError(res, cb){
        let msg = "";
        if(res.errmsg){
            msg = res.errmsg;
        }else if(res.status){
            msg = res.status;
        }else if(res.msg){
            msg = res.msg;
        }else{
            msg = res;
        }

        if(cb){
            swal("", msg, "error").then(() => {
                cb()
            })
        }else{
            swal("", msg, "error")
        }
    },
    isObject(subject){
        if(Object.prototype.toString.call(subject) === "[object Object]"){
            return true;
        }else{
            return false;
        }
    },

    isArray(array){
        if(Object.prototype.toString.call(array) === "[object Array]"){
            return true;
        }else{
            return false;
        }
    },
    timer: null,
    etimer: null,
    mtimer: null,
    
    doBeforeLoginout(){
        cookie.setCookie("apphubToken",'',0);
        cookie.setCookie("apphub_username", '', 0);
        cookie.setCookie("apphub_logintime", '', 0);
        window.clearInterval(_g.timer);
        window.clearInterval(_g.etimer);
        window.clearInterval(_g.mtimer);
        _g.timer = null;
        _g.etimer = null;
        _g.mtimer = null;
    },

    removeLetter(str) {
        let i=0
        var result;
        var reg = /[a-zA-Z]+/; 
        if(typeof(str) == "string"){
            while (result = str.match(reg)){ 
                str = str.replace(result[0], '');
            }
        }
        return str;
    },
    // trim string
    trim(str){
        if(typeof str === 'string'){
            return str.replace(/^\s+|\s+$/g,"");
        }else{
            return str
        } 
    }, 


    toNum(version){
        var version = version.toString();
        var versionArray = version.split(/\D+/);
        var num_place=["","0","00","000","0000", "00000", "000000", "0000000", "00000000"],r=num_place.reverse();
        for (var i=0;i<versionArray.length;i++){ 
            var len=versionArray[i].length;       
            versionArray[i] = r[len]+versionArray[i];  
        } 
        var res = versionArray.join(''); 
        return res; 
    }, 
    
    cpr_version(v1,v2){ 
        let _v1 = this.toNum(v1);
        let _v2 = this.toNum(v2);
        if(semver.valid(v1)&& semver.valid(v2)){
            return semver.gt(v1, v2)
        }else{
            console.log(v1+"or"+v2+ " invalid")
            return  _v1>_v2
        }
        
    },
    
    max(first,second){
        first = parseInt(first);
        second  = parseInt(second);
        return first > second ? first : second;
    },

    nthIndexOf(str,cha,num){
        var x=str.indexOf(cha);
        for(var i=0;i<num;i++){
            x=str.indexOf(cha,x+1);
        }
        return x;
    },
    matchInArray(parentArray, childArray) {
        var found = false;
        for (var i = 0, j = childArray.length; !found && i < j; i++) {
            if (parentArray.indexOf(childArray[i]) > -1) {
                found = true;
            }
        }
        return found;
    },

    encodeStr(str){
        return str.replace(/\+/g,"%2B");
    },

    strToBoolean(str){
        if(str == "true"|| str == true){
            return true;
        }else{
            return false;
        }
    },


    toMilliSecond(unit, value){
        value = parseInt(value)
        if(unit =="ms"){
            return value;
        }else if(unit == "s"){
            return value　* 1000;
        }else if(unit =="m"){
            return value　* 1000 * 60;
        }else if(unit == 'h'){
            return value　* 1000 * 60 * 60
        }else{
            return ""
        }
    },  
    
    timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return h+m+s;
    },

    exportYaml(data, fileName){
        var yaml = require('js-yaml');
        let yamlStr = yaml.dump(data)
        let export_blob = new Blob([yamlStr])
        let save_link = document.createElement('a')
        save_link.href = window.URL.createObjectURL(export_blob)
        save_link.download = fileName+'.yml'
        document.body.appendChild(save_link);
        save_link.click();
        document.body.removeChild(save_link);
    },

    verifyName(name){
        let reg=new RegExp(/^(?![\._\-\s\\@])[\u4E00-\u9FA5A-Za-z0-9_\-\.\s\\@:]{1,32}$/);
        if(reg.test(name)){
            return true;
        }else{
            return false;
        }
    },
    verifyCommon(name){
        let reg=new RegExp(/[\s]{2,}/);
        if(reg.test(name)){
            return false;
        }else if(name.length>128|| name.length<1){
            return false;
        }else{
            return true;
        }
    },
    
    verifyDescription(description, required = false){
        if(required&& !description){
            return false;
        }
        let reg=new RegExp(/[\s]{2,}/);
        if(reg.test(description)){
            return false;
        }else if(description.length>256|| description.length<0){
            return false;
        }else{
            return true;
        }
    },

    verifyNumber(number){
        if(number === null|| number === undefined|| number ===""){
            return false;
        }
        let reg=new RegExp(/^[0-9]{0,32}$/);
        if(!reg.test(number)){
            return false;
        }else{
            return true;
        };
    },

    verifyUNumber(number){
        if(number === null|| number === undefined|| number ===""|| number == 0){
            return false;
        }
        let reg=new RegExp(/^[0-9]{1,32}$/);
        if(!reg.test(number)){
            return false;
        }else{
            return true;
        };
    },

    verifyPwd(pwd){
        let reg=new RegExp(/^[A-Za-z0-9_\-\.\s@&$#]{3,32}$/);
        if(!reg.test(pwd)){
            return false;
        }else{
            return true;
        };
    },

    validateEmail(email){
        let reg=new RegExp(/^([a-zA-Z]|[0-9])(\w|\-|\.|_|\s)+@[a-zA-Z0-9\.\-_\s]+\.([a-zA-Z\.]{2,6})$/);
        if(!reg.test(email)){
            return false;
        }else{
            return true;
        };
    },

    validateServerAddress(address){
        let reg=new RegExp(/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/);
        if(!reg.test(address)){
            return false;
        }else{
            return true;
        };
    },

    //获取最近七天的日期Last seven days date
    getLastSevenDays(xAxis) {
        let d = new Date();
        let year = d.getFullYear();
        let mouth = d.getMonth() + 1;
        let day = d.getDate();
        let sevenDays = [];
        for (let i = 0; i < xAxis.length; i++) {
            if (day > xAxis.length || day == xAxis.length) {
                sevenDays.push(mouth + "/" + (day - i));
            } else {
                if ((day - i) > 0) {
                    sevenDays.push(mouth + "/" + (day - i));
                } else {
                    let arr = [1, 3, 5, 7, 8, 10, 12];
                    let arr1 = [4, 6, 9, 11];
                    let tmp = 28;
                    let leapYear = (year % 400 == 0) || (year % 100 !== 0 && year % 4 == 0)
                    let tmpMouth = (mouth - 1) ? (mouth - 1) : 12;
                    if (arr.includes(tmpMouth)) {
                        tmp = 31;
                    } else if (arr1.includes(tmpMouth)) {
                        tmp = 30;
                    } else if (leapYear) {
                        tmp = 29;
                    }
                    sevenDays.push(tmpMouth + "/" + (tmp - (i - day)));
                }
            }
        }
        sevenDays = sevenDays.reverse();
        return sevenDays;
    },
    //校验经纬度,校验通过true,校验不过false
    validateLat(lat) {
        let reg = new RegExp(/^[\-\+]?([0-8]?\d{1}(\.\d{1,6})*|90(\.0{1,6})*)$/);
        if (reg.test(lat) || lat == 'N/A') {
            return true;
        } else {
            return false;
        };
    },
    validateLng(lng) {
        let reg = new RegExp(/^[\-\+]?(0?\d{1,2}(\.\d{1,6})*|1[0-7]?\d{1}(\.\d{1,6})*|180(\.0{1,6})*)$/);
        if (reg.test(lng) || lng == 'N/A') {
            return true;
        } else {
            return false;
        };
    },
    //quantity验证 DiscreteInputs/Coils 正整数 取值范围为1~2000,InputRegisters/HoldingRegisters 正整数 取值范围为1~255
    verifyIdNumber(number) {
        if (number === null || number === undefined || number === "") {
            return false;
        }
        let reg = new RegExp(/^[0-9]{1,32}/);
        if (!reg.test(number) || (reg.test(number) && number>278)) {
            return false;
        } else {
            return true;
        };
    },
    verifyQuantityNumber(number) {
        if (number === null || number === undefined || number === "") {
            return false;
        }
        let reg = new RegExp(/^[0-9]{1,32}/);
        if (!reg.test(number) || (reg.test(number) && number > 125)) {
            return false;
        } else {
            return true;
        };
    },
    verifyQuantity1Number(number) {
        if (number === null || number === undefined || number === "") {
            return false;
        }
        let reg = new RegExp(/^[0-9]{1,32}/);
        if (!reg.test(number) || (reg.test(number) && number > 2000)) {
            return false;
        } else {
            return true;
        };
    },
    //十六进制转为十进制
    hexToDecem(val) {
        if (val && (val.split('')[0] !== '0' || (val.split('')[1] !== 'x' && val.split('')[1] !== 'X'))) {
            val = '0x' + val;
        }
        let arr = [];
        let newVal = 0;
        arr = val.slice(2).split('').reverse();
        arr.map(function (item, index) {
            let tmp;
            if (item == 'a' || item == 'A') {
                tmp = 10;
            } else if (item == 'b' || item == 'B') {
                tmp = 11;
            } else if (item == 'c' || item == 'C') {
                tmp = 12;
            } else if (item == 'd' || item == 'D') {
                tmp = 13;
            } else if (item == 'e' || item == 'E') {
                tmp = 14;
            } else if (item == 'f' || item == 'F') {
                tmp = 15;
            } else {
                tmp = Number(item);
            }
            for (var i = 0; i < index; i++) {
                tmp = tmp * 16
            }
            newVal = newVal + tmp
        })
        return newVal
    },
    //address 正则验证十六进制 且正整数 取值范围为1~65536 
    validateHexadecimal(val) {
        if (val && (val.split('')[0] !== '0' || (val.split('')[1] !== 'x' && val.split('')[1] !== 'X'))) {
            val = '0x' + val;
        }
        let newVal = this.hexToDecem(val);
        let reg = new RegExp(/^0[xX][0-9a-fA-F]+/);
        let regNew = new RegExp(/^[0-9]{1,32}/);
        if (!reg.test(val)) {
            return false
        } else {
            if (!regNew.test(newVal) || (regNew.test(newVal) && newVal > 65536)) {
                return false
            } else {
                return true
            }
        }
    },
    //校验ip地址，从0.0.0.0~255.255.255.255
    validateIp(val) {
        let reg = new RegExp(/^(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|[0-9])\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)$/);
        if (!val||!reg.test(val)) { 
            return false
        } else {
            if (val == "0.0.0.0" || val == "255.255.255.255") {
                return false
            } else {
                return true
            }
        }
    },
    // 取值范围为0~255
    verifySusiParameterNumber(number) {
        if (number === null || number === undefined || number === "") {
            return false;
        }
        let reg = new RegExp(/^[0-9]{1,32}/);
        if (!reg.test(number) || (reg.test(number) && (number > 255 || number < 0))) {
            return false;
        } else {
            return true;
        };
    },
    msToTime(duration) {
        var days = parseInt(duration / (1000 * 60 * 60 * 24));
        var hours = parseInt((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = parseInt((duration % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = (duration % (1000 * 60)) / 1000;
        if(hours < 10){
            hours = "0"+hours;
        }
        if(minutes < 10){
            minutes = "0"+ minutes
        }
        if(seconds < 10){
            seconds = "0"+ seconds
        }
        return days + self.$t("time.days")+ " " + hours + ":" + minutes + ":" + seconds;
    },
    //只能包含字母和数字特殊字符+#$*/
    validateTopic(value) {
        var reg = new RegExp(/^[A-Za-z0-9\+#$\*\/]{1,32}$/);
        if (reg.test(value)) {
            return true;
        } else {
            return false;
        }
    },
    //校验数字字母,最大位数是32
    validateClientId(value) {
        var reg = new RegExp(/^[A-Za-z0-9]{1,32}$/);
        if (reg.test(value)) {
            return true;
        } else {
            return false;
        }
    },
    //ip校验
    validateServerIP (value){
        let reg = new RegExp(/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/);
        if (reg.test(value)) {
            return true
        } else {
            return false
        }
    },
    //port
    validateServerPort(value){
        let reg = new RegExp(/^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/);
        if (reg.test(value)) {
            return true
        } else {
            return false
        }
    }
    
}

export default commonFn
