(function($, window, undefined) {
  if (jQuery === undefined) {
    console.log('Include jQuery for slowlane.js to work!');
    window.slowlane = function donothing(){};
    return;
  }

  window.slowlane = function slowlane(opts) {
    if (!opts)
      opts = {};
    if (opts.slow_timeout === undefined)
      opts.slow_timeout = 10000;
    if (opts.msg_header === undefined)
      opts.msg_header = "Does this site seem a bit slow?";
    if (opts.msg === undefined)
      opts.msg = "We are intentionally slowing down our page so that our users get a taste of what the Internet will be like under a new FCC proposal that puts an end to network neutrality, the current rule which requires all Internet traffic to be equally fast.";
    if (opts.ctoa === undefined)
      opts.ctoa = "We can only stop this with your help:";
    if (opts.primary === undefined)
      opts.primary = 'I’M IN — how can I help?';
    if (opts.secondary === undefined)
      opts.secondary = 'More info, please?';
    if (opts.primary_open === undefined)
      opts.primary_open = 'https://petitions.whitehouse.gov/petition/restore-net-neutrality-directing-fcc-classify-internet-providers-common-carriers/5CWS1M4P'; // TODO find better site
    if (opts.secondary_open === undefined)
      opts.secondary_open = 'http://en.wikipedia.org/wiki/Net_neutrality'; // TODO find better site
    $(document).ready(function() {
      slowimages("", opts.slow_timeout)
      showpopup(opts.msg_header, opts.msg, opts.ctoa, opts.primary, opts.secondary, opts.primary_open, opts.secondary_open);
    });
  };

  var $popup;
  /* use custom slowlane-{div,span,etc} to avoid browser styles -- maybe should just use a reset TODO think, test */
  function showpopup(header, message, ctoa, primary, secondary, primary_open, secondary_open) {
    $popup = $("<slowlane-div>").css({
      'background': '#000',
      'color': '#fff',
      'height': 'auto',
      'width': '100%',
      'display': 'block',
      'position': 'absolute',
      'top': '0',
      'left': '0'
    }).append(
      $("<slowlane-div>").css({
        'padding': '20px',
        'display': 'block',
        'fontFamily': 'Helvetica, Arial, sans-serif',
        'postion': 'relative'
      }).append(
        $("<slowlane-h1 data-slowlane-message-header>").css({
          'fontSize': '24px',
          'textTransform': 'uppercase',
          'fontWeight': 'bold',
          'paddingBottom': '.5em',
          'display': 'block'
        }).html(header)
      ).append(
        $("<slowlane-p data-slowlane-message-body>").css({
          'fontSize': '18px',
          'paddingBottom': '.5em',
          'display': 'block'
        }).html(message)
      ).append(
        $("<slowlane-div>").css({
          'overflow': 'auto',
          'paddingTop': '20px',
          'display': 'block'
        }).append(
          $("<slowlane-label data-slowlane-ctoa>").css({
            'fontSize': '18px',
            'paddingRight': '10px',
            'marginTop': '10px',
            'float': 'left'
          }).html(ctoa)
        ).append(
          $("<slowlane-button data-primary>").css({
            'fontSize': '18px',
            'fontWeight': 'bold',
            'color': '#fff',
            'background': '#ff0000',
            'borderRadius': '3px',
            'padding': '5px 10px',
            'marginRight': '5px',
            'marginTop': '5px',
            'display': 'block',
            'cursor': 'pointer',
            'float': 'left'
          }).html(primary).click(function() {
            window.open(primary_open);
          })
        ).append(
          $("<slowlane-button data-secondary>").css({
            'fontSize': '18px',
            'fontWeight': 'bold',
            'color': "#fff",
            'backgroundColor': '#00ccff',
            'borderRadius': '3px',
            'padding': '5px 10px',
            'marginRight': '5px',
            'marginTop': '5px',
            'display': 'block',
            'cursor': 'pointer',
            'float': 'left'
          }).html(secondary).click(function() {
            window.open(secondary_open);
          })
        ).append(
          $("<slowlane-button data-dismiss>").css({
            'fontSize': '12px',
            'textTransform': 'uppercase',
            'lineHeight': '18px',
            'fontWeight': '400',
            'color': '#FFF',
            'border': '1px solid #FFF',
            'borderRadius': '3px',
            'padding': '4px 10px',
            'marginRight': '5px',
            'marginTop': '5px',
            'display': 'block',
            'cursor': 'pointer',
            'float': 'right'
          }).html('Close Message').click(function() {
            $popup.remove();
            $("body").css("paddingTop", origTop + "px");
            // todo set cookie so we don't show this on page load?
          })
        )
      )
    );
    var origTop = parseInt($("body").css("paddingTop"));
    $("body").prepend($popup);
    function fixpadd() {
      $("body").css("paddingTop", origTop + $popup.height() + "px")
    }
    $(window).resize(fixpadd);
    fixpadd();
  }

  function slowimages(loading, timeout) {
    $("img").each(function() {
      var $img = $(this);
      var src = $img.attr("src");
      var width = $img.css("width");
      var height = $img.css("height");

      $img.attr("src", loading);

      setTimeout(function() {
        $img.attr("src", src);
      }, timeout);
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
