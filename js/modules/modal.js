export default function modal() {

  const btnOpen = document.querySelectorAll('.open-modal')
  const closeBtn = document.querySelector('.modal .close-modal')
  const modalWrapper = document.querySelector('.modal')

  closeBtn?.addEventListener('click', ()=> {
    modalWrapper.classList.remove('modal-active')
  })

  modalWrapper?.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if(!e.target.classList.contains('modal-active')) return
    modalWrapper.classList.remove('modal-active')
  })
  
  btnOpen?.forEach(link => {
    link.addEventListener('click', () => {
      modalWrapper.classList.add('modal-active')
    })
  })

}
