function fecharModal() {
    // Função para fechar o modal
    // Oculta o modal alterando o estilo de display
    document.getElementById('mensagemModal').style.display = 'none';
}

// Clicando no botao jogar
function iniciarJogo() {
    // Chama a mensagemModal
    document.getElementById('mensagemModal').style.display = 'block';
}

// Função para baixar o jogo
function baixarJogo() {
    // Caminho completo ou relativo
    const downloadLink = '../dist/forca.exe';
    
    // Verifica se o arquivo existe
    fetch(downloadLink)
        .then(response => {
            if (!response.ok) {
                throw new Error('Arquivo não encontrado');
            }
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'forca.exe';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            fecharModal();
        })
        .catch(error => {
            alert('Falha ao baixar o arquivo: ' + error.message);
            console.error('Detalhes:', error);
        });
}

// Evento para fechar o modal se clicar fora dele
window.onclick = function (event) {
    let modal = document.getElementById('mensagemModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}