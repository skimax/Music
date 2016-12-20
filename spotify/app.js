$(document).ready( function() {
$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getSpot(searchTerm);
  });
});

	
function getSpot(searchTerm){

	var request = {
	q:searchTerm,
	type: 'album'

};
	var restrict = $.ajax({
		url: "https://api.spotify.com/v1/search",
		data: request,
		dataType: "json",
		type: "GET"
		}).done( function(data) { 
            console.log(data)
			showResults( data.albums.items ) } );		
	  };
	
  

	function showResults(results){
		console.log(results);
    var html = "";
    $.each(results, function(i, item) {
     	var noodle = item.images[1].url;
    var spotmusic = item.external_urls.spotify;

html += "<a href= '"+ spotmusic + "'><img src='"+ noodle + "'/>";
		
});
		$('#search-results').append(html);
	
};
});