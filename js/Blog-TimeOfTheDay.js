window.onload = function() {
    let curDate = new Date();

    if (curDate.getHours() >= 19 || curDate.getHours() < 2) {
        /* Evening Time */
        document.getElementsByTagName("Body")[0].classList.add('EveningGradient');
        //document.getElementById('overview').style.backgroundImage = 'url(/images/Wallpaper/Wallpaper1.jpg)';
        console.log('Evening Theme');
    } else if (curDate.getHours() < 12) {
        /* Morning Time */
        document.getElementsByTagName("Body")[0].classList.add('MorningGradient');
        //document.getElementById('overview').style.backgroundImage = 'url(/images/Wallpaper/MorningWallpaper2.jpg)';
        console.log('Morning Theme');
    } else {
        /* Day Time */
        document.getElementsByTagName("Body")[0].classList.add('DayGradient');
        //document.getElementById('overview').style.backgroundImage = 'url(/images/Wallpaper/CafeWallpaper2.jpg)';
        console.log('Day Theme');
    }
};