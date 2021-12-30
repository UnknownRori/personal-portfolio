$(()=> {
    BackgroundInterval();
    HiddenWork();
    $('#introduction-hidden').removeClass('hidden');
    PrintLetterbyLetter("Hi! I am UnknownRori", 100, "introduction-pen-name-text");
    PrintLetterbyLetter("A Web Developer", 100, "introduction-profession-text");
    PrintLetterbyLetter("UnknownRori", 100, "Author");
})

$(window).scroll(() => {
    hScroll = $(this).scrollTop();
    if(hScroll > 140){
        $('#btn-top').removeClass('hidden');
    }else{
        $('#btn-top').addClass('hidden');
    }
});

let BackgroundInterval = () => {
    let interval = 2;
    let beforeinterval = 1;
    const backroundInterval = setInterval(()=>{
        console.log(beforeinterval);
        $('[data-background=' + beforeinterval.toString() + ']').css('opacity', 0);
        $('[data-background=' + interval.toString() + ']').css('opacity', 1);

        beforeinterval = interval;
        if (interval == 5) {
            interval = 0;
        }
        interval++;
    }, 5000)
};

function PrintLetterbyLetter(string, time, id) {
    let i = 0;
    var interval = setInterval(function() {
        document.getElementById(id).innerHTML += string.charAt(i);
        i++;
        if (i > string.length) {
            clearInterval(interval);
        }
    }, time);
}

let HiddenWork = () => {
    $(window).scroll(function () {

        hScroll = $(this).scrollTop();

        if (hScroll > 140) {
            let state = 1;
            const show = setInterval(() => {
                try {
                    $('[data-hidden=' + state.toString() + ']').removeClass('hidden');
                } catch {
                    console.error("Cannot Display the hidden object");
                    clearInterval(show);
                }
                state++;

                if (state > 12) {
                    clearInterval(show);
                }
            }, 100);
        } else {
            let state = 1;
            const hide = setInterval(() => {
                try {
                    $('[data-hidden=' + state.toString() + ']').addClass('hidden');
                } catch {
                    console.error("Cannot Display the hidden object");
                    clearInterval(hide);
                }
                state++;

                if (state > 12) {
                    clearInterval(hide);
                }
            }, 100);
        }

    })
}