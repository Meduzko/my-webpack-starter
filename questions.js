var arr = [3, 4, 5]; 

	for (var i in arr){ 
	  console.log(i); 
	} 


	var logger = {
		
		x: 0,
		text: ["0"].textContent,
		getCounter: function() {

			this.x++;
			console.log(this.x);
			
		},
		showModal: function() {
			alert("Clicked");
		}

	}
	var redElems = document.querySelectorAll('.classes');

	Array.prototype.forEach.call(redElems, function(el){
	    el.addEventListener('click', logger.showModal.bind(logger), false);
	});



	var unboundForEach = Array.prototype.forEach,
	    forEach = Function.prototype.call.bind(unboundForEach);

	forEach(document.querySelectorAll('.klasses'), function (el) {
	    el.addEventListener('click', someFunction);
	});

	//let button = document.querySelectorAll(".active");

	//button[0].addEventListener("click", logger.getCounter.bind(logger), false);
	

	var someData = {
		name: "Ivan",
	}


	var data = {
		name: "Vasya",

		getName: function() {
			var name = "Sasha";
			//return this.name;	
			console.log(this.name);		
		}
	}

	var getNameN = data.getName;

	//console.log(getNameN());
	//console.log();
	//data.getName("Sasha");


	function test1() {
		var self = this;
		var a = 5;
		var b = this.a;
		console.log(b);
		console.log(this);
	}

	//let button = document.querySelectorAll(".active");

	//button[0].addEventListener("click", data.getName.bind(petya), false);
	

		function add (a, b) {
			console.log("function add was enabled!");
			return a + b;

		}

		function add2 (fn, c) {
			return add(10, 10) + c;
		}

		console.log(add2(add, 100));
		//var result = add2.bind(null, 5);
		//console.log(result());

		//console.log(add2(11));

		//var add2 = add(10)(5);
		//var fres = add.bind(null,6);
		//console.log(fres(add)(5));
		




		var numbers = [5,11,25,40,3,150,30,151,50,0];
		var max = Math.max.apply(null, numbers);
		console.log(max);

		/*
		var max = 0;

		for (var i =0;i <= numbers.length; i++) {
			if (numbers[i] > max ) {
				max = numbers[i]
			}

		}
		console.log(max);
		*/
		(function(){ })();


			function foo() {
				this.bar = "baz";
				return this;
			}


		console.log(foo());


		function abs(n) {
			var i,
				prod = 1;
			for (i=2; i<=n; i++) {
				console.log(prod *= i);
			}

		}


		//abs(5);

		function debug(msg) {
			var log = document.getElementById("debugElem");

			if (!log) {
				log = document.createElement("div"); // Create a new <div> element
 				log.id = "debuglog";
 				log.innerHTML = "<h1>Debug Log</h1>"; // Define initial content
 				document.body.appendChild(log); // Add it at end of document

			}
			var pre = document.createElement("pre");
			var text = document.createTextNode(msg); // Wrap msg in a text node
 			pre.appendChild(text); // Add text to the <pre>
			log.appendChild(pre); // Add <pre> to the log
		}
		//debug("asd");   


(function(){


 })();


	function hide(e, reflow) { // Hide the element e by scripting its style
	 if (reflow) { // If 2nd argument is true
	 	e.style.display = "none" // hide element and use its space
	 }
	 else { // Otherwise
	 	e.style.visibility = "hidden"; // make e invisible, but leave its space
	 }
	}


