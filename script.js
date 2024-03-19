function toggleMode(){
    //pegar o elemento html
    const html = document.documentElement;
    //pegar o html e mudar a classe para light, caso esteja sem o light, ou vice-versa
    html.classList.toggle('light');

    //pegar a tag img
    const img = document.querySelector("#profile img");
    //substituindo a imagem
    if (html.classList.contains('light')) {
        img.setAttribute("src", "./assets/avatar-light.png");
        img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos escuro e camisa preta, barba e fundo azul e roxo.");
    } else {
        img.setAttribute("src", "./assets/avatar.png");
        img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.");
    }
}