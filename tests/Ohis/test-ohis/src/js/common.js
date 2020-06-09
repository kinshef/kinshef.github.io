let HeadFormGroup = document.querySelectorAll('.head-form-group input');

for(let i=0; i<HeadFormGroup.length; i++){
	HeadFormGroup[i].addEventListener('change', () => {
		if(HeadFormGroup[i].value){
			HeadFormGroup[i].classList.add('activ');
		}
	})
}


let header = document.querySelector('header');
let arrowTop = document.querySelector('.top-top');

document.onscroll = function () {
	if(window.pageYOffset >= 1){
			header.classList.add('fixHead');
		} else {
			header.classList.remove('fixHead');
	}
	if(window.pageYOffset > 600){
		if(arrowTop.style.display == 'none'){
			arrowTop.style.display = 'block';
			setTimeout(() => {arrowTop.style.opacity='1'},50)
		}
	} else {
		if(arrowTop.style.display == 'block'){
			arrowTop.style.opacity='0';
			setTimeout(() => {arrowTop.style.display = 'none';},500)
		}
	}
};


let contentFull = document.querySelectorAll('.contentFull');
let congressProgramItemWrap = document.querySelector('.congressProgramItem');
let congressProgramItem = document.querySelectorAll('.congressProgramItem>div');
let congressProgramItemContainer = document.querySelectorAll('.congressProgramItem .container');

congressProgramItemWrap.addEventListener('click', (e) =>{
	if(e.target && e.target.classList.contains('contentFull')){
		for(let i=0; i<contentFull.length; i++){
			if(contentFull[i] === event.target) {
				let activ = congressProgramItem[i].classList.contains('activ')
				for(let j=0; j<contentFull.length; j++){
					congressProgramItem[j].classList.remove('activ')
					congressProgramItemContainer[j].style.maxHeight= '393px';
				}
				if(!activ){
					congressProgramItemContainer[i].style.maxHeight= congressProgramItemContainer[i].scrollHeight + 'px';
					congressProgramItem[i].classList.add('activ');
				}
			}
		}
	}
})


let congressProgramFullItems = document.querySelectorAll('.congressProgramFull>div');
let activCongressProgram = null;

congressProgramItemWrap.addEventListener('click', (e) =>{
	if(e.target && e.target.tagName=='DIV'){
		for(let i=0; i<contentFull.length; i++){
			if(document.querySelectorAll('.congressProgramItem>div>div:nth-child(4)')[i] === e.target) {
				if(congressProgramFullItems[i].style.display == 'none'){
					activCongressProgram = i;
					congressProgramFullItems[i].style.display = 'block';
					setTimeout(() => {congressProgramFullItems[i].style.opacity='1';congressProgramFullItems[i].style.bottom='0px';},50)
				}
			}
		}
	}	
})


let congressProgramFullWrap = document.querySelector('.congressProgramFull');

congressProgramFullWrap.addEventListener('click', (e) =>{
	if(e.target && e.target.classList.contains('btnExit')){
		for(let i=0; i<contentFull.length; i++){
			if(document.querySelectorAll('.congressProgramFull span.btnExit')[i] === e.target || congressProgramFullItems[i] === e.target) {
				if(congressProgramFullItems[i].style.display == 'block'){
					congressProgramFullItems[i].style.opacity='0';
					congressProgramFullItems[i].style.bottom='500px';
					setTimeout(() => {congressProgramFullItems[i].style.display = 'none';},500)
				}
			}
		}
	}	
})


let title_modal_form_block = document.querySelectorAll('.title_modal_form_block');

congressProgramFullWrap.addEventListener('click', (e) =>{
		if(e.target.classList.contains('title_modal_form') || e.target.classList.contains('fa-hand-pointer') || e.target.tagName=='path'){
			if(title_modal_form_block[activCongressProgram].classList.contains('activ')){
				title_modal_form_block[activCongressProgram].classList.remove('activ');
			} else {
				title_modal_form_block[activCongressProgram].classList.add('activ');
			}
		}
})


let headsPhoneBtn = document.querySelector('.heads-phone');
let headsPhoneInfo = document.querySelector('.headsPhoneInfo');

headsPhoneBtn.addEventListener('click', () =>{
	if(headsPhoneInfo.style.display == 'none'){
		headsPhoneInfo.style.display = 'block';
		setTimeout(() => {headsPhoneInfo.style.opacity='1';headsPhoneInfo.style.bottom='0px';},50)
	}
})

headsPhoneInfo.addEventListener('click', (e) =>{
	if(e.target.classList.contains('btnExit') || headsPhoneInfo === event.target){
		if(headsPhoneInfo.style.display == 'block'){
			headsPhoneInfo.style.opacity='0';
			headsPhoneInfo.style.bottom='500px';
			setTimeout(() => {headsPhoneInfo.style.display = 'none';},500)
		}
	}	
})


let questionsTagItem = document.querySelectorAll('.questions>ul>li>h6');
let questionsItem = document.querySelectorAll('.questions>ul>li>div');
let questionsItemLi = document.querySelectorAll('.questions>ul>li');

document.querySelector('.questions>ul').addEventListener('click', (e) =>{
		if(e.target.tagName == 'H6'){
			for(let i=0; i<questionsTagItem.length; i++){
				if(questionsTagItem[i] === e.target){
					if(questionsItemLi[i].classList.contains('activ')){
						questionsItem[i].style.maxHeight='0px';
						questionsItemLi[i].classList.remove('activ');
					} else {
						questionsItem[i].style.maxHeight= questionsItem[i].scrollHeight + 38 + 'px';
						questionsItemLi[i].classList.add('activ');
					}
				}
			}
		}
})


let leftMeny = document.querySelector('.leftMeny');
let body = document.querySelector('body');
let headBtnMeny = document.querySelector('.headBtnMeny');

headBtnMeny.addEventListener('click', () =>{
	if(body.classList.contains('scrinMeny')){
		body.classList.remove('scrinMeny');
	}else{
		body.classList.add('scrinMeny');
	}
})

leftMeny.addEventListener('click', (e) =>{
	if(e.target && e.target.tagName=='A'){
		e.preventDefault();
			if(body.classList.contains('scrinMeny')){
			body.classList.remove('scrinMeny');
		}else{
			body.classList.add('scrinMeny');
		}
		document.querySelector(leftMeny.getAttribute('href')).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	}
})


let formSectionOptions = document.querySelector('.formSectionOptions');
let sectionOptions = document.querySelector('.sectionOptions');
let receiveProg = document.querySelectorAll('#receive-prog');

sectionOptions.addEventListener('click', (e) =>{
	for(let i=0; i<receiveProg.length; i++){
		if(e.target == receiveProg[i]){
			if(formSectionOptions.style.display == 'none'){
				formSectionOptions.style.display = 'block';
				setTimeout(() => {formSectionOptions.style.opacity='1';formSectionOptions.style.bottom='0px';},50)
			}
		}
	}	
})

sectionOptions.addEventListener('click', (e) =>{
	if(e.target.classList.contains('btnExit') || formSectionOptions === event.target){
		if(formSectionOptions.style.display == 'block'){
					formSectionOptions.style.opacity='0';
					formSectionOptions.style.bottom='500px';
					setTimeout(() => {formSectionOptions.style.display = 'none';},500)
				}
	}	
})










const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener("click", (e)=>{
		e.preventDefault();
		document.querySelector(anchor.getAttribute('href')).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}

