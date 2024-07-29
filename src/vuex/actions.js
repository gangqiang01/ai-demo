const actions = {
    showAndroidDMRole({ commit }, status) {
        commit('showAndroidDMRole', status);
    },
    showApphubRule({ commit }, status) {
        commit('showApphubRule', status);
    },
    showLoading ({ commit }, status) {
        commit('showLoading', status);
    },
    onlineDeviceCount({commit}, status){
        commit('onlineDeviceCount', status);
    },
    registerDeviceCount({ commit }, status) {
        commit('registerDeviceCount', status);
    },
    licenseStatusCount({commit}, status){
        commit('licenseStatusCount', status);
    },
    systemImg({commit}, status){
        commit('systemImg', status);
    },
    peripheralMsgCount({commit}, status){
        commit('peripheralMsgCount', status);
    },
    deviceMsgCount({commit}, status){
        commit('deviceMsgCount', status);
    },
    deviceStatusCount({commit}, status){
        commit('deviceStatusCount', status);
    },
    switchLangCount({commit}, status){
        commit('switchLangCount', status);
    },

    /*menuStatusCount({commit}, status){
        commit('menuStatusCount', status);
    },*/

    osStatusCount({commit}, status){
        commit('osStatusCount', status);
    },

    iconStatusCount({commit}, status){
        commit('iconStatusCount', status);
    },

    menuChange({ commit }, status) {
        commit('menuChange', status);
    }
}

export default actions
