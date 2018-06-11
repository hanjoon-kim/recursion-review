// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  /*
  input: various arguments of different data types
  output: string
  
  strategy: first identify what data type the argument is
            then we turn it into a string 
            Recursion comes in for arrays and objects
              Array.isArray --> stringify RECURISOn
              for objects keys have to be strings, properties can be any data type
              recursion on the property
            Primitive types are easy peasy
  if number
    turn the number into a string
  if null
    return 'null'
  if boolean
    return respective boolean
  if string
    add quotes and return string
  if array
    add brackets as string, and in between run stringify for each element
  if obj
    add bracket and then add stringified key and then add colon, stringify values
    add commas as necessary for every single key: value pair
    add closing bracket
    return
    deal with functinos and undefined values
                
*/
  var result;

  if (typeof obj === 'number') {
    return '' + obj;
  }
  if (obj === null) {
    return 'null'; 
  }
  if (typeof obj === 'boolean') {
    return '' + obj;    
  }
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }   
  if (Array.isArray(obj)) {
    result = '[';
    obj.forEach(elem => {
      result += stringifyJSON(elem);
      result += ',';
    });
    if (obj.length > 0) {
      result = result.slice(0, result.length - 1);
    }
    result += ']';
    return result;
  }
  if (typeof obj === 'object') {
    result = '{';
    for (let key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
      
    }
    if (result.length !== 1) {
      result = result.slice(0, result.length - 1);
    }
    result += '}';
    return result;
  }

};
