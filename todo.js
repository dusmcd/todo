

function init() {
	var input = document.querySelector("input");
	$("button").on("click",function() {
		if (input.value !== "") {
			$("ul").append("<li>" + $("input").val() + "</li>");
			$("input").val("");
			crossOut();
		}

	});
};

function crossOut() {
	$("li").on("click", function() {
		$(this).addClass("cross-out");
	});
};

$(document).ready(init);
	
	
