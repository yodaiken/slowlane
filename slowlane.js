(function($, window, undefined) {
  if (jQuery === undefined) {
    console.log('Include jQuery for slowlane.js to work!');
    window.slowlane = function donothing(){};
    return;
  }
  var IMG_TIMEOUT = 10000;
  var PAGE_TIMEOUT = 8000;
  var LOADING_IMG = "";
  var PAGE_LOADING_IMG = "http://www.aaronyodaiken.com/slowlane/loading_gif.gif";
  var PAGE_LOADING_TEXT = "We are artifically slowing down your visit to this site to protest the FCC’s failure to protect network neutrality. <a href='#TODO' target='_blank'>Learn more here</a>";
  window.slowlane = function slowlane(opts) {
    if (opts.images === undefined) {
      opts.images = false;
    }
    if (opts.page === undefined) {
      opts.page = true;
    }
    if (opts.img_timeout) {
      IMG_TIMEOUT = opts.img_timeout;
    }
    if (opts.loading_img) {
      LOADING_IMG = opts.loading_img;
    }
    if (opts.images) {
      $(document).ready(slowimages);
    }
    if (opts.page_loading_img) {
      PAGE_LOADING_IMG = opts.page_loading_img;
    }
    if (opts.page_loading_text) {
      PAGE_LOADING_TEXT = opts.page_loading_text;
    }
    if (opts.page) {
      $(document).ready(slowpage);
    }
  };

  function slowimages() {
    $("img").each(function() {
      var $img = $(this);
      var src = $img.attr("src");
      var width = $img.css("width");
      var height = $img.css("height");

      $img.attr("src", LOADING_IMG);

      setTimeout(function() {
        $img.attr("src", src);
      }, IMG_TIMEOUT);
    });
  }

  function slowpage() {
    var $cover = $("<div>").css({
      "z-index": 2147483647,
      "position": "fixed",
      "top": 0,
      "left": 0,
      "width": "100%",
      "height": "100%",
      "backgroundImage": "url(" + PAGE_LOADING_IMG + ")",
      "backgroundColor": "#fff",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "center",
      "backgroundSize": "contain"
    }).html(
      $("<div>").css({
        "fontFamily": "Helvetica, Arial, sans-serif",
        "fontSize": "16px",
        "lineHeight": "1.2",
        "fontWeight": "bold",
        "padding": "20px",
        "paddingBottom": "100%",
        "background": "rgba(255,255,255,.8)"
      })
      .html(PAGE_LOADING_TEXT));
    $("body").append($cover);
    setTimeout(function() {
      $cover.remove();
    }, PAGE_TIMEOUT);
  }
})(window.jQuery, window);
