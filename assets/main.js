// LIVE CODING 1
// Creare una To do List.
// On click su un item verrà cancellata la riga.
// Una volta che l’item è nascosto, far comparire un
// modal: “Item Cancellato” e farlo scomparire
// subito dopo.

$(document).ready(function (){
    liveCoding_1();
    esercizio();
});


// ESERCIZIO

function esercizio(){
    var cont_Main_Esercizio = $("#cont_Main_Esercizio");
    console.log(cont_Main_Esercizio.html());

    // Numeri da generare
    const numGen = 5;
    const maxNum = 99;
    // Creazione array numeri generati
    var arrNum = new Array();


    cont_Main_Esercizio.find("#fase-1").click( function(){
        cont_Main_Esercizio.find("#fase-1").addClass("d-none");
        cont_Main_Esercizio.find("#fase-2").removeClass("d-none");
        var count_down_N = 30;

        for (var i = 0; i < numGen; i++) {
            arrNum.push(numeriRandom(maxNum))
            console.log(arrNum);

        }

        var fase_2 = $("#fase-2 > span");
        fase_2.addClass("text-warning");
        for (var i = 0; i < fase_2.length; i++) {

            if (fase_2.eq( i ).hasClass("last")) {
                fase_2.eq( i ).html(arrNum[i]);
            }else
                fase_2.eq( i ).html(arrNum[i] + "-");

        }

        setTimeout(function (){
            var count_down_$ = $("#fase-2 > h1");
            var clock = setInterval(countDown_F, 1000);


            function countDown_F() {
                console.log(count_down_$);
                if (!count_down_N) {
                    // count_down_$.html(count_down_N)
                    clearInterval(clock)
                }else if(count_down_N <= 6){
                    count_down_N--;
                    count_down_$.html("<h1 class = \"animate__animated  animate__heartBeat text-red\"> "+ count_down_N +"</h1>");
                }else if(count_down_N <= 11){
                    count_down_N--;
                    count_down_$.html("<h1 class = \"animate__animated  animate__heartBeat text-danger\"> "+ count_down_N +"</h1>");
                }else if(count_down_N <= 16){
                    count_down_N--;
                    count_down_$.html("<h1 class = \"animate__animated  animate__heartBeat text-success\"> "+ count_down_N +"</h1>");
                }else{
                    count_down_N--;
                    count_down_$.html("<h1 class = \"text-success\"> "+ count_down_N +"</h1>");
                }
            }

        },1000);

        setTimeout(function (){
            cont_Main_Esercizio.find("#fase-2").addClass("d-none");
            cont_Main_Esercizio.find("#fase-3").removeClass("d-none");

            var arrInput_$ = $("#fase-3 > form > div");
            var arrInput_length = arrInput_$.length;

            for (var i = 0; i < arrInput_length ; i++) {
                arrInput_$.eq(i).html("<span class=\"input-group mb-1\"><div class=\"input-group-prepend\"><span class=\"input-group-text\" id=\"basic-addon1\">" + (i + 1) + "</span></div><input type=\"number\" min=\"1\" max=\"99\" placeholder=\"Numero\" aria-label=\"Numero" + i + "\" required></span>");
                if (i == arrInput_length -1) {
                    arrInput_$.eq(i).html("<button id=\"btn_Add_Numb\" class=\"btn btn-primary mt-2\">Invia</button>");
                }
            }


            var lnkSubmit_$ = $("#fase-3 > form#myForm");

            lnkSubmit_$.submit(function( event ) {
                // Annullamento invio dati server
                event.preventDefault();

                // Ultima fase ---- La fase 4
                cont_Main_Esercizio.find("#fase-3").addClass("d-none");
                cont_Main_Esercizio.find("#fase-4").removeClass("d-none");

                var arrNum_Input = $("#fase-3 > form#myForm input");

                var numIndovinati = 0;
                for (var i = 0; i < arrNum_Input.length; i++) {

                    for (var j = 0; j < arrNum_Input.length; j++) {

                        console.log(arrNum[j]);
                        if (arrNum_Input.eq(i).val() == arrNum[j]) {
                            numIndovinati += 1;
                        }
                    }
                }

                var risultato = $("#fase-4 > p");
                if (numIndovinati < 2) {
                    risultato.html(numIndovinati);
                    risultato.addClass("text-danger")
                }else if (numIndovinati < 4) {
                    risultato.html(numIndovinati);
                    risultato.addClass("text-warning")
                }else {
                    risultato.html(numIndovinati);
                    risultato.addClass("text-success")
                }
            });

        },count_down_N * 1100);
    });

    function numeriRandom(max){
        var num = Math.floor(Math.random() * max + 1);
        return num;
    }
}



//  Live coding 1
function liveCoding_1(){

    var itemsList = $("#liveCoding-1 > div");

    // Invocazione script
    hiddenItemList(itemsList);


// funzioni
    function hiddenItemList(arrItems){

        arrItems.click( function(){
            $(this).addClass("d-none");
            setTimeout(alert_Is_Hidden,1000);

            // Utilizzata dal Ciclo Each
            var contatore = 0;

            arrItems.each(function() {

                if ($(this).hasClass("d-none")) {
                    ++contatore;
                }

                if (contatore == arrItems.length) {
                    $(arrItems).parent().addClass("d-none");
                    setTimeout(function(){
                        // $(arrItems).parent().parent().addClass("d-none");
                        $(arrItems).parent().parent().animate({
                          height: 'toggle'
                        });
                    },3000);
                }
            });
        })

        function alert_Is_Hidden(){
            $(arrItems).parent().next().removeClass("d-none")
            setTimeout(function(){
                $(arrItems).parent().next().addClass("d-none")
            },3000);
        };
    }
}
