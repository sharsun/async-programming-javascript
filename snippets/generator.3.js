function *gen(){
   var x = 1 + (yield);
   var y = 1 + (yield);
   return (x + y);
}

var gen = gen(); // Produce Iterator
gen.next(); 
gen.next(10);
console.log(gen.next(20).value);