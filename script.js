var button= document.getElementById('btn');
var num=document.getElementById('n.o');


button.addEventListener('click',function(max,min) {
  var random = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
  num.innerText='your luckey number is'+" "+ random +" ";
})
button.addEventListener('click',  function disableButton() {
        var btn = document.getElementById('btn');
        btn.disabled = true;
        
    })
var input=document.getElementById('check');
var subbtn=document.getElementById('sumbit');
var images=document.getElementById('winner-image')
subbtn.addEventListener('click',function winner(){
if(input.value==22||input.value==12||input.value==15){

	var win1=document.getElementById('win');
	var win2="you win"
	win1.innerText=win2;
	image.src=aa.jpg;
	
	



}else{
var loss1=document.getElementById('loss');
	var loss2="you loss"
	loss1.innerText=loss2;
image.src=none;

}





})
