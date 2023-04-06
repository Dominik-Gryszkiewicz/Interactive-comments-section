import {secondComment, secondReplyBtn, secondReplyBtnDesktop} from './variables.js';
import {addReplyMax} from './addReplyMax.js'
import {insertAfter} from './insertAfter.js'

export const writeReplyMax = () => {
    let newReplyBox = document.createElement('div');
    let newReplyBoxInput = document.createElement('textarea');
    let newReplyBoxElements = document.createElement('div');
    let newReplyBoxElementsImg = document.createElement('img');
    let newReplyBoxElementsBtn = document.createElement('button');

    newReplyBox.classList.add('component__comment-box', 'component__comment-box--add', 'ms-2');
    newReplyBoxInput.classList.add('component__comment-box--add__input');
    newReplyBoxElements.classList.add('component__comment-box--add__elements');
    newReplyBoxElementsImg.classList.add('component__comment-box--add__elements__img');
    newReplyBoxElementsBtn.classList.add('component__comment-box--add__elements__btn');

    newReplyBoxInput.setAttribute('placeholder', 'Add a comment...')
    newReplyBoxElementsImg.setAttribute('src', './images/avatars/image-juliusomo.png')
    newReplyBoxElementsBtn.innerText = 'Send';

    newReplyBox.appendChild(newReplyBoxInput);
    newReplyBox.appendChild(newReplyBoxElements);
    newReplyBoxElements.appendChild(newReplyBoxElementsImg);
    newReplyBoxElements.appendChild(newReplyBoxElementsBtn);

    insertAfter(newReplyBox, secondComment)
    secondReplyBtn.removeEventListener('click', writeReplyMax)
    secondReplyBtnDesktop.removeEventListener('click', writeReplyMax)
    newReplyBoxElementsBtn.addEventListener('click', addReplyMax)
}