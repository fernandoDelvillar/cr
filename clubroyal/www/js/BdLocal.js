/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
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
    db.transaction(queryDB, errorCB);
    return true;
}

function getCategorias() {
    var jsonObj = [];
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM CATEGORIAS WHERE estatus=1;', [], function(tx, results) {
            var len = results.rows.length;
            alert(len);
            for (var i = 0; i < len; i++) {
                jsonObj.push({"nombre": results.rows.item(i).nombre, "imagen": results.rows.item(i).imagen});
            }

        }, errorCB);
    }, errorCB);
    return jsonObj;
}

function queryDB(tx) {
}

function querySuccess(tx, results) {
    alert("Returned rows = " + results.rows.length);
    // this will be true since it was a select statement and so rowsAffected was 0
    if (!results.rowsAffected) {
        alert('No rows affected!');
        return false;
    }
    // for an insert statement, this property will return the ID of the last inserted row
    return true;
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

function AgregaItem(tx) {
    tx.executeSql('INSERT INTO Items (Nombre,Descripcion,Precio,Existencia) VALUES (?,?,?,?)', [$('#tbNombre').val(), $('#tbDescripcion').val(), $('#tbPrecio').val(), $('#tbExistencia').val()]);
}

function Mostrar(n) {
    switch (n) {
        case 1:
            db.transaction(ObtenerItems, errorCB);
            break;
        case 2:
            db.transaction(ObtenerItem, errorCB);
            break;
            break;
        default:

    }
}

function ObtenerItems(tx) {
    tx.executeSql('SELECT * FROM Items', [], MuestraItems, errorCB);
}

function ObtenerItem(tx) {
    tx.executeSql('SELECT * FROM Items WHERE itemId=' + ItemId, [], MuestraItem, errorCB);
}

function MuestraItem(tx, results) {
    var len = results.rows.length;
    if (len > 0) {
        if (results.rows.item(0).Nombre != "") {
            $('#tbTarjetaDescripcion').val(results.rows.item(0).Nombre);
        }
        if (results.rows.item(0).Descripcion != "") {
            $('#tbFechaCorte').val(results.rows.item(0).Descripcion);
        }
        if (results.rows.item(0).Precio != "") {
            $('#tbFechaLimitePago').val(results.rows.item(0).Precio);
        }
        if (results.rows.item(0).Existencia != "") {
            $('#tbLimiteCredito').val(results.rows.item(0).Existencia);
        }
    }
}

function MuestraItems(tx, results) {
    var len = results.rows.length;
    for (var i = 0; i < len; i++) {
        $("#ListaEliminarId" + results.rows.item(i).itemId).remove();
        $("#ListaEliminar").append('<li class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-corner-top ui-btn-up-c" data-theme="c" data-iconpos="right" data-icon="arrow-r" data-wrapperels="div" data-iconshadow="true" data-shadow="false" data-corners="false"><div class="ui-btn-inner ui-li ui-corner-top" id="ListaEliminarId' + results.rows.item(i).itemId + '"><div class="ui-btn-text" onclick="Borrar(1,' + results.rows.item(i).itemId + ')">' + results.rows.item(i).Nombre + '</div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>');
    }
}

function Borrar(n, itemId) {
    ItemId = itemId;
    switch (n) {
        case 1:
            db.transaction(BorrarItem, errorCB);
            break;
        default:

    }
}

function BorrarItem(tx) {
    tx.executeSql('DELETE FROM Items WHERE itemId=?', [ItemId], successCB, errorCB);
}