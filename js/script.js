


function submited(){
   var input =document.getElementById('inp').value;
 
   if(input){
   
    let audio = new Audio("./audio/audio2.mp3");
    audio.play();
    var form = document.getElementById('form');
    form.style.display = 'none';
    form.style.transition = 'all 0.5 ease';
    var input =document.getElementById('inp').value;
    var body = document.getElementById('body');
    body.style.backgroundImage = 'url(./img/writ.jpg)';
   var next = document.getElementById('ndes');
    next.innerHTML= ' hello'+ input+ 'vish your merry christmas '
var fd =document.getElementById('fdiv');
var lll =document.getElementById('iii');
var lll2 =document.getElementById('iii2');
var colo = document.getElementById('color');

fd.style.transition ='all 1s ease'
fd.style.display = 'block'
fd.style.backgroundImage =' url(./img/hello.jfif);'
colo.style.display ='block'
lll.style.display = 'block'
lll2.style.display = 'block'
// lll2.style.marginTop ='-80px'
    // body.style.backgroundSize = '90%'
    var inp = document.getElementById('h2');
    var demo = document.getElementById('demo');
    demo.innerHTML ='VISH YOUR MERRY CHRISTMAS'+ "<br> " + '"' + " " +  input + " " + '"' ;
    var mq =document.getElementById('mq');
    mq.style.display ='block';
    document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    demo.style.display ='block';
    // alert('vish your merry christmas '+ '"' + input + '"' + "imeth is Vished you 😁🎄🎅");
    var dem = document.getElementById('demo2');
    dem.style.display = 'block';
    inp.print(input);
  
    }    else{
    
        var txt =document.getElementById('txt');
        txt.innerHTML = '<h3 style="color:red; font-family:sans-serif;">Please Enter your name</h3>'  
    
    }
}
function goBack(){
    var back = document.getElementById('gback');
    window.history.back()
}
function bulb(x) {
    var colo = document.getElementById('color');
    x.classList.target(colo.style.backgroundColor = 'yellow');
    colo.style.transition ='all 1s ease'
}
function bulb2() {
    var colo = document.getElementById('color');
    colo.style.backgroundColor = 'white'
    colo.style.border = '3px black solid'
}
function nee(){
var fd =document.getElementById('fdiv');
var ss = document.getElementById('mybtn');
ss.style.display = 'none'
ss.style.transition = 'all 1s ease'
    fd.style.width = '0'
    
}
if(window.close()){
    alert ('are you leave this site')
}