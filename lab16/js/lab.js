// index.js - Working with your partner, experiment with jQuery and AJAX.
// Author: Noah Walker
// Date: June 9, 2024
var comicObj = {
  num: 1
};

$.ajax({
  url: "https://xkcd.com/info.0.json",
  type: "GET",
  dataType: "json",
  success: function(data) {
      console.log(data);
      $('#comicTitle').text(data.title);
      $('#comicImage').attr('src', data.img).attr('alt', data.alt).attr('title', data.alt);
  },
  error: function(jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
  }
});

function getAndPutData(comicNum) {
  $.ajax({
      url: "https://xkcd.com/" + comicNum + "/info.0.json",
      type: "GET",
      dataType: "json",
      success: function(data) {
          $('#comicTitle').text(data.title);
          $('#comicImage').attr('src', data.img).attr('alt', data.alt).attr('title', data.alt);
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
      }
  });
}

$('#previous').click(function() {
  comicObj.num -= 1;
  getAndPutData(comicObj.num);
});

$('#next').click(function() {
  comicObj.num += 1;
  getAndPutData(comicObj.num);
});