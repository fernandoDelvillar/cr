/**
 * 
 * @type @exp;window@call;openDatabase
 */

var db = window.openDatabase("Database", "1.0", "Club Royal", 30 * 1024);
var ItemId = 0;

function CreaTablas(tx) {
    tx.executeSql('DROP TABLE IF EXISTS CATEGORIAS');
    tx.executeSql('CREATE TABLE IF NOT EXISTS CATEGORIAS("id" INTEGER PRIMARY KEY,"nombre" CHAR(20) NOT NULL, "imagen" TEXT NOT NULL,  "estatus" INTEGER NOT NULL)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES (1,"ArtÍculos de Viaje","img/resized/ALLY-16-08-201_100x100.jpg",1);');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(2,"Aventura al aire libre","img/resized/ALLY-33-12-298_100x100.jpg",1);');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(3,"Decoración y hogar","img/resized/ALLY-38-02-549_100x100.jpg",1);');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(4,"Entretenimiento","img/resized/ALLY-10-03-444_100x100.jpg",1);');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(5,"Para Él","img/resized/ALLY-04-01-017_100x100.jpg",1);');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(6,"Para Ella","img/resized/ALLY-29-10-289_100x100.jpg",1);');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(7,"Niños y bebés","img/resized/ALLY-03-06-010_100x100.jpg",1);');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(8,"Experiencias","img/resized/ALLY-95-04-948.jpg",1);');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(9,"Línea Blanca","img/resized/ALLY-19-02-928.jpg",1);');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(10,"Tecnología","img/resized/ALLY-90-05-941_100x100.jpg",1);');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(11,"Salud y Belleza","img/resized/ALLY-04-01-017_100x100.jpg",1);');
}

function errorCB(err) {
// Esto se puede ir a un Log de Error diría el purista de la oficina, pero como este es un ejemplo pongo el MessageBox.Show :P
    alert("Error processing SQL: Codigo: " + err.code + " Mensaje: " + err.message);
}

function successCB() {
    return true;
}

function getCategorias() {
    return db.transaction(queryCategorias, errorCB);
}

function queryCategorias(tx) {
    return tx.executeSql('SELECT * FROM CATEGORIAS WHERE estatus=1;', [], categoriasSuccess, errorCB);
}

function categoriasSuccess(tx, results) {
    var jsonObj = [];
    if (results.rows.length !== undefined) {
        var len = results.rows.length;
        for (var i = 0; i < len; i++) {
            var temp = {"nombre": results.rows.item(i).nombre, "imagen": results.rows.item(i).imagen};
            jsonObj.push(temp);
        }
    }
    return jsonObj;
}

function CreaDB() {
    db.transaction(CreaTablas, errorCB, successCB);
}

function Agregar(n) {
    switch (n) {
        case 1:
            db.transaction(AgregaItem, errorCB, successCB);
            break;
        default:
    }
}
