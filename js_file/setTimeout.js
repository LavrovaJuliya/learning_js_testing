function printNumbers(from,to){
  let num =from;
  let timerId = setInterval(function(){
    alert (num);
    if (num == to){
      clearInterval(timerId);
    }
    num++;
  },1000);
}  
printNumbers(5,10);

function printNumbers(from,to){
  let num == from;
  setTimeout(function run(){
    alert(num);
    if(num <to){
      setTimeout(run,1000);
    }
    num++;
  },1000);
}
printNumbers(5,10);
