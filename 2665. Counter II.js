var createCounter = function (init) {
  let temp = init;
  return {
    increment: () => ++temp,
    decrement: () => --temp,
    reset: () => temp=init,
  };
};


 const counter = createCounter(5)


 console.log(counter.increment());
 console.log(counter.reset());  
 console.log(counter.decrement());
