$(document).ready(function() {



// PUT for liking locations
$(".like").on("click", function(event) {

	var id = $(this).data("data-id");
	var newLikes = (Number($(this).data("likes"))+1);

	var newLikeNum = {
		likes: newLikes
	};

	// send PUT request
	$.ajax("/api/likes/" + id, {
		type: "PUT",
		data: newLikeNum
	}).then(
	function() {
		console.log("likes updated to: " + newLikeNum);
		// reload the page to get updated number of likes
		location.reload();
	})
}



};



////////////////////////MAPS API/////////////////////////////
// script tags: 
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
type="text/javascript"></script>


API KEY: AIzaSyAPDiDit4kovSff-o1DtYGHyWjyr4RHUqI


