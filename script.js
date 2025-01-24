const pdfFolder = './material'; // A pasta "material" está no mesmo nível do HTML

async function loadPDFs(pdfFolder) {
    const pdfContainer = document.getElementById('pdf-container');

    try {
        // O GitHub Pages não permite listar arquivos diretamente. 
        // Então, você deve listar os arquivos manualmente em um array:
        const pdfs = [
            { name: "Arquivo 1", path: `${pdfFolder}/arquivo1.pdf` },
            { name: "Arquivo 2", path: `${pdfFolder}/arquivo2.pdf` },
            { name: "Arquivo 3", path: `${pdfFolder}/arquivo3.pdf` }
        ];

        // Gera os links para os PDFs
        pdfs.forEach(pdf => {
            const link = document.createElement('a');
            link.href = pdf.path;
            link.textContent = pdf.name;
            link.target = "_blank"; // Abre em nova aba
            pdfContainer.appendChild(link);
            pdfContainer.appendChild(document.createElement('br'));
        });
    } catch (error) {
        console.error('Erro ao carregar os PDFs:', error);
    }
}

// Ativa o accordion
document.querySelector('.accordion-header').addEventListener('click', () => {
    const content = document.querySelector('.accordion-content');
    const isOpen = content.style.display === 'block';
    content.style.display = isOpen ? 'none' : 'block';
    document.querySelector('.toggle-icon').textContent = isOpen ? '+' : '-';
});

// Carrega os PDFs ao carregar a página
loadPDFs();