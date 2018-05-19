$(document).ready(function() {



// PUT for liking locations
$(".LIKEBUTTON").on("click", function(event) {
	var id = $(this).data("id");
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
},

$(".SUBMITBUTTON").on("submit", function(event) {
	event.preventDefault();

	var newReview = {
		author: $("#AUTHOR").val().trim(),
		body: $("#BODY").val()
	};

	// send POST request
	$.ajax("/api/review", {
		type: "POST",
		data: newReview
	}).then(
	function() {
		console.log("new review posted");

		location.reload();
	})



})









}