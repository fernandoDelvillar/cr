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
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(1,"Para Ella","img/resized/ALLY-29-10-289_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(2,"Para Él","img/resized/ALLY-04-01-017_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(3,"Niños y bebés","img/resized/ALLY-03-06-010_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(4,"Línea Blanca","img/resized/ALLY-19-02-928.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(5,"Experiencias","img/resized/ALLY-95-04-948.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(6,"Entretenimiento","img/resized/ALLY-10-03-444_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(7,"Decoración y hogar","img/resized/ALLY-38-02-549_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(8,"Aventura al aire libre","img/resized/ALLY-33-12-298_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(9,"ArtÍculos de Viaje","img/resized/ALLY-16-08-201_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(10,"Salud y Belleza","img/resized/ALLY-04-01-017_100x100.jpg",1)');
    tx.executeSql('INSERT INTO CATEGORIAS ("id","nombre","imagen","estatus") VALUES(11,"Tecnología","img/resized/ALLY-90-05-941_100x100.jpg",1)');
};
var creaTablaProductos = function(tx) {
//    db.transaction(function(tx) {
    tx.executeSql('DROP TABLE IF EXISTS PRODUCTOS');
    tx.executeSql('CREATE TABLE IF NOT EXISTS PRODUCTOS("id" INTEGER PRIMARY KEY,"id_categoria" INTEGER,"nombre" CHAR(20) NOT NULL, "descripcion" LONGTEXT NOT NULL,"sku" CHAR(15) NOT NULL, "precio" INTEGER, "imagen" TEXT NOT NULL, "estatus" INTEGER NOT NULL)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(1, 1, "Juego de 12 Tubos Eléctricos JUMBO Cerámica y Iones", "Juego de tubos con tecnología de cerámica y generador de iones.\nIncluye 4 tubos súper jumbo suaves aterciopelados para ondas definidas (1.75), 8 tubos jumbo suaves aterciopelados para dar volumen (1.5), calor instantáneo en 2 minutos y listos para usarse.\nTapa transparente con cubierta.\nClips para sujetar con compartimento de almacenaje.", "ALLY2-224-13", 4191, "img/max/ALLY2-224-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(2, 1, "Bicicleta mujer", "Bicicleta para dama rodada 26; 7 velocidades; canastilla.", "ALLY2-11-13", 9711, "img/max/ALLY2-11-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(3, 1, "Bicicleta mujer", "Bicicleta Firenze para mujer rodada 26", "ALLY2-12-13", 10141, "img/max/ALLY2-12-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(4, 1, "Juego anillo y aretes mujer", "Juego de anillo y aretes en oro blanco de 14K con brillantes 201D 1.88.", "ALLY2-13-13", 247146, "img/max/ALLY2-13-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(5, 1, "Juego anillo y aretes mujer", "Juego de anillo y aretes en oro rosa de 14K con brillantes 64D .32.", "ALLY2-14-13", 89452, "img/max/ALLY2-14-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(6, 2, "Pluma Midnight", "Bolígrafo de tinta negra con ball point de resina", "ALLY2-244-13", 24788, "img/max/ALLY2-244-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(7, 2, "Cartera Meisterstuck", "Cartera con capacidad para 6 tarjetas", "ALLY2-245-13", 22034, "img/max/ALLY2-245-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(8, 2, "Cartera Canvas Gris", "Cartera con capacidad para 6 tarjetas", "ALLY2-246-13", 17411, "img/max/resized/Cartera_Canvas_G_524331b922a19_140x140.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(9, 2, "LLAVERO PRISMA", "LLAVERO PRISMA (INCLUYE 2 ARILLOS SEPARABLES Y CAJA INDIVIDUAL.)", "ALLY2-221-13", 117, "img/max/ALLY2-221-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(10, 2, "LLAVERO ASTORIA", "LLAVERO ASTORIA (INCLUYE ESTUCHE ESPECIAL.)", "ALLY2-222-13", 117, "img/max/ALLY2-222-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(11, 3, "Cuna weekend", "Su sistema de cierre tipo sombrilla permite armarla en segundos. No requiere herramientas para su ensamble. Su bolsa lateral permite guardar algunos accesorios del bebé. Incluye segundo piso. Con mobil para el entretenimiento del bebé.. Práctico cambiador fácil de montar y desmontar", "ALLY2-207-13", 12100, "img/max/ALLY2-207-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(12, 3, "Vaso antigoteo SPORT 12 OZ 18 M +\nAVENT", "Recomendado para niños de 18 meses en adelante. Antigoteo Fácil de limpiar\nEl vaso entero puede esterilizarse para mayor higiene", "ALLY2-208-13", 1028, "img/max/ALLY2-208-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(13, 3, "Móvil Casita de las Abejas", "Móvil las abejas rotatorios, coloridas vuelan al ritmo de una melodía dulce y\nestimulan el primer audio y habilidades visuales del bebé, puede instalarse\nal lado de la cuna y se activa tirando la flor de la colmena musical. Después\nde 6 meses de edad, cuando sea necesario eliminar los juguetes colgantes, puede utilizarse la colmena musical para bebé confort con una suave\ncanción de cuna. Edad: - 6 meses+ ", "ALLY2-210-13", 5692, "img/max/ALLY2-210-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(14, 3, "Carriola Helios Color: Naranja, Rojo y\nVerde", "Ventajas y Características: Respaldo ajustable en tres posiciones con una\nsola mano Vestidura fácil de desmontar para su lavado Mecanismo fácil\nde accionar para un practico cierre Canastilla amplia para guardar los\nartículos del bebe Ruedas traseras con freno Contenido: 1 Pza.", "ALLY2-211-13", 16152, "img/max/ALLY2-211-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(15, 3, "Auto asiento Challenger", "Ventajas y Características: Sistema central de ajuste de cinturones\nCumple con las estrictas normas internacionales de seguridad Para grupo 0 (0 a9kg) y Grupo 1 (9 a 18kg) Múltiples posiciones fácilmente ajustables\ncon una sola mano Cinturón de seguridad de cinco puntos fácilmente\najustables Contenido: 1 Pza.", "ALLY2-212-13", 13493, "img/max/ALLY2-212-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(16, 4, "Licuadora Facilite Plus", "Licuadora de plástico. 6 velocidades", "ALLY2-27-13", 2393, "img/max/ALLY2-27-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(17, 4, "Licuadora Black and Decker", "Licuadora con base metálica, cuchillas de acero inoxidable, jarra Perfect Pour® de 1500 ml. Sistema contra sobrecalentamiento.", "ALLY2-28-13", 5380, "img/max/ALLY2-28-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(18, 4, "Batidora Robot Legend Inox", "Batidora con tecnología turbo rotation system. Caña desmontable con sistema easy lock. Incluye picador, vaso medidor y batidor de globo.", "ALLY2-29-13", 1755, "img/max/ALLY2-29-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(19, 4, "Batidora Black and Decker", "Batidora manual 5 velocidades 175 Watts, garantía directa de fábrica.", "ALLY2-30-13", 1218, "img/max/ALLY2-30-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(20, 4, "Exprimidor Black and Decker", "Exprimidor de cono grande auto-reversible, control de pulpa. Incluye colador, jarra transparente de 1 litro. Guarda cable y contiene cono pequeño con agitador.", "ALLY2-31-13", 1463, "img/max/ALLY2-31-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(21, 5, "Monedero Electrónico Liverpool $2500", "Monedero electrónico de $2500 para canjear por productos en las tiendas Liverpool de toda la República Mexicana.", "ALLY2-204-13", 15255, "img/max/ALLY2-204-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(22, 5, "Monedero Electrónico Liverpool $5000", "Monedero electrónico de $5000 para canjear por productos en las tiendas Liverpool de toda la República Mexicana.", "ALLY2-205-13", 30511, "img/max/ALLY2-205-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(23, 5, "Curso de inglés Harmon Hall.", "Curso de inglés de lunes a viernes (1 1/2 diaria) programado a 4 semanas. Sujeto a disponibilidad de fechas y sucursales de Harmon Hall.", "ALLY2-225-13", 19603, "img/max/ALLY2-225-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(24, 5, "Adrenalina", "1 o 2 personas. Elige entre más de 85 actividades para 1 o 2 personas en DF, Hidalgo, Mich, Morelos, Pue, Gro, Qro, Tlax y Ver (salto en paracaídas, globo aerostático, 4x4 etc.). En algunas experiencias se incluye una noche de hospedaje", "ALLY2-135-13", 15252, "img/max/ALLY2-135-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(25, 5, "Aventura", "1 o 2 personas. Elige entre más de 100 actividades para 1 o 2 personas en DF, Hidalgo, Mich, Morelos, Pue, Gro, Qro, Tlax y Ver (bungy, golf, clases de surf, tubbing, esgrima, gotcha, etc).", "ALLY2-136-13", 2989, "img/max/ALLY2-136-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(26, 6, "WII U SET BASICO 8GB, BLANCO", "WII U SET BASICO 8GB, BLANCO", "ALLY2-241-13", 36345, "img/max/ALLY2-241-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(27, 6, "WII U SET DE LUXE 32GB", "WII U SET DE LUXE 32GB + SOPORTES CONSOLA Y GAME PAD + BASE RECARGA DEL GAMEPAD, NEGRO", "ALLY2-242-13", 44221, "img/max/ALLY2-242-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(28, 6, "VOLANTE INALAMBRICO  XBOX 360", "El volante será compatible con todos los juegos de conducción disponibles en Xbox 360, salvo excepciones aún sin confirmar que podrían limitar su funcionamiento. Además, contará con gatillos para acelerar y frenar, los clásicos botones y cruceta, vibración y una banda de luces que ofrecerá información visual al jugador.", "ALLY2-243-13", 5447, "img/max/ALLY2-243-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(29, 6, "PS VITA  CON FIFA 2013", "Descubre formas completamente nuevas para jugar. La PS Vita revoluciona la experiencia de juego con joysticks analógicos dobles, pantallas multitáctiles frontales y paneles táctiles traseros, sensores de movimiento y cámaras frontal y trasera. Juega a la velocidad de tu estilo de vida móvil: comienza tu juego en la PS3TM y continúalo dondequiera que vayas con tu PS Vita.", "ALLY2-238-13", 37725, "img/max/ALLY2-238-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(30, 6, "NINTENDO 3DS XL AZUL/NEGRO, ROJO/NEGRO", "La principal diferencia de esta Nintendo 3DS XL con respecto al modelo que tenemos actualmente la encontraremos en el tamaño de las pantallas, que en la 3DS XL serán un 90% más grandes. La pantalla superior de la actual Nintendo 3DS mide 3,53 pulgadas, mientras que en la nueva 3DS XL llegará hasta las 4,88 pulgadas. La pantalla inferior, por su parte, pasa de las 3,02 pulgadas actuales a las 4,18 pulgadas en la 3DS XL. Todo esto hace que la consola sea un 46% más grande que la actual.", "ALLY2-239-13", 24228, "img/max/ALLY2-239-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(31, 7, "Sillón Kahlo Individual", "Fabricado en Casco en Madera de Pino Selecto. Espumas Poliuretanas Ureblock.", "ALLY2-180-13", 24347, "img/max/ALLY2-180-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(32, 7, "Sillón Kahlo Love Seat", "Fabricado en Casco en Madera de Pino Selecto. Espumas Poliuretanas Ureblock.", "ALLY2-181-13", 34458, "img/max/ALLY2-181-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(33, 7, "Edredón Abia", "Coordinado Confeccionado\nen Jacquard y telas teñidas en\npoliéster y algodón Queen Size", "ALLY2-182-13", 15323, "img/max/ALLY2-182-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(34, 7, "Edredón Cali", "Coordinado Confeccionado\nen Jacquard y telas teñidas en\npoliéster y algodón King Size", "ALLY2-183-13", 20252, "img/max/ALLY2-183-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(35, 7, "Edredón Cartago", "Coordinado Confeccionado\ncon telas 100% algodón y\njuego de sábanas en satín de\n300 hilos 100% algodón Queen Size", "ALLY2-184-13", 15323, "img/max/ALLY2-184-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(36, 8, "Lámpara con imán y luz", "Ideal como apoyo para cambiar llantas ya que gracias al imán se pega en el carro y alumbra con sus 7 LEDS", "ALLY2-227-13", 1863, "img/max/ALLY2-227-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(37, 8, "Paraguas con lámpara", "Paraguas con cubierta plástica ideal para sujetarla cuando se usa como lámpara. Dimensiones cerrado 10.5 x 2 x 2", "ALLY2-229-13", 1070, "img/max/ALLY2-229-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(38, 8, "Termo Penguin Cool Gear", "Termo flip top con popote. Grip de hule en la parte anterior y posterior con capacidad de 22 oz.", "ALLY2-80-13", 989, "img/max/ALLY2-80-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(39, 8, "Termo Acero Inoxidable Wenger", "Termo de acero inoxidable de rosca de plástico. Capacidad de 26 oz.", "ALLY2-82-13", 1084, "img/max/ALLY2-82-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(40, 8, "Set de excursión Trailblazer", "Set de 4 piezas que incluye estuche de velcro con tira para el hombro, brújula, binoculares y utensilio multi-usos. El utensilio tiene cuchara, cuchillo, tenedor y sacacorchos. 5x30 magnificación binocular.", "ALLY2-98-13", 3393, "img/max/ALLY2-98-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(41, 9, "Organizador de Cajuela", "Ideal para mantener el carro o camioneta organizada, incluye hielera 1 six para mantener las bebidas frías en viajes.", "ALLY228--13", 3393, "img/max/ALLY228--13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(42, 9, "Mochila Wenger para laptop", "Compartimento principal puede contener una laptop de 15.4´´. Tiene puerto para audífonos, panel de organización, 2 bolsas laterales de malla. Color carbón.", "ALLY2-86-13", 10862, "img/max/ALLY2-86-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(43, 9, "Mochila High Sierra Curve", "Mochila con organizador para plumas. Puerto para audífonos, bolsas de malla laterales. Tiras en forma S con bolsa para el celular.", "ALLY2-87-13", 3936, "img/max/ALLY2-87-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(44, 9, "Mochila High Sierra Drench Hydration", "Mochila con compartimento que puede contener reserva de hasta 2 litros de agua. Válvula manos libres para agua. La bolsa frontal puede guardar un casco,. Cubierta del tubo para el agua aislada.", "ALLY2-88-13", 6516, "img/max/ALLY2-88-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(45, 9, "Back pack High Sierra", "Back pack de polycanvas con multicompartimentos que guarda laptop de 17´´. Con puerto para audífonos y bolsa de zipper lateral. Back-pack con panel posterior.", "ALLY2-89-13", 10862, "img/max/ALLY2-89-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(46, 10, "GYM SET FAT FREE", "Set de pesas, cuerda, banda elástica y hand grips en bolso.", "ALLY2-213-13", 1598, "img/max/ALLY2-213-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(47, 10, "MASAJEADOR FACIAL TOUCH ONE", "Masajeador de cara, cuero cabelludo y cuerpo.  5 accesorios para relajación y estimulación.  Motor de larga duración. \nCon 2 intensidades.", "ALLY2-223-13", 1670, "img/max/ALLY2-223-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(48, 10, "Kit de bandas de resistencia Everlast", "Tonifica y fortalece todo el cuerpo. 3 bandas (de resistencia ligera, mediana y fuerte). Incluye banda circular. Recubierta de espuma para una mayor comodidad. Incluye 60 minutos de entrenamiento DVD portátil y una bolsa con cordón de almacenamiento con correa ajustable.", "ALLY2-226-13", 4412, "img/max/ALLY2-226-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(49, 10, "Maleta deportiva", "Maleta ideal para gym, con bolsa lateral para zapatos deportivos. Medida 13¨x 20 x 12", "ALLY2-230-13", 2201, "img/max/ALLY2-230-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(50, 10, "Báscula Esvelty", "Báscula digital Esvelty color gris.", "ALLY2-62-13", 1084, "img/max/ALLY2-62-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(51, 11, "BASE ENFRIADORA PARA LAPTOP", "BASE ENFRIADORA MICROSOFT Z3C-00034 PARA LAPTOP 11", "ALLY2-192-13", 1773, "img/max/ALLY2-192-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(52, 11, "DISCO DURO", "DISCO DURO ADATA HD710 500GB", "ALLY2-193-13", 5901, "img/max/ALLY2-193-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(53, 11, "TELEFONO PANASONIC KXTG1712MEB", "2 auriculares. Pantalla LCD iluminada en auricular. Expandible a 6 auriculares. Base Compacta y Estilizada. Identificador de Llamadas. Directorio Telefónico para 50 registros. Irrupción (Compartir llamada). Alarma de Despertador.", "ALLY2-202-13", 5113, "img/max/ALLY2-202-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(54, 11, "TABLETA BLUSENS TOUCH90WC  BLANCA 9", "Extremamente compacto, portátil y ligero, para que puedas llevártelo a todas partes y disfrutar de todo tu contenido en los momentos de ocio, de trabajo o en tus viajes. El Blusens Touch-90 cuenta con un potente procesador multimedia para que disfrutes no sólo de tu música, si no también de tus películas, contenido de internet etc", "ALLY2-203-13", 10616, "img/max/ALLY2-203-13.jpg", 1)');
    tx.executeSql('INSERT INTO PRODUCTOS (id, id_categoria, nombre, descripcion, sku, precio, imagen, estatus) VALUES(55, 11, "Proyector Sony", "PROY SONY DX140 3LCD 3200 XGA HDMI 7000HR 2.5KG MALETIN", "ALLY2-206-13", 70654, "img/max/ALLY2-206-13.jpg", 1)');

//    }, function(error) {
//        console.log(error)
//        alert("error");
//    }, function() {
//        alert("sucess");
//    });
};
var creaTablaCarrito = function(tx) {
    alert("carrito");
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