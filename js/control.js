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
				$("section#words ul").append("<li class='" + val.priority + "'>" + val.item + "</li>\r\n");
			});
		}
	});
});
