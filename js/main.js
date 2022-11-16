$(".articles-list_scroll__before-btn").click(function () {
    let gallery = $(this).parent();
    if(gallery.attr("current-page") == "0")
    {
        gallery.attr("current-page", gallery.children("li").length);
        gallery.css("margin-left", (parseInt(gallery.attr("current-page"))*100*(-1) + "%"));
    } else {
        gallery.attr("current-page",parseInt(gallery.attr("current-page"))-1);
        gallery.css("margin-left", (parseInt(gallery.attr("current-page"))*100*(-1) + "%"));
    }
});
$(".articles-list_scroll__next-btn").click(function () {
    let gallery = $(this).parent();
    if(gallery.attr("current-page") == gallery.children("li").length)
    {
        gallery.attr("current-page","0");
        gallery.css("margin-left", (parseInt(gallery.attr("current-page"))*100*(-1) + "%"));
    } else {
        gallery.attr("current-page",parseInt(gallery.attr("current-page"))+1);
        gallery.css("margin-left", (parseInt(gallery.attr("current-page"))*100*(-1) + "%"));
    }
});