// Fungsi untuk menampilkan sambutan
window.onload = function () {
  // Menampilkan sambutan ketika halaman dimuat
  const sambutanDiv = document.getElementById("sambutan");
  const tutupButton = document.getElementById("tutupSambutan");

  // Menyembunyikan sambutan setelah 5 detik otomatis
  setTimeout(function () {
    sambutanDiv.style.display = "none";
  }, 5000); // 5000ms = 5 detik

  // Menyembunyikan sambutan ketika tombol tutup diklik
  tutupButton.addEventListener("click", function () {
    sambutanDiv.style.display = "none";
  });
};
