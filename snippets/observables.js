var mouseMove = Rx.Observable.fromEvent(document,'mousemove');
var subscription = mouseMove.subscribe((evt)=> console.log(evt.clientX));

subscriber.unsubscribe();