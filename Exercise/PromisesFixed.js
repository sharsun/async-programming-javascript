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

var promise1 = getFile("file1");
var promise2 = getFile("file2");
var promise3 = getFile("file3");



// **************************************
// The old-n-busted callback way
function getFile(file) {
	return new Promise(function(resolve,reject){
		fakeAjax(file,resolve);
	})
	
}

promise1
.then(function(text){
	output(text);	
})
.then(function(){
	return promise2;
})
.then(function(text){
	output(text);
})
.then(function(){
	return promise3;
})
.then(function(text){
	output(text);
	output("Complete");
})



