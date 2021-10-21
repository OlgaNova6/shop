let button = document.getElementById('burger');

let navigation = document.getElementById('menu');

button.addEventListener('click', function(){ 
  navigation.classList.toggle('header__menu_show');
});
