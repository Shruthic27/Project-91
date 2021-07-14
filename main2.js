var N1=""
var N2=""
function send(){
  N1=document.getElementById("n1").value
  N2=document.getElementById("n2").value
  var aa=parseInt("n1") * parseInt("n2")
  localStorage.setItem("mp",document.getElementById("n1").value)
  localStorage.setItem("mp",document.getElementById("n2").value)
  p1n=localStorage.getItem("p1n")
  p2n=localStorage.getItem("p2n")
  p1s=localStorage.getItem("p1n")
  p2s=localStorage.getItem("p2n")
  document.getElementById("q").innerHTML=aa
  }
