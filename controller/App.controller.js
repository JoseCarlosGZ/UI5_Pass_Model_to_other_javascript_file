sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "./MiArchivo"


],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MiArchivo) {
        "use strict";

        return Controller.extend("josecarlosgz.ManagedObject.controller.App", {
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData("./model/Alumnos.json");
                this.getView().setModel(oModel,"miModelo");

            },
            
            //!(1) Llamamos a una función del Component.js mediante el método getOwnerComponent() que tiene acceso a todas las funciones y métodos del Componponent.js
            onPress_llamar_Component_js: function () {
                // var nombreVista = sap.ui.core.UIComponent.getRouterFor(this).getCurrentRoute().getName();
                this.getOwnerComponent().onPress_llamar_modulo_reutilizable1();
            },

            onMiArchivo: function () {
                MiArchivo.funcion_MiArchivo(this.getView());
            }
            

        });
    });
