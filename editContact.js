//search edit button
$('#searchEdit').on('click',function(e) {
  e.preventDefault();
  var nameEdit = document.getElementById('nameEdit').value;
var info = localStorage.getItem(nameEdit);
var contactInfo = JSON.parse(info);
if (contactInfo == null) {
$('#errorEdit').modal('show');
}else{
  $('#showEditSearch').modal('show');
  var holder = "";
  holder+= "<p>Name: " + contactInfo[0] + "</p><p>  Number:" + contactInfo[1] + "</p><p>  Email Address:" + contactInfo[2] +"</p>";
  document.getElementById('editResult').innerHTML = holder;

}
});
//edit contact button
$('#editContact').on('click', function(e){
  var nameInput = document.getElementById('nameEdit').value;
  var numberInput = document.getElementById('numberEdit').value;
  var emailInput = document.getElementById('emailEdit').value;
  var numberFormat = /\d{3}-\d{3}-\d{4}/;
    var emailFormat = /\S@\S/;
    if (nameInput.length>0  && emailFormat.test(emailInput) && numberFormat.test(numberInput)){
  var contactInfo = [nameInput,numberInput,emailInput];
  var contactString = JSON.stringify(contactInfo);
  localStorage.setItem(nameInput,contactString);
    $('#confirmEdit').modal('show');}
    else{
    $('#errorEditInput').modal('show');
}});

//close confirmation
$('#closeConfirmEdit').on('click', function(e){
e.preventDefault();
$('#confirmEdit').modal('hide');
});

//incorrect type of inputs
$('#erroEditInput').on('click', function(e){
e.preventDefault();
$('#wrongErrorEdit').modal('hide');
});

//close error modal
$('#closeErrorEdit').on('click', function(e){
e.preventDefault();
$('#errorEdit').modal('hide');
});
