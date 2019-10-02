jQuery(document).ready(function(){
        jQuery("#enter").click(function(){
            
            // pushing right part outside
            
            jQuery(".right-gate").animate({
                right: "-30%"}, 1000, function(){
                    jQuery("#enter").fadeOut(1000,function(){
                        jQuery("#exit").fadeIn(1000, function(){
                            jQuery(".content ul li").fadeIn(1000).css("display","flex");
                        });
                    }); 
                });
            
            // pushing left part outside
            
            jQuery(".left-gate").animate({
                left: "-30%"}, 1000);
            
        });
    
        // if user clicked on button exit, rebute all events        
    
        jQuery("#exit").click(function(){
            jQuery("#exit").fadeOut(1000, function(){
                jQuery(".content ul li").fadeOut(1000).css(("display","none"), function(){
                    jQuery(".right-gate").delay(500).animate({
                        right: "0%"},1000);
                    jQuery(".left-gate").delay(500).animate({
                        left: "0%"}, 1000);
                    jQuery("#enter").fadeIn(1000, function(){});
                });
                    
                });
            
            
        });
     });