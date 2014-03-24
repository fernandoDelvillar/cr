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
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(22,"Para Ella","img/resized/ALLY-29-10-289_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(21,"Para Él","img/resized/ALLY-04-01-017_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(20,"Niños y bebés","img/resized/ALLY-03-06-010_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(19,"Línea Blanca","img/resized/ALLY-19-02-928.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(18,"Experiencias","img/resized/ALLY-95-04-948.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(17,"Entretenimiento","img/resized/ALLY-10-03-444_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(16,"Hogar","img/resized/ALLY-38-02-549_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(15,"Aventura al aire libre","img/resized/ALLY-33-12-298_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(14,"ArtÍculos de Viaje","img/resized/ALLY-16-08-201_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(23,"Salud y Belleza","img/resized/ALLY-04-01-017_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(24,"Tecnología","img/resized/ALLY-90-05-941_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(25,"Especial","img/resized/ALLY-90-05-941_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(26,"Entrega Anticipada","img/resized/ALLY-90-05-941_100x100.jpg",1)');

};
var creaTablaProductos = function(tx) {
//    db.transaction(function(tx) {
    tx.executeSql('DROP TABLE IF EXISTS PRODUCTOS');
    tx.executeSql('CREATE TABLE IF NOT EXISTS PRODUCTOS("id" INTEGER PRIMARY KEY,"id_categoria" INTEGER,"nombre" CHAR(20) NOT NULL, "descripcion" LONGTEXT NOT NULL,"sku" CHAR(15) NOT NULL, "precio" INTEGER, "imagen" TEXT NOT NULL, "estatus" INTEGER NOT NULL)');
     	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (473,19,"Plancha Black and Decker","Plancha con base de acero inoxidable  vapor extra  chorro de vapor concentrado y spray.","ALLY2-37-13",972,"img/new/ally23713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (635,20,"Vaso antigoteo SPORT 12 OZ 18 MAVENT","Recomendado para ni�os de 18 meses en adelante. Antigoteo F�cil de limpiarEl vaso entero puede esterilizarse para mayor higiene","ALLY2-208-13",1028,"img/new/ally220813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (450,22,"Juego anillo y aretes mujer","Juego de anillo y aretes en oro rosa de 14K con brillantes 64D .32.","ALLY2-14-13",89452,"img/new/ally21413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (476,19,"Ventilador Taurus Air Black","Ventilador de piso de 56cm de 3 velocidades. Potente motor.","ALLY2-40-13",2170,"img/new/ally24013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (597,24,"IPOD CLASSIC 160G/BLACK","IPOD CLASSIC 160G/BLACK","ALLY2-166-13",20931,"img/new/ally216613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (554,15,"Hielera BBQ","Hielera plegable con tapadera. Incluye 5 accesorios  sacacorchos  destapador  cuchillo  tenedor  esp�tula tenazas en acero inoxidable","ALLY2-121-13",4307,"img/new/ally212113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (467,19,"Exprimidor Black and Decker","Exprimidor de cono grande auto-reversible  control de pulpa. Incluye colador  jarra transparente de 1 litro. Guarda cable y contiene cono peque�o con agitador.","ALLY2-31-13",1463,"img/new/ally23113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (559,15,"Asador de carb�n de 22.5","Asador Kettle webber de 22.5� para carb�n","ALLY2-126-13",8473,"img/new/ally212613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (465,19,"Batidora Robot Legend Inox","Batidora con tecnolog�a turbo rotation system. Ca�a desmontable con sistema "easy lock". Incluye picador  vaso medidor y batidor de globo.","ALLY2-29-13",1755,"img/new/ally22913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (623,17,"BATMAN ARKHAM CITY  XBOX","BATMAN ARKHAM CITY XBOX","ALLY2-196-13",3629,"img/new/ally219613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (666,17,"NINTENDO 3DS XL AZUL/NEGRO  ROJO/NEGRO","La principal diferencia de esta Nintendo 3DS XL con respecto al modelo que tenemos actualmente la encontraremos en el tama�o de las pantallas  que en la 3DS XL ser�n un 90% m�s grandes. La pantalla superior de la actual Nintendo 3DS mide 3 53 pulgadas  mientras que en la nueva 3DS XL llegar� hasta las 4 88 pulgadas. La pantalla inferior  por su parte  pasa de las 3 02 pulgadas actuales a las 4 18 pulgadas en la 3DS XL. Todo esto hace que la consola sea un 46% m�s grande que la actual.","ALLY2-239-13",24228,"img/new/ally223913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (624,17,"DONKEY KONG COUNTRY RETURNS 3D  WII","DONKEY KONG COUNTRY RETURNS 3D  WII","ALLY2-197-13",4235,"img/new/ally219713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (639,20,"Auto asiento Challenger","Ventajas y Caracter�sticas: Sistema central de ajuste de cinturones Cumple con las estrictas normas internacionales de seguridad Para grupo 0 (0 a9kg) y Grupo 1 (9 a 18kg) M�ltiples posiciones f�cilmente ajustables con una sola mano Cintur�n de seguridad de cinco puntos f�cilmente ajustables Contenido: 1 Pza.","ALLY2-212-13",13493,"img/new/ally221213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (510,24,"Bocina dock Bose","Bocina para iPod Bose Soundock Serie II en color gris.","ALLY2-75-13",24295,"img/new/ally27513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (656,15,"Paraguas con l�mpara","Paraguas con cubierta pl�stica ideal para sujetarla cuando se usa como l�mpara. Dimensiones cerrado 10.5 x 2 x 2","ALLY2-229-13",1070,"img/new/ally222913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (566,20,"Mochila de ruedas de Pitufos","Mochila infantil tem�tica  con ruedas de personaje Pitufos","ALLY2-133-13",2311,"img/new/ally213313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (448,22,"Bicicleta mujer","Bicicleta Firenze para mujer rodada 26","ALLY2-12-13",10141,"img/new/ally21213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (601,24,"MACBOOK AIR 11.6/ I5DC 1.3GHZ/4 256FLASH-SPA","MACBOOK AIR 11.6/ I5DC 1.3GHZ/4 256FLASH-SPA","ALLY2-170-13",97290,"img/new/ally217013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (471,16,"Olla Cinsa Forta","Olla de presi�n Cinsa Forta de 5L.","ALLY2-35-13",2002,"img/new/ally23513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (512,22,"Pluma Shaeffer Intensity","Bol�grafo Shaeffer Intensity Medici Cromo CT","ALLY2-77-13",4159,"img/new/ally27713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (646,24,"Multifuncional Epson","MLTIFUNCIONAL EPSON STYLUS PHOTO  40PPM WIFI PANTALLA 6 TINTAS","ALLY2-219-13",18647,"img/new/ally221913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (630,24,"TABLETA BLUSENS TOUCH90WC  BLANCA 9"","Extremamente compacto  port�til y ligero  para que puedas llev�rtelo a todas partes y disfrutar de todo tu contenido en los momentos de ocio  de trabajo o en tus viajes. El Blusens Touch-90 cuenta con un potente procesador multimedia para que disfrutes no s�lo de tu m�sica  si no tambi�n de tus pel�culas  contenido de internet etc","ALLY2-203-13",10616,"img/new/ally220313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (486,16,"Bater�a tipo saz�n Ekco","Set de 5 sartenes en color rojo. Budinera 22cm  tapa de vidrio 22cm  cazo 16cm  sart�n 20cm  hervidor 10cm.","ALLY2-51-13",1525,"img/new/ally25113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (610,16,"Sill�n Kahlo Individual","Fabricado en Casco en Madera de Pino Selecto. Espumas Poliuretanas Ureblock.","ALLY2-180-13",24347,"img/new/ally218013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (599,24,"IPAD MINI SMART COVER LIGHT GRAY ZML","IPAD MINI SMART COVER LIGHT GRAY ZML","ALLY2-168-13",2857,"img/new/ally216813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (657,23,"Maleta deportiva","Maleta ideal para gym  con bolsa lateral para zapatos deportivos. Medida 13�x 20 x 12"","ALLY2-230-13",2201,"img/new/ally223013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (584,24,"Grabadora Sony","Sony Grabadora ZS-S10CP Compact CD Boombox  2W  AM/FM  Negro","ALLY2-153-13",7236,"img/new/ally215313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (652,18,"Curso de ingl�s Harmon Hall.","Curso de ingl�s de lunes a viernes (1 1/2 diaria) programado a 4 semanas. Sujeto a disponibilidad de fechas y sucursales de Harmon Hall.","ALLY2-225-13",19603,"img/new/ally222513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (545,22,"Bolsa Bar Harbor","Bolsa con compartimento principal expandible y 3 bolsas frontales. Hecha de algod�n y con asas que combinan con la base de la misma.","ALLY2-112-13",2117,"img/new/ally211213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (638,20,"Carriola Helios Color: Naranja  Rojo y Verde","Ventajas y Caracter�sticas: Respaldo ajustable en tres posiciones con una sola mano Vestidura f�cil de desmontar para su lavado Mecanismo f�cil de accionar para un practico cierre Canastilla amplia para guardar los art�culos del bebe Ruedas traseras con freno Contenido: 1 Pza.","ALLY2-211-13",16152,"img/new/ally221113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (598,24,"APPLE REMOTE","APPLE REMOTE","ALLY2-167-13",1627,"img/new/ally216713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (505,22,"Perfume Antonio Puig (Carolina Herrera)","Perfume Carolina Herrera 100ml","ALLY2-70-13",6857,"img/new/ally27013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (553,17,"Malet�n de poker bellagio","Malet�n incluye 200 fichas  2 barajas plastificadas  5 dados  1 ficha de dealer y llaves","ALLY2-120-13",2696,"img/new/ally212013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (511,22,"Pluma Shaeffer Mini Prelude","Bol�grafo Shaeffer Mini Prelude color champagne.","ALLY2-76-13",2554,"img/new/ally27613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (451,22,"Juego anillo y aretes mujer","Juego de anillo y aretes en oro blanco de 14K 2.62D 2.72.","ALLY2-15-13",336598,"img/new/ally21513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (491,19,"Sart�n el�ctrico Odiseo Taurus","Sart�n el�ctrico con tapa de vidrio refractario y recubrimiento antiadherente.","ALLY2-56-13",2571,"img/new/ally25613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (549,15,"Hielera asiento Ice River","Hielera/asiento con capacidad para 12 latas  asa ajustable para el hombro y se dobla cuando se requiera guardar.","ALLY2-116-13",2328,"img/new/ally211613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (567,20,"Mochila de ruedas De Winx 3D","Mochila infantil tem�tica  con ruedas de personaje WINNX 3D","ALLY2-134-13",2311,"img/new/ally213413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (547,15,"Hielera mochila Ice River","Capacidad para 18 latas. Bolsas laterales para guardar accesorios y condimentos. Pads en el asa para mayor comodidad.","ALLY2-114-13",2328,"img/new/ally211413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (537,14,"Kit de carretera neet","Set de 6 piezas que incluye cables de corriente  calibrador de llantas  linterna  desarmadores cabeza Phillips y de cruz as� como estuche que sirve de soporte para las rodillas.","ALLY2-104-13",4072,"img/new/ally210413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (544,22,"Bolsa Terra Verde","Bolsa amigable con el medio ambiente. Hecha de polipropileno afelpado y de buen tama�o para cargar con documentos  computadora o hasta los tennis para el gimnasio.","ALLY2-111-13",1641,"img/new/ally211113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (482,19,"Refrigerador Whirlpool","Frigo Bar con capacidad de 5 pies c�bicos  sistema de deshielo semi-autom�tico "Push Button". Controles mec�nicos y charola para carnes fr�as.","ALLY2-46-13",14790,"img/new/ally24613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (468,19,"Tostador Moulinex","Tostador Principio 1 BIS.","ALLY2-32-13",1360,"img/new/ally23213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (561,22,"Reloj de pulso con correa de caucho en color rojo.","Reloj de pulso en color rojo con correa de caucho de silic�n  bisel rotatorio  cristal mineralizado y movimiento japon�s de alta precisi�n. Incluye estuche de pl�stico. Resiste 1 ATM.","ALLY2-128-13",2431,"img/new/ally212813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (612,16,"Edred�n Abia","Coordinado Confeccionado en Jacquard y telas te�idas en poli�ster y algod�n Queen Size","ALLY2-182-13",15323,"img/new/ally218213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (568,18,"Adrenalina","1 o 2 personas. Elige entre m�s de 85 actividades para 1 o 2 personas en DF  Hidalgo  Mich  Morelos  Pue  Gro  Qro  Tlax y Ver (salto en paraca�das  globo aerost�tico  4x4 etc.). En algunas experiencias se incluye una noche de hospedaje","ALLY2-135-13",15252,"img/new/ally213513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (483,19,"Refrigerador para vinos GE","Refrigerador para vinos con capacidad para 8 botellas. Controles Glass Touch LCD  display digital y jaladera integrada.","ALLY2-47-13",10133,"img/new/ally24713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (618,16,"Edred�n Bardo","Coordinado Confeccionado con telas 100% algod�n y juego de s�banas en percal de 180 hilos 100% algod�n King size","ALLY2-188-13",17390,"img/new/ally218813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (648,21,"LLAVERO PRISMA","LLAVERO PRISMA (INCLUYE 2 ARILLOS SEPARABLES Y CAJA INDIVIDUAL.)","ALLY2-221-13",117,"img/new/ally222113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (445,21,"Bicicleta hombre","Bicicleta para caballero rodada 26; 21 velocidades; Cuadro AC D.S. Tij.; Suspensi�n MTB; Freno V Brake; Salpicadera trasera.  Marca Arkon.","ALLY2-9-13",10756,"img/new/ally2913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (577,18,"Nayarit","1 o 2 personas. Elige entre m�s de 50 actividades  en el Estado de Nayarit.","ALLY2-144-13",6040,"img/new/ally214413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (654,15,"L�mpara con im�n y luz","Ideal como apoyo para cambiar llantas ya que gracias al im�n se pega en el carro y alumbra con sus 7 LEDS","ALLY2-227-13",1863,"img/new/ally222713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (627,17,"INJUSTICE GODS AMONG US  STEELBOOK  PS3","INJUSTICE GODS AMONG US  STEELBOOK  PS3","ALLY2-200-13",6052,"img/new/ally220013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (560,21,"Reloj de pulso con correa de caucho en color azul.","Reloj de pulso en color azul con correa de caucho de silic�n  bisel rotatorio  cristal mineralizado y movimiento japon�s de alta precisi�n. Incluye estuche de pl�stico. Resiste 1 ATM.","ALLY2-127-13",2431,"img/new/ally212713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (500,21,"Loci�n Armani","Loci�n Acqua de Gio para caballero 100ml","ALLY2-65-13",5534,"img/new/ally26513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (659,24,"TV 32"","TV LED 32 SAMSUNG HD 60HZ US HDMI HIGH GLOSS","ALLY2-232-13",28636,"img/new/ally223213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (633,24,"Proyector Sony","PROY SONY DX140 3LCD 3200 XGA HDMI 7000HR 2.5KG MALETIN","ALLY2-206-13",70654,"img/new/ally220613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (585,24,"Ipod Touch 5ta generaci�n de 32 GB","Ipod Touch 5ta generacion de 32 GB","ALLY2-154-13",25817,"img/new/ally215413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (556,22,"Bolsa Lena","Bolsa hecha de tela canvas  medida 49 x 33 x 10cm","ALLY2-123-13",539,"img/new/ally212313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (582,19,"REFRIG G E GSMT6AAEDFGP 26P SILVER","Control de temperatura digital exterior.   -F�brica de hielos.   -Despachador de agua.   -Alarma en puerta.   -3 parrillas de cristal templado.   -4 anaqueles transparentes (2 fijos / 2 ajustables).   -2 cajones con tapa de cristal.   -5 anaqueles en puerta.   -Silver.   -26 pies.","ALLY2-151-13",79718,"img/new/ally215113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (611,16,"Sill�n Kahlo Love Seat","Fabricado en Casco en Madera de Pino Selecto. Espumas Poliuretanas Ureblock.","ALLY2-181-13",34458,"img/new/ally218113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (469,19,"Cafetera Taurus","Cafetera 6 tazas con filtro permanente.","ALLY2-33-13",1054,"img/new/ally23313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (522,14,"Mochila High Sierra Curve","Mochila con organizador para plumas. Puerto para aud�fonos  bolsas de malla laterales. Tiras en forma S con bolsa para el celular.","ALLY2-87-13",3936,"img/new/ally28713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (528,14,"Maleta duffel Slazenger","Bolsa de nylon con compartimento en forma U con zipper y panel organizador. Puerto para aud�fonos y bolsa exterior para accesorios. Bolsa interior para zapatos y pies de pl�stico para mantenerla limpia.","ALLY2-93-13",4751,"img/new/ally29313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (453,17,"Juego de destreza Twister","Juego de destreza para toda la familia","ALLY2-17-13",1351,"img/new/ally21713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (636,17,"Boletos de cine para 2 personas","Boletos de Lunes a domingo para dos personas.","ALLY2-209-13",549,"img/new/ally220913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (548,15,"Hielera con ruedas Ice River","Hielera con capacidad para 54 latas o 34 latas y 3 botellas de vino. Asas laterales con pads para manejo accesible. Asa telesc�pica que se extiende hasta 24.5��. Bolsas laterales con zipper para guardar utensilios y condimentos.","ALLY2-115-13",4868,"img/new/ally211513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (550,16,"Set para caf� Malib�","Set de 4 tazas con platos y cucharitas de cer�mica para expresso. Incluye caja.","ALLY2-117-13",1096,"img/new/ally211713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (653,23,"Kit de bandas de resistencia Everlast","Tonifica y fortalece todo el cuerpo. 3 bandas (de resistencia ligera  mediana y fuerte). Incluye banda circular. Recubierta de espuma para una mayor comodidad. Incluye 60 minutos de entrenamiento DVD port�til y una bolsa con cord�n de almacenamiento con correa ajustable.","ALLY2-226-13",4412,"img/new/ally222613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (579,19,"Refrigerador 14 pies","Capacidad De 14 Pies C�bicos  Controles En Perilla Parrillas De Cristal Templado Caj�n De Frutas Y Verduras Sin Jaladera En Puerta","ALLY2-147-13",33354,"img/new/ally214713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (440,20,"Bicicleta ni�o","Bicicleta rodada 16; 1 velocidad; tijera r�gida","ALLY2-4-13",6423,"img/new/ally2413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (447,22,"Bicicleta mujer","Bicicleta para dama rodada 26; 7 velocidades; canastilla.","ALLY2-11-13",9711,"img/new/ally21113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (541,21,"Clip para dinero Lira","Clip para dinero con acabado en metal plata. Incluye caja de regalo de 2 piezas.","ALLY2-108-13",305,"img/new/ally210813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (631,18,"Monedero Electr�nico Liverpool $2500","Monedero electr�nico de $2500 para canjear por productos en las tiendas Liverpool de toda la Rep�blica Mexicana.","ALLY2-204-13",15255,"img/new/ally220413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (479,19,"Horno Tostador Black and Decker","Horno tostador para asar  tostar y mantener caliente. Reloj autom�tico de 30 minutos. Con capacidad para 4 piezas de pan o 1 pizza personal.","ALLY2-43-13",2653,"img/new/ally24313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (628,17,"LUIGIS MANSION DARK MOON  3DS","LUIGIS MANSION DARK MOON  3DS","ALLY2-201-13",4841,"img/new/ally220113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (478,19,"Ventilador Navia","Ventilador de torre de 16�con 3 velocidades con pantalla LCD.","ALLY2-42-13",6160,"img/new/ally24213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (562,21,"Reloj de pulso con correa de caucho en color negro.","Reloj de pulso en color negro con correa de caucho de silic�n  bisel rotatorio  cristal mineralizado y movimiento japon�s de alta precisi�n. Incluye estuche de pl�stico. Resiste 1 ATM.","ALLY2-129-13",2431,"img/new/ally212913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (629,24,"TELEFONO PANASONIC KXTG1712MEB","2 auriculares. Pantalla LCD iluminada en auricular. Expandible a 6 auriculares. Base Compacta y Estilizada. Identificador de Llamadas. Directorio Telef�nico para 50 registros. Irrupci�n (Compartir llamada). Alarma de Despertador.","ALLY2-202-13",5113,"img/new/ally220213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (455,20,"Juego de mesa Jenga","Juego de mesa para toda la familia","ALLY2-19-13",1409,"img/new/ally21913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (533,15,"Set de excursi�n Trailblazer","Set de 4 piezas que incluye estuche de velcro con tira para el hombro  br�jula  binoculares y utensilio multi-usos. El utensilio tiene cuchara  cuchillo  tenedor y sacacorchos. 5x30 magnificaci�n binocular.","ALLY2-98-13",3393,"img/new/ally29813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (437,20,"Bicicleta ni�o","Bicicleta para ni�o con llanta de aire rodada 12; 1 velocidad con llantitas.","ALLY2-1-13",5654,"img/new/ally2113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (449,22,"Juego anillo y aretes mujer","Juego de anillo y aretes en oro blanco de 14K con brillantes 201D 1.88.","ALLY2-13-13",247146,"img/new/ally21313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (647,19,"MINISPLIT WHIRLPOOL","12 000 BTU""s (Enfriamiento) S�lo Fr�o/220V EER 10.8 Deshumidificador Filtro de polipropileno permanente y lavable que remueve el 95% de part�culas del aire Filtro de carb�n activado para eliminar olores y part�culas contaminantes 3 velocidades de ventilaci�n Flujo de aire con cortinillas autom�ticas Kit de instalaci�n con 4 metros","ALLY2-220-13",29787,"img/new/ally222013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (641,20,"Moto El�ctrica Nitro ni�o","2 motor  velocidad 4-6km/hora  1.5 horas de autonom�a Bater�a seca recargable 2 x 6 Volts Incluye cargador de bater�a de 12Volts Acelerador de pedal Edad recomendable de 3-5 a�os","ALLY2-214-13",23870,"img/new/ally221413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (650,23,"MASAJEADOR FACIAL "TOUCH ONE"","Masajeador de cara  cuero cabelludo y cuerpo.  5 accesorios para relajaci�n y estimulaci�n.  Motor de larga duraci�n.  Con 2 intensidades.","ALLY2-223-13",1670,"img/new/ally222313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (524,14,"Back pack High Sierra","Back pack de polycanvas con multicompartimentos que guarda laptop de 17��. Con puerto para aud�fonos y bolsa de zipper lateral. Back-pack con panel posterior.","ALLY2-89-13",10862,"img/new/ally28913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (661,24,"TV 40"","TV LED 40 SAMSUNG FHD(1080P) 60HZ SLIM DESIGN 2HDMI 1USB","ALLY2-234-13",50366,"img/new/ally223413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (520,21,"Back pack Field & Co. Colecci�n Cambridge.","Mochila inspirada en la Ivo League de los 60. Compartimento que incluye bolsa acolchada para la laptop o tablet. 2 bolsas largas frontales y 2 bolsas con cierre de velcro para accesorios adicionales. Color caf�.","ALLY2-85-13",4072,"img/new/ally28513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (493,22,"Tenaza rizadora Conair","Tenaza rizadora de cer�mica y turmalina 1" digital.","ALLY2-58-13",2384,"img/new/ally25813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (532,21,"Clip para dinero Zippo","Clip de metal pulido para billetes y tarjetas. Incluye caja de regalo.","ALLY2-97-13",1695,"img/new/ally29713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (439,20,"Bicicleta ni�o","Bicicleta rodada 20; 1 velocidad |","ALLY2-3-13",6945,"img/new/ally2313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (518,22,"Bolsa acolchada Nicole","Bolsa acolchada acabado brilloso imitaci�n piel con cierre magn�tico en el compartimento principal y bolsa con cierre de velcro frontal. 11��. Colores: negro  rojo  morado y aqua.","ALLY2-83-13",1356,"img/new/ally28313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (626,17,"GEAR OF WAR JUDGMENT  XBOX","GEAR OF WAR JUDGMENT  XBOX","ALLY2-199-13",6052,"img/new/ally219913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (506,22,"Perfume Cacharel","Perfume Amor Amor 100ml","ALLY2-71-13",5312,"img/new/ally27113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (463,19,"Licuadora Facilite Plus","Licuadora de pl�stico. 6 velocidades","ALLY2-27-13",2393,"img/new/ally22713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (619,24,"BASE ENFRIADORA PARA LAPTOP","BASE ENFRIADORA MICROSOFT Z3C-00034 PARA LAPTOP 11"","ALLY2-192-13",1773,"img/new/ally219213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (529,14,"Maleta duffel Colossus High Sierra","Maleta de polycanvas y nylon. Recubierta de PVC hace que el interior sea f�cil de limpiar. Bolsa frontal con zipper y bolsa lateral con velcro  bolsa para botella de agua. Bolsa tricot para lentes de sol  goggles.","ALLY2-94-13",7467,"img/new/ally29413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (517,15,"Termo Acero Inoxidable Wenger","Termo de acero inoxidable de rosca de pl�stico. Capacidad de 26 oz.","ALLY2-82-13",1084,"img/new/ally28213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (540,21,"Porta tarjetas Luxembourg","Tarjetero cromado","ALLY2-107-13",575,"img/new/ally210713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (575,18,"Estancia con encanto","2 personas. Elige entre m�s de 75 hoteles de 3-4*  una noche con desayuno y cena en la Zona Metropolitana de la Ciudad de M�xico  Colima  Guanajuato  Guerreo  Hidalgo  Michoac�n  Morelos  Puebla  Quer�taro  Veracruz  Jalisco y Nuevo Le�n.","ALLY2-142-13",8480,"img/new/ally214213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (655,14,"Organizador de Cajuela","Ideal para mantener el carro o camioneta organizada  incluye hielera 1 six para mantener las bebidas fr�as en viajes.","ALLY228--13",3393,"img/new/ally22813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (569,18,"Aventura","1 o 2 personas. Elige entre m�s de 100 actividades para 1 o 2 personas en DF  Hidalgo  Mich  Morelos  Pue  Gro  Qro  Tlax y Ver (bungy  golf  clases de surf  tubbing  esgrima  gotcha  etc).","ALLY2-136-13",2989,"img/new/ally213613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (565,22,"Reloj con correa blanca de silic�n integrada.","Reloj de pulso con correa blanca de silic�n  movimiento japon�s de alta precisi�n  bisel rotatorio y cristal mineralizado. Incluye estuche de metal en color plata mate. Resiste 3 ATM.","ALLY2-132-13",3316,"img/new/ally213213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (442,20,"Scooter ni�a","Scooter rodada 16 1 velocidad; tijera r�gida; freno trasero V brake","ALLY2-6-13",6453,"img/new/ally2613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (620,24,"DISCO DURO","DISCO DURO ADATA HD710 500GB","ALLY2-193-13",5901,"img/new/ally219313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (523,14,"Mochila High Sierra Drench Hydration","Mochila con compartimento que puede contener reserva de hasta 2 litros de agua. V�lvula manos libres para agua. La bolsa frontal puede guardar un casco . Cubierta del tubo para el agua aislada.","ALLY2-88-13",6516,"img/new/ally28813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (651,22,"Juego de 12 Tubos El�ctricos JUMBO Cer�mica y Iones","Juego de tubos con tecnolog�a de cer�mica y generador de iones. Incluye 4 tubos s�per jumbo suaves aterciopelados para ondas definidas (1.75")  8 tubos jumbo suaves aterciopelados para dar volumen (1.5")  calor instant�neo en 2 minutos y listos para usarse. Tapa transparente con cubierta. Clips para sujetar con compartimento de almacenaje.","ALLY2-224-13",4191,"img/new/ally222413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (634,20,"Cuna weekend","Su sistema de cierre tipo sombrilla permite armarla en segundos. No requiere herramientas para su ensamble. Su bolsa lateral permite guardar algunos accesorios del beb�. Incluye segundo piso. Con mobil para el entretenimiento del beb�.. Pr�ctico cambiador f�cil de montar y desmontar","ALLY2-207-13",12100,"img/new/ally220713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (446,21,"Bicicleta hombre","Bicicleta Amsterdam para hombre rodada 26","ALLY2-10-13",10264,"img/new/ally21013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (622,17,"ASSASSINS CREED II  XBOX  PS3","ASSASSINS CREED II  XBOX","ALLY2-195-13",1811,"img/new/ally219513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (462,20,"Carriola Cordoba","Carriola con respaldo ajustable en 3 posiciones   vestidura f�cil de desmontar para lavado  charola frontal y bot�n de seguridad.","ALLY2-26-13",19491,"img/new/ally22613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (576,18,"Estancia Exquisita","2 personas. Elige entre m�s de 60 hoteles 5*  una noche con desayuno y cena gourmet en la Ciudad de M�xico  Guanajuato  Hidalgo  Michoac�n  Morelos  Puebla  Monterrey  Guadalajara  Quer�taro  Nuevo Le�n  Jalisco y m�s.","ALLY2-143-13",15191,"img/new/ally214313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (536,14,"Kit de herramienta Highway Deluxe","Kit de 44 piezas. Contiene llaves  pinzas  cinta  cepillo  navaja  calibrador de llantas  base de desarmador con 3 adaptadores  19 cubos  11 sockets  cinta el�ctrica  cepillo para llantas  cables para corriente y rompe ventanas con cortador de cintur�n de seguridad. El set incluye estuche.","ALLY2-103-13",7467,"img/new/ally210313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (441,20,"Scooter ni�o","Scooter rodada 16 1 velocidad; tijera r�gida; freno trasero V brake","ALLY2-5-13",6453,"img/new/ally2513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (558,15,"Asador Smokey Joe Gold","Asador weber port�til de carb�n smokey Joe Gold","ALLY2-125-13",4353,"img/new/ally212513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (489,16,"3 pack Vanguardia Ekco","Juego de sartenes Duraflon. Espesor 2.1mm. (20 24 y 26cms).","ALLY2-54-13",1892,"img/new/ally25413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (495,21,"Rasuradora el�ctrica Taurus","Rasuradora el�ctrica.","ALLY2-60-13",899,"img/new/ally26013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (452,17,"Juego de mesa Monopoly","Juego de mesa para toda la familia","ALLY2-16-13",1621,"img/new/ally21613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (488,16,"3 pack de sartenes Ekco","Juego de sartenes de 3 piezas en colores. Antiadherente Duraflon Tecnolog�a de alto rendimiento. Aluminio 100%  el mejor conductor de calor. Espesor: 1.35mm. Colore: Verde (18cm)  morado (20cm) y naranja (24cm).","ALLY2-53-13",1064,"img/new/ally25313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (480,19,"Horno de Microondas GE","Horno de microondas color silver. 10 niveles de potencia y 6 selecciones r�pidas de cocinado. Dise�o ideal para combinar con cualquier tipo de cocina.","ALLY2-44-13",5007,"img/new/ally24413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (530,14,"Maleta duffel Ejecutive Sport Wheeler High Sierra","Maleta de nylon con compartimento inferior con 2 bolsas de zipper y 2 de malla. Con llantas en l�nea y fijas. Asa telesc�pica que se extienden hasta 41��.","ALLY2-95-13",22405,"img/new/ally29513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (503,22,"Perfume Paris Hilton","Perfume Paris Hilton 100 ml","ALLY2-68-13",2797,"img/new/ally26813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (640,23,"GYM SET "FAT FREE"","Set de pesas  cuerda  banda el�stica y hand grips en bolso.","ALLY2-213-13",1598,"img/new/ally221313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (621,17,"ANGRY BIRDS TRILOGY  WII U","ANGRY BIRDS TRILOGY  WII U","ALLY2-194-13",7122,"img/new/ally219413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (498,23,"Coj�n el�ctrico Conair","Coj�n el�ctrico de calor. Tama�o compacto.","ALLY2-63-13",1799,"img/new/ally26313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (438,20,"Bicicleta ni�a","Bicicleta para ni�a con llanta Eva rodada 12; 1 velocidad con salpicaderas.","ALLY2-2-13",4056,"img/new/ally2213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (485,19,"Secadora Whirlpool","Secadora de 15 kg de capacidad con sistema de secado autom�tico  13 ciclos pre programados y protector contra arrugas.","ALLY2-49-13",30130,"img/new/ally24913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (572,18,"Momento Relax","1 persona. Elige entre m�s de 160 tratamientos de bienestar para 1 persona en DF  Hidalgo  Morelos  Puebla  Quer�taro y Veracruz. Masajes relajantes  faciales  yoga y pilates  chocolaterapia  dise�o de imagen  exfoliaciones  etc.","ALLY2-139-13",3355,"img/new/ally213913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (586,24,"Ipod Touch 5ta generacion de 64 GB","Ipod Touch 5ta generacion de 64 GB","ALLY2-155-13",34433,"img/new/ally215513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (583,24,"Mini componente Sony","Minicomponente de 120W (RMS) con funci�n de grabaci�n y reproducci�n de MP3 por USB.","ALLY2-152-13",10258,"img/new/ally215213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (604,24,"C�mara Canon","CAMARA DIGITAL EOS REBELT5I 18-55 ISSTM US","ALLY2-174-13",87499,"img/new/ally217413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (521,14,"Mochila Wenger para laptop","Compartimento principal puede contener una laptop de 15.4��. Tiene puerto para aud�fonos  panel de organizaci�n  2 bolsas laterales de malla. Color carb�n.","ALLY2-86-13",10862,"img/new/ally28613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (461,20,"Mini Car","El nuevo Mini Car facilia el viaje de tu bebe y el tuyo. Disfruta paseando a tu bebe por la calle sin que el se aburra. Amplia Cajuela y Cintur�n de Seguridad","ALLY2-25-13",3612,"img/new/ally22513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (542,21,"Tarjetero Monte Carlo","Tarjetero de metal cromado y piel.","ALLY2-109-13",464,"img/new/ally210913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (444,21,"Bicicleta hombre","Bicicleta rodada 24; 21 velocidades; cuadro AC r�gido; Freno V brake AC","ALLY2-8-13",8113,"img/new/ally2813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (504,22,"Perfume Nina Ricci","Perfume Nina 100ml","ALLY2-69-13",5716,"img/new/ally26913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (663,24,"TV 55"","TV LED 55 SAMSUNG FHD 240HZ 3D WIFI SMART INTERACTION ULTRA SLIM","ALLY2-236-13",161205,"img/new/ally223613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (645,17,"APPLE TV-SPA","Apple TV es un peque�o centro de entretenimiento que reproduce el contenido que quieras desde iTunes  Netflix  YouTube y m�s  en tu TV de pantalla ancha. Todo en una resoluci�n HD de hasta 1080p. Simplemente con�ctalo y descubrir�s todo un mundo de pel�culas  fotos  m�sica y mucho m�s.","ALLY2-218-13",8325,"img/new/ally221813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (474,19,"Plancha Black and Decker","Plancha a vapor vertical con mango ergon�mico  comfort grip y suela de acero inoxidable.","ALLY2-38-13",1830,"img/new/ally23813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (644,20,"Gimnasio Lion In The Park de Bright Sartas","4 melod�as. Sonajero con cuentas de colores. Espejo ajustable para el autodescubrimiento del beb�. Mordedor refrescante. 6 aros para enganchar otros juguetes. Lavable 30�. Medidas abierta: 46 x 76 x 76 cm.","ALLY2-217-13",4581,"img/new/ally221713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (818,24,"Home theater","AUTO EQ USB DIRECT RECORDING FULL HD 1080P UP-SCALING USB PLUS","ALLY2-259-13",11471,"img/new/ally225913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (660,24,"TV 32"","TV LED 32 SAMSUNG FHD(1080P) 60HZ WI-FI APLICACIONES 3HDMI 2USB","ALLY2-233-13",36574,"img/new/ally223313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (643,17,"CONTROL INALAMBRICO XBOX 360","CONTROL INALAMBRICO XBOX 360","ALLY2-216-13",5143,"img/new/ally221613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (481,19,"Microondas Whirlpool","Microondas .7 pies 700 Watts con 10 niveles de potencia. Con funciones predeterminadas","ALLY2-45-13",8321,"img/new/ally24513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (456,17,"Juego de mesa Pictionary Edici�n Familiar","Juego de mesa para toda la familia","ALLY2-20-13",1428,"img/new/ally22013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (443,20,"Bicicleta ni�a","Bicicleta rodada 20; 1 velocidad; motas","ALLY2-7-13",8543,"img/new/ally2713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (525,14,"Bolsa Messenger Falcon","Bolsa messenger para laptop de 13��. Bolsa frontal con seguro de broche. Se puede convertir en backpack y tiene tira para asegurarla al asa de la maleta.","ALLY2-90-13",4751,"img/new/ally29013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (487,16,"Bater�a Chapala KUCHE","Bater�a de 12 piezas en acero inoxidable 18/10. Acabado espejo  tapas de cristal templado.   Olla con tapa de 16 x 9.5 cm- Cacerola con tapa de 16 x 9.5 cm - Cacerola con tapa de 18 x 10.5 cm - Cacerola con tapa de 20 x 11.5 cm - Cacerola con tapa de 24 x 13.5 cm - Sart�n con tapa de 24 x 6 cm","ALLY2-52-13",2164,"img/new/ally25213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (535,14,"Organizador para asiento elleven","Este exclusivo dise�o presenta una ventana para ver el iPad 1  2 y versiones m�s recientes as� como dem�s tablets. Incluye tecnolog�a Tech Trap para transportar tu smartphone y sus respectivos cables. Un organizador. Se ajusta a la cabecera del asiento con un broche de metal y una cuerda el�stica ajustable.","ALLY2-102-13",1328,"img/new/ally210213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (514,21,"Pluma Ferrari","Bol�grafo Ferrari Serie 300 en color rojo","ALLY2-79-13",3421,"img/new/ally27913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (466,19,"Batidora Black and Decker","Batidora manual 5 velocidades 175 Watts  garant�a directa de f�brica.","ALLY2-30-13",1218,"img/new/ally23013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (555,15,"Set de BBQ","Set de BBQ  incluye pinzas  esp�tula  tenedor para  BBQ y estuche met�lico","ALLY2-122-13",1223,"img/new/ally212213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (499,23,"B�scula Conair","B�scula digital color silver base negra y agarradera.","ALLY2-64-13",1938,"img/new/ally26413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (497,23,"B�scula Esvelty","B�scula digital Esvelty color gris.","ALLY2-62-13",1084,"img/new/ally26213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (606,19,"Aspiradora Koblenz","Aspiradora de mano port�til y ligera; Color: Blanco con copa de polvo transl�cida en color uva; Caracter�sticas el�ctricas: 120 Volts; Potencia de motor: 400 W; Cable extra largo de 5.5m; Filtro de tela lavable oACCESORIOS: 1 accesorio esquinero con adaptador","ALLY2-176-13",2811,"img/new/ally217613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (658,24,"TV 18.5"","TV SAMSUNG 18.5 LED 2HDMI USB VGA COAXIAL 1366X768 5W X 2C","ALLY2-231-13",15925,"img/new/ally223113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (564,21,"Reloj con correa negra de silic�n integrada.","Reloj de pulso con correa negra de silic�n  movimiento japon�s de alta precisi�n  bisel rotatorio y cristal mineralizado. Incluye estuche de metal en color plata mate. Resiste 3 ATM.","ALLY2-131-13",3316,"img/new/ally213113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (459,20,"Taller mec�nico Hot Wheels","Taller mec�nico Hot Wheels","ALLY2-23-13",2740,"img/new/ally22313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (516,23,"Cool Gear Water Filtration BPA Free","Hecho de Tritan Copolyester. Presenta un filtro y un sistema freezer stick que reduce el sabor a cloro y otras impurezas del agua. Puede filtrar hasta 150 galones de agua (4 meses) antes de ser reemplazado y dependiendo del uso. Capacidad de 26 oz.","ALLY2-81-13",1626,"img/new/ally28113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (515,15,"Termo Penguin Cool Gear","Termo flip top con popote. Grip de hule en la parte anterior y posterior con capacidad de 22 oz.","ALLY2-80-13",989,"img/new/ally28013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (531,14,"Kit de utilidad elleven","Compartimento principal con zipper en forma U  bolsa de velcro frontal  2 bolsas laterales de zipper  con organizador y divisores el�sticos.","ALLY2-96-13",2441,"img/new/ally29613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (508,24,"Aud�fonos Sony","Aud�fonos con diadema Sony  graves/agudos profundos. Gris/Verde.","ALLY2-73-13",1765,"img/new/ally27313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (526,23,"Bolsa duffel Mia","Compartimento principal con cierre de zipper y bolsa frontal expandible para tapete de yoga. Colores: Azul con gris  Negro con verde y Negro con rosa.","ALLY2-91-13",2238,"img/new/ally29113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (596,24,"IPOD SHUFFLE 2GB AZUL .","IPOD SHUFFLE 2GB AZUL .","ALLY2-165-13",4296,"img/new/ally216513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (578,24,"Blu Ray Samsung BD-F5100","Con�ctate a tus aplicaciones favoritas cuando quieras. El BD-F5100 tiene precargadas una serie de aplicaciones como Youtube  Facebook o Accuweather  que te permitir�n estar conectado a tus redes sociales y entretenido.","ALLY2-145-13",8099,"img/new/ally214513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (538,21,"Lentes de sol Slazenger Pilot","Lentes de sol tipo Aviador con estuche resistente. Incluyen tela limpiadora.","ALLY2-105-13",2415,"img/new/ally210513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (527,22,"Bolsa duffel Nicole","Compartimento principal grande. Exterior acolchado. Bolsa frontal con cierre met�lico y pies met�licos para mantener la parte inferior limpia. Con tira para el asa de la maleta.","ALLY2-92-13",4072,"img/new/ally29213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (563,21,"Reloj con extensible de acero Chronographs","Reloj de pulso con cron�grafo  bisel rotatorio  cristal mineralizado y extensible de acero. Incluye estuche de metal color color plata. Resiste 3 ATM.","ALLY2-130-13",7005,"img/new/ally213013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (595,24,"IPOD NANO 16 GB","IPOD NANO 16 GB","ALLY2-164-13",12915,"img/new/ally216413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (501,21,"Loci�n Swiss Army","Loci�n Swiss Army para caballero 100ml","ALLY2-66-13",2908,"img/new/ally26613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (642,20,"Moto El�ctrica Nitro ni�a","2 motor  velocidad 4-6km/hora  1.5 horas de autonom�a Bater�a seca recargable 2 x 6 Volts Incluye cargador de bater�a de 12Volts Acelerador de pedal Edad recomendable de 3-5 a�os","ALLY2-215-13",23870,"img/new/ally221513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (534,15,"Mochila hielera con bocinas Encore","Compartimento anti fugas con capacidad de hasta 20 latas. Bocinas resistentes al agua compatibles con la mayor�a de los reproductores de CD y MP3 incluyendo iPods. Puerto para aud�fonos  Requiere 4 bater�as AA (no incluidas). Colores: Royal (azul) o plateado.","ALLY2-99-13",4072,"img/new/ally29913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (664,17,"PS VITA","Descubre formas completamente nuevas para jugar. La PS Vita revoluciona la experiencia de juego con joysticks anal�gicos dobles  pantallas multit�ctiles frontales y paneles t�ctiles traseros  sensores de movimiento y c�maras frontal y trasera. Juega a la velocidad de tu estilo de vida m�vil: comienza tu juego en la PS3TM y contin�alo dondequiera que vayas con tu PS Vita.","ALLY2-237-13",27259,"img/new/ally223713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (546,15,"Hielera Companion","Hielera de neopreno anti fugas y aislada. El compartimento principal puede contener 6 latas de 12 onzas. Bolsa frontal para guardar accesorios o condimentos.","ALLY2-113-13",1163,"img/new/ally211313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (600,24,"MAGSAFE TO MAGSAFE 2 CONVERTER","MAGSAFE TO MAGSAFE 2 CONVERTER","ALLY2-169-13",988,"img/new/ally216913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (539,16,"Set de vino Milano","Set de 4 piezas que incluye estuche  saca corchos manual  drip ring y cortador de aluminio. El estuche tiene abertura tipo concha de almeja y cerradura de doble chasquido. Incluye caja de regalo.","ALLY2-106-13",2984,"img/new/ally210613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (496,21,"Recortadora barba y bigotes Conair","Recortadora barba y bigotes de 5 piezas. Utiliza bater�as.","ALLY2-61-13",1046,"img/new/ally26113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (613,16,"Edred�n Cali","Coordinado Confeccionado en Jacquard y telas te�idas en poli�ster y algod�n King Size","ALLY2-183-13",20252,"img/new/ally218313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (570,18,"MultiExperiencia","1 o 2 personas. Elige entre m�s de 200 actividades  en DF  Hidalgo  Mich  Morelos  Pue  Gro  Qro  Tlax  Jal  Pue  Q.Roo  Ver (hoteles  cenas  spa  actividades  etc).","ALLY2-137-13",4819,"img/new/ally213713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (571,18,"Relajaci�n","1 persona. Elige entre m�s de 190 tratamientos de bienestar para 1 persona en DF  Hidalgo  Morelos  Puebla  Quer�taro y Veracruz. Masajes relajantes  faciales  yoga y pilates  chocolaterapia  dise�o de imagen  exfoliaciones  etc.","ALLY2-138-13",5186,"img/new/ally213813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (573,18,"Cena para dos","2 personas. Elige entre m�s de 50 cenas para 2 personas en la Ciudad de M�xico  Cuernavaca y Monterrey. Cocina internacional  libanesa  italiana  peruana  gourmet  mexicana  francesa  japonesa  mediterr�nea y M�S.","ALLY2-140-13",5186,"img/new/ally214013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (574,18,"Escape pintoresco","2 personas. Elige entre m�s de 65 hoteles pintorescos  una noche y desayuno incluido en DF  Guanajuato  Guerrero  Hidalgo  Michoac�n  Morelos  Oaxaca  Puebla  Quer�taro  Quintana Roo  Tlaxcala  M�rida y Veracruz.","ALLY2-141-13",5430,"img/new/ally214113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (494,21,"Juego de peluquer�a Conair","Juego de peluquer�a The Chopper 24 piezas.","ALLY2-59-13",3137,"img/new/ally25913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (632,18,"Monedero Electr�nico Liverpool $5000","Monedero electr�nico de $5000 para canjear por productos en las tiendas Liverpool de toda la Rep�blica Mexicana.","ALLY2-205-13",30511,"img/new/ally220513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (581,24,"DVD Sony","Descubre el modelo DVD m�s accesible y delgado de la l�nea Sony. Con s�lo 270 mm de ancho  el avanzado reproductor DVP-SR115 cuenta con funciones de reproducci�n tanto de video como de archivos multimedia como m�sica MP3  im�genes JPG las cuales  incluso  pueden ser descargados de alg�n disco DVD. Adem�s  disfruta de su funci�n multiformato y mando a distancia para la TV.","ALLY2-150-13",3011,"img/new/ally214913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (670,17,"VOLANTE INALAMBRICO  XBOX 360","El volante ser� compatible con todos los juegos de conducci�n disponibles en Xbox 360  salvo excepciones a�n sin confirmar que podr�an limitar su funcionamiento. Adem�s  contar� con gatillos para acelerar y frenar  los cl�sicos botones y cruceta  vibraci�n y una banda de luces que ofrecer� informaci�n visual al jugador.","ALLY2-243-13",5447,"img/new/ally224313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (671,21,"Pluma Midnight","Bol�grafo de tinta negra con ball point de resina","ALLY2-244-13",24788,"img/new/ally224413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (672,21,"Cartera Meisterstuck","Cartera con capacidad para 6 tarjetas","ALLY2-245-13",22034,"img/new/ally224513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (673,21,"Cartera Canvas Gris","Cartera con capacidad para 6 tarjetas","ALLY2-246-13",17411,"img/new/ally224613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (674,25,"Cargo por entrega anticipada","Cargo por entrega anticipada","SP",1200,"sp.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (675,16,"Vaporera","Vaporera 22 Cm 100% Aluminio","ALLY2-247-13",1052,"img/new/ally224713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (676,16,"Sarten 12 Cm color azul","Sarten 12 Cm color azul Con antiadherente tanto en el exterior como en el interior. Muy f�cil de limpiar  no se le pega la comida","ALLY2-248-13",490,"img/new/ally224813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (677,16,"Lavadora Whirlpool","<table border="0" cellpadding="0" cellspacing="0" width="266"> 	<colgroup><col width="266"></col></colgroup> 	<tbody> 		<tr height="97"> 			<td class="xl65" style="height: 72.95pt; width: 200pt" height="97" width="266">Lavadora 			autom�tica 15k<br /> 			&bull;Agitador single action <br /> 			&bull;9 ciclos pre programados <br /> 			&bull;2 dep�sitos autom�ticos <br /> 			&bull;3 tama�os de carga <br /> 			&bull;3 temperaturas con autocontrol <br /> 			&bull;Ventana met�lica</td> 		</tr> 	</tbody> </table>","ALLY2-249-13",31801,"img/new/ally224913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (678,20,"M�vil Bright starts dream along","5 melod�as calmantes 4 divertidos personajes  Base desmontable se puede utilizar como un juguete para cuna musical.<br /> Dimensiones (cm):37.25 cm x 27.5 cm x 9.5 cm aproximadamente.","ALLY2-250-13",3648,"img/new/ally225013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (679,24,"TV 46"","LED SAMSUNG UN46EH5300FXZX SMART FULL HD 120HZ 46"","ALLY2-251-13",60612,"img/new/ally225113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (814,20,"Juego de mesa Draw Something","Zynga y Hasbro se unieron para llevar fuera de los aparatos m�viles y dar vida a uno de los juegos m�s divertidos y entretenidos de la d�cada �Draw Something! Es el juego impredecible  r�pido y divertido en el que podr�s vivir una experiencia de dibujo emocionante  llena de risas y retos ya que los dem�s tendr�n que adivinar que es lo que dibujaste para obtener monedas. El primero en llegar a 15 ser� el ganador. �No se necesita ser un experto en dibujo  solo creatividad!�","ALLY2-255-13",2164,"img/new/ally225513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (817,22,"Secadora de pelo Conair","SECADORA PROFESIONAL IIFINITI PRO 1875W WATTS MOTOR AC COLOR DEGRADADO "OMBRE"","ALLY2-258-13",4613,"img/new/ally225813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (749,26,"Licuadora Facilite Plus","Licuadora de pl�stico. 6 velocidades","ALLY2-27-13-EA",2943,"img/new/ally22713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (775,26,"Ipod Touch 5ta generacion de 32 GB","Ipod Touch 5ta generacion de 32 GB","ALLY2-154-13-EA",26797,"img/new/ally215413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (758,26,"Perfume Antonio Puig (Carolina Herrera)","Perfume Carolina Herrera 100ml","ALLY2-70-13-EA",7407,"img/new/ally27013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (764,26,"Relajaci�n","1 persona. Elige entre m�s de 190 tratamientos de bienestar para 1 persona en DF  Hidalgo  Morelos  Puebla  Quer�taro y Veracruz. Masajes relajantes  faciales  yoga y pilates  chocolaterapia  dise�o de imagen  exfoliaciones  etc.","ALLY2-138-13-EA",5736,"img/new/ally213813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (765,26,"Momento Relax","1 persona. Elige entre m�s de 160 tratamientos de bienestar para 1 persona en DF  Hidalgo  Morelos  Puebla  Quer�taro y Veracruz. Masajes relajantes  faciales  yoga y pilates  chocolaterapia  dise�o de imagen  exfoliaciones  etc.","ALLY2-139-13-EA",3905,"img/new/ally213913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (767,26,"Escape pintoresco","2 personas. Elige entre m�s de 65 hoteles pintorescos  una noche y desayuno incluido en DF  Guanajuato  Guerrero  Hidalgo  Michoac�n  Morelos  Oaxaca  Puebla  Quer�taro  Quintana Roo  Tlaxcala  M�rida y Veracruz.","ALLY2-141-13-EA",5980,"img/new/ally214113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (766,26,"Cena para dos","2 personas. Elige entre m�s de 50 cenas para 2 personas en la Ciudad de M�xico  Cuernavaca y Monterrey. Cocina internacional  libanesa  italiana  peruana  gourmet mexicana  francesa  japonesa  mediterr�nea y M�S.","ALLY2-140-13-EA",5736,"img/new/ally214013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (776,26,"Ipod Touch 5ta generacion de 64 GB","Ipod Touch 5ta generacion de 64 GB","ALLY2-155-13-EA",35413,"img/new/ally215513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (816,19,"Lavadora Whirlpool","Lavadora autom�tica 15k oAgitador single action  o9 ciclos pre programados  o2 dep�sitos autom�ticos  o3 tama�os de carga  o3 temperaturas con autocontrol  oVentana met�lica","ALLY2-257-13",31801,"img/new/ally225713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (810,26,"TV 46"","<br /> LED SAMSUNG UN46EH5300FXZX SMART FULL HD 120HZ 46PUL","ALLY2-251-13-EA",62012,"tv_46__528cf5a6ef5ce.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (770,26,"Nayarit","1 o 2 personas. Elige entre m�s de 50 actividades  en el Estado de Nayarit.","ALLY2-144-13-EA",6590,"img/new/ally214413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (760,26,"Malet�n de poker bellagio","Malet�n incluye 200 fichas  2 barajas plastificadas  5 dados  1 ficha de dealer y llaves","ALLY2-120-13-EA",3246,"img/new/ally212013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (807,26,"Vaporera","Vaporera 22 Cm 100% Aluminio","ALLY2-247-13-EA",2032,"vaporera_528cf3a7eab95.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (802,26,"TV 32"","TV LED 32 SAMSUNG FHD(1080P) 60HZ WI-FI APLICACS 3HDMI 2USB","ALLY2-233-13-EA",37974,"img/new/ally223313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (801,26,"TV 32"","TV LED 32 SAMSUNG HD 60HZ US HDMI HIGH GLOSS","ALLY2-232-13-EA",30036,"img/new/ally223213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (800,26,"TV 18.5"","TV SAMSUNG 18.5 LED 2HDMI USB VGA COAXIAL 1366X768 5W X 2C","ALLY2-231-13-EA",16905,"img/new/ally223113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (769,26,"Estancia Exquisita","2 personas.Elige entre m�s de 60 hoteles 5*  una noche con desayuno y cena gourmet en laCiudad de M�xico  Guanajuato  Hidalgo  Michoac�n  Morelos  Puebla  Monterrey  Guadalajara  Quer�taro  Nuevo Le�n  Jalisco y m�s.","ALLY2-143-13-EA",16171,"img/new/ally214313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (808,26,"Sarten 12 Cm color azul","Sarten 12 Cm color azul Con antiadherente tanto en el exterior como en el interior. Muy f�cil de limpiar  no se le pega la comida","ALLY2-248-13-EA",1040,"sarten_12_cm_col_528cf4096d78e.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (797,26,"TABLETA BLUSENS TOUCH90WC  BLANCA 9"","Extremamente compacto  port�til y ligero  para que puedas llev�rtelo a todas partes y disfrutar de todo tu contenido en los momentos de ocio  de trabajo o en tus viajes. El Blusens Touch-90 cuenta con un potente procesador multimedia para que disfrutes no solo de tu m�sica  sino tambi�n de tus pel�culas  contenido de internet etc","ALLY2-203-13-EA",11166,"img/new/ally220313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (803,26,"PS VITA","Descubre formas completamente nuevas para jugar. La PS Vita revoluciona la experiencia de juego con joysticks anal�gicos dobles  pantallas multit�ctiles frontales y paneles t�ctiles traseros  sensores de movimiento y c�maras frontal y trasera. Juega a la velocidad de tu estilo de vida m�vil: comienza tu juego en la PS3&trade; y contin�alo dondequiera que vayas con tu PS Vita.","ALLY2-237-13-EA",28239,"img/new/ally223713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (774,26,"Mini componente Sony","Minicomponente de 120W (RMS) con funci�n de grabaci�n y reproducci�n de MP3 por USB.","ALLY2-152-13-EA",11658,"img/new/ally215213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (790,26,"BATMAN ARKHAM CITY  XBOX","BATMAN ARKHAM CITY XBOX","ALLY2-196-13-EA",4179,"img/new/ally219613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (789,26,"DISCO DURO","DISCO DURO ADATA HD710 500GB","ALLY2-193-13-EA",6451,"img/new/ally219313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (788,26,"Aspiradora Koblenz","Aspiradora de mano port�til y ligera; Color: Blanco con copa de polvo transl�cida en color uva; Caracter�sticas el�ctricas: 120 Volts; Potencia de motor: 400 W; Cable extra largo de 5.5m; Filtro de tela lavable oACCESORIOS: 1 accesorio esquinero con adaptador","ALLY2-176-13-EA",3791,"img/new/ally217613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (791,26,"DONKEY KONG COUNTRY RETURNS 3D  WII","DONKEY KONG COUNTRY RETURNS 3D  WII","ALLY2-197-13-EA",4785,"img/new/ally219713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (795,26,"LUIGIS MANSION DARK MOON  3DS","LUIGIS MANSION DARK MOON  3DS","ALLY-201-13-EA",5391,"img/new/ally20113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (794,26,"INJUSTICE GODS AMONG US  STEELBOOK  PS3","INJUSTICE GODS AMONG US  STEELBOOK  PS3","ALLY2-200-13-EA",6602,"img/new/ally220013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (793,26,"GEAR OF WAR JUDGMENT  XBOX","GEAR OF WAR JUDGMENT  XBOX","ALLY2-199-13-EA",6602,"img/new/ally219913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (786,26,"IPOD SHUFFLE 2GB AZUL .","IPOD SHUFFLE 2GB AZUL .","ALLY2-165-13-EA",4846,"img/new/ally216513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (785,26,"IPOD NANO 16 GB","IPOD NANO 16 GB","ALLY2-164-13-EA",13465,"img/new/ally216413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (787,26,"IPOD CLASSIC 160G/BLACK","IPOD CLASSIC 160G/BLACK","ALLY2-166-13-EA",21911,"img/new/ally216613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (805,26,"NINTENDO 3DS XL AZUL/NEGRO  ROJO/NEGRO","La principal diferencia de esta Nintendo 3DS XL con respecto al modelo que tenemos actualmente la encontraremos en el tama�o de las pantallas  que en la 3DS XL ser�n un 90% m�s grandes. La pantalla superior de la actual Nintendo 3DS mide 3 53 pulgadas  mientras que en la nueva 3DS XL llegar� hasta las 4 88 pulgadas. La pantalla inferior  por su parte  pasa de las 3 02 pulgadas actuales a las 4 18 pulgadas en la 3DS XL. Todo esto hace que la consola sea un 46% m�s grande que la actual.","ALLY2-239-13-EA",25208,"img/new/ally223913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (809,26,"M�vil Bright starts dream along","5 melod�as calmantes 4 divertidos personajes  Base desmontable se puede utilizar como un juguete para cuna musical.<br /> Dimensiones (cm):37.25 cm x 27.5 cm x 9.5 cm aproximadamente.","ALLY2-250-13-EA",4198,"m_vil_bright_sta_528cf48de1edf.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (799,26,"APPLE TV-SPA","Apple TV es un peque�o centro de entretenimiento que reproduce el contenido que quieras desde iTunes  Netflix  YouTube y m�s  en tu TV de pantalla ancha. Todo en una resoluci�n HD de hasta 1080p. Simplemente con�ctalo y descubrir�s todo un mundo de pel�culas  fotos  m�sica y mucho m�s.","ALLY2-218-13-EA",8875,"img/new/ally221813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (798,26,"Cuna weekend","Su sistema de cierre tipo sombrilla permite armarla en segundos. No requiere herramientas para su ensamble. Su bolsa lateral permite guardar algunos accesorios del beb�. Incluye segundo piso. Con mobil para el entretenimiento del beb�.. Pr�ctico cambiador f�cil de montar y desmontar","ALLY2-207-13-EA",13500,"img/new/ally220713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (796,26,"TELEFONO PANASONIC KXTG1712MEB","2 auriculares. Pantalla LCD iluminada en auricular. Expandible a 6 auriculares. Base Compacta y Estilizada. Identificador de Llamadas. Directorio Telef�nico para 50 registros. Irrupci�n (Compartir llamada). Alarma de Despertador.","ALLY2-202-13-EA",5663,"img/new/ally220213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (756,26,"Perfume Paris Hilton","Perfume Paris Hilton 100 ml","ALLY2-68-13-EA",3347,"img/new/ally26813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (757,26,"Perfume Nina Ricci","Perfume Nina 100ml","ALLY2-69-13-EA",6266,"img/new/ally26913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (815,19,"Cafetera Black and Decker","Cafetera 12 tazas  Programable  panel digital  Jarra Dura-Life","ALLY2-256-13",3665,"img/new/ally225613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (753,26,"Loci�n Armani","Loci�n Acqua de Gio para caballero 100ml","ALLY2-65-13-EA",6084,"img/new/ally26513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (754,26,"Loci�n Swiss Army","Loci�n Swiss Army para caballero 100ml","ALLY2-66-13-EA",3458,"img/new/ally26613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (763,26,"MultiExperiencia","1 o 2 personas. Elige entre m�s de 200 actividades  en DF  Hidalgo  Mich  Morelos  Pue  Gro  Qro  Tlax  Jal  Pue  Q.Roo  Ver (hoteles  cenas  spa  actividades  etc).","ALLY2-137-13-EA",5369,"img/new/ally213713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (762,26,"Aventura","1 o 2 personas. Elige entre m�s de 100 actividades para 1 o 2 personas en DF  Hidalgo  Mich  Morelos  Pue  Gro  Qro  Tlax y Ver (bungy  golf  clases de surf  tubbing  esgrima  gotcha  etc).","ALLY2-136-13-EA",3539,"img/new/ally213613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (768,26,"Estancia con encanto","2 personas. Elige entre m�s de 75 hoteles de 3-4*  una noche con desayuno y cena en la Zona Metropolitana de la Ciudad de M�xico  Colima  Guanajuato  Guerreo  Hidalgo  Michoac�n  Morelos  Puebla  Quer�taro  Veracruz  Jalisco y Nuevo Le�n.","ALLY2-142-13-EA",9030,"img/new/ally214213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (761,26,"Adrenalina","1 o 2 personas. Elige entre m�s de 85 actividades para 1 o 2 personas en DF  Hidalgo  Mich  Morelos  Pue  Gro  Qro  Tlax y Ver (salto en paraca�das  globo aerost�tico  4x4 etc). En algunas experiencias se incluye una noche de hospedaje","ALLY2-135-13-EA",16232,"img/new/ally213513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (750,26,"Ventilador Navia","Ventilador de torre de 16�con 3 velocidades con pantalla LCD.","ALLY2-42-13-EA",7140,"img/new/ally24213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (759,26,"Perfume Cacharel","Perfume Amor Amor 100ml","ALLY2-71-13-EA",5862,"img/new/ally27113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (771,26,"Blu Ray Samsung BD-F5100","Con�ctate a tus aplicaciones favoritas cuando quieras. El BD-F5100 tiene precargadas una serie de aplicaciones como Youtube  Facebook o Accuweather  que te permitir�n estar conectado a tus redes sociales y entretenido.","ALLY2-145-13-EA",8649,"img/new/ally214513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (752,26,"Sart�n el�ctrico Odiseo Taurus","Sart�n el�ctrico con tapa de vidrio refractario y recubrimiento antiadherente.","ALLY2-56-13-EA",3121,"img/new/ally25613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (773,26,"DVD Sony","Descubre el modelo DVD m�s accesible y delgado de la l�nea Sony. Con s�lo 270 mm de ancho  el avanzado reproductor DVP-SR115 cuenta con funciones de reproducci�n tanto de video como de archivos multiemdia como m�sica MP3  im�genes JPG las cuales  incluso  pueden ser descargados de alg�n disco DVD. Adem�s  disfruta de su funci�n multiformato y mando a distancia para la TV.","ALLY2-150-13-EA",3561,"img/new/ally214913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (751,26,"Microondas Whirlpool","Microondas .7 pies 700 Watts con 10 niveles de potencia. Con funciones predeterminadas","ALLY2-45-13-EA",9721,"img/new/ally24513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (819,24,"IPAD MINI PANTALLA RETINA 16GB WI-FI","IPAD MINI PANTALLA RETINA 16GB WI-FI","ALLY2-260-13",37128,"img/new/ally226013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (820,24,"IPAD MINI PANTALLA RETINA 16GB WI-FI + CELULA","IPAD MINI PANTALLA RETINA 16GB WI-FI + CELULA","ALLY2-262-13",48917,"img/new/ally226213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (821,24,"IPAD MINI PANTALLA RETINA 64GB WI-FI","IPAD MINI PANTALLA RETINA 64GB WI-FI","ALLY2-263-13",55400,"img/new/ally226313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (822,24,"IPAD AIR 16GB WI-FI","IPAD AIR 16GB WI-FI","ALLY2-264-13",45969,"img/new/ally226413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (823,24,"IPAD AIR 32GB WI-FI","IPAD AIR 32GB WI-FI","ALLY2-265-13",55400,"img/new/ally226513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (824,24,"IPAD AIR 32GB WI-FI + CELULAR","IPAD AIR 32GB WI-FI + CELULAR","ALLY2-266-13",67189,"img/new/ally226613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (825,24,"IPAD AIR 64GB WI-FI","IPAD AIR 64GB WI-FI","ALLY2-267-13",64831,"img/new/ally226713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (826,24,"Laptop Samsung","SAMSUNG ULTRATHIN 13.3 AMD S QCORE 4GB 128GB SSD WIN8 BLANCA","ALLY2-268-13",51561,"img/new/ally226813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (827,24,"Lap Top HP","E1Y70LT LAPTOP HP 245 14" E1-1500 4GB 320GB WIN8","ALLY2-269-13",44393,"img/new/ally226913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (828,16,"Cyro","Coordinado individual confeccionado con telas estampadas y te�idas en 144 hilos p.p.c. 50% Alg y 50% Pol (Para colchones de hasta 30 cm de altura) No incluye los cojines chicos altura)","ALLY2-276-13",6356,"img/new/ally227613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (829,16,"Hanoi","Coordinado Matrimonial confeccionado con telas estampadas y te�idas te�idas en 144 hilos p.p.c.50% Alg y 50% Pol (Para colchones de hasta 30 cm de altura)","ALLY2-277-13",7904,"img/new/ally227713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (830,16,"C�rdoba","Coordinado matrimonial confeccionado con telas estampadas y te�idas en 144 hilos p.p.c. 50% Alg y 50% Pol (Para colchones de hasta 30 cm de altura)","ALLY2-278-13",7904,"img/new/ally227813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (831,16,"Ume","Coordinado matrimonial confeccionado con telas estampadas y te�idas en 144 hilos p.p.c. 50% Alg y 50% Pol (Para colchones de hasta 30 cm de altura)","ALLY2-279-13",7904,"img/new/ally227913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (832,16,"Brush","Coordinado matrimonial confeccionado con telas estampadas y te�idas en 144 hilos p.p.c. 50% Alg y 50% Pol (Para colchones de hasta 30 cm de altura)","ALLY2-280-13",7904,"img/new/ally228013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (833,24,"CAMARA WEB","WEBCAM LIFECAM HD-3000 HD 720P","ALLY2-270-13",2129,"img/new/ally227013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (834,21,"LLAVERO GUN","LLAVERO GUN (LLAVERO CON 2 ARILLOS SEPARABLES. INCLUYE CAJA INDIVIDUAL.)","ALLY2-271-13",108,"img/new/ally227113.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (836,24,"WII U 32GB CON 2 VIDEOJUEGOS","WII U 32GB + SOPORTES CONSOLA Y GAME PAD + BASE RECARGA DEL GAMEPAD  NEGRO+ 2 VIDEOJUEGOS","ALLY2-273-13",38135,"img/new/ally227313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (837,24,"VIDEO CAMARA RCA EZ1320 NEGRO","Pantalla LCD de 1.4 HD 720p grabaci�n en formato AVI MPEG Toma fotogr�fica fija hasta 5 megapixeles Memoria interna de 256MB Ranura de tarjeta SD expandible a 32GB Zoom digital 4X para foto y video Funci�n de WEB CAM para PC 6 Efectos de video luz LED Salida de audio y video Utiliza 3 bater�as tipo AAA Garant�a: 1 A�O","ALLY2-274-13",4297,"img/new/ally227413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (838,24,"MINICOMP. SAMSUNG MOD.MXF630","Minicomponente Samsung con 160W de potencia  funci�n REC para grabar canciones directamente en una memoria USB conectada en su puerto y entrada auxiliar. Adem�s  tiene la funci�n Karaoke para conectar micr�fonos y divertirte con tus amigos.","ALLY2-275-14",10320,"minicomp_samsun_52e7f0970f1af.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (839,26,"Home theater","AUTO EQ USB DIRECT RECORDING FULL HD 1080P UP-SCALING USB PLUS","ALLY2-259-13-EA",12871,"img/new/ally225913.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (840,26,"IPAD MINI PANTALLA RETINA 16GB WI-FI","IPAD MINI PANTALLA RETINA 16GB WI-FI","ALLY2-260-13-EA",38108,"img/new/ally226013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (841,26,"IPAD MINI PANTALLA RETINA 16GB WI-FI + CELULA","IPAD MINI PANTALLA RETINA 16GB WI-FI + CELULA","ALLY2-262-13-EA",49897,"img/new/ally226213.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (842,26,"IPAD MINI PANTALLA RETINA 64GB WI-FI","IPAD MINI PANTALLA RETINA 64GB WI-FI","ALLY2-263-13-EA",56380,"img/new/ally226313.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (843,26,"IPAD AIR 16GB WI-FI","IPAD AIR 16GB WI-FI","ALLY2-264-13-EA",46949,"img/new/ally226413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (844,26,"IPAD AIR 32GB WI-FI","IPAD AIR 32GB WI-FI","ALLY2-265-13-EA",56380,"img/new/ally226513.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (845,26,"IPAD AIR 32GB WI-FI + CELULAR","IPAD AIR 32GB WI-FI + CELULAR","ALLY2-266-13-EA",68169,"img/new/ally226613.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (846,26,"IPAD AIR 64GB WI-FI","IPAD AIR 64GB WI-FI","ALLY2-267-13-EA",65811,"img/new/ally226713.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (847,26,"Laptop Samsung","SAMSUNG ULTRATHIN 13.3 AMD S QCORE 4GB 128GB SSD WIN8 BLANCA","ALLY2-268-13-EA",52541,"img/new/ally226813.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (848,26,"CAMARA WEB","WEBCAM LIFECAM HD-3000 HD 720P","ALLY2-270-13-EA",2679,"img/new/ally227013.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (849,26,"VIDEO CAMARA RCA EZ1320 NEGRO","Pantalla LCD de 1.4 HD 720p grabaci�n en formato AVI MPEG Toma fotogr�fica fija hasta 5 megapixeles Memoria interna de 256MB Ranura de tarjeta SD expandible a 32GB Zoom digital 4X para foto y video Funci�n de WEB CAM para PC 6 Efectos de video luz LED Salida de audio y video Utiliza 3 bater�as tipo AAA Garant�a: 1 A�O","ALLY2-274-13-EA",4847,"img/new/ally227413.jpg","1")');
	tx.executeSql('INSERT INTO mytable(id,id_categoria,nombre,descripcion,sku,precio,imagen,estatus) VALUES (850,26,"MINICOMP. SAMSUNG MOD.MXF630","Minicomponente Samsung con 160W de potencia  funci�n REC para grabar canciones directamente en una memoria USB conectada en su puerto y entrada auxiliar. Adem�s  tiene la funci�n Karaoke para conectar micr�fonos y divertirte con tus amigos.","ALLY2-275-14-EA",11720,"minicomp_samsun_52e7f2f82da19.jpg","1")');

//    }, function(error) {
//        console.log(error)
//        alert("error");
//    }, function() {
//        alert("sucess");
//    });
};
var creaTablaCarrito = function(tx) {
//    alert("carrito");
    tx.executeSql('DROP TABLE IF EXISTS CARRITO');
    tx.executeSql('CREATE TABLE IF NOT EXISTS CARRITO("id" INTEGER PRIMARY KEY,"id_producto" INTEGER,"cantidad" INTEGER)');
};
var errorSql = function(error) {
// Esto se puede ir a un Log de Error diría el purista de la oficina, pero como este es un ejemplo pongo el MessageBox.Show :P
//    alert("No se puede inicializar la App");
    console.log(error);
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
        html += '<li><a href="categoria.html?id=' + row.id + '" ><div><h2 class="ui-li-heading1" title="' + row.nombre + '">'
                + row.nombre + '</h2></div><img src="' + row.imagen + '" id="imgcate" class="cat-produc ui-li-thumb" width="100"/></a></li>';
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
            html += ' <div id="descpro" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-first-child ui-last-child ui-btn-up-d"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a class="ui-link-inherit"   href="producto.html?id=' + row.id + '"><img  id="imgcateg2" class="ui-li-thumb" src="' + row.imagen + '" /> <h2 id="h2prod" class="ui-li-heading" id="titprod">'+row.nombre+'</h2></a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></div>';

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
        $('#edgartable tr').remove();
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
