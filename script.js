// =============================
// BOAS-VINDAS
// =============================

window.onload = function () {
    setTimeout(() => {
        alert("🦭 Bem-vindo ao Guia Completo dos Leões-Marinhos!");
    }, 500);
};

// =============================
// MENU MUDA DE COR AO ROLAR
// =============================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        nav.style.background = "#000";
        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,.5)";

    } else {

        nav.style.background = "#111";
        nav.style.boxShadow = "none";

    }

});

// =============================
// BOTÃO VOLTAR AO TOPO
// =============================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "⬆";

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "30px";
botaoTopo.style.right = "30px";
botaoTopo.style.width = "55px";
botaoTopo.style.height = "55px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.background = "#111";
botaoTopo.style.color = "white";
botaoTopo.style.fontSize = "22px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.zIndex = "999";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";

    }

});

botaoTopo.onclick = () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

// =============================
// CURIOSIDADES ALEATÓRIAS
// =============================

const curiosidades = [

"🦭 Os leões-marinhos conseguem dormir na água.",

"🦭 Conseguem mergulhar por cerca de 10 minutos.",

"🦭 Seus bigodes detectam movimentos dos peixes.",

"🦭 Os machos podem pesar mais de 350 kg.",

"🦭 Vivem em grandes colônias.",

"🦭 São considerados animais muito inteligentes.",

"🦭 Comunicam-se através de sons altos.",

"🦭 Seus filhotes reconhecem a voz da mãe.",

"🦭 Podem atingir mais de 35 km/h nadando.",

"🦭 São excelentes caçadores de peixes e lulas."

];

const caixa = document.createElement("div");

caixa.style.position = "fixed";
caixa.style.left = "20px";
caixa.style.bottom = "20px";
caixa.style.background = "#222";
caixa.style.color = "white";
caixa.style.padding = "15px";
caixa.style.borderRadius = "10px";
caixa.style.maxWidth = "320px";
caixa.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
caixa.style.fontSize = "15px";

document.body.appendChild(caixa);

function mostrarCuriosidade(){

    let numero = Math.floor(Math.random() * curiosidades.length);

    caixa.innerHTML =
    "<strong>Curiosidade:</strong><br><br>" +
    curiosidades[numero];

}

mostrarCuriosidade();

setInterval(mostrarCuriosidade,8000);

// =============================
// ANIMAÇÃO DAS SEÇÕES
// =============================

const sections = document.querySelectorAll("section");

const aparecer = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";
        }

    });

});

sections.forEach((sec)=>{

    sec.style.opacity = "0";
    sec.style.transform = "translateY(40px)";
    sec.style.transition = ".8s";

    aparecer.observe(sec);

});

// =============================
// ANO AUTOMÁTICO NO RODAPÉ
// =============================

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    "© " +
    new Date().getFullYear() +
    " | Site educativo sobre Leões-Marinhos";

}