$(document).ready(function () {



	// PUT for liking locations
	$(".like").on("click", function (event) {
		console.log("clicked")

		//send PUT request
		$.ajax("/api/likes", {
			type: "PUT",
			data: { 'id': $(this).data("id") }
		})
	});

});