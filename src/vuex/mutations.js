const mutations = {
    showAndroidDMRole(state, status) {
        state.androidDMRole = status
    },
    showApphubRule(state, status) {
        state.apphubRule = status
    },
    showLoading(state, status) {
        state.globalLoading = status
    },
    onlineDeviceCount(state, status){
        state.onlineDeviceCount = status;
    },
    registerDeviceCount(state, status) {
        state.registerDeviceCount = status;
    },
    
    licenseStatusCount(state, status){
        state.licenseStatusCount = status;
    },

    systemImg(state, status){
        state.systemImg = status;
    },
    deviceMsgCount(state, status){
        state.deviceMsgCount = status;
    },
    deviceStatusCount(state, status){
        state.deviceStatusCount = status;
    },
    peripheralMsgCount(state, status){
        state.peripheralMsgCount = status;
    },
    switchLangCount(state, status){
        state.switchLangCount = status;
    },

    /*menuStatusCount(state, status){
        state.menuStatusCount = status;
    },*/

    osStatusCount(state, status){
        state.osStatusCount = status;
    },
    iconStatusCount(state, status){
        state.iconStatusCount = status;
    },
    menuChange(state, status) {
        state.menuChange = status;
    }
}

export default mutations
