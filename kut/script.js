$( function() {
    $( "#slider-1" ).slider({
    value:100,
    min: 0,
    max: 6,
    step: 1,
    slide: function( event, ui ) {
        $( "#amount1" ).val( ui.value );
        var temp = Number($('#amount1').val()) + Number($('#amount2').val());
        $( "#amount3" ).val("$" + temp);
    }
    });
	$( "#slider-2" ).slider({
    value:100,
    min: 0,
    max: 100,
    step: 10,
    slide: function( event, ui ) {
        $( "#amount2" ).val( ui.value );
        var temp = Number($('#amount1').val()) + Number($('#amount2').val());
        $( "#amount3" ).val("$" + temp);
    }
    });
    
	
	
} );