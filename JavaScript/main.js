function tabla() {
    var tabla = new Array();
    for (var i = 1; i <= 6; i++) {
        tabla[i] = new Array();
        for (var j = 0; j < 8; j++) {
            tabla[i][j] = "0";
        }
    }
    return tabla;
}

function imprimir(tabla) {
    var x;
    for (var i = 1; i <= 6; i++) {
        x = document.getElementById("tabla").rows[i].cells;
        for (var j = 0; j < 8; j++) {
            if (tabla[i][j] == "0") {
                x[j].innerHTML = "<div class='vacio'></div>";
            } else if (tabla[i][j] == "1") {
                x[j].innerHTML = "<div class='jugador1'></div>";
            } else {
                x[j].innerHTML = "<div class='jugador2'></div>";
            }
        }
    }
}

function insertarTabla(turno, columna, tabla) {
    for (var i = 1; i < tabla.length; i++) {
        if (tabla[tabla.length - i][columna] == "0") {
            tabla[tabla.length - i][columna] = turno;
            break;
        }
    }
    return tabla;
}

function ganador(tabla, nombre1, nombre2) {
    // Comprueba por filas
    var filas = "";
    for (var i = 1; i < tabla.length; i++) {
        for (var j = 0; j < 8; j++) {
            filas += tabla[i][j];
        }

        if (filas.includes("1111")) {
            document.getElementById('ganador').innerHTML = nombre1 + " gana!";
            document.getElementById('resultado').style.display = "block";
            break;
        } else if (filas.includes("2222")) {
            document.getElementById('ganador').innerHTML = nombre2 + " gana!";
            document.getElementById('resultado').style.display = "block";
            break;
        }
        filas = "";
    }

    // Comprueba por columnas
    columnas = "";
    for (var i = 0; i < 8; i++) {
        for (var j = 1; j < tabla.length; j++) {
            columnas += tabla[j][i];
        }

        if (columnas.includes("1111")) {
            document.getElementById('ganador').innerHTML = nombre1 + " gana!";
            document.getElementById('resultado').style.display = "block";
            break;
        } else if (columnas.includes("2222")) {
            document.getElementById('ganador').innerHTML = nombre2 + " gana!";
            document.getElementById('resultado').style.display = "block";
            break;
        }
        columnas = "";
    }

    // Comprueba en diagonal
    // De izq-der
    var diagonal1 = tabla[4][0] + tabla[3][1] + tabla[2][2] + tabla[1][3];
    var diagonal2 = tabla[5][0] + tabla[4][1] + tabla[3][2] + tabla[2][3] + tabla[1][4];
    var diagonal3 = tabla[6][0] + tabla[5][1] + tabla[4][2] + tabla[3][3] + tabla[2][4] + tabla[1][5];
    var diagonal4 = tabla[6][1] + tabla[5][2] + tabla[4][3] + tabla[3][4] + tabla[2][5] + tabla[1][6];
    var diagonal5 = tabla[6][2] + tabla[5][3] + tabla[4][4] + tabla[3][5] + tabla[2][6] + tabla[1][7];
    var diagonal6 = tabla[6][3] + tabla[5][4] + tabla[4][5] + tabla[3][6] + tabla[2][7];
    var diagonal7 = tabla[6][4] + tabla[5][5] + tabla[4][6] + tabla[3][7];

    // De der-izq
    var diagonal8 = tabla[3][0] + tabla[4][1] + tabla[5][2] + tabla[6][3];
    var diagonal9 = tabla[2][0] + tabla[3][1] + tabla[4][2] + tabla[5][3] + tabla[6][4];
    var diagonal10 = tabla[1][0] + tabla[2][1] + tabla[3][2] + tabla[4][3] + tabla[5][4] + tabla[6][5];
    var diagonal11 = tabla[1][1] + tabla[2][2] + tabla[3][3] + tabla[4][4] + tabla[5][5] + tabla[6][6];
    var diagonal12 = tabla[1][2] + tabla[2][3] + tabla[3][4] + tabla[4][5] + tabla[5][6] + tabla[6][7];
    var diagonal13 = tabla[1][3] + tabla[2][4] + tabla[3][5] + tabla[4][6] + tabla[5][7];
    var diagonal14 = tabla[1][4] + tabla[2][5] + tabla[3][6] + tabla[4][7];

    if (diagonal1.includes("1111") || diagonal2.includes("1111") ||
        diagonal3.includes("1111") || diagonal4.includes("1111") ||
        diagonal5.includes("1111") || diagonal6.includes("1111") ||
        diagonal7.includes("1111") || diagonal8.includes("1111") ||
        diagonal9.includes("1111") || diagonal10.includes("1111") ||
        diagonal11.includes("1111") || diagonal12.includes("1111") ||
        diagonal13.includes("1111") || diagonal14.includes("1111")) {

        document.getElementById('ganador').innerHTML = nombre1 + " gana!";
        document.getElementById('resultado').style.display = "block";

    } else if (diagonal1.includes("2222") || diagonal2.includes("2222") ||
        diagonal3.includes("2222") || diagonal4.includes("2222") ||
        diagonal5.includes("2222") || diagonal6.includes("2222") ||
        diagonal7.includes("2222") || diagonal8.includes("2222") ||
        diagonal9.includes("2222") || diagonal10.includes("2222") ||
        diagonal11.includes("2222") || diagonal12.includes("2222") ||
        diagonal13.includes("2222") || diagonal14.includes("2222")) {

        document.getElementById('ganador').innerHTML = nombre2 + " gana!";
        document.getElementById('resultado').style.display = "block";

    }
}

var nombre1 = "";
var nombre2 = "";
document.getElementById('tablero').style.display="none";

function comenzar() {
    nombre1 = document.getElementById('jugador1').value;
    nombre2 = document.getElementById('jugador2').value;
    document.getElementById('jugador').innerHTML = nombre1;
    document.getElementById('entrada').style.display = "none";
    document.getElementById('tablero').style.display="block";
}

var tabla = tabla();
imprimir(tabla);

function columna(id) {
    var turno = document.getElementById('turno').value;
    var columna = id.value;
    console.log("columna = " + columna);

    // Cambio de turno
    if (turno == "1") {
        tabla = insertarTabla(turno, columna, tabla);
        imprimir(tabla);
        ganador(tabla, nombre1, nombre2);
        turno = "2";
        console.log("turno: " + turno);
        document.getElementById('turno').value = turno;
        document.getElementById('jugador').innerHTML = nombre2;

    } else if (turno == "2") {
        tabla = insertarTabla(turno, columna, tabla);
        imprimir(tabla);
        ganador(tabla, nombre1, nombre2);
        turno = "1";
        console.log("turno: " + turno);
        document.getElementById('turno').value = turno;
        document.getElementById('jugador').innerHTML = nombre1;
    }
}

// Acabar partida
function aceptar() {
    location.reload();
}