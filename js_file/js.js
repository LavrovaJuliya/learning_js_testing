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

/*function f(x){
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
	//f1500("test2");*/
let user1={
	name:"Ivan Ivanov",
	bankaccount:100000,
	get incom (){
		console.log("user1.get");
		return 0;
	},	
	get allinfo(){
		return`${this.name},${this.bankaccount},${this.incom}.`;
	}	
	
};
/*for(let entrie of Object.entries(user1)){
		console.log(entrie);
};	*/

console.log(user1.allinfo);



let user2={
	name:"Petr Petrov",
	bankaccount:2000000,
	get incom (){
		console.log("user2.get");
		return this._incom;
		
	},	
	set incom(value){
		console.log("user2.set");
		this._incom = value;
			
	},
	get allinfo(){
		return`${this.name},${this.bankaccount},${this.incom}.`;
	}	
};
	
	user2.incom = prompt("Укажите ваш ежемесячный доход");
	console.log(user2.allinfo);

	
/*for(let entrie of Object.entries(user2)){
		console.log(entrie);
};	
*/