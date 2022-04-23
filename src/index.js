import bootstrap from 'bootstrap';
import data from './data/data.json.data';
import {CommentsImg, CommentsName, CommentsTime, CommentsConetent, CommentsScore, ReplyImg, ReplyName, ReplyTime, ReplyConetent, ReplyScore, addCommentImg, firstPlus, secondPlus, firstMinus, secondMinus, replyPlus, replyMinus, firstScore, secondScore, replyScoreNumber, addBtn, firstReplyBtn, secondReplyBtn, thirdReplyBtn} from './js/variables.js';
import {newComment} from './js/newComment.js'
import {writeReplyAmy} from './js/writeReplyAmy.js'
import {writeReplyMax} from './js/writeReplyMax.js'
import {writeReplyRam} from './js/writeReplyRam.js'


addBtn.addEventListener('click', newComment)
firstReplyBtn.addEventListener('click', writeReplyAmy)
secondReplyBtn.addEventListener('click', writeReplyMax)
thirdReplyBtn.addEventListener('click', writeReplyRam)

fetch(data)
    .then((response)=>{
        return response.json();
    })
    .then((response) => {

        let newCommentBoxContentSpan1 = document.createElement("span")
        let newCommentBoxContentSpan2 = document.createElement("span")
        newCommentBoxContentSpan1.classList.add('component__comment-box__content__span')
        newCommentBoxContentSpan2.classList.add('component__comment-box__content__span')
        newCommentBoxContentSpan1.innerText = '@maxblagun '
        newCommentBoxContentSpan2.innerText = '@ramsesmiron '
        const newCommentBoxContentSpanList = [newCommentBoxContentSpan1, newCommentBoxContentSpan2]

        for (let i = 0; i < response.comments.length; i++) {
            CommentsImg[i].src = response.comments[i].user.image.png;
            CommentsName[i].textContent = response.comments[i].user.username;
            CommentsTime[i].textContent = response.comments[i].createdAt;
            CommentsConetent[i].textContent = response.comments[i].content;
            CommentsScore[i].textContent = response.comments[i].score;
            if (response.comments[i].replies.length > 0) {
                for (let j = 0 ; j < response.comments[i].replies.length; j++) {
                    ReplyImg[j].src = response.comments[i].replies[j].user.image.png;
                    ReplyName[j].textContent = response.comments[i].replies[j].user.username;
                    ReplyTime[j].textContent = response.comments[i].replies[j].createdAt;
                    ReplyConetent[j].textContent = response.comments[i].replies[j].content;
                    ReplyConetent[j].prepend(newCommentBoxContentSpanList[j])
                    ReplyScore[j].textContent = response.comments[i].replies[j].score;
                }
            }
        }
        addCommentImg.src = response.currentUser.image.png
    })


firstPlus.addEventListener('click', () => {
    firstScore.textContent = parseInt(firstScore.textContent) + 1
})

firstMinus.addEventListener('click', () => {
    firstScore.textContent = parseInt(firstScore.textContent) - 1
})

secondPlus.addEventListener('click', () => {
    secondScore.textContent = parseInt(secondScore.textContent) + 1
})

secondMinus.addEventListener('click', () => {
    secondScore.textContent = parseInt(secondScore.textContent) - 1
})

replyPlus.addEventListener('click', () => {
    replyScoreNumber.textContent = parseInt(replyScoreNumber.textContent) + 1
})

replyMinus.addEventListener('click', () => {
    replyScoreNumber.textContent = parseInt(replyScoreNumber.textContent) - 1
}) 