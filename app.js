const argv = require('./config/yargs').argv;
var colors = require('colors');


//Tabla de multiplicar
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch( comando ){

    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado: ${ archivo}`.green))
        .catch(error =>
            console.log(error)
        );
    break;
    
    default: 
    console.log('Comando no reconocido'); 
}


 //console.log(argv.base);

//let parametro = argv[2];
//let base = parametro.split('=')[1]

