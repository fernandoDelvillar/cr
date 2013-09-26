/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var db = window.openDatabase("Database", "1.0", "Club Royal", 30 * 1024);
var ItemId = 0;

function CreaTablas(tx) {
    tx.executeSql('DROP TABLE IF EXISTS DEMO');
    tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
    tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
    tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    alert("finish populating");
}

function errorCB(err) {
    // Esto se puede ir a un Log de Error diría el purista de la oficina, pero como este es un ejemplo pongo el MessageBox.Show :P
    alert("Error processing SQL: Codigo: " + err.code + " Mensaje: " + err.message);
}

function successCB() {
    alert("Success");
    db.transaction(queryDB, errorCB);
    return true;
}

function queryDB(tx) {
    tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
}

function querySuccess(tx, results) {
    alert("Returned rows = " + results.rows.length);
    // this will be true since it was a select statement and so rowsAffected was 0
    if (!results.rowsAffected) {
        alert('No rows affected!');
        return false;
    }
    // for an insert statement, this property will return the ID of the last inserted row
    alert("Last inserted row ID = " + results.insertId);
    return true;
}

function CreaDB() {
    db.transaction(CreaTablas, errorCB, successCB);
}

function Agregar(n) {
    switch (n)
    {
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
    switch (n)
    {
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
    switch (n)
    {
        case 1:
            db.transaction(BorrarItem, errorCB);
            break;
        default:

    }
}

function BorrarItem(tx) {
    tx.executeSql('DELETE FROM Items WHERE itemId=?', [ItemId], successCB, errorCB);
}