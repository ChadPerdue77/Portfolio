//1
for (var i = 0; i < 101; i+=10){
	if (i === 60) {
			console.log("sixty");
		} else {
			console.log(i);
		}
}

//2
var friends = ["Bailey", "Bree", "Jacob", "Sam"];

for (var i = 0; i < friends.length; i++) {
	console.log(friends[i]);
}

//3
function areafun(l, w) {
	console.log(l*w);
}
areafun(2, 6);

//4
for (var i = 1; i < 51; i++){
	if (i%2===0 && i%3===0) {
		console.log("MizzMuzz");
	} else if (i%2===0) {
		console.log("Mizz");
	} else if (i%3===0) {
		console.log("Muzz");
	} else {
	console.log(i);
	}
}

// 5
var languages = ["HTML", "CSS", "JavaScript", "Bootstrap", "Python"];
console.log(languages[2]);

// 6
var car1speed = 100;
var car2speed =200;

if(car1speed > car2speed){
	console.log("L8r nerd!");
} else if (car1speed < car2speed){
	console.log("You cheated bro!");
}

// 7
var animal = {
	//properties
	name		: "dog",
	age			:12, 
}
