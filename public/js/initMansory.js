
(function($) {

  "use strict";

  var ssMasonryFolio = function () {
        
        var containerBricks = $('.masonry');

        containerBricks.imagesLoaded(function () {
            containerBricks.masonry({
                itemSelector: '.masonry__brick',
                resize: true
            });
        });

    };

    ssMasonryFolio();

     $(document).on('click', '.mansory', function(){
      ssMasonryFolio();
      console.log("Mansory clicked");
     }
    );

  })(jQuery);

  $(document).on('scroll', '.masonry', ssMasonryFolio()
    );

