
// function registrar(){
// 	var Email = document.getElementById('email').value;
// 	var Pass = document.getElementById('pass').value;

// firebase.auth().createUserWithEmailAndPassword(Email, Pass).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });

// }

function ingresar(){
	var Email2 = document.getElementById('email2').value;
	var Pass2 = document.getElementById('pass2').value;	
	firebase.auth().signInWithEmailAndPassword(Email2, Pass2).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  console.log(errorCode);

    if (errorCode == "auth/invalid-email"){
    $(document).ready(function(){
    $('#modalInvalidEmail').modal();
    $('#modalInvalidEmail').modal('open'); 
    });
    }

    if (errorCode == "auth/wrong-password"){
    $(document).ready(function(){
    $('#modalInvalidPass').modal();
    $('#modalInvalidPass').modal('open'); 
    });
    }

    if (errorCode == "auth/user-not-found"){
    $(document).ready(function(){
    $('#modalEmailNotFound').modal();
    $('#modalEmailNotFound').modal('open'); 
    });
    }

  // ...
});
}




function observador(){
	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user.uid);
    	console.log('Existe usuario activo');
      Entrando()

    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
    Buscar_Fecha()
    Buscar_Mes()
    Buscar_Anio()
    Buscar_Notificaciones()
    Get_Datos_Usuario()


// window.addEventListener('load', function(){
//   var target = document.querySelector('#menu');
//   target.addEventListener('click', saludar, false);
// });

// function saludar() {
//     $(document).ready(function(){
//     $('.sidenav').sidenav();
//   });
// }


// Funcion Buscador() de dia/fecha

  document.getElementById("clicke").addEventListener('click',function ()
    {

  document.getElementById('TablaDia').style.display = 'none';
  document.getElementById('TablaDiaBusqueda').style.display = 'block';
    
  var fecha = document.getElementById('fecha').value;    
  var tabfecha = document.getElementById('tabfecha');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Dia/"+fecha+"/").child('Fecha');
  dbRef.on('value', snap => tabfecha.innerHTML = snap.val().replace(/['"]+/g, ''));

  var fecha = document.getElementById('fecha').value;    
  var tablc = document.getElementById('tablc');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Dia/"+fecha+"/").child('Litros_Consumidos');
  dbRef.on('value', snap => tablc.innerHTML = snap.val().replace(/['"]+/g, ''));  

  var fecha = document.getElementById('fecha').value;    
  var tabln = document.getElementById('tabln');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Dia/"+fecha+"/").child('Litros_Necesarios');
  dbRef.on('value', snap => tabln.innerHTML = snap.val().replace(/['"]+/g, ''));

  var fecha = document.getElementById('fecha').value;    
  var tabtc = document.getElementById('tabtc');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Dia/"+fecha+"/").child('Tipo_Consumo');
  dbRef.on('value', snap => tabtc.innerHTML = snap.val().replace(/['"]+/g, ''));

    }  ); 





// Funcion Buscador() de Notificaciones

  document.getElementById("clicke2").addEventListener('click',function ()
    {

  document.getElementById('TablaNotificaciones').style.display = 'none';
  document.getElementById('TablaDiaBusqueda2').style.display = 'block';
    
  var fecha = document.getElementById('fecha2').value;    
  var tabfechanoti = document.getElementById('tabfechanoti');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Notificaciones/"+fecha+"/").child('Fecha');
  dbRef.on('value', snap => tabfechanoti.innerHTML = snap.val().replace(/['"]+/g, ''));

  var fecha = document.getElementById('fecha2').value;    
  var tabreporte = document.getElementById('tabreporte');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Notificaciones/"+fecha+"/").child('Reporte');
  dbRef.on('value', snap => tabreporte.innerHTML = snap.val().replace(/['"]+/g, ''));  

    }  ); 





  function Buscar_Fecha(){

var db = firebase.database();
var ref = db.ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Dia");
var table = document.getElementById("tabla");
//limpia la tabla 
table.innerHTML = "";
 //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)
ref.orderByChild("Fecha").on("child_added", function(snapshot){
//repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"     
    var d = snapshot.val();          
    {
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  // asigna a las celdas el valir del Child especificado
  cell1.innerHTML = d.Fecha.replace(/['"]+/g, '');
  cell2.innerHTML = d.Litros_Consumidos.replace(/['"]+/g, '');
  cell3.innerHTML = d.Litros_Necesarios.replace(/['"]+/g, '');
  cell4.innerHTML = d.Tipo_Consumo.replace(/['"]+/g, '');
    }
  });
}





    function Buscar_Mes(){
var db = firebase.database();
var ref = db.ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Mes");
var table = document.getElementById("tabla2");
//limpia la tabla
table.innerHTML = "";
 //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)
ref.orderByChild("Mes").on("child_added", function(snapshot){
//repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"   
    var d = snapshot.val();            
    {
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  // asigna a las celdas el valir del Child especificado
  cell1.innerHTML = d.Mes.replace(/['"]+/g, '');
  cell2.innerHTML = d.Litros_Consumidos.replace(/['"]+/g, '');
  cell3.innerHTML = d.Litros_Necesarios.replace(/['"]+/g, '');
  cell4.innerHTML = d.Tipo_Consumo.replace(/['"]+/g, '');
    }
  });
}





    function Buscar_Anio(){
var db = firebase.database();
var ref = db.ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Año");
var table = document.getElementById("tabla3");
//limpia la tabla
table.innerHTML = "";
 //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)
ref.orderByChild("Año").on("child_added", function(snapshot){
//repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
    var d = snapshot.val();            
    {
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  // asigna a las celdas el valir del Child especificado
  cell1.innerHTML = d.Año.replace(/['"]+/g, '');
  cell2.innerHTML = d.Litros_Consumidos.replace(/['"]+/g, '');
  cell3.innerHTML = d.Litros_Necesarios.replace(/['"]+/g, '');
  cell4.innerHTML = d.Tipo_Consumo.replace(/['"]+/g, '');
    }
  });
}





    function Buscar_Notificaciones(){
var db = firebase.database();
var ref = db.ref("Usuarios/"+uid+"/Notificaciones");
var table = document.getElementById("tabla4");
//limpia la tabla
table.innerHTML = "";
 //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)
ref.orderByChild("Fecha").on("child_added", function(snapshot){
//repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
    var d = snapshot.val();            
    {
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  // asigna a las celdas el valir del Child especificado
  cell1.innerHTML = d.Fecha.replace(/['"]+/g, '');
  cell2.innerHTML = d.Reporte.replace(/['"]+/g, '');
    }
  });
}






function Get_Datos_Usuario(){
  setTimeout("Circulos()", 3000);


// DATOS EN TIEMPOR REAL (3 GRAFICAS, MODO OSCURO Y NOTIFICACIONES)

  var modooscuro = document.getElementById('modooscuro');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Modo_Oscuro?');
  dbRef.on('value', snap => modooscuro.innerHTML = snap.val().replace(/['"]+/g, ''));

  var notSHidden = document.getElementById('notSHidden');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Notificaciones?');
  dbRef.on('value', snap => notSHidden.innerHTML = snap.val().replace(/['"]+/g, ''));

  var inputTRI = document.getElementById('inputTRI');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Tiempo_Real/").child('Numero');
  dbRef.on('value', snap => inputTRI.innerHTML = snap.val().replace(/['"]+/g, ''));

  var inputTRI2 = document.getElementById('inputTRI2');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Tiempo_Real/").child('Numero');
  dbRef.on('value', snap => inputTRI2.innerHTML = snap.val().replace(/['"]+/g, ''));

  var inputTRI3 = document.getElementById('inputTRI3');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Tiempo_Real/").child('Numero');
  dbRef.on('value', snap => inputTRI3.innerHTML = snap.val().replace(/['"]+/g, ''));

//DATOS DIA, MES, AÑO PARA GRAFICAS EN TIEMPO REAL

  var inputDG1 = document.getElementById('inputDG1');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Litros_De_Agua_A_Consumir');
  dbRef.on('value', snap => inputDG1.innerHTML = snap.val().replace(/['"]+/g, '')); 

  var inputDG2 = document.getElementById('inputDG2');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Litros_De_Agua_A_Consumir_Mes');
  dbRef.on('value', snap => inputDG2.innerHTML = snap.val().replace(/['"]+/g, '')); 

  var inputDG3 = document.getElementById('inputDG3');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Litros_De_Agua_A_Consumir_Año');
  dbRef.on('value', snap => inputDG3.innerHTML = snap.val().replace(/['"]+/g, '')); 

// DATOS DIA/ MES/ AÑO PARA LOS INPUT'S INVISIBLES

  var inputH = document.getElementById('inputH');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Habitantes En Casa');
  dbRef.on('value', snap => inputH.value = snap.val().replace(/['"]+/g, ''));

  var inputD = document.getElementById('inputD');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Litros_De_Agua_A_Consumir');
  dbRef.on('value', snap => inputD.value = snap.val().replace(/['"]+/g, ''));  

  var inputM = document.getElementById('inputM');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Litros_De_Agua_A_Consumir_Mes');
  dbRef.on('value', snap => inputM.value = snap.val().replace(/['"]+/g, '')); 

  var inputA = document.getElementById('inputA');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Litros_De_Agua_A_Consumir_Año');
  dbRef.on('value', snap => inputA.value = snap.val().replace(/['"]+/g, '')); 


// DATOS PRINCIPALES DEL USUARIO DEL NAV

  var apellido = document.getElementById('apellido');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Apellido');
  dbRef.on('value', snap => apellido.innerHTML = "Water Meter Web - Familia "+snap.val().replace(/['"]+/g, ''));

  var nombreuser = document.getElementById('nombreuser'); //este es del rectangulo de abajo (bafore Perfil)
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Nombre');
  dbRef.on('value', snap => nombreuser.innerHTML = snap.val().replace(/['"]+/g, ''));
 
// DATOS PRINCIPALES DEL USUARIO EN EL SIDENAV

  var nomS = document.getElementById('nomS');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Nombre');
  dbRef.on('value', snap => nomS.innerHTML = snap.val().replace(/['"]+/g, ''));

  var apeS = document.getElementById('apeS');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Apellido');
  dbRef.on('value', snap => apeS.innerHTML = "_"+snap.val().replace(/['"]+/g, ''));

  var emailS = document.getElementById('emailS');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Correo');
  dbRef.on('value', snap => emailS.innerHTML = snap.val().replace(/['"]+/g, ''));  

  var habS = document.getElementById('habS');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Habitantes En Casa');
  dbRef.on('value', snap => habS.innerHTML = '<b>'+"Habitantes en casa: "+'</b>'+snap.val().replace(/['"]+/g, ''));

  var liDS = document.getElementById('liDS');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Litros_De_Agua_A_Consumir');
  dbRef.on('value', snap => liDS.innerHTML = '<b>'+"L. diarios de agua: "+'</b>'+snap.val().replace(/['"]+/g, ''));    

  var liMS = document.getElementById('liMS');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Litros_De_Agua_A_Consumir_Mes');
  dbRef.on('value', snap => liMS.innerHTML = '<b>'+"L. mensuales de agua: "+'</b>'+snap.val().replace(/['"]+/g, ''));    

  var liAS = document.getElementById('liAS');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Principales/").child('Litros_De_Agua_A_Consumir_Año');
  dbRef.on('value', snap => liAS.innerHTML = '<b>'+"L. anuales de agua: "+'</b>'+snap.val().replace(/['"]+/g, '')); 
    
  // DATOS DE ESTADISTICAS (LOS 5 DIAS ANTES) 

                                                //DIA 1

  var FechaActual1 = document.getElementById('FechaActual1').value;

  var fData1 = document.getElementById('fData1');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Dia/"+FechaActual1+"/").child('Fecha');
  dbRef.on('value', snap => fData1.value = snap.val().replace(/['"]+/g, ''));

  var lcData1 = document.getElementById('lcData1');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Dia/"+FechaActual1+"/").child('Litros_Consumidos');
  dbRef.on('value', snap => lcData1.value = snap.val().replace(/['"]+/g, '')); 

  var lnData1 = document.getElementById('lnData1');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Dia/"+FechaActual1+"/").child('Litros_Necesarios');
  dbRef.on('value', snap => lnData1.value = snap.val().replace(/['"]+/g, ''));

  var tcData1 = document.getElementById('tcData1');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Dia/"+FechaActual1+"/").child('Tipo_Consumo');
  dbRef.on('value', snap => tcData1.value = snap.val().replace(/['"]+/g, ''));

                                                //DIA 2
                                                
  var FechaActual2 = document.getElementById('FechaActual2').value;

  var fData2 = document.getElementById('fData2');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Dia/"+FechaActual2+"/").child('Fecha');
  dbRef.on('value', snap => fData2.value = snap.val().replace(/['"]+/g, ''));

  var lcData2 = document.getElementById('lcData2');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Dia/"+FechaActual2+"/").child('Litros_Consumidos');
  dbRef.on('value', snap => lcData2.value = snap.val().replace(/['"]+/g, '')); 

  var lnData2 = document.getElementById('lnData2');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Dia/"+FechaActual2+"/").child('Litros_Necesarios');
  dbRef.on('value', snap => lnData2.value = snap.val().replace(/['"]+/g, ''));

  var tcData2 = document.getElementById('tcData2');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Dia/"+FechaActual2+"/").child('Tipo_Consumo');
  dbRef.on('value', snap => tcData2.value = snap.val().replace(/['"]+/g, ''));    

                                                //DIA 3
                                                
  var FechaActual3 = document.getElementById('FechaActual3').value;

  var fData3 = document.getElementById('fData3');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Dia/"+FechaActual3+"/").child('Fecha');
  dbRef.on('value', snap => fData3.value = snap.val().replace(/['"]+/g, ''));

  var lcData3 = document.getElementById('lcData3'); 
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Dia/"+FechaActual3+"/").child('Litros_Consumidos');
  dbRef.on('value', snap => lcData3.value = snap.val().replace(/['"]+/g, '')); 

  var lnData3 = document.getElementById('lnData3');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Dia/"+FechaActual3+"/").child('Litros_Necesarios');
  dbRef.on('value', snap => lnData3.value = snap.val().replace(/['"]+/g, ''));

  var tcData3 = document.getElementById('tcData3');
  var dbRef = firebase.database().ref("Usuarios/"+uid+"/Datos_Consumo_De_Agua/Dia/"+FechaActual3+"/").child('Tipo_Consumo');
  dbRef.on('value', snap => tcData3.value = snap.val().replace(/['"]+/g, ''));  

}

  }else{
    console.log('No existe usuario activo');
    Saliendo()
  }
});

}observador()

  function Salir(){
  firebase.auth().signOut()
  .then(function(){
    window.location='http://localhost/water_meter_web/index.html';
    Saliendo()
  })
  .catch(function(error){
    console.log(error)
  })
}





// FUNCIONES PRINCIPALES DEL SISEMA

  function Entrando(){
    document.getElementById('Login').style.display = 'none';
    document.getElementById('Home').style.display = 'block';

  }

  function Saliendo(){
    document.getElementById('Login').style.display = 'block';
    document.getElementById('Home').style.display = 'none';
  } 




// FUNCIONES DE ACTUALIZAR DATOS DESPUES DE BUSQUEDA DIA/NOTIFICACIONES

  function ActDatos(){
  document.getElementById('TablaDia').style.display = 'block';
  document.getElementById('TablaDiaBusqueda').style.display = 'none';
}

  function ActDatosNoti(){
  document.getElementById('TablaNotificaciones').style.display = 'block';
  document.getElementById('TablaDiaBusqueda2').style.display = 'none';
}





// DROPDOWN MOSTRANDO REGISTROS POR

  function Dia(){
    document.getElementById('TablaDia').style.display = 'block';
    document.getElementById('TablaMes').style.display = 'none';
    document.getElementById('TablaAnio').style.display = 'none';
    // var text = document.getElementById('textdrop');
    // var text = text.innerHTML = 'Dia';
  }

  function Mes(){
    document.getElementById('TablaDia').style.display = 'none';
    document.getElementById('TablaMes').style.display = 'block';
    document.getElementById('TablaAnio').style.display = 'none';
    // var text = document.getElementById('textdrop');
    // var text = text.innerHTML = 'Mes';
  }   

  function Anio(){
    document.getElementById('TablaDia').style.display = 'none';
    document.getElementById('TablaMes').style.display = 'none';
    document.getElementById('TablaAnio').style.display = 'block';
    // var text = document.getElementById('textdrop');
    // var text = text.innerHTML = 'Año';
  }     



// FUNCIONES DEL MENU PRINCIPAL "A, B Y C"

  function MenuA(){

    document.getElementById('TablaDia').style.display = 'block';
    document.getElementById('TablaDiaBusqueda').style.display = 'none';
    document.getElementById('TablaMes').style.display = 'none';
    document.getElementById('TablaAnio').style.display = 'none';

    document.getElementById('TablaDatosTiempoReal').style.display = 'none';

    document.getElementById('TablaEstadisticas').style.display = 'none';

    document.getElementById('TablaNotificaciones').style.display = 'none';
    document.getElementById('TablaDiaBusqueda2').style.display = 'none';  

  }


  function MenuB(){
    setTimeout("Circulos()", 1);

    document.getElementById('TablaDia').style.display = 'none';
    document.getElementById('TablaDiaBusqueda').style.display = 'none';
    document.getElementById('TablaMes').style.display = 'none';
    document.getElementById('TablaAnio').style.display = 'none';

    document.getElementById('TablaDatosTiempoReal').style.display = 'block';

    document.getElementById('TablaEstadisticas').style.display = 'none';

    document.getElementById('TablaNotificaciones').style.display = 'none';
    document.getElementById('TablaDiaBusqueda2').style.display = 'none';

  }


  function MenuC(){
    setTimeout("Graph()", 1000);

    document.getElementById('TablaDia').style.display = 'none';
    document.getElementById('TablaDiaBusqueda').style.display = 'none';
    document.getElementById('TablaMes').style.display = 'none';
    document.getElementById('TablaAnio').style.display = 'none';

    document.getElementById('TablaDatosTiempoReal').style.display = 'none';

    document.getElementById('TablaEstadisticas').style.display = 'block';

    document.getElementById('TablaNotificaciones').style.display = 'none';
    document.getElementById('TablaDiaBusqueda2').style.display = 'none';

  } 

  function MenuD(){

    document.getElementById('TablaDia').style.display = 'none';
    document.getElementById('TablaDiaBusqueda').style.display = 'none';
    document.getElementById('TablaMes').style.display = 'none';
    document.getElementById('TablaAnio').style.display = 'none';

    document.getElementById('TablaDatosTiempoReal').style.display = 'none';

    document.getElementById('TablaEstadisticas').style.display = 'none';

    document.getElementById('TablaNotificaciones').style.display = 'block';
    document.getElementById('TablaDiaBusqueda2').style.display = 'none';

  }  





  //MODO OSCURO

setInterval("ModoOscuro()", 1);

  function ModoOscuro(){

    var Modo_Oscuro = document.getElementById("modooscuro").innerHTML;

    if (Modo_Oscuro=='Si') {

      document.body.style.backgroundColor = "#19827a"; //Color de background

      document.getElementById("MenuTab2").style.backgroundColor = "#b2dfdb"; //Background Menu A,B,C
      document.getElementById("MenuLetra").style.color = "white"; //Inintangible

      document.getElementById("HolaDia").style.color = "#19827a"; // Palabra "Hola" en DIA (toma el color del background)
      document.getElementById("MostrandoRegPorDia").style.color = "white"; // Mostrando Reg Por Dia- text color

      document.getElementById("HolaMes").style.color = "#19827a"; // Palabra "Hola" en MES (toma el color del background)
      document.getElementById("MostrandoRegPorMes").style.color = "white"; // Mostrando Reg Por Mes - text color

      document.getElementById("HolaAnio").style.color = "#19827a"; // Palabra "Hola" en AÑO (toma el color del background)
      document.getElementById("MostrandoRegPorAnio").style.color = "white"; // Mostrando Reg Por Año - text color

      document.getElementById("textH").style.color = "#80cbc4"; //Circulo 1 (Hab en casa)
      document.getElementById("textD").style.color = "#ff80ab"; //Circulo 2 (Litros por Dia)
      document.getElementById("textM").style.color = "#e1bee7"; //Circulo 3 (Litrospor Mes)
      document.getElementById("textA").style.color = "#e1f5fe"; //Circulo 4 (Litros por Año)

      document.getElementById("TextBar").style.color = "white";
      document.getElementById("moS").innerHTML = '<b>'+"Modo Oscuro: "+'</b>'+"Activado"; //Modo Oscuro

      var elements = document.getElementsByClassName('TextBar'); // get all elements
      for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "white";
      }

      var elements = document.getElementsByClassName('Card3'); // get all elements
      for(var i = 0; i < elements.length; i++){
        elements[i].style.background = "#3A9696";
      }    

      // MODO OSCURO DEL MENU SIDENAV

      document.getElementById("sidenav-image").src = "img/cardhead2.jpg";
      document.getElementById("circle").src = "img/backgroundnoteal.png";

      document.getElementById("slide-out").style.background = "#19827a";

      var elements = document.getElementsByClassName('divider'); // get all elements
      for(var i = 0; i < elements.length; i++){
        elements[i].style.background = "#26a69a";
      }

      var elements = document.getElementsByClassName('side-color-text-head'); // get all elements
      for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "white";
      }      

      var elements = document.getElementsByClassName('side-color-text-body'); // get all elements
      for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "white";
      }      

      var elements = document.getElementsByClassName('icon-sidenav'); // get all elements
      for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "white";
      }  

      var elements = document.getElementsByClassName('sidenav-titulos'); // get all elements
      for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "#a7ffeb";
      } 

    }else
     if (Modo_Oscuro=='No') {
      document.body.style.backgroundColor = "#f5f5f5";

      document.getElementById("apellido").style.color = "white";
      document.getElementById("MenuTab2").style.backgroundColor = "#f5f5f5";

      document.getElementById("HolaDia").style.color = "#f5f5f5";
      document.getElementById("MostrandoRegPorDia").style.color = "black";

      document.getElementById("HolaMes").style.color = "#f5f5f5";
      document.getElementById("MostrandoRegPorMes").style.color = "black";

      document.getElementById("HolaAnio").style.color = "#f5f5f5";
      document.getElementById("MostrandoRegPorAnio").style.color = "black";

      document.getElementById("textH").style.color = "teal";
      document.getElementById("textD").style.color = "#e91e63";
      document.getElementById("textM").style.color = "#673ab7";
      document.getElementById("textA").style.color = "#2196f3";

      document.getElementById("TextBar").style.color = "#696969";
      document.getElementById("moS").innerHTML = '<b>'+"Modo Oscuro: "+'</b>'+"Desactivado";

      var elements = document.getElementsByClassName('TextBar'); // textos de las cards
      for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "#696969";
      }

      var elements = document.getElementsByClassName('Card3'); // backgrounds de las card
      for(var i = 0; i < elements.length; i++){
        elements[i].style.background = "#f5f5f5";
      }      

      // MODO OSCURO DEL MENU SIDENAV

      document.getElementById("sidenav-image").src = "img/cardhead.jpg";
      document.getElementById("circle").src = "img/backgroundteal.png";

      document.getElementById("slide-out").style.background = "#f5f5f5";

      var elements = document.getElementsByClassName('divider'); // get all elements
      for(var i = 0; i < elements.length; i++){
        elements[i].style.background = "#e0e0e0 ";
      }

      var elements = document.getElementsByClassName('side-color-text-head'); // get all elements
      for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "white";
      }      

      var elements = document.getElementsByClassName('side-color-text-body'); // get all elements
      for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "teal";
      } 

      var elements = document.getElementsByClassName('icon-sidenav'); // get all elements
      for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "teal";
      } 

      var elements = document.getElementsByClassName('sidenav-titulos'); // get all elements
      for(var i = 0; i < elements.length; i++){
        elements[i].style.color = "#004d40";
      } 

   }else {
     document.body.style.backgroundColor = "#f5f5f5";
   }


}

// FIN MODO OSCURO



//INICIA CODIGO DE DATOS EN TIEMPO REAL DE LITROS EN CONSUMO


setInterval("RangoTR()", 1000);
 


function RangoTR(){

    var inputTR = document.getElementById('inputTRI').innerHTML; //ESTE DATO TRI ES DE LA PRIMERA LINEA

    document.getElementById('range').innerHTML = inputTR; //NUMERO DE RANGO DIA
    document.getElementById('range').value = inputTR; // VALOR DE RANGO EN SI

    document.getElementById('range2').innerHTML = inputTR; //NUMERO DE RANGO MES
    document.getElementById('range2').value = inputTR; // VALOR DE RANGO EN SI

    document.getElementById('range3').innerHTML = inputTR; //NUMERO DE RANGO AÑO
    document.getElementById('range3').value = inputTR; // VALOR DE RANGO EN SI

}

//INICIACODIGO DE (SI HAY O NO) NOTIFICACIONES EN TIEMPO REAL

setInterval("NotificacionesS()", 1);

  function NotificacionesS(){

    var VnotificacionesS = document.getElementById("notSHidden").innerHTML;

    if (VnotificacionesS=='Si') {
      document.getElementById("notS").innerHTML = '<b>'+"Notificaciones: "+'</b>'+"Activadas";
    }else
     if (VnotificacionesS=='No') {
      document.getElementById("notS").innerHTML = '<b>'+"Notificaciones: "+'</b>'+"Desactivadas";
    }
   }



  