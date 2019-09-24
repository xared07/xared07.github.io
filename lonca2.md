---
title: Lonca
layout: default_style
---
<div class="container">
    <div class="row" style="margin-top:64px">
        <div class="col-md-3">
            <h1 data-faction="dramoon" class="open-users header text-center">DRAMOON</h1>
            <div data-faction="dramoon" class="sandglass">
                <div class="band"></div>
                <div class="glass">
                  <div class="toppoints">
                      <div style="position:relative;">
                          <div class="drop d1"></div>
                          <div class="drop d2"></div>
                          <div class="drop d3"></div>
                      </div>
                  </div>
                </div>
                <div class="long-glass">
                  <div class="points">
                  </div>
                </div>
                <div class="band bottom"></div>
                <div class="podium">
                    <h2 class="text-center header" id="dramoon-points">0</h2>
                </div>
              </div>
        </div>
        <div class="col-md-3">
            <h1 data-faction="ocrius" class="open-users header text-center">OCRIUS</h1>
            <div data-faction="ocrius" class="sandglass">
                <div class="band"></div>
                <div class="glass">
                  <div class="toppoints">
                      <div style="position:relative;">
                          <div class="drop d1"></div>
                          <div class="drop d2"></div>
                          <div class="drop d3"></div>
                      </div>
                  </div>
                </div>
                <div class="long-glass">
                  <div class="points"></div>
                </div>
                <div class="band bottom"></div>
                <div class="podium">
                    <h2 class="text-center header" id="ocrius-points">0</h2>
                </div>
              </div>
        </div>        
        <div class="col-md-3">
            <h1 data-faction="gincarta" class="open-users header text-center">GINCARTA</h1>
            <div data-faction="gincarta" class="sandglass">
                <div class="band"></div>
                <div class="glass">
                  <div class="toppoints">
                    <div style="position:relative;">
                      <div class="drop d1"></div>
                      <div class="drop d2"></div>
                      <div class="drop d3"></div>
                    </div>
                  </div>
                </div>
                <div class="long-glass">
                  <div class="points"></div>
                </div>
                <div class="band bottom"></div>
                <div class="podium">
                    <h2 class="text-center header" id="gincarta-points">0</h2>
                </div>
              </div>
        </div>        
        <div class="col-md-3">
            <h1 data-faction="kraaga" class="open-users header text-center">KRAAGA</h1>
            <div data-faction="kraaga" class="sandglass">
                <div class="band"></div>
                <div class="glass">
                  <div class="toppoints">
                    <div style="position:relative;">
                      <div class="drop d1"></div>
                      <div class="drop d2"></div>
                      <div class="drop d3"></div>
                    </div>
                  </div>
                </div>
                <div class="long-glass">
                  <div class="points"></div>
                </div>
                <div class="band bottom"></div>
                <div class="podium">
                    <h2 class="text-center header" id="kraaga-points">0</h2>
                </div>
              </div>
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
    $.get("https://sheets.googleapis.com/v4/spreadsheets/1ei6ZUQGKvD0FzXykqvhxUH1HQ4kGjGlbRJyv6BFjzzI/values/Lonca Savaşları!A2:H100?majorDimension=COLUMNS&key=AIzaSyAhr7_kMNIob-SmsyIv4b5AsdoYTRRPr2c",(data)=>{
        var values = [0,0,0,0];
        var factions = {};
        var allUsers = []
        var factionNames = ["dramoon","ocrius","gincarta","kraaga"]
        if (data.values.length == 7) data.values.push([])

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
        /// 20 ---- 130
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


        function getAllTotalPoints(){
          var ret = 0;
          factionNames.forEach(f=>{
            ret+=calculateTotalPoints(f)
          })
          return ret;
        }

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

        var t = getAllTotalPoints()/2
        document.querySelector('.sandglass[data-faction="dramoon"] .points').style.height = (20 + 110 * (calculateTotalPoints("dramoon")/t)) + "px";
        document.querySelector('.sandglass[data-faction="ocrius"] .points').style.height = (20 + 110 * (calculateTotalPoints("ocrius")/t)) + "px";
        document.querySelector('.sandglass[data-faction="gincarta"] .points').style.height = (20 + 110 * (calculateTotalPoints("gincarta")/t)) + "px";
        document.querySelector('.sandglass[data-faction="kraaga"] .points').style.height = (20 + 110 * (calculateTotalPoints("kraaga")/t)) + "px";


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

  .sandglass{
    text-align: center;
  }
  .sandglass *{
    margin:auto;
  }
  .sandglass .band{
    width: 97px;
    height: 10px;
    background: linear-gradient(to right, #CCA951, #FFD166, #CCA951);
    border-radius: 20%;
    z-index: 1;
  }

  .sandglass .band.bottom{
    width:100px;
  }
  .sandglass .glass{
    width: 95px;
    height: 105px;
    background: linear-gradient(to right, #f7f7f7, #A2B9C4, #A5C4D4, #A5C4D4, #A2B9C4, #f7f7f7);
    opacity: 0.5;
    border: 1px solid #A2B9C4;
    border-radius: 10% 10% 40% 40%;
    z-index: 1;
    position:relative;
  }

  .sandglass .long-glass{
    width:100px;
    height:130px;
    background: linear-gradient(to right, #f7f7f7, #A2B9C4, #A5C4D4, #A5C4D4, #A2B9C4, #f7f7f7);
    opacity: 0.5;
    border: 1px solid #A2B9C4;
    border-radius: 40% 40% 10% 10%;
    z-index: 1;
  }

  .sandglass .podium{
    color:white;
    width: 97px;
    height: 50px;
    opacity: .9;
    border-radius: 10% 10% 0 0;
    z-index: 1;
    background: repeating-linear-gradient(to right, #A50104, #FCBA04);

    display: flex;
    align-items: stretch;
  }

  .sandglass .toppoints{
    position: absolute;
    width: 55px;
    height: 20px;
    background: #A50104;
    border-radius: 40%;
    position:absolute;
    bottom:0px;
    left: calc(50% - 27.5px);
  }
  .sandglass .points{
    width: 100px;
    height: 20px;
    background: #A50104;
    border-radius: 40% 40% 10% 10%;
    position:absolute;
    bottom:60px;
    transition-duration: 1s;
    transition-delay: 0.1s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1)
  }

  .sandglass[data-faction="dramoon"] .points,
  .sandglass[data-faction="dramoon"] .toppoints{
    background:linear-gradient(to bottom right,#0F0,darkgreen);
  }
  .sandglass[data-faction="ocrius"] .points,
  .sandglass[data-faction="ocrius"] .toppoints{    
    background:linear-gradient(to bottom right,yellow,orange);
  }    
  .sandglass[data-faction="gincarta"] .points,
  .sandglass[data-faction="gincarta"] .toppoints{
    background:linear-gradient(to bottom right,#0FF,#103a04);
  }    
  .sandglass[data-faction="kraaga"] .points,
  .sandglass[data-faction="kraaga"] .toppoints{
    background:linear-gradient(to bottom right,purple,blue);
  }

  .sandglass .drop{
    position:absolute;
    top:0px;
    left:16px;
    width:10px;
    height:10px;
    color:inherit;
  }

  .drop.d1{
    left:19px;
    animation: pdrop 4s infinite linear 3s;
  }
  .drop.d2{
    left:15px;
    animation: pdrop 4s infinite linear 2s;
  }  
  .drop.d3{
    animation: pdrop 4s infinite linear 4s;
  }

  /*randomizing*/
  .sandglass[data-faction="dramoon"] .d3{
    animation-delay: 5s; 
  }
  .sandglass[data-faction="gincarta"] .d3{
    animation-delay: 8s; 
  }
  .sandglass[data-faction="dramoon"] .d2{
    animation-delay: 3s; 
  }
  .sandglass[data-faction="kraaga"] .d1{
    animation-delay: 1s; 
  }
  .sandglass[data-faction="dramoon"] .d1,
  .sandglass[data-faction="dramoon"] .d2,
  .sandglass[data-faction="dramoon"] .d3{
    background-color:#0F0;
  }

  .sandglass[data-faction="ocrius"] .d1,
  .sandglass[data-faction="ocrius"] .d2,
  .sandglass[data-faction="ocrius"] .d3{
    background-color:#FF0;
  }  
  .sandglass[data-faction="gincarta"] .d1,
  .sandglass[data-faction="gincarta"] .d2,
  .sandglass[data-faction="gincarta"] .d3
  {
    background-color:#0FF;
  }  
  .sandglass[data-faction="kraaga"] .d1,
  .sandglass[data-faction="kraaga"] .d2,
  .sandglass[data-faction="kraaga"] .d3{
    background-color:#00F;
  }
  @keyframes pdrop{
    0% {
      top: 0px;
    }
    50% {
      top: 60px;
    }
    90%{
      opacity:1;
    }
    100% {
      opacity: 0;
      top: 120px;
    }
  }
</style>