jQuery.fn.outerHTML = function(s) {
    return s
        ? this.before(s).remove()
        : jQuery("<p>").append(this.eq(0).clone()).html();
};

$(document).ready(function() {

	var i = 0;
	var commentLink;
	$(".subtext").each(function(e) {
		$(this).after("<tr id='comments-"+i+"' style='padding-top:10px;'></tr>");
		commentLink = $(this).find('a[href^="item?"]');
		$(commentLink).attr("data-value",$(this).html());
		$(commentLink).attr("data-id",i);
		$(commentLink).attr("id","link-"+i);
		$(commentLink).html($(commentLink).html()+" (show)");
		i++;
	});

	var to;
	var t = 0;
	function loading($text) {
		to = setTimeout(function() {
			if (t == 0) {
				$text.html($text.attr("data-value"));
				t++;
			} else if (t < 3) {
				$text.html($text.html()+".");
				t++;
			} else {
				$text.html($text.attr("data-value"));
				t = 0;
			}
			loading($text);
		},500);
	}

	var id;
	var url;
	var text;
	var $post;
	$('a[href^="item?"]').live("click",function(e) {
		e.preventDefault();
		id 		= $(this).attr("data-id");
		if ($("#comments-"+id).html()) {
//			$("#comments-"+id).remove();
			$link.html($link.attr("data-value")+" (show)");			
		} else {
			loading($(this));
			link 	= $(this).attr("href");
			$link 	= $(this);
			$.ajax({
				accepts: "text/html",
				url : link
			}).success(function(html) {
				$link.html($link.attr("data-value")+" (hide)");
				clearTimeout(to);
				html = $(html).find('td:eq(4)').find('table:eq(1)').outerHTML();
				text=	"<tr style='padding-top:10px;'>"+
							"<td colspan='2'></td>"+
							"<td style='padding-right:20px;padding-top:10px;'>"+
								'<div class="replyform" style="width:300px;height:100px;position:relative;">'+
									'<textarea rows="4" cols="60" style="height:60px;" />'+
									'<input type ="submit" value="Comment" class="rbutton" data-id="'+id+'" data-value="Comment" data="'+link+'" style="position:absolute;bottom:5px;left:0px;" />'+
								'</div>'+
							"</td>"+
						"</tr>"+
						"<tr>"+
							"<td colspan='2'></td>"+
							"<td style='padding-right:20px;'>"+html+"</td>"+
						"</tr>";
//				$("#comments-"+id).remove();
				$("#comments-"+id).html(text);
				$("#comments-"+id).next().find("textarea").focus();
				$("#comments-"+id).find('a[href^="reply?"]').each(function() {
					$(this).attr("data-id",id);
				});
			});			
		}
	});

	$('a[href^="reply?"]').live("click",function(e) {
		e.preventDefault();
		$(this).hide();
		id = $(this).attr("data-id");		
		link = 'http://news.ycombinator.com/' + $(this).attr('href');
		$(this).after(
			'<div class="replyform" style="width:300px;height:100px;position:relative;"> \
			<textarea rows="4" cols="60" style="height:60px;" /> \
			<input type ="submit" value="Reply" class="rbutton" data-id="'+id+'" data-value="Reply" data="'+link+'" \
			 style="position:absolute;bottom:0px;left:0px;" /> \
			</div>'
		);
		$(this).next().find("textarea").focus();
	});

	$('.rbutton').live('click', function(e) {
		e.preventDefault();
		id 		= $(this).attr('data-id');
		link 	= $(this).attr('data');
		text 	= $(this).prev().val();
		$(this).val("Sending...");
		postCommentTo(link, text, id);
	});

	function postCommentTo(link, text, id) {
		$.ajax({
			accepts: "text/html",
			url : link
		}).success(function(html) {
			input = $(html).find('input');
			fnid = input.attr('value');
			sendComment(fnid, text, id);
		});
	}

	var postLoc = "http://news.ycombinator.com/r";
	function sendComment(fnidarg, textarg, id) {
		$.post(
			postLoc, 
			{fnid : fnidarg, text: textarg }
		).complete(function(a) {
//			$("#comments-"+id).remove();
			$("#link-"+id).click();
		});
	}
	
});