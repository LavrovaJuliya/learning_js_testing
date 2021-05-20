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
/*let user1={
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
for(let entrie of Object.entries(user1)){
		console.log(entrie);
};	

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

/*let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__:head
};

let bed = {
  sheet: 1,
  pillow: 2,
   __proto__:table
  
};

let pockets = {
  money: 2000,
   __proto__:bed
  
};
alert(pockets.pen);
alert(bed.glasses);


let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
	stomach:[],
  __proto__: hamster
};

let lazy = {
	stomach:[],
  __proto__: hamster
};


speedy.eat("apple");
lazy.eat("banana");
alert( speedy.stomach ); 
alert( lazy.stomach );*/


/*function Rabbit() {}
Rabbit.prototype = {
  eats: true
}

let rabbit = new Rabbit();
//Rabbit.prototype = {};
//Rabbit.prototype.eats = false;
//delete rabbit.eats;
//delete Rabbit.prototype.eats;
alert( rabbit.eats );*/

/*function Rabbit(name){
	this.name = name;
	alert(name);
}

let obj = new Rabbit("White");
let obj2 = new obj.constructor("Black");
debugger;*/
/*Function.prototype.defer = function(ms){
		setTimeout(this,ms);
}
function f() {
  alert("Hello!");
}

f.defer(1000);*/

/*Function.prototype.defer = function (ms){
	f = this;
	return function(){
		return setTimeout(()=>f(...arguments),ms);
	}
}	
	
function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2);*/	

let dictionary = Object.create(null);
Object.defineProperty(dictionary,"toString",{
	value:function(){
		return Object.keys(this).join(",");
	},
});	

dictionary.apple = "Apple";
dictionary.__proto__ = "test"; 
for(let key in dictionary) {
  alert(key);
}
alert(dictionary); 

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");
rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
		