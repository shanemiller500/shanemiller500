// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .




// global. currently active menu item 
var current_item = 0;

// few settings
var section_hide_time = 1300;
var section_show_time = 1300;

// jQuery stuff
jQuery(document).ready(function($) {

// Switch section
$("a", '.mainmenu').click(function() 
{
  if( ! $(this).hasClass('active') ) { 
    current_item = this;
// close all visible divs with the class of .section
$('.section:visible').fadeOut( section_hide_time, function() { 
  $('a', '.mainmenu').removeClass( 'active' );  
  $(current_item).addClass( 'active' );
  var new_section = $( $(current_item).attr('href') );
  new_section.fadeIn( section_show_time );
} );
}
return false;
});   
});
