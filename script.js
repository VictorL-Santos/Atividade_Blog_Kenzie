function escopo(){
    const form = document.querySelector('.newsletter');

    function eventoform(evento){
        evento.preventDefault();

        const email = form.querySelector('.email');
        alert(`Agora Você Ficara por Dentro de Todas as Novidades
${email.value}`);
    }
    form.addEventListener('submit', eventoform);
}
escopo();