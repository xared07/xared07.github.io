/*function include(postInclude){
    var i = 0;
    document.querySelectorAll("include").forEach(include=>{
        request("GET",include.getAttribute("src"),html=>{
            include.innerHTML = html;
            i++;
            if (i >= document.querySelectorAll("include").length)
                postInclude();
        },true);
    })
}


function request(method,page,callback,async = true){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(this.responseText);
      }
    };
    xhttp.open(method, page, async);
    xhttp.send();
}

document.addEventListener("readystatechange",()=>{
    document.body.style.visibility = "hidden";
    include(()=>{
        console.log(document.querySelector("a[href='"+document.location.pathname+"']"));
        document.querySelector("a[href='"+document.location.pathname+"']").parentElement.classList.add("active");
        document.body.style.visibility = "visible";
    });
})*/