$(document).ready(function() {

	// your code here
	
	$('#add').click(function() {
	    var toAdd = $('input[name=site]').val();
	    var toAdd2 = $('input[name=link]').val();
	    $('.websites ol').append("<li><a href='"+ toAdd2 + "'>" + toAdd + "</a></li>");
	    $('.websites').height("+=40px");
	});
	$('#remove').click(function() {
	    $('.websites').effect('explode');
	});
	$('#fav').draggable();
	$('ol').sortable();
	
});
