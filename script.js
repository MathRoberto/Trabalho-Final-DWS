const buttonModal = document.querySelector(".leiaMais");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".fechar")


buttonModal.onclick = () => {
      
  modal.style.display = "flex";
};

closeModal.onclick = () => {
      
  modal.style.display = "none";
};


