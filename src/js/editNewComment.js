import {commentsList, addCommentBox} from './variables.js';
import {addNewComment, editetContent} from './addNewComment'

export const editNewComment = () => {
    let newReplyBox = document.createElement('div');
    let newReplyBoxInput = document.createElement('textarea');
    let newReplyBoxElements = document.createElement('div');
    let newReplyBoxElementsImg = document.createElement('img');
    let newReplyBoxElementsBtn = document.createElement('button');

    newReplyBox.classList.add('component__comment-box', 'component__comment-box--add');
    newReplyBoxInput.classList.add('component__comment-box--add__input');
    newReplyBoxElements.classList.add('component__comment-box--add__elements');
    newReplyBoxElementsImg.classList.add('component__comment-box--add__elements__img');
    newReplyBoxElementsBtn.classList.add('component__comment-box--add__elements__btn'); 

    let editetContentSpan = editetContent.querySelector('span')
    if (editetContentSpan !== null) {
        editetContentSpan.remove()
    }

    newReplyBoxInput.textContent = editetContent.innerText
    newReplyBoxElementsImg.setAttribute('src', './images/avatars/image-juliusomo.png')
    newReplyBoxElementsBtn.innerText = 'Send';

    newReplyBox.appendChild(newReplyBoxInput);
    newReplyBox.appendChild(newReplyBoxElements);
    newReplyBoxElements.appendChild(newReplyBoxElementsImg);
    newReplyBoxElements.appendChild(newReplyBoxElementsBtn);

    commentsList.insertBefore(newReplyBox, addCommentBox)
    newReplyBoxElementsBtn.addEventListener('click', addNewComment)
    newReplyBoxElementsBtn.addEventListener('click', () => newReplyBox.remove())
}