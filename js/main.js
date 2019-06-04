
const image = document.createElement('IMG');
image.id = "page";
image.src = pageSrc + current + ext;

// Insert text
document.body.appendChild(image);


const showPage = () => {
    setTimeout(
        () => {
            $("#page").fadeIn("slow");
            $("#loader").fadeOut("slow");
        },
        1000
    )
}

const hidePage = () => {
    $("#page").fadeOut("slow");
    $("#loader").fadeIn("slow");
}

const nextPage = () => {

    if (!immediate) {
        hidePage();
    }

    if (current < last) {
        current++;
    } else {
        current = 1;
    }

    image.src = pageSrc + current + ext;

    if (!immediate) {
        $(image).on('load', showPage());
    }

}

document.body.addEventListener("click", nextPage);

window.onload = function () {
    nextPage();
    if (immediate) {
        showPage();
    }

}