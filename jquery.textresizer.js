/*
	Small script that basicly does the same as fittext.js found at: https://github.com/davatron5000/FitText.js/blob/master/jquery.fittext.js
	I have made it to an easy use fast to understand and faster executing script working on a pure javascript version
	stay tune: Read my blog www.nomisweb.tk
  or see this project on github: https://github.com/sp90/textResizer/

	
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

