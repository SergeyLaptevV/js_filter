function Test(){
    console.log("in main.js")
}
Test();

function Start() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myFunction(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET", "json/players.json", true);
    xmlhttp.send();

    function myFunction(response) {
        var arr = JSON.parse(response);
        var i;
        var out = "<table id='sf'>";
        for (i = 0; i < arr.length; i++) {
            out += "<tr><td>" +
                arr[i].id +
                "</td><td>" +
                arr[i].name +
                "</td><td>" +
                arr[i].position +
                "</td><td>" +
                arr[i].jerseyNumber +
                "</td><td>" +
                arr[i].dateOfBirth +
                "</td><td>" +
                arr[i].nationality +
                "</td><td>" +
                arr[i].contractUntil +
                "</td><td>" +
                arr[i].marketValue +
                "</td></tr>";
        }
        out += "</table>";
        document.getElementById("id01").innerHTML = out;
    }
}
Start();

function filter (phrase, _id){
    var words = phrase.value.toLowerCase().split(" ");
    var table = document.getElementById(_id);
    var ele;
    for (var r = 0; r < table.rows.length; r++){
        ele = table.rows[r].innerHTML.replace(/<[^>]+>/g,"");
        var displayStyle = 'none';
        for (var i = 0; i < words.length; i++) {
            if (ele.toLowerCase().indexOf(words[i])>=0)
                displayStyle = '';
            else {
                displayStyle = 'none';
                break;
            }
        }
        table.rows[r].style.display = displayStyle;
    }
}