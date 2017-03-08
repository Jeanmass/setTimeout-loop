# Synchronous setTimeout loop


In javascript, loops like for...of are asynchronous, which means that setTimeout will not work properly if you use it in a loop. If you want to loop through an array or a string synchronously, you have to come up with another solution. 

As a beginner in javascript, i had a hard time finding a clear and comprehensible solution to this problem. So when i found one, i decided to share it in the most beginner friendly way i could.

I imagine this is probably not the best way to do this, but it has the advantage of being pretty easy, especially for a beginner. 

Check out the two examples to learn about this technique.
You can use this to test the examples : http://htmlpreview.github.io/

Feel free to contact me with any comment, suggestion or alternative technique. 
 
------------

# Code you can copy and adapt to your needs 

```
function main(){
  syncTimeout(yourArray, 0);
});

function syncTimeout(array, i){
  if (i < array.length) {
    setTimeout(function(){
      whateverYouwant();
      i = i+1;
      syncTimeout(array, i);
    }, 100);
  } else {

  }
};
```

---------
