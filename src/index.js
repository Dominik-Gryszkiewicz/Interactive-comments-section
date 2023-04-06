import bootstrap from 'bootstrap';
import data from './data/data.json.data';
import {CommentsImg, CommentsName, CommentsTime, CommentsConetent, CommentsScore, CommentsScoreDesktop, ReplyImg, ReplyName, ReplyTime, ReplyConetent, ReplyScore, ReplyScoreDesktop, addCommentImg, firstPlus, secondPlus, firstMinus, secondMinus, replyPlus, replyMinus, firstScore, secondScore, replyScoreNumber, addBtn, firstReplyBtn, firstReplyBtnDesktop, secondReplyBtn, secondReplyBtnDesktop, thirdReplyBtn, thirdReplyBtnDesktop, secondReply, secondReplyDeleteBtn, secondReplyDeleteBtnDesktop, secondReplyEditBtn, secondReplyEditBtnDesktop, firstPlusDesktop, secondPlusDesktop, firstMinusDesktop, secondMinusDesktop, replyPlusDesktop, replyMinusDesktop, firstScoreDesktop, secondScoreDesktop, replyScoreNumberDesktop} from './js/variables.js';
import {addNewComment} from './js/addNewComment.js'
import {writeReplyAmy} from './js/writeReplyAmy.js'
import {writeReplyMax} from './js/writeReplyMax.js'
import {writeReplyRam} from './js/writeReplyRam.js'
import {editReplyJul} from './js/editReplyJul.js'


addBtn.addEventListener('click', addNewComment)
firstReplyBtn.addEventListener('click', writeReplyAmy)
firstReplyBtnDesktop.addEventListener('click', writeReplyAmy)
secondReplyBtn.addEventListener('click', writeReplyMax)
secondReplyBtnDesktop.addEventListener('click', writeReplyMax)
thirdReplyBtn.addEventListener('click', writeReplyRam)
thirdReplyBtnDesktop.addEventListener('click', writeReplyRam)
secondReplyEditBtn.addEventListener('click', editReplyJul)
secondReplyEditBtnDesktop.addEventListener('click', editReplyJul)
secondReplyEditBtn.addEventListener('click', () => secondReply.remove())
secondReplyEditBtnDesktop.addEventListener('click', () => secondReply.remove())
secondReplyDeleteBtn.addEventListener('click', () => secondReply.remove())
secondReplyDeleteBtnDesktop.addEventListener('click', () => secondReply.remove())

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
            CommentsScoreDesktop[i].textContent = response.comments[i].score;
            if (response.comments[i].replies.length > 0) {
                for (let j = 0 ; j < response.comments[i].replies.length; j++) {
                    ReplyImg[j].src = response.comments[i].replies[j].user.image.png;
                    ReplyName[j].textContent = response.comments[i].replies[j].user.username;
                    ReplyTime[j].textContent = response.comments[i].replies[j].createdAt;
                    ReplyConetent[j].textContent = response.comments[i].replies[j].content;
                    ReplyConetent[j].prepend(newCommentBoxContentSpanList[j])
                    ReplyScore[j].textContent = response.comments[i].replies[j].score;
                    ReplyScoreDesktop[j].textContent = response.comments[i].replies[j].score;
                }
            }
        }
        addCommentImg.src = response.currentUser.image.png
    })


firstPlus.addEventListener('click', () => {
    firstScore.textContent = parseInt(firstScore.textContent) + 1
}, {once: true})

firstPlusDesktop.addEventListener('click', () => {
    firstScoreDesktop.textContent = parseInt(firstScoreDesktop.textContent) + 1
}, {once: true})

firstMinus.addEventListener('click', () => {
    firstScore.textContent = parseInt(firstScore.textContent) - 1
}, {once: true})

firstMinusDesktop.addEventListener('click', () => {
    firstScoreDesktop.textContent = parseInt(firstScoreDesktop.textContent) - 1
}, {once: true})

secondPlus.addEventListener('click', () => {
    secondScore.textContent = parseInt(secondScore.textContent) + 1
}, {once: true})

secondPlusDesktop.addEventListener('click', () => {
    secondScoreDesktop.textContent = parseInt(secondScoreDesktop.textContent) + 1
}, {once: true})

secondMinus.addEventListener('click', () => {
    secondScore.textContent = parseInt(secondScore.textContent) - 1
}, {once: true})

secondMinusDesktop.addEventListener('click', () => {
    secondScoreDesktop.textContent = parseInt(secondScoreDesktop.textContent) - 1
}, {once: true})

replyPlus.addEventListener('click', () => {
    replyScoreNumber.textContent = parseInt(replyScoreNumber.textContent) + 1
}, {once: true})

replyPlusDesktop.addEventListener('click', () => {
    replyScoreNumberDesktop.textContent = parseInt(replyScoreNumberDesktop.textContent) + 1
}, {once: true})

replyMinus.addEventListener('click', () => {
    replyScoreNumber.textContent = parseInt(replyScoreNumber.textContent) - 1
}, {once: true}) 

replyMinusDesktop.addEventListener('click', () => {
    replyScoreNumberDesktop.textContent = parseInt(replyScoreNumberDesktop.textContent) - 1
}, {once: true}) 