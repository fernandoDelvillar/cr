var wsUrl = "http://adventasoluciones.com.mx/detallistas/public/wsdl/index/soap";
//var wsUrl = "http://localhost/adccmdev/public/wsdl/index/soap";
//var wsUrl = "http://orios.localhost/projects/adccmdev/public/wsdl/index/soap";
$.mobile.allowCrossDomainPages = true;
$.support.cors = true;

var canlogin = function(username, pass) {
    var methodname = 'getCcmClienteInfo';
    var uri = wsUrl + '/' + methodname;
    var soapRequest = '<?xml version="1.0" encoding="UTF-8"?><env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope" xmlns:ns1="' + wsUrl + '" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:enc="http://www.w3.org/2003/05/soap-encoding"><env:Body><ns1:getCcmClienteInfo env:encodingStyle="http://www.w3.org/2003/05/soap-encoding"><numeroCliente xsi:type="xsd:string">' + username + '</numeroCliente><psw xsi:type="xsd:string">' + pass + '</psw></ns1:getCcmClienteInfo></env:Body></env:Envelope>';
    $.ajax({
        cache: false,
        type: "POST",
        url: uri,
        contentType: "application/soap+xml",
        dataType: "xml",
        data: soapRequest,
        success: processSuccess,
        error: processError
    });

    function processSuccess(data, status, req) {
        if (status === "success") {
            var response = $(req.responseXML).find("return").text();
            var json = JSON.parse(response);
            sesion.init(json);
            if (sesion.get('login')) {
                //                $("#response").text($.base64.encode("1234"));
                /*
                 * Linea creada para control de puntos
                 */
                var puntos = sesion.get("puntos");
                puntos.disponibles = puntos.actuales;
                sesion.sets("puntos", puntos);
                $.mobile.changePage("home.html");
            } else {
                $.mobile.changePage("main.html");
                alert("No se puede iniciar sesión\nUsuario y/o contraseña incorrectos\n\nFavor de verificarlos");
                sesion.clear();
            }
        } else {
            sesion.clear();
            $.mobile.changePage("main.html");
            alert("No se pudo establecer la conexión con el servidor");
        }
        $(".ui-loader").css("display", "none");
    }

    function processError(data, status, req) {
        sesion.clear();
        $.mobile.changePage("main.html");
        alert("No se pudo establecer la conexión con el servidor");
        $(".ui-loader").css("display", "none");
    }

    function showLoading() {
        $("#loading").click();
    }

    function hideLoading() {
        $("#loading");
    }
};

var sendCanje = function(products, cliente, total) {

    var methodname = 'setCcmPedido';
    var uri = wsUrl + '/' + methodname;
    var body = {numerocliente: cliente, fuente: 1, productos: products, importeTotal: total};
    var soapRequest = '<?xml version="1.0" encoding="UTF-8" standalone="no"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://adventasoluciones.com.mx/detallistas/public/wsdl/index/soap" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:soap-enc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ><SOAP-ENV:Body><mns:setCcmPedido xmlns:mns="http://adventasoluciones.com.mx/detallistas/public/wsdl/index/soap" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><pedido xsi:type="xsd:string">' + JSON.stringify(body) + '</pedido></mns:setCcmPedido></SOAP-ENV:Body></SOAP-ENV:Envelope>';
    return $.ajax({
        cache: false,
        type: "POST",
        url: uri,
        contentType: "application/soap+xml",
        dataType: "xml",
        data: soapRequest,
        success: processSuccess,
        error: processError
    });

    function processSuccess(data, status, req) {
        if (status === "success") {
            var response = JSON.parse($(req.responseXML).find("return").text());
            if (response.exito) {
                var puntos = sesion.get("puntos");
                puntos.actuales = puntos.disponibles;
                sesion.sets("puntos", puntos);
                vaceaCarrito();
                $.mobile.changePage("pedido.html?respuesta=" + response.pedido);
            }
        } else {
            sesion.clear();
            $.mobile.changePage("main.html");
            alert("No se pudo establecer la conexión con el servidor");
        }
        $(".ui-loader").css("display", "none");
        return [];
    }

    function processError(data, status, req) {
        alert("No se pudo establecer la conexión con el servidor");
        sesion.clear();
        $.mobile.changePage("main.html");
        alert("No se pudo establecer la conexión con el servidor");
    }

    function showLoading() {
        $("#loading").click();
    }

    function hideLoading() {
        $("#loading");
    }
};

