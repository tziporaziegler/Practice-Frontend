/*
* Given a DOM element on the page, visit the element itself
* and all of its descendents (not just its immediate children).
* For each element visited, the function should pass that element to a provided callback function.
* 
* The arguments to the function should be:
* 	a DOM element
*	a callback function (that takes a DOM element as its argument)
*/

// This algorithm is an example of a Depth First Search.
function Traverse(p_element, p_callback) {
   p_callback(p_element);
   var list = p_element.children;
   for (var i = 0; i < list.length; i++) {
       Traverse(list[i], p_callback); // recursive call
   }
}