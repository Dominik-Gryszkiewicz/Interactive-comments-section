import {firstComment, firstReplyBtn} from './variables.js'
import {writeReplyAmy} from './writeReplyAmy.js'
import {editReplyAmy} from './editReplyAmy.js'
import {insertAfter} from './insertAfter.js'
export let editetContent

export const addReplyAmy = () => {

    let newCommentContent = document.querySelector('.component__comment-box--add__input')
    if (newCommentContent.value !== "" && newCommentContent.value !== "@amyrobson ") {

       let newCommentBox = document.createElement("div")
       let newCommentBoxTittle = document.createElement("div")
       let newCommentBoxTittleImg = document.createElement("img")
       let newCommentBoxTittleAuthor = document.createElement("p")
       let newCommentBoxTittleYou = document.createElement("p")
       let newCommentBoxTittleTime = document.createElement("p")
       let newCommentBoxContent = document.createElement("p")
       let newCommentBoxContentSpan = document.createElement("span")
       let newCommentBoxElements = document.createElement("div")
       let newCommentBoxElementsRating = document.createElement("div")
       let newCommentBoxElementsRatingImgPlus = document.createElement("img")
       let newCommentBoxElementsRatingNumber = document.createElement("p")
       let newCommentBoxElementsRatingImgMinus = document.createElement("img")
       let newCommentBoxElementsReply = document.createElement("div")
       let newCommentBoxElementsReplyImgDelete = document.createElement("img")
       let newCommentBoxElementsReplyTextDelete = document.createElement("p")
       let newCommentBoxElementsReplyImgEdit = document.createElement("img")
       let newCommentBoxElementsReplyTextEdit = document.createElement("p")

       newCommentBox.classList.add('component__comment-box', 'component__comment-box--replyAmy', 'ms-3')
       newCommentBoxTittle.classList.add('component__comment-box__tittle')
       newCommentBoxTittleImg.classList.add('component__comment-box__tittle__img',  'img-fluid')
       newCommentBoxTittleAuthor.classList.add('component__comment-box__tittle__author')
       newCommentBoxTittleYou.classList.add('component__comment-box__tittle__you', 'ms-2')
       newCommentBoxTittleTime.classList.add('component__comment-box__tittle__time')
       newCommentBoxContent.classList.add('component__comment-box__content')
       newCommentBoxContentSpan.classList.add('component__comment-box__content__span')
       newCommentBoxElements.classList.add('component__comment-box__elements')
       newCommentBoxElementsRating.classList.add('component__comment-box__elements__rating')
       newCommentBoxElementsRatingImgPlus.classList.add('component__comment-box__elements__rating__img--plus', 'img-fluid')
       newCommentBoxElementsRatingNumber.classList.add('component__comment-box__elements__rating__number')
       newCommentBoxElementsRating.classList.add('component__comment-box__elements__rating__img--minus', 'img-fluid')
       newCommentBoxElementsReply.classList.add('component__comment-box__elements__reply')
       newCommentBoxElementsReplyImgDelete.classList.add('component__comment-box__elements__reply__img', 'component__comment-box__elements__reply__img--other')
       newCommentBoxElementsReplyTextDelete.classList.add('component__comment-box__elements__reply__text', 'component__comment-box__elements__reply__text--delete', 'me-3')
       newCommentBoxElementsReplyImgEdit.classList.add('component__comment-box__elements__reply__img', 'component__comment-box__elements__reply__img--other')
       newCommentBoxElementsReplyTextEdit.classList.add('component__comment-box__elements__reply__text', 'component__comment-box__elements__reply__text--edit')
      

       newCommentBoxTittleImg.setAttribute('src', './images/avatars/image-juliusomo.png')
       newCommentBoxTittleAuthor.textContent = 'juliusomo'
       newCommentBoxTittleYou.textContent = 'you'
       newCommentBoxTittleTime.textContent = 'Today'
       newCommentBoxContent.innerText = newCommentContent.value
       newCommentContent.value = ''
       newCommentBoxContentSpan.innerText = '@amyrobson '
       newCommentBoxElementsRatingImgPlus.setAttribute('src', "./images/icon-plus.svg")
       newCommentBoxElementsRatingNumber.textContent = 0
       newCommentBoxElementsRatingImgMinus.setAttribute('src', "./images/icon-minus.svg")
       newCommentBoxElementsReplyImgDelete.setAttribute('src', "./images/icon-delete.svg")
       newCommentBoxElementsReplyTextDelete.textContent = 'Delete'
       newCommentBoxElementsReplyImgEdit.setAttribute('src', "./images/icon-edit.svg")
       newCommentBoxElementsReplyTextEdit.textContent = 'Edit'

       newCommentBox.appendChild(newCommentBoxTittle);
       newCommentBoxTittle.appendChild(newCommentBoxTittleImg)
       newCommentBoxTittle.appendChild(newCommentBoxTittleAuthor)
       newCommentBoxTittle.appendChild(newCommentBoxTittleYou)
       newCommentBoxTittle.appendChild(newCommentBoxTittleTime)
       newCommentBox.appendChild(newCommentBoxContent);
       newCommentBoxContent.prepend(newCommentBoxContentSpan)
       newCommentBox.appendChild(newCommentBoxElements);
       newCommentBoxElements.appendChild(newCommentBoxElementsRating);
       newCommentBoxElementsRating.appendChild(newCommentBoxElementsRatingImgPlus);
       newCommentBoxElementsRating.appendChild(newCommentBoxElementsRatingNumber);
       newCommentBoxElementsRating.appendChild(newCommentBoxElementsRatingImgMinus);
       newCommentBoxElements.appendChild(newCommentBoxElementsReply);
       newCommentBoxElementsReply.appendChild(newCommentBoxElementsReplyImgDelete);
       newCommentBoxElementsReply.appendChild(newCommentBoxElementsReplyTextDelete);
       newCommentBoxElementsReply.appendChild(newCommentBoxElementsReplyImgEdit);
       newCommentBoxElementsReply.appendChild(newCommentBoxElementsReplyTextEdit);

      const returnEditedContent = function(){
         editetContent = newCommentBoxContent
      }

       insertAfter(newCommentBox, firstComment)
       let addReplyBox = document.querySelector('.component__comment-box--add')
       addReplyBox.remove()
       firstReplyBtn.addEventListener('click', writeReplyAmy)
       newCommentBoxElementsReplyTextDelete.addEventListener('click', () => newCommentBox.remove())
       newCommentBoxElementsReplyTextEdit.addEventListener('click', returnEditedContent)
       newCommentBoxElementsReplyTextEdit.addEventListener('click', editReplyAmy)
       newCommentBoxElementsReplyTextEdit.addEventListener('click', () => newCommentBox.remove())
    }
}