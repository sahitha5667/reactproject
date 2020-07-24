function loadjson(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}
loadjson("data.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	basic(data.details);
})

var child1=document.querySelector(".child1");

function basic(det){

	var image1=document.createElement("img");
	image1.src=det.image;
	child1.appendChild(image1);

	var name=document.createElement("h4");
	name.textContent=det.name;
	child1.appendChild(name);

	var email=document.createElement("a");
	email.href="mailto:sahithajayam1@gmail.com";
	email.textContent=det.email;
	child1.appendChild(email);

	var number=document.createElement("h4");
	number.textContent=det.number;
	child1.appendChild(number);

	var address=document.createElement("h2");
	address.textContent=det.address;
	child1.appendChild(address);

	child1.appendChild(document.createElement("hr"));

	var address1=document.createElement("p");
	address1.textContent=det.address;
	child1.appendChild(address1);

	

}
