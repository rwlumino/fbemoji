var chatContName = '#ChatTabsPagelet',
	chatWindowName = '.fbNubFlyout',
	chatWindow = chatContName + ' ' + chatWindowName,
	chatWindowContainer = chatWindow + ' .conversation'
	debug = 'true';

function fbEmoji() {

	// Disables console logs and alerts if debug mode inactive
	if (debug != 'true'){
		console.log = function() {};
		//alert = function() {};
	}


/*
Snake emoji code

System	Representation
Nº	128013
UTF-8	F0 9F 90 8D
UTF-16	D8 3D DC 0D
UTF-32	00 01 F4 0D
URL-Quoted	%F0%9F%90%8D
HTML-Escape	&#x1F40D;
Wrong windows-1252 Mojibake	ð
RFC 5137	\u'1F40D'
Python	\U0001F40D
Ruby	\u{1F40D}
Perl	"\x{1F40D}"
JavaScript, JSON and Java	\uD83D\uDC0D
C	\U0001F40D
CSS	\01F40D
*/

	var i = 1;

	// Chat window loop
	$(chatWindow).each( function loopChatWindows(){

		var chatWindowTitle = $(this).find('.titlebarLabel .titlebarTextWrapper span span').text();
		console.log('Found chat window ' + i +': ' + chatWindowTitle);

		// Replace emoji
		$(this).find('div[aria-label]').each( function replaceEmoji(){
			var ariaLabel = $(this).attr('aria-label');
			console.log('    Found element matching ' + ariaLabel);
			$(this).find('img').attr('src', '//emojipedia-us.s3.amazonaws.com/cache/22/d4/22d4c74970a07cbdfcccb48620dc160a.png');
		});

		i++;
	});

	$('.conversation').change( function () {
		alert('asd');
			/*var chatWindowTitle = $(this).find('.titlebarLabel .titlebarTextWrapper span span span').text();
			if (chatWindowTitle = 'null'){
				chatWindowTitle = $(this).find('.titlebarLabel .titlebarTextWrapper span span').text();
			}

			alert('Change in chat window ' + i +': ' + chatWindowTitle);
			*/
			fbEmoji();
	});

}



$(document).ready( function () {
	setTimeout(function () {
		fbEmoji();
	}, 2000);

});





