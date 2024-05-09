// Sayfa yüklendiğinde localStorage'den verileri al ve ekrana yaz
document.addEventListener("DOMContentLoaded", function() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || []; // localStorage'dan görevleri alır
    var taskList = document.getElementById("taskList"); // taskList'i alır
    renderTasks(tasks, taskList); // Görevleri ekrana yazar
});

// Yeni görev ekle
function addTask() {
    var taskInput = document.getElementById("taskInput"); // Görev girişi alanını alır
    var taskList = document.getElementById("taskList"); // Görev listesini alır
    var taskText = taskInput.value.trim(); // Giriş değerini alır ve boşlukları siler
    
    if (taskText !== "") { // Boş girişi kontrol eder
        var tasks = JSON.parse(localStorage.getItem("tasks")) || []; // localStorage'dan görevleri alır
        tasks.push(taskText); // Yeni görevi diziye ekler
        localStorage.setItem("tasks", JSON.stringify(tasks)); // Görevleri localStorage'a kaydeder
        renderTasks(tasks, taskList); // Görevleri ekrana yazar
        taskInput.value = ""; // Görev giriş alanını temizler
    }
}

// Görevleri listele
function renderTasks(tasks, taskList) {
    taskList.innerHTML = ""; // Görev listesini temizler
    tasks.forEach(function(task, index) { // Her bir görev için döngü
        var li = document.createElement("li"); // Liste öğesi oluşturur
        li.textContent = task; // Liste öğesine görevi ekler

        var deleteButton = document.createElement("button"); // Silme butonu oluşturur
        deleteButton.classList.add("deneme"); // Silme butonuna bir sınıf ekler
        // Beyaz çöp tenekesi ikonu SVG
        deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 6h3V4c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h3c.55 0 1 .45 1 1v2c0 1.1-.9 2-2 2v10c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V11c-1.1 0-2-.9-2-2V7c0-.55.45-1 1-1zm8-4c-.55 0-1 .45-1 1v1h2V3c0-.55-.45-1-1-1zm8 6h-2V4h2v4zm-4 0h-2V4h2v4z" fill="white"/></svg>';
        deleteButton.onclick = function() { // Silme butonunun tıklanma olayı
            tasks.splice(index, 1); // Görevi diziden siler
            localStorage.setItem("tasks", JSON.stringify(tasks)); // Görevleri localStorage'a kaydeder
            renderTasks(tasks, taskList); // Görevleri ekrana yazar
        };

        li.appendChild(deleteButton); // Liste öğesine silme butonunu ekler
        taskList.appendChild(li); // Liste öğesini göreve ekler
    });
}