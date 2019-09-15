---
title: Loncalar
layout: default_style
---
<div class="container">
    <div class="row" style="margin-top:64px">
        <div class="col-md-3">
            <h1 class="header text-center">DRAMOON</h1>
            <h2 class="text-center header" id="dramoon-points">0</h2>
        </div>
        <div class="col-md-3">
            <h1 class="header text-center">OCRIUS</h1>
            <h2 class="text-center header" id="ocrius-points">0</h2>
        </div>        
        <div class="col-md-3">
            <h1 class="header text-center">GINCARTA</h1>
            <h2 class="text-center header" id="gincarta-points">0</h2>
        </div>        
        <div class="col-md-3">
            <h1 class="header text-center">KRAAGA</h1>
            <h2 class="text-center header" id="kraaga-points">0</h2>
        </div>
    </div>
    <table class="table" style="margin-top:98px;">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">İsim</th>
            <th scope="col">Lonca</th>
            <th scope="col">Puan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="col">1</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
          <tr>
            <th scope="col">2</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
          <tr>
            <th scope="col">3</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </tbody>
      </table>
</div>

<script>  
    $.get("https://sheets.googleapis.com/v4/spreadsheets/1sZJMLMTw_yfeODFtFs7U7A2R7EuTWyWZGMmOr1u-7aA/values/Sayfa1!B3:H100?majorDimension=COLUMNS&key=AIzaSyAhr7_kMNIob-SmsyIv4b5AsdoYTRRPr2c",(data)=>{
        var values = [0,0,0,0];
        data.values.forEach((e,i)=>{
            if (i%2 == 0){

            }else{
                e.forEach((p) => {
                    p = parseInt(p)
                    values[parseInt(i/2)] += p;
                })
            }
        })
        document.getElementById("dramoon-points").innerHTML = values[0];
        document.getElementById("ocrius-points").innerHTML = values[1];
        document.getElementById("gincarta-points").innerHTML = values[2];
        document.getElementById("kraaga-points").innerHTML = values[3];

    })
</script>