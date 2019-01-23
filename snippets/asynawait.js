
'use strict';

var file1 = "This is a Lorem Ipsum File";
var file2 = "";

function readFileUtility(cb){
  return new Promise( cb => {setTimeout(function(){
    cb(file1);
},2000)})
 
}

function writeFileUtility(data ,cb){
  return new Promise(cb =>{setTimeout(function(){
    file2 = data;
    cb();
},2000)})
    
}

async function readFile() {
  
  return   await readFileUtility((data) => {
        if (err) throw err;
        return data;
    })


}

async function writeFile(data) {
 
   return await writeFileUtility(data, (err) => {
        if (err) throw err;

        return;
    })

}


async function processFile() {
  try {
    const text = await readFile();
    const processedText = text.toUpperCase();

    await writeFile(processedText);

    print(file2);
  } catch (e) {
    console.error(String(e));
  }
}



processFile();


