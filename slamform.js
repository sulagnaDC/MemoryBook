function slamFill(){
    let file=document.getElementById('imgField').files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=function(){
        document.getElementById('imgT').src=reader.result;
    };

    document.getElementById('nameT').innerHTML=document.getElementById('form3Example1m').value;
    document.getElementById('addT').innerHTML=document.getElementById('form3Example8').value;
    document.getElementById('bdayT').innerHTML=document.getElementById('form3Example9').value;
    document.getElementById('emailT').innerHTML=document.getElementById('form3Example97').value;
    document.getElementById('meetT').innerHTML=document.getElementById('formFirstMetDate').value;
    document.getElementById('memT').innerHTML=document.getElementById('bestmem').value;

    document.getElementById('slamF').style.display='none';
    document.getElementById('slamT').style.display='block';
}

function createMemory(){
    var value=JSON.parse(localStorage.getItem("userprofile"));
    var dataObject={};
    dataObject['name']=document.getElementById('form3Example1m').value;
    dataObject['dob']=document.getElementById('form3Example9').value;
    dataObject['add']=document.getElementById('form3Example8').value;
    dataObject['email']=document.getElementById('form3Example97').value;
    dataObject['meet']=document.getElementById('formFirstMetDate').value;
    dataObject['mem']=document.getElementById('bestmem').value;
    dataObject['userid']=value.userid;
    dataObject['friendid']=7;
    $.ajax({  
        type: "POST",
        url: "http://localhost:8081/slam/form",
        data: JSON.stringify(dataObject),
          cors: true ,
          contentType:'application/json;',
          crossorigin: true,
        crossDomain: true,
          secure: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        success: function(data) {
          console.log(data);
        //   document.querySelector("#nmP").innerHTML=data.name;
        //   document.querySelector("#cnP").innerHTML=data.contactno;
        //   document.querySelector("#emailP").innerHTML=data.email;
        //   document.querySelector("#numP").innerHTML=data.contactno;
          slamFill();
        },
        error: function(data) { 
              alert("Status: " + data.status); 
        } 
      });
    }