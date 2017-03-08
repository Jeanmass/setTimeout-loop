# Synchronous setTimeout loop

-----------

In javascript, loops like for...of are asynchronous, which means that setTimeout will not work properly if you use it in a loop. If you want to loop through an array or a string synchronously, you have to come up with another solution. 

As a beginner in javascript, i had a hard time finding a clear and comprehensible solution to this problem. So when i found one, i decided to share it in the most beginner friendly way i could.

I imagine this is probably not the best way to do this, but it has the advantage of being pretty easy, especially for a beginner. 

Check out the two examples to learn about this technique. 

Feel free to contact me with any comment, suggestion or alternative technique. 
 
------------

# Code you can copy and adapt to your needs 

function main(){
  syncTimeout(array, 0);
});

function synTimeout(array, i) {
  operation(array, i);
};

function operation(array, i){
  i = i+1;
  if (i < array.length) {
    setTimeout(function(){
      whateverYouwant();
      synTimeout(array, i);
    }, 100);
  } else {

  }
};


---------
