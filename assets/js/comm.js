$(function () {
  const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
  let options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(37.7509186, 127.2283134), //지도의 중심좌표.
    level: 4, //지도의 레벨(확대, 축소 정도)
  };

  let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

  // 지도에 마커를 표시합니다
  let marker = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(37.7509186, 127.2283134),
  });

  // 커스텀 오버레이에 표시할 컨텐츠 입니다
  // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
  // 별도의 이벤트 메소드를 제공하지 않습니다
  var content =
    '<div class="map">' +
    '    <div class="info">' +
    '        <div class="title">' +
    "            케이패키지 1공장" +
    '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
    "        </div>" +
    '        <div class="body">' +
    '            <div class="img">' +
    '                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">' +
    "           </div>" +
    '            <div class="desc">' +
    '                <div class="ellipsis">경기 남양주시 진접읍 팔야로 160-43</div>' +
    '                <div class="jibun ellipsis">(우) 12017 (지번) 팔야리 132-11</div>' +
    '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
    "            </div>" +
    "        </div>" +
    "    </div>" +
    "</div>";

  // 마커 위에 커스텀오버레이를 표시합니다
  // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
  var overlay = new kakao.maps.CustomOverlay({
    content: content,
    map: map,
    position: marker.getPosition(),
  });

  // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
  kakao.maps.event.addListener(marker, "click", function () {
    overlay.setMap(map);
  });

  // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
  function closeOverlay() {
    overlay.setMap(null);
  }
  // purecounter.js-------------------------------------------------
  new PureCounter({ selector: ".purecounter", separator: true });

  // swiper.js------------------------------------------------------
  let swiper = new Swiper(".mySwiper", {
    initialSlide: 2,
    direction: "vertical",
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    fadeEffect: {
      crossFade: true,
    },
    coverflowEffect: {
      rotate: 28,
      stretch: -31,
      depth: 380,
      modifier: 0.7,
      slideShadows: true,
    },
    autoplay: true,

    // eventlistener 이벤트리스너 등록
    on: {
      slideChange: function () {
        updateActiveSlideIcon();
      },
    },
  });

  // swiper-slide-active의 icon 색상 바꾸기
  function updateActiveSlideIcon() {
    let swiperSlideArray = Array.from(
      document.querySelectorAll(".swiper-slide")
    );
    // 아이콘 색상 초기화
    swiperSlideArray.forEach((slide) => {
      let swiperIcon = slide.querySelector(".fa-circle-check");
      if (swiperIcon) {
        swiperIcon.style.color = "#494949";
      }
    });
    // active된 슬라이드의 아이콘 색상 변경
    let swiperActive = document.querySelector(".swiper-slide-next");
    if (swiperActive) {
      let swiperIcon = swiperActive.querySelector(".fa-circle-check");
      if (swiperIcon) {
        swiperIcon.style.color = "#a1c9de";
      }
    }
  }
  // 초기 로드 시에 아이콘 색상 업데이트
  // updateActiveSlideIcon();

  // let swiperActive = document.querySelector(".swiper-slide-active");

  // for (i = 0; i < swiperSlideArray.length; i++) {
  //   // console.log(swiperSlideArray[i]);
  //   if (swiperSlideArray[i].classList.contains("swiper-slide-active")) {
  //     let swiperIcon = swiperSlideArray[i].querySelector(".fa-circle-check");
  //     swiperIcon.style.color = "#a1c9de";
  //   }
  // }

  // MDB tabs
  const triggerTabList = document.querySelectorAll("#ex1 a");
  triggerTabList.forEach((triggerEl) => {
    const tabTrigger = new bootstrap.Tab(triggerEl);

    triggerEl.addEventListener("click", (event) => {
      event.preventDefault();
      tabTrigger.show();
    });
  });
});
//
