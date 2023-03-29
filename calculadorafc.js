

function Calcular() {
    var s1 = parseFloat(document.getElementById("s1").value); 
    var s2 = parseFloat(document.getElementById("s2").value);
    var s3 = parseFloat(document.getElementById("s3").value);
    

    if (isNaN(s1) || isNaN(s2) || isNaN(s3)) { 
        alert("Preencha os campos corretamente!");
        return;
    }
     
    var A = s1 + s2;//Salário  A
    var B = A/220;//Hora normal  B
    var C = B/2;//Adicional de 50%  C
    var D = B+C//hora extra+hora  D
    var E = s3+s2   
    var F = D*E;//Horas extras por mês
    var G = A + F;//Salário+Hora extra
    var H = 0; //inss
    if (G <= 1212) {
        var H = G*0.075
    
    }
    else if (G <= 2427.35) {
    
        var H = (G -1212)*0.09 + 90.9;
    }
    else if (G <= 3641.03) {
        var H = (G-2427.35)*0.12 + 109.38;
    }
    else if (G <= 7087.22) {
        var H = (G-3641.03)*0.14 + 145.64;
    }
    else if (G  >= 7087.22) {
        var H = 828.39;
    }
    var I = G-H//base pro imposto de renda
    var J = 0 //imposto de renda
    if (I <= 1903.98) {
        var J = 0
    }
    else if (I <= 2826.65) {
        var J = (J*0.075)-142.8
    }
    else if (I <= 3751.05) {
        var J = I*0.15-354.8
    }
    else if (I <= 4664.68) {
        var J = I*0.225-646.13
    }
    else if (I >= 4664.48) {
        var J = I*0.3750-69.36
    }
    
    var K = I - J; //salário líquido
    
    var L =  I*12.33;
    var M = H*12.33
    var N = M*0.2;
    if (N>16754.34) {
        N = 16754.34
    }
   /* if (L<16754.34)  {
        var N = L*0.2

    }    
    else if (L<=22847.76) {
       var N= 0
           
    }
    else if (L<=33191.80) {
       var N = L*0.075-1716
    }
    else if (L<=45012.60) {
       var N = L*0.15 - 4257.57
    }
    else if (L<=55976.16) {
       var N = L*0.225 - 7633.51
    }
    else if (L>55976.16) {
       var N = L*0.275 - 10432.32
    }
    */
    var O = L-N;//BASEIRA
    var P =  0;//IMPDEV
    

         if (O<=22847.76) {
       var P = 0
           
    }
    else if (O<=33191.80) {
       var P = O*0.075-1716
    }
    else if (O<=45012.60) {
       var P = O*0.15 -4257.57
    }
    else if (O<=55976.16) {
       var P = O*0.225 - 7633.51
    }
    else if (O>55976.16) {
       var P = O*0.275 - 10432.32
    }
    var Q = J*12.33
    var R = Q - P;


    
    document.getElementById("saidasalario").innerHTML = "Salário:   " + A;
    document.getElementById('saidahora').innerHTML = "Hora normal:   "+ B;
    document.getElementById("saidahoraextra").innerHTML = "Adicional de 50%:   "+ C;
    document.getElementById("saidahes").innerHTML = "Hora extra:   " + D;
    document.getElementById("saidahextrabase").innerHTML = "Horas extras por dia:   " + E;
    document.getElementById("saidahem").innerHTML = "Horas extras por mês:   " + F;
    document.getElementById("saidavalorhe").innerHTML = "Hora extra + Salário:   " + G;
    document.getElementById("saidainss").innerHTML = "INSS:   " + H;
    document.getElementById("saidabaseirrf").innerHTML = "Base p/ Imposto de Renda:   " + I;
    document.getElementById("saidairrf").innerHTML = "Imposto de Renda:   " + J;
    document.getElementById("saidasalariol").innerHTML = "Salário líquido:   " + K;
    document.getElementById("saidainssp").innerHTML = "Renda Total/ano:   " + L;
    document.getElementById("saidafgts").innerHTML = "Contr.Prev.INSS/ano:   " + M;
    document.getElementById("saidacustoemp").innerHTML = "Desconto Simpl.:  " + N;
    document.getElementById("saidarendatot").innerHTML = "Base Cálculo:  " + O;
    document.getElementById("saidadescsim").innerHTML = "Imp. Devido:  " + P;
    document.getElementById("saidabaseira").innerHTML = "IRRF:  " + Q;
    document.getElementById("saidaimpdev").innerHTML = "IR Restante(PG):  " + R;

      
    
    }
    function Limpar(s1, s2, s3){
		document.getElementById(s1).value = "";
		document.getElementById(s2).value = "";
        document.getElementById(s3).value = "";
    
    }

