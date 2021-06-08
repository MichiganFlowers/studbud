const navigation = document.querySelector('.navigation')
document.querySelector('.toggle').ondblclick = function () {
    this.classList.toggle('active')
    navigation.classList.toggle('active')
}

$(function () {
    $(".navigation").draggable();
});

let tabHeader = document.getElementsByClassName("filterUl")[0];
let tabBody = document.getElementsByClassName("filterMenu")[0];

let tabsPane = tabHeader.getElementsByClassName("list");

for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", function () {
        tabHeader.getElementsByClassName("filterActive")[0].classList.remove("filterActive");
        tabsPane[i].classList.add("filterActive");
        tabBody.getElementsByClassName("filterActive")[0].classList.remove("filterActive");
        tabBody.getElementsByClassName("filterMain")[i].classList.add("filterActive");
    });
}

let bgColor = document.querySelector(".studbudAllWrapper");
let studbudHeader = document.querySelector(".studbudHeader");
let planningIconHolder = document.querySelector("#planningIconHolder");
let practiceIconHolder = document.querySelector("#practiceIconHolder");
let studbudMainSec = document.querySelector(".studbudMainSec");
let topAllWrapper = document.querySelector(".topAllWrapper");
function practiceClick(){
    bgColor.classList.add('studbudAllWrapperActive')
    studbudHeader.classList.add('studbudHeaderActive')
    practiceIconHolder.classList.add('studbudIconActive')
    planningIconHolder.classList.remove('studbudIconActive')
    window.scrollTo(studbudMainSec)
    studbudMainSec.classList.add("studbudMainSecActive")
    topAllWrapper.classList.add("topAllWrapperHidden")
}
function planningClick(){
    bgColor.classList.remove('studbudAllWrapperActive')
    studbudHeader.classList.remove('studbudHeaderActive')
    planningIconHolder.classList.add('studbudIconActive')
    practiceIconHolder.classList.remove('studbudIconActive')
    window.scrollTo(studbudMainSec)
    studbudMainSec.classList.add("studbudMainSecActive")
    topAllWrapper.classList.add("topAllWrapperHidden")
}


let landPlanning = document.querySelector(".leftStart");
let landPractice = document.querySelector(".rightStart");
let planningAllWrapper = document.querySelector(".planningAllWrapper")
let practiceMain = document.querySelector(".practiceMain")
landPlanning.addEventListener('click', ()=>{
    planningAllWrapper.classList.add("filterActive");
    practiceMain.classList.remove("filterActive")
})
landPractice.addEventListener('click', ()=> {
    practiceMain.classList.add("filterActive")
    planningAllWrapper.classList.remove("filterActive")
})


function studMainDisplay(){
    
}