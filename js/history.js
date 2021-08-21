var allHistoryButtons = document.querySelectorAll('.history__container--timeline');
var allHistoryParagraphs = document.querySelectorAll('.history__container--paragraph');
Array.from(allHistoryButtons).forEach( (button,index) => {
    button.addEventListener('click',function(){
        let paragraph = allHistoryParagraphs[index];
        let paragraphBox = paragraph.parentElement;
        let wide = paragraphBox.parentElement.getBoundingClientRect().width;
        paragraphBox.style.left = -1*wide*index+'px';
        Array.from(allHistoryParagraphs).forEach(p=>p.classList.remove('select'));
        Array.from(allHistoryButtons).forEach(b=>b.classList.remove('select'));
        paragraph.classList.add('select');
        button.classList.add('select');
    });
} );