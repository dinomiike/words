$(document).ready(function() {
	// Set the complete JSON response
	var response = $.ajax({
		url: "js/miike.json",
		error: function() {
			alert("Error: file not found");
		},
		success: function() {
			// Set the response text of the ajax call to jsonResponse
			var jsonResponse = JSON.parse(response.responseText);

			// Loop through each word in the response and format them
			$(jsonResponse.words).each(function(key, val) {
				$("section#words ul").append("<li><a href='#"+ val.item + "' class='" + val.priority + "' title='" + val.context + "'>" + val.item + "</a></li>\r\n");
			});

			$("li a").mouseover(function (event) {
				//event.preventDefault();
				//alert(event.type);
				//jsonResponse.words[0].priority = "medium";

				$("section#context").html(this.title);
			});

			$("li a").mouseout(function (event) {
				//event.preventDefault();
				$("section#context").html("");
			});

			$("li a").click(function (event) {
				event.preventDefault();
				$(this).removeClass().addClass("medium");
			});
		}
	});
});
