$(document).ready(function() {
	var styles = new Array();
	styles[0] = "off";
	styles[1] = "faint";
	styles[2] = "lowMinus";
	styles[3] = "lowPlus";
	styles[4] = "mediumMinus";
	styles[5] = "mediumPlus";
	styles[6] = "highMinus";
	styles[7] = "highPlus";

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
				$("section#words ul").append("<li><a href='#"+ val.item + "' id='" + key + "' class='" + val.priority + "' title='" + val.context + "'>" + val.item + "</a></li>\r\n");
			});

			$("li a").mouseover(function (event) {
				$("section#context").html(this.title);
			});

			$("li a").mouseout(function (event) {
				$("section#context").html("");
			});

			$("li a").click(function (event) {
				// Get the current CSS Class
				var currentClass = this.className;

				// Get the name of CSS Class you will change to on this click event
				var changeClass = styles[styles.indexOf(currentClass) - 1];

				event.preventDefault();

				console.log("Current Class: " + currentClass);
				console.log("Change Class: " + changeClass);
				//console.log(styles[styles.indexOf(this.className) - 1]);
				//console.log(this.text);
				//console.log(jsonResponse.words[this.id].priority);

				// Data Side: Set the Object to hold the new class
				jsonResponse.words[this.id].priority = changeClass;
				// Asynchronously update the original .JSON file
				// somehow!

				// Presentation Side: Remove the old class and add the new one
				$(this).removeClass();
				$(this).addClass(changeClass);

				console.log("object now has: " + jsonResponse.words[this.id].priority);
				console.log(JSON.stringify(jsonResponse));
			});
		}
	});
});
