/**
 * Conversión de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies o pulgadas.
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgadas.
 * @return
 */
function cambiarUnidades(id, valor){
    var metro, pulgada, pie, yarda;

    if(valor.includes(",")){
        valor = valor.replace(",",".")
    }

if(isNaN(valor)){
        alert("Se ingresó un valor inválido de " +id);
        metro = " ";
        pulgada = " ";
        pie = " ";
        yarda = " ";
     }else if(id=="metro"){
       metro = valor;
       pulgada = 39.3701*valor;
       pie = 3.28084*valor;
       yarda = 1.09361*valor;
      }else if (id=="pulgada"){
       pulgada = valor;
       metro = 0.0254*valor;
       pie = 0.0833333*valor;
       yarda = 0.0277778*valor;
     }else if (id=="yarda"){
       yarda = valor;
       metro = 0.9144*valor;
       pie = 3*valor;
       pulgada = 36*valor;
     }else if (id=="pie"){
       pie = valor;
       metro = 0.3048*valor;
       yarda = 0.333333*valor;
       pulgada = 12*valor;
     }

      document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
      document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
      document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
      document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;
}

function convertirGR(id){
    var grad, rad;
    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if (id=="radianes"){
       rad = document.getElementById("radianes").value;
       grad = (rad*180)/Math.PI
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMo){

    if (valorMo=="val_mostrar"){
        document.getElementById("divMo").style.display = 'block';
    }else if (valorMo=="val_ocultar"){
        document.getElementById("divMo").style.display = 'none';
    }
}

function calcularSuma(){
    var num1, num2;

    num1=Number (document.getElementsByName("sum_num1")[0].value); // puede ser de las 2 maneras (Esta)
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML = num1 + Number(num2); // o esta.
}

function calcularResta(){
    var num1, num2;

    num1=Number (document.getElementsByName("res_num1")[0].value);
    num2=Number (document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML = num1 - num2;
}

function calcularMultiplicacion(){
    var num1, num2;

    num1= document.getElementsByName("mul_num1")[0].value;
    num2= document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML = Number(num1) * Number(num2);
}

function calcularDivision(){
    var num1, num2;

    num1= Number (document.getElementsByName("div_num1")[0].value);
    num2= document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML = num1 / Number(num2);
}

function cargarWeb(){
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

function cargarResultado(){
    var urlComp, can, un;

    urlComp = window.location.href.split("/")[5];

    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];

    document.getElementById("dist").value = can + " " + un;
}

function guardarLocalStorage(){
    let distancia, unidad;

    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open('2_web.html');
}

function cargarLocalStorage(){
    let cant, un;

    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadesLS");

    document.getElementById("dist").value = cant + " " + un;
}