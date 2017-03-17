var input = document.querySelector("#input");
var output=document.querySelector("#output");
var ul = document.getElementById('added')
var Reg = {};


function regNum(){
var add = document.getElementById('input').value;
var store = document.createElement('li');
store.textContent = add;
if (add.length > 0){
ul.appendChild(store);
document.getElementById('input').value = '';
}



}



function filtered(){
  var RegNumbers = ul.getElementsByTagName('li');
  var btnSelected = "";
  var elements = document.getElementsByName("town");
  for (var i = 1; i < elements.length; i++)
  {
      if (elements[i].checked)
      {
          btnSelected = elements[i].value;
          for(var i = 0; i < RegNumbers.length; i ++){

            if(RegNumbers[i].textContent.startsWith(btnSelected)){
              RegNumbers[i].style.display = 'block'}
              else {
                RegNumbers[i].style.display = 'none'
              }
            }
      }else if (elements[0].checked){
        RegNumbers[i].style.display='block';
      }
  }

    }
