
// Autocomplete search box;
var searchText = ["Diya",
   "Ishaan", 
   "Ananya", 
   "Dhruv ",
   "Amar ",
   "Aditi ",
   "Anjali", 
   "Sana ",
   "Shyla ",
   "Jaya ",
   "Shaan ",
   "Deven ",
   "Nikhil", 
   "Ajay ",
   "Ashwin", 
   "Sahil ",
   "Shaila", 
   "Agasty",
   "Ajay ",
   "Darsh ",
   "Shylah", 
   "Ishani", 
   "Candy ",
   "Ambar ",
   "Divya ",
   "Varun ",
   "Akshay",
   "Avan ",
   "Farid ",
   "Shanti" ];


   function getSearchResults(value) {
      
     return Rx.Observable.create(function(observe){
    
         var results = [];
        
         searchText.forEach( item => {
               var lowercaseItem = item.toLowerCase();
               if(lowercaseItem.startsWith(value.toLowerCase())){
                  results.push(item);
               }
            })
     
       
         setTimeout(function(){
       
            observe.onNext(results);
            observe.onCompleted();
         },200);
     })
     
   }


  function delay(ms){
     return Rx.Observable.create(function(observer){
        setTimeout(function(){
           observer.onNext();
           observer.onCompleted();
        },ms)
     })
  }

  // var txtArea = document.getElementById('txtArea');
   var inputTxt = document.getElementById('inputTxt');
var txtArea = document.getElementById('txtarea')
  var keypresses = Rx.Observable.fromEvent(inputTxt,'keyup');



   var searchResultSet = keypresses.map(function(evt){
      
      return getSearchResults(inputTxt.value);
   }).distinctUntilChanged().switchLatest();

searchResultSet.subscribe(
result => txtArea.innerHTML = result

);

  


 


 


