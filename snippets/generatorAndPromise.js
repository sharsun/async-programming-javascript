
'use strict';

var file1 = "This is a Lorem Ipsum File";
var file2 = "";

function readFileUtility(cb){
    setTimeout(function(){
        cb(null,file1);
    },2000)
}

function writeFileUtility(data , cb){
    setTimeout(function(){
        file2 = data;
        cb(null);
    },2000)
}



function readFile() {
  return new Promise((resolve) => {
    readFileUtility((err, data) => {
      if (err) throw err;

      resolve(data);
    })
  });
}

function writeFile(data) {
  return new Promise((resolve) => {
    writeFileUtility(data, (err) => {
      if (err) throw err;

      resolve();
    })
  });
}


function* processFile() {
  try {
    const text = yield readFile();
    const processedText = text.toUpperCase();

    yield writeFile(processedText);

    return file2;
  } catch (e) {
    console.error(String(e));
  }
}

function execute(generator, yeildValue) {
  const next = generator.next(yeildValue);

  if (!next.done) {
    next.value.then(result => execute(generator, result))
              .catch(err => generator.throw(err));
  } else {
    print(next.value);
  }
}

execute(processFile());