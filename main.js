// function loadjson(file,callback) {
// var xhr = new XMLHttpRequest();
// xhr.overrideMimeType("application/json");
// xhr.open("GET",file,true);
// xhr.onreadystatechange=function(){
//  		if(xhr.readyState === 4 && xhr.status == "200"){
//  			callback(xhr.responseText);
//  		}
//  	};
//  	xhr.send(null);
//  }

//  loadjson("data.json",function(text){
//  	var data = JSON.parse(text); // serialised data
//  	console.log(data);
// 	 basic(data.details);
// 	 careerinfo(data.careerobjective);
// 	 education(data.eduactionalqualification);
// 	 skills(data.techinicalskills);
//  }


// function loadjson(file){
// 	return new Promise((resolve,reject)=>{
// 		returnfetch(file).then(response=>{
// 			if(response.ok){
// 				resolve(response.json());			
// 			}
// 			else{
// 				reject(new Error('error'));
// 			}
// 		})
// 	})
// }



function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());

			}
			else{
				reject(new Error('error'));
			}
		})
	})
}


var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
	basic2(data.details1);

	

})










var child1 = document.querySelector(".child1");
function basic(det){

	var image = document.createElement("img");
	image.src="download.jpg";
	child1.appendChild(image);

	var name = document.createElement("h4");
	name.textContent=det.name;
	child1.appendChild(name);

	var email = document.createElement("a");
	
	email.textContent=det.email;
	child1.appendChild(email);

	var number = document.createElement("h4");
	number.textContent=det.number;
	child1.appendChild(number);

	
     


}
var child3 = document.querySelector(".child3");
function basic2(info){

	var image = document.createElement("img");
	image.src="download.jpg";
	child3.appendChild(image);

	var name = document.createElement("h4");
	name.textContent=info.name;
	child3.appendChild(name);

	var email = document.createElement("a");
	
	email.textContent=info.email;
	child3.appendChild(email);

	var number = document.createElement("h4");
	number.textContent=info.number;
	child3.appendChild(number);

	

}

