function salario(){

var nombre = document.getElementById("nombre").value;
var salario = Number(document.getElementById("cabecera3").value);
var horas = Number(document.getElementById("cabecer2").value);
var liquidacion; 

if(nombre==""){
    alert("ingresa un nombre valido")

}else{
    liquidacion = salario + 250 + (horas * 17);
       alert( "su salario es "+  liquidacion)
}
}