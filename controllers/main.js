$(document).ready(function () {
    var callData = new CallData();
    var choosenList = new ChoosenList();
    let prendas = ["","","","",""];


    getAndRenderData();

    function getAndRenderData() {
        
        callData.getListData()
            .done(function (res) {
                
                // console.log(res);
                var innerNavPills = '';
                var innerNavPanes = '';

                res.navPills.forEach(function (item) {
                    var activeClass = item.tabName === 'tabTopClothes' ? 'active' : '';
                    var fadeClass = item.tabName !== 'tabTopClothes' ? 'fade' : '';

                    innerNavPills += renderNavPills(item, activeClass);
                    innerNavPanes += renderNavPanes(res.tabPanes, fadeClass, activeClass, item);
                })

                $('.nav-pills').html(innerNavPills);
                $('.tab-content').html(innerNavPanes);
            })
            .fail(function (err) {
                console.log(err);
            });
    }


    function findChoosenInList(choosenArr, checkItem) {
        var index = -1;
        if (choosenArr && choosenArr.length > 0) {
            choosenArr.forEach(function (item, i) {
                if (item.type === checkItem.type) {
                    index = i;
                }
            });
        }
        return index;
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
        }

        cam1= document.getElementById("camisa1").innerText;


        document.getElementById("btnAgregarCamisa1").onclick = function() {guardarcamisa(cam1)};
        document.getElementById("btnAgregarCamisa2").onclick = function() {guardarcamisa(document.getElementById("camisa2").innerText)};
        document.getElementById("btnAgregarCamisa3").onclick = function() {guardarcamisa(document.getElementById("camisa3").innerText)};
        document.getElementById("btnAgregarCamisa4").onclick = function() {guardarcamisa(document.getElementById("camisa4").innerText)};
        document.getElementById("btnAgregarCamisa5").onclick = function() {guardarcamisa(document.getElementById("camisa5").innerText)};
        document.getElementById("btnAgregarCamisa6").onclick = function() {guardarcamisa(document.getElementById("camisa6").innerText)};
        
        function guardarcamisa(msg){
            prendas.splice(0, 1)
            prendas.splice(0,0,msg);
        }

        document.getElementById("btnAgregarFalda1").onclick = function() {guardarfalda(document.getElementById("falda1").innerText)};
        document.getElementById("btnAgregarFalda2").onclick = function() {guardarfalda(document.getElementById("falda2").innerText)};
        document.getElementById("btnAgregarFalda3").onclick = function() {guardarfalda(document.getElementById("falda3").innerText)};
        document.getElementById("btnAgregarFalda4").onclick = function() {guardarfalda(document.getElementById("falda4").innerText)};
        document.getElementById("btnAgregarFalda5").onclick = function() {guardarfalda(document.getElementById("falda5").innerText)};


        function guardarfalda(msg){
            prendas.splice(1, 1)
            prendas.splice(1,0,msg);
                    }

        document.getElementById("btnAgregarZapato1").onclick = function() {guardarzapato(document.getElementById("zapato1").innerText)};
        document.getElementById("btnAgregarZapato2").onclick = function() {guardarzapato(document.getElementById("zapato2").innerText)};
        document.getElementById("btnAgregarZapato3").onclick = function() {guardarzapato(document.getElementById("zapato3").innerText)};
        document.getElementById("btnAgregarZapato4").onclick = function() {guardarzapato(document.getElementById("zapato4").innerText)};
        document.getElementById("btnAgregarZapato5").onclick = function() {guardarzapato(document.getElementById("zapato5").innerText)};

        function guardarzapato(msg){
            prendas.splice(2, 1)
            prendas.splice(2,0,msg);
        }

        document.getElementById("btnAgregarBolso1").onclick = function() {guardarbolso(document.getElementById("bolso1").innerText)};
        document.getElementById("btnAgregarBolso2").onclick = function() {guardarbolso(document.getElementById("bolso2").innerText)};
        document.getElementById("btnAgregarBolso3").onclick = function() {guardarbolso(document.getElementById("bolso3").innerText)};

        function guardarbolso(msg){
            prendas.splice(3, 1)
            prendas.splice(3,0,msg);
        }

        document.getElementById("btnAgregarAccesorio1").onclick = function() {guardaraccesorio(document.getElementById("accesorio1").innerText)};
        document.getElementById("btnAgregarAccesorio2").onclick = function() {guardaraccesorio(document.getElementById("accesorio2").innerText)};
        document.getElementById("btnAgregarAccesorio3").onclick = function() {guardaraccesorio(document.getElementById("accesorio3").innerText)};

        function guardaraccesorio(msg){
            prendas.splice(4, 1)
            prendas.splice(4,0,msg);
        }

        document.getElementById("btnguardar").onclick = function() {ajaxx()};

        function ajaxx(){
            $.ajax({

                url:"php/prendas.php",
                method: "POST",
                data : prendas,
                cache: false,
                contentType: false,
                processData: false,
                success: function(respuesta){
                           
                }
        
            });
        }

        
        

    $('body').delegate('.tryItNow', 'click', function () {
        var id = $(this).data('id');
        var type = $(this).data('type');
        var name = $(this).data('name');
        var desc = $(this).data('desc');
        var jpgSrc = $(this).data('imgsrcjpg');
        var pngSrc = $(this).data('imgsrcpng');

        var choosen = new Choosen(id, type, name, desc, jpgSrc, pngSrc);

        var index = findChoosenInList(choosenList.arr, choosen);
        if (index !== -1) {
            choosenList.arr[index] = choosen;
        } else if (index === -1) {
            choosenList.addChoosenItem(choosen);
        }
        renderContain(choosenList.arr);
    });

    function renderContain(choosenArr) {
        choosenArr.forEach(function (item) {
            if (item.type === "topclothes") {
                renderTopClothes(item.pngSrc);
            }
            if (item.type === "botclothes") {
                renderBotClothes(item.pngSrc);
            }
            if (item.type === "shoes") {
                renderShoes(item.pngSrc);
            }
            if (item.type === "handbags") {
                renderHandBags(item.pngSrc);
            }
            if (item.type === "necklaces") {
                renderNecklaces(item.pngSrc);
            }
        });
    }


/////

    function modCamisa(num1) {
        $('.bikinitop').css({
            width: "500px",
            height: "500px",
            background: `url("../assets/images/clothes/topcloth${num1}.png")`,
            position: "absolute",
            top: "-9%",
            left: "-5%",
            zIndex: "3",
            transform: "scale(0.5)"
        });
    }

    function modfalda(num2) {
        $('.bikinibottom').css({
            width: "500px",
            height: "1000px",
            background: `url("../assets/images/clothes/botcloth${num2}.png")`,
            position: "absolute",
            top: "-30%",
            left: "-5%",
            zIndex: "2",
            transform: "scale(0.5)"
        });
    }

    function modzapato(num3) {
        $('.feet').css({
            width: "500px",
            height: "1000px",
            background: `url("../assets/images/shoes/shoes${num3}.png")`,
            position: "absolute",
            bottom: "-37%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: "1"
        });
    }

    function modBolso(num4) {
        $('.handbag').css({
            width: "500px",
            height: "1000px",
            background: `url("../assets/images/handbags/handbag${num4}.png")`,
            position: "absolute",
            bottom: "-40%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: "4"
        });
    }

    function modAccesorio(num5) {
        $('.necklace').css({
            width: "500px",
            height: "1000px",
            background: `url("../assets/images/necklaces/necklace${num5}.png")`,
            position: "absolute",
            bottom: "-40%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: "4"
        });
    }




    ////

    function renderTopClothes(pngSrc) {
        $('.bikinitop').css({
            width: "500px",
            height: "500px",
            background: `url("${pngSrc}")`,
            position: "absolute",
            top: "-9%",
            left: "-5%",
            zIndex: "3",
            transform: "scale(0.5)"
        });
    }

    function renderBotClothes(pngSrc) {
        $('.bikinibottom').css({
            width: "500px",
            height: "1000px",
            background: `url("${pngSrc}")`,
            position: "absolute",
            top: "-30%",
            left: "-5%",
            zIndex: "2",
            transform: "scale(0.5)"
        });
    }

    function renderShoes(pngSrc) {
        $('.feet').css({
            width: "500px",
            height: "1000px",
            background: `url("${pngSrc}")`,
            position: "absolute",
            bottom: "-37%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: "1"
        });
    }

    function renderHandBags(pngSrc) {
        $('.handbag').css({
            width: "500px",
            height: "1000px",
            background: `url("${pngSrc}")`,
            position: "absolute",
            bottom: "-40%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: "4"
        });
    }

    function renderNecklaces(pngSrc) {
        $('.necklace').css({
            width: "500px",
            height: "1000px",
            background: `url("${pngSrc}")`,
            position: "absolute",
            bottom: "-40%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: "4"
        });
    }

});