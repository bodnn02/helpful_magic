$(".articles-list_scroll__before-btn").click(function () {
    let gallery = $(this).parent();
    if(gallery.attr("current-page") == "0")
    {
        gallery.children("articles-list_scroll__before-btn").show();
        gallery.children("articles-list_scroll__next-btn").hide();
        gallery.attr("current-page", parseInt(gallery.children("li").length)/3);
        gallery.css("margin-left", (parseInt(gallery.attr("current-page"))*100*(-1) + "%"));
    } else {
        gallery.attr("current-page",parseInt(gallery.attr("current-page"))-1);
        gallery.css("margin-left", (parseInt(gallery.attr("current-page"))*100*(-1) + "%"));
    }
});
$(".articles-list_scroll__next-btn").click(function () {
    let gallery = $(this).parent();
    if(gallery.attr("current-page") >= (parseInt(gallery.children("li").length)/3) - 1 )
    {
        gallery.children("articles-list_scroll__before-btn").hide();
        gallery.children("articles-list_scroll__next-btn").show();
        gallery.attr("current-page","0");
        gallery.css("margin-left", (parseInt(gallery.attr("current-page"))*100*(-1) + "%"));
    } else {
        gallery.attr("current-page",parseInt(gallery.attr("current-page"))+1);
        gallery.css("margin-left", (parseInt(gallery.attr("current-page"))*100*(-1) + "%"));
    }
});