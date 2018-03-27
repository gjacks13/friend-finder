const getFormData = () => {
  const formData = {};
  const totalResponses = document.querySelectorAll('input[type=radio]:checked');

  if (totalResponses.length === 10) {
    for (let i = 1; i <= totalResponses.length; i++) {
      let name = `q${i}r`;
      let currentAnswer = document.querySelectorAll(`input[name=${name}]:checked`).item(0);
      formData[name] = currentAnswer.value;
    }
  } else {
    // inform the user they did not submit an answer to all the questions
  }
  return formData;
};

document.getElementById("questionaire").addEventListener("submit", function(e){
  e.preventDefault();

  const url = 'http://localhost:8080/api/friends';
  let data = getFormData();
  // The parameters we are gonna pass to the fetch function
  let fetchData = { 
      method: 'POST', 
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
  }
  fetch(url, fetchData)
    .then(response => {
        return response.json();
    })
    .then(response => {
      if (response.error) {
        modalController.displayErrorModal(response.error);
      } else {
        modalController.displayModal(response.name, response.photo);
      }
    });
});