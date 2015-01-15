//new functions, using jQuery
$(function() {
        var xOffset = 10;
        var yOffset = 20;

		 $(".resourceLink a").on("mouseover focus",function(e) {
            $("body").append("<span id='tooltip'>" +  $(this).data("tooltip") + "</span>");
            			
			var currentElement = $('#' + this.id);
			var	x= currentElement.position();
			
			currentElement.children(".arrowDark").hide();
			currentElement.children(".arrowLight").show();
			
			$("#tooltip").css("top", (x.top + yOffset) + "px").css("left", (x.left + xOffset) + "px").fadeIn("fast");
        });
		
        $(".resourceLink a").on("mouseout blur",function(e) {
            $("#tooltip").remove();
			var currentElement = $('#' + this.id);
			currentElement.children(".arrowDark").show();
			currentElement.children(".arrowLight").hide();
        });   
		
		$(".resourceLink a").on("click",function(e) {
            $("#tooltip").remove();
			var currentElement = $('#' + this.id);
			currentElement.children(".arrowDark").show();
			currentElement.children(".arrowLight").hide();
        });  
    });
