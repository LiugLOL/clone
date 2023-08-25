function Calcular() {
    //informações
    const numeroHTML = parseFloat(document.getElementById("numeroHTML").value);

    const quantidadeCocos = 322 + numeroHTML;

    if (isNaN(numeroHTML)) {
        alert("Preencha o campo corretamente!");
        return;
    }
       
    //Custos varíaveis
    const luz = 52 + numeroHTML;
    const agua = 65 + numeroHTML;
    const celular = 46 + numeroHTML;
    const combustivel = 610 + numeroHTML;
    const canudosEGuardanapos = 73 + numeroHTML;
    const materiaPrima = 460 + numeroHTML;
    const aluguel = 200 + numeroHTML;
    //folha
    const receita = quantidadeCocos * 8;
    const custosVariaveis = luz + agua + celular + combustivel + canudosEGuardanapos + materiaPrima;
    const custosVariaveisUnitario = custosVariaveis / quantidadeCocos;
    const margemDeContribuicao = 8 - custosVariaveisUnitario;
    const despesasFixas = 705.33 + aluguel;
    const pontoDeEquilibrioQuantidade = despesasFixas / margemDeContribuicao;
    const recComPeq = pontoDeEquilibrioQuantidade * 8;
/*    const custoVariaveisComPontoDeEquilibrio = pontoDeEquilibrioQuantidade * custosVariaveisUnitario;
    const custoTotal = custoVariaveisComPontoDeEquilibrio + despesasFixas;*/
    const oportCap = 296.8
    const pontoDeEquilibrioEcon = (despesasFixas+oportCap)/margemDeContribuicao
    const custoDesemb = despesasFixas-633.33
    const peqFinanc = custoDesemb/margemDeContribuicao
    

    //Todos os document.getElementById().innerText= ;
    document.getElementById("quantidade").innerText = quantidadeCocos;
    document.getElementById("precoVenda").innerText = 8;
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
    document.getElementById("depreciacao").innerText = 633.33;
    document.getElementById("mei").innerText = 72;
    document.getElementById("pontoDeEquilibrioQuantidade").innerText = arredondar(pontoDeEquilibrioQuantidade);
    document.getElementById("receitaPontoDeEquilibrio").innerText = arredondar(recComPeq);
    document.getElementById("rendPoupMes").innerText = 0.6;
    document.getElementById("oportCap").innerText = oportCap;
    document.getElementById("pontoDeEquilibrioEcon").innerText = arredondar(pontoDeEquilibrioEcon);
    document.getElementById("custDesemb").innerText = arredondar(custoDesemb);
    document.getElementById("peqFinanc").innerText = arredondar(peqFinanc);

}
function arredondar(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

