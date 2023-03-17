

function Calcular() {
    var s1 = parseFloat(document.getElementById("s1").value); 
    var s2 = parseFloat(document.getElementById("s2").value);
    var s3 = parseFloat(document.getElementById("s3").value);

    if (isNaN(s1) || isNaN(s2) || isNaN(s3)) { 
        alert("Preencha os campos corretamente!");
        return;
    }

    var hextrabase = s3+s2
    var salario = s1 + s2;//Salário  A
    var hora = salario/220;//Hora normal  B
    var horaextra = hora/2;//Adicional de 50%  C
    var hes = horaextra+hora//hora extra+hora  D
    var hem = hes *s3;//Horas extras por mês
    var valorhe = salario + hem;//Salário+Hora extra
    var inss = 0; //inss
    if (valorhe <= 1212) {
        var inss = valorhe*0.075
    
    }
    else if (valorhe <= 2427.35) {
    
        var inss = (valorhe-1212)*0.09+90.9;
    }
    else if (valorhe <= 3641.03) {
        var inss = (valorhe-2427.35)*0.12+109.38;
    }
    else if (valorhe <= 7087.22) {
        var inss = (valorhe-3641.03)*0.14+145.64;
    }
    else if (valorhe >= 7087.22) {
        var inss = 828.39;
    }
    var baseirrf = valorhe - inss//base pro imposto de renda
    var irrf = 0 //imposto de renda
    if (baseirrf <= 1903.98) {
        var irrf = 0
    }
    else if (baseirrf <= 2826.65) {
        var irrf = (baseirrf*0.075)-142.8
    }
    else if (baseirrf <= 3751.05) {
        var irrf = baseirrf*0.15-354.8
    }
    else if (baseirrf <= 4664.68) {
        var irrf = baseirrf*0.225-646.13
    }
    else if (baseirrf >= 4664.48) {
        var irrf = baseirrf*0.3750-69.36
    }
    
    var salariol = baseirrf - irrf; //salário líquido
    var inssp = valorhe*0.278; //inss patronal
    var fgts = valorhe*0.08 //FGTS
    var custoemp = valorhe+inssp+fgts //custo da empresa para manter o funcionário
    
    document.getElementById("saidasalario").innerHTML = "Salário:   " + salario;
    document.getElementById('saidahora').innerHTML = "Hora normal:   "+ hora;
    document.getElementById("saidahoraextra").innerHTML = "Adicional de 50%:   "+ horaextra;
    document.getElementById("saidahes").innerHTML = "Hora extra:   " + hes;
    document.getElementById("saidahextrabase").innerHTML = "Horas extras por dia:   " +hextrabase;
    document.getElementById("saidahem").innerHTML = "Horas extras por mês:   " + hem;
    document.getElementById("saidavalorhe").innerHTML = "Hora extra + Salário:   " +valorhe;
    document.getElementById("saidainss").innerHTML = "INSS:   " +inss;
    document.getElementById("saidabaseirrf").innerHTML = "Base p/ Imposto de Renda:   " +baseirrf;
    document.getElementById("saidairrf").innerHTML = "Imposto de Renda:   " +irrf;
    document.getElementById("saidasalariol").innerHTML = "Salário líquido:   " +salariol;
    document.getElementById("saidainssp").innerHTML = "INSS Patronal:   " +inssp;
    document.getElementById("saidafgts").innerHTML = "FGTS:   " +fgts;
    document.getElementById("saidacustoemp").innerHTML = "Custo empresa:  " +custoemp;
    

      
    
    }
