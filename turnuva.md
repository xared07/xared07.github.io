---
title: Turnuva
page: turnuva
layout: default_style
---

<h3 id="no-tournament" class="header text-center" style="margin-top:64px;margin-bottom:120px;">Şu Anda Kayda Açık Olan Etkinlikler.</h3>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf-XZe-Wjj8DOs-if6MFANUP5wJOZV0Uf5olPz_MPKLhUef6Q/viewform" width="100%" height="4000" frameborder="0" marginheight="0" marginwidth="0" ></iframe>
<h3 id="title" class="header text-center" style="margin-top:64px;"></h3>
<div class="text-center">
	<iframe id="registration" src="" width="640" height="480" frameborder="0" marginheight="0" marginwidth="0">Yükleniyor…</iframe>
</div>

<h4 class="header text-center" style="margin-top:32px;margin-bottom:12px;">Geçmiş Turnuva Sonuçları</h4>
<br/>

<div id="tournaments" class="container text-center">

</div>


<!--div align="center"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSemos8uJ5Qpvr7ATct5-q-CGcncUUzigJCaKrMgi8KOJmJQqw/viewform?embedded=true" width="640" height="511" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div-->

<script>
	$("#no-tournament").hide()
	$("#title").hide()
	$.get("https://sheets.googleapis.com/v4/spreadsheets/1X-PtBa0CGJ0D2_f9XkG09Gwf6fXYBR31FtEXsAupyVM/values/Sayfa1!A1:C100?majorDimension=ROWS&key=AIzaSyAhr7_kMNIob-SmsyIv4b5AsdoYTRRPr2c",(data)=>{
		var history = []
		console.log(data);
		console.log(data.values[0])
		if (data.values[0][2] == "" || data.values[0][2] == undefined){
			$("#no-tournament").show()
		}else{
			$("#title").show()
			$("#title").html(data.values[0][1])
			$("#registration").attr("src",data.values[0][2]);
		}
		data.values.forEach((e,i)=>{
			if (i == 0) return;
			var tournament = {name:e[0],url:e[1]}
			history.push(tournament)
			document.getElementById("tournaments").innerHTML+=`
			<button class="btn btn-primary plus-minus collapsed" type="button" data-toggle="collapse" data-target="#tournament-collapse-${i}" aria-expanded="false" aria-controls="collapseExample3" style="display:block;margin:auto;margin-bottom:50px;">
				${tournament.name}
			</button>
			<div class="collapse" id="tournament-collapse-${i}" >
				<iframe src="${tournament.url}" width="100%" height="600" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
			</div>
			`;
		})

		console.log(history)
	});
</script> 