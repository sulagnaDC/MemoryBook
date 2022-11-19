let imagePath="";
$(".welcome").addClass("hide");
$(".loginfailed").addClass("hide");
$(".registerSuccessfull").addClass("hide");



$(function () {
  $(".btn-user").click(function () {
    $(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $(".frame").toggleClass("frame-long");
    $(".signup-inactive").toggleClass("signup-active");
    $(".signin-active").toggleClass("signin-inactive");
    $(".forgot").toggleClass("forgot-left");
    $(this).removeClass("idle").addClass("active");
  });
});
/*
$(function () {
  $(".btn-signup").click(function () {
    $(".nav").toggleClass("nav-up");
    $(".form-signup-left").toggleClass("form-signup-down");
    $(".success").toggleClass("success-left");
    $(".frame").toggleClass("frame-short");
  });
});

$(function () {
  $(".btn-signin").click(function () {
    $(".btn-animate").toggleClass("btn-animate-grow");
    $(".welcome").toggleClass("welcome-left");
    $(".cover-photo").toggleClass("cover-photo-down");
    $(".frame").toggleClass("frame-short");
    $(".profile-photo").toggleClass("profile-photo-down");
    $(".btn-goback").toggleClass("btn-goback-up");
    $(".forgot").toggleClass("forgot-fade");
  });
});
*/

function register(){
  var dataObject= {};
  dataObject["name"] = $("#fullname").val();
  dataObject["email"] = $("#email").val();
  dataObject["contactno"] = $("#contactno").val();
  dataObject["password"] = $("#password").val();
  dataObject["profileImage"] = imagePath;
  

  $.ajax({  
    type: "POST",
    url: "http://localhost:8081/slam/register",
    data: JSON.stringify(dataObject),
      cors: true ,
      contentType:'application/json; http://localhost:8081/ ',
      secure: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    success: function(data) {
      $(".registerSuccessfull").removeClass("hide");
    },
    error: function(data) { 
          alert("Status: " + data.status); 
    } 
  });
}


function login(){
  var dataObject= {};
  dataObject["contactno"] = $("#contactnologin").val();
  dataObject["password"] = $("#passwordlogin").val();
  let cn=$("#contactnologin").val();

  $.ajax({  
    type: "POST",
    url: "http://localhost:8081/slam/login",
    data: JSON.stringify(dataObject),
      cors: true ,
      contentType:'application/json; http://localhost:8081/ ',
      secure: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    success: function(data) {
      $(".welcome").removeClass("hide");
      window.location.href= "./profile.html?id="+cn;
    },
    error: function(data) { 
      $(".loginfailed").removeClass("hide");
    } 
  });
}

$("#profileImage").click(function(e) {
  $("#imageUpload").click();
});
function fasterPreview( uploader ) {
  if ( uploader.files && uploader.files[0] ){
      var reader = new FileReader();
      reader.readAsDataURL(uploader.files[0]);
      reader.onload = function (e) {
          $('#profileImage').attr('src', e.target.result);
          var formData = new FormData()
          for (const file of uploader.files) {
              formData.append("file", file);
          }
          fetch('http://localhost:8081/file/upload', 
           {
              method: 'POST',
              headers: {
                "Access-Control-Allow-Origin": "*"
              },
              body: formData
            }
          ).then(async(response) => {
            if(response.status==200)
            {
              const isJson = response.headers.get('content-type')?.includes('application/json');
              const data = isJson ? await response.json() : null;
              console.log(data)
              imagePath=data.path;
            }
            
          })
          .catch((error) => ("Something went wrong!", error));
      }
  }
}
$("#imageUpload").change(function(){
  fasterPreview( this );
});
