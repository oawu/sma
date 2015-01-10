/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */
$(function () {
  var $rightSlide = $('#right_slide');
  var overflow = $('body').css ('overflow');
  
  $(window).resize (function () {
    setTimeout (function () {
      if ($('#content').height () > $('.content').height ())
        $('.content').css ({'height': $('#content').height () + 'px'});  
    }, 500);
  }).resize ();
  
  $('.option').click (function () {
    if ($rightSlide.hasClass ('close')) {
      $rightSlide.removeClass ('close');
      $('body').css ('overflow', 'hidden');
    } else {
      $rightSlide.addClass ('close');
      $('body').css ('overflow', overflow);
    }
  });
  $('#slide_cover').click (function () {
    if (!$rightSlide.hasClass ('close')) {
      $rightSlide.addClass ('close');
      $('body').css ('overflow', overflow);
    }
  });
  var key = window.location.pathname.split ('/').filter (function (t) { return t.length; });
  if (key.length)
    $('div.sub[data-key="'+key[0]+'"]').addClass ('show');
});
