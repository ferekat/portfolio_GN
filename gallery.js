var images = document.getElementsByClassName("row")[0];
const json = [
  {
    "id": "image0",
    "src": "portfolio/image0.jpg",
    "onclick": "openModal();currentSlide(1)",
    "class": "hover-shadow",
    "width": "20%",
    "top": "15%",
    "left": "5%",
    "gal_width": "29%",
    "gal_left": "35.5%",
    "mobile_width":"50%",
    "mobile_left":"25%",
    "mobile_top":"10%",
    "mobile_width_gal":"70%",
    "mobile_left_gal":"15%",
    "mobile_top_gal":"auto"
  },
  {
    "id": "image1",
    "src": "portfolio/image1.jpg",
    "onclick": "openModal();currentSlide(2)",
    "class": "hover-shadow",
    "width": "35%",
    "top": "22%",
    "left": "32%",
    "gal_width": "63%",
    "gal_left": "18.5%",
    "mobile_width":"70%",
    "mobile_left":"15%",
    "mobile_top":"65%",
    "mobile_width_gal":"85%",
    "mobile_left_gal":"7.5%",
    "mobile_top_gal":"30%"
  },
  {
    "id": "image2",
    "src": "portfolio/image2.jpg",
    "onclick": "openModal();currentSlide(3)",
    "class": "hover-shadow",
    "width": "20.5%",
    "top": "15%",
    "left": "74%",
    "gal_width": "30%",
    "gal_left": "35%",
    "mobile_width":"50%",
    "mobile_left":"25%",
    "mobile_top":"105%",
    "mobile_width_gal":"70%",
    "mobile_left_gal":"15%",
    "mobile_top_gal":"auto"
  },
  {
    "id": "image3",
    "src": "portfolio/image3.jpg",
    "onclick": "openModal();currentSlide(4)",
    "class": "hover-shadow",
    "width": "30%",
    "top": "110%",
    "left": "5%",
    "gal_width": "55%",
    "gal_left": "22.5%",
    "mobile_width":"70%",
    "mobile_left":"15%",
    "mobile_top":"160%",
    "mobile_width_gal":"80%",
    "mobile_left_gal":"10%",
    "mobile_top_gal":"auto"
  },
  {
    "id": "image4",
    "src": "portfolio/image4.jpg",
    "onclick": "openModal();currentSlide(6)",
    "class": "hover-shadow",
    "width": "20.5%",
    "top": "100%",
    "left": "39%",
    "gal_width": "29%",
    "gal_left": "35.5%",
    "mobile_width":"50%",
    "mobile_left":"25%",
    "mobile_top":"205%",
    "mobile_width_gal":"70%",
    "mobile_left_gal":"15%",
    "mobile_top_gal":"auto"
  },
  {
    "id": "image5",
    "src": "portfolio/image5.jpg",
    "onclick": "openModal();currentSlide(5)",
    "class": "hover-shadow",
    "width": "34%",
    "top": "110%",
    "left": "63%",
    "gal_width": "66%",
    "gal_left": "18%",
    "mobile_width":"70%",
    "mobile_left":"15%",
    "mobile_top":"260%",
    "mobile_width_gal":"85%",
    "mobile_left_gal":"7.5%",
    "mobile_top_gal":"30%"
  },
  {
    "id": "image6",
    "src": "portfolio/image6.jpg",
    "onclick": "openModal();currentSlide(7)",
    "class": "hover-shadow",
    "width": "25%",
    "top": "190%",
    "left": "5%",
    "gal_width": "37%",
    "gal_left": "31.5%",
    "mobile_width":"55%",
    "mobile_left":"22.5%",
    "mobile_top":"300%",
    "mobile_width_gal":"80%",
    "mobile_left_gal":"10%",
    "mobile_top_gal":"auto"
  },
  {
    "id": "image7",
    "src": "portfolio/image7.jpg",
    "onclick": "openModal();currentSlide(8)",
    "class": "hover-shadow",
    "width": "34%",
    "top": "197%",
    "left": "35%",
    "gal_width": "66%",
    "gal_left": "18%",
    "mobile_width":"70%",
    "mobile_left":"15%",
    "mobile_top":"350%",
    "mobile_width_gal":"85%",
    "mobile_left_gal":"7.5%",
    "mobile_top_gal":"30%"
  },
  {
    "id": "image8",
    "src": "portfolio/image8.jpg",
    "onclick": "openModal();currentSlide(9)",
    "class": "hover-shadow",
    "width": "20.5%",
    "top": "190%",
    "left": "74%",
    "gal_width": "29%",
    "gal_left": "35.5%",
    "mobile_width":"50%",
    "mobile_left":"25%",
    "mobile_top":"390%",
    "mobile_width_gal":"70%",
    "mobile_left_gal":"15%",
    "mobile_top_gal":"auto"
  },
  {
    "id": "image9",
    "src": "portfolio/image9.jpg",
    "onclick": "openModal();currentSlide(10)",
    "class": "hover-shadow",
    "width": "20%",
    "top": "280%",
    "left": "5%",
    "gal_width": "29%",
    "gal_left": "35.5%",
    "mobile_width":"50%",
    "mobile_left":"25%",
    "mobile_top":"445%",
    "mobile_width_gal":"70%",
    "mobile_left_gal":"15%",
    "mobile_top_gal":"auto"
  },
  {
    "id": "image10",
    "src": "portfolio/image10.jpg",
    "onclick": "openModal();currentSlide(11)",
    "class": "hover-shadow",
    "width": "20%",
    "top": "280%",
    "left": "40%",
    "gal_width": "29%",
    "gal_left": "35.5%",
    "mobile_width":"50%",
    "mobile_left":"25%",
    "mobile_top":"500%",
    "mobile_width_gal":"70%",
    "mobile_left_gal":"15%",
    "mobile_top_gal":"auto"
  },
  {
    "id": "image11",
    "src": "portfolio/image11.jpg",
    "onclick": "openModal();currentSlide(12)",
    "class": "hover-shadow",
    "width": "20%",
    "top": "280%",
    "left": "74%",
    "gal_width": "29%",
    "gal_left": "35.5%",
    "mobile_width":"50%",
    "mobile_left":"25%",
    "mobile_top":"555%",
    "mobile_width_gal":"70%",
    "mobile_left_gal":"15%",
    "mobile_top_gal":"auto"
  },
  {
    "id": "image21",
    "src": "portfolio/image21.jpg",
    "onclick": "openModal();currentSlide(17)",
    "class": "hover-shadow",
    "width": "32%",
    "top": "377%",
    "left": "5%",
    "gal_width": "66%",
    "gal_left": "18%",
    "mobile_width":"70%",
    "mobile_left":"15%",
    "mobile_top":"610%",
    "mobile_width_gal":"85%",
    "mobile_left_gal":"7.5%",
    "mobile_top_gal":"30%"
  },
  {
    "id": "image22",
    "src": "portfolio/image22.jpg",
    "onclick": "openModal();currentSlide(17)",
    "class": "hover-shadow",
    "width": "20%",
    "top": "370%",
    "left": "41%",
    "gal_width": "29%",
    "gal_left": "35.5%",
    "mobile_width":"50%",
    "mobile_left":"25%",
    "mobile_top":"650%",
    "mobile_width_gal":"70%",
    "mobile_left_gal":"15%",
    "mobile_top_gal":"auto"
  },
  {
    "id": "image23",
    "src": "portfolio/image23.jpg",
    "onclick": "openModal();currentSlide(17)",
    "class": "hover-shadow",
    "width": "32%",
    "top": "377%",
    "left": "65%",
    "gal_width": "66%",
    "gal_left": "18%",
    "mobile_width":"70%",
    "mobile_left":"15%",
    "mobile_top":"705%",
    "mobile_width_gal":"85%",
    "mobile_left_gal":"7.5%",
    "mobile_top_gal":"30%"
  },
  {
    "id": "image12",
    "src": "portfolio/image12.jpg",
    "onclick": "openModal();currentSlide(13)",
    "class": "hover-shadow",
    "width": "25%",
    "top": "460%",
    "left": "5%",
    "gal_width": "66%",
    "gal_left": "18%",
    "mobile_width":"70%",
    "mobile_left":"15%",
    "mobile_top":"745%",
    "mobile_width_gal":"85%",
    "mobile_left_gal":"7.5%",
    "mobile_top_gal":"30%"
  },
  {
    "id": "image13",
    "src": "portfolio/image13.jpg",
    "onclick": "openModal();currentSlide(14)",
    "class": "hover-shadow",
    "width": "20%",
    "top": "445%",
    "left": "40%",
    "gal_width": "29%",
    "gal_left": "35.5%",
    "mobile_width":"50%",
    "mobile_left":"25%",
    "mobile_top":"785%",
    "mobile_width_gal":"70%",
    "mobile_left_gal":"15%",
    "mobile_top_gal":"auto"
  },
  {
    "id": "image14",
    "src": "portfolio/image14.jpg",
    "onclick": "openModal();currentSlide(15)",
    "class": "hover-shadow",
    "width": "23%",
    "top": "460%",
    "left": "70%",
    "gal_width": "56%",
    "gal_left": "22%",
    "mobile_width":"70%",
    "mobile_left":"15%",
    "mobile_top":"840%",
    "mobile_width_gal":"80%",
    "mobile_left_gal":"10%",
    "mobile_top_gal":"auto"
  },
  {
    "id": "image15",
    "src": "portfolio/image15.jpg",
    "onclick": "openModal();currentSlide(16)",
    "class": "hover-shadow",
    "width": "30%",
    "top": "525%",
    "left": "5%",
    "gal_width": "56%",
    "gal_left": "22%",
    "mobile_width":"70%",
    "mobile_left":"15%",
    "mobile_top":"885%",
    "mobile_width_gal":"85%",
    "mobile_left_gal":"7.5%",
    "mobile_top_gal":"30%"
  },
  {
    "id": "image16",
    "src": "portfolio/image16.jpg",
    "onclick": "openModal();currentSlide(17)",
    "class": "hover-shadow",
    "width": "15%",
    "top": "526%",
    "left": "42%",
    "gal_width": "29%",
    "gal_left": "35.5%",
    "mobile_width":"50%",
    "mobile_left":"25%",
    "mobile_top":"930%",
    "mobile_width_gal":"70%",
    "mobile_left_gal":"15%",
    "mobile_top_gal":"auto"
  },
  {
    "id": "image17",
    "src": "portfolio/image17.JPG",
    "onclick": "openModal();currentSlide(18)",
    "class": "hover-shadow",
    "width": "35%",
    "top": "525%",
    "left": "63%",
    "gal_width": "66%",
    "gal_left": "18%",
    "mobile_width":"70%",
    "mobile_left":"15%",
    "mobile_top":"985%",
    "mobile_width_gal":"85%",
    "mobile_left_gal":"7.5%",
    "mobile_top_gal":"30%"
  },
  {
    "id": "image20",
    "src": "portfolio/image20.jpg",
    "onclick": "openModal();currentSlide(12)",
    "class": "hover-shadow",
    "width": "20%",
    "top": "595%",
    "left": "5%",
    "gal_width": "30%",
    "gal_left": "35%",
    "mobile_width":"50%",
    "mobile_left":"25%",
    "mobile_top":"1025%",
    "mobile_width_gal":"70%",
    "mobile_left_gal":"15%",
    "mobile_top_gal":"auto"
  },
  {
    "id": "image19",
    "src": "portfolio/image19.jpg",
    "onclick": "openModal();currentSlide(12)",
    "class": "hover-shadow",
    "width": "35%",
    "top": "603%",
    "left": "31.5%",
    "gal_width": "66%",
    "gal_left": "18%",
    "mobile_width":"70%",
    "mobile_left":"15%",
    "mobile_top":"1080%",
    "mobile_width_gal":"85%",
    "mobile_left_gal":"7.5%",
    "mobile_top_gal":"30%"
  },
  {
    "id": "image18",
    "src": "portfolio/image18.jpg",
    "onclick": "openModal();currentSlide(12)",
    "class": "hover-shadow",
    "width": "22.5%",
    "top": "595%",
    "left": "73%",
    "gal_width": "29%",
    "gal_left": "35.5%",
    "mobile_width":"55%",
    "mobile_left":"22.5%",
    "mobile_top":"1120%",
    "mobile_width_gal":"80%",
    "mobile_left_gal":"10%",
    "mobile_top_gal":"auto"
  },
]

document.addEventListener("DOMContentLoaded", function () {
  placePictures();
  createModal();
  initializeGallery();
});
let body = document.body;
body.style.marginBottom = window.innerWidth <= 768 ? "2200%" : "320%";

function placePictures() {
  images.innerHTML = "";
  for (let i = 0; i < json.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "column";
    newDiv.style.float = "left";
    newDiv.style.width = "25%";
    newDiv.style.padding = '0 8px';
    const newImg = document.createElement("img");
    newImg.id = json[i].id;
    newImg.src = json[i].src;
    newImg.class = json[i].class;
    newImg.style.width = window.innerWidth <= 768 ? json[i].mobile_width : json[i].width;
    newImg.style.top = window.innerWidth <= 768 ? json[i].mobile_top : json[i].top;
    newImg.style.left = window.innerWidth <= 768 ? json[i].mobile_left : json[i].left;
    newImg.className = json[i].id + " hover-shadow";
    newImg.addEventListener('click', function () {
      openModal();
      currentSlide(i + 1);
    });
    newDiv.appendChild(newImg);
    images.appendChild(newDiv);
  }
}
function createModal() {
  const modalHTML = `
    <div id="myModal" class="modal">
      <span class="close cursor" onclick="closeModal()">&times;</span>
      <div class="modal-content" id="modalContent"></div>
      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
      <div class="caption-container">
        <p id="caption"></p>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modalContent = document.getElementById('modalContent');
  for (let i = 0; i < json.length; i++) {
    const slideDiv = document.createElement("div");
    slideDiv.className = "mySlides";

    const numberTextDiv = document.createElement("div");
    numberTextDiv.className = "numbertext";
    numberTextDiv.textContent = `${i + 1} / ${json.length}`;

    const img = document.createElement("img");
    img.id = json[i].id + "_gal";
    img.src = json[i].src;
    img.style.width = window.innerWidth <= 768 ? json[i].mobile_width_gal : json[i].gal_width;
    img.style.left = window.innerWidth <= 768 ? json[i].mobile_left_gal : json[i].gal_left;

    slideDiv.appendChild(numberTextDiv);
    slideDiv.appendChild(img);
    modalContent.appendChild(slideDiv);
  }
}
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
  captionText.innerHTML = slides[slideIndex - 1].querySelector('img').id;
}

function initializeGallery() {
  const modal = document.getElementById('myModal');
  modal.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  }
}
