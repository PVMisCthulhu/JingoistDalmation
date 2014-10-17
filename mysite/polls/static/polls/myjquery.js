$(document).ready(function(){
    var now = moment();    
    $("#moment1").html("Default: " + now.format());
    $("#moment2").html("Unix: " + now.unix());
    $("#moment3").html("Week #:" + now.week());
    $("#moment4").html("UTC: " + now.utc().format());
    $("#moment5").html("How long since 1/1/2007? <strong>" + moment([2007,1,1]).fromNow() + "</strong>");
    $("#moment6").html("JSON: " + now.toJSON());

    $('.tt').tooltipster();

    $("#ptagtoggle").click(function(){
    	$("#invisip").toggle();
    });
    $("#fancy").click(function(){
    	$("#fancytext").fadeToggle();
    });
    $("#doscience").click(function(){
    	$("#toofar").slideToggle();
    });
    $("#moveright").click(function(){
    	$("#canteven").animate({
    		left:'+=50px'
    	});
    });
	$("#moveleft").click(function(){
    	$("#canteven").animate({
    		left:'-=50px'
    	});
    });
    $("#ajaxify").click(function(){
    	$.ajax({url:"../fe_test_post/",
    		   success: function(result){
    		       $("#blankajax").html(result);    		       
    		   },
    		   error: function(xhr, ex){
    		       $("#blankajax").html(xhr.responseText);    		       
    		   }
    	});
    });
    $('#avgrundbutton').avgrund({
        width: 380,
        heigh: 280,
        template: "You're the man now, dog!"
    });  
    $("#toastrinfo").click(function(){
        toastr.info('Informational toast!');        
    });
    $("#toastrwarning").click(function(){
        toastr.warning('Warning toast!');        
    });
    $("#toastrsuccess").click(function(){
        toastr.success('Success toast!');        
    });
    $("#toastrerror").click(function(){
        toastr.error('Error toast!');        
    });
});