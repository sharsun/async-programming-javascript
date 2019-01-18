function *gen(){
   yield 1;
   yield 2;
}

var gen = gen(); // Produce Iterator
console.log(gen.next().value); //{value:1, done:false}

gen.next(); //{value:2 , done :false}
gen.next();//{value:undefined, done:true}