document.addEventListener("scroll", function() {
    var elem = document.querySelector("#block-2");
    document.querySelector("#header > .content").classList[elem.getBoundingClientRect().top < window.innerHeight ? "add" : "remove"]("visible");
});