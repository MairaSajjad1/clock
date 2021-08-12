window.addEventListener("DOMContentLoaded", showTime());

function showTime() {
    let date = new Date();
    // date.setTime(50000);
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;

    }
    if (s < 10) {
        s = "0" + s;
    }
    h = h < 10 ? (h = "" + h) : h;
    m = m < 10 ? (m = "" + m) : m;
    s = s < 10 ? (s = "" + s) : s;
    const time = h + ":" + m + ":" + s + "" + "|" + "" + session;
    //console.log(time);
    document.getElementById("DisplayClock").innerHTML = time;
    setTimeout(showTime, 1000);

    //background

    // let bg;
    // const userName = "Maira";
    // const user = document.getElementById("User");
    // //console.log("here"); 
    // if (h < 8 && session === "AM") {
    //     bg = 'url(https://unsplash.com/photos/9kNq7xW4FSg)';
    //     user.innerHTML = 'Good Morning $(userName)';
    // }
    // else if (h < 11 && session === "AM") {
    //     bg = 'url(https://unsplash.com/photos/RlQ29vvbU2Q)';
    //     user.innerHTML = 'Good Day ${userName}';
    // }
    // else if (h < 8 && session === "PM") {
    //     bg = 'url(https://unsplash.com/photos/HupOZi-fKnY)';
    //     user.innerHTML = 'Good Afternoon ${userName}';
    // }
    // else if (h < 8 && session === "PM") {
    //     bg = 'url(https://unsplash.com/photos/7Ym9rpYtSdA)';
    //     user.innerHTML = 'Good Night ${userName}';
    // }
}