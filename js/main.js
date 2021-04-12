var progress = document.querySelector("#test");
var d = new Date();
Ramdan = new Array(
    new Array(4, 46, 7, 12),
    new Array(4, 43, 7, 12),
    new Array(4, 42, 7, 13),
    new Array(4, 40, 7, 13),

    new Array(4, 39, 7, 14),
    new Array(4, 38, 7, 15),
    new Array(4, 36, 7, 15),
    new Array(4, 35, 7, 16),
    new Array(4, 34, 7, 17),
    new Array(4, 33, 7, 18),
    new Array(4, 31, 7, 18),

    new Array(4, 30, 7, 19),
    new Array(4, 29, 7, 20),
    new Array(4, 28, 7, 21),
    new Array(4, 26, 7, 21),
    new Array(4, 25, 7, 22),
    new Array(4, 24, 7, 23),
    new Array(4, 23, 7, 24),

    new Array(4, 21, 7, 24),
    new Array(4, 20, 7, 25),
    new Array(4, 19, 7, 26),
    new Array(4, 18, 7, 26),
    new Array(4, 17, 7, 27),
    new Array(4, 15, 7, 28),
    new Array(4, 14, 7, 28),

    new Array(4, 13, 7, 29),
    new Array(4, 12, 7, 30),
    new Array(4, 11, 7, 30),
    new Array(4, 10, 7, 31),
    new Array(4, 9, 7, 32),
    new Array(4, 8, 7, 32)
);

function progressBar() {
    var AfteerCallcvalue = calcValue();
    progress.style = "width: " + AfteerCallcvalue + "%";
    progress.setAttribute("aria-valuenow", AfteerCallcvalue);
}

progressBar();
var x = setInterval(progressBar, 1000);

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


    var Mm = (Ramdan[dayInRAMDAN(dat, Month)])[3];
    var fm = (Ramdan[dayInRAMDAN(dat, Month)])[1];

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



