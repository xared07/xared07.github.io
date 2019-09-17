---
title: Lonca
layout: default_style
---
<div class="container">
    <div class="row" style="margin-top:64px">
        <div class="col-md-3">
            <h1 data-faction="dramoon" class="open-users header text-center">DRAMOON</h1>
            <h2 class="text-center header" id="dramoon-points">0</h2>
        </div>
        <div class="col-md-3">
            <h1 data-faction="ocrius" class="open-users header text-center">OCRIUS</h1>
            <h2 class="text-center header" id="ocrius-points">0</h2>
        </div>        
        <div class="col-md-3">
            <h1 data-faction="gincarta" class="open-users header text-center">GINCARTA</h1>
            <h2 class="text-center header" id="gincarta-points">0</h2>
        </div>        
        <div class="col-md-3">
            <h1 data-faction="kraaga" class="open-users header text-center">KRAAGA</h1>
            <h2 class="text-center header" id="kraaga-points">0</h2>
        </div>
    </div>
    <div id="user-popup" class="panel panel-default">
      <div class="panel-heading">Some Some</div>
      <div class="panel-body">
        <table id="faction-users-table" class="table-hover table" style="margin:0">
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
    <table class="table" id="topUsers" style="margin-top:98px;">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">İsim</th>
            <th scope="col">Lonca</th>
            <th scope="col">Puan</th>
          </tr>
        </thead>
        <tbody>
          <!--tr>
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
          </tr-->
        </tbody>
      </table>
</div>

<script>  
    $.get("https://sheets.googleapis.com/v4/spreadsheets/11ECOzxsP__qwVkcKaJfvEcFRpZmwae0RwQ_yRn1bYuc/values/Lonca Savaşları!A2:H100?majorDimension=COLUMNS&key=AIzaSyAhr7_kMNIob-SmsyIv4b5AsdoYTRRPr2c",(data)=>{
        var values = [0,0,0,0];
        var factions = {};
        var allUsers = []
        var factionNames = ["dramoon","ocrius","gincarta","kraaga"]
        if (data.values.length == 7) data.values.push([])
        console.log(data.values)

        for (var loncaIndex = 0;loncaIndex<Math.ceil(data.values.length/2);loncaIndex++){
          loncaIndex = parseInt(loncaIndex)
          var currentFaction = factions[factionNames[loncaIndex]] = {users: []}
          console.log(loncaIndex*2)
          for (var i = 0;i<data.values[loncaIndex*2].length;i++){
            var points = data.values[loncaIndex*2+1][i]==undefined? 0 : parseInt(data.values[loncaIndex*2+1][i])
            currentFaction.users.push({name:data.values[loncaIndex*2][i],points:points})
            var f = factionNames[loncaIndex][0].toUpperCase() + factionNames[loncaIndex].slice(1); 
            allUsers.push({name:data.values[loncaIndex*2][i],points:points,faction:f})
          }
        }
        console.log(factions)
        console.log(allUsers)
        /*
        data.values.forEach((e,i)=>{
            if (i%2 == 0){
              users.push({name:"e",points:0})
            }else{
                  e.forEach((p) => {
                    if (p!=""){
                      p = parseInt(p)
                      if (p!=NaN){
                        values[parseInt(i/2)] += p;
                      }
                    }
                })
            }
        })*/

        function calculateTotalPoints(faction){
          var ret = 0
          factions[faction].users.forEach(u=>{
            ret+=u.points
          })
          return ret;
        }
        function getTop(top){
          return allUsers.sort((a,b) => (a.points > b.points) ? 1 : (b.points> a.points) ? -1 : 0).slice(allUsers.length - top).reverse()
        }

        getTop(5).forEach((e,i)=>{
          document.querySelector("#topUsers tbody").innerHTML+=`
          <tr>
            <th>
              ${i+1}
            </th>
            <th>
              ${e.name}
            </th>
            <th>
              ${e.faction}
            </th>
            <th>
              ${e.points}
            </th>
          </tr>
          `
        })


        function openFactionUsersPopup(faction,pos){
          var popup = document.querySelector("#user-popup")
          popup.style.left=pos.x+"px";
          popup.style.top = pos.y+"px";
          popup.classList.add("open")


          /*clear content*/
          popup.querySelector("tbody").innerHTML = "";
          /*load content*/
          var f = faction.charAt(0).toUpperCase() + faction.slice(1); 
          popup.querySelector(".panel-heading").innerHTML = f;
          sortedUsers = factions[faction].users.sort((a,b) => (a.points > b.points) ? 1 : (b.points> a.points) ? -1 : 0).reverse()
          sortedUsers.forEach((e,i)=>{
            popup.querySelector("tbody").innerHTML+=`
              <tr>
                <th>
                  ${e.name}
                </th>
                <th>
                  ${e.points}
                </th>
              </tr>
            `
          })
        }
        // detecting click outside
        document.addEventListener("click", function(evt) {
          if (!document.getElementById("user-popup").contains(evt.target) && !evt.target.classList.contains("open-users"))
            document.getElementById("user-popup").classList.remove("open");
          
        });

        document.querySelectorAll(".open-users").forEach(e=>{
          e.addEventListener("click",(ev)=>{
            openFactionUsersPopup(e.getAttribute("data-faction"),{x:ev.clientX,y:ev.clientY})
          })
        })

        document.getElementById("dramoon-points").innerHTML = calculateTotalPoints("dramoon");
        document.getElementById("ocrius-points").innerHTML = calculateTotalPoints("ocrius");
        document.getElementById("gincarta-points").innerHTML = calculateTotalPoints("gincarta");
        document.getElementById("kraaga-points").innerHTML = calculateTotalPoints("kraaga");

    })
</script>

<style>
  #faction-users-table th{
    border:none
  }

@media (max-width: 992px){
    #user-popup{
      position:absolute;
      left:0!important;
      width:calc(100% - 32px)!important;
      margin:16px;
    }
  }

  #user-popup{
    position:absolute;
    width:256px;
    box-shadow:0 4px 8px rgba(0,0,0,0.2);
    display:none

  }
  #user-popup .panel-body{
    max-height:256px;
    height:auto;
    overflow-y:scroll;
  }
  #user-popup.open{
    display:inline-block;
  }

  .open-users{
    cursor:pointer;
  }
</style>