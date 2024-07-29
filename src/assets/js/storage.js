let setSession = function(key, value){
    if(!key){
        return;
    }
    if(value !== undefined && value !== null){

        if(typeof(value) !== "string"){
            value = JSON.stringify(value);
        }
        window.sessionStorage.setItem(key, value);
    }else{
        console.log(key+":sesssion is "+ value)
    }
}

let getSession = function(key){
    if(!key){
        return;
    }
    return window.sessionStorage.getItem(key)|| ""
}

let removeSession = function(key){
    if(!key){
        return;
    }
    window.sessionStorage.removeItem(key)
}

let checkSession = function(key){
    if(!key){
        return false;
    }
    let value = getSession(key);
    if(value && value != "undefined" && value != "null"){
        return true;
    }else{
        return false;
    }
}

let setLocal = function(key, value){
    if(!key){
        return;
    }
    if(value !== undefined && value !== null){
        if(typeof(value) !== "string"){
            value = JSON.stringify(value);
        }
        window.localStorage.setItem(key, value);
    }else{
        console.log(key+":local is "+ value)
    }
   
}

let getLocal = function(key){
    if(!key){
        return;
    }
    return window.localStorage.getItem(key)|| ""
}

let removeLocal = function(key){
    if(!key){
        return;
    }
    window.localStorage.removeItem(key)
}

let checkLocal = function(key){
    if(!key){
        return false;
    }
    let value = getLocal(key);
    if(value && value != "undefined" && value != "null"){
        return true;
    }else{
        return false;
    }
}

export {
    setSession,
    getSession,
    checkSession,
    removeSession,
    setLocal,
    getLocal,
    checkLocal,
    removeLocal
}