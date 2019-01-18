function main(){
    setTimeout(function(value){
        var x = value;
        functionOne(x);
    },1000)
}


function functionOne(x) {
    setTimeout(function (value) {
        functionTwo(value, x);
    }, 1000);
}
function functionTwo(value, x) {
    var y = value;
    setTimeout(function (value) {
        addData(value, x, y);
    }, 1000);
}

function addData(value, x, y) {
    var z = value;
    add(x, y, z);
}

main();

