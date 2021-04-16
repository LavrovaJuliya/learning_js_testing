/*let randomNumber=(max)=>{
	return Math.floor(Math.random() * Math.floor(max));
};/*
let newRandomNumber= randomNumber(101);
alert(newRandomNumber);
function getRandomInt(max){
	return Math.floor(Math.random() * Math.floor(max))
}
function myFunction1(){
	let input;
	input= +prompt("Введите любое число от 0 до 100"," ")
	if (input!=newRandomNumber){
		document.getElementById("header").innerHTML = "<b> НЕ ПРАВИЛЬНО!!!</b>";
		if(input>newRandomNumber)
			document.getElementById("text").innerHTML = "<b>" + input+" is to big</b>";
		else
			document.getElementById("text").innerHTML = "<b>" + input+" is to small</b>";
	}else{
		document.getElementById("header").innerHTML = "<b> Вы Выиграли!!!</b>";
			document.getElementById("text").innerHTML = "<b>" + input+" Поздравляем</b>"
		}
	}*/
	/*function pow(x,n)
	let result=x;
		for(let i=0;i<=0;x++){
		result*=x
		}
		return result;
	let x=prompt(x?);
	let n=prompt(n?){
	alert(pow(x,n));
	}*/
	/*function showWorkSwitch(){
		let value;
		value= + prompt(" ");
		switch(value){
			case 0:
			alert("Загрузка скоро начнется");
			break;
			case 10:
			case 20:
			case 30:
			alert("загрузка запущенна");
			break;
			case 40:
			case 50:
			case 60:
			case 70:
			alert("Загрузка в процессе");
			break;
			case 80:
			case 90:
			alert("Завершение загрузки");
			break;
			case 100:
			alert("Загрузка завершена");
			break;
			default:
			console.log("Ошибка форматирования ввода кода");
		}
	}*/	
	/*function creatCalendar(currentDay) {
		
		let sum = "";	
		let calendarDefaultStyle = "style =\" display:inline-block;width:30px;";
		
		if ( typeof(currentDay) == "number") {
			
			if (currentDay > 0 && currentDay < 32) {
			} else {
				currentDay = 31;
				console.log("This is Error");
			}
		} else {
			currentDay = 1;
			console.log("This is Error");
				
		}
			 
		for (let i=1; i <= 31; i++) {
			
			let customStyle= "";
			
			if  (i%2 == 0) { customStyle="background-color:yellow;"; }
			else {customStyle = "background-color:gray;"; }	
			
			if ( i%5 == 0 ) { customStyle = "background-color:blue;"; }
			if ( i == currentDay ){ customStyle = "background-color:green;"; }
			
			sum += "<div "+ calendarDefaultStyle+customStyle + "\"id=\"day"  +  i + "\">" + i +  "</div>";
			
			if (i%7 == 0) sum += "<br>";
		}
		
		document.getElementById("Calendar").innerHTML = `<div> ${sum} </div>`;
			
	}			
	function creatCalendarRondom() {
		
		let randomDay=randomNumber(31) + 1;
		
		while (randomDay == 0) {
			randomDay = randomNumber(32);
		}
		
	creatCalendar(-5);
	}
let n = 2;
 alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);

	

	creatCalendar(n);*/
	
	/*function getSum() {
		let count = + document.getElementById("num").value;
		let price ;
		let sum = 0;
		
		if (count > 0 && count < 5) {
			price = 100; 
		}else if (count >= 5 && count <= 10) {
			price = 95;
		}else if (count >10){
			price = 90;	
		}else {
			document.getElementById("result").innerHTML = "Неверное количество товара";
			return;
		}
		sum = count * price;
		document.getElementById("result").innerHTML = sum;
		
		console.log("сумма" + sum);
		
	}
	/*let user ={};
	user.name = "John";
	user.surname = "Smith";
	user.name = "Pete";
	/*alert (user.name);
	delete user.name;
	
	
	function isEmpty (obj) {
		for (let key in obj) {
			return false;
		}
		 return true;
	}
	
	let schedule = {};

	alert( isEmpty(schedule) ); 

	schedule["8:30"] = "get up";

	alert( isEmpty(schedule) );







	let salaries = {}


	let sum = 0;
	for (let key in salaries) {
		sum += salaries[ key];
	}

	alert(sum);
	
	function multiplyNumeric(obj) {
		for (let key in obj) {
			if ( typeof obj[key] == "number"){
				obj[key] *= 2;
			}
		}
	}*/
	
	/*let menu = {
		width: 200,
		height:300,
		title:{
			button1:"Home",
			button2:{submenu:"page1", submenu2:"page2", submenu3:"page3"},
			button3:"Reference"
		}	
	};	
	console.log (menu);
	/*let newmenu = menu;
	newmenu.height = 350;
	console.log (newmenu);*/
	/*let clone ={};
	console.log(clone);
	for (let key in menu){
		clone[key] = menu[key];
		console.log (key + ":" + clone[key]);

	}*/
	
	
	/*for (let key in menu){
		if (typeof clone[key] == "object") {
			for (let key2 in clone[key]){
				console.log ("	" + key2 + ":" + clone[key][key2]);
			}	
		}else {
			console.log(key + ":" + clone[key]);
		}
	}	*/
	
	/*function logObject(obj) {
		debugger;
		console.log("logObject ()" );
		for (let key in obj){
		if (typeof clone[key] == "object") {
			logObject(clone[key]);
		}else {
			console.log(key + ":" + clone[key]);
		}
		}
	}
	logObject(menu);*/
		
	/*let clone = Object.assign ({}, menu);
	
	let newmenu = Object.assign (width, height, title, title[key]);*/
	
	
	/*multiplyNumeric(menu);
	console.log(menu);
	console.log( menu.width);*/
	
	/*function cloneMenu(obj, depth = 0 ) {
		let cloneObj = {};
		let tab = "";
		for (let i = depth; i >= 1 ; --i) {
			tab += "_ ";
		}
		for (let key in obj){
			if (typeof obj[key] == "object") {
				console.log ( tab + key + ":");
				cloneObj[key] = cloneMenu(obj[key], ++depth);
				
				
				
			}else {
				console.log( tab + key + ":" + obj[key]);
			cloneObj[key] = obj[key];	
			}
			
		}
		return cloneObj;
	}
	
	console.log (cloneMenu(menu));
	let newMenu = (cloneMenu(menu))
	
	menu.height = 800;
	menu.title.button2.submenu1 = "New Year"; 
	console.log(menu);
	console.log(newMenu);
	console.log("salary"in menu);
	delete menu.width;
	console.log("width"in menu);
	 for (let key in menu){
		console.log (key + ":" + menu[key]);
	 } 
	
	menu = null;
	console.log (menu);*/
	
	
	/*let user = {
		name: "Джон",
		go: function() { alert(this.name) }
	};

		user.go()
		
		
	let obj, method;

	obj = {
		go: function() { alert(this); }
	};

	obj.go();               

	(obj.go)();             

	(method = obj.go)();    

	(obj.go || obj.stop)(); 
	
	
	let calculator = {
		read() {
			this.x = +prompt ( "x" );
			this.y = +prompt ( "y" );
		},
		sum() {
			return this.x + this.y;
		},
		mul() {
			return this.x * this.y;
		},
		
	};

	calculator.read();
	alert( calculator.sum() );
	
	alert( calculator.mul() );*/
	 /*function showName(){
		let name = prompt("введите свое имя");
		
		document.getElementById("text").innerHTML = "Привет" + " " + name ;
	
	}*/
	
	
	
	/*let obj  = {};
	function A(){
		return obj;}
	function B(){
		return obj;}
	let a = new A;
	let b = new B;	
	alert ( a == b);*/

  /*  function Calculator(){
		 this.read = function() {
			this.x = +prompt ( "x" );
			this.y = +prompt ( "y" );
			
		};
		this.sum = function() {
			this.s = this.x + this.y;
			return this.s;
		};
		this.mul = function() {
			this.m = this.x * this.y;
			return this.m;
		};
	
	};
	debugger;
	let calculator = new Calculator();
	calculator.read();
	alert( "Sum" + calculator.sum() );
	
	alert( " Mul" + calculator.mul() );	*/
	
	/*
		this.value = startingValue;
		this.read = function(){
			this.value += +prompt("Добавить");
		};	
	}
	let accumulator = new Accumulator(1);
	debugger;
	accumulator.read();
	accumulator.read();
	alert(accumulator.value);*/
	
	
	/*let user = {
		name:"Вася",
		age: 30,
		salary: 1000,
		toString(){
			return this.name;
		},
		valueOf(){
			return this.age;
		},
		valueOf(){
			return this.salary;	
		}	
	}
	alert (user);
	alert(+user.age);
	alert(+user.salary);*/
	
	
	/*let obj = {
		toString() {
			return "5";
		},
		valueOf() {
			return 5;
		}
	}
	
	alert( obj + 5);
	alert( obj * 5);*/
	
	/*let str = "Привет";
	str.test = 5;
	alert(str.test);*/
	
	/*let a = +prompt("Введите число");
	let b = +prompt("Введите число");

	alert( a + b );
	
	
	alert( 6.35.toFixed(1) );*/
	
	
	/*function readNumber() {
	let num;
		do {
			num = prompt("Введите число");
			if (num === "Отмена"|| num === '')
			return undefined;
		} 	while ( !isFinite(num) );

		return +num;
	}
	alert(readNumber());*/


	/*function random(min, max) {
		return min + Math.random() * (max - min);
	}
	
	alert( random(1, 5) );
	alert( random(1, 5) ); 
	alert( random(1, 5) ); */
		/*countnum1 = 0;
		countnum2 = 0;
		countnum3 = 0;
		countnum4 = 0;
		countnum5 = 0;
	function randomInteger(min, max){
		let num = Math.floor((Math.random()* max) + min);
		
		switch (num){
			case 1:
			countnum1 +=1;
			break;
			case 2:
			countnum2 +=1;
			break;
			case 3:
			countnum3 +=1; 
			break;
			case 4:
			countnum4 +=1;
			break;
			case 5:
			countnum5 +=1;
			break;
				
		}
		
	}	
	for (let i = 0; i<1000000; i ++){
		randomInteger(1, 5);
		
	}
	console.log("Число 1"+ ":" + countnum1 + "раз");
	console.log("Число 2"+ ":" + countnum2 + "раз");
	console.log("Число 3"+ ":" + countnum3 + "раз");
	console.log("Число 4"+ ":" + countnum4 + "раз");
	console.log("Число 5"+ ":" + countnum5 + "раз");
		
	
	
	/*randomInteger(1, 5);*/
	/*alert( randomInteger(1, 5) ); 
	alert( randomInteger(1, 5) ); 
	alert( randomInteger(1, 5) ); 
	alert( randomInteger(1, 5) ); 
	alert( randomInteger(1, 5) ); 
	alert( randomInteger(1, 5) ); 
	alert( randomInteger(1, 5) ); 
	alert( randomInteger(1, 5) ); 
	alert( randomInteger(1, 5) ); */
	
	
	/*function ucFirst(str) {

		return str[0].toUpperCase() + str.slice(1);
	}	

	alert( ucFirst("вася") ); */
	
	
	/*function truncate(str, maxlength) {
		if (str.length > maxlength) {
			return str.slice(0, maxlength - 3) + "...";
		}else {return str;
		}
	}
	console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

	console.log(truncate("Всем привет!", 20));
	
	
	function checkSpam(str) {
		let lowerStr = str.toLowerCase();

		return lowerStr.includes('viagra') || lowerStr.includes('xxx');
	}

	alert( checkSpam('buy ViAgRA now') );
	alert( checkSpam('free xxxxx') );
	alert( checkSpam("innocent rabbit") );*/
	 
	 
	/*let fruits = ["Яблоки", "Груша", "Апельсин"];
	let shoppingCart = fruits;
	shoppingCart.push("Банан");
	alert( fruits.length ); 
	
	
	
	let styles = ["Джаз", "Блюз"];
	styles.push("Рок-н-ролл");
	styles[1] = "Классика";
	alert(styles.shift());
	styles.unshift("Реп","Регги");
	alert(styles);*/
	
	
	
	/*let arr = ["a", "b"];
	arr.push(function() {
	alert( this );
	})
	arr[2](); // "a","b",function*/
	
	
	/*function sumInput(){
		let numbers = [];
		while(true){
			let value = prompt("Введите число");
			if (value == ""||value == null){
				break;
			}
			value = +value;
			numbers.push (+value);
		}		
		
		
		let sum = 0;
		for (let number of numbers){
			sum +=number;
		}
		return sum;
	}	
	alert(sumInput());*/

	
	/*function getMaxSubSum(arr){
		let maxsum = 0;
		let partSum = 0;
		for (let item of arr){
			partSum += item;
		}
		let sumFixed = [];
		sumFixed.push(+partSum);
			maxsum = Math.max.apply(null,arr);
				
		return maxsum;
	}
	alert(getMaxSubSum([-1,2,3,-9]));	
	alert(getMaxSubSum([2,-1,2,3,-9]));	
	alert(getMaxSubSum([-1,2,3,-9,11]));	
	alert(getMaxSubSum([-2,-1,1,2]));	
	alert(getMaxSubSum([100,-9,2,-3,5]));	
	alert(getMaxSubSum([1,2,3]));*/



	/*function camelize(str){
		str = str.split("-");
		str = str.map((item,index) =>{
			if (index == 0){
				return item;
			}else{ return item = item[0].toUpperCase()+ item.slice(1);
			}
		});
		str = str.join("");	
		
		
		console.log(str);
	}
	
	/*camelize("background-color");
	camelize("list-style-image");*/
	/*camelize("-webkit-transition");*/
	
	/*function filterRange(arr, a, b){
		let filterArr = [];
		for(let i = 0;i<arr.length;i++){
			if ((arr[i] > a) && (arr[i] <= b)){
				filterArr.push(arr[i]);
			}	
		}
		return filterArr;
	}
	
	let arr = [5,3,8,1];
	let filtered = filterRange(arr,1,5);
	alert(filtered);
	alert(arr);*/
		
	/*function filterRangeInPlace(arr,a,b){
		for(let i=0;i<arr.length;i++){
			if(arr[i]< a||arr[i]>b){
				arr.splice(i,1);
		}	}	
	}
	
	let arr = [5,3,8,1];
	let filtered = filterRangeInPlace(arr,1,5);
	alert(arr);
	
	
	
	/*let arr = [5,2,1,-10,8];
	arr.sort((a,b)=> b - a );
	alert(arr);*/
	
	
	/*function copySorted(arr){
		return arr.sort();
		
		
		
	}
	
	let arr =["HTML", "JavaScript","CSS"];
	let sorted = copySorted(arr);
	console.log(sorted);
	console.log(copySorted);*/
		
	/*let vasya = {name:"Вася",age:"25"};
	let petya = {name:"Петя",age:"30"};
	let masha = {name:"Маша",age:"28"};
	
	let users = [vasya,petya,masha];
	let names = users.map(item =>item.name);
	alert (names);*/
	
	
		/*let vasya = {name:"Вася",surname:"Пупкин",id:1};
		let petya = {name:"Петя",surname:"иванов",id:2};
		let masha = {name:"Маша",surname:"Петрова",id:3};
	
		let users = [vasya,petya,masha];
		fullName = users.map(function(user){return{fullName:user.name + user.surname,id:user.id}});
		let usersMapped = fullName;
	
		alert(usersMapped[0].fullName);
		alert(usersMapped[0].id);
	
	/*function sortByAge(users){
		return users.sort((a,b) =>(a.age - b.age));
	}
	let vasya = {name:"Вася",age:"25"};
	let petya = {name:"Петя",age:"30"};
	let masha = {name:"Маша",age:"28"};
	let arr = [vasya,petya,masha];
	sortByAge(arr
	alert(arr[0].name);
	alert(arr[1].name);
	alert(arr[2].name);*/
	
	/*function getAverageAge(users){
		let result = users.reduce((sum,user) => sum + user.age, 0) / users.length;
			return result;
	}
	let vasya = {name:"Вася",age:25};
	let petya = {name:"Петя",age:30};
	let masha = {name:"Маша",age:29};
	let arr = [vasya,petya,masha];
	
	alert(getAverageAge(arr) );
	
	
	function unique(arr) {
		let newStr = [];
		for(let str of arr){
			if(!newStr.includes(str)){
				newStr.push(str);
			}
		}
		return newStr;	
	}
	let str = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"];
		
	alert( unique(str) ); */
	
	/*function Calculator(){
		this.calculator = function(str){
			let arr = str.split(" ");
			if(arr[1]=="+"){
				return +(arr[0]) + (+arr[2])
			}else if(arr[1]=="-"){
				return +(arr[0]) - (+arr[2]) 
			}
		}		
		this.addMethod = function(name,func(a,b)){
			calculator[name] = func(a,b)
		};
			
	}
		let calc = new Calculator;
		console.log(calc.calculator("3 + 7"));
		console.log(calc.calculator("3 - 7"));
		
		calc.addMethod("*",(a, b)=> a * b);
		calc.addMethod("/",(a, b)=> a / b);
		calc.addMethod("**",(a, b)=> a ** b);
		console.log(calc.calculator( "3 * 7"));
		console.log(calc.calculator( "3 / 7"));
		console.log(calc.calculator( "3 ** 7"));*/
	
	/*function shuffle(array){
		newArr =[];
		for (let i = 0;i < array.length;i++){
			newArr.push(array.splice(Math.floor(Math.random()* array.length)));
		}
		return newArr;
	
	};
	let arr = [1,2,3,4,5,6,7,8,9,0]
	shuffle(arr);
	alert(newArr);*/
	
	/*let recipeMap = new Map([
		["огурец",500],
		["помидор",350],
		["лук",50],
	]);
	/*for(let vegetable of recipeMap.keys()){
		alert(vegetable);
	}		
		
	for(let amount of recipeMap.values()){
		alert(amount);
	}*/
	/*for (let entry of recipeMap){
		alert(entry);
	};
	let obj = Object.fromEntries(recipeMap.entries());
	console.log(Object.values(obj));*/

	
		
	/*let obj  = {
		name:"John",
		age:30	
	};
	let map = new Map(Object.entries(obj));
	console.log(map);
	
	/*let arr = Array.from(obj);
	alert(arr);*/
	
		/*function anclean(arr){
			let obj = {};
			for(let i =0;i<arr.length;i++){
				let anag = arr[i].toLowerCase().split("").sort().join("");
				obj[anag] = arr[i];
			};
			result = [];
			console.log(obj);
			return result = Object.values(obj);
		};
		let arr = ["nap","teachers","cheaters","PAN","ear","era","hectares"];
		console.log(arr);
		
		console.log( anclean(arr));*/
		
		/*function sumSalaries(salaries){
			sum = 0;
			for(let salary of Object.values(salaries) ){
				 sum += salary;
			}
			return sum;
		};	
		let salaries = {
			"John": 100,
			"Pete": 300,
			"Mary": 250
		};

		alert( sumSalaries(salaries) );*/ 
	/*let user = {
		name: 'John',
		age: 30
	};
	function count(user){	
		return new Map(Object.entries(user)).size;
	};
	alert( count(user) );*/
	
	
	/*let user = {
		name: "John",
		years: 30
	};
	
	let  { name, years:age,isAdmin = false}= user;

	alert( name );
	alert( age ); 
	alert( isAdmin ); */
	/*let salaries = {
		"John": 100,
		"Pete": 300,
		"Mary": 250
	};
	
	function topSalary(salaries){
		let max = 0;
		for([name,salary]of Object.entries(salaries)){
			if (max < salary){
				max = salary;
				nameMax = name;
			}	
		}	
		return nameMax + ":" + max;
	};	
	alert(topSalary(salaries));*/
	/*let messages = [
		{text: "Hello", from: "John"},
		{text: "How goes?", from: "John"},
		{text: "See you soon", from: "Alice"}
	 ];
	 
	 let readMessages = new WeakMap();
	function read(obj){
		if(readMessages.has(obj)){
			 return alert(`Сообщение: ${Object.values(obj)}уже прочитано`);
		}else{
			readMessages.set(obj,"текущее время");
			return alert(Object.values(obj));
		}	
		 		
	};
	read(messages[0]);
	read(messages[0]);
	console.log(readMessages);
	masseges = [
		{text: "How goes?", from: "John"},
		{text: "See you soon", from: "Alice"}
	
	];
	console.log(readMessages);
	/*messages[0] = null;
	console.log (readMessages);*/
	
	/*let messages = [
		{ text: "Hello", from: "John" },
		{ text: "How goes?", from: "John" },
		{ text: "See you soon", from: "Alice" }
	];
	let date = new Date();
	let readMap = new Map();
	let readMap.set(messages[0],new Date(19,02,2021));*/
	
	
	
	/*let date = new Date(2012, 1, 20, 3, 12);
	alert( date );*/
	/*let message ={
		 text: "Hello", from: "John" 
	};
	let { text,...myrest} = message;
	
	console.log(text);
	console.log(myrest);*/
	
	/*function getWeekDay(date){
		let days = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
		let[sunday,monday,...rest] = days;
		console.log(sunday);
		console.log(monday);
		console.log(rest);
		return days[date.getDay()];
	};
	let date = new Date(2021, 1, 23);  
	alert( getWeekDay(date) );

	/*function getLocalDay(date){
		let day = date.getDay()
			if (day == 0){
				day == 7 ;
			}
		return day;
	};
		
	let date = new Date(2012, 0, 3);  
	alert( getLocalDay(date) ); */ 
	
	
	/*function getDateAgo(date, days){
		
		return new Date(date.getFullYear(),date.getMonth(),date.getDate() - days).getDate();
		
	};
		
	let date = new Date(2015, 0, 2);

	alert( getDateAgo(date, 1) );
	alert( getDateAgo(date, 2) ); 
	alert( getDateAgo(date, 365) ); */
	
	/*function getLastDayOfMonth(year,month){
		let date = new Date(year,month+1,0);
		return date.getDate();
	}
	alert(getLastDayOfMonth(2012,1));	
	alert(getLastDayOfMonth(2015,5));	
	alert(getLastDayOfMonth(2012,2));	
	alert(getLastDayOfMonth(2017,1));	
	alert(getLastDayOfMonth(2018,9));*/

	/*function getSecondToday(){
		let date1 = new Date;
		let date2 = new Date;
		date2.setHours(0,0,0,0);
		return Math.round((date1 - date2)/1000);
	};
	alert(getSecondToday());*/
	
	/*function getSecondsToTomorrow(){
		let tomorrow;
		(tomorrow = new Date(Date.now() + 21*3600*1000)).setHours(0,0,0,0);
		return Math.round((tomorrow - Date.now())/1000);
	}
	alert( getSecondsToTomorrow());*/
	
	/*	function formateDate(date){
			let now = new Date();
			let differ = now-date;
			if(differ<1000){
				alert("Прямо сейчас");
			}
			let time  = Math.floor( differ/1000 );	
			else if(differ < 60000){
				alert(time + "секунду назад");
			}else if(differ <3600000){
				alert(time + "минуту назад");
			}else{
				alert(new Date(new Date - 86400*1000));
			}
		};	
	
		formateDate(2021,1,19,09,03);*/
			
		/*function showDate(){
			let date = new Date(document.getElementById("date").value); 
			year = date.getFullYear();
			month = date.getMonth();
			day = date.getDate();
			let time = new Date();
			hour = time.getHours();
			minutes = time.getMinutes();
			second = time.getSeconds();
			console.log(year + "-" + month + "-" + day + "Текущее время:"+ hour+":" + minutes+":"+second);
			document.getElementById("result").innerHTML = year +"-"+ month +"-"+ day+ "Текущее время:"+ hour+":" + minutes+":"+second;
		};*/	
		/*function showDate(){
			let date = new Date(document.getElementById("date").value); 
			year = date.getFullYear();
			month =['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
			day = date.getDate();
			week = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
			let time = new Date();
			hour = time.getHours();
			minutes = time.getMinutes();
			second = time.getSeconds();
			console.log ("Сегодня "+ day + " "+ month[date.getMonth()] +" "+ year + "год" + " " + week[date.getDay()] + " " + "Текущее время:"+ hour+"Часов" + " " + minutes+"Минут"+ " " + second +"Секунд");
			document.getElementById("result").innerHTML = "Сегодня "+ day + " "+ month[date.getMonth()] +" "+ year + "год" + " " + week[date.getDay()] + " " + "Текущее время:"+ hour+"Часов" + " " + minutes+"Минут"+ " " + second +"Секунд";
		};*/
			/*function difEnding(n,ending){
				ending = ["секунд","секунда","секунды"];
				n = Math.abs(n)%100;
				if (n>=5&& n<=20){
					return ending[0];
				}
				let n1 = n%10;
				 if (n1 >1 && n1<5){
					return ending[2];
				}else{
					return ending[1];
				}
			}
			alert(difEnding(41));*/
			
		/*let arr = ["Fire","Air","Water","asdasdasdasdasd","as","s"];	 
		function sortStr(arr){
			for(let n =0;n < arr.length;n++){
				for (let i =0;i< arr.length-1-n;i++){
					if(arr[i]>arr[i+1]){ 
						let temp =arr[i];
						arr[i] = arr[i+1];
						arr[i+1] = temp;
				   
					}
				}
			}
			return arr;	
		};

		
		console.log(sortStr(arr));	*/
		
		/*let user = {
			name:"Василий Иванович",
			age:35
		};
		let user1 = JSON.parse(JSON.stringify(user));	
		console.log(user1);*/
		
		/*let room = {
			number:23
		}
		let meetup = {
			title:"Совещание",
			occupiedBy:[{name:"Иванов"},{name:"Петров"}],
			place:room
		}
		room.occupiedBy = meetup;
		meetup.self = meetup;
		alert(JSON.stringify(meetup,function replace(key,value){
			return(key != ""&&value==meetup)? undefined:value;
		}));*/	
		
		
		/*function sumTo(n){
			console.log("Первая");
			let sum = 0;
			for (let i = 1;i <= n;i++){
				sum += i
			}
			return sum;
		}
		console.log(sumTo(100));*/
		
		/*function sumTo(n){
			console.log("Вторая");
			if (n==1){
				return n;
			}else{return n + sumTo(n-1);
			}
		}	
			console.log(sumTo(101));*/
			
			
		/*function sumTo(n){
			return n*(n+1)/2;
		}
		alert(sumTo(100));*/
			
			
		/*function factorial(num){
			if(num >1){
				return num * factorial(num -1);
			}else{
				return num;
			}
		}	
		alert(factorial(500));*/
			
		function fib(n){
			if(n<=1){
				return n;
			}else{
				return fib(n-1) + fib(n-2);
			}
		}
		alert(fib(3));	
		alert(fib(7));	
		alert(fib(30));
		
		/*let list = {
			value:1,
			next:{
				value:2,
				next:{
					value:3,
					next:{
						value:4,
						next:null
					}
				}	
			}
		};
		function printList(list){
			alert(list.value);
			if (list.next){
				printList(list.next);
			}
		}	
		printList(list);*/
		
		
		/*let list = {
			value:1,
			next:{
				value:2,
				next:{
					value:3,
					next:{
						value:4,
						next:null
					}
				}	
			}
		};
		
		function printList(list){
			while(list){
				alert(list.value);
				list = list.next;
			}
		};	
		printList(list);*/
		
		/*let list = {
			value:1,
			next:{
				value:2,
				next:{
					value:3,
					next:{
						value:4,
						next:null
					}
				}	
			}
		};
		
		function printReverseList(list){
			if(list.next){
				printReverseList(list.next);
			}
			console.log(list.value);
		};
		printReverseList(list);*/
		/*function makeCounter(){
			let count = 0;
			return function(){
				return count++;
			};
		}
		let counter = makeCounter();
		let counter2 = makeCounter();
		alert(counter());	
		alert(counter());	
		alert(counter2());	
		alert(counter2());*/
	/*let lines =7;
	let str =" ";
	let star = "*";
	for (let i = 0;i<lines;i++){
		str +=star;
		console.log(str);
	}

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
	
	let lines =7;
	let str =" ";
	let star = "*";
	for(let i =0;i<7;i++){
		for(let j =0;j<i;j++){
		   console.log("*");
		}
	  console.log(" ");
	}  
		
		
		