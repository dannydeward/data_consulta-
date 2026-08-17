document.addEventListener("DOMContentLoaded", function () {

    /*
    =========================================================
    DESPLAZAMIENTO SUAVE
    =========================================================
    */

    const links = document.querySelectorAll(
        'a[href^="#"]'
    );

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /*
    =========================================================
    MENSAJE DE CONFIRMACIÓN PARA DESCARGAS
    =========================================================
    */

    const downloadButtons =
        document.querySelectorAll(
            'a[href*="/descargar/"]'
        );

    downloadButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log(
                "El usuario inició una descarga."
            );

        });

    });

});