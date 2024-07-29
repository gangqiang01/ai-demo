import Vue from 'vue'
import moment from 'moment';
import {workorder} from './lwm2mMap'
import self from "../../main"

export default (function () {
    Vue.filter("threadFilter", (val) => {
        switch (val){
            case "R":
            return "Running";
            case "S":
            return "Sleep";
            case "T":
            return "Stop";
            case "I":
            return "Idle";
            case "Z":
            return "Zombie";
            case "W":
            return "Wait";
            case "L":
            return "Lock";
            default:
            return "";
        }
    })
    Vue.filter("pnLevelFunc", (value) =>{
        let val = parseInt(value); 
        switch (val){
            case 0:
            return self.$t('header.basicVersion');
            case 1:
            return self.$t('header.proVersion');
            case 2:
            return self.$t('header.proVersion');
            default:
            return self.$t('header.basicVersion');
        }
    })
    Vue.filter("toJson", (value) => {
        if(typeof(value) == 'object'){
            return JSON.stringify(value);
        }else{
            return value;
        } 
    })

    Vue.filter("ruleStatus", (val) => {
        switch (val){
            case "":
                return self.$t('global.disable');
            case "disable":
                return self.$t('global.disable');
            case "enable":
                return self.$t('global.enable');
            default:
                return self.$t('global.disable');
        }
    })

    Vue.filter("ruleLogStatus", (val) => {
        switch (parseInt(val)){
            case 0:
                return self.$t('global.building')
            case 1:
                return self.$t('global.failed')
            case 2:
                return self.$t('global.success')
            default:
                return self.$t('global.failed')
        }
    })

    Vue.filter("time", (value) => {
        if(value == 'N/A'){
            return "N/A";
        } else if (value) {
            return moment(value).format("YYYY-MM-DD HH:mm:ss")
        }else{
            return "None";
        } 
    })

    Vue.filter("status_interval", (value) => {
        if(!value){
            return "";
        }

        let nowTs = Date.parse(new Date())
        let statusTs = Date.parse(value)
        let interval = nowTs - statusTs
        return _g.msToTime(interval)
    })

    Vue.filter("none", (value) =>{
        if(value == null || value == ''){
            return "None";
        } else {
            return value;
        }
    })
    
    Vue.filter("roleFunc", (value) => {
        let val = parseInt(value); 
        switch (val){
            case 0:
            return self.$t('header.administrator');
            case 1:
            return self.$t('header.superUser');
            case 2:
            return self.$t('header.generalUser');
            default:
            return "";
        }
    })
    Vue.filter("eventMsgLevel", (value) => {
        switch (value){
            case 0:
                return self.$t('alertList.info');
            case 1:
                return self.$t('alertList.critical');
            case 2:
                return self.$t('alertList.warning');
            default:
            return "";
        }
    })
    Vue.filter("alertLevel", (value) => {
        switch (value){
            case 0:
                return self.$t('alertList.info');
            case 1:
                return self.$t('alertList.critical');
            default:
            return "";
        }
    })

    Vue.filter("filterEventStatus", (value) => {
        switch (value) {
            case 0:
                return self.$t('alertList.unhandled');
            case 1:
                return self.$t('alertList.handling');
            case 2:
                return self.$t('alertList.handled');
            case 3:
                return self.$t('alertList.invalid');
            default:
                return "";
        }
    })

    Vue.filter("timeFunc", (value) => {
        let val = parseInt(value);
        switch (val){
            case 0:
                return "never";
            case 15:
                return "15 "+ self.$t('time.seconds');
            case 30:
                return "30 "+ self.$t('time.seconds');
            case 60:
                return "1 "+ self.$t('time.minutes');
            case 120:
                return "2 "+ self.$t('time.minutes');
            case 300:
                return "5 "+ self.$t('time.minutes');
            case 600:
                return "10 "+ self.$t('time.minutes');
            case 1800:
                return "30 "+ self.$t('time.minutes');
            default:
                return "";
        }
    })

    Vue.filter("locationModeFunc", (value) =>{
        let val = parseInt(value);
        switch (val){
            case 0:
                return self.$t('systemSettings.off');
            case 1:
                return self.$t('systemSettings.sensorsOnly');
            case 2:
                return self.$t('systemSettings.batterySaving');;
            case 3:
                return self.$t('systemSettings.highAccuracy');
            default: 
                return "";
        }
    })

    Vue.filter("complexOptions", (value) =>{
        let val = parseInt(value);
        switch(val){
            case 0:
                return "UNSPECIFIED";
            case 1:
                return "BIOMETRIC_WEAK";
            case 2:
                return "SOMETHING";
            case 3:
                return "NUMERIC";
            case 4:
                return "NUMERIC_COMPLEX";
            case 5:
                return "ALPHABETIC";
            case 6:
                return "ALPHANUMERIC";
            case 7:
                return "COMPLEX";
            case 8:
                return "MANAGED";
            default:
                return "";
        }

    })

    Vue.filter("na", (value) =>{
        if(value == null || value == ''){
            return "N/A";
        } else {
            return value;
        }
    })

    Vue.filter("temp", (value) =>{
        if(value == 'N/A'){
            return "N/A";
        }else if(value === ''){
            return '';
        }else {
            return value+"℃";
        }
    })

    Vue.filter("percent", (value) =>{
        if(value == 'N/A'){
            return "N/A";
        }else if(value === ''){
            return '';
        }else {
            return value+"%";
        }
    })

    Vue.filter("gb", (value) =>{
        if(value == 'N/A'){
            return "N/A";
        }else if(value === ''){
            return '';
        }else {
            return value+"G";
        }
    })

    Vue.filter("BSPUpdateStatus", (value) => { 
        switch (value){
            case 0:
            return "Building";
            case 1:
            return "Failed";
            case 2:
            return "Success";
            default:
            return "";
        }
    })

    Vue.filter("BSPErrorStatus", (value) => { 
        value = _g.trim(value);
        if(value){
            switch (value){
                case "0":
                return "None";
                case "1":
                return "Network is not available";
                case "2":
                return "Can not connect to server";
                case "3":
                return "Package verify fail";
                case "4":
                return "Download/Save package error";
                case "5":
                return "Network error";
                case "6":
                return "Package install fail";
                case "7":
                return "Deploy timeout";
                case "8":
                return "Rebirth version check error";
                case "9":
                return "Rebirth status sync error"
                case "10":
                return "Check error at initial phase"
                case "11":
                return "Device is offline"
                case "12":
                return "An application is running"
                
                //server set errorcode 
                case "30":
                return "Check error at initial phase"
                case "31":
                return "An application is running"
                case "32":
                return "Device is offline"
                case "33":
                return "Download file error"
                case "34":
                return "Request agent timeout"
                case "35":
                return "Deploy timeout";
                default:
                return "";
            }
        }else{
            return "";
        }
        
    })

    Vue.filter("appErrorStatus", (value) => { 
        value = _g.trim(value);
        if(value){
            switch (value){
                case "0":
                return "None";
                case "1":
                return "Download file error";
                case "2":
                return "Unknow error";
                case "3":
                return "Apk already exists";
                case "4":
                return "Invalid apk";
                case "5":
                return "Invalid apk path";
                case "6":
                return "Not enough space";
                case "7":
                return "Apk already exists";
                case "8":
                return "User signature error"
                case "9":
                return "User signature error"
                case "10":
                return "System version too old"
                case "11":
                return "System version too new"

                case "12":
                return "Test apk not install"
                case "13":
                return "SD Card access failed"
                case "14":
                return "Invalid install url"
                case "15":
                return "SD card does not exist"
                case "16":
                return "System problem caused fail"
                case "17":
                return "Shared user does not exist"
                case "18":
                return "Shared library error"
                case "19":
                return "Shared library error"
                case "20":
                return "Optimization validation failed"
                case "21":
                return "INSTALL_FAILED_CONFLICTING_PROVIDER"
                case "22":
                return "Contains incompatible code"
                case "23":
                return "An invalid feature was used"
                case "24":
                return "The version not newer"
                //set kiosk
                case "25":
                return "Set kiosk App not found"
                case "26":
                return "Set kiosk App error"
                case "27":
                return "Start App after set kiosk error"
                case "28":
                return "Set kiosk app not in whitelist"
                case "29":
                return "Cancel kiosk Error"
                
                 //server set errorcode 
                case "30":
                return "Check error at initial phase"
                case "31":
                return "An application is running"
                case "32":
                return "Device is offline"
                case "33":
                return "Download file error"
                case "34":
                return "Request timeout"
                case "35":
                return "Task timeout";
                case "36":
                return "Agent not support"
                case "37":
                return "App white list not enable"
                case "40":
                return "Schedule time error"
                case "41":
                return "Agent exec error"
                case "50":
                return "No permission to store"

                //windows error
                case "101":
                return "Install error";
                case "102":
                return "Uninstall error";
                // linux error
                case "201":
                    return "Install error";
                case "202":
                    return "Uninstall error"
                //common error
                case "203":
                    return "Decompress failed";
                case "204":
                    return "Uninstall script file not exist";
                case "206":
                    return "Install script file not exist";
                case "208":
                    return "Already exist"
                case "209":
                    return "Not exist";
                    //docker compose
                case "210":
                    return "Forbidden";
                case "211":
                    return "Conflict";
                case "212":
                    return "Decode error";
                case "213":
                    return "Download url parameter error";
                case "214":
                    return "The difference between agent time and minio time is too large";
                default:
                return "";
            }
        }else{
            return "";
        }
        
    })

    Vue.filter("solutionErrorStatus", (value) => { 
        value = _g.trim(value);
        if(value){
            switch (value){
                case "0":
                return "None";
                case "1":
                return "Unknow error";
                case "2":
                return "Operation not allowed ";
                case "3":
                return "Unknow function";
                case "4":
                return "Parameter error";
                case "30":
                return "Check error at initial phase"
                case "31":
                return "An application is running"
                case "32":
                return "Device is offline"
                case "33":
                return "Download file error"
                case "34":
                return "Request timeout"
                case "35":
                return "Task timeout";
                case "36":
                return "Agent not support"
                case "37":
                return "App white list not enable"
                case "40":
                return "Schedule time error"
                case "41":
                return "Agent exec error"
                case "50":
                return "No permission to store"
                case "100":
                return "Agent bridge server null pointer";
                case "101":
                return "Agent bridge server unknow error";
                case "102":
                return "Agent bridge server remote callback list not found";
                case "103":
                return "Agent bridge server remote app not run";
                case "200":
                return "Agent bridge client null pointer"
                case "201":
                return "Agent bridge client failed to bind service"
                case "202":
                return "Agent bridge service already connect"
                case "203":
                return "Agent bridge service disconnected" 
                case "204":
                return "Agent bridge client remote exception"
                case "205":
                return "Agent bridge client failed to unbind service"
                case "206":
                return "Agent bridge client unknwon exception"
                case "300":
                return "Bind service error"
                case "301":
                return "No connection to service"
                case "302":
                return "Service disconnected";
                case "303":
                return "Remote exception";
                case "400":
                return "Secure";
                case "401":
                return "Not secure";
                case "402":
                return "Verify password failed"
                case "403":
                return "Verify admin failed"
                case "500":
                return "Not device owner"
                case "501":
                return "Not profile owner" 
                case "502":
                return "Not device admin"
                case "503":
                return "Permission denied"
                case "504":
                return "Disallowed"
                case "600":
                return "Empty data"
                case "601":
                return "Empty param"
                case "602":
                return "Invalid param";
                case "700":
                return "Partial failed"
                case "701":
                return "Reject by task full"
                case "702":
                return "Timeout";
                default:
                return "";
            }
        }else{
            return "";
        }
        
    })

    Vue.filter("appType", (value) => { 
        value = _g.trim(value);
        if(value){
            switch (value){
                case "system":
                return self.$t('appControl.systemApp');
                case "third":
                return self.$t('appControl.thirdApp');
                case "repo":
                return "Repo App"
                default:
                return "";
            }
        }else{
            return "";
        }
        
    })

    Vue.filter("execStatusFunction", (value) => { 
        value = _g.trim(value);
        if(value){
            switch (value){
                case "true":
                return self.$t('global.enable');
                case "false":
                return self.$t('global.disable');
                default:
                return "";
            }
        }else{
            return "";
        }
        
    })
    Vue.filter("wdStatusFunction", (value) => { 
        if(value){
            switch (value){
                case workorder.preInstallApp:
                    return self.$t('workorder.preInstallApp');
                case workorder.kiosk:
                    return self.$t('workorder.setKiosk');
                case workorder.bootanimation:
                    return self.$t('workorder.setBootanimation');
                case workorder.installDockerCompose:
                    return self.$t('operationRecord.installDockerCompose')
                case workorder.installLinuxPkg:
                    return self.$t('operationRecord.install')+ " "+ self.$t('workorder.linuxPkg')
                case workorder.installExe:
                    return self.$t('operationRecord.install')+ " "+ self.$t('workorder.exePkg')
                case workorder.installZip:
                    return self.$t('operationRecord.install')+ " Windows Zip "+ self.$t('fileDeploy.package')
                case workorder.installDockerSwarm:
                    return self.$t('operationRecord.installDockerSwarm')
                case "/40007/0/27601":
                    return self.$t('workorder.setSystemSettings')
                default:
                    return "";
            }
        }else{
            return ""
        }
        
    })

    Vue.filter("fileType", (value) => {
        if(value){
            switch (value){
                case "tar":
                return self.$t('linuxPkgControl.compressPkg');
                case "deb":
                return self.$t('linuxPkgControl.debPkg');
                default:
                return "";
            }
        }else{
            return ""
        }
    })

//appStatus function
    Vue.filter("appStatusFunction", (target) => { 
        let value = _g.trim(target);
        if(value){
            switch (value){
                case "/40004/0/27302":
                    return self.$t('operationRecord.enableApp');
                case "/40004/0/27303":
                    return self.$t('operationRecord.disableApp');
                case "/40004/0/27306":
                    return self.$t('operationRecord.startApp');
                case "/40004/0/27309":
                    return self.$t('operationRecord.stopApp');
                case "/40004/0/27308":
                    return self.$t('operationRecord.installApp');
                case "/40004/0/27305":
                    return self.$t('operationRecord.uninstallApp');
                case "/40004/0/27314":
                    return self.$t('operationRecord.setKiosk');
                case "/40004/0/27315":
                    return self.$t('operationRecord.cancelKiosk');
                case "/40004/0/27311":
                    return self.$t('operationRecord.addWhitelist');
                case "/40004/0/27312":
                    return self.$t('operationRecord.removeWhitelist');
                case "/50001/0/27301":
                    return self.$t('operationRecord.install');
                case "/50001/0/27302":
                    return self.$t('operationRecord.uninstall');
                case "/50001/0/27303":
                    return self.$t('operationRecord.upgrade');
                case "/50001/0/28301":
                    return self.$t('operationRecord.install');
                case "/50001/0/28302":
                    return self.$t('operationRecord.uninstall');
                case "/50001/0/28303":
                    return self.$t('operationRecord.upgrade');
                case "/60001/0/27301":
                    return self.$t('operationRecord.installDockerCompose');
                case "/60001/0/27302":
                    return self.$t('operationRecord.uninstallDockerCompose');
                case "/60001/0/27303":
                    return self.$t('operationRecord.installDockerSwarm');
                case "/60001/0/27304":
                    return self.$t('operationRecord.uninstallDockerSwarm');
                case "/60001/0/28301":
                    return self.$t('operationRecord.install');
                case "/60001/0/28302":
                    return self.$t('operationRecord.uninstall');
                case "/60001/0/28303":
                    return self.$t('operationRecord.upgrade');
                case "/60002/0/1017":
                    return self.$t('operationRecord.stopCompose');
                case "/60002/0/1018":
                    return self.$t('operationRecord.startCompose');
                case "/60002/0/1019":
                    return self.$t('operationRecord.restartCompose');
                case "/60002/0/1009":
                    return self.$t('operationRecord.startContainer');
                case "/60002/0/1010":
                    return self.$t('operationRecord.stopContainer');
                case "/60002/0/1011":
                    return self.$t('operationRecord.restartContainer');
                case "/60002/0/1012":
                    return self.$t('operationRecord.killContainer');
                case "/60002/0/1013":
                    return self.$t('operationRecord.pauseContainer');
                case "/60002/0/1014":
                    return self.$t('operationRecord.resumeContainer');
                case "/60002/0/1015":
                    return self.$t('operationRecord.removeContainer');
                case "/60002/0/1016":
                    return self.$t('operationRecord.removeImage');
                case "/60002/0/1021":
                    return self.$t('operationRecord.forceRemoveImage');
                case "/60002/0/1032":
                    return self.$t('operationRecord.removeService');
                case "/60002/0/1037":
                    return self.$t('operationRecord.startDockerSwarm');
                case "/60002/0/1038":
                    return self.$t('operationRecord.restartDockerSwarm');
                case "/60002/0/1036":
                    return self.$t('operationRecord.stopDockerSwarm');
                case "/60001/0/27401":
                    return self.$t('operationRecord.installDockerSwarm');
                case "/60001/0/27402":
                    return self.$t('operationRecord.uninstallDockerSwarm');
                case "/60002/0/1035":
                    return self.$t('operationRecord.updateComposeFile');
                case "/80001/0/1003":
                    return self.$t('operationRecord.start');
                case "/80001/0/1004":
                    return self.$t('operationRecord.stop');
                case "/80001/0/1005":
                    return self.$t('operationRecord.warm');
                case "/80001/0/1006":
                    return self.$t('operationRecord.cold');
                case "/80001/0/1007":
                    return self.$t('operationRecord.origin');
                case "/80001/0/1008":
                    return self.$t('operationRecord.deploy');
                case "/80001/0/1009":
                    return self.$t('operationRecord.reload');
                case "/80001/0/1010":
                    return self.$t('operationRecord.createSecret');
                case "/80001/0/1011":
                    return self.$t('operationRecord.startPLC');
                case "/80001/0/1012":
                    return self.$t('operationRecord.stopPLC');
                case "/80001/0/1013":
                    return self.$t('operationRecord.getPLCStatus');
                case '/40005/0/27402':
                    return self.$t('operationRecord.connectRemoteDesktop');
                case '/40005/0/27403':
                    return self.$t('operationRecord.disconnectRemoteDesktop');
                case '/40001/0/27012':
                    return self.$t('operationRecord.obtainAgentLogs');
                case '/40001/0/27013':
                    return self.$t('operationRecord.forceOffline');
                case "/40005/0/28400":
                    return self.$t('operationRecord.connectRemoteTerminal');
                case "/40005/0/27406":
                    return self.$t('operationRecord.screenMonitoring');
                case "/40003/0/27206":
                    return self.$t('operationRecord.deployFile');
                case "/40005/0/27404":
                    return self.$t('operationRecord.enableWhitelist');
                case "/60001/0/27403":
                    return self.$t('operationRecord.switchSwarmCapacity');
                case "/5/1/2":
                    return self.$t('operationRecord.updateBSP');
                case "/60002/0/1033":
                    return self.$t('operationRecord.updateServiceReplicas');
                case "/60002/0/1034":
                    return self.$t('operationRecord.updateServiceImage');
                case "0":
                    return self.$t('operationRecord.create');
                case "1":
                    return self.$t('operationRecord.updateName');
                case "2":
                    return self.$t('operationRecord.delete');
                case "3":
                    return self.$t('operationRecord.deployWorkorder');
                case "4":
                    return self.$t('operationRecord.deviceGroup');
                case "5":
                    return self.$t('operationRecord.setLocation');
                case "6":
                    return self.$t('operationRecord.clear');
                case "7":
                    return self.$t('operationRecord.updateLevel');
                case "8":
                    return self.$t('operationRecord.updateNotification');
                case "9":
                    return self.$t('operationRecord.enable');
                case "10":
                    return self.$t('operationRecord.setMenu');
                case "11":
                    return self.$t('operationRecord.setInfluxDb');
                case "12":
                    return self.$t('operationRecord.setEmail');
                case "13":
                    return self.$t('operationRecord.addDingDing');
                case "14":
                    return self.$t('operationRecord.updateProductIcon');
                case "15":
                    return self.$t('operationRecord.setRepo');
                case "16": 
                    return self.$t('operationRecord.deleteDingDing');
                case "17": 
                    return self.$t('operationRecord.updateUserRole');
                case "18": 
                    return self.$t('operationRecord.updateUserEmail');
                case "19": 
                    return self.$t('operationRecord.updateUserPwd');
                case "20": 
                    return self.$t('operationRecord.importSubDevice');
                case "21":
                    return self.$t('operationRecord.copySubDevice');
                case "22":
                    return self.$t('operationRecord.importDeviceModel');
                case "23":
                    return self.$t('operationRecord.remoteTerminal');
                case "24":
                    return self.$t('operationRecord.updateRecords');
                case "25":
                    return self.$t('operationRecord.systemSettingSecurity');
                case "26":
                    return self.$t('screen.updatePublishedStatus');
                case "27":
                    return self.$t('screen.updateUnpublishedStatus');
                case "30":
                    return self.$t('operationRecord.30');
                case "31":
                    return self.$t('operationRecord.31');
                case "32":
                    return self.$t('operationRecord.32');
                case "33":
                    return self.$t('operationRecord.33');
                case "34":
                    return self.$t('operationRecord.34');
                case "35":
                    return self.$t('operationRecord.35');
                default:
                    if (value.indexOf("set_isProcessMonitor") !== -1 && value.indexOf("true") !== -1) {
                        return self.$t('operationRecord.processMonitor');
                    } else if (value.indexOf("set_isProcessMonitor") !== -1 && value.indexOf("false") !== -1) {
                        return self.$t('operationRecord.cancelProcessMonitor');
                    } else if (value.indexOf("set_isDockerMonitor") !== -1 && value.indexOf("true") !== -1) {
                        return self.$t('operationRecord.dockerMonitor');
                    } else if (value.indexOf("set_isDockerMonitor") !== -1 && value.indexOf("false") !== -1) {
                        return self.$t('operationRecord.cancelDockerMonitor');
                    } else if (value.indexOf("reboot") !== -1) {
                        return self.$t('operationRecord.reboot');
                    } else if (value.indexOf("shutdown") !== -1) {
                        return self.$t('operationRecord.shutdown');
                    } else if (value.indexOf("brightness") !== -1) {
                        return self.$t('operationRecord.brightness');
                    } else if (value.indexOf("audio") !== -1) {
                        return self.$t('operationRecord.audio');
                    } else if (value.indexOf("unlockScreen") !== -1) {
                        return self.$t('operationRecord.unlockScreen');
                    } else if (value.indexOf("lockScreen") !== -1) {
                        return self.$t('operationRecord.lockScreen');
                    } else if (value.indexOf("unbindDevice") !== -1) {
                        return self.$t('operationRecord.unbindDevice');
                    }else if (value.indexOf("bindDevice") !== -1) {
                        return self.$t('operationRecord.bindDevice');
                    }else if (value.indexOf("sendMessage") !== -1) {
                        return self.$t('operationRecord.sendMessage');
                    } else if (value.indexOf("commandSent") !== -1) {
                        return self.$t('operationRecord.commandSent');
                    } else if (value.indexOf("set_isMonitor") !== -1) {
                        return self.$t('operationRecord.set_isMonitor');
                    } else if (value.indexOf("set_threshold") !== -1) {
                        return self.$t('operationRecord.set_threshold');
                    } else if (value.indexOf("kill_process") !== -1) {
                        return self.$t('operationRecord.killProcess');
                    } else if (value.indexOf("start_process") !== -1) {
                        return self.$t('operationRecord.startProcess');
                    } else if(value.indexOf("syncTime") !== -1){
                        return self.$t('remoteControl.timeSync');
                    }
            }
        } else {
            return "";
        }
    })
//deviceStatus function
    Vue.filter("deviceStatusFunction", (value) => {
        switch (value){
            case 0:
            return "Normal";
            case 1:
            return "Warning";
            case 2:
            return "Error";
        }
    })

    Vue.filter("modelFilter", (val) => {
        switch (val){
            case "deviceModel":
            return self.$t('model.deviceModel');
            case "module":
            return self.$t('model.module');
            case "property":
            return self.$t('model.property');
            case "event":
            return self.$t('model.event');
            case "command":
            return self.$t('model.command');
            case "service":
            return self.$t('model.service');
            case "group":
            return self.$t('model.group');
            case "device":
            return self.$t('model.device');
            case "subDevice":
            return self.$t('model.subDevice');
            default:
            return "";
        }
    })
    Vue.filter("operationTypeFilter", (val) => {
        switch (val) {
            case "user":
                return self.$t('operationRecord.user');
            case "device":
                return self.$t('operationRecord.device');
            case "group":
                return self.$t('operationRecord.group');
            case "organization":
                return self.$t('operationRecord.organization');
            case "workorder":
                return self.$t('operationRecord.workorder');
            case "subDevice":
                return self.$t('operationRecord.subDevice');
            case "deviceModel":
                return self.$t('operationRecord.deviceModel');
            case "ruleLinkage":
                return self.$t('operationRecord.ruleLinkage');
            case "dataForward":
                return self.$t('operationRecord.dataForward');
            case "userRole":
                return self.$t('operationRecord.userRole');
            case "alertConfig":
                return self.$t('operationRecord.alertConfig');
            case "alertHistory":
                return self.$t('operationRecord.alertHistory');
            case "alert":
                return self.$t('operationRecord.alert');
            case "systemConfig":
                return self.$t('operationRecord.systemConfig');
            case "dashboard":
                return self.$t('screen.screenManage');
            case "subDeviceTag":
                return self.$t('subDevice.label');
            default:
                return "";
        }
    })
})()

