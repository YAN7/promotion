export {
    set,
    get,
    clear,
    remove,
    pushArr,
    setObjItem
};

let storage = window.localStorage;
let json = window.JSON;

function set(key, value) {
    storage.setItem(key, json.stringify(value));
}

function get(key) {
    let value = json.parse(storage.getItem(key));
    if (null != value) {
        return value;
    }
    return undefined;
}

function clear() {
    storage.clear();
}
function remove(key) {
    storage.removeItem(key);
}

function pushArr(key,value){
    var arr = get(key);
    if(arr == undefined){
        arr = [];
    }
    arr.push(value);
    set(key,arr);
}
function setObjItem(key,item,value){
    var obj = get(key)?get(key):{};
    obj[item] = value;
    set(key,obj);
}





