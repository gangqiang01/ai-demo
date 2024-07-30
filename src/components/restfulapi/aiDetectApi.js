import { apiGet, apiPost, apiDelete, apiPut, apiPostfile } from "../../assets/js/baseApi";

let getAiDetectStatusApi = function (filename) {

    return new Promise((resolve, reject) => {
        apiGet("/v1/aiDetect/status/"+filename).then((data) => {
            resolve(data);
        }).catch((err) => {
            resolve(err.response);
        })
    })
}

let getAiDetectedFilesApi = function (type) {
    let data = {
        type
    }
    return new Promise((resolve, reject) => {
        apiGet("/v1/aiDetect/detected", data).then((data) => {
            resolve(data);
        }).catch((err) => {
            resolve(err.response);
        })
    })
}

let addAiDetectApi = function (file, type) {
    let formdata = new FormData();
    
    formdata.append("file", file);
    let config = {
        headers: {'Content-Type': 'multipart/form-data'}
    };
    return new Promise((resolve, reject) => {
        apiPostfile('/v1/aiDetect/'+type, formdata, config).then((data) => {
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
    getAiDetectedFilesApi,
    getAiDetectStatusApi,
    addAiDetectApi,
    deleteAiDetectApi,
    updateAiDetectApi
}