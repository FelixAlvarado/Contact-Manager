
//Search button on home page
$('#searchInfo').on('click',function(e) {
  e.preventDefault();
  $('#showSearched').modal('show');
  var nameInput = document.getElementById('nameInput').value;
var info = localStorage.getItem(nameInput);
var contactInfo = JSON.parse(info);
if (contactInfo == null) {
   var holder = "<p>That is not an existing contact</p>";
  document.getElementById('searchResult').innerHTML = holder;
}else{
var holder = "";
holder+= "<p>Name: " + contactInfo[0] + "</p><p>  Number:" + contactInfo[1] + "</p><p>  Email Address:" + contactInfo[2] +"</p>";
document.getElementById('searchResult').innerHTML = holder;
}
});

//closes search modal
$('#closeSearch').on('click',function(e) {
e.preventDefault();
$('#showSearched').modal('hide');
});


//makes table on home page
function makeHomeTable(){
  var holder = "";
  var table =  document.getElementById('homeTable');
  for (i=0; i < localStorage.length ; i++){
  var itemString = localStorage.getItem(localStorage.key(i));
  var item = JSON.parse(itemString);
  holder+="<tr>";
  holder+="<td>"+item[0]+"</td>";
  holder+="<td>"+item[1]+"</td>";
  holder+="<td>"+item[2]+"</td>";
  holder+="</tr>";
  }

  table.innerHTML=holder;
}

//tables made on reload
makeHomeTable();
