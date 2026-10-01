document.querySelectorAll('.zoekbalk').forEach((zoekbalk) => {
    const formulier = zoekbalk.querySelector('.zoekformulier');
    const invoer = zoekbalk.querySelector('input[type="search"]');
    const items = zoekbalk.querySelectorAll('li');

    const filterMenu = () => {
        const zoekterm = invoer.value.trim().toLowerCase();

        items.forEach((item) => {
            item.hidden = zoekterm !== '' && !item.textContent.toLowerCase().includes(zoekterm);
        });
    };

    invoer.addEventListener('input', filterMenu);
    formulier.addEventListener('submit', (event) => {
        event.preventDefault();
        filterMenu();
    });
});
