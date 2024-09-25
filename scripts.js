document.querySelectorAll('.sidebar-item .sidebar-link').forEach(function (link) {
    link.addEventListener('click', function () {
        const icon = this.querySelector('.icon-link');
        const submenu = document.querySelector(this.getAttribute('href'));

        submenu.addEventListener('show.bs.collapse', function () {
            icon.classList.add('rotate-90'); // Tambahkan kelas saat dropdown dibuka
        });

        submenu.addEventListener('hide.bs.collapse', function () {
            icon.classList.remove('rotate-90'); // Hapus kelas saat dropdown ditutup
        });
    });
});
