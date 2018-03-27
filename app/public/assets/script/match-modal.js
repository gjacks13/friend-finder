const modalController = {
  _changeWindowLocation() {
    window.location = "http://localhost:8080/";
  },

  _clearModal() {
    document.getElementById("match-modal-body").innerHTML = "";
  },

  displayErrorModal(errorMsg) {
    const modalBody = document.getElementById("match-modal-body");
    let modalBodyContent = document.createElement("div");
    
    let errorNode = document.createElement("p");
    errorNode.appendChild(document.createTextNode(errorMsg));

    modalBodyContent.appendChild(errorNode);
    modalBody.appendChild(modalBodyContent);

    document.getElementById("match-modal-close-btn").addEventListener("click", (e) => {
      this.closeModal();
    });

    document.getElementById("match-modal-close-x").addEventListener("click", (e) => {
      this.closeModal();
    });

    // show modal
    $('#match-modal').modal('show'); 
  },

  displayModal(name, picturePath) {
    const modalBody = document.getElementById("match-modal-body");
    let modalBodyContent = document.createElement("div");
    
    let matchName = document.createElement("p");
    matchName.appendChild(document.createTextNode(name));

    let matchImage = document.createElement("img");
    matchImage.setAttribute("src", picturePath);
    matchImage.setAttribute("class", "friend-img");

    modalBodyContent.appendChild(matchName);
    modalBodyContent.appendChild(matchImage);
    modalBody.appendChild(modalBodyContent);

    document.getElementById("match-modal-close-btn").addEventListener("click", (e) => {
      this._changeWindowLocation();
    });

    document.getElementById("match-modal-close-x").addEventListener("click", (e) => {
      this._changeWindowLocation();
    });

    // show modal
    $('#match-modal').modal('show'); 
  },

  closeModal() {
    // hide modal
    $('#match-modal').modal('hide'); 
    this._clearModal();
  }
}