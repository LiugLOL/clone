function Calcular() { 
     //informações 
     const numeroHTML = parseFloat(document.getElementById("numeroHTML").value); 
  
     const quantidadeCocos = 320 + numeroHTML; 
  
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
     const materiaPrima = 455 + numeroHTML; 
     const aluguel = 200 + numeroHTML; 
     //folha 
     const receita = quantidadeCocos * 7; 
     const custosVariaveis = luz + agua + celular + combustivel + canudosEGuardanapos + materiaPrima; 
     const custosVariaveisUnitario = custosVariaveis / quantidadeCocos; 
     const margemDeContribuicao = 7 - custosVariaveisUnitario; 
     const despesasFixas = 672 + aluguel; 
     const pontoDeEquilibrioQuantidade = despesasFixas / margemDeContribuicao; 
     const receitaComPontoDeEquilibrio = pontoDeEquilibrioQuantidade * 7; 
     const custoVariaveisComPontoDeEquilibrio = pontoDeEquilibrioQuantidade * custosVariaveisUnitario; 
     const custoTotal = custoVariaveisComPontoDeEquilibrio + despesasFixas; 
     const oportCap = (53000 + numeroHTML) * 0.5
     const pontoDeEquilibrioEcon = (despesasFixas + oportCap) / margemDeContribuicao
     const recComPeq = pontoDeEquilibrioQuantidade * 7
  
     //Todos os document.getElementById().innerHTML = ; 
     document.getElementById("quantidade").innerText = quantidadeCocos; 
     document.getElementById("precoVenda").innerText = 7; 
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
     document.getElementById("depreciacao").innerText = 600.00; 
     document.getElementById("mei").innerText = 72.0; 
     document.getElementById("pontoDeEquilibrioQuantidade").innerText = arredondar(pontoDeEquilibrioQuantidade); 
     document.getElementById("receitaPontoDeEquilibrio").innerText = arredondar(receitaComPontoDeEquilibrio); 
     document.getElementById("custoVariaveisComPontoDeEquilibrio").innerText = arredondar(custoVariaveisComPontoDeEquilibrio); 
     document.getElementById("despesasFixasDois").innerText = despesasFixas; 
     document.getElementById("custoTotal").innerText = arredondar(custoTotal); 
     document.getElementById("rendPoupMes").innerText = 0.5;
     document.getElementById("oportCap").innerText = arredondar(oportCap);
     document.getElementById("peqEcon").innerText = arredondar(pontoDeEquilibrioEcon);
     document.getElementById("recComPeq").innerText = arredondar(recComPeq);
 } 
 function arredondar(num) { 
     return Math.round((num + Number.EPSILON) * 100) / 100; 
 }