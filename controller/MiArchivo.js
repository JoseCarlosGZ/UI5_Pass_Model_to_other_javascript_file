// @ts-nocheck
sap.ui.define([],

    function () {
        "use strict"

        return  {



            funcion_MiArchivo: function (oView) {
                //Esta serntencia es la misma que la de abajo:  var nombrePrimerRegistro = oView.getModel("miModelo").getData()["alumnos"][0]["nombre"];
                var nombrePrimerRegistro = oView.getModel("miModelo").getProperty("/alumnos/0/nombre");

                oView.byId("miInput2").setValue(nombrePrimerRegistro);
            }
        };
    });