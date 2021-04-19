function work(a,b){
   alert(a + b);
}
function spy(work){
  return function(){
    return work.apply(this,arguments)
    }
}
work = spy(work);
work(1,2);
work(4,5);

function f(x){
	alert(x);
}
function delay(f,ms){
	return function(){
		setTimeout(() => f.apply(this,arguments) ,ms);
	}
}
	let f1000 = delay(f,1000);
	let f1500 = delay(f,1500);
	f1000("test");
	f1500("test");
	

			
		
			
		
	
	
