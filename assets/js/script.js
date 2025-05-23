const $modalBtns = document.querySelectorAll('._modal-open');
const $modals = document.querySelectorAll('._modal');
const $body = document.body;
function openModal(e) {
    $body.classList.add('lock')
    e.classList.add('_active');
}
function closeModal(e) {
    if (e.target.classList.contains('modal-close') || e.target.closest('.modal-close') || e.target.classList.contains('modal-bg')) {
        e.target.closest('._modal').classList.remove('_active');
        $body.classList.remove('lock')
    }
}
$modalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let data = e.target.dataset.modalOpen;
        $modals.forEach(modal => {
            if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest('._modal-open').dataset.modalOpen) {
                openModal(modal)
            }
        })
    })
})
$modals.forEach(modal => {
    modal.addEventListener('click', e => {closeModal(e)})
})
window.addEventListener('keydown', e => {
    $modals.forEach(modal => {
        if (e.key === 'Escape' && modal.classList.contains('_active')) {
            modal.classList.remove('_active');
            $body.classList.remove('lock')
        }
    })
})
document.querySelector('.burger').addEventListener('click', function () {
	this.classList.toggle('active')
	document.querySelector('.nav').classList.toggle('open')
})