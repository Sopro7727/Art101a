// index.js - purpose and description here
// Author: Your Name
// Date:

const URL = "https://perenual.com/api/pest-disease-list";

$("#activate").click(function(){
  console.log("Click");
  // call ajax
  $.ajax(ajaxObj);
})

const ajaxObj = {
  url: URL,
  data: {
    key: "sk-uCEA6659018900ac35690",
  },
  type: "GET",
  dataType: "json",
  success: ajaxSuccess,
  error: ajaxError
}

function ajaxSuccess(data) {
  const dataArray = data.data;
  console.log(dataArray.length)
  const randomIndex = Math.floor(Math.random() * dataArray.length);
  console.log(randomIndex)
  const element1 = dataArray[randomIndex];
  console.log("element1:", element1);
  const question1 = element1.description[0].subtitle;
  const answer1 = element1.description[0].description;
  const question2 = element1.description[1].subtitle;
  const answer2 = element1.description[1].description;
  let imageURL = null;
  try{
    imageURL = element1.images[0].regular_url;
  }
  catch(error){
    $.ajax(ajaxObj);
  }
  $("#output").html("<h3>" + question1);
  if(imageURL != null){
     $("#output").append("<img src='" + imageURL + "' />")
  }
  $("#output").append("<p>" + answer1);
  $("#output").append("<h4>" + question2);
  $("#output").append("<p>" + answer2);
}


// create ajax error callback
function ajaxError(request,error){
	  console.log("Oops:", error);
}
