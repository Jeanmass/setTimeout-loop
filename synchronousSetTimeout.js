// in this example, we want to do certain things for every element in an array, but we want to wait for the array element to be
// treated before letting the loop continue

var array = {"un", "deux", "trois"};

function main(){
  // we call the function with two parameters : the array and the identifier for the element in the array we want to start with.
  syncTimeout(array, 0);
});

function synTimeout(array, i) {
  operation(array, i); // we use another function to do what we want to do synchronously
};

function operation(array, i){
  i = i+1; // we increment i to let the syncTimeout() function know that it must store a new element when we call it again later
  if (i < array.length) { // we verify if there is another element in the array
    setTimeout(function(){
      // Here you can do anything that you want to happen after a specific amount of time
      whateverYouwant();
      synTimeout(array, i); // We call synTimeout() again with incremented i as parameter
    }, 100); // the amount of time in ms you want to wait before whateverYouwant()
  } else {
    // if there is no more element in the array, you can call another function or just leave the else blank to end the loop
  }
};
