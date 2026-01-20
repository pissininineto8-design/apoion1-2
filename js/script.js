    function horaEmMinutos(hora) {
      const partes = hora.split(":");
      return (parseInt(partes[0], 10) * 60) + parseInt(partes[1], 10);
    }

    function calcular_data() {
      let f_anterior = document.getElementById('hora_anterior').value;
      let inicio = document.getElementById('hora_inicial').value;
      let fim = document.getElementById('hora_final').value;
      let inicio2 = document.getElementById('hora_inicial2').value;
      let fim2 = document.getElementById('hora_final2').value;
      let inicio3 = document.getElementById('hora_inicial3').value;
      let fim3 = document.getElementById('hora_final3').value;
      let inicio4 = document.getElementById('hora_inicial4').value;
      let fim4 = document.getElementById('hora_final4').value;
      let inicio5 = document.getElementById('hora_inicial5').value;
      let fim5 = document.getElementById('hora_final5').value;
      let inicio6 = document.getElementById('hora_inicial6').value;
      let fim6 = document.getElementById('hora_final6').value;

      var ms = moment(fim,"HH:mm").diff(moment(inicio,"HH:mm"));
      var s = moment.utc(ms).format("HH:mm");

      if (f_anterior != "00:00") {
      var mf = moment(f_anterior,"HH:mm").diff(moment(s,"HH:mm"));
      var f = moment.utc(mf).format("HH:mm");

      var msf2 = moment(fim2,"HH:mm").diff(moment(inicio2,"HH:mm"));
      var sf2 = moment.utc(msf2).format("HH:mm");

      var ranterior = moment(f,"HH:mm").diff(moment(sf2,"HH:mm"));
      var rf = moment.utc(ranterior).format("HH:mm");

      var msf3 = moment(fim3,"HH:mm").diff(moment(inicio3,"HH:mm"));
      var sf3 = moment.utc(msf3).format("HH:mm");

      var ranterior3 = moment(rf,"HH:mm").diff(moment(sf3,"HH:mm"));
      var rf3 = moment.utc(ranterior3).format("HH:mm");

      var msf4 = moment(fim4,"HH:mm").diff(moment(inicio4,"HH:mm"));
      var sf4 = moment.utc(msf4).format("HH:mm");

      var ranterior4 = moment(rf3,"HH:mm").diff(moment(sf4,"HH:mm"));
      var rf4 = moment.utc(ranterior4).format("HH:mm");

      var msf5 = moment(fim5,"HH:mm").diff(moment(inicio5,"HH:mm"));
      var sf5 = moment.utc(msf5).format("HH:mm");

      var ranterior5 = moment(rf4,"HH:mm").diff(moment(sf5,"HH:mm"));
      var rf5 = moment.utc(ranterior5).format("HH:mm");

      var msf6 = moment(fim6,"HH:mm").diff(moment(inicio6,"HH:mm"));
      var sf6 = moment.utc(msf6).format("HH:mm");

      var ranterior6 = moment(rf5,"HH:mm").diff(moment(sf6,"HH:mm"));
      var rf6 = moment.utc(ranterior6).format("HH:mm");

      if (horaEmMinutos(rf6) >= 0 && horaEmMinutos(rf6) <= 180) {
        var df = moment.duration(ranterior6);
        var ff = Math.floor(df.asHours()) + ':' + moment.utc(ranterior6).format("mm");
        document.getElementById("anterior").innerHTML = 'F: ' + ff;
        document.getElementById("normal").innerHTML = "F ANT";
        document.getElementById("vip").innerHTML = "F ANT";
      } else {
        document.getElementById("anterior").innerHTML = 'F: 0:00';
        document.getElementById("normal").innerHTML = "F ANT";
        document.getElementById("vip").innerHTML = "F ANT";
      }

      } else {

      var mn = moment('03:00',"HH:mm").diff(moment(s,"HH:mm"));
      var n = moment.utc(mn).format("HH:mm");

      var msn2 = moment(fim2,"HH:mm").diff(moment(inicio2,"HH:mm"));
      var sn2 = moment.utc(msn2).format("HH:mm");

      var rnormal = moment(n,"HH:mm").diff(moment(sn2,"HH:mm"));
      var rn = moment.utc(rnormal).format("HH:mm");

      var msn3 = moment(fim3,"HH:mm").diff(moment(inicio3,"HH:mm"));
      var sn3 = moment.utc(msn3).format("HH:mm");

      var rnormal3 = moment(rn,"HH:mm").diff(moment(sn3,"HH:mm"));
      var rn3 = moment.utc(rnormal3).format("HH:mm");

      var msn4 = moment(fim4,"HH:mm").diff(moment(inicio4,"HH:mm"));
      var sn4 = moment.utc(msn4).format("HH:mm");

      var rnormal4 = moment(rn3,"HH:mm").diff(moment(sn4,"HH:mm"));
      var rn4 = moment.utc(rnormal4).format("HH:mm");

      var msn5 = moment(fim5,"HH:mm").diff(moment(inicio5,"HH:mm"));
      var sn5 = moment.utc(msn5).format("HH:mm");

      var rnormal5 = moment(rn4,"HH:mm").diff(moment(sn5,"HH:mm"));
      var rn5 = moment.utc(rnormal5).format("HH:mm");

      var msn6 = moment(fim6,"HH:mm").diff(moment(inicio6,"HH:mm"));
      var sn6 = moment.utc(msn6).format("HH:mm");

      var rnormal6 = moment(rn5,"HH:mm").diff(moment(sn6,"HH:mm"));
      var rn6 = moment.utc(rnormal6).format("HH:mm");

      if (horaEmMinutos(rn6) >= 0 && horaEmMinutos(rn6) <= 180) {
        var dn = moment.duration(rnormal6);
        var fn = Math.floor(dn.asHours()) + ':' + moment.utc(rnormal6).format("mm");
        document.getElementById("normal").innerHTML = 'F: ' + fn;
        document.getElementById("anterior").innerHTML = "";
      } else {
        document.getElementById("normal").innerHTML = "F: 0:00";
      }

      var mv = moment('01:00',"HH:mm").diff(moment(s,"HH:mm"));
      var v = moment.utc(mv).format("HH:mm");

      var msv2 = moment(fim2,"HH:mm").diff(moment(inicio2,"HH:mm"));
      var sv2 = moment.utc(msv2).format("HH:mm");

      var rvip = moment(v,"HH:mm").diff(moment(sv2,"HH:mm"));
      var rv = moment.utc(rvip).format("HH:mm");

      var msv3 = moment(fim3,"HH:mm").diff(moment(inicio3,"HH:mm"));
      var sv3 = moment.utc(msv3).format("HH:mm");

      var rvip3 = moment(rv,"HH:mm").diff(moment(sv3,"HH:mm"));
      var rv3 = moment.utc(rvip3).format("HH:mm");

      var msv4 = moment(fim4,"HH:mm").diff(moment(inicio4,"HH:mm"));
      var sv4 = moment.utc(msv4).format("HH:mm");

      var rvip4 = moment(rv3,"HH:mm").diff(moment(sv4,"HH:mm"));
      var rv4 = moment.utc(rvip4).format("HH:mm");

      var msv5 = moment(fim5,"HH:mm").diff(moment(inicio5,"HH:mm"));
      var sv5 = moment.utc(msv5).format("HH:mm");

      var rvip5 = moment(rv4,"HH:mm").diff(moment(sv5,"HH:mm"));
      var rv5 = moment.utc(rvip5).format("HH:mm");

      var msv6 = moment(fim6,"HH:mm").diff(moment(inicio6,"HH:mm"));
      var sv6 = moment.utc(msv6).format("HH:mm");

      var rvip6 = moment(rv5,"HH:mm").diff(moment(sv6,"HH:mm"));
      var rv6 = moment.utc(rvip6).format("HH:mm");

      if (horaEmMinutos(rv6) >= 0 && horaEmMinutos(rv6) <= 60) {
        var dv = moment.duration(rvip6);
        var fv = Math.floor(dv.asHours()) + ':' + moment.utc(rvip6).format("mm");
        document.getElementById("vip").innerHTML = 'F: ' + fv;
        document.getElementById("anterior").innerHTML = "";
      } else {
        document.getElementById("vip").innerHTML = "F: 0:00";
      }
      }
      }
      

      function eraseText() {
        document.getElementById("hora_inicial").focus();
        document.getElementById("hora_anterior").focus();
        document.getElementById("anterior").innerHTML = "";
        document.getElementById("normal").innerHTML = "";
        document.getElementById("vip").innerHTML = "";
      }

      function carrega_data(){
        const date = moment().format('YYYY-MM-DD');
        document.getElementById('hora_inicial').value= '08:00';
        document.getElementById('hora_final').value= '12:00';
      }



      function myFunction14() {
      var textoCopiado = document.getElementById("anterior");
textoCopiado.select();
    document.execCommand("Copy");
      }

      function myFunction15() {
      var textoCopiado = document.getElementById("normal");
textoCopiado.select();
    document.execCommand("Copy");
      }

      function myFunction16() {
      var textoCopiado = document.getElementById("vip");
textoCopiado.select();
    document.execCommand("Copy");
      }

    function set_data(){
      document.getElementById("anterior").innerHTML =  "" ;
      document.getElementById("normal").innerHTML = "F: 3:00";
      document.getElementById("vip").innerHTML = "F: 1:00";
    }
