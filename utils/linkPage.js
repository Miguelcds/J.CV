

// Creo funcion de redireccion de pagina
const linkPage = (id, page) => {
    const link = document.querySelector(id);
    link.addEventListener("click", () => {
        page();
        setTimeout(() => {
            const main = document.querySelector("main");
            main.scrollIntoView({ behavior: 'smooth' });
        }, 50);
    })
};

export default linkPage;

