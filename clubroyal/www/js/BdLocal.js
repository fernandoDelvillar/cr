var db = window.openDatabase("ClubRoyalDatabase", "1.0", "Club Royal", 30 * 1024);
var ItemId = 0;
var productos = [];
var creaDB = function() {
    db.transaction(creaTablas, errorSql, creaDBSuccess);
};
var creaTablas = function(tx) {
    creaTablaCategorias(tx);
    creaTablaProductos(tx);
    creaTablaCarrito(tx);
};
var creaTablaCategorias = function(tx) {
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
};
var creaTablaProductos = function(tx) {
    tx.executeSql('DROP TABLE IF EXISTS PRODUCTOS');
    tx.executeSql('CREATE TABLE IF NOT EXISTS PRODUCTOS("id" INTEGER PRIMARY KEY,"id_categoria" INTEGER,"nombre" CHAR(20) NOT NULL, "descripcion" TEXT NOT NULL,"sku" CHAR(15) NOT NULL, "precio" INTEGER, "imagen" TEXT NOT NULL, "estatus" INTEGER NOT NULL)');
    tx.executeSql('INSERT INTO PRODUCTOS ("id","id_categoria","nombre","descripcion","sku","precio","imagen","estatus") VALUES (1,1,\'Tienda Camping "Adventure"\',"190 x 100 x 106 cm. Con protector UV solar y barras de fibra. Incluye bolsa contenedora.","ALLY-27-12-347",200,"img/max/ALLY-27-12-347.jpg",1);');
};
var creaTablaCarrito = function(tx) {
    tx.executeSql('DROP TABLE IF EXISTS CARRITO');
    tx.executeSql('CREATE TABLE IF NOT EXISTS CARRITO("id" INTEGER PRIMARY KEY,"id_producto" INTEGER,"cantidad" INTEGER)');
};
var errorSql = function(error) {
// Esto se puede ir a un Log de Error diría el purista de la oficina, pero como este es un ejemplo pongo el MessageBox.Show :P
//    alert("No se puede inicializar la App");
    if (error.code == error.DATABASE_ERR)
        alert('nasty database error');
};
var creaDBSuccess = function() {
    return true;
};
var getCategorias = function() {
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM CATEGORIAS WHERE estatus=1;', [],
                function(tx, results) {
                    if (results.rows.length !== undefined) {
                        llenaCategoriasMin(results);
                        llenaCategoriaHigh(results);
                    }
                }
        , errorSql);
    }, errorSql);
};
var getPanelCategorias = function() {
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM CATEGORIAS WHERE estatus=1;', [],
                function(tx, results) {
                    if (results.rows.length !== undefined) {
                        llenaPanelCategorias(results);
                    }
                }
        , errorSql);
    }, errorSql);
};
var llenaCategoriasMin = function(results) {
    var len = results.rows.length;
    var html = '';
    for (var i = 0; i < len; i++) {
        var row = results.rows.item(i);
        html += '<li><a href="categoria.html?id=' + row.id + '" ><div><h2 class="ui-li-heading1" title="'+ row.nombre +'">'
                + row.nombre + '</h2></div><div id="cataim"><img src="' + row.imagen + '" class="cat-produc" width="100"/></div></a></li>';
    }
    $('#menucat').html(html).listview('refresh');
};
var llenaCategoriaHigh = function(results) {
    var len = results.rows.length;
    var html1 = '';
    var html2 = '';
    for (var i = 0; i < len; i++) {
        var row = results.rows.item(i);
        if (i > 5) {
            html2 += '<li><a href="categoria.html?id=' + row.id + '"><h2>'
                    + row.nombre + '</h2><img src="' + row.imagen + '"/></a></li>';

        } else {
            html1 += '<li><a href="categoria.html?id=' + row.id + '"><h2>'
                    + row.nombre + '</h2><img src="' + row.imagen + '"/></a></li>';

        }
    }
    $('#menucat1').html(html1).listview('refresh');
    $('#menucat2').html(html2).listview('refresh');
};
var llenaPanelCategorias = function(results) {
    var len = results.rows.length;
    var html = '';
    for (var i = 0; i < len; i++) {
        var row = results.rows.item(i);
        html += '<li><a href="categoria.html?id=' + row.id + '">' + row.nombre + '</a></li>';
    }
    $('#panelCategoria').html(html).listview('refresh');
};
var getProductos = function(categoriaID) {
//    getCategorias();
    if (undefined !== categoriaID) {
        db.transaction(function(tx) {
            tx.executeSql('SELECT a.*, b.nombre AS `categoria` FROM PRODUCTOS AS `a` INNER JOIN CATEGORIAS AS `b` ON b.id=a.id_categoria WHERE a.id_categoria=? AND a.estatus=?;', [categoriaID, 1], productosSuccess, errorSql);
        }, errorSql);
    }
};
var productosSuccess = function(tx, results) {
    if (results.rows !== undefined) {
        var len = results.rows.length;
        var row;
//        $('#productos').remove('div');
        var html = '<div data-role="listview" data-inset="true" id="productos" class="ui-listview ui-listview-inset ui-corner-all ui-shadow">';
        for (var i = 0; i < len; i++) {
            row = results.rows.item(i);
            html += ' <div id="descpro" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-first-child ui-last-child ui-btn-up-d"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a class="ui-link-inherit"  data-transition="slidedown" href="producto.html?id=' + row.id + '"><img  class="ui-li-thumb" src="' + row.imagen + '" /> <h2 id="h2prod" lass="ui-li-heading">Camp</h2></a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></div>';
         
            //<div class="ui-body ui-body-d">
        }
        html += '</div>';
        $('#productos').html(html);
        $('#productos').table("refresh");
        $('#productos').ul("refresh");
        $('#categoryName').text(row.categoria);
    }
};
var getProductoInfo = function(productoID) {
    if (productoID !== undefined) {
        return db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM PRODUCTOS WHERE id=? AND estatus=?;', [productoID, 1], productoInfoSuccess, errorSql);
        }, errorSql);
    }
};
var productoInfoSuccess = function(tx, results) {
    if (results.rows !== undefined) {
        var len = results.rows.length;
        for (var i = 0; i < len; i++) {
            var row = results.rows.item(i);
            $('#productName').text(row.nombre);
            $('#image').html('<img src="' + row.imagen + '"/>');
            $('#precio').text(row.precio);
            $('#sku').text(row.sku);
            $('#descripcion').text(row.descripcion);
        }
    }
};
var addCart = function(idProducto, cantidad) {
    db.transaction(function(tx) {
        tx.executeSql('INSERT INTO CARRITO ("id_producto","cantidad") VALUES (?,?)', [idProducto, cantidad], function(tx, result) {
        }, errorSql);
    }, errorSql);
};
var showCart = function() {
    var retur = null;
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM CARRITO AS a INNER JOIN PRODUCTOS AS b ON a.id_producto=b.id;', [], showCartSuccess, errorSql);
    }, errorSql);
    return retur;
};
var showCartSuccess = function(tx, results) {
    if (results.rows !== undefined) {
        var len = results.rows.length;
        var total = 0;
        $('#tableContent tr').remove();
        for (var i = 0; i < len; i++) {
            var row = results.rows.item(i);
            var importe = row.precio * row.cantidad;
            total += importe;
            $('#edgartable').append($('<tr/>')
                    .append($('<td/>').append('<img src="' + row.imagen + '" style = "width: 100%;max-width:200px; "/>')
            ).append($('<td/>', {
                //'id': 'productName',
                'text': row.nombre
            })).append($('<td/>', {
                'class': 'ui-table-cell-label',
                'text': row.cantidad
            })).append($('<td/>', {
                'class': 'ui-table-cell-label',
                'text': row.precio
            })).append($('<td/>', {
                'class': 'ui-table-cell-label',
                'text': importe
            })).append($('<td/>', {}).append($('<div/>', {
                'data-role': 'button',
                'id': 'buttonelim',
                'data-corners': 'true',
                'data-shadow': 'true',
                'data-iconshadow': 'true',
                'data-wrapperels': 'span',
                'data-theme': 'b',
                'class': 'ui-btn ui-shadow ui-btn-corner-all ui-btn-up-b',
                'onclick': 'eliminarProducto(' + row.id + ')'
            }).append($('<span/>', {'class': 'ui-btn-inner'}).append($('<span/>', {
                'class': 'ui-btn-text',
                'text': 'Eliminar',
                'value': row.id
            }))))));
            productos.push({'id': row.id, idproduct: row.id_producto, cant: row.cantidad, importe: importe});
        }
        updatePuntos(total);
        $("#total").text(total);
        $("#reflow-basic").table("refresh");
    }
    function updatePuntos(total) {
        var puntos = sesion.get("puntos");
        var actuales = puntos.actuales;
        var dispobibles = actuales - total;
        puntos.disponibles = dispobibles;
        sesion.sets("puntos", puntos);
        $('#disponibles').text(dispobibles);
    }
    ;
};
var dropproduct = function(idproducto) {
    db.transaction(function(tx) {
        tx.executeSql('DELETE FROM CARRITO WHERE id=?', [idproducto], function(tx, result) {
            showCart();
        }, errorSql);
    }, errorSql);
};
var vaceaCarrito = function() {
    db.transaction(function(tx) {
        tx.executeSql('DELETE FROM CARRITO WHERE 1', [], function(tx, result) {
        }, errorSql);
    }, errorSql);
};
var getCartContent = function() {
    return productos;
};