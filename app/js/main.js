// menu scroll
document.querySelectorAll(".menu a, #popup-menu a").forEach((link) => {
  link.addEventListener("click", function (e) {
    document.getElementById("popup-menu").classList.remove("active");
    document.querySelector(".burger").classList.remove("active");
    document.querySelector("body").classList.toggle("noscroll");
    e.preventDefault();

    let href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 0;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

//menu sticky
if (document.querySelector(".header")) {
  // инициализируем top Navigation
  const topNavigation = document.querySelector(".header");
  // попап меню - блок
  const popupMenu = document.getElementById("popup-menu");
  // Функция добавляет класс элементу в зависимости от координат окна
  function checkСoordinatesElem(elem) {
    // запуск функции по движению скролла
    window.addEventListener("scroll", function () {
      // инициализируем координаты окна по Y
      const coordWindow = window.scrollY;
      // если координаты окна больше 80, то добавляем класс, иначе - нет
      coordWindow > 0
        ? (elem.classList.add("active"), popupMenu.classList.add("top-scroll"))
        : (elem.classList.remove("active"),
          popupMenu.classList.remove("top-scroll"));
    });
  }

  checkСoordinatesElem(topNavigation);
}

// menu
if (document.querySelector("#popup-menu")) {
  // бургер
  const burger = document.querySelector(".burger");
  // body
  const body = document.querySelector("body");
  // попап меню - блок
  const popupMenu = document.getElementById("popup-menu");

  // при клике на бургер выполняются действия
  burger.addEventListener("click", () => {
    // добавяем/удаляем класс active у элемента
    popupMenu.classList.toggle("active");
    // добавяем/удаляем класс active бургеру
    burger.classList.toggle("active");
    // добавяем/удаляем класс noscroll у body
    body.classList.toggle("noscroll");
  });
}

//lazyload
if (document.querySelector("img[data-src]")) {
  //lazyload
  let images = document.querySelectorAll("img[data-src]");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  function handleImg(myImg, observer) {
    myImg.forEach((myImgSingle) => {
      if (myImgSingle.intersectionRatio > 0) {
        loadImage(myImgSingle.target);
      }
    });
  }

  function loadImage(image) {
    image.src = image.getAttribute("data-src");
  }

  const observer = new IntersectionObserver(handleImg, options);

  images.forEach((img) => {
    observer.observe(img);
  });
}

// map
if (document.querySelector("#map")) {
  initMap();

  async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

    const map = new YMap(document.getElementById("map"), {
      location: {
        center: [34.11379250000001, 44.947650204413435],
        zoom: 10,
      },
    });
    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());
  }
}

// user-nav

if (document.querySelector(".user-block")) {
  const userBlock = document.querySelector(".user-block");
  const userNav = document.querySelector(".user-nav");

  userBlock.addEventListener("click", function () {
    userNav.classList.toggle("show");
  });

  document.addEventListener("click", function (e) {
    if (!e.target.classList.contains("user-block")){
      userNav.classList.remove("show");
    }
  });
}
