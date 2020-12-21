function calc() {
    var lovedata = Math.random() * 100;
    lovedata = Math.floor(lovedata);
    document.getElementById('data').innerText = lovedata+"%";
    // document.getElementById('data').innerText;
    console.log("Reached here");
}