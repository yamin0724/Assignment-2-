var quotes = [
'"Who let the dogs out"',
'"Gotta catch em all"',
'"You are a wizard harry!"',
'"Shomosha na thakle teka de"',
'"I dont have a dream! "',



]
function newQuote(){
var randomNumber= Math.floor(Math.random()*(quotes.length));
document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
}
window.addEventListener('load', newQuote) ;

function changecolor(n){
    var backcolor=["#cc1f53", "#ff91b3" ,"#7fd5e7", "#002642" ];
    var fontsize=["20","30","50","60"];
    var fontfam=["Arial", "Comic Sans MS", "Times New Roman", "Segoe Script"];
    var backcolor1=["#7fd5e7", "#002642" ,"#cc1f53", "#ff91b3" ];

    document.getElementById("quoteDisplay").style.fontFamily=fontfam[n];
    document.getElementById("quoteDisplay").style.fontsize=fontsize[n];
    document.getElementById("quoteDisplay").style.background=backcolor[n];
    document.getElementById("quoteDisplay").style.borderColor=backcolor1[n];
    

}

function convert(){
    var val = document.getElementById("inp").value;
    var result = 0;

    if(document.getElementById("seltyp").selectedIndex=="0"){
        result=val/2.205+" Kg";

    }
    else{
        result=val*2.205+" lb";

    }
    document.getElementById("result").innerHTML=result;
    

}

function math(){
    var val = document.getElementById("num").value;
    var valarr=val.split(",");
    var min=99999;
    var max=0;
    var sum=0;
    var avg=0;




    for(var i=0; i < valarr.length; i++){
        if(parseInt(valarr[i],10)<min){
            min=valarr[i];

        }
         if(parseInt(valarr[i],10)>max){
            max=valarr[i];

        }
        sum=sum+ parseInt(valarr[i],10);

    }
    avg=sum/valarr.length;
    document.getElementById("min").innerHTML=min;
    document.getElementById("max").innerHTML=max;
    document.getElementById("sum").innerHTML=sum;
    document.getElementById("avg").innerHTML=avg;
    document.getElementById("revrs").innerHTML=valarr.reverse();

}
setInterval(math,100)


function clearall(){
    document.getElementById("input1x").value="";

}
function capt(){
    document.getElementById("input1x").value=document.getElementById("input1x").value.toUpperCase();

}

   function rev1(){
    document.getElementById('input1x').value =  document.getElementById('input1x').value.split('\n').map(function(line) {
		return line.split(" ").reverse().join(" ");
	}).join('\n');
    
}
function num(){
    var val=document.getElementById("input1x").value;
    var valarr=val.split("\n");
    var j=1;


    for(var i=0; i < valarr.length; i++){
        valarr[i]=j+'. '+valarr[i];
        
        j++;
        
    }
    
    document.getElementById("input1x").value= valarr.join("\n");
  
}

function strip(){
    document.getElementById("input1x").value= document.getElementById("input1x").value.replace(" ", "");
}

function sortstuff(){
    var val=document.getElementById("input1x").value;
    var valu=val.split("\n");
    var x=valu.sort().join("\n");
    document.getElementById("input1x").value=x;

}

function randomline(){
    var val=document.getElementById("input1x").value;
    var valu=val.split("\n");
    var j =  Math.floor(Math.random()*(valu.length-1));
for(var i=valu.length-1;i>=0;i--){
[valu[i],valu[j]]=[valu[j],valu[i]];
}
var x=valu.join("\n");
document.getElementById("input1x").value=x;
}

function whitespace(){
    var val=document.getElementById("input1x").value;
    var valu=val.split("\n");
    for (var i=0;i < valu.length;i++){
        valu[i]=valu[i].trim();

    }
   var x=valu.join("\n");
   var y=x.split(" ").join("");
   document.getElementById("input1x").value=y;

}





