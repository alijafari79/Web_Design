$(document).ready(function () {
    $(".smenu").click(function () {
        $(".contmenu").toggleClass("open");
        $(".sp").toggleClass("opened");
        $(".sp1").toggleClass("resize1");
        $(".sp2").toggleClass("resize2");
        $(".sp3").toggleClass("resize3");
    });

function active() {
    document.getElementById("txt").classList.add("active");
}
function deactive() {
    document.getElementById("txt").classList.remove("active");
}