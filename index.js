function Calcular() {
    //informações
    const numeroHTML = parseFloat(document.getElementById("numeroHTML").value);

    const quantidadeCocos = 300 + numeroHTML;

    if (isNaN(numeroHTML)) {
        alert("Preencha o campo corretamente!");
        return;
    }
    //Custos varíaveis
    const luz = 50 + numeroHTML;
    const agua = 60 + numeroHTML;
    const celular = 48 + numeroHTML;
    const combustivel = 600 + numeroHTML;
    const canudosEGuardanapos = 70 + numeroHTML;
    const materiaPrima = 450 + numeroHTML;
    const aluguel = 200 + numeroHTML;
    //folha
    const receita = quantidadeCocos * 6;
    const custosVariaveis = luz + agua + celular + combustivel + canudosEGuardanapos + materiaPrima;
    const custosVariaveisUnitario = custosVariaveis / quantidadeCocos;
    const margemDeContribuicao = 6 - custosVariaveisUnitario;
    const despesasFixas = 655.33 + aluguel;
    const pontoDeEquilibrioQuantidade = despesasFixas / margemDeContribuicao;
    const receitaComPontoDeEquilibrio = pontoDeEquilibrioQuantidade * 6;
    const custoVariaveisComPontoDeEquilibrio = pontoDeEquilibrioQuantidade * custosVariaveisUnitario;
    const custoTotal = custoVariaveisComPontoDeEquilibrio + despesasFixas;

    //Todos os document.getElementById().innerHTML = ;
    document.getElementById("quantidade").innerText = quantidadeCocos;
    document.getElementById("precoVenda").innerText = 6;
    document.getElementById("receita").innerText = receita;
    document.getElementById("custosVariaveis").innerText = custosVariaveis;
    document.getElementById("luz").innerText = luz;
    document.getElementById("agua").innerText = agua;
    document.getElementById("celular").innerText = celular;
    document.getElementById("combustivel").innerText = combustivel;
    document.getElementById("canudosEGuardanapos").innerText = canudosEGuardanapos;
    document.getElementById("materiaPrima").innerText = materiaPrima;
    document.getElementById("custosVariaveisUnitario").innerText = arredondar(custosVariaveisUnitario);
    document.getElementById("margemDeContribuicao").innerText = arredondar(margemDeContribuicao);
    document.getElementById("despesasFixas").innerText =despesasFixas;
    document.getElementById("aluguel").innerText = aluguel;
    document.getElementById("depreciacao").innerHTML = 583.33;
    document.getElementById("mei").innerHTML = 72.0;
    document.getElementById("pontoDeEquilibrioQuantidade").innerText = arredondar(pontoDeEquilibrioQuantidade);
    document.getElementById("receitaPontoDeEquilibrio").innerText = arredondar(receitaComPontoDeEquilibrio);
    document.getElementById("custoVariaveisComPontoDeEquilibrio").innerText = arredondar(custoVariaveisComPontoDeEquilibrio);
    document.getElementById("despesasFixasDois").innerText = despesasFixas;
    document.getElementById("custoTotal").innerText = arredondar(custoTotal);
}
function arredondar(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

