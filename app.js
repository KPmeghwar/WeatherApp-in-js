var button=document.querySelector('.button');
var inputValue=document.querySelector('.inputValue');
var name=document.querySelector('.name');
var icon=document.querySelector('.icon');
var desc=document.querySelector('.desc');
var temp=document.querySelector('.temp') ;

button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=4bc493a4ad7c9fdb6505420438a27872')
.then(response=>response.json())
.then(data=>{
	var nameValue=data['name'];
	var iconValue=data['icon']
	var tempValue=data['main']['temp']; 
	var descValue=data['weather'][0]['description'];
	name.innerHTML=nameValue;
	icon.src="http://openweathermap.org/img/wn/"+iconValue+"@2x.png";
	temp.innerHTML=tempValue;
	desc.innerHTML=descValue;
})
.catch(err=>alert("Wrong city!"))
})