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



//reading list function starts here

const Confirm = {
    open (options) {
        options = Object.assign({}, {
            title: '',
            message: '',
            okText: 'Confirm',
            cancelText: 'Cancel',
            onok: function () {},
            oncancel: function () {}
        }, options);
        
        const html = `
            <div class="confirm">
                <div class="confirm__window">
                    <div class="confirm__titlebar">
                        <span class="confirm__title">${options.title}</span>
                    </div>
                    <div class="confirm__content">${options.message}</div>
                    <div class="confirm__buttons">
                        <button class="confirm__button confirm__button--cancel">${options.cancelText}</button>
                        <button class="confirm__button confirm__button--ok confirm__button--fill">${options.okText}</button>
                    </div>
                </div>
            </div>
        `;

        const template = document.createElement('template');
        template.innerHTML = html;

        // Elements
        const confirmEl = template.content.querySelector('.confirm');
        const btnOk = template.content.querySelector('.confirm__button--ok');
        const btnCancel = template.content.querySelector('.confirm__button--cancel');

        confirmEl.addEventListener('click', e => {
            if (e.target === confirmEl) {
                options.oncancel();
                this._close(confirmEl);
            }
        });

        btnOk.addEventListener('click', () => {
            options.onok();
            this._close(confirmEl);
        });

        [btnCancel].forEach(el => {
            el.addEventListener('click', () => {
                options.oncancel();
                this._close(confirmEl);
            });
        });

        document.body.appendChild(template.content);
    },

    _close (confirmEl) {
        confirmEl.classList.add('confirm--close');

        confirmEl.addEventListener('animationend', () => {
            document.body.removeChild(confirmEl);
        });
    }
};




function togglePopup1(){
    document.getElementById("popup-1").classList.toggle("active");
}
function togglePopup2(){
    document.getElementById("popup-2").classList.toggle("active");
}


let addBtn1 = document.querySelector('.addBtn1');
showNotes();
addBtn1.addEventListener('click', function (e) {
    let addText = document.querySelector('#taskInput').value;
    let description1 = document.querySelector("#description1").value
    // let date1 = document.querySelector("#date1").value
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push([addText,description1]);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addText.value = '';
    description1.value = '';
    console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = '';
    notesObj.forEach(function (element, index) {
        html +=  `<li class="taskLi">
                    <div class="liMainWrap">
                    <h3>${element[0]}</h3>
                    <p>${element[1]}</p>
                    <div class="deleteOption" id='${index}' onclick='deleteNote(this.id)'><i class="fas fa-minus-circle"></i></div>
                    </div>
                    </li>`;
    });
    let notesElm = document.getElementById('taskUl');
    if(notesObj.length != 0){
        notesElm.innerHTML = html+`<li onclick="togglePopup1()" style="list-style: none;"><span><i class="fas fa-plus" style="margin-right: 10px;"></i>New Item</span></li>`;
    }
    else {
        notesElm.innerHTML = `<li onclick="togglePopup1()" style="list-style: none;"><span><i class="fas fa-plus" style="margin-right: 10px;"></i>New Item</span></li>`
    }
}
function deleteNote(index){
    Confirm.open({
        title: `<i class="fas fa-info-circle"></i>`,
        message: `<h3>Are you sure you want to delete this entry?</h3><p>You can't undo this action</p>`,
        onok: () => {
            console.log('this is del', index);
            let notes = localStorage.getItem('notes');
            if (notes == null) {
                notesObj = []
            }
            else {
                notesObj = JSON.parse(notes)
            }
            notesObj.splice(index, 1);
            localStorage.setItem('notes', JSON.stringify(notesObj));
            showNotes();
        }
      })
        
}