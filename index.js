var recipes = {}

var updateObjectWithKeyAndValue = (object, key, value) => {
    return Object.assign({}, object, { [key]: value });
}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
    object[key] = value;
    return object;
}

var deleteFromObjectByKey = (object, key) =>{
  delete object.key;
}

deleteFromObjectByKey(object, key)