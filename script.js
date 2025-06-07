
const data = [
    {
        name: 'Meshari',
        author: 'Gjon Buzuku',
        viti: 1555,
        description: '"Meshari" është libri i parë i shkruar në gjuhën shqipe që e njohim sot',
        info: "https://sq.wikipedia.org/wiki/Meshari"
    },
    {
        name: 'Kanuni i Lekë Dukagjinit',
        author: 'Leke Dukagini',
        viti: 1933,
        description: 'Kanuni i Lekë Dukagjinit është një kod zakonor, pra një rregullore jete e pashkruar që është ndjekur për shekuj me radhë nga shqiptarët',
        info: "https://sq.wikipedia.org/wiki/Kanuni_i_Lek%C3%AB_Dukagjinit",
    },
    {
        name: 'Romeo dhe Zhuljeta',
        author: 'William Shakeseapre',
        viti: 1597,
        description: '"Romeo dhe Zhuljeta" është një roman i shkurtër ose dramë e shkruar nga William Shakespeare',
        info: "https://sq.wikipedia.org/wiki/Romeo_dhe_Zhuljeta",
    },
    {
        name: "Harry Potter dhe Guri Filozofal",
        author: 'J.K Rowling',
        viti: 1997,
        description: 'Ky është libri i parë nga seria e famshme Harry Potter, që flet për një djalë që zbulon se është magjistar dhe shkon në një shkollë magjie që quhet Hogwarts',
        info: "https://sq.wikipedia.org/wiki/Harry_Potter_dhe_Guri_Filozofal_(libri)",
    },
    {
        name: 'Gjenerali i ushtrise se vdekur',
        author: 'Ismail Kadare',
        viti: 1963,
        description: 'Romani "Gjenerali i ushtrisë së vdekur" tregon absurditetin e luftës, vetminë, dhe përballjen e njeriut me vdekjen.',
        info: "https://sq.wikipedia.org/wiki/Gjenerali_i_ushtris%C3%AB_s%C3%AB_vdekur",
    }
]

const tbody = document.querySelector('#tbody')
const select = document.getElementById('bookSelect');
const searchBtn = document.getElementById('searchBookBtn');

data.forEach((book, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = book.name;
    select.appendChild(option);
});

tbody.innerHTML = '';

searchBookBtn.addEventListener('click', () => {
    const index = select.value;
    if (index === "") return;

    const book = data[index];

    tbody.innerHTML = "";

    const row = document.createElement('tr');
    row.innerHTML = 
        `
        <td data-label="Name">${book.name}</td>
        <td data-label="Description">${book.description}</td>
        <td data-label="Viti">${book.viti}</td>
        <td data-label="Author">${book.author}</td>
        <td data-label="Info">
            ${book.info ? `<a href="${book.info}" target="_blank">Kliko këtu</a>` : 'Nuk ka link'}
        </td>
        `
    tbody.appendChild(row);
});
