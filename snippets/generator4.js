function getData(){
    setTimeout(function(){
        gen.next(Math.random())
      
    },1000)
};

function *add(){
    var x = yield getData();
    var y = yield getData();
    return x + y;
}

var gen = add();



