/*
	By Simon Dragsbæk Petersen
	Wanna write to me at 
	simonpetersen3@hotmail.co.uk
*/
(function($){
  $.fn.textResizer = function(sizefactor, maxSize, minSize) {
	  var text = {};
      return $(this).each(function(){
        var $this = $(this);
        text.resizer = function () {
          var ww = $(window).width(),
              fs = ww / sizefactor;
          if(fs > maxSize) {
            $this.css('font-size', maxSize);
            $this.css('line-height', maxSize + (maxSize * 0.05) + "px");
          } else if (fs < minSize) {
            $this.css('font-size', minSize);
            $this.css('line-height', minSize + (minSize * 0.05) + "px");
          } else {
            $this.css('font-size', fs);
            $this.css('line-height', fs + (fs * 0.05) + "px");
          }
        };
        text.resizer();
        $(window).resize(text.resizer);
      });
  };
})(jQuery);

