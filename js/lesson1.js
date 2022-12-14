console.log('First js code');
console.log('Hi there');
let ism="Toxirjon";
const age=20;
//age=30;
ism='Abdujalil';
console.log(ism);
console.log(age);
let a=1000;
let b=3;


let c=a+b;
c=-a+b;
c=a-b;
console.log(c);
console.log("O'quvchi");
let name="Toxirjon";
let surname=" Obidov";

let fname=name+surname;
console.log(fname);
function totalbill(osh, cola, non, choy, salat){
	oshprice=35000;
	colaprice=11000;
	nonprice=3500;
	salatprice=20000;
	console.log(osh*oshprice+cola*colaprice+non*nonprice+salat*salatprice);
}

totalbill(2,1,3,1,2,1);
function totalbill(waitername, meal1, meal2){
	console.log(waitername +'jon  menga '+meal1+' va '+meal2+' olib keling');
}
totalbill('Jahongir', 'kabob', 'shashlik');

function square(a){
	return a*a;
}
console.log(square(8));
sqrten=square(10);
console.log(sqrten);
console.log(sqrten+'+'+square(7)+'='+(sqrten+square(7)));


function check(meal01, meal02,meal03){
	price1=35000;
	price2=12000;
	price3=6000;
	console.log('birinchi ovqat: '+(meal01*price1)+' Ikkinchi ovqat '+(meal02*price2)+' Uchinchi ovqat'+(meal03*price3));
}
check(2,2,1);
var five=5;
function lair(){
	
	var five=10;
}
//five=4;
lair();
console.log(five);
let age1=35;

if (age1>35) {
	console.log('you can run ');
} 
else {
	console.log('You don`t run ');
}
var bottleOfbeer = 9;
while (bottleOfbeer>0) {
	console.log(bottleOfbeer+' bottles of beer on the wall');
	bottleOfbeer--;
}
for (let i=1; i<=12; i++){
	console.log('9*'+i+'='+9*i);
}

for (var i=1; i<=100; i++){
	if (i%3===0){
		// says 'Fizz' after multiples of three 
		console.log(' Fizz');
	} else if (i%5===0) {
		// says 'Buzz' after multiples of five 
		console.log('Buzz');
	}else if (i%53===0) {
		console.log(i + ' i ni 50 ga bolganda');
		break;
	}
	else {
		console.log(i)
	}
}
/* for (var x=100; i<=200;i++) {
	console.log('testing'+1);

	if (x%7===0) {

	}
} */
var rainbowColor = ['yellow', 'orange','red','green', 'blue', 'indigo', 'violet'];
for (var y=0; y<rainbowColor.length; y++){
	console.log(rainbowColor[y]);
}
var user={
	hometown: 'Uzbekistan, Fergana', 
	hair: 'Black', 
	Hobbies: ['swimming', 'riding'],
	birthday; [month:8, day:24];
};
console.log(user);
let str="salom men Toxirjon";
str.lastIndexOf("men");

let x="100";
let y="10";
let z=x/y;
console.log(z);