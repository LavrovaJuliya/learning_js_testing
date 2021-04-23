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
	let iner = function(){
		console.log(arguments);
		setTimeout(function tick(){
			console.log("in tick function");
			console.log(arguments);
			console.log(ms);
			f(arguments[0]);
			tick.apply(this,arguments);
			setTimeout(tick,ms);
		},ms);
		console.log(typeof iner);
		iner.apply(this,arguments);
		return iner;
	}
}
	let f1000 = delay(f,5000);
	console.log(f1000);
	//let f1500 = delay(f,10000);
	//f1000("test1");
	//f1500("test2");
	

			
		
			
		
	
	
