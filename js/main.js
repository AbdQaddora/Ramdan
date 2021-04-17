var progress = document.querySelector("#test");
var d = new Date();
Ramdan = new Array(
    new Array(46, 12),
    new Array(43, 12),
    new Array(42, 13),
    new Array(40, 13),

    new Array(39, 14),
    new Array(38, 15),
    new Array(36, 15),
    new Array(35, 16),
    new Array(34, 17),
    new Array(33, 18),
    new Array(31, 18),

    new Array(30, 19),
    new Array(29, 20),
    new Array(28, 21),
    new Array(26, 21),
    new Array(25, 22),
    new Array(24, 23),
    new Array(23, 24),

    new Array(21, 24),
    new Array(20, 25),
    new Array(19, 26),
    new Array(18, 26),
    new Array(17, 27),
    new Array(15, 28),
    new Array(14, 28),

    new Array(4, 13, 29),
    new Array(4, 12, 30),
    new Array(4, 11, 30),
    new Array(4, 10, 31),
    new Array(4, 9, 32),
    new Array(4, 8, 32)
);

function progressBar() {
    var AfteerCallcvalue = calcValue();
    progress.style = "width: " + AfteerCallcvalue + "%";
    progress.setAttribute("aria-valuenow", AfteerCallcvalue);
}

progressBar();
var x = setInterval(progressBar, 1000);
var firstTime = true;
function dayInRAMDAN(dat, Month) {
    if (Month == 3) {
        return (dat - 12);
    } else if (Month == 4) {
        return (dat + 18);
    }

}

function calcValue() {
    d = new Date();
    var dat = d.getDate();
    var Month = d.getMonth();


    var Mm = (Ramdan[dayInRAMDAN(dat, Month)])[1];
    var fm = (Ramdan[dayInRAMDAN(dat, Month)])[0];

    var Currenthour = d.getHours();
    var CurrentMinutes = d.getMinutes();

    var TotalDayTime = 840 + fm + Mm;
    var RimaindTime = calcRimaindTime(Mm);
    var value = 100 - ((RimaindTime / TotalDayTime) * 100);
    var rH = Math.floor(RimaindTime / 60);
    var rm = Math.ceil(calcRimaindTime(Mm) - (rH * 60));
    if (calcRimaindTime(Mm) > 0) {
        var str;
        if (rH > 1) {
            str = " ساعات ";
        } else {
            str = " ساعة ";
        }

        var str2;
        if (rm > 1) {
            str2 = " دقائق ";
        } else {
            str2 = " دقيقة ";
        }
        progress.innerHTML = " متبقي للإفطار " + rm + str2 + rH + str;
        return value;
    } else {
        adanAudioRun(Mm , d);
        progress.innerHTML = " تقبل الله صيامكم ";
        return 100;
    }
}

function calcRimaindTime(Mm) {
    var currentTime = d.getTime() / 60000;
    //new Date(year, month, day, hours, minutes)
    var EndTime = new Date(2021, d.getMonth(), d.getDate(), 19, Mm);
    var EndTimeMinut = EndTime.getTime() / 60000;
    return EndTimeMinut - currentTime;
}

function adanAudioRun(Mm , d) {

    if (d.getHours() == 19) {
        if (d.getMinutes() >= Mm && d.getMinutes() < (Mm + 2)) {
            document.querySelector("#adan").play();
        }
    }
}




