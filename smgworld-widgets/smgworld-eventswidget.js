[pl_accordion name="accordion2"]
<div id="hours-ajax"></div>
<script>
jQuery(function(){
	document.domain="bu.edu";
	jQuery.getJSON("http://smgapps.bu.edu/smgnet/smgCalendarU/todayjson_smgworld.cfm?callback=?",
		function(x){
			var output = '';
			var i = 0;
			// console.log(x);
			evnts = x.DATA;
			// console.log(evnts);
			// console.log(evnts.length);
			var nowff;
			for (var i = 0; i < evnts.length; i++) {
				var j = i + 10;
				var evntname = evnts[i][1]
				var evntlink = evnts[i][2]
				var rawdate = evnts[i][3]
				var location = evnts[i][4]
				var evntmsg = evnts[i][5]
				var rawendtime = evnts[i][6]
				var evntdate = new Date(rawdate);
				var evntendtime = new Date(rawendtime);
				var evntend = getTime(evntendtime);
				var ff = evntdate.toDateString();
				// console.log(evntname)
				// console.log(evntendtime)
				if (ff != nowff) {
					output += '<span style="font-weight:bold; color:#000; margin-top:5px;">'
					output += ff.slice(0,10) + ',' + ff.slice(10) + '</span><br/>';
					nowff = ff;
				};
				output += '[pl_accordioncontent name="accordion2" number="' + j + '" heading="' + evntname + '" ]'

				if (evntlink.length > 7) {
					output += '<a class="right" style="color:#009FDA;" target="_blank" href="' + evntlink + '">link</a>' 
				}

				output += '<strong>' + ff.slice(0,10) + ',' + ff.slice(10); 
				if (getTime(evntdate) != null) {
					output += '<br/>' + getTime(evntdate);
				} 
				if (evntend == null) {
					output += '</strong>';
					// console.log('nullllled')
				} else {
					output += ' - ' + evntend + '</strong>';
				}

				// console.log(evntlink.length)

				if (location.length > 0) {
					output += '<br/>'
					output += '<strong>' + location + '</strong>';
				}

				output += '<br/>'
				output += evntmsg;
				
				output += '[/pl_accordioncontent]'
			}
		// console.log(output);
		jQuery("#accordion2").html(output);
		});
});
function getTime (date) {
	var eh = date.getHours();
	var mm = date.getMinutes();
	var dd = "AM";
    var h = eh;
    if (h >= 12) {
        h = eh-12;
        dd = "PM";
    }
    if (h == 0) {
        return null;
    } else {
    	if (mm == 0) {
    		return h + dd;
    	} else {
			return h + ':' + mm + dd;
    	}
	}
}
</script>
[/pl_accordion]
<a class="right" style="color:#005293;font-size:12px;" href="http://smgworld.bu.edu/calendar/"><em>All Events >></em></a>