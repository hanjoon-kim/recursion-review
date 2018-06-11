// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node = document.body) {
  // input: a target class name as a string
  // output: an nodelist of all elements that have the classname
  // strategy: have an array of results, and concatenate to current list

  // console.log(node);
  // create an array to keep track of nodes with the target
  var results = [];
  // check if classname is in current node
  if (node.classList !== undefined && node.classList.contains(className)) {
    // concantenate to result array
    results.push(node);
  }
  // check if node has children
  if (node.hasChildNodes()) {
    // iterate through each child
    for (let i = 0; i < node.childNodes.length; i++) {
      results = results.concat(getElementsByClassName(className, node.childNodes[i]));
    }
  }
  // return the array
  return results;
};
