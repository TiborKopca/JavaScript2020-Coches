/* 
Pedir al usuario:
1) Su nombre.
2) Tres marcas de coches que ha tenido.
Almacenar en un array las marcas de coches, para posteriormente enseñar esas marcas, junto con su nombre.
Realizar un Mockup: Para poder visualizarlo por el navegador con las mejores condiciones. Visualizar solo los datos proporcionados por el usuario. Pero de una manera correcta.
Simultáneamente, vista en consola, solo los resultados finales.

2020 @ Tibor Kopca
*/

//------------------------------------TASK RESOLVED BY ARRAY---------------------------------------------------
//VARIABLES
var nombre = "";
var coches = [];
var iteracion = ['primero', 'segundo', 'tercero']; //array con las palabras adicionales

//01.FUNCION PREGUNTAR Y OUTPUT NOMBRE
function outputNombre() {
    nombre = prompt("Escribe tu nombre.", "Tu nombre aqui.");      //ALMACENAMOS INPUT DEL USER A GLOBAL VARIABLE

    if (nombre == '') {                                             //COMPROBAMOS SI TODO CORRECTO
        outputNombre();
        console.log("Tu no estas introduciendo un nombre, por favor, hazlo para continuar.");  //CONSOLA OUTPUT
    } else if (nombre == null) {
        document.write("");
        console.warn("Cancelado por user.")                                            //CONSOLA OUTPUT
    } else {
        fillCoches();                                                       //FLUCHO DEL PROGRAMA SIGUE
    }
}

//03.FUNCION OUTPUT
function outputMarcasCochesDocument() {
    document.write(`${nombre} tuvo siguientes coches - ${coches}.`);       //DOCUMENT OUTPUT
    console.log(`Este fueron coches del ${nombre} : ${coches}`);           //CONSOLA OUTPUT
}
//02.FUNCION PREGUNTA POR COCHES
function fillCoches() {
    for (var i = 0; i < 3; i++) {                                    //3 iteraciones porque queremos 3 nombres de coches
        var temp = prompt("Escribe marca de tu " + iteracion[i] + " coche.");
        coches[i] = (temp == null || temp == "") ? "ninguno" : temp;  //si el input es cancelado, se escribe "ninguno" en el array
    }
    outputMarcasCochesDocument();                                    //FLUCHO DEL PROGRAMA SIGUE
}

//MAIN PROGRAM
outputNombre();


//------------------------------------TASK RESOLVED BY OBJECT---------------------------------------------------
//VARIABLES
var iteracion = ['primero', 'segundo', 'tercero']; //array con las palabras adicionales
//OBJECT
var usuario = {
    nombre: '',
    coches: [],
    marca: [],
    modelo: [],
    ano: [],
    muestraCoches: function () {
        console.log(`${this.nombre} tuvo siguientes coches - ${this.coches}.`);             //CONSOLA OUTPUT

        document.getElementById('name').innerHTML = "Mi nombre es " + this.nombre + "\ny estos fueron mis coches : ";   //mostramos nombre en elementro ya definido en HTML

        for (var i=0; i < this.coches.length; i++) {
            var newDiv = document.createElement('div');                                  //creamos nodos/elementos
            newDiv.innerHTML = iteracion[i] + " fue " + this.coches[i]                  //por cada posicion en array 'coches' se escribe al elemento 

            newDiv.setAttribute('class', 'caja naranja');                               //agregar atributos a los caja
            var contenedor = document.getElementById('containerMain');                 //Agregar el elemento al documento
            contenedor.appendChild(newDiv);                                            //pegamos div nuevo al contenedor ya creado en documento
        }
        // for (var coche of this.coches) {
    },
    anadeCoches: function (coche) {
        if (coche === null || coche === "") {                                           //cuando user presiona ok sin rellenar O  
            console.warn("Cancelado por user.");                                        //cuando user presiona cancel por no tener mas datos
        } else {
            this.coches.push(coche);                                                    //almacenamos datos entrados en el array 
        }
    }
}
//MAIN PROGRAM(onClick action)
function main() {
    usuario.nombre = prompt("Escribe su nombre.");                                        //creamos una instancia del usuario y el escribe su nombre
    var indexI = 0;
    while (input !== null) {                                                             //cuando user presiona cancel por no tener mas datos
        if (usuario.coches.length >= 3) {
            console.info("Ya basta, tenemos tres.");
            break;
        } else {
            var input = prompt("Escribe marca de tu " + iteracion[indexI] + " coche");       //solicitamos el usuario los coches en un bucle? 
            usuario.anadeCoches(input);
            // console.log("input: " + input);
            // console.log("iteration value: " + indexI);
            indexI++
            // console.log(usuario.coches.length);
        }
    };
    usuario.muestraCoches();                                                            //imprimimos la informacion
}

