// Ürünleri depolamak için localStorage kullanılıyor
let productList = []; // Ürün listesini tutar

// Sepet öğelerini depolamak için localStorage kullanılıyor
let cartItems = []; // Sepet öğelerini tutar

let editIndex; // Düzenleme yapılacak ürünün index'i

// Sayfa yüklendiğinde localStorage'dan verileri al ve sayfayı güncelle
window.onload = function() {
  productList = JSON.parse(localStorage.getItem('productList')) || []; // Ürün listesini alır veya boş dizi oluşturur
  cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Sepet öğelerini alır veya boş dizi oluşturur
  renderProductList(); // Ürün listesini günceller
  renderCart(); // Sepet listesini günceller
}

// Input alanındaki veriyi alıp listeye ekleyen fonksiyon
function addItem() {
  const inputText = document.getElementById('inputText').value.trim(); // Boşlukları kaldırır
  if (inputText !== "") { // Boş değilse ekle
    productList.push(inputText); // Ürün listesine ekler
    localStorage.setItem('productList', JSON.stringify(productList)); // localStorage'a kaydeder
    renderProductList(); // Ürün listesini günceller
  }
}

// Ürün listesini sayfaya ekleyen fonksiyon
function renderProductList() {
  const productListDiv = document.getElementById('productList'); // Ürün listesi div'i
  productListDiv.innerHTML = ''; // Div'i temizler
  
  productList.forEach((product, index) => { // Her bir ürün için döngü
    const productItem = document.createElement('div'); // Ürün öğesi oluşturur
    productItem.textContent = product; // Ürün adını ekler
    const deleteButton = document.createElement('button'); // Silme butonu oluşturur
    deleteButton.textContent = 'Sil'; // Buton metni
    deleteButton.onclick = function() { // Silme butonunun tıklanma olayı
      deleteItem(index); // Silme fonksiyonunu çağırır
    };
    const editButton = document.createElement('button'); // Düzenleme butonu oluşturur
    editButton.textContent = 'Düzenle'; // Buton metni
    editButton.onclick = function() { // Düzenleme butonunun tıklanma olayı
      openModal(index); // Modalı aç
    };
    
    const addToCartButton = document.createElement('button'); // Sepete ekleme butonu oluşturur
    addToCartButton.textContent = 'Sepete Ekle'; // Buton metni
    addToCartButton.onclick = function() { // Sepete ekleme butonunun tıklanma olayı
      addToCart(product); // Sepete ekleme fonksiyonunu çağırır
    };
    productItem.appendChild(deleteButton); // Ürün öğesine silme butonunu ekler
    productItem.appendChild(editButton); // Ürün öğesine düzenleme butonunu ekler
    productItem.appendChild(addToCartButton); // Ürün öğesine sepete ekleme butonunu ekler
    productListDiv.appendChild(productItem); // Ürün öğesini ürün listesine ekler
  });
}

// Listeden öğe silen fonksiyon
function deleteItem(index) {
  productList.splice(index, 1); // Ürünü listeden siler
  localStorage.setItem('productList', JSON.stringify(productList)); // Ürün listesini localStorage'a kaydeder
  renderProductList(); // Ürün listesini günceller

  // Sepetteki aynı ürünü de sil
  const deletedProduct = productList[index];
  const cartIndex = cartItems.findIndex(item => item === deletedProduct);
  if (cartIndex !== -1) {
    cartItems.splice(cartIndex, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Sepet öğelerini güncelle
    renderCart(); // Sepet listesini yeniden göster
  }
}

// Sepete öğe ekleyen fonksiyon
function addToCart(product) {
  cartItems.push(product); // Sepete ürünü ekler
  localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Sepet öğelerini localStorage'a kaydeder
  renderCart(); // Sepet listesini günceller
}

// Sepet öğelerini sayfaya ekleyen fonksiyon
function renderCart() {
  const cartItemsList = document.getElementById('cartItems'); // Sepet öğeleri listesi
  cartItemsList.innerHTML = ''; // Listeyi temizler
  cartItems.forEach((item, index) => { // Her bir sepet öğesi için döngü
    const listItem = document.createElement('li'); // Liste öğesi oluşturur
    listItem.textContent = item; // Liste öğesine sepet öğesini ekler

    const deleteButton = document.createElement('button'); // Silme butonu oluşturur
    deleteButton.textContent = 'Sil'; // Buton metni
    deleteButton.onclick = function() { // Silme butonunun tıklanma olayı
      deleteCartItem(index); // Silme fonksiyonunu çağırır
    };

    const editButton = document.createElement('button'); // Düzenleme butonu oluşturur
    editButton.textContent = 'Düzenle'; // Buton metni
    editButton.onclick = function() { // Düzenleme butonunun tıklanma olayı
      openModal(index); // Modalı aç
    };

    listItem.appendChild(deleteButton); // Liste öğesine silme butonunu ekler
    listItem.appendChild(editButton); // Liste öğesine düzenleme butonunu ekler
    cartItemsList.appendChild(listItem); // Sepet öğeleri listesine liste öğesini ekler
  });
}

// Sepetten öğe silen fonksiyon
function deleteCartItem(index) {
  cartItems.splice(index, 1); // Sepetten öğeyi siler
  localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Sepet öğelerini localStorage'a kaydeder
  renderCart(); // Sepet listesini günceller
}

// Modalı açan fonksiyon
function openModal(index) {
  editIndex = index; // Düzenleme yapılacak ürünün index'ini saklar
  const modal = document.getElementById('editModal');
  modal.style.display = 'block';
}

// Modalı kapatan fonksiyon
function closeModal() {
  const modal = document.getElementById('editModal');
  modal.style.display = 'none';
}

// Düzenleme işlemini kaydeden fonksiyon
function saveEdit() {
  const editedAdet = document.getElementById('editAdet').value;
  const editedAdı = document.getElementById('editAdı').value;
  const editedMarka = document.getElementById('editMarka').value;
  const editedRenk = document.getElementById('editRenk').value;

  // Düzenleme işlemleri
  if (editedAdet && editedAdı && editedMarka && editedRenk) {
    // Ürünü düzenle
    productList[editIndex] = `${editedAdet} - ${editedAdı} - ${editedMarka} - ${editedRenk}`;
    localStorage.setItem('productList', JSON.stringify(productList)); // Ürün listesini güncelle
    renderProductList(); // Ürün listesini yeniden göster

    // Sepette aynı ürünü güncelle
    const editedCartItem = `${editedAdet} - ${editedAdı} - ${editedMarka} - ${editedRenk}`;
    const cartIndex = cartItems.findIndex(item => item === productList[editIndex]);
    if (cartIndex !== -1) {
      cartItems[cartIndex] = editedCartItem;
      localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Sepet öğelerini güncelle
      renderCart(); // Sepet listesini yeniden göster
    }

    closeModal(); // Modalı kapat
  }
}
