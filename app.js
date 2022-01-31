$(() => {


    const $acc1 = $("#project1");
    const $acc2 = $("#project2");
    const $acc3 = $("#project3");
    const $nav = $(".topnav");


    $acc1.on("click", function () {

        $acc1.css('display', 'block')
        const $panel = $acc1.next();
        $("#project1").toggleClass("active");
        if ($panel.is(':visible')) {
            $panel.css('display', 'none')
        } else {
            $panel.css('display', 'block')
        }

    });

    $acc2.on("click", function () {

        $acc2.css('display', 'block')
        const $panel = $acc2.next();
        $("#project2").toggleClass("active");
        if ($panel.is(':visible')) {
            $panel.css('display', 'none')
        } else {
            $panel.css('display', 'block')
        }

    });
    $acc3.on("click", function () {

        $acc3.css('display', 'block')
        const $panel = $acc3.next();
        $("#project3").toggleClass("active");
        if ($panel.is(':visible')) {
            $panel.css('display', 'none')
        } else {
            $panel.css('display', 'block')
        }

    });



    $("#mobileMenu").on("click", function () {

        $nav.toggleClass("responsive");
    });


});