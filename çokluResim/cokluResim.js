const fileInput = document.getElementById('fileInput');
const slideshowContainer = document.getElementById('slideshow-container');
const thumbnailsContainer = document.getElementById('thumbnails');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlide = 0;
let images = [];
// Dosya giriş alanının değişiklik olayını dinler
fileInput.addEventListener('change', function(event) {
  // Seçilen dosyaları alır
  const files = event.target.files;

  // Dosya URL'lerini içeren bir dizi oluşturur
  images = Array.from(files).map(file => URL.createObjectURL(file));

  // Slaytları gösterir
  showSlides(currentSlide);

  // Küçük resimleri gösterir
  showThumbnails();
});

// Slaytları gösterir
function showSlides(index) {
  // İndeks sıfırdan küçükse, mevcut slaytı son slayta ayarlar
  if (index < 0) {
    currentSlide = images.length - 1;
  } 
  // İndeks, slayt sayısından büyükse, mevcut slaytı ilk slayta ayarlar
  else if (index >= images.length) {
    currentSlide = 0;
  }

  // Slayt konteynırını temizler
  slideshowContainer.innerHTML = '';

  // Yeni bir slayt oluşturur ve resmi ekler
  const slide = document.createElement('div');
  slide.classList.add('slide');
  const img = document.createElement('img');
  img.src = images[currentSlide];
  slide.appendChild(img);
  slideshowContainer.appendChild(slide);
}

// Küçük resimleri gösterir
function showThumbnails() {
  // Küçük resim konteynırını temizler
  thumbnailsContainer.innerHTML = '';

  // Her bir resim için küçük bir resim oluşturur ve tıklanabilir hale getirir
  images.forEach((image, index) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image;
    thumbnail.classList.add('thumbnail');
    thumbnail.addEventListener('click', () => {
      currentSlide = index;
      showSlides(currentSlide);
    });
    thumbnailsContainer.appendChild(thumbnail);
  });
}

// Slayt sayısını artırır veya azaltır
function plusSlides(n) {
  currentSlide += n;
  showSlides(currentSlide);
}