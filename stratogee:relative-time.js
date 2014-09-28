@RelativeTime = 
	from: (time) ->
		diff = TimeSync.serverTime() - time.valueOf()

		seconds = Math.abs(diff) / 1000
		minutes = seconds / 60
		hours = minutes / 60
		days = hours / 24
		years = days / 365

		if seconds < 10
		  "just now"
		else if seconds < 120
		  "a minute ago"
		else if minutes < 60
		  "#{Math.floor(minutes)} minutes ago"
		else if minutes < 120
		  "an hour ago"
		else if hours < 3
		  "#{Math.floor(hours)} hours ago"
		else if moment(time).format("DD MM YYYY") is moment(TimeSync.serverTime()).format("DD MM YYYY")
		  "today at #{moment(time).format('h:mm a').toLowerCase()}"
		else if moment(time).format("DD MM YYYY") is moment(TimeSync.serverTime()).subtract(1, "days").format("DD MM YYYY")
		  "yesterday at #{moment(time).format('h:mm a').toLowerCase()}"
		else if days < 90
		  moment(time).format('MMM D') + " at " + moment(time).format('h:mm a')
		else
		  moment(time).format('MMM D, YYYY') + " at " + moment(time).format('h:mm a')

UI.registerHelper "relativeTime", relativeTime