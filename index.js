const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerText
    .split(' ')
    .map(word => word.length > 8 ? `<span style="background-color: yellow>${word}</span>` : word)
    .join(' ');

const link = document.createElement('a');
link.href = 'https://forcemipsum.com/';
link.innerText = 'Text generated from Forcem Ipsum';
document.body.appendChild(link);

paragraph.innerHTML = paragraph.innerHTML
    .split(/\.[^\.|<]/)
    .join('.</p><p>') + '</p>';

const wordCount = paragraph.innerText.split(' ').length;
const wordCountElem = document.createElement('div');
wordCountElem.innerText = `${wordCount} words`;
document.body.insertBefore(wordCountElem, paragraph);

Array.from(document.querySelectorAll('p'))
    .forEach(p => {
        p.innerHTML = p.innerHTML
            .replace(/\?/g, '🤔')
            .replace(/\?/g, '😲')
    })