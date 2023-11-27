document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.hamburger_icon').addEventListener('click', function () {
        this.querySelector('.top_line').classList.toggle('active');
        this.querySelector('.middle_line').classList.toggle('active');
        this.querySelector('.bottom_line').classList.toggle('active');
    });
});
