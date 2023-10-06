    let soma = document.getElementById('soma');
    let valor = document.getElementById('valor');
    let subtracao = document.getElementById('subtracao'); 
    let reset = document.getElementById('reset'); 

    let conteudo = 0;
    let valorUpdate = () => {
        valor.innerHTML = conteudo;
    }


    soma.addEventListener('click', () => {
        conteudo++;
        valorUpdate();
    })

    subtracao.addEventListener('click', () => {
        conteudo--;
        valorUpdate();
    })

    reset.addEventListener('click', () => {
        conteudo = 0;
        valorUpdate();
    })
