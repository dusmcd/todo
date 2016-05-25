

function init() {
	var input = document.querySelector("input");
	$("#add").on("click",function() {
		if (input.value !== "") {
			$("ul").append("<li>" + $("input").val() + "</li>");
			$("input").val("");
			crossOut();
			reset();
		}

	});
};

function crossOut() {
	$("li").on("click", function() {
		$(this).addClass("cross-out");
	});
};

function reset() {
	$("#reset").on("click", function() {
		$("ul").html(null);
	});
};

$(document).ready(init);
	
	
