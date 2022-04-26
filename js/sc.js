
var urlTotal,nextPageToken,postsDatePrefix=!1,accessOnly=!1,useApiV3=!1,apiKey="",blogId="",postsOrPages=["pages","posts"],jsonIndex=1,secondRequest=!0,feedPriority=0,amp="&"[0];function urlVal(){var e=window.location.pathname,t=e.length;return".html"===e.substring(t-5)?0:t>1?1:2}function urlMod(){var e=window.location.pathname;"p"===e.substring(1,2)?(e=(e=e.substring(e.indexOf("/",1)+1)).substr(0,e.indexOf(".html")),history.replaceState(null,null,"../"+e)):(e=(e=postsDatePrefix?e.substring(1):e.substring(e.indexOf("/",7)+1)).substr(0,e.indexOf(".html")),history.replaceState(null,null,"../../"+e))}function urlSearch(e,t){var n=e+".html";t.forEach(function(e){-1!==e.search(n)&&(window.location=e)})}function urlManager(){var e=urlVal();0===e?accessOnly||urlMod():1===e?getJSON(postsOrPages[feedPriority],1):2===e&&(accessOnly||history.replaceState(null,null,"/"))}function getJSON(e,t){var n=document.createElement("script");if(useApiV3){var o="https://www.googleapis.com/blogger/v3/blogs/"+blogId+"/"+e+"?key="+apiKey+"#maxResults=500#fields=nextPageToken%2Citems(url)#callback=bloggerJSON";nextPageToken&&(o+="#pageToken="+nextPageToken),nextPageToken=void 0}else o=window.location.protocol+"//"+window.location.hostname+"/feeds/"+e+"/default?start-index="+t+"#max-results=150#orderby=published#alt=json-in-script#callback=bloggerJSON";o=o.replace(/#/g,amp),n.type="text/javascript",n.src=o,document.getElementsByTagName("head")[0].appendChild(n)}function bloggerJSON(e){var t=[];if(useApiV3||void 0===urlTotal&&(urlTotal=parseInt(e.feed.openSearch$totalResults.$t)),useApiV3){try{e.items.forEach(function(e,n){t.push(e.url)})}catch(e){}nextPageToken=e.nextPageToken}else try{e.feed.entry.forEach(function(n,o){var r=e.feed.entry[o];r.link.forEach(function(e,n){"alternate"===r.link[n].rel&&t.push(r.link[n].href)})})}catch(e){}urlSearch(window.location.pathname,t),urlTotal>150?(jsonIndex+=150,urlTotal-=150,getJSON(postsOrPages[feedPriority],jsonIndex)):nextPageToken?getJSON(postsOrPages[feedPriority]):secondRequest&&(nextPageToken=void 0,urlTotal=void 0,jsonIndex=1,secondRequest=!1,0===feedPriority?(feedPriority=1,getJSON("posts",1)):1===feedPriority&&(feedPriority=0,getJSON("pages",1)))}function bloggerJS(e){e&&(feedPriority=e),urlManager()}bloggerJS();

<!-- Resizing Font -->

$(document).ready(function() {
  var resize = new Array('p', '#story-content', '.resizable');
  resize = resize.join(',');

  //resets the font size when "reset" is clicked
  var resetFont = $(resize).css('font-size');
  $(".reset").click(function() {
    $(resize).css('font-size', resetFont);
  });

  //increases font size when "+" is clicked
  $(".increase").click(function() {
    var originalFontSize = $(resize).css('font-size');
    var originalFontNumber = parseFloat(originalFontSize, 10);
    var newFontSize = originalFontNumber * 1.2;
    $(resize).css('font-size', newFontSize);
    return false;
  });

  //decrease font size when "-" is clicked

  $(".decrease").click(function() {
    var originalFontSize = $(resize).css('font-size');
    var originalFontNumber = parseFloat(originalFontSize, 10);
    var newFontSize = originalFontNumber * 0.8;
    $(resize).css('font-size', newFontSize);
    return false;
  });

});


<!-- spoiler -->
function btn_chapter(spoiler,btn) {
  if(document.getElementById(spoiler).style.display == "")
  {
  document.getElementById(spoiler).style.display = "none"
  document.getElementById (btn). className = "buttonChapter";
  }else
  {
  document.getElementById(spoiler).style.display = ""
  document.getElementById (btn). className = "buttonChapterClicked";
  }
}


