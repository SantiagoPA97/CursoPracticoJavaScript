//Cuadrado
console.group('Cuadrado');

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado ** 2;
}
console.groupEnd();

console.group('Triangulo');

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base*altura)/2;
}

console.groupEnd();

//Circulo
console.group('Circulo');

function diametroCirculo(radio) {
    return radio * 2;
} 

const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

//Área circulo
function areaCirculo(radio) {
    return PI * (radio**2);
}

console.groupEnd();



//Triángulo isosceles
function alturaTrianguloIsosceles(lado1, lado2, base) {
    if (lado1 == lado2 && lado1 != base) {
        return Math.sqrt(lado1**2-((lado2**2)/4))
    }
}


//Aqui se interactua con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputLado1");
    const inputLado2 = document.getElementById("InputLado2");
    const inputBase = document.getElementById("InputBase");
    const valorLado1 = inputLado1.value;
    const valorLado2 = inputLado2.value;
    const valorBase = inputBase.value;
    const perimetro = perimetroTriangulo(valorLado1, valorLado2, valorBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputBase");
    const inputAltura = document.getElementById("InputAltura");
    const valorBase = inputBase.value;
    const valorAltura = inputAltura.value;
    const area = areaTriangulo(valorBase, valorAltura);
    alert(area);
}

function calcularDiametro() {
    const input = document.getElementById("InputRadioCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputRadioCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputRadioCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}