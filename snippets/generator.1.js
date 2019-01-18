function *gen(){
    console.log("hello");
    yield;
    console.log("world")
}

var gen = gen(); // Produce Iterator
gen.next(); //hello
gen.next(); //world