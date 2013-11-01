/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
// Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("backbutton", this.handleBackButton, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        sesion.clear();
        creaDB();
    },
    handleBackButton: function() {
        alert($.mobile.activePage.attr('id'));
        switch ($.mobile.activePage.attr('id')) {
            case 'home':
                alert("nos vamos a main");
                $.mobile.changePage('main.html');
                break;
            case 'login':
                alert("nos vamos a salir");
                navigator.app.exitApp();
                break;
            case 'listadopedidos':
            case 'estadocuenta':
            case 'catalogo':
                alert("nos vamos a home");
                $.mobile.changePage('home.html');
                break;
            case 'categoria':
                alert("nos vamos a catalogo");
                $.mobile.changePage('catalogo.html');
                break;
            case 'productoInfo':
                alert("nos vamos a categoria");
                $.mobile.changePage('categoria.html');
                break;
            case 'carrito':
                alert("nos vamos a catalogo");
                $.mobile.changePage('catalogo.html');
                break;
            case 'pedidoInfo':
                alert("nos vamos a home");
                $.mobile.changePage('home.html');
                break;
            default :
                alert("nos vamos a back");
                navigator.app.backHistory();
        }
    }


};
/*$("#signin").bind("click", function(event) {
 canlogin();
 });
 $(document).on("pageinit", function() {
 $.mobile.defaultPageTransition = "none";
 sesion.clear();
 CreaDB();
 });*/