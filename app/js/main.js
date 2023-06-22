function changeCardImg() {
  const cardImgSelector = document.getElementById("cardImg");
  const mobileVersion = window.matchMedia("(max-width: 767px)").matches;

  if (mobileVersion) {
    cardImgSelector.src = "./images/image-product-mobile.jpg";
  } else {
    cardImgSelector.src = "./images/image-product-desktop.jpg";
  }
}

changeCardImg();