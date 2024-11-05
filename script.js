// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const headerHeight = header.offsetHeight; // Altura do cabeçalho

    // Adiciona o evento de rolagem
    window.addEventListener('scroll', function() {
        // Verifica se o usuário rolou para baixo o suficiente para que o main esteja visível
        if (window.scrollY > headerHeight) {
            // Altera a cor do fundo do cabeçalho
            header.style.backgroundColor = '#001e45';
            header.style.transition = 'background-color 0.3s ease'; // Transição suave
        } else {
            // Define o cabeçalho como transparente
            header.style.backgroundColor = 'transparent';
        }
    });
});
