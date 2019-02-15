function getfile(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("Application/json");
	xhr.open('GET',file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	}
	xhr.send(null);
}

getfile("dynamic.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	education(data.education);
	languages(data.languages);
})
var left=document.querySelector(".left");
function profile(e){
	var img=document.createElement("img");
	img.src=e.img;
	left.appendChild(img);
	var h2=document.createElement("h1");
	h2.textContent=e.name;
	left.appendChild(h2);
	var h21=document.createElement("h3");
	h21.textContent=e.roll;
	left.appendChild(h21);
	var h22=document.createElement("h3");
	h22.textContent=e.place;
	left.appendChild(h22);
	var h23=document.createElement("h3");
	h23.textContent=e.designation;
	left.appendChild(h23);

}
var right=document.querySelector(".right");
function career(e){
	var h1=document.createElement("h1");
	h1.innerHTML="RESUME BUILDING";
	right.appendChild(h1);
	var h11=document.createElement("h2");
	h11.textContent="Career Objective";
	right.appendChild(h11);
	var p=document.createElement("p");
	p.textContent=e.info;
	right.appendChild(p);
	var hr=document.createElement("hr");
	right.appendChild(hr);

}

function education(e){
	var h2=document.createElement("h2");
	h2.innerHTML="Education Details";
	right.appendChild(h2);
	
	var table=document.createElement("table");
	table.border="1";
	var tr1="<tr><th>S No</th><th>Degree</th><th>Institution</th><th>Per</th><th>YOP</th></tr>";
	var tr2="";
	for(i=0;i<e.length;i++)
	{
		tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institution+"</td><td>"+e[i].per+"</td><td>"+e[i].yop+"</td></tr>";
	}
	table.innerHTML=tr1+tr2;
	right.appendChild(table);
	var ww=document.createElement("hr");
	right.appendChild(ww);
}

function languages(e){
	var h3=document.createElement("h2");
	h3.innerHTML="Languages Known";
	right.append(h3);
	var ul=document.createElement("ul");
	right.append(ul);
	for(i=0;i<e.length;i++)
	{
		var li=document.createElement("li");
		li.textContent=e[i].lang;
		ul.append(li);
	}

}