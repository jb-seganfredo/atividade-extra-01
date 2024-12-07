// 9 - Imprima um padrão de estrela decrescente

function imprimirPadraoEstrelas(linhas) {
    let i = linhas; 
    do {
        let j = 0; 
        let linha = ""; 

        do {
            linha += "*"; 
            j++;
        } while (j < i); 

        console.log(linha); 
        i--; 
    } while (i > 0); 
}

imprimirPadraoEstrelas(20);
