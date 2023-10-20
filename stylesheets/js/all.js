const toggleMenuBtn = document.querySelector('#toggle-btn');
const body = document.querySelector('body');

// sidebar btn 收合
toggleMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('sidebar-toggled');
})


// delete modal
const modalByDelete = document.querySelector('#deleteModal');

modalByDelete.addEventListener('show.bs.modal', (e) =>{
    const button = e.relatedTarget;
    const orderId = button.dataset.bsOrderId;
    const modalText = modalByDelete.querySelector('#deleteText');

    modalText.textContent = orderId;
})