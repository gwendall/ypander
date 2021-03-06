<!DOCTYPE html>
<html itemscope itemtype="http://schema.org/Article">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<link href="/index.css" type="text/css" rel="stylesheet">
		<link href='http://fonts.googleapis.com/css?family=Dosis:800' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
		<link href="https://chrome.google.com/webstore/detail/ddiolncbbndlglfhigpabghoinceogjn" rel="chrome-webstore-item">
		<link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.1/themes/base/jquery-ui.css"/>
		<title>Ypander</title>
	</head>

	<body>

		<div class="logo">
			<div class="title"><span style="color:#FF6600;">Y</span>pander</div>
			<div class="subtitle">Read / write / upvote Hackernews comments through AJAX</div>
		</div>

		<div class="section" style="margin-top:80px;">
			<a class="btn" href="https://chrome.google.com/webstore/detail/knkmodnockkaaebcbbdoihohlhcljahh" target="_blank">
				Get it from the Chrome Store
			</a>
		</div>

		<div class="section" style="margin-top:30px;position:relative;left:-15px;">
			<div style="float:left;width:76px;">
				<a href="https://twitter.com/share" class="twitter-share-button" data-text="Hackernews like it should be" 
				data-lang="en" data-url="http://ypander.com">Tweet</a>
			</div>
			<div style="float:left;width:50px;margin-left:10px;" class="fb-like-box">
				<div class="fb-like" data-href="http://ypander.com" data-send="false" data-layout="button_count" data-width="50" 
				data-show-faces="false" data-font="lucida grande"></div>
			</div>
		</div>
		
		<div class="section" style="margin-top:40px;">
			<img src="/screenshot.png">
		</div>
		
	</body>

	<div id="fb-root"></div>
	<script>(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=433459570020110";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
	
	<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
	</script>

</html>