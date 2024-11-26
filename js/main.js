// jsを記述する際はここに記載していく
$(function () {
  $(".init-target").each(function () {
    $(this).addClass("finished");
  });

  // スクロール時の処理
  $(window).scroll(function () {
    // 対象要素に初期状態のスタイルを付与
    $(".scroll-target").addClass("ready");
    // ウィンドウの高さを取得
    const windowHeight = $(this).height();
    const windowWidth = $(this).width();
    // 現在の座標を取得
    const scrollAmount = $(this).scrollTop();
    // 横スクロールを感知
    var scrollLeft = $(this).scrollLeft();

    $(".ready").each(function () {
      // 対象要素の座標を取得
      const targetPosition = $(this).offset().top;

      if (scrollAmount > targetPosition - windowHeight + 60) {
        $(this).removeClass("ready");
        $(this).addClass("finished");
      }
    });
    });
});

// SPメニュー　ハンバーガー
$(function () {
  // PCは処理を終了
  if ($('.pc').css('display') != 'block') {

    // スクロールイベント
    $(window).on('scroll', function () {
      // スクロール量を取得
      const scroll = $(window).scrollTop();
      // 画面の高さを取得
      const windowHeight = $(window).height();
    });

    let scrollPos;//topからのスクロール位置

    function openMenu () {
      $('.menu-btn').toggleClass('active');//ボタン自身に activeクラスを付与し
      $('.menu-btn').parent().toggleClass('active');//ボタン自身に activeクラスを付与し
      $('.menu__outer').toggleClass('bg-active');//ナビにpanel-activeクラスを付与
      $('body').css('overflow', 'hidden');

      if ($('.menu-btn').hasClass('active')) {//もしボタンにactiveクラスが付いていれば
        scrollPos = $(window).scrollTop();//topからのスクロール位置を取得

      } else {//もしボタンにactiveクラスが無ければ
        $(window).scrollTop(scrollPos);//元の位置までスクロール
      }
    }

    function closeMenu () {
      $('.menu-btn').removeClass('active');//ボタンからactiveクラスを剥奪
      $('.menu-btn').parent().removeClass('active');//ボタンからactiveクラスを剥奪
      $('.menu__outer').removeClass('bg-active');//ナビからpanel-activeクラスを剥奪
      $('body').css('overflow', 'auto');
      $(window).scrollTop(scrollPos);//元の位置までスクロール
    }

    function closeMenuAnchorLink () {
      const currentPathName = location.pathname;
      const menuLinks = $('.menu-item a');

      if (menuLinks.length === 0 || !currentPathName) return;

      menuLinks.each(function () {
        const href = new URL(this.href);
        if (currentPathName === href.pathname && href.hash) {
          $(this).on('click', function () {
            closeMenu();
          });
        }
      });
    }

    closeMenuAnchorLink();

    $('.menu-btn').on('click', function () {
      if (!$(this).hasClass('active')) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  };
});

// メニュー遷移位置調整
$(function () {
  const windowWidth = $(window).width();
  var headerHeight; // ヘッダーの高さの初期値
  if ($('.sp').css('display') != 'block') {
    headerHeight = 142;
  } else {
    headerHeight = (96 / 750 * windowWidth);
  }
  // メニュークリック時のスクロール処理
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href === "#" || href === "" ? "html" : href);

    var position = target.offset().top - headerHeight;
    console.log(position);

    $("html, body").animate({
      scrollTop: position
    }, 500, "swing");

    return false;
  });
});

// スライダー
$(function () {
  $('#about-slider').slick({
    arrows: false, // 前・次のボタンを表示しない
    dots: false, // ドットナビゲーションを表示しない
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000, // スライドさせるスピード（ミリ秒）
    cssEase: 'linear',
    slidesToShow: 1, // 表示させるスライド数
    variableWidth: true, // スライド幅の自動計算を無効化
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
  });
});