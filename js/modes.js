function toggleDarkMode() {
    const body = document.body;
    const btn = document.querySelector('button');
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    btn.textContent = isDark ? "Light Mode" : "Dark Mode";
}

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const btn = document.querySelector('button');
    
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if(btn) btn.textContent = "Light Mode";
    }
});
