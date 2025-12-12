
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

      if (rf6 == "00:00" | rf6 == "00:01" | rf6 == "00:02" | rf6 == "00:03" | rf6 == "00:04" | rf6 == "00:05" | rf6 == "00:06" | rf6 == "00:07" | rf6 == "00:08" | rf6 == "00:09" | rf6 == "00:10" | rf6 == "00:11" | rf6 == "00:12" | rf6 == "00:13" | rf6 == "00:14" | rf6 == "00:15" | rf6 == "00:16" | rf6 == "00:17" | rf6 == "00:18" | rf6 == "00:19" | rf6 == "00:20" | rf6 == "00:21" | rf6 == "00:22" | rf6 == "00:23" | rf6 == "00:24" | rf6 == "00:25" | rf6 == "00:26" | rf6 == "00:27" | rf6 == "00:28" | rf6 == "00:29" | rf6 == "00:30" | rf6 == "00:31" | rf6 == "00:32" | rf6 == "00:33" | rf6 == "00:34" | rf6 == "00:35" | rf6 == "00:36" | rf6 == "00:37" | rf6 == "00:38" | rf6 == "00:39" | rf6 == "00:40" | rf6 == "00:41" | rf6 == "00:42" | rf6 == "00:43" | rf6 == "00:44" | rf6 == "00:45" | rf6 == "00:46" | rf6 == "00:47" | rf6 == "00:48" | rf6 == "00:49" | rf6 == "00:50" | rf6 == "00:51" | rf6 == "00:52" | rf6 == "00:53" | rf6 == "00:54" | rf6 == "00:55" | rf6 == "00:56" | rf6 == "00:57" | rf6 == "00:58" | rf6 == "00:59" | rf6 == "01:00" | rf6 == "01:01" | rf6 == "01:02" | rf6 == "01:03" | rf6 == "01:04" | rf6 == "01:05" | rf6 == "01:06" | rf6 == "01:07" | rf6 == "01:08" | rf6 == "01:09" | rf6 == "01:10" | rf6 == "01:11" | rf6 == "01:12" | rf6 == "01:13" | rf6 == "01:14" | rf6 == "01:15" | rf6 == "01:16" | rf6 == "01:17" | rf6 == "01:18" | rf6 == "01:19" | rf6 == "01:20" | rf6 == "01:21" | rf6 == "01:22" | rf6 == "01:23" | rf6 == "01:24" | rf6 == "01:25" | rf6 == "01:26" | rf6 == "01:27" | rf6 == "01:28" | rf6 == "01:29" | rf6 == "01:30" | rf6 == "01:31" | rf6 == "01:32" | rf6 == "01:33" | rf6 == "01:34" | rf6 == "01:35" | rf6 == "01:36" | rf6 == "01:37" | rf6 == "01:38" | rf6 == "01:39" | rf6 == "01:40" | rf6 == "01:41" | rf6 == "01:42" | rf6 == "01:43" | rf6 == "01:44" | rf6 == "01:45" | rf6 == "01:46" | rf6 == "01:47" | rf6 == "01:48" | rf6 == "01:49" | rf6 == "01:50" | rf6 == "01:51" | rf6 == "01:52" | rf6 == "01:53" | rf6 == "01:54" | rf6 == "01:55" | rf6 == "01:56" | rf6 == "01:57" | rf6 == "01:58" | rf6 == "01:59" | rf6 == "02:00" | rf6 == "02:01" | rf6 == "02:02" | rf6 == "02:03" | rf6 == "02:04" | rf6 == "02:05" | rf6 == "02:06" | rf6 == "02:07" | rf6 == "02:08" | rf6 == "02:09" | rf6 == "02:10" | rf6 == "02:11" | rf6 == "02:12" | rf6 == "02:13" | rf6 == "02:14" | rf6 == "02:15" | rf6 == "02:16" | rf6 == "02:17" | rf6 == "02:18" | rf6 == "02:19" | rf6 == "02:20" | rf6 == "02:21" | rf6 == "02:22" | rf6 == "02:23" | rf6 == "02:24" | rf6 == "02:25" | rf6 == "02:26" | rf6 == "02:27" | rf6 == "02:28" | rf6 == "02:29" | rf6 == "02:30" | rf6 == "02:31" | rf6 == "02:32" | rf6 == "02:33" | rf6 == "02:34" | rf6 == "02:35" | rf6 == "02:36" | rf6 == "02:37" | rf6 == "02:38" | rf6 == "02:39" | rf6 == "02:40" | rf6 == "02:41" | rf6 == "02:42" | rf6 == "02:43" | rf6 == "02:44" | rf6 == "02:45" | rf6 == "02:46" | rf6 == "02:47" | rf6 == "02:48" | rf6 == "02:49" | rf6 == "02:50" | rf6 == "02:51" | rf6 == "02:52" | rf6 == "02:53" | rf6 == "02:54" | rf6 == "02:55" | rf6 == "02:56" | rf6 == "02:57" | rf6 == "02:58" | rf6 == "02:59" | rf6 == "03:00") {
      var df = moment.duration(ranterior6);
      var ff = Math.floor(df.asHours()) + ':' + moment.utc(ranterior6).format("mm");
      document.getElementById("anterior").innerHTML =  'F: ' + ff ;
      document.getElementById("normal").innerHTML = "F ANT";
      document.getElementById("vip").innerHTML = "F ANT";
      } else {
      document.getElementById("anterior").innerHTML =  'F: 0:00' ;
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

     if ( rn6 == "00:00" | rn6 == "00:01" | rn6 == "00:02" | rn6 == "00:03" | rn6 == "00:04" | rn6 == "00:05" | rn6 == "00:06" | rn6 == "00:07" | rn6 == "00:08" | rn6 == "00:09" | rn6 == "00:10" | rn6 == "00:11" | rn6 == "00:12" | rn6 == "00:13" | rn6 == "00:14" | rn6 == "00:15" | rn6 == "00:16" | rn6 == "00:17" | rn6 == "00:18" | rn6 == "00:19" | rn6 == "00:20" | rn6 == "00:21" | rn6 == "00:22" | rn6 == "00:23" | rn6 == "00:24" | rn6 == "00:25" | rn6 == "00:26" | rn6 == "00:27" | rn6 == "00:28" | rn6 == "00:29" | rn6 == "00:30" | rn6 == "00:31" | rn6 == "00:32" | rn6 == "00:33" | rn6 == "00:34" | rn6 == "00:35" | rn6 == "00:36" | rn6 == "00:37" | rn6 == "00:38" | rn6 == "00:39" | rn6 == "00:40" | rn6 == "00:41" | rn6 == "00:42" | rn6 == "00:43" | rn6 == "00:44" | rn6 == "00:45" | rn6 == "00:46" | rn6 == "00:47" | rn6 == "00:48" | rn6 == "00:49" | rn6 == "00:50" | rn6 == "00:51" | rn6 == "00:52" | rn6 == "00:53" | rn6 == "00:54" | rn6 == "00:55" | rn6 == "00:56" | rn6 == "00:57" | rn6 == "00:58" | rn6 == "00:59" | rn6 == "01:00" | rn6 == "01:01" | rn6 == "01:02" | rn6 == "01:03" | rn6 == "01:04" | rn6 == "01:05" | rn6 == "01:06" | rn6 == "01:07" | rn6 == "01:08" | rn6 == "01:09" | rn6 == "01:10" | rn6 == "01:11" | rn6 == "01:12" | rn6 == "01:13" | rn6 == "01:14" | rn6 == "01:15" | rn6 == "01:16" | rn6 == "01:17" | rn6 == "01:18" | rn6 == "01:19" | rn6 == "01:20" | rn6 == "01:21" | rn6 == "01:22" | rn6 == "01:23" | rn6 == "01:24" | rn6 == "01:25" | rn6 == "01:26" | rn6 == "01:27" | rn6 == "01:28" | rn6 == "01:29" | rn6 == "01:30" | rn6 == "01:31" | rn6 == "01:32" | rn6 == "01:33" | rn6 == "01:34" | rn6 == "01:35" | rn6 == "01:36" | rn6 == "01:37" | rn6 == "01:38" | rn6 == "01:39" | rn6 == "01:40" | rn6 == "01:41" | rn6 == "01:42" | rn6 == "01:43" | rn6 == "01:44" | rn6 == "01:45" | rn6 == "01:46" | rn6 == "01:47" | rn6 == "01:48" | rn6 == "01:49" | rn6 == "01:50" | rn6 == "01:51" | rn6 == "01:52" | rn6 == "01:53" | rn6 == "01:54" | rn6 == "01:55" | rn6 == "01:56" | rn6 == "01:57" | rn6 == "01:58" | rn6 == "01:59" | rn6 == "02:00" | rn6 == "02:01" | rn6 == "02:02" | rn6 == "02:03" | rn6 == "02:04" | rn6 == "02:05" | rn6 == "02:06" | rn6 == "02:07" | rn6 == "02:08" | rn6 == "02:09" | rn6 == "02:10" | rn6 == "02:11" | rn6 == "02:12" | rn6 == "02:13" | rn6 == "02:14" | rn6 == "02:15" | rn6 == "02:16" | rn6 == "02:17" | rn6 == "02:18" | rn6 == "02:19" | rn6 == "02:20" | rn6 == "02:21" | rn6 == "02:22" | rn6 == "02:23" | rn6 == "02:24" | rn6 == "02:25" | rn6 == "02:26" | rn6 == "02:27" | rn6 == "02:28" | rn6 == "02:29" | rn6 == "02:30" | rn6 == "02:31" | rn6 == "02:32" | rn6 == "02:33" | rn6 == "02:34" | rn6 == "02:35" | rn6 == "02:36" | rn6 == "02:37" | rn6 == "02:38" | rn6 == "02:39" | rn6 == "02:40" | rn6 == "02:41" | rn6 == "02:42" | rn6 == "02:43" | rn6 == "02:44" | rn6 == "02:45" | rn6 == "02:46" | rn6 == "02:47" | rn6 == "02:48" | rn6 == "02:49" | rn6 == "02:50" | rn6 == "02:51" | rn6 == "02:52" | rn6 == "02:53" | rn6 == "02:54" | rn6 == "02:55" | rn6 == "02:56" | rn6 == "02:57" | rn6 == "02:58" | rn6 == "02:59" | rn6 == "03:00" )
     {
       var dn = moment.duration(rnormal6);
       var fn = Math.floor(dn.asHours()) + ':' + moment.utc(rnormal6).format("mm");
       document.getElementById("normal").innerHTML = 'F: ' + fn;
       document.getElementById("anterior").innerHTML =  "";
     }
      else {
      document.getElementById("normal").innerHTML =  "F: 0:00";
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

      if (rv6 == "00:00" | rv6 == "00:01" | rv6 == "00:02" | rv6 == "00:03" | rv6 == "00:04" | rv6 == "00:05" | rv6 == "00:06" | rv6 == "00:07" | rv6 == "00:08" | rv6 == "00:09" | rv6 == "00:10" | rv6 == "00:11" | rv6 == "00:12" | rv6 == "00:13" | rv6 == "00:14" | rv6 == "00:15" | rv6 == "00:16" | rv6 == "00:17" | rv6 == "00:18" | rv6 == "00:19" | rv6 == "00:20" | rv6 == "00:21" | rv6 == "00:22" | rv6 == "00:23" | rv6 == "00:24" | rv6 == "00:25" | rv6 == "00:26" | rv6 == "00:27" | rv6 == "00:28" | rv6 == "00:29" | rv6 == "00:30" | rv6 == "00:31" | rv6 == "00:32" | rv6 == "00:33" | rv6 == "00:34" | rv6 == "00:35" | rv6 == "00:36" | rv6 == "00:37" | rv6 == "00:38" | rv6 == "00:39" | rv6 == "00:40" | rv6 == "00:41" | rv6 == "00:42" | rv6 == "00:43" | rv6 == "00:44" | rv6 == "00:45" | rv6 == "00:46" | rv6 == "00:47" | rv6 == "00:48" | rv6 == "00:49" | rv6 == "00:50" | rv6 == "00:51" | rv6 == "00:52" | rv6 == "00:53" | rv6 == "00:54" | rv6 == "00:55" | rv6 == "00:56" | rv6 == "00:57" | rv6 == "00:58" | rv6 == "00:59" | rv6 == "01:00")
      {
        var dv = moment.duration(rvip6);
        var fv = Math.floor(dv.asHours()) + ':' + moment.utc(rvip6).format("mm");
        document.getElementById("vip").innerHTML = 'F: ' + fv;
        document.getElementById("anterior").innerHTML =  "";
      }
      else {
      document.getElementById("vip").innerHTML =  "F: 0:00";
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
