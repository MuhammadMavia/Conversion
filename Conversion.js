
var tmp = ["Kelvin","Fahrenheit","Celsius","Select"];
var ans = document.getElementById('ans');
var askTmp = document.getElementById('askTmp');
var tmpOne = document.getElementById('tmpOne');
var tmpTwo = document.getElementById('tmpTwo');
var s1 = document.getElementById('s1');
var c1 = document.getElementById('c1');
var s2 = document.getElementById('s2');
var c2 = document.getElementById('c2');

function $1(){
    s1.innerHTML = "Conversion Type : "+tmpOne.value;
    c1.innerHTML=tmpOne.value;
    askTmp.setAttribute("placeholder",tmpOne.value)
}
function $2(){
    s2.innerHTML = " <i>to</i> "+ tmpTwo.value;
    c2.innerHTML=tmpTwo.value;
}
function toConvert(){
    var T = askTmp.value;
    var $tmp = tmpOne.value;
    var $tmp2 = tmpTwo.value;

    if($tmp == tmp[3] || $tmp2 == tmp[3] || T == ""){
        alert("Please Select Any Two UnitS And Fill Input Box!"
        )
    }

//        Kelvin to Fahrenheit
    else if($tmp == tmp[0] && $tmp2 == tmp[1]){
        ans.innerHTML =T +" K = "+ (T * 9/5 - 459.67) + " &#176 F";

    }

//        Kelvin to Celsius
    else if($tmp == tmp[0] && $tmp2 == tmp[2]){
        ans.innerHTML =T +" K = "+ (T - 273.15 )+ " &#176 C";
    }

//        Fahrenheit to Kelvin
    else if($tmp == tmp[1] && $tmp2 == tmp[0]){
        ans.innerHTML =T +" &#176 F = "+ ( (+T + 459.67)*5/9 )+ " K";
    }

//        Fahrenheit to Celsius
    else if($tmp == tmp[1] && $tmp2 == tmp[2]){
        ans.innerHTML =T +" &#176 F = "+ ((T - 32) * 5/9) + " &#176 C";
    }

//        Celsius to Kelvin
    else if($tmp == tmp[2] && $tmp2 == tmp[0]){
        ans.innerHTML =T +" &#176 C = "+ ((+T + 273.15)) + " K";
    }

//        Celsius to Fahrenheit
    else if($tmp == tmp[2] && $tmp2 == tmp[1]){
        ans.innerHTML =T +" &#176 C = "+ (T * 9/5 + 32) + " &#176 F";
    }
    else{
        ans.innerHTML ="Error !"
    }
}