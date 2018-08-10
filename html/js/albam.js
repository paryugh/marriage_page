$("#file_selector").change(function (data){
	$("#file_selector_wrap").css("display", "none");
	$("#file_uploador_wrap").css("display", "block");
	$("#file_name").text($("#file_selector").val());
});