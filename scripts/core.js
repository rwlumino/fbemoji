var chatContName = '#ChatTabsPagelet',
	chatWindowName = '.fbNubFlyout',
	chatWindow = chatContName + ' ' + chatWindowName,
	debug = 'true';


function fbEmoji() {

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

	if (debug != 'true'){
		console.log = function() {};
		alert = function() {};
	}

	var i = 1;
	$(chatWindow).each( function loopChatWindows(){

		var chatWindowTitle = $(this).find('.titlebarLabel .titlebarTextWrapper span span span').text();

		if (chatWindowTitle = 'null'){
			chatWindowTitle = $(this).find('.titlebarLabel .titlebarTextWrapper span span').text();
		}

		console.log('Found chat window ' + i +': ' + chatWindowTitle);

		$(this).find('div[aria-label]').each( function replaceEmoji(){
			var ariaLabel = $(this).attr('aria-label');
			console.log('    Found element matching ' + ariaLabel);
			$(this).find('img').attr('src', '//emojipedia-us.s3.amazonaws.com/cache/22/d4/22d4c74970a07cbdfcccb48620dc160a.png');
		});
		i++;
	});
}

$(document).ready( function() {
	setTimeout(function() {
		fbEmoji();
	}, 2000);
});

$(chatWindow + ' .fbNubFlyoutBody.scrollable').scroll( function() {
	console.log('Scrolling');
	setTimeout(function() {
		fbEmoji();
	}, 2000);
});

