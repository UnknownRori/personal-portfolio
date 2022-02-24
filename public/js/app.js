$(()=> {
    BackgroundInterval();
    $('#introduction-hidden').removeClass('hidden');
    PrintLetterbyLetter("Hi! I am UnknownRori", 100, "introduction-pen-name-text");
    PrintLetterbyLetter("A Fullstack Web Developer", 100, "introduction-profession-text");
    PrintLetterbyLetter("UnknownRori", 100, "Author");
    $('#introduction-pen-name-text').removeClass('hidden-left');
    $('#introduction-profession-text').removeClass('hidden-right');
})

let BackgroundInterval = () => {
    let interval = 2;
    let beforeinterval = 1;
    setInterval(()=>{
        $('[data-background=' + beforeinterval.toString() + ']').css('opacity', 0);
        $('[data-background=' + interval.toString() + ']').css('opacity', 1);

        beforeinterval = interval;
        if (interval == 5) {
            interval = 0;
        }
        interval++;
    }, 8000)
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

const do_nav = (elem) => {
    const nav = ['profile', 'projects', 'about'];
    var id = $(elem).attr("data-target");
    nav.map((content) => {
        $(`#${content}`).addClass('hidden');
    })
    $(`#${id}`).removeClass('hidden');
}