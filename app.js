'use strict';

const youtubeEndpoint = 'https://www.googleapis.com/youtube/v3/search';

const API_KEY = 'AIzaSyB_DDm9OfaoRV4noF7D93sYYwO-i7AN15A';

function getApiData(searchTerm, callback) {
  const query = {
    part: 'snippet',
    key: API_KEY,
    q: searchTerm
  }
  $.getJSON(youtubeEndpoint, query, callback);
}

function renderResult(data) {
  let imgResult = '';
  let imgThumbnail = function (key) {

    let vidUrl = key.snippet.thumbnails.medium.url;
    let vidId = vidUrl.split('').slice(23, 34).join('');
    let thumbnailAddress = 'https://www.youtube.com/watch?v=' + vidId;

    imgResult += `<a href="${thumbnailAddress}"><img src="${vidUrl}"></a>`;
  }

  console.log(data);

  if (data.items) {
    data.items.forEach(imgThumbnail);
  } else {
    imgResult += '<h2>Sorry, nothing found...</h2>';
  }
  $('.js-search-results').html(imgResult);
}



function handleSubmitButton() {
  $('form').submit(function(e) {
    e.preventDefault();

    let vidSearch = $('#youtube-search');
    let vidSearchQuery = vidSearch.val();

    vidSearch.val('');

    getApiData(vidSearchQuery, renderResult);
  })
}

$(handleSubmitButton);

