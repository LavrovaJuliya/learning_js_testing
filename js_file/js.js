/*function work(a,b){
   alert(a + b);
}
function spy(work){
  return function(){
    return work.apply(this,arguments)
    }
}
work = spy(work);
work(1,2);
work(4,5);*/

function f(x){
	alert(x);
}
function delay(f,ms){
	return function(){
		console.log(arguments);
		console.log(ms);
		let tick =()=>{
			tick = f.apply(this,arguments);
			console.log(arguments);
			console.log(ms);
			//f(arguments);
			setTimeout(tick,ms);
		}
			//tick = f.apply(this,arguments);
			setTimeout(tick,ms);
		
		
	}
}
	let f1000 = delay(f,5000);
	let f1500 = delay(f,10000);
	f1000("test1");
	f1500("test2");
	

			
		
			
		
	
	
