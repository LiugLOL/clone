

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
        var J = I*0.075-142.8
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
var aa =  parseFloat(A.toFixed(6));
var bb =  parseFloat(B.toFixed(6));
var cc =  parseFloat(C.toFixed(6));
var dd =  parseFloat(D.toFixed(6));
var ee =  parseFloat(E.toFixed(6));
var ff =  parseFloat(F.toFixed(6));
var gg =  parseFloat(G.toFixed(6));
var hh =  parseFloat(H.toFixed(6));
var ii =  parseFloat(I.toFixed(6));
var jj =  parseFloat(J.toFixed(6));
var kk =  parseFloat(K.toFixed(6));
var ll =  parseFloat(L.toFixed(6));
var mm =  parseFloat(M.toFixed(6));
var nn =  parseFloat(N.toFixed(6));
var oo =  parseFloat(O.toFixed(6));
var pp =  parseFloat(P.toFixed(6));
var qq =  parseFloat(Q.toFixed(6));
var rr =  parseFloat(R.toFixed(6));










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
