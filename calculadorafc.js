

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
        var part1 = G*0.075;
        var H = part1+90.90;

    
    }
    else if (G <= 2427.35, G >=1212) {
    
        var part1 = G -1212;
        var part2 = part1*0.09;
        var H = part2+109.38;
    }
    else if (G <= 3641.03, G>=2427.35) {
        var part1 = G-2427.35;
        var part2 = part1*0.12;
        var H = part2+145.64;
    }
    else if (G <= 7087.22, G>=3641.03) {
        var part1 = G -3641.03;
        var part2 = part1*0.14;
        var H = part2+482.47;
        
        
    }
    else if (G  >= 7087.22) {
 
        
        var H = 828.39;
    }
    var I = G-H//base pro imposto de renda
    var J = 0 //imposto de renda
    if (I <= 1903.98) {
        var J = 0
    }
    else if (I <= 2826.65, I>=1903.98) {
        var parte1 = I*0.075;
        var J = parte1-142.80;
        

    }
    else if (I <= 3751.05) {
        var parte1 = I*0.15;
        var J = parte1-354.80;
        
        

    }
    else if (I <= 4664.68) {
        var parte1 = I*0.225;
        var J = parte1-646.13;
        
    }
    else if (I >= 4664.48) {
        var parte1 = I*0.2750;
        var J = parte1-869.36;

    }
    
    var K = I - J; //salário líquido
    
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
        var partee1 = O*0.075;
        var P = partee1-1716;
        


    }
    else if (O<=45012.60) {
        var partee1 = O*0.15;
        var P = partee1-4257;

       var P = O*0.15 -4257.57
    }
    else if (O<=55976.16) {
        var partee1 = O*0.225
        var P = partee1-7633.51
       
    }
    else if (O>55976.16) {
        var partee1= O*0.275
       var P = partee1 - 10432.32
    }
    var Q = J*12.33
    var R = Q - P;
var aa =  parseFloat(A.toFixed(4));
var bb =  parseFloat(B.toFixed(4));
var cc =  parseFloat(C.toFixed(4));
var dd =  parseFloat(D.toFixed(4));
var ee =  parseFloat(E.toFixed(4));
var ff =  parseFloat(F.toFixed(4));
var gg =  parseFloat(G.toFixed(4));
var hh =  parseFloat(H.toFixed(4));
var ii =  parseFloat(I.toFixed(4));
var jj =  parseFloat(J.toFixed(4));
var kk =  parseFloat(K.toFixed(4));
var ll =  parseFloat(L.toFixed(4));
var mm =  parseFloat(M.toFixed(4));
var nn =  parseFloat(N.toFixed(4));
var oo =  parseFloat(O.toFixed(4));
var pp =  parseFloat(P.toFixed(4));
var qq =  parseFloat(Q.toFixed(4));
var rr =  parseFloat(R.toFixed(4));










    document.getElementById("saidaa").innerHTML = aa;
    document.getElementById('saidab').innerHTML = bb
    document.getElementById("saidac").innerHTML = cc;
    document.getElementById("saidad").innerHTML = dd;
    document.getElementById("saidae").innerHTML = ee;
    document.getElementById("saidaf").innerHTML = ff;
    document.getElementById("saidag").innerHTML = gg;
    document.getElementById("saidah").innerHTML = hh;
    document.getElementById("saidai").innerHTML = ii;
    document.getElementById("saidaj").innerHTML = jj
    document.getElementById("saidak").innerHTML = kk;
    document.getElementById("saidal").innerHTML = ll;
    document.getElementById("saidam").innerHTML = mm;
    document.getElementById("saidan").innerHTML = nn;
    document.getElementById("saidao").innerHTML = oo;
    document.getElementById("saidap").innerHTML = pp;
    document.getElementById("saidaq").innerHTML = qq;
    document.getElementById("saidar").innerHTML = rr;

      
    
    }
    function Limpar(s1){
		document.getElementById(s1).value = "";
		
    }
  
  function fechar(){
        window.close();
    }
