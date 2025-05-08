//your JS code here. If required.
let sample=document.getElementById("counter")
count=0
let  incBtn=document.getElementById("incrementBtn")

function functionOnClick(){
	alert(count)
	count++
	sample.innerHTML=count
}
