//Archivo de configuración de angular
(function(){
  'use strict';
        //Nombre de la aplicación
                //Dependencias que nuestra aplicacion podría necesitar
angular
.module("myApp",[])
.controller("cursoCtrl", cursoCtrl);
//Un controlador es el encargado de manejar alguna funcionalidad de la página
function cursoCtrl(){
  var curso = this;
  
  curso.collection = [
    {
        'img': 'img/php.jpg',
        'name': 'PHP',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
      {
        'img': 'img/c++.jpg',
        'name': 'C++',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
       {
        'img': 'img/csharp.jpg',
        'name': 'c#',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
       {
        'img': 'img/bases.jpg',
        'name': 'Base de Datos',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
      {
        'img': 'img/c.jpg',
        'name': 'C',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
      {
        'img': 'img/pthon.jpg',
        'name': 'Python',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
      {
        'img': 'img/java.jpg',
        'name': 'Java',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
       {
        'img': "img/diseñoweb.jpg",
        'name': 'Diseño Web',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
      {
        'img': 'img/arduino.jpg',
        'name': 'Arduino',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
       {
        'img': "img/fortran.jpg",
        'name': 'Fortran',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
       {
        'img': "img/forense.jpg",
        'name': 'Computo forense',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
       {
        'img': 'img/ia.jpg',
        'name': 'Inteligencia Artificial',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
       {
        'img': "img/ios.jpg",
        'name': 'IOS',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
       {
        'img': "img/linux.jpg",
        'name': 'Linux',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
       {
        'img': "img/pcs.jpg",
        'name': 'Mantenimiento y ensamblado de PCs',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
       {
        'img': "img/rasp.jpg",
        'name': 'Raspberry',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
      {
        'img': "img/redes.jpg",
        'name': 'Redes de Datos',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
       {
        'img': "img/matlab.jpg",
        'name': 'Matlab',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
      {
        'img': 'img/laravel.jpg',
        'name': 'Laravel',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },
      {
        'img': "img/android.jpg",
        'name': 'Android',
        'fecha' :  '06/05/2017 al 27/05/2017',
        'horario': '10:00:00-14:00:00',
        'detalles' :'blablablabla'
      },

  ];
  
}

})();

