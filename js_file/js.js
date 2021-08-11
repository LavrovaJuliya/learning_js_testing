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

/*let dictionary = Object.create(null);
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
rabbit.__proto__.sayHi();*/


/*class Clock{
	constructor(template){
	this.template=template;
	}
	show(){
		let date = new Date();
		let hours = date.getHours();
		if (hours<10){
			hours = '0'+hours;
		};
		let  minutes = date.getMinutes();
		if (minutes<10){
			minutes = '0'+minutes;
		};
		let second  = date.getSeconds();
		if (second<10){
			second = '0'+second;
		};
		let output = this.template
		.replace("h",hours)
		.replace("m",minutes)
		.replace("s",second);
		console.log(output);
		
	}
	start(){
		this.show();
		this.timer = setInterval(()=>this.show(),1000);
	}
}
let clock = new Clock('h-m-s');
clock.start();

class ExtendedClock extends Clock {
  constructor(template='h-m-s',precision=1000) {
    super(template);
    this.precision = precision;
  }

  start() {
    this.show();
    this.timer = setInterval(() => this.show(),this.precision);
  }
}
alert();
let modernClock = new ExtendedClock();
modernClock.start();*/

/*class Rabbit extends Object {
  constructor(name) {
	super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') )*/
/*class Worker{

	constructor(name,surname){
		this.#name = name;
		this.#surname = surname;
		this.#rate = 0;
		this.#days = 0;
	}
	#name;
	#surname;
	#rate;
	#days;
	getName(){
		return this.#name;
	}
	getSurname(){
		return this.#surname;
	} 
	getRate(){
		return this.#rate;
	}
	setRate(value){
		this.#rate = value;
	}
	getDays(){
		return this.#days;
	}
	setDays (value){
		this.#days = value;
	}
	getSalary(){
		return this.#days *this.#rate;
	}
}	
	

	let worker1 = new Worker('Иван','Иванов');
	let worker2 = new Worker('Петр','Петров');
	worker1.setRate(20);
	worker1.setDays(10);
	
console.log(worker1.surname);
console.log(worker1.rate);
console.log(worker1.days);
console.log(worker1.getSalary());
console.log(worker2.name);
console.log(worker2.surname);
console.log(worker2.rate);
console.log(worker2.days);
console.log(worker1.getSalary());
console.log(worker1.getSalary()+worker2.getSalary());*/
/*class MyString{
	revers(str){
		return str.split("").reverse().join("");
	}
	ucFirst(str){
		let newStr = str[0].toUpperCase() + str.slice(1);
		return newStr;
	}
	
}
	let str1 = new MyString();
	console.log(str1.revers("abcd"));
	console.log(str1.ucFirst("abcd"));*/
/*class Validator{
	
	isEmail(str){
		let atpos = str.indexOf('@');
		let dotpos = str.lastIndexOf('.');
		if(atpos<1||dotpos-atpos<2){
			return false;
		}else{
			return true;
		}
	} 
	isDomain(str){
		let arr = ['.ua','.com','.ru','.net','ac','su','tv','info','io','pw'];
		for (let i =0;i<arr.length;i++){
			if (str.indexOf(arr[i])!== -1){
				return true;
			}
		}return false;
	}
	isDate(str){
		let date = new Date(Date.parse(str));
		if(date>0){
			return true;
		}else{
			return false;
		}
	}
	isPhone(str){
		if(str.startsWith('380')&&Number(str)){
			return true;
		}return false;
}	}
let validator = new Validator();
console.log (validator.isEmail('ulyamosienko@gmail.com'));
console.log (validator.isDomain('fotkakharkovu.net'));
console.log (validator.isDate('10.05.2020'));
console.log (validator.isPhone('380683421jhg 0'));*/
/*function f(){
	try {
	alert('начать работу');
	return 'result';
	alert('');
	} catch (e) {
	alert('ошибка');
	}
	//alert('очистка');
 finally {
	alert('очистить рабочее пространство');
	}
}
f();*/
/*class FormatError extends SyntaxError{
	constructor(message){
		super(message);
		this.name = ("FormatError");
	}
}
let err = new FormatError("ошибка форматирования");

alert( err.message );
alert( err.name ); 
alert( err.stack ); 
alert( err instanceof FormatError ); 
alert( err instanceof SyntaxError ); */
/*function showCircle(cx,cy,radius){
	let div = document.createElement("div");
	div.style.width = 0;
	div.style.height = 0;
	div.style.right = cx +'px';
	div.style.top = cy +'px';
	div.className = 'circle';
	console.log(document.body);
	document.body.append(div);
	setTimeout(()=>{
		div.style.width = radius*2 +'px';
		div.style.height = radius*2 + 'px';
	
		div.addEventListener('transitionend', function handler() {
		div.removeEventListener('transitionend', handler);
		callback(div);
      });
	});*/
	/*return new Promise(resolve=>{
		setTimeout(()=>{
			div.style.width = radius*2 +'px';
			div.style.height = radius*2 + 'px';
			div.addEventListener('transitionend', function handler() {
				div.removeEventListener('transitionend', handler);
				resolve(div);
			});
			
		});
	})	
}
	function clickHandler(){
		showCircle(150, 150, 100).then(div => {
		div.classList.add('message-ball');
		div.append("Hello, world!");
		});
	}
	function delay(ms){
		return new Promise(resolve=>setTimeout(resolve,ms));
	}

	delay (3000).then(()=>alert("выполнилось через 3 секунды"));*/
	
	/*async function loadJson(url) {
		let response = await fetch(url);
			if (response.status == 200) {
				let json = await response.json();
				console.log(response);
				return json;
			}
				throw new Error(response.status);
			
		
	}
	loadJson(`https://api.github.com/users/LavrovaJuliya`)
		.then(function(json){
			let id = json.id;
			let id1 = json.login;
			alert(id);
			alert(id1);
		})	
		.catch(alert);*/
	
  
  /*class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
    if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    
}

async function demoGithubUser() {
 while(true){
	let name = prompt("Введите логин?", "iliakan");
	try{
		let user = await loadJson(`https://api.github.com/users/${name}`);
		break;
	}
	catch(err){
		if (err instanceof HttpError && err.response.status == 404) {
			alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
		} else {
			throw err;
		}
	}
 }
alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
return user; 
}

demoGithubUser();*/
/*	function* pseudoRandom(seed){
		value  = seed;
		while(true){
			value = value * 16807%2147483647
			yield value;
		}
	}
	let generator = pseudoRandom(1);

	alert(generator.next().value); 
	alert(generator.next().value);
	alert(generator.next().value);*/
	/*let user = {
		name: "John"
	};

	function wrap(target) {
		return new Proxy(target, {
			get(target,prop){
				if(prop in target){
				 return target[prop];
				}else{
					throw new ReferenceError(`Свойство "${prop}" не существует`);
					}
			}
		});
	}

	user = wrap(user);

	alert(user.name);
	alert(user.age); */

	let array = [1, 2, 3];
		array = new Proxy(array, {	
			get(target,prop,receiver){
				if(prop<0){
				 prop = +prop + target.length;
				}
				return Reflect.get(target,prop,receiver);
			}
		});

	alert( array[-1] ); // 3
	alert( array[-2] ); // 2	
	function makeObservable(target){
		target.observe = function f(handler){
			target.f = handler;
		};
		return new Proxy(target,{
			set(targe,prop,value,receiver){
				target.f(prop,value);
				return Reflect.set(target,prop,value);
			}
		});

	}	
	let user = {};
		user = makeObservable(user);

		user.observe((key, value) => {
		alert(`SET ${key}=${value}`);
	});

	user.name = "John";
	alert(user.name);
	let calc = prompt("Введите арифметическое выражение", "3*3+4");
	alert(eval(calc));

	let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];
	let collator = new Intl.Collator();
	alert( collator.compare(animals) );
	animals.sort(collator.compare);
	alert( animals );