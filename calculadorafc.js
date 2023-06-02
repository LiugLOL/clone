
function calculoIRRF(irrfValor) {
    if (irrfValor <= 1903.98) {
        var resultadoIrrf = 0
        return resultadoIrrf
    }
    else if (irrfValor <= 2826.65 && irrfValor>=1903.98) {
    
        var resultadoIrrf = (irrfValor*0.075)-142.80
        return resultadoIrrf

    }
    else if (irrfValor <= 3751.05) {
        var resultadoIrrf = (irrfValor*0.15)-354.80;
        return resultadoIrrf
        

    }
    else if (irrfValor <= 4664.68) {

        var resultadoIrrf = (irrfValor*0.225)-646.13;
        return resultadoIrrf
    }
    else if (irrfValor >= 4664.48) {
        var resultadoIrrf = (irrfValor*0.275)-869.36;
        return resultadoIrrf
    }
    
}
function Calcular() {
    var s1 = parseFloat(document.getElementById("s1").value); 
    var s2 = parseFloat(document.getElementById("s2").value);
    var s3 = parseFloat(document.getElementById("s3").value);
    var s4 = parseFloat(document.getElementById("dep").value);
    var s5 = parseFloat(document.getElementById("s5").value);
    var aumento = s5/100;

    

    if (isNaN(s1) || isNaN(s2) || isNaN(s3) || isNaN(s4) || isNaN(s5)) { 
        alert("Preencha os campos corretamente!");
        return;
    }
     
    var salario = s1 + s2;//Salário  A
    var horaNormal = salario/220;//Hora normal  B
    var adicionalHExtra = horaNormal/2;//Adicional de 50%  C
    var horaExtra = horaNormal+adicionalHExtra//hora extra+hora  D
    var numeroExtra = s3+s2   
    var horaExtraMes = horaExtra*numeroExtra;//Horas extras por mês
    var salarioBruto = salario + horaExtraMes;//Salário+Hora extra
    var inss = calculoINSS(salarioBruto); //inss
    
    var dependentets = s4//USE VALORES INTEIRROS
    var baseIrrf = salarioBruto-inss-s4//base pro imposto de renda
    var irrf = calculoIRRF(baseIrrf) //imposto de renda
  
    /*var K = I - J; //salário líquido
    
    var L =  I*12.33;
    var M = H*12.33
    var N = M*0.2;
    if (N>=16754.34) {
        N = 16754.34
    }
   
    var O = L-N;//BASEIRA
    var P =  0;//IMPDEV
    

         if (O<=22847.76) {
       var P = 0
           
    }
    else if (O<=33191.80) {
        var parte1 = O*0.075;
        var P = parte1-1716;
        


    }
    else if (O<=45012.60) {
        var parte1 = O*0.15;
        var P = parte1-4257;

       var P = O*0.15 -4257.57
    }
    else if (O<=55976.16) {
        var parte1 = O*0.225
        var P = parte1-7633.51
       
    }
    else if (O>55976.16) {
        var parte1= O*0.275
       var P = O - 10432.32
    }
    var Q = J*12.33
    var R = Q - P;*/
   
var salarioFix =  parseFloat(salario.toFixed(4));
var horaNormalFix =  parseFloat(horaNormal.toFixed(4));
var adicionalHoraExtraFix =  parseFloat(adicionalHExtra.toFixed(4));
var horaExtraFix =  parseFloat(horaExtra.toFixed(4));
var numeroExtrasFix =  parseFloat(numeroExtra.toFixed(4));
var horaExtraMesFix =  parseFloat(horaExtraMes.toFixed(4));
var salarioBrutoFix =  parseFloat(salarioBruto.toFixed(4));
var inssFix =  parseFloat(inss.toFixed(4));
var baseIrrfFix =  parseFloat(baseIrrf.toFixed(4));
var irrfFix =  parseFloat(irrf.toFixed(4));














    /*F
      O
      L
      H
      A
      
      1

      B
      I
      M
      E
      S
      T
      R
      E*/
    
      //primeira coluna
      //MESES
      /*é aqui onde eu começo a fazer os meses, começando por desde janeiro até abril */
      //usar o K
      //HEXTRA
      //inss
      //dependentes
      //baseir
      //irrf
      /*acabo*/
      /*agr é de maio, pula julho, e o resto do ano */
      
      var salarioAumento= salario*aumento+salario
      var horaNormalAumento=salarioAumento/220
      var adicionalHExtraAumento=horaNormalAumento/2
      var horaExtraAumento=horaNormalAumento+adicionalHExtraAumento
      var numeroExtrasAumento=numeroExtra
      var horaExtraMesAumento= horaExtraAumento*numeroExtrasAumento
      var salarioBrutoAumento=salarioAumento+horaExtraMesAumento
      var inssAumento=calculoINSS(salarioBrutoAumento)
      var dependentesAumento = s4*189.59 //USE VALORES INTEIRROS
      var baseIrrfAumento = salarioBrutoAumento-inss-s4//base pro imposto de renda
      var IrrfAumento = calculoIRRF(baseIrrfAumento);



var salarioAumentoFix =  parseFloat(salarioAumento.toFixed(4));
var horaNormalAumentoFix =  parseFloat(horaNormalAumento.toFixed(4));
var adicionalHExtraAumentoFix =  parseFloat(adicionalHExtraAumento.toFixed(4));
var horaExtraAumento =  parseFloat(horaExtraAumento.toFixed(4));
var numeroExtraAumentoFix =  parseFloat(numeroExtrasAumento.toFixed(4));
var horaExtraAumentoFix =  parseFloat(horaExtraMesAumento.toFixed(4));
var salarioBrutoAumentoFix =  parseFloat(salarioBrutoAumento.toFixed(4));
var inssAumentoFix =  parseFloat(inssAumento.toFixed(4));
var baseIrrfAumentoFix =  parseFloat(baseIrrfAumento.toFixed(4));
var IrrfAumentoFix =  parseFloat(IrrfAumento.toFixed(4));


      /*ferias */
      var salarioFerias= salarioAumento*0.33+salario
      var horaNormalFerias=salarioFerias/220
      var adicionalHextraFerias=horaNormalFerias/2
      var HoraExtraFerias=horaNormalFerias+adicionalHextraFerias
      var numeroExtraMesFerias=numeroExtra
      var horaExtraMesFerias= HoraExtraFerias*numeroExtraMesFerias
      var salarioBrutoFerias=salarioFerias+horaExtraMesFerias
      var inssFerias= calculoINSS(salarioBrutoFerias)
      var dependentesFerias = s4*189.59 //USE VALORES INTEIRROS
      var baseIrrfFerias = salarioBrutoFerias-inss-s4//base pro imposto de renda
      var irrfFerias = calculoIRRF(baseIrrfFerias)
      var salarioLiquidoFerias=baseIrrfFerias-irrfFerias

var aafer =  parseFloat(salarioFerias.toFixed(4));
var bbfer =  parseFloat(horaNormalFerias.toFixed(4));
var ccfer =  parseFloat(adicionalHextraFerias.toFixed(4));
var ddfer =  parseFloat(HoraExtraFerias.toFixed(4));
var eefer =  parseFloat(numeroExtraMesFerias.toFixed(4));
var fffer =  parseFloat(horaExtraMesFerias.toFixed(4));
var ggfer =  parseFloat(salarioBrutoFerias.toFixed(4));
var hhfer =  parseFloat(inssFerias.toFixed(4));
var iifer =  parseFloat(baseIrrfFerias.toFixed(4));
var jjfer =  parseFloat(irrfFerias.toFixed(4));


document.getElementById("ano").innerHTML = salarioFix;
document.getElementById('bno').innerHTML = horaNormalFix
document.getElementById("cno").innerHTML = adicionalHoraExtraFix;
document.getElementById("dno").innerHTML = horaExtraFix;
document.getElementById("eno").innerHTML = numeroExtrasFix;
document.getElementById("fno").innerHTML = horaExtraMesFix;
document.getElementById("gno").innerHTML = salarioBrutoFix;
document.getElementById("hno").innerHTML = inssFix;
document.getElementById("depno").innerHTML = dependentets;
document.getElementById("ino").innerHTML = baseIrrfFix;
document.getElementById("jno").innerHTML = irrfFix

//aumento
document.getElementById("saplus").innerHTML = salarioAumentoFix;
document.getElementById('sbplus').innerHTML = horaNormalAumentoFix;
document.getElementById("scplus").innerHTML = adicionalHExtraAumentoFix;
document.getElementById("sdplus").innerHTML = horaExtraAumento;
document.getElementById("seplus").innerHTML = numeroExtraAumentoFix;
document.getElementById("sfplus").innerHTML = horaExtraAumentoFix;
document.getElementById("sgplus").innerHTML = salarioBrutoAumentoFix;
document.getElementById("shplus").innerHTML = inssAumentoFix;
document.getElementById("sdepplus").innerHTML = dependentesAumento;
document.getElementById("siplus").innerHTML = baseIrrfAumentoFix;
document.getElementById("sjplus").innerHTML = IrrfAumentoFix;

//ferias
document.getElementById("safer").innerHTML = aafer;
document.getElementById('sbfer').innerHTML = bbfer;
document.getElementById("scfer").innerHTML = ccfer;
document.getElementById("sdfer").innerHTML = ddfer;
document.getElementById("sefer").innerHTML = numeroExtra;
document.getElementById("sffer").innerHTML = horaExtraMesFerias;
document.getElementById("sgfer").innerHTML = ggfer;
document.getElementById("shfer").innerHTML = hhfer;
document.getElementById("sdepfer").innerHTML = dependentesFerias;
document.getElementById("sifer").innerHTML = iifer;
document.getElementById("sjfer").innerHTML = jjfer
//O K
var salarioLiquidoFerias=baseIrrfFerias-irrfFerias
var salarioLiquido = baseIrrf - irrf; //salário líquido
var salarioLiquidoAumento= baseIrrfAumento-IrrfAumento


//rend trib ano
var rendaTotalAno=salarioLiquido*4+6*salarioLiquidoAumento+2*salarioLiquidoFerias

//13 salario
var decimoTerceiro=rendaTotalAno/12

document.getElementById('srta').innerHTML= rendaTotalAno;
document.getElementById('sdt').innerHTML= decimoTerceiro;
      
      
  }
      
    
    
    function Limpar(s1){
		document.getElementById(s1).value = "";
		
    }
  
  function fechar(){
        window.close();
    }
    function calculoINSS(osalario) {
        if (osalario <= 1212) {
            
            var ieniss = (osalario*0.075)+90.90
            return ieniss;
    
        
        }
        else if (osalario < 2427.35 && osalario >1212) {
    
            var ieniss = (osalario-1212)*0.09+109.38
            return ieniss;
        }
        else if (osalario < 3641.03 && osalario>2427.35) {
    
            var ieniss = (osalario-2427.35)*0.12+145.64;
            return ieniss;
        }
        else if (osalario < 7087.22 && osalario>3641.03) {
    
            var ieniss = (osalario-3641.03)*0.14+482.47;
            return ieniss;
            
            
        }
        else if (osalario  > 7087.22) {
    
            var ieniss = 828.39;
            return ieniss;
        }
    }
function login() {
    user = document.getElementById("v1").value;
    senha = document.getElementById("v2").value;

    if(user =="teste" && senha=="teste") {
        alert("feito")
      
        location.href("https://fortunatocontas.com.br/fortunas.html")
    }else {
        alert("tá errado isso aí bobão")
        window.close()
    }

    }
