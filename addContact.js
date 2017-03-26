//close button for confirm screen
$('#closeConfirm').on('click', function(e){
e.preventDefault();
$('#confirmMessage').modal('hide');
});

//close button for error message
$('#closeError').on('click', function(e){
e.preventDefault();
$('#errorMessage').modal('hide');
});

//add contact button
$('#addContact').on('click', function(e){
e.preventDefault();
var nameInput = document.getElementById('nameSave').value;
var numberInput = document.getElementById('numberSave').value;
var emailInput = document.getElementById('emailSave').value;
var numberFormat = /\d{3}-\d{3}-\d{4}/;
  var emailFormat = /\S@\S/;
  if (nameInput.length>0  && emailFormat.test(emailInput) && numberFormat.test(numberInput)){
var contactInfo = [nameInput,numberInput,emailInput];
var contactString = JSON.stringify(contactInfo);
localStorage.setItem(nameInput,contactString);
  $('#confirmMessage').modal('show');

  }else{
  $('#errorMessage').modal('show');

  }


});
