// var div = document.querySelector("#frame");
// var btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
// 	if (div.classList.contains("gb-red")) {
// 		div.classList.remove("gb-red");
// 		div.classList.add("gb-blue");
// 	} else {
// 		div.classList.remove("gb-blue");
// 		div.classList.add("gb-red");
// 	}
// });

// var isActive = true;
// 20 - 10 == 40 ? console.log("true") : console.log("false");

// function useState(value) {
// 	var intialState = value;
// 	var setState = (val1) => (initial = val1);
// 	return [intialState, setState];
// }

// const [value, setValue] = useState(true);

class Animal {
	// run
	// talk
	// eat
	// useless

	run() {
		console.log("runing");
	}
	talk() {
		console.log("talking");
	}
}

class Human extends Animal {
	cook() {
		console.log("cooking");
	}
}

class Goat {}
