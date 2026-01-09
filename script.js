const mess = document.getElementById("mess");
mess.textContent = "Bravo, vous maîtrisez GITHUB !!";
const fonts = [
    'Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif',
    'Georgia, "Times New Roman", serif',
    'Courier New, Courier, monospace',
    '"Lucida Console", Monaco, monospace',
    '"Palatino Linotype", "Book Antiqua", Palatino, serif'
];

setInterval(() => {
    mess.style.color = `hsl(${Math.random() * 360}, 100%, 45%)`;
    mess.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
}, 700);