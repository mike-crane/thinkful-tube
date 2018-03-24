'use strict';

const youtubeEndpoint = 'https://www.googleapis.com/youtube/v3/search';

const API_KEY = 'AIzaSyB_DDm9OfaoRV4noF7D93sYYwO-i7AN15A';

function getApiData(searchTerm, callback) {
  const query = {
    part: 'snippet',
    key: API_KEY,
    q: searchTerm,
    type: 'video'
  }
  $.getJSON(youtubeEndpoint, query, callback);
}

function renderResult(data) {
  // appends some API data to the html results section.
  console.log(data);
}

function handleSubmitButton() {
  $('form').submit(function(e) {
    e.preventDefault();

    let vidSearch = $(this).find('#youtube-search').val();

    getApiData(vidSearch, renderResult);
  })
}

$(handleSubmitButton);

