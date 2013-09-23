var canlogin = function() {
    document.addEventListener('deviceready', function() {


        $.mobile.allowCrossDomainPages = true;
        $.support.cors = true;
        var wsUrl = "http://adccmdev.programaatusalud.com/wsdl/index/soap/getCcmClienteInfo";
        //    var wsUrl = "http://localhost/adccmdev/public/wsdl/index/soap/getCcmClienteInfo";
        var soapRequest = '<?xml version="1.0" encoding="UTF-8"?><env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope" xmlns:ns1="http://adccmdev.programaatusalud.com/wsdl/index/soap" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:enc="http://www.w3.org/2003/05/soap-encoding"><env:Body><ns1:getCcmClienteInfo env:encodingStyle="http://www.w3.org/2003/05/soap-encoding"><numeroCliente xsi:type="xsd:string">T301</numeroCliente><psw xsi:type="xsd:string">VDBSVk0wNUVZekE9</psw></ns1:getCcmClienteInfo></env:Body></env:Envelope>';
        $.ajax({
            async: false,
            type: "POST",
            url: wsUrl,
            contentType: "application/soap+xml",
            dataType: "xml",
            data: soapRequest,
            success: processSuccess,
            error: processError
        });

        function processSuccess(data, status, req) {
            $("#response").text(req);
            alert(status);
            if (status === "success") {
                alert("data:"+data);
                alert("req :"+req.toLocaleString());
                alert("req :"+req.toString());
                alert("req :"+req.toSource());
                var response = $(req.responseXML).find("return").text();                
//                $("#response").text(response);
                alert("response"+response);
                var json = jQuery.parseJSON(response);
                alert(json);
                if (data.login) {
                    //                $("#response").text($.base64.encode("1234"));
                    $("#loading").click();
                }
            } else {
                alert("no sucess");
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
    });
};
    