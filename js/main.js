$(".select__title").click(function (e) {
  $(this).parent().toggleClass("active");
});
$(document).mouseup(function (e) {
  var container = $(".select.active");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.removeClass("active");
  }
});
$(".sub-list__item").click(function (e) {
  if (!$(this).parent().parent().parent().hasClass("single")) {
    $(this).toggleClass("selected");
  } else {
    $(this).parent().children(".selected").removeClass("selected");
    $(this).addClass("selected");
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".select__title")
      .text($(this).text());
  }
});
$(".input")
  .children("input")
  .on("input", function (e) {
    if ($(this).val().length != 0) {
      $(this).parent().addClass("focus");
    } else {
      $(this).parent().removeClass("focus");
    }
  });

$(".property-gallery__item").click(function (e) {
  $(".overlay").addClass("opened");
  lockScroll();
  $(".gallery-overlay").addClass("opened");
});
$(".close").click(function (e) {
  $(".overlay").removeClass("opened");
  unlockScroll();
  $(this).parent().parent().removeClass("opened");
});
$(".gallery-overlay__item").click(function (e) {
  $(".gallery-overlay__h2").text(
    $(this).index() +
      1 +
      "/" +
      $(".gallery-overlay__list").children(".gallery-overlay__item").length
  );
  $(this).parent().children(".gallery-overlay__item").removeClass("selected");
  $(this).addClass("selected");
  $(".gallery-overlay__current-image").attr(
    "src",
    $(this).children("img").attr("src")
  );
});
$(".gallery-overlay__next-btn").click(function () {
  // Находим текущий выбранный элемент в списке gallery-overlay__list
  var current = $(".gallery-overlay__list .selected");
  // Находим следующий элемент в списке или первый, если текущий последний
  var next = current.next().length
    ? current.next()
    : $(".gallery-overlay__list li:first");
  // Убираем класс selected у текущего элемента
  current.removeClass("selected");
  // Добавляем класс selected к следующему элементу
  next.addClass("selected");
  // Получаем src изображения следующего элемента
  var src = next.find("img").attr("src");
  // Заменяем src изображения gallery-overlay__current-image на src следующего элемента
  $(".gallery-overlay__current-image").attr("src", src);

  $(".gallery-overlay__h2").text(
    $(".gallery-overlay__list .selected").index() +
      1 +
      "/" +
      $(".gallery-overlay__list").children(".gallery-overlay__item").length
  );
});
$(".gallery-overlay__prev-btn").click(function () {
  // Находим текущий выбранный элемент в списке gallery-overlay__list
  var current = $(".gallery-overlay__list .selected");
  // Находим предыдущий элемент в списке или последний, если текущий первый
  var prev = current.prev().length
    ? current.prev()
    : $(".gallery-overlay__list li:last");
  // Убираем класс selected у текущего элемента
  current.removeClass("selected");
  // Добавляем класс selected к предыдущему элементу
  prev.addClass("selected");
  // Получаем src изображения предыдущего элемента
  var src = prev.find("img").attr("src");
  // Заменяем src изображения gallery-overlay__current-image на src предыдущего элемента
  $(".gallery-overlay__current-image").attr("src", src);

  $(".gallery-overlay__h2").text(
    $(".gallery-overlay__list .selected").index() +
      1 +
      "/" +
      $(".gallery-overlay__list").children(".gallery-overlay__item").length
  );
});
$(".gallery-overlay__current-image").swipe({
  swipe: function (
    event,
    direction,
    distance,
    duration,
    fingerCount,
    fingerData
  ) {
    if (direction == "left") {
      // Находим текущий выбранный элемент в списке gallery-overlay__list
      var current = $(".gallery-overlay__list .selected");
      // Находим следующий элемент в списке или первый, если текущий последний
      var next = current.next().length
        ? current.next()
        : $(".gallery-overlay__list li:first");
      // Убираем класс selected у текущего элемента
      current.removeClass("selected");
      // Добавляем класс selected к следующему элементу
      next.addClass("selected");
      // Получаем src изображения следующего элемента
      var src = next.find("img").attr("src");
      // Заменяем src изображения gallery-overlay__current-image на src следующего элемента
      $(".gallery-overlay__current-image").attr("src", src);

      $(".gallery-overlay__h2").text(
        $(".gallery-overlay__list .selected").index() +
          1 +
          "/" +
          $(".gallery-overlay__list").children(".gallery-overlay__item").length
      );
    }
    if (direction == "right") {
      // Находим текущий выбранный элемент в списке gallery-overlay__list
      var current = $(".gallery-overlay__list .selected");
      // Находим предыдущий элемент в списке или последний, если текущий первый
      var prev = current.prev().length
        ? current.prev()
        : $(".gallery-overlay__list li:last");
      // Убираем класс selected у текущего элемента
      current.removeClass("selected");
      // Добавляем класс selected к предыдущему элементу
      prev.addClass("selected");
      // Получаем src изображения предыдущего элемента
      var src = prev.find("img").attr("src");
      // Заменяем src изображения gallery-overlay__current-image на src предыдущего элемента
      $(".gallery-overlay__current-image").attr("src", src);

      $(".gallery-overlay__h2").text(
        $(".gallery-overlay__list .selected").index() +
          1 +
          "/" +
          $(".gallery-overlay__list").children(".gallery-overlay__item").length
      );
    }
  },
});
$(".property-services__add-btn").click(function (e) {
  // Находим родителя кнопки
  var parent = $(this).parent();
  // Находим элементы с классами property-services__title и property-services__text внутри родителя
  var title = parent.parent().find(".property-services__title").text();
  var price = parent.parent().find(".property-services__price").text();
  // Создаем новый элемент li с нужной структурой и заполняем его текстом
  var li = $(
    "<li class='additional-summary__item' data-label='" +
      title +
      "'><span>" +
      title +
      "</span><span>" +
      price +
      "</span></li>"
  );

  var summaryList = $(".additional-summary__list");

  if (!$(this).parent().parent().parent().hasClass("added")) {
    $(this).text("Удалить");
    $(this).parent().parent().parent().addClass("added");
    li.appendTo(summaryList);
  } else {
    $(this).text("Добавить");
    $(this).parent().parent().parent().removeClass("added");
    $("li[data-label='" + title + "']").remove();
  }
  if ($(".additional-summary__list").children("li").length == 0) {
    $(".additional-summary").hide();
  } else {
    $(".additional-summary").show();
  }

  reloadjs();

  var elements = $(".additional-summary__list").children(
    ".additional-summary__item"
  );
  console.log(elements);
  var sum = 0;

  elements.each(function () {
    var span = $(this).find("span");

    var number = Number(span.text());
    console.log(sum);
    if (isFinite(number)) {
      sum += number;
      console.log(sum);
    }
  });
  $(".additional-summary__header > span:last-child").text(sum + " AED");
});

$(".additional-summary__header").click(function (e) {
  $(this).toggleClass("expanded");
});
/* Section paggination *Start* */

$(".section-nav__next").click(function (e) {
  let list = $(this).parent().parent().parent().find("ul");
  let count = list.children("li").length;
  let index = list.children(".active").index();

  if (index != count - 1) {
    list.children(".active").removeClass("active");
    list
      .children("li")
      .eq(index + 1)
      .addClass("active");
  } else {
    list.children(".active").removeClass("active");
    list.children("li").eq(0).addClass("active");
  }
});
$(".section-nav__prev").click(function (e) {
  let list = $(this).parent().parent().parent().find("ul");
  let count = list.children("li").length;
  let index = list.children(".active").index();

  if (index != 0) {
    list.children(".active").removeClass("active");
    list
      .children("li")
      .eq(index - 1)
      .addClass("active");
  } else {
    list.children(".active").removeClass("active");
    list
      .children("li")
      .eq(count - 1)
      .addClass("active");
  }
});

/* Section paggination *Stop* */

function reloadjs() {
  $(".property-services__add-btn").off("click");
  $(".reloadjs").remove();
  $(document).ready(function () {
    $("body").append(
      "<script class='reloadjs' src='js/main.js?v=" + Date.now() + "'></script>"
    );
  });
}

/* Details *Start* */

$(".details").click(function (e) {
  $(this).toggleClass("expanded");
});

/* Details *Stop* */

function lockScroll() {
  var scrollPosition = [
    self.pageXOffset ||
      document.documentElement.scrollLeft ||
      document.body.scrollLeft,
    self.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop,
  ];
  var html = jQuery("html"); // it would make more sense to apply this to body, but IE7 won't have that
  html.data("scroll-position", scrollPosition);
  html.data("previous-overflow", html.css("overflow"));
  html.css("overflow", "hidden");
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
}

function unlockScroll() {
  var html = jQuery("html");
  var scrollPosition = html.data("scroll-position");
  html.css("overflow", html.data("previous-overflow"));
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
}

$(".apart-list__preview").swipe({
  swipe: function (
    event,
    direction,
    distance,
    duration,
    fingerCount,
    fingerData
  ) {
    var index = $(this).children(".active").index();

    var progress = $(this).parent().find(".apart-list__nav");

    if (direction == "left") {
      if (index != $(this).children("img").length - 1) {
        progress.children(".apart-list__nav-item").removeClass("selected");
        progress
          .children(".apart-list__nav-item")
          .eq(index + 1)
          .addClass("selected");

        $(this).children("img").removeClass("active");
        $(this)
          .children("img")
          .eq(index + 1)
          .addClass("active");
      } else {
        progress.children(".apart-list__nav-item").removeClass("selected");
        progress.children(".apart-list__nav-item").eq(0).addClass("selected");
        $(this).children("img").removeClass("active");
        $(this).children("img").eq(0).addClass("active");
      }
    }
    if (direction == "right") {
      if (index != $(this).children("img").length) {
        progress.children(".apart-list__nav-item").removeClass("selected");
        progress
          .children(".apart-list__nav-item")
          .eq(index - 1)
          .addClass("selected");

        $(this).children("img").removeClass("active");
        $(this)
          .children("img")
          .eq(index - 1)
          .addClass("active");
      } else {
        progress.children(".apart-list__nav-item").removeClass("selected");
        progress
          .children(".apart-list__nav-item")
          .eq($(this).children("img").length - 1)
          .addClass("selected");

        $(this).children("img").removeClass("active");
        $(this)
          .children("img")
          .eq(index - 1)
          .addClass("active");
      }
    }
  },
});

$(".mm-btn").click(function (e) {
  if ($(".m-menu").hasClass("opened")) {
    unlockScroll();
    $(".m-menu").removeClass("opened");
  } else {
    lockScroll();
    $(".m-menu").addClass("opened");
  }
});

$(".video-wrapper").click(function () {
  var video = $(this).find(".video");
  var button = $(this).find(".play-btn");
  // Проверяем, проигрывается ли видео или нет
  if (video.get(0).paused) {
    // Если нет, то запускаем его
    video.get(0).play();
    button.fadeOut();
  } else {
    // Если да, то останавливаем его
    video.get(0).pause();
    button.fadeIn();
  }
});

$(".mm-filters__header").click(function () {
  $(".filters-menu").addClass("opened");
  lockScroll();
});
$(".filters-menu__close").click(function () {
  $(".filters-menu").removeClass("opened");
  unlockScroll();
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".header").addClass("scrolled");
  } else {
    $(".header").removeClass("scrolled");
  }
});

$(".paggination-ul").swipe({
  swipe: function (
    event,
    direction,
    distance,
    duration,
    fingerCount,
    fingerData
  ) {
    let list = $(this);
    let count = list.children("li").length;
    let index = list.children(".active").index();

    if (direction == "left") {
      if (index != count - 1) {
        list.children(".active").removeClass("active");
        list
          .children("li")
          .eq(index + 1)
          .addClass("active");
      } else {
        list.children(".active").removeClass("active");
        list.children("li").eq(0).addClass("active");
      }
    }
    if (direction == "right") {
      if (index != 0) {
        list.children(".active").removeClass("active");
        list
          .children("li")
          .eq(index - 1)
          .addClass("active");
      } else {
        list.children(".active").removeClass("active");
        list
          .children("li")
          .eq(count - 1)
          .addClass("active");
      }
    }
  },
});