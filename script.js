const buttonSave = document.querySelector('.btn_save');
const containerToast = document.querySelector('.container_alert');
const progress = document.querySelector('.progress_bar');

const alerts = {
  sucess: () => {
    containerToast.classList.add('success');
    progress.classList.add('ativo');

    setTimeout(() => {
      containerToast.classList.remove('success');
    }, 3000);
  },
};

const toastingSave = () => {
  alerts.sucess()
};

buttonSave.addEventListener('click', toastingSave);
