

    var actualizarHora = ()=>{
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos =fecha.getSeconds(),
            diasemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            año = fecha.getFullYear();

            var pHoras = document.getElementById('horas'),
                pMinutos = document.getElementById('minutos'),
                pSegundos = document.getElementById('segundos'),
                pAMPM = document.getElementById('ampm'),
                pminutos = document.getElementById('minutos'),
                pDiaSemana = document.getElementById('diaSemana'),
                pDia = document.getElementById('dia'),
                pMes = document.getElementById('mes'),
                pAño = document.getElementById('año');


                var semana = ['DOMINGO' , 'LUNES' , 'MARTES' , 'MIERCOLES' , 'JUEVES' , 'VIERNES' , 'SABADO'];
                pDiaSemana.textContent = semana[diasemana];

                pDia.textContent = dia;

                var meses = ['ENERO' , 'FEBRERO' , 'MARZO' , 'ABRIL' , 'MAYO' , 'JUNIO' , 'JULIO' , 'AGOSTO' , 'SEPTIEMBRE' , 'OCTUBRE' , 'NOVIEMBRE' , 'DICIEMBRE'];
                pMes.textContent = meses[mes];

                pAño.textContent = año;

                pHoras.textContent = horas;

                

                
                if(minutos<10){
                    minutos = "0" + minutos;
                }

                pMinutos.textContent = minutos;

                if(segundos<10){
                    segundos = "0" + segundos;
                }

                pSegundos.textContent = segundos;

                if(horas>=12){
                    horas= horas - 12;
                    ampm = "PM"; 
                }else{
                    ampm = 'AM';
                }
                pAMPM.textContent = ampm;


            
        

    };

    actualizarHora();
    var interval = setInterval(actualizarHora,1000);


