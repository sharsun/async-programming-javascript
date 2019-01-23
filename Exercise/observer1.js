var button = document.getElementById("button")
var mousemoveEvents = Rx.Observable.fromEvent(document,'mousemove');
var mouseDownEvents = Rx.Observable.fromEvent(button,'mousedown');

var mouseUpEvents = Rx.Observable.fromEvent(document,'mouseup');

var drag  =  mouseDownEvents.map(downEvent =>{
    return mousemoveEvents.takeUntil(mouseUpEvents);
} ).concatAll();


drag.subscribe(function(evt){
   button.style.left = evt.pageX + "px";
   button.style.top = evt.pageY + "px";
})

