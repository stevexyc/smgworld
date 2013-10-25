[pl_accordion name="accordion"]
<div id="hours-ajax"></div>
<script>
jQuery(function(){
	document.domain="bu.edu";
	jQuery.getJSON("http://smgwiki.bu.edu/hours2/data.php?callback=?",{},
		function(x){
			var output = '';
			var i = 0;
			// console.log( 'ONE: ' + x);

			for (var key in x) {

				output += '[pl_accordioncontent name="accordion" number="' + i + '" heading="' + key + '" ]'

				// console.log('key: ' + key);

				var obj = x[key];

				if (obj['status']) {
		    		output += obj['status'];
		    	}				
		    	else {

					for (var prop in obj) {
					    // important check that this is objects own property 
					    if(obj.hasOwnProperty(prop)){

					    	if (obj[prop]){
						        // console.log(prop + " = " + obj[prop]);
						        output += prop + ' : ' + obj[prop] + '<br>';
					    		
					    	}
					    	
					    }
					}
		    		
		    	}

				output += '[/pl_accordioncontent]'
				i++;
			}
		// console.log(output);
		jQuery("#accordion").html(output);
		});
});
</script>
[/pl_accordion]