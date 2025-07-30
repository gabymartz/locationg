function printFormValues(event) {
  event.preventDefault(); 

  var name = document.getElementById('firstName').value;
  var lastname = document.getElementById('lastname').value;
  var age = document.getElementById('age').value;

  var numericAge = parseInt(age);
  var currentYear = new Date().getFullYear();
  var birthYear = currentYear - numericAge;

  var message = "My name is " + name + " " + lastname +
                ", and my age is " + numericAge +
                " and my birthyear is: " + birthYear;

  alert(message);
}

function clearForm() {
  document.getElementById('firstName').value = "";
  document.getElementById('lastname').value = "";
  document.getElementById('age').value = "";
}
