 	AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	
  $('.appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});

	$('.appointment_time').timepicker();


})(jQuery);
