function toggleDarkMode() {
    const body = document.body;
    const btn = document.querySelector('button');
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    btn.textContent = isDark ? "Light Mode" : "Dark Mode";
    const githubImgs = document.querySelectorAll('.github-link img');
    githubImgs.forEach(img => {
        img.src = isDark ? "/assets/white-github.png" : "/assets/github.png";
    });
}

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const btn = document.querySelector('button');
    const isDark = savedTheme === "dark";
    if (isDark) {
        document.body.classList.add("dark-mode");
        if (btn) btn.textContent = "Light Mode";
    }
    const githubImgs = document.querySelectorAll('.github-link img');
    githubImgs.forEach(img => {
        img.src = isDark ? "/assets/white-github.png" : "/assets/github.png";
    });
});