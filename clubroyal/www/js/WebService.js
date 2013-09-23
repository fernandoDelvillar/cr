var canlogin = function() {
    showLoading();
    jQuery.support.cors = true;
    var wsUrl = "http://adccmdev.programaatusalud.com/wsdl/index/soap/getCcmClienteInfo";
//    var wsUrl = "http://localhost/adccmdev/public/wsdl/index/soap/getCcmClienteInfo";
    var soapRequest = '<?xml version="1.0" encoding="UTF-8"?><env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope" xmlns:ns1="http://localhost/adccmdev/public/wsdl/index/soap" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:enc="http://www.w3.org/2003/05/soap-encoding"><env:Body><ns1:getCcmClienteInfo env:encodingStyle="http://www.w3.org/2003/05/soap-encoding"><numeroCliente xsi:type="xsd:string">T301</numeroCliente><psw xsi:type="xsd:string">VDBSVk0wNUVZekE9</psw></ns1:getCcmClienteInfo></env:Body></env:Envelope>';
    $.ajax({
        type: "POST",
        url: wsUrl,
        contentType: "application/soap+xml",
        dataType: "xml",
        data: soapRequest,       
        complete: processSuccess,
        error: processError
    });

    function processSuccess(data, status, req) {
        $("#response").text(data);
         alert(status);
        if (status === "success") {
            var response = $(req.responseXML).find("return").text();
            alert(response);
            alert("davichos");
            $("#response").text(response);
            var json = jQuery.parseJSON(response);
            if (json.login) {
                $("#response").text($.base64.encode("1234"));
            }
        }else{
            alert(status);
        }
    }

    function processError(data, status, req) {
        alert("No se pudo establecer la conexión con el servidor");
    }

    function showLoading() {
        $("#loading").click();
    }

    function hideLoading() {
        $("#loading");
    }
};