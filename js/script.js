document.getElementById("botaoEnviar").addEventListener("click",validaFormulario )

function validaFormulario (){
  if(document.getElementById("nome").value !=""&& document.getElementById ("email").value!= ""&& documetnt.getElementBYId("telefone").value!=""){alert("Prontinho! Você receberá as novidades por email.")
  }else{
  alert("Por favor, preencha os campos nome e email!")
  }

 }

 if(document.getElementById("nome").value != "" && document.getElementById("email").value != ""){
 Prontinho! Você receberá as novidades por email.
 }else{
  peça a usuária que preencha os campos nome e email
 }

