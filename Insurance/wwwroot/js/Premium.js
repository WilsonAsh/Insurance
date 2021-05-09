// Premium.js

var url = $('#formUrl').data('url');

$(document).ready(function () {
    $("#occupation").change(function () {
		if (checkForm()) {
			$.ajax({
				type: "POST",
				dataType: "text",
				url: url,
				data: {

					"suminsured": $("#suminsured").val(),
					"age": $("#age").val(),
					"occupation": $("#occupation :selected").val()
				},

				success: function (response) {
					document.getElementById("monthlypremium").textContent = "Monthly Premium: " + response;
				},

				error: function (xhr) {

					alert("Something went wrong, please try again");
				}

			});
		}
		else {
			resetResultsAndOccupation();
        }
	});
});


function nameValidate() {

	var nameInput = document.getElementById("name");

	if (nameInput.value == "") {
		document.getElementById("nameInputStatus").style.display = "block";
		nameInput.parentNode.className = "form-group has-error has-feedback";
		document.getElementById("nameIcon").className = "glyphicon glyphicon-remove form-control-feedback";
		resetResultsAndOccupation();
		return false;
	} else {
		document.getElementById("nameInputStatus").style.display = "none";
		nameInput.parentNode.className = "form-group has-success has-feedback";
		document.getElementById("nameIcon").className = "glyphicon glyphicon-ok form-control-feedback";
		return true;
	}
}

function dateOfBirthValidate() {

	var dateOfBirthInput = document.getElementById("dateofbirth");

	if (dateOfBirthInput.value == "") {
		document.getElementById("dateOfBirthInputStatus").style.display = "block";
		dateOfBirthInput.parentNode.className = "form-group has-error has-feedback";
		document.getElementById("dateOfBirthIcon").className = "glyphicon glyphicon-remove form-control-feedback";
		resetResultsAndOccupation();
		return false;
	} else {
		document.getElementById("dateOfBirthInputStatus").style.display = "none";
		dateOfBirthInput.parentNode.className = "form-group has-success has-feedback";
		document.getElementById("dateOfBirthIcon").className = "glyphicon glyphicon-ok form-control-feedback";
		calculateAge();
		return true;		
	}
}

function ageValidate() {

	var ageInput = document.getElementById("age");

	if (ageInput.value == 0) {
		document.getElementById("ageInputStatus").style.display = "block";
		ageInput.parentNode.className = "form-group has-error has-feedback";
		document.getElementById("ageIcon").className = "glyphicon glyphicon-remove form-control-feedback";
		resetResultsAndOccupation();
		return false;
	} else {
		document.getElementById("ageInputStatus").style.display = "none";
		ageInput.parentNode.className = "form-group has-success has-feedback";
		document.getElementById("ageIcon").className = "glyphicon glyphicon-ok form-control-feedback";
		return true;
	}
}

function insuranceAmountValidate() {

	var insuranceAmountInput = document.getElementById("suminsured");

	if (insuranceAmountInput.value == 0) {
		document.getElementById("suminsuredInputStatus").style.display = "block";
		insuranceAmountInput.parentNode.className = "form-group has-error has-feedback";
		document.getElementById("suminsuredIcon").className = "glyphicon glyphicon-remove form-control-feedback";
		resetResultsAndOccupation();
		return false;
	} else {
		document.getElementById("suminsuredInputStatus").style.display = "none";
		insuranceAmountInput.parentNode.className = "form-group has-success has-feedback";
		document.getElementById("suminsuredIcon").className = "glyphicon glyphicon-ok form-control-feedback";
		return true;
	}
}

function checkForm() {

	var valid = true;

	if (!nameValidate()) valid = false;
	if (!dateOfBirthValidate()) valid = false;
	if (!insuranceAmountValidate()) valid = false;
	if (!ageValidate()) valid = false;

	return valid;
}

function resetResultsAndOccupation() {
	document.getElementById("monthlypremium").textContent = "Please select all required fields";
	$('#occupation').prop('selectedIndex', 0);
}


function calculateAge() {

	var dateofBirth = document.getElementById("dateofbirth").value;
	var birthDate = new Date(dateofBirth);

	var difference = Date.now() - birthDate.getTime();
	var ageDate = new Date(difference);
	var calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

	document.getElementById("age").value = calculatedAge;
}
