const form = document.getElementById('form-atividade');
const imgAprovado = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 40 40" width="30px" height="30px"><path fill="#bae0bd" d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"/><path fill="#5e9c76" d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"/><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" d="M11 20L17 26 30 13"/></svg>';
const imgReprovado = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 80 80" width="30px" height="30px"><path fill="#f78f8f" d="M40,2C19,2,2,19,2,40s17,38,38,38s38-17,38-38S61,2,40,2z M12,40c0-15.5,12.5-28,28-28 c5.9,0,11.4,1.9,15.9,5L17,55.9C13.9,51.4,12,45.9,12,40z M40,68c-5.9,0-11.4-1.9-15.9-5L63,24.1c3.1,4.5,5,10,5,15.9 C68,55.5,55.5,68,40,68z"/><path fill="#c74343" d="M40,78.5C18.8,78.5,1.5,61.2,1.5,40C1.5,18.8,18.8,1.5,40,1.5c21.2,0,38.5,17.3,38.5,38.5 C78.5,61.2,61.2,78.5,40,78.5z M40,2.5C19.3,2.5,2.5,19.3,2.5,40S19.3,77.5,40,77.5S77.5,60.7,77.5,40S60.7,2.5,40,2.5z M40,68.5 c-5.8,0-11.4-1.8-16.2-5.1l-0.5-0.3l39.8-39.8l0.3,0.5c3.3,4.8,5.1,10.4,5.1,16.2C68.5,55.7,55.7,68.5,40,68.5z M24.8,62.9 c4.5,3,9.7,4.6,15.2,4.6c15.2,0,27.5-12.3,27.5-27.5c0-5.4-1.6-10.6-4.6-15.2L24.8,62.9z M16.9,56.7l-0.3-0.5 c-3.3-4.8-5.1-10.4-5.1-16.2c0-15.7,12.8-28.5,28.5-28.5c5.8,0,11.4,1.8,16.2,5.1l0.5,0.3L16.9,56.7z M40,12.5 c-15.2,0-27.5,12.3-27.5,27.5c0,5.4,1.6,10.6,4.6,15.2l38.1-38.1C50.6,14.1,45.4,12.5,40,12.5z"/></svg>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a Nota Mínima:"));

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A Atividade ${inputNomeAtividade.value} já foi Inserida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML += linha;

        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
    }
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}
