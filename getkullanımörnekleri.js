//Attributes: Bir HTML elementinin tüm özniteliklerini temsil eden bir dizi nesnedir.
//örnek kullanım
const element = document.getElementById("myElement");
const attrs = element.attributes;
console.log(attrs);

//childElementCount: Bir elementin doğrudan çocuk elementlerinin sayısını verir.
//örnek kullanım
const parents = document.getElementById("parentElement");
const childCount = parent.childElementCount;
console.log(childCount);

//children: Bir elementin doğrudan çocuk elementlerini içeren bir HTMLCollection nesnesidir.
//örnek kullanım

const parent = document.getElementById("parentElement");
const childElements = parent.children;
console.log(childElements);

//clientHeight ve clientWidth: Bir elementin iç içe geçmiş içeriğin yüksekliği ve genişliği, kenar çubuklarını ve çerçeveyi dahil etmez.
//örnek kullanım
const elements = document.getElementById("myElement");
const height = element.clientHeight;
const width = element.clientWidth;
console.log(`Height: ${height}, Width: ${width}`);


//firstElementChild ve lastElementChild: Bir elementin ilk ve son çocuk elementlerini temsil eden elementlerdir.
const parent1 = document.getElementById("parentElement");
const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;
console.log(`First child: ${firstChild}, Last child: ${lastChild}`);

//nextElementSibling ve previousElementSibling: Bir elementin bir sonraki ve bir önceki kardeş elementlerini temsil eden elementlerdir.
const element1 = document.getElementById("myElement");
const nextSibling = element.nextElementSibling;
const prevSibling = element.previousElementSibling;
console.log(`Next sibling: ${nextSibling}, Previous sibling: ${prevSibling}`);

//scrollHeight ve scrollWidth: Bir elementin içeriğinin tam boyutunu, görüntülenebilen kısmı dikkate alarak gösterir.
const element2 = document.getElementById("myElement");
const scrollHeight = element.scrollHeight;
const scrollWidth = element.scrollWidth;
console.log(`Scroll height: ${scrollHeight}, Scroll width: ${scrollWidth}`);

//scrollLeft ve scrollTop: Bir elementin yatay ve dikey kaydırma pozisyonlarını alır veya ayarlar.

const element3 = document.getElementById("myElement");
const scrollLeftPos = element.scrollLeft;
const scrollTopPos = element.scrollTop;
console.log(`Scroll left: ${scrollLeftPos}, Scroll top: ${scrollTopPos}`);

//tagName: Bir elementin etiket adını (büyük harfle) alır.
const element4 = document.getElementById("myElement");
const tagName = element.tagName;
console.log(`Tag name: ${tagName}`);

//after() ve before(): Bir elementin hemen öncesine veya sonrasına yeni bir HTML veya metin ekler.
const element5 = document.getElementById("myElement");
element.after("<p>After element</p>");
element.before("<p>Before element</p>");

//append() ve prepend(): Bir elementin sonuna veya başına yeni bir HTML veya metin ekler.
const element6 = document.getElementById("myElement");
element.append("<p>Appended element</p>");
element.prepend("<p>Prepended element</p>");

//closest(): Bir elementin kendisi veya üst elementlerinden birini belirtilen bir seçiciye göre arar.

const element7 = document.getElementById("myElement");
const closestContainer = element.closest(".container");

//getBoundingClientRect(): Bir elementin dikdörtgenin boyut ve konumu hakkında bilgi sağlar.
const element8 = document.getElementById("myElement");
const rect = element.getBoundingClientRect();
console.log(rect);

//matched(): Bir elementin bir belirtilen CSS seçicisine eşleşip eşleşmediğini kontrol eder.
const element9 = document.getElementById("myElement");
const isMatched = element.matches(".highlight");
console.log(isMatched);

//setAttribute(): Bir elemente yeni bir öznitelik ekler veya var olan bir özniteliği değiştirir.
const element10 = document.getElementById("myElement");
element.setAttribute("data-id", "123");

//getAttribute(): Bir elementin belirli bir özniteliğini alır.
const element11 = document.getElementById("myElement");
const value = element.getAttribute("data-id");
console.log(value);

//hasAttribute(): Bir elementin belirli bir özniteliğe sahip olup olmadığını kontrol eder.

const element12 = document.getElementById("myElement");
const hasDataId = element.hasAttribute("data-id");
console.log(hasDataId);

//toggleAttribute(): Bir elementin belirli bir özniteliğini ekler veya kaldırır.
const element13 = document.getElementById("myElement");
element.toggleAttribute("disabled");

//preventDefault(): Bir olayın varsayılan davranışını engeller.
const link = document.getElementById("myLink");
link.addEventListener("click", function(event) {
    event.preventDefault();
});

//stopPropagation(): Bir olayın daha fazla bubbling veya capturing'e geçmesini engeller.
const child = document.getElementById("childElement");
child.addEventListener("click", function(event) {
    event.stopPropagation();
});

//CSSStyleDeclaration: Bir elementin stil özelliklerini içeren bir nesnedir.
const element14 = document.getElementById("myElement");
const styles = window.getComputedStyle(element);
console.log(styles.color);

//MediaQueryList: Bir medya sorgusu durumunu temsil eden bir nesnedir.
const mediaQuery = window.matchMedia("(max-width: 600px)");
console.log(mediaQuery.matches);

//selectionStart ve selectionEnd: Bir input veya textarea elementindeki metnin seçilen başlangıç ve bitiş konumlarını alır.
const input1 = document.getElementById("myInput");
const start = input.selectionStart;
const end = input.selectionEnd;

//setRangeText(): Bir input veya textarea elementinde belirtilen aralığa yeni metin ekler.
const input2 = document.getElementById("myInput");
input.setRangeText("new text", start, end, "end");

//setSelectionRange(): Bir input veya textarea elementinde belirli bir metin aralığını seçer.
const input = document.getElementById("myInput");
input.setSelectionRange(3, 7);

//showPicker(): Tarayıcı tarafından desteklenen bir form kontrolü veya seçici (örneğin, renk seçici veya tarih seçici) açar.
const colorInput = document.getElementById("colorPicker");
colorInput.showPicker();

//elements: Bir form elementinin içindeki tüm input, select ve textarea elementlerini içeren bir HTMLCollection nesnesidir.
const form1 = document.getElementById("myForm");
const formElements = form.elements;
console.log(formElements);

//document.forms: Sayfadaki tüm form elementlerini içeren bir HTMLCollection nesnesidir.
const allForms = document.forms;
console.log(allForms);

//submit(): Bir formun gönderim işlemini tetikler.

const form = document.getElementById("myForm");
form.submit();

//reset(): Bir formun sıfırlama işlemini tetikler, yani tüm inputların değerlerini varsayılan değerlerine geri getirir.

const form = document.getElementById("myForm");
form.reset();

//Validation ve validationMessage: Form validasyonunu kontrol eden ve validasyon hatası mesajını içeren özelliklerdir.

const form = document.getElementById("myForm");
if (!form.checkValidity()) {
    console.log(form.validationMessage);
}

//setCustomValidity() ve reportValidity(): Özel geçerlilik durumunu ayarlar ve formun geçerliliğini kontrol eder.
const input = document.getElementById("myInput");
input.setCustomValidity("Bu alan zorunludur.");
input.reportValidity();

//checkValidity(): Bir formun geçerliliğini kontrol eder ve geçerli olup olmadığını döndürür.
const form = document.getElementById("myForm");
const isValid = form.checkValidity();
console.log(isValid);

//Event() ve dispatchEvent(): Yeni bir olay oluşturur ve bir elemente bu olayı gönderir.

const customEvent = new Event("customEvent");
const element = document.getElementById("myElement");
element.dispatchEvent(customEvent);