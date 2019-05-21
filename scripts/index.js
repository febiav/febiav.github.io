$("#dogfoodOFF" ).click(function() {   
  document.getElementById('kitchenOFF').style.display= "none";
  document.getElementById('kitchenON2').style.display= "none";
  document.getElementById('kitchenON1').style.display= "block";      
});

$("#dogfoodON1" ).click(function() {   
  document.getElementById('kitchenON1').style.display= "none";
  document.getElementById('kitchenOFF').style.display= "none";  
  document.getElementById('kitchenON2').style.display= "block";

});


// BEDROOM

$("#lightswitchON" ).click(function() {   
  document.getElementById('bedroomOFF').style.display= "none";
  document.getElementById('bedroomON').style.display= "block";
});

$("#lightswitchOFF" ).click(function() {   
  document.getElementById('bedroomON').style.display= "none";
  document.getElementById('bedroomOFF').style.display= "block";
});


$(".bath" ).click(function() {   
  document.getElementById('bathroomOFF').style.display= "none";
  document.getElementById('bathroomON2').style.display= "none";  
  document.getElementById('bathroomON1').style.display= "block";
});

$(".puddle" ).click(function() {   
  document.getElementById('bathroomOFF').style.display= "none";
  document.getElementById('bathroomON1').style.display= "none";  
  document.getElementById('bathroomON2').style.display= "block";
});



$(".knob" ).click(function() {   
  document.getElementById('livingroomOFF').style.display= "none";
  document.getElementById('livingroomON2').style.display= "none";  
  document.getElementById('livingroomON1').style.display= "block";

});


$("#knobOFF" ).click(function() {   
  document.getElementById('livingroomOFF').style.display= "none";
  document.getElementById('livingroomON2').style.display= "none";  
  document.getElementById('livingroomON1').style.display= "block";
});

$("#knobON1" ).click(function() {   
  document.getElementById('livingroomOFF').style.display= "none";
  document.getElementById('livingroomON1').style.display= "none";  
  document.getElementById('livingroomON2').style.display= "block";
});

$("#knobON2" ).click(function() {   
  document.getElementById('livingroomOFF').style.display= "block";
  document.getElementById('livingroomON1').style.display= "none";  
  document.getElementById('livingroomON2').style.display= "none";
});

// NEXT & PREVIOUS BUTTONS

$("#next2" ).click(function() {   
  document.getElementById('housetxt').style.display= "none";
  document.getElementById('kitchentxt').style.display= "block";  
});

$("#previous3" ).click(function() {   
  document.getElementById('housetxt').style.display= "block";
  document.getElementById('kitchentxt').style.display= "none";  
});

$("#next3" ).click(function() {   
  document.getElementById('kitchentxt').style.display= "none";
  document.getElementById('bathroomtxt1').style.display= "block";  
});

$("#previous4" ).click(function() {   
  document.getElementById('kitchentxt').style.display= "block";
  document.getElementById('bathroomtxt1').style.display= "none";  
});

$("#next4" ).click(function() {   
  document.getElementById('bathroomtxt1').style.display= "none";
  document.getElementById('bathroomtxt2').style.display= "block";  
});

$("#previous5" ).click(function() {   
  document.getElementById('bathroomtxt1').style.display= "block";
  document.getElementById('bathroomtxt2').style.display= "none";  
});

$("#next5" ).click(function() {   
  document.getElementById('bathroomtxt2').style.display= "none";
  document.getElementById('livingroomtxt').style.display= "block";  
});

$("#previous6" ).click(function() {   
  document.getElementById('bathroomtxt2').style.display= "block";
  document.getElementById('livingroomtxt').style.display= "none";  
});

$("#next6" ).click(function() {   
  document.getElementById('livingroomtxt').style.display= "none";
  document.getElementById('bedroomtxt').style.display= "block";  
});

$("#previous7" ).click(function() {   
  document.getElementById('livingroomtxt').style.display= "block";
  document.getElementById('bedroomtxt').style.display= "none";  
});

$("#next7" ).click(function() {   
  document.getElementById('bedroomtxt').style.display= "none";
  document.getElementById('finaltxt').style.display= "block";  
});

$("#previous8" ).click(function() {   
  document.getElementById('bedroomtxt').style.display= "block";
  document.getElementById('finaltxt').style.display= "none";  
});
