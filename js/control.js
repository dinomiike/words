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
				$("section#words ul").append("<li><a href='#"+ val.item + "' class='" + val.priority + "' title='" + val.context + "'>" + val.item + "</a></li>\r\n");
			});

			$("li a").mouseover(function (event) {
				$("section#context").html(this.title);
			});

			$("li a").mouseout(function (event) {
				$("section#context").html("");
			});

			$("li a").click(function (event) {
				var currentClass = this.className;
				event.preventDefault();
				console.log(currentClass);
				console.log(styles[styles.indexOf(this.className) - 1]);
				$(this).removeClass();
				$(this).addClass(styles[styles.indexOf(currentClass) - 1]);
			});
		}
	});
});
