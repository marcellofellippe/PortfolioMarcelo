
function toggleTheme() {
    // Adiciona ou remove a classe 'light-mode' do corpo do documento
    document.body.classList.toggle('light-mode');
    
    // Verifica se o modo atual é light e salva no localStorage
    const mode = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);
}


(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
})();