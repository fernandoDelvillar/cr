/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var sesion = {
    // Application Constructor
    init: function(json) {
        this.clear();
        $.each(json, function(key, value) {
            sesion.sets(key, value);
        });
    },
    get: function(key) {
        return JSON.parse(window.localStorage.getItem(key));
    },
    sets: function(key, value) {
        this.remove(key);
        return window.localStorage.setItem(key, JSON.stringify(value));
    },
    update: function(key, value) {
        this.sets(key, value);
    },
    add: function(key, value) {
        this.sets(key, value);
    },
    remove: function(key) {
        window.localStorage.removeItem(key);
    },
    clear: function() {
        window.localStorage.clear();
    }
};