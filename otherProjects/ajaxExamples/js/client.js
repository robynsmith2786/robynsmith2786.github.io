$.getJSON("jsonDatabase/clients.json", function (data) {
	
$(document).ready(function () {
    
	var html = "";
    	
$.each(data, function (index, item) {
        	html += "<div>" +
            	"<span class='song'>" + item.name + "</span>" +
            	"<span class='artist'>" + item.artist + "</span>" +
            	"</div>"
    	});

    	$("#").append(html);

	});
});
