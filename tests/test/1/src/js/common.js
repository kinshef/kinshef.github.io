let languageUser = document.querySelector('.languageUser a');
let languageUserContent = document.querySelector('.languageUser .content');


languageUser.addEventListener('click', () =>{
	if(languageUserContent.classList.contains('activ')){
		languageUserContent.classList.remove('activ');
	}else {
		languageUserContent.classList.add('activ');
	}
});

let headMainMenu = document.querySelectorAll('.headMainMenu>li>div');
let headMainMenuLi = document.querySelectorAll('.headMainMenu>li');
let headMainMenuDiv = document.querySelector('.headMainMenu');


let onMousHeadMenu;
headMainMenuDiv.onmouseover = function(e) {
	if(e.target && e.target.tagName=='LI' && e.type == 'mouseover' && e.target.parentElement.classList.contains('headMainMenu') && onMousHeadMenu != e.target){
		onMousHeadMenu = e.target;
		for(let i=0; i<headMainMenuLi.length; i++){
			if(e.target == headMainMenuLi[i] && e.target.children[1] && e.target.children[1].tagName=='DIV'){
				if(e.target.children[1].getBoundingClientRect().left < 0){
					e.target.children[1].style.left = e.target.children[1].style.left-e.target.children[1].getBoundingClientRect().left+e.target.children[1].offsetLeft+'px'
				}
				if(e.target.children[1].getBoundingClientRect().right > document.documentElement.clientWidth){
					e.target.children[1].style.left = -e.target.children[1].getBoundingClientRect().right + document.documentElement.clientWidth + e.target.children[1].offsetLeft + 'px'
				}
			}
		}
	}
}
