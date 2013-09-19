/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

webService = function() {

    var wsUrl = "http://adccmdev.programaatusalud.com/wsdl";
    var soapRequest =
            '<?xml version="1.0" encoding="utf-8"?> \
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \
    xmlns:xsd="http://www.w3.org/2001/XMLSchema" \
    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> \
  <soap:Body> \\n\
  <getComisionistas>\
  </getComisionistas>\
  </soap:Body> \
</soap:Envelope>';
    $.ajax({
        type: "POST",
        url: wsUrl,
        contentType: "text/xml",
        dataType: "xml",
        data: soapRequest,
        success: processSuccess,
        error: processError
    });

    function processSuccess(data, status, req) {
        if (status === "success") {
            console.log(data);
            console.log(req);
        }
    }

    function processError(data, status, req) {
        alert(req.responseText + " " + status);
    }

};