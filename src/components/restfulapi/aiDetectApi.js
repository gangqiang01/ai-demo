import { apiGet, apiPost, apiDelete, apiPut, apiPostfile } from "../../assets/js/baseApi";

let getAiDetectByPageApi = function (keywords, currentPage, limit) {
    let data = {
        keywords,
        currentPage,
        limit,
    }
    return new Promise((resolve, reject) => {
        apiGet("/v1/aiDetect/byPage", data).then((data) => {
            resolve(data);
        }).catch((err) => {
            resolve(err.response);
        })
    })
}

let addAiDetectApi = function (file) {
    let formdata = new FormData();
    
    formdata.append("file", file);
    let config = {
        headers: {'Content-Type': 'multipart/form-data'}
    };
    return new Promise((resolve, reject) => {
        apiPostfile('/v1/aiDetect', formdata, config).then((data) => {
            resolve(data)
        }).catch((err) => {
            resolve(err.response)
        }) 
    })
}

let deleteAiDetectApi = function (id) {
    return new Promise((resolve, reject) => {
        apiDelete("/v1/aiDetect/" + id).then((data) => {
            resolve(data);
        }).catch((err) => {
            resolve(err.response);
        })
    })
}

let updateAiDetectApi = function (id, status, notification) {
    return new Promise((resolve, reject) => {
        let data = {
            status,
            notification,
        }
        apiPut("/v1/aiDetect/" + id, data).then((data) => {
            resolve(data);
        }).catch((err) => {
            resolve(err.response);
        })
    })
}

export {
    getAiDetectByPageApi,
    addAiDetectApi,
    deleteAiDetectApi,
    updateAiDetectApi
}