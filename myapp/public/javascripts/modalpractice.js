var parentModal = document.querySelector('.modal-parent'),
    openBtn = document.querySelector('button'),
    welcome = document.querySelector('.welcome');
    X = document.querySelector('.X');

openBtn.addEventListener('click', openModal);

function openModal() {
    parentModal.style.display = 'block';
    welcome.style.filter = 'blur(10px)';

}
X.addEventListener('click', closeModal);
function closeModal() {
    parentModal.style.display = 'none';
    welcome.style.filter = 'blur(0px)';
}
/*One way for window click closing modal is down there which is just commented 
parentModal.addEventListener('click', closeModal);
*/
//another way for widow click closing modal is as follows
parentModal.addEventListener('click', closeModalforWindow);
function closeModalforWindow(e) {
    if(e.target.className == 'modal-parent') {
        parentModal.style.display = 'none';
        welcome.style.filter = 'blur(0px)';
    }
}