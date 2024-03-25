function toggleMode(){
    //pegar o elemento html
    const html = document.documentElement;
    //pegar o html e mudar a classe para light, caso esteja sem o light, ou vice-versa
    html.classList.toggle('light');

    //pegar a tag img
    const img = document.querySelector("#profile img");
    //substituindo a imagem
    if (html.classList.contains('light')) {
        img.setAttribute("src", "./assets/bruce-wayne.png");
        img.setAttribute("alt", "Foto do Ben Affleck vestido com um casaco interpretando o Bruce Wayne");
    } else {
        img.setAttribute("src", "./assets/batman.png");
        img.setAttribute("alt", "Foto do Batman do Ben Affleck sem a máscara");
    }
}