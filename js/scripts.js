const navtoggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav");

navtoggle.addEventListener("click", function () {
    navMenu.classList.toggle("nav-menu_visible");
})

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        axisY: {
            title: "Usuarios Activos (miles)",

        },
        axisX: {
            title: "Años"
        },
        data: [{
            type: "column",

            dataPoints: [
                { label: "2017", y: 20 },
                { label: "2018", y: 30 },
                { label: "2019", y: 50 },
                { label: "2020", y: 80 },
                { label: "2021", y: 110 },

            ]
        }]
    });
    chart.render();

}

