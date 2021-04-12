  function sum(a){
    let count = a;
    return function f(b){
      count += b;
     f.toString = function(){
      return count;
     }
     return f;
    }
   }
  alert( sum(1)(2) );
  alert( sum(5)(-1)(2) );
  alert( sum(6)(-1)(-2)(-3) );
  alert( sum(0)(1)(2)(3)(4)(5) );

  	
