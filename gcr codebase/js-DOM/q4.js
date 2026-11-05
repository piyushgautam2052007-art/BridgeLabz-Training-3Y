// Q4. Theme Switcher

document.body.innerHTML = `
<h2>Theme Switcher</h2>
<button onclick="changeTheme('light')">Light</button>
<button onclick="changeTheme('dark')">Dark</button>
<button onclick="changeTheme('blue')">Blue</button>
`;

function changeTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    document.body.setAttribute("data-current-theme", theme);
    document.body.setAttribute("class", theme + "-theme");

    if (theme === "light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else if (theme === "dark") {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "lightblue";
        document.body.style.color = "darkblue";
    }
}
