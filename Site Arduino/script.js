
let vidPag = document.querySelector('#videos ul');


vidPag.children[0].onclick = () =>{
    for(i = 0;i < 3; i++)
    {
        vidPag.children[i].classList.remove('active');
    }

    vidPag.children[0].classList.add('active');
    

    document.getElementById('videosBox').innerHTML = `
        <div class="videoUnique">
            <p class="titulo" style="font-size: 1.5em;">O que é o Arduino?</p>
            <iframe width="727" height="409" src="https://www.youtube.com/embed/sv9dDtYnE1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <hr>

        <div class="videoUnique">
            <p class="titulo" style="font-size: 1.5em;">O que fazer no começo</p>
            <iframe width="727" height="409" src="https://www.youtube.com/embed/fKtrhH_yOpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <hr>

        <div class="videoUnique">
            <p class="titulo" style="font-size: 1.5em;">Apenas a linguagem alfanumérica?</p>
            <iframe width="727" height="409" src="https://www.youtube.com/embed/Niox3OgBIjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>`;
}


vidPag.children[1].onclick = () =>{
    for(i = 0;i < 3; i++)
    {
        vidPag.children[i].classList.remove('active');
    }
    vidPag.children[1].classList.add('active');
    

    document.getElementById('videosBox').innerHTML = `
        <div class="videoUnique">
            <p class="titulo" style="font-size: 1.5em;">As portas analógicas</p>
            <iframe width="727" height="409" src="https://www.youtube.com/embed/sk-39DA7bZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <hr>

        <div class="videoUnique">
            <p class="titulo" style="font-size: 1.5em;">O que é Delay</p>
            <iframe width="727" height="409" src="https://www.youtube.com/embed/M9kkQLOdKes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <hr>

        <div class="videoUnique">
            <p class="titulo" style="font-size: 1.5em;">Aprenda sobre Strings</p>
            <iframe width="727" height="409" src="https://www.youtube.com/embed/MbgeeS8FhjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>`;
}


vidPag.children[2].onclick = () =>{
    for(i = 0;i < 3; i++)
    {
        vidPag.children[i].classList.remove('active');
    }
    vidPag.children[2].classList.add('active');
    

    document.getElementById('videosBox').innerHTML = `
        <div class="videoUnique">
            <p class="titulo" style="font-size: 1.5em;">Timers do Arduino</p>
            <iframe width="727" height="409" src="https://www.youtube.com/embed/1tMDTS8EJgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <hr>

        <div class="videoUnique">
            <p class="titulo" style="font-size: 1.5em;">Aprenda a fazer um Self-Driving Robot</p>
            <iframe width="727" height="409" src="https://www.youtube.com/embed/5KwH-bQYOEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <hr>

        <div class="videoUnique">
            <p class="titulo" style="font-size: 1.5em;">Aprenda a fazer uma garra eletrônica</p>
            <iframe width="727" height="409" src="https://www.youtube.com/embed/Ecw3kCo4AdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>`;
}



let projPag = document.querySelector('#tinkercad ul');


projPag.children[0].onclick = () =>{
    for(i = 0; i < projPag.childElementCount; i++)
    {
        projPag.children[i].classList.remove('active');
    }
    projPag.children[0].classList.add('active');
    document.querySelector('#tinkercadBox').innerHTML = `
        <p class="titulo">Leitor de temperatura e Luminosidade de Estufa</p>
        <iframe width="560" height="350" src="https://www.tinkercad.com/embed/iSmxCaWdPlA?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
        `;
}


projPag.children[1].onclick = () =>{
    for(i = 0; i < projPag.childElementCount; i++)
    {
        projPag.children[i].classList.remove('active');
    }
    projPag.children[1].classList.add('active');
    document.querySelector('#tinkercadBox').innerHTML = `
        <p class="titulo">Sensor de Luminosidade</p>
        <iframe width="560" height="350" src="https://www.tinkercad.com/embed/c5v4IP2BLMY?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
        `;
}


projPag.children[2].onclick = () =>{
    for(i = 0; i < projPag.childElementCount; i++)
    {
        projPag.children[i].classList.remove('active');
    }
    projPag.children[2].classList.add('active');
    document.querySelector('#tinkercadBox').innerHTML = `
        <p class="titulo">Sensor de umidade do solo</p>
        <iframe width="560" height="350" src="https://www.tinkercad.com/embed/b4lX11xQNqw?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
        `;
}


function atualizaProgresso() {
    progressoValor = 0;
    let progressoItens = document.querySelectorAll('#meuProgresso input');
    for(i = 0; i < progressoItens.length; i++)
    {
        if (progressoItens[i].checked) {
            progressoValor += 11;
        }
    }
    if (progressoValor >= 99) {
        progressoValor = 100;
    }
    let progressoBarra = document.querySelector('#meuProgresso .progress-bar');
    progressoBarra.setAttribute('style',`width: ${progressoValor}%;`);
    progressoBarra.setAttribute('aria-valuenow', `${progressoValor}`);
    progressoBarra.innerHTML = `${progressoValor}%`;
}

onload = () =>{
    document.querySelector('#videos li').classList.add('active');
    document.querySelector('#tinkercad li').classList.add('active');
    
    let progressoItens = document.querySelectorAll('#meuProgresso input');
    for(i = 0; i < progressoItens.length; i++)
    {   
        progressoItens[i].onchange = atualizaProgresso;
    }

    atualizaProgresso();
    

}