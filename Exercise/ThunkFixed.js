// solves time as complexity

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

var th1 = getFile("file1");
var th2 = getFile("file2");
var th3 = getFile("file3");

// **************************************

// Eliminating Time complexity



function getFile(file) {
	var resp, fn;
	fakeAjax(file,function(text){		
		if(fn)
			fn(text);
		else{
			resp = text;
		}
	})

	return function th(cb){
		if(resp){
			cb(resp)
		}
		else{
			fn = cb;
		}
	}
}


th1(function(text){
	output(text);
	th2(function(text){
		output(text);
		th3(function(text){
			output(text);
			output("Complete");
		})
	})
})

