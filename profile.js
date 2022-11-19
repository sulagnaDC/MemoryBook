function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

window.addEventListener("load",function(event) {
  getProfileDetails();
},false);

let fn = getParameterByName("id");
console.log(fn);



function getProfileDetails(){
$.ajax({  
    type: "GET",
    url: "http://localhost:8081/slam/user/"+fn,
      cors: true ,
      contentType:'application/json; http://localhost:8081/ ',
      crossorigin: true,
    crossDomain: true,
      secure: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    success: function(data) {
      console.log(data);
      document.querySelector("#nmP").innerHTML=data.name;
      document.querySelector("#cnP").innerHTML=data.contactno;
      document.querySelector("#emailP").innerHTML=data.email;
      document.querySelector("#numP").innerHTML=data.contactno;
      // const i=document.querySelector("#imgP");
      // i.src=data.image;
      //$("#imgP").attr("src",data.image);
      document.getElementById('imgP').src=data.profileImage;
      //localStorage.setItem("userprofile",JSON.stringify(data));
    },
    error: function(data) { 
          alert("Status: " + data.status); 
    } 
  });
}