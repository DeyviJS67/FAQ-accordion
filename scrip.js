
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const hide = document.querySelectorAll(".hide");
const show = document.querySelectorAll(".show")

// Bucle for   Verifica si tiene la clase hide .. sino la tiene la agrega
for(let oso = 0; oso < plus.length; oso++){
    plus[oso].addEventListener("click", function () {
        plus[oso].classList.toggle("hide");
        minus[oso].classList.toggle("hide");
        show[oso].classList.toggle("hide");
    });
}

// Bucle for 
for(let oso = 0; oso < minus.length; oso++){
    minus[oso].addEventListener("click", function () {
        minus[oso].classList.toggle("hide");
        plus[oso].classList.toggle("hide");
        show[oso].classList.toggle("hide");
    });
}
