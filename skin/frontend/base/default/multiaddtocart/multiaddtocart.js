
jQuery(document).ready(function() {
	jQuery('.checkall').click(function() {

		if(jQuery(this).is(":checked")) {
			var len = document.getElementsByClassName('check').length;
			var i;
			for(i=0;i<(len);i++) {
				document.getElementsByClassName('check')[i].checked = true;
			}
		} else {
			var len = document.getElementsByClassName('check').length;
			var i;
			for(i=0;i<(len);i++) {
				document.getElementsByClassName('check')[i].checked = false;
			}
		}
	});
		
	jQuery('.btn-cartall').click(function() {
		var error = false;
		var error1 = true;
		
		jQuery('.check').each(function() {
			if(jQuery(this).is(':checked')) {
				error1 = false;
			}
		});
		if(error1 == true) {
			alert("No checkbox selected !");
		} else {
			jQuery('.quantity').each(function() {
				if(jQuery(this).val() < 0 || isNaN(jQuery(this).val()) == true) {
					alert("Invalid Value !");
					jQuery(this).focus();
					error = true;
				}
			});
		}
				
		if(error == false && error1 == false) {
			jQuery('#checkall-form').submit();
		}
	});
});