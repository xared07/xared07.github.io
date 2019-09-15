---
title: Loncalar
layout: default_style
---
<div class="container">

    <div class="row">
        <div class="col-md-3">
            <h1 class="header text-center">DRAMOON</h1>
            <h2 class="text-center header" id="dramoon-points"></h2>
        </div>
        <div class="col-md-3">
            <h1 class="header text-center">OCRIUS</h1>
            <h2 class="text-center header" id="ocrius-points"></h2>
        </div>        
        <div class="col-md-3">
            <h1 class="header text-center">GINCARTA</h1>
            <h2 class="text-center header" id="gincarta-points"></h2>
        </div>        
        <div class="col-md-3">
            <h1 class="header text-center">KRAAGA</h1>
            <h2 class="text-center header" id="kraaga-points"></h2>
        </div>
    </div>

    <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
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