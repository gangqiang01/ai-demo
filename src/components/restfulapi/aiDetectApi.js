import { apiGet, apiPost, apiDelete, apiPut, apiPostfile } from "../../assets/js/baseApi";

let getAiDetectStatusApi = function (filename, module) {

    return new Promise((resolve, reject) => {
        let data={
            module
        }
        apiGet("/v1/aiDetect/status/"+filename, data).then((data) => {
            resolve(data);
        }).catch((err) => {
            resolve(err.response);
        })
    })
}

let getAiDetectedFilesApi = function (type, module) {
    let data = {
        type,
        module
    }
    return new Promise((resolve, reject) => {
        apiGet("/v1/aiDetect/detected", data).then((data) => {
            resolve(data);
        }).catch((err) => {
            resolve(err.response);
        })
    })
}

let addAiDetectApi = function (file, type, module) {
    let formdata = new FormData();
    
    formdata.append("file", file);
    let config = {
        headers: {'Content-Type': 'multipart/form-data'}
    };
    return new Promise((resolve, reject) => {
        apiPostfile('/v1/aiDetect/'+type+"/"+module, formdata, config).then((data) => {
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


export {
    getAiDetectedFilesApi,
    getAiDetectStatusApi,
    addAiDetectApi,
    deleteAiDetectApi
}