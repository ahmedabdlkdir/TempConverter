var fValue = document.getElementById('finput');
var cValue = document.getElementById('cinput');
var kValue = document.getElementById('kinput');
var btnConvert = document.getElementById("convert")

function clearValues(){
    fValue.value = "";
    cValue.value = "";
    kValue.value = "";
}


// Convert Fahrenheit to Celcius 
function fahToCelkelvin(){
        
        cValue.value = Number((fValue.value - 32) / 1.8);

         kValue.value = ((Number(fValue.value) + 459.67) / 1.8);
      
        if(cValue.value % 1 != 0){
         cValue.value = ((fValue.value - 32) / 1.8).toFixed(2);
        }
        if(kValue.value % 1 != 0){
                kValue.value = ((Number(fValue.value) + 459.67) / 1.8).toFixed(2);
        }

         if(fValue.value == "" | fValue.value == "-"){
                 cValue.value = "";
                 kValue.value = "";
         }
 
}


// convert Celcius to Fahrenheit
function celToFahkelvin(){
        fValue.value = Number(32 + (cValue.value * 1.8));
        
        kValue.value = Number(cValue.value) + 273.15;

        if(fValue.value % 1 != 0){
                fValue.value = Number(32 + (cValue.value * 1.8)).toFixed(2);
        }
        if(cValue.value == "" | cValue.value == "-"){
                fValue.value = "";
                kValue.value = "";
        }
}
function kelvintofahtocel(){
        fValue.value = ((Number(kValue.value) - 273.15) * 1.8 )+ 32;
        cValue.value = Number(kValue.value) - 273.15;

        if(fValue.value % 1 != 0){
                fValue.value = (((Number(kValue.value) - 273.15) * 1.8 )+ 32).toFixed(2);
        }
        if(cValue.value % 1 != 0){
                cValue.value = (Number(kValue.value) - 273.15).toFixed(2);
        }
        if(kValue.value == "" | kValue.value == "-") {
                fValue.value = "";
                cValue.value = "";
        }

        
}
function convertValues(){      
        fValue.addEventListener("input", fahToCelkelvin);
        cValue.addEventListener("input", celToFahkelvin);
        kValue.addEventListener("input", kelvintofahtocel);
}
convertValues();

