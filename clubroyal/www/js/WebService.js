var envia = function() {

    jQuery.support.cors = true;


    var wsUrl = "http://localhost/mapfreRe/public/wsdl/index/soap/getEstados";
    var wsUrl = "http://programaatusalud.com/adccmdev/public/wsdl/index/soap/getComisionistas";
    var soapRequest = '<?xml version="1.0" encoding="UTF-8"?><env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope" xmlns:ns1="http://adccmdev.programaatusalud.com/wsdl/index/soap" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:enc="http://www.w3.org/2003/05/soap-encoding"><env:Body><ns1:getComisionistas env:encodingStyle="http://www.w3.org/2003/05/soap-encoding"/></env:Body></env:Envelope>';

    $.ajax({
        type: "POST",
        url: wsUrl,
        contentType: "application/soap+xml",
        dataType: "xml",
        data: soapRequest,
        success: processSuccess,
        error: processError
    });


    function processSuccess(data, status, req) {
        alert(status);
        if (status == "success")
            $("#response").text($(req.responseXML).find("HelloResult").text());
    }
    function processError(data, status, req) {
        console.log(data);
        alert(req.responseText + " " + status);
    }
};