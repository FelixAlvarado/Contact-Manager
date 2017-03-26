//search delete button

$('#searchDelete').on('click',function(e) {
  e.preventDefault();
  var nameDelete = document.getElementById('nameDelete').value;
var info = localStorage.getItem(nameDelete);
var contactInfo = JSON.parse(info);
if (contactInfo == null) {
$('#errorDelete').modal('show');
}else{
  $('#confirmDelete').modal('show');
  var holder = "";
  holder+= "<p>Name: " + contactInfo[0] + "</p><p>  Number:" + contactInfo[1] + "</p><p>  Email Address:" + contactInfo[2] +"</p>";
  document.getElementById('deleteResult').innerHTML = holder;
var nameErase = contactInfo[0];
var deleteString = JSON.stringify(nameErase);
sessionStorage.setItem('deleteItem',deleteString)
}
});
// deleting information
$('#deleteContact').on('click', function(e){
e.preventDefault();
var nameString = sessionStorage.getItem('deleteItem');
var name = JSON.parse(nameString);
localStorage.removeItem(name);
$('#deleteHappen').modal('show');
});
//close delete confirm
$('#closeDeleteConfirm').on('click', function(e){
e.preventDefault();
$('#confirmDelete').modal('hide');
});
//close delete happen
$('#deleteHappenedPress').on('click', function(e){
e.preventDefault();
$('#deleteHappen').modal('hide');
});

//close error delete
$('#closeErrorDelete').on('click', function(e){
e.preventDefault();
$('#errorDelete').modal('hide');
});
