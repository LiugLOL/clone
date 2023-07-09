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
    valeRef = salario * 0.2;
    if (valeRef > 325) {
        valeRef = 325;
    }
    return { valeRef, valeTrans };
}

function Calculos() {
    let salarioHTML = parseFloat(document.getElementById("salarioHTML").value);
    let numeroHTML = parseFloat(document.getElementById("numeroHTML").value);
    let horaExtraHTML = parseFloat(
        document.getElementById("horaExtraHTML").value,
    );
    let despesasHTML = parseFloat(
        document.getElementById("despesasHTML").value,
    );
    let aumentoHTML = parseFloat(document.getElementById("aumentoHTML").value);

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

    //Férias.
    let salarioFerias = salarioAumento * 0.33 + salario;
    let horaNormalFerias = salarioFerias / 220;
    let adicionalHExtraFerias = horaNormalFerias / 2;
    let HoraExtraFerias = horaNormalFerias + adicionalHExtraFerias;
    let numeroExtraFerias = numeroExtra;
    let horaExtraMesFerias = HoraExtraFerias * numeroExtraFerias;
    let salarioBrutoFerias = salarioFerias + horaExtraMesFerias;
    let inssFerias = calculoINSS(salarioBrutoFerias);
    let despesasFerias = despesasHTML;
    let baseIrrfFerias = salarioBrutoFerias - inss - despesasHTML;
    let irrfFerias = calculoIRRF(baseIrrfFerias);
    //vale
    let valesFerias = vales(salarioFerias);
    let valeTransporteFerias = valesFerias.valeTrans;
    let valeRefeicaoFerias = valesFerias.valeRef;
    let salarioLiquidoFerias =
        salarioFerias -
        inssFerias -
        irrfFerias -
        valeTransporteFerias -
        valeRefeicaoFerias;

    //Declaração simplificada.
    let rendaAno = calculoAno(
        salarioBruto,
        salarioBrutoAumento,
        salarioBrutoFerias,
    );
    let contraPrevINSS = calculoAno(inss, inssAumento, inssFerias);
    let descSim = contraPrevINSS * 0.2;
    if (descSim > 16754.34) {
        descSim = 16754.34;
    }
    let baseCalculo = rendaAno - descSim;
    let ImpDev = baseCalculo - IrrfAno(descSim, baseCalculo);
    let irrfAnual = calculoAno(irrf, irrfAumento, irrfFerias);
    let IrRestante = ImpDev - baseCalculo;

    //Custos empresariais
    let inssPatronal = salarioBruto * 0.278;
    let fgts = salarioBruto * 0.08;
    let valeTransporteEmpresa = 483.6 - valeTransporte;
    let valeRefeicaoEmpresa = 325 - valeRefeicao;
    let custoEmpresa =
        inssPatronal +
        fgts +
        salario +
        valeTransporteEmpresa +
        valeRefeicaoEmpresa;

    //Todos os document.getElementById().innerHTML = ;
    //Normal.
    document.getElementById("salario").innerHTML = salario;
    document.getElementById("horaNormal").innerHTML = horaNormal;
    document.getElementById("adicionalHExtra").innerHTML = adicionalHExtra;
    document.getElementById("horaExtra").innerHTML = horaExtra;
    document.getElementById("numeroExtra").innerHTML = numeroExtra;
    document.getElementById("horaExtraMes").innerHTML = horaExtraMes;
    document.getElementById("salarioBruto").innerHTML = salarioBruto;
    document.getElementById("inss").innerHTML = inss;
    document.getElementById("dep").innerHTML = despesasHTML;
    document.getElementById("baseIrrf").innerHTML = baseIrrf;
    document.getElementById("irrf").innerHTML = irrf;
    document.getElementById("valeTransporte").innerHTML = valeTransporte;
    document.getElementById("valeRefeicao").innerHTML = valeRefeicao;
    document.getElementById("salarioLiquido").innerHTML = salarioLiquido;
    //Aumento.
    document.getElementById("salarioAumento").innerHTML = salarioAumento;
    document.getElementById("horaNormalAumento").innerHTML = horaNormalAumento;
    document.getElementById("adicionalHExtraAumento").innerHTML =
        adicionalHExtraAumento;
    document.getElementById("horaExtraAumento").innerHTML = horaExtraAumento;
    document.getElementById("numeroExtraAumento").innerHTML =
        numeroExtraAumento;
    document.getElementById("horaExtraMesAumento").innerHTML =
        horaExtraMesAumento;
    document.getElementById("salarioBrutoAumento").innerHTML =
        salarioBrutoAumento;
    document.getElementById("inssAumento").innerHTML = inssAumento;
    document.getElementById("depAumento").innerHTML = despesasAumento;
    document.getElementById("baseIrrfAumento").innerHTML = baseIrrfAumento;
    document.getElementById("irrfAumento").innerHTML = irrfAumento;
    document.getElementById("valeTransporteAumento").innerHTML =
        valeTransporteAumento;
    document.getElementById("valeRefeicaoAumento").innerHTML =
        valeRefeicaoAumento;
    document.getElementById("salarioLiquidoAumento").innerHTML =
        salarioLiquidoAumento;
    //Férias.
    document.getElementById("salarioFerias").innerHTML = salarioFerias;
    document.getElementById("horaNormalFerias").innerHTML = horaNormalFerias;
    document.getElementById("adicionalHExtraFerias").innerHTML =
        adicionalHExtraFerias;
    document.getElementById("HoraExtraFerias").innerHTML = HoraExtraFerias;
    document.getElementById("numeroExtraFerias").innerHTML = numeroExtraFerias;
    document.getElementById("horaExtraMesFerias").innerHTML =
        horaExtraMesFerias;
    document.getElementById("salarioBrutoFerias").innerHTML =
        salarioBrutoFerias;
    document.getElementById("inssFerias").innerHTML = inssFerias;
    document.getElementById("despesasFerias").innerHTML = despesasFerias;
    document.getElementById("baseIrrfFerias").innerHTML = baseIrrfFerias;
    document.getElementById("irrfFerias").innerHTML = irrfFerias;
    document.getElementById("valeTransporteFerias").innerHTML =
        valeTransporteFerias;
    document.getElementById("valeRefeicaoFerias").innerHTML =
        valeRefeicaoFerias;
    document.getElementById("salarioLiquidoFerias").innerHTML =
        salarioLiquidoFerias;
    //Declaração simplificada.
    document.getElementById("rendaAno").innerHTML = rendaAno;
    document.getElementById("contraPrevINSS").innerHTML = contraPrevINSS;
    document.getElementById("descSim").innerHTML = descSim;
    document.getElementById("baseCalculo").innerHTML = baseCalculo;
    document.getElementById("impDev").innerHTML = ImpDev;
    document.getElementById("irrfAnual").innerHTML = irrfAnual;
    document.getElementById("irRestante").innerHTML = IrRestante;
    //Custos empresariais
    document.getElementById("inssPatronal").innerHTML = inssPatronal;
    document.getElementById("fgts").innerHTML = fgts;
    document.getElementById("valeTransporteEmpresa").innerHTML =
        valeTransporteEmpresa;
    document.getElementById("valeRefeicaoEmpresa").innerHTML =
        valeRefeicaoEmpresa;
    document.getElementById("custoEmpresa").innerHTML = custoEmpresa;
}

function Limpar() {
    document.getElementById("salarioHTML").value = "";
}

function fechar() {
    window.close();
}
