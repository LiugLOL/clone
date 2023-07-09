document.querySelector("button.boton.cal").addEventListener("click", calculos);
document.querySelector("button.boton.li").addEventListener("click", limpar);

function calculoAno(normal, aumento, ferias) {
    const select = document.getElementById("opcoes");
    const opcaoSelecionada = select.value;

    let normalNum = 0;
    let aumentoNum = 0;

    if (opcaoSelecionada === "maio") {
        normalNum = 4;
        aumentoNum = 7;
        conta = normal * normalNum + aumento * aumentoNum + ferias;
    } else if (opcaoSelecionada === "junho") {
        normalNum = 5;
        aumentoNum = 6;
        conta = normal * normalNum + aumento * aumentoNum + ferias;
    }

    const conta = normal * normalNum + aumento * aumentoNum + ferias;

    return conta;
}
function calculoIRRF(irrf) {
    let resultado;

    if (irrf < 2112) resultado = 0;
    else if (irrf < 2826.65) resultado = irrf * 0.075 - 142.8;
    else if (irrf < 3751.05) resultado = irrf * 0.15 - 354.8;
    else if (irrf < 4664.68) resultado = irrf * 0.225 - 646.13;
    else if (irrf > 4664.48) resultado = irrf * 0.275 - 869.36;

    return arredondar(resultado);
}
    return resultado;
}
function calculoINSS(salario) {
    let resultado;

    if (salario < 1320) resultado = salario * 0.075 + 99;
    else if (salario < 2571.29) resultado = (salario - 1320) * 0.09 + 112.62;
    else if (salario < 3856.94) resultado = (salario - 2571.29) * 0.12 + 154.28;
    else if (salario < 7507.49) resultado = (salario - 3856.94) * 0.14 + 511.08;
    else if (salario > 7507.49) resultado = 876.97;

    return arredondar(resultado);
}
function irrfAno(baseCalculo) {
    let ir;

    if (baseCalculo <= 22847.76) ir = 0;
    else if (baseCalculo <= 33191.8) ir = baseCalculo * 0.075 - 1716;
    else if (baseCalculo <= 45012.6) ir = baseCalculo * 0.15 - 4257.57;
    else if (baseCalculo <= 55976.16) ir = baseCalculo * 0.225 - 7633.51;
    else if (baseCalculo > 55976.16) ir = baseCalculo * 0.275 - 10432.32;

    return arredondar(ir);
}
function IrrfAno(descSim, baseCalculo) {
    if (baseCalculo <= 22847.76) {
        descSim = 0;
    } else if (baseCalculo <= 33191.8) {
        descSim = baseCalculo * 0.075 - 1716;
    } else if (baseCalculo <= 45012.6) {
        descSim = baseCalculo * 0.15 - 4257.57;
    } else if (baseCalculo <= 55976.16) {
        descSim = baseCalculo * 0.225 - 7633.51;
    } else if (baseCalculo > 55976.16) {
        descSim = baseCalculo * 0.275 - 10432.32;
    }
    return descSim;
}
function vales(salario) {
    const baseValeTransporte = salario * 0.06;
    const valeTransporte = baseValeTransporte > 483.6 ? 483.6 : baseValeTransporte;

    const baseValeRef = salario * 0.2;
    const valeRefeicao = baseValeRef > 325 ? 325 : baseValeRef;

    return { valeRefeicao, valeTransporte };
}

function folha(salario, horasExtras, despesas) {
    const horaNormal = salario / 220;
    const adicionalHExtra = horaNormal / 2;
    const horaExtra = horaNormal + adicionalHExtra;
    const numeroExtra = horasExtras;
    const horaExtraMes = horaExtra * numeroExtra;
    const salarioBruto = salario + horaExtraMes;
    const inss = calculoINSS(salarioBruto);
    const baseIrrf = salarioBruto - inss - despesas;
    const irrf = calculoIRRF(baseIrrf);

    const { valeTransporte, valeRefeicao } = vales(salario);

    const salarioLiquido = salario - inss - irrf - valeTransporte - valeRefeicao;

    return {
        salario: arredondar(salario),
        horaNormal: arredondar(horaNormal),
        adicionalHExtra: arredondar(adicionalHExtra),
        horaExtra: arredondar(horaExtra),
        numeroDeHorasExtras: arredondar(numeroExtra),
        horaExtraMes: arredondar(horaExtraMes),
        inss: arredondar(inss),
        baseIrrf: arredondar(baseIrrf),
        irrf: arredondar(irrf),
        salarioLiquido: arredondar(salarioLiquido),
        salarioBruto: arredondar(salarioBruto),
        valeRefeicao: arredondar(valeRefeicao),
        valeTransporte: arredondar(valeTransporte),
    };
}

function folhaFerias(dadosMesAnterior, despesas) {
    const salario = dadosMesAnterior.salario * (4 / 3);
    const salarioBruto = salario + dadosMesAnterior.horaExtraMes;
    const inss = calculoINSS(salarioBruto);
    const baseIrrf = salarioBruto - inss - despesas;
    const irrf = calculoIRRF(baseIrrf);

    const { valeRefeicao, valeTransporte } = vales(salario);

    const salarioLiquido = salario - inss - irrf - valeTransporte - valeRefeicao;

    return {
        salario: arredondar(salario),
        horaExtraMes: arredondar(dadosMesAnterior.horaExtraMes),
        inss: arredondar(inss),
        baseIrrf: arredondar(baseIrrf),
        irrf: arredondar(irrf),
        salarioLiquido: arredondar(salarioLiquido),
        salarioBruto: arredondar(salarioBruto),
        valeRefeicao: arredondar(valeRefeicao),
        valeTransporte: arredondar(valeTransporte),
    };
}

function calculos() {
    const salarioHTML = parseFloat(document.getElementById("salarioHTML").value);
    const numeroHTML = parseFloat(document.getElementById("numeroHTML").value);
    const horaExtraHTML = parseFloat(document.getElementById("horaExtraHTML").value);
    const despesasHTML = parseFloat(document.getElementById("despesasHTML").value);
    const aumentoHTML = parseFloat(document.getElementById("aumentoHTML").value);

    if (
        isNaN(salarioHTML) ||
        isNaN(numeroHTML) ||
        isNaN(horaExtraHTML) ||
        isNaN(despesasHTML) ||
        isNaN(aumentoHTML)
    ) {
        alert("Preencha os campos corretamente!");
        return;
    }
    //Normal.
    let salario = salarioHTML + numeroHTML;
    let horaNormal = salario / 220;
    let adicionalHExtra = horaNormal / 2;
    let horaExtra = horaNormal + adicionalHExtra;
    let numeroExtra = horaExtraHTML;
    let horaExtraMes = horaExtra * numeroExtra;
    let salarioBruto = salario + horaExtraMes;
    let inss = calculoINSS(salarioBruto);
    let baseIrrf = salarioBruto - inss - despesasHTML;
    let irrf = calculoIRRF(baseIrrf);
    //Vale
    let valesNormal = vales(salario);
    let valeTransporte = valesNormal.valeTrans;
    let valeRefeicao = valesNormal.valeRef;
    let salarioLiquido = salario - inss - irrf - valeTransporte - valeRefeicao;
    //Aumento.
    let aumento = aumentoHTML / 100;
    let salarioAumento = salario * aumento + salario;
    let horaNormalAumento = salarioAumento / 220;
    let adicionalHExtraAumento = horaNormalAumento / 2;
    let horaExtraAumento = horaNormalAumento + adicionalHExtraAumento;
    let numeroExtraAumento = numeroExtra;
    let horaExtraMesAumento = horaExtraAumento * numeroExtraAumento;
    let salarioBrutoAumento = salarioAumento + horaExtraMesAumento;
    let inssAumento = calculoINSS(salarioBrutoAumento);
    let despesasAumento = despesasHTML;
    let baseIrrfAumento = salarioBrutoAumento - inss - despesasHTML;
    let irrfAumento = calculoIRRF(baseIrrfAumento);
    //vale
    let valesAumento = vales(salarioAumento);
    let valeTransporteAumento = valesAumento.valeTrans;
    let valeRefeicaoAumento = valesAumento.valeRef;
    let salarioLiquidoAumento =
        salarioAumento -
        inssAumento -
        irrfAumento -
        valeTransporteAumento -
        valeRefeicaoAumento;

    const salario = salarioHTML + numeroHTML;
    const dadosNormal = folha(salario, horaExtraHTML, despesasHTML);

    const aumentoPorcentagem = aumentoHTML / 100;
    const salarioAumento = salario * aumentoPorcentagem + salario;
    const dadosAumento = folha(salarioAumento, horaExtraHTML, despesasHTML);

    const dadosFerias = folhaFerias(dadosAumento, despesasHTML);

    const rendaAno = calculoAno(
        dadosNormal.salarioBruto,
        dadosAumento.salarioBruto,
        dadosFerias.salarioBruto,
    );

    const contraPrevINSS = calculoAno(dadosNormal.inss, dadosAumento.inss, dadosFerias.inss);

    const baseDescSimpl = rendaAno * 0.2;
    const descSim = baseDescSimpl > 16_754.34 ? 16_754.34 : baseDescSimpl;

    const baseCalculo = rendaAno - descSim;
    const impDev = irrfAno(baseCalculo);
    const irrfAnual = calculoAno(dadosNormal.irrf, dadosAumento.irrf, dadosFerias.irrf);
    const irRestante = impDev - irrfAnual;

    //Custos empresariais
    const inssPatronal = dadosNormal.salarioBruto * 0.278;
    const fgts = dadosNormal.salarioBruto * 0.08;
    const valeTransporteEmpresa =
        483.6 - valeTransporte <= 0 ? 0 : 483.6 - dadosNormal.valeTransporte;
    const valeRefeicaoEmpresa = 325 - valeRefeicao <= 0 ? 0 : 325 - dadosNormal.valeRefeicao;
    const custoEmpresa =
        inssPatronal + fgts + salario + valeTransporteEmpresa + valeRefeicaoEmpresa;

    //Todos os document.getElementById().innerHTML = ;
    //Normal.
    document.getElementById("salario").innerHTML = dadosNormal.salario;
    document.getElementById("horaNormal").innerHTML = dadosNormal.horaNormal;
    document.getElementById("adicionalHExtra").innerHTML = dadosNormal.adicionalHExtra;
    document.getElementById("horaExtra").innerHTML = dadosNormal.horaExtra;
    document.getElementById("numeroExtra").innerHTML = dadosNormal.numeroDeHorasExtras;
    document.getElementById("horaExtraMes").innerHTML = dadosNormal.horaExtraMes;
    document.getElementById("salarioBruto").innerHTML = dadosNormal.salarioBruto;
    document.getElementById("inss").innerHTML = dadosNormal.inss;
    document.getElementById("dep").innerHTML = despesasHTML;
    document.getElementById("baseIrrf").innerHTML = dadosNormal.baseIrrf;
    document.getElementById("irrf").innerHTML = dadosNormal.irrf;
    document.getElementById("valeTransporte").innerHTML = dadosNormal.valeTransporte;
    document.getElementById("valeRefeicao").innerHTML = dadosNormal.valeRefeicao;
    document.getElementById("salarioLiquido").innerHTML = dadosNormal.salarioLiquido;
    //Aumento.
    document.getElementById("salarioAumento").innerHTML = dadosAumento.salario;
    document.getElementById("horaNormalAumento").innerHTML = dadosAumento.horaNormal;
    document.getElementById("adicionalHExtraAumento").innerHTML = dadosAumento.adicionalHExtra;
    document.getElementById("horaExtraAumento").innerHTML = dadosAumento.horaExtra;
    document.getElementById("numeroExtraAumento").innerHTML = dadosAumento.numeroDeHorasExtras;
    document.getElementById("horaExtraMesAumento").innerHTML = dadosAumento.horaExtraMes;
    document.getElementById("salarioBrutoAumento").innerHTML = dadosAumento.salarioBruto;
    document.getElementById("inssAumento").innerHTML = dadosAumento.inss;
    document.getElementById("depAumento").innerHTML = despesasHTML;
    document.getElementById("baseIrrfAumento").innerHTML = dadosAumento.baseIrrf;
    document.getElementById("irrfAumento").innerHTML = dadosAumento.irrf;
    document.getElementById("valeTransporteAumento").innerHTML = dadosAumento.valeTransporte;
    document.getElementById("valeRefeicaoAumento").innerHTML = dadosAumento.valeRefeicao;
    document.getElementById("salarioLiquidoAumento").innerHTML = dadosAumento.salarioLiquido;
    //Férias.
    document.getElementById("salarioFerias").innerHTML = dadosFerias.salario;
    document.getElementById("horaNormalFerias").innerHTML = dadosAumento.horaNormal;
    document.getElementById("adicionalHExtraFerias").innerHTML = dadosAumento.adicionalHExtra;
    document.getElementById("HoraExtraFerias").innerHTML = dadosAumento.horaExtra;
    document.getElementById("numeroExtraFerias").innerHTML = dadosAumento.numeroDeHorasExtras;
    document.getElementById("horaExtraMesFerias").innerHTML = dadosAumento.horaExtraMes;
    document.getElementById("salarioBrutoFerias").innerHTML = dadosFerias.salarioBruto;
    document.getElementById("inssFerias").innerHTML = dadosFerias.inss;
    document.getElementById("despesasFerias").innerHTML = despesasHTML;
    document.getElementById("baseIrrfFerias").innerHTML = dadosFerias.baseIrrf;
    document.getElementById("irrfFerias").innerHTML = dadosFerias.irrf;
    document.getElementById("valeTransporteFerias").innerHTML = dadosFerias.valeTransporte;
    document.getElementById("valeRefeicaoFerias").innerHTML = dadosFerias.valeRefeicao;
    document.getElementById("salarioLiquidoFerias").innerHTML = dadosFerias.salarioLiquido;
    //Declaração simplificada.
    document.getElementById("rendaAno").innerHTML = rendaAno;
    document.getElementById("contraPrevINSS").innerHTML = contraPrevINSS;
    document.getElementById("descSim").innerHTML = descSim;
    document.getElementById("baseCalculo").innerHTML = baseCalculo;
    document.getElementById("impDev").innerHTML = impDev;
    document.getElementById("irrfAnual").innerHTML = irrfAnual;
    document.getElementById("irRestante").innerHTML = irRestante;
    //Custos empresariais
    document.getElementById("inssPatronal").innerHTML = inssPatronal;
    document.getElementById("fgts").innerHTML = fgts;
    document.getElementById("valeTransporteEmpresa").innerHTML = valeTransporteEmpresa;
    document.getElementById("valeRefeicaoEmpresa").innerHTML = valeRefeicaoEmpresa;
    document.getElementById("custoEmpresa").innerHTML = custoEmpresa;
}

function limpar() {
    document.getElementById("salarioHTML").value = "";
}

function arredondar(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}
