//variable declaration
	var maxValue = 10,
		minValue = 1,
		seperator = ',',
		outcome = 1;
		
	const keys = {
		upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		lowerCase: "abcdefghijklmnopqrstuvwxyz",
		number: "0123456789",
		symbol: "@#$%^&*()_+~|}{[]></-="
	}
	
	const getKey = [
		function upperCase() {
			return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
		},
		function lowerCase() {
			return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
		},
		function number() {
			return keys.number[Math.floor(Math.random() * keys.number.length)];
		},
		function symbol() {
			return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
		}
	];
	
//create a new random password
	function createPassword() {
		const upper = document.getElementById("upperCase").checked;
		const lower = document.getElementById("lowerCase").checked;
		const number = document.getElementById("number").checked;
		const symbol = document.getElementById("symbol").checked;
		if (upper + lower + number + symbol === 0) {
			alert("Please check atleast one box!");
			return;
		}
		const passwordBox = document.getElementById("passwordBox");
		const length = document.getElementById("length");
		var password = "";
		while (passwordLength.value > password.length) {
			var keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
			var isChecked = document.getElementById(keyToAdd.name).checked;
			if (isChecked) {
				password += keyToAdd();
			}
		}
		passwordBox.innerHTML = password;
	}
	
//copy the password function block
	function copyPassword() {
		const textarea = document.createElement('textarea');
		const password = document.getElementById("passwordBox").innerText;
		if (!password) { return; }
		textarea.value = password;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand('copy');
		textarea.remove();
		alert('Password copied to clipboard');
	}
	
//function to generate numbers
	function randomNumber() {
		randomN = '';
		getValue();
		function num() {
			range = maxValue - minValue;
			return minValue + Math.round(Math.random() * range);
		}
		
		for(var i = 0; i < outcome; i++) {
			randomN += num() + ' ' + seperator + ' ';
		}
		resultNumber.innerHTML = randomN;
	}
	
//get inputed min and max value
	function getValue() {
		minValue = parseInt(valueMin.value);
		maxValue = parseInt(valueMax.value);
	}
	
//hide an element
	function hide(id1, id2) {
	    document.querySelector(id1).style.display = "none";
		document.querySelector(id2).style.backgroundColor = "#fcc";
		document.querySelector(id2).style.color = "#000";
	}
	
//show an element
	function show(id1, id2) {
	    document.querySelector(id1).style.display = "block";
		document.querySelector(id2).style.backgroundColor = "#624";
		document.querySelector(id2).style.color = "#fff";
	}
	
//open tab1 function block
	function openTab1() {
		show("#tab1", "#btn1");
		hide("#tab2", "#btn2");
	}
	
//open tab2 function block
	function openTab2() {
		show("#tab2", "#btn2");
		hide("#tab1", "#btn1");
	}
	
	openTab1();