
function myEach (collection, callback) {
    let currentCollection = [...collection]
    if (collection instanceof Array === false) {
      currentCollection = Object.values(collection)
    }
    for (let i = 0; i < currentCollection.length; i++) {
      callback(currentCollection[i])
    }
    return collection
  }

  function myMap(collection, callback) {
    let currentCollection = [...collection]
    if ( collection instanceof Array === false) {
      currentCollection = Object.values(collection)
    }
    const newCollection = []
    for(let i = 0; i < currentCollection.length; i++) {
      const newItem = callback(currentCollection[i])
      newCollection.push(newItem)
    }
    return newCollection
  }

  function myReduce(collection, callback, acc) {
    let currentCollection = [...collection]
    if (collection instanceof Array === false) {
      currentCollection = Object.values(collection)
    }
    let current = acc
    if(typeof acc !== "number"){
      current = currentCollection[0]
      for(let i = 1; i < currentCollection.length; i++) {
        current = callback(current, currentCollection[i], currentCollection)
      }
    } else { 
      for(let i = 0; i < currentCollection.length; i++) {
        current = callback(current, currentCollection[i], currentCollection)
      }
    }
    return current
  }

  function myFind(collection, predicate) {
    let currentCollection = [...collection]
    if (collection instanceof Array === false) {
      currentCollection = Object.values(collection)
    }
    for (let i = 0; i < currentCollection.length; i++) {
      if (predicate(currentCollection[i])) {
        return currentCollection[i]
      }
    }
    return undefined
  }

  function myFilter(collection, predicate) {
    let currentCollection = [...collection]
    if (collection instanceof Array === false) {
      currentCollection = Object.values(collection)
    }
    const newCollection = []
    for (let i = 0; i < currentCollection.length; i++) {
      if (predicate(currentCollection[i])) {
        newCollection.push(currentCollection[i])
      }
    }
    return newCollection
  }

  function mySize(collection) {
    let currentCollection = [...collection]
    if (collection instanceof Array === false) {
      currentCollection = Object.values(collection)
    }
    return currentCollection.length
  }

  function myFirst(array, n) {
    if (typeof n !== "number") {
      return array[0]
    } else {
      let newArray = []
      for (let i = 0; i < n; i++){
        newArray.push(array[i])
      }
      return newArray
    }
  }

  function myLast(array, n) {
    if (typeof n !== "number") {
      return array[array.length - 1]
    } else {
      let newArray = []
      for (let i = 1; i <= n; i++) {
        newArray.unshift(array[array.length-i])
      }
      return newArray
    }
  }

  function myKeys (object) {
    const arrayOfKeys = []
    for (let key in object) {
      arrayOfKeys.push(key)
    }
    return arrayOfKeys
  }

  function myValues (object) {
    const arrayOfValues = []
    for (let key in object) {
      arrayOfValues.push(object[key])
    }
    return arrayOfValues
  }