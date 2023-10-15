const texto = document.getElementById("card-text")
let texto_card = texto.textContent;
texto.textContent = texto_card.slice(0, 70) + "...";