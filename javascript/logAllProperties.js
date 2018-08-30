

function logAllProperties(obj) {
  if (obj == null) return;
  console.log(Object.getOwnPropertyNames(obj));
  logAllProperties(Object.getPrototypeOf(obj));
}
logAllProperties(my_object);

//ref: [1]



// -----
// [1] https://stackoverflow.com/questions/30158515/list-down-all-prototype-properties-of-an-javascript-object





