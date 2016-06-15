window.onload = function(){
	




function  lift(levelbtnpush, destinationLevel){
  var arrlevels= [0,1,2,3];//levels
  var destinationLevelinteger = parseInt(destinationLevel)
  
  var a =arrlevels.indexOf(levelbtnpush);
  
  var  b = arrlevels.indexOf(destinationLevelinteger);
  if((a>=0)&&(b>=0)){return b-a;}
  return 0

}//***********************************************************************

function  sum(){

  var endsumm =0
 for(var  i=0; i<arguments.length; i++ ){

  endsumm =endsumm+arguments[i];
   //return function(){var krab =arr[i]+krab;
   // console.log(krab);
  }
   // return crab;
  
return endsumm;
}//***********************************************************************

function double(){
 var arr= [];

 for(var  i=0; i<arguments.length; i++ ){
  var multiply= arguments[i]*2;
  arr.push(multiply)
}
return  arr;
}//*****************************************************************************
function pluck(){
var plarr= [];

for(var  j=0; j<arguments.length; j++ ){


var obj= arguments[arguments.length-1];
var arrofobj = arguments[0];

var  nameobj = Object.getOwnPropertyNames(arrofobj[j])[0];


plarr.push(arrofobj[j][nameobj]);
}
return  plarr;
}



//pluck([{a:1}, {a:2}], 'a') ;


var plukedd= pluck([{a:1}, {a:2}], 'a') ;
var mult= double(1,2,10,57);

var itog = sum(1, 2, 3, 4, 5); 
var rez = lift(3,"2");
console.log (rez,itog, mult, plukedd );
console.log("elevator will move to", rez, "step");
console.log("Amount  іs", itog );
console.log("doubled", mult);
console.log("plucked", plukedd );
}//eofs