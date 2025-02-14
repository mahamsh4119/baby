

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(targetDate) {
    // Update the clock every second
    setInterval(function() {
        var current = new Date(); // Current date and time
        var target = new Date(targetDate); // Target date and time
        
        // Calculate the difference in seconds
        var seconds = (target - current) / 1000;
        
        // If the target date has passed, show "Time's up!" and stop updating
        if (seconds <= 0) {
            $("#clock").html("Countdown💖");
            clearInterval(this); // Stop the interval when the time is up
            return;
        }

        // Calculate days, hours, minutes, and seconds remaining
        var days = Math.floor(seconds / (3600 * 24));
        seconds = seconds % (3600 * 24); // Remaining seconds after extracting days

        var hours = Math.floor(seconds / 3600);
        if (hours < 10) {
            hours = "0" + hours; // Add leading zero for hours
        }

        seconds = seconds % 3600; // Remaining seconds after extracting hours

        var minutes = Math.floor(seconds / 60);
        if (minutes < 10) {
            minutes = "0" + minutes; // Add leading zero for minutes
        }

        seconds = seconds % 60;
        if (seconds < 10) {
            seconds = "0" + seconds; // Add leading zero for seconds
        }

        // Format the result as "7 days 15 hrs 19 mins left"
        var result = days + " Days " + hours + " Hrs " + minutes + " Mins";

        // Only update the clock text if it has changed
        if ($("#clock").text() !== result) {
            $("#clock").text(result); // Use text() instead of html() to avoid re-rendering the whole element
        }

    }, 1000); // Update every second (1000ms)
}

// Call the function with a specific target date
timeElapse("2025-02-20T12:00:00"); // Replace with your target date



