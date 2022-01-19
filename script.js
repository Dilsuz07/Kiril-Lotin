var kiril=["ю","Ю","я","Я","ё","Ё","ш","Ш","ч","Ч","ў","Ў",
          "қ","Қ","ғ","Ғ","ц","Ц","й","Й","у","У","к","К",
    "е","Е","н","Н","г","Г","щ","Щ","з","З","х","Х",
    "э","Э","ж","Ж","д","Д","л","Л","о","О","р","Р",
    "п","П","а","А","в","В","ф","Ф","с","С","м","М",
    "и","И","т","Т","б","Б","қ","Қ","ҳ","Ҳ","ғ","Ғ","ь"];
     
//lotin harflari massivi    
var lot=["yu","Yu","ya","Ya","yo","Yo","sh","Sh","ch","Ch","o'","O'",
          "q","Q","g'","G'","ts","Ts","y","Y","u","U","k","K","e","E",
    "n","N","g","G","sh","Sh","z","Z","x","X","e","E","j","J",
    "d","D","l","L","o","O","r","R","p","P","a","A","v","V","f",
    "F","s","S","m","M","i","I","t","T","b","B","q","Q","h","H",
    "g'","G'","`"];
     
//kirildan lotinga o'tkazish funksiyasi  
var tugma_1 = document.querySelector('#btn-1')
var tugma_2 = document.querySelector('#btn-2')
var tugma_3 = document.querySelector('#btn-3')
function kirillot(){
var i;
var satr = document.getElementById("matn").value;
   for (i = 0; i < kiril.length; i++) {
 //xar bir harfni alohida almashtiramiz
   satr=satr.replaceAll(kiril[i],lot[i]);
}
   document.getElementById("matn").value = satr;  
}

//lotindan kirilga o'tkazish funksiyasi
function lotkiril(){
var satr = document.getElementById("matn").value;
   for (i = 0; i < kiril.length; i++) {
 //xar bir harfni alohida almashtiramiz
   satr=satr.replaceAll(lot[i],kiril[i]);
}
   document.getElementById("matn").value = satr;  
}

tugma_1.addEventListener('click',function(){
   tugma_1.style.color = '#ed61ca'
   tugma_1.style.background = '#fff'
})
tugma_1.addEventListener('mouseleave',function(){
   tugma_1.style.color = '#fff'
   tugma_1.style.background = '#ed61ca'

})
tugma_2.addEventListener('click',function(){
   tugma_2.style.color = '#ed61ca'
   tugma_2.style.background = '#fff'
})
tugma_2.addEventListener('mouseleave',function(){
   tugma_2.style.color = '#fff'
   tugma_2.style.background = '#ed61ca'

})
tugma_3.addEventListener('click',function(){
   tugma_3.style.color = '#ed61ca'
   tugma_3.style.background = '#fff'
})
tugma_3.addEventListener('mouseleave',function(){
   tugma_3.style.color = '#fff'
   tugma_3.style.background = '#ed61ca'

})

//Matn maydonini tozalash funksiyasi
function tozalash(){
document.getElementById("matn").value = "";  
}
