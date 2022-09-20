// if/else validations first
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password confirmation");

// Show input error message
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = "form-control error";
	const small = formControl.querySelector("small");
	small.innerText = message;
}

// Show success outline
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

// Check email is valid
function checkEmail(input) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, "Email is not valid or incomplete");
	}
}

// Check required fields
function checkRequired(inputArr) {
	inputArr.forEach(function (input) {
		if (input.value.trim() === "") {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
}

// Check input length
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(input, `${getFieldName(input)} must be at least ${min} characters`);
	} else if (input.value.length > max) {
		showError(input, `${getFieldName(input)} must be less than ${max} characters`);
	} else {
		showSuccess(input);
	}
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, "Passwords do not match");
	}
}

// Get field name and capitalize only the first letter
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Refactored validations
form.addEventListener("submit", function (e) {
	e.preventDefault();

	checkRequired([username, email, password, password2]);
	checkLength(username, 4, 15);
	checkLength(password, 6, 25);
	checkEmail(email);
	checkPasswordsMatch(password, password2);
	// document.getElementById("form").reset();
});

function swRegistration() {
	const heart = ["font-size: 20px", "padding: 12px", "margin: 4px 0 4px 4px", "color: rgba(238,58,136,1)"].join(";");
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("/form-validation/sw.js", {
				scope: "/form-validation/",
			})
			.then(function (registration) {
				console.log("%c❤️", heart);
			})
			.catch(function (err) {
				console.log(err);
			});
	}
}

function consoleText() {
	console.clear();
	const styles = [
		"color: white",
		"background: rgba(238,58,136,1)",
		"font-size: 18px",
		"padding: 12px",
		"margin: 6px 0 6px 14px",
	].join(";");
	const styles2 = ["font-size: 14px", "padding: 16px", "margin: 6px 0 6px 0", "color: rgba(238,58,136,1)"].join(";");
	console.log("%cHello World! I'm Emmanuel.", styles);
	console.log("%cThank you for checking out my work!", styles2);
	const gradient = [
		"font-size: 14px",
		"color: #fff",
		"width: 200px",
		"padding: 8px",
		"margin: 6px 0 6px 14px",
		"border-radius: 4px",
		"background: rgba(238,58,136,1)",
		"background: linear-gradient( 109.6deg, rgba(238,58,136,1) 11.2%, rgba(128,162,245,1) 91.1% )",
	].join(";");
	console.log("%cPortfolio%chttps://bit.ly/3QQr1Ux", gradient, styles2);
	console.log("%cLinkedin %chttps://bit.ly/3cygAD4", gradient, styles2);
	console.log("%cGithub   %chttps://bit.ly/3iwQC6U", gradient, styles2);
	console.log("%cThe README   %chttps://bit.ly/3DC81p9", gradient, styles2);
	console.log("%cHave a wonderful day!", styles2);
}

swRegistration();
consoleText();

// old Event Listeners/validations
// form.addEventListener('submit', function(e) {
//     e.preventDefault();

// if(username.value === '') {
//     showError(username, 'Username is required');
// } else {
//     showSuccess(username);
// }

// if(email.value === '') {
//     showError(email, 'Email is required');
// } else if(!isValidEmail(email.value)) {
//     showError(email, 'Email is not valid');
// } else {
//     showSuccess(email);
// }

// if(password.value === '') {
//     showError(password, 'Password is required');
// } else {
//     showSuccess(password);
// }

// if(password2.value === '') {
//     showError(password2, 'Password 2 is required');
// } else {
//     showSuccess(password2);
// }

// });
