$(document).ready(function () {



	// PUT for liking locations
	$(".like").on("click", function (event) {
		console.log("clicked")
		if ($(this).attr("data-liked")==="false"){
			console.log("Liking the thing")
			$(this).addClass("liked")
			$(this).attr("data-liked",true);

		//send PUT request
		$.ajax("/api/like", {
			type: "PUT",
			data: { 'id': $(this).data("id") }
		})
	}
	else if ($(this).attr("data-liked")==="true") {
		console.log("Unliking the thing")
		$(this).removeClass("liked")
		$(this).attr("data-liked",false);
		$.ajax("/api/unlike", {
			type: "PUT",
			data: { 'id': $(this).data("id") }
		})
	}
	});


});