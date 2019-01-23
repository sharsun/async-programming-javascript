// Understanding concurrency through callback
//Coordinating responses
//Store in global variable to maintain time complexity

function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	print(text);
}

// **************************************
// The old-n-busted callback way
function getFile(file) {
	return Rx.Observable.create(observer =>{
		fakeAjax(file, function(result){
				observer.onNext(result);
		})
	})
	
}


// request all files at once in "parallel"
getFile("file1").subscribe(function(result){
	output(result);
	getFile("file2").subscribe(function(result){
		output(result);
		getFile("file3").subscribe(function(result){
			output(result);
		})
	})
});
