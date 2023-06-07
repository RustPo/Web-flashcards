
const form = document.querySelector("#guess");

if(form) {

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const idDeck = event.target.querySelector("h2").id;
    const response = await fetch(`/decks/${idDeck}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        card_id: event.target.querySelector("p").id,
        answer: event.target.guess.value,
      }),
    });
    const resFromBack = await response.json();
    if (resFromBack.correctGuess.status === 309) {
      window.location = `/decks/finish/${idDeck}`;
    } else if (resFromBack.correctGuess.status === 209) {
      event.target.guess.value = "";
  
      const answerP = event.target.querySelector("#hiddenAnswer");
      answerP.innerText = `Вы ответили правильно! 💃
      \n`;
      answerP.style.display = "unset";
      setTimeout(() => {
        answerP.style.display = "none";
      }, 2000);
  
      setTimeout(() => {
        const questionP = event.target.querySelector("p");
        questionP.id = resFromBack.nextQuestion.id;
        questionP.innerText = resFromBack.nextQuestion.question;
      }, 2005);
    } else {
      event.target.guess.value = "";
  
      const answerP = event.target.querySelector("#hiddenAnswer");
      answerP.innerText = `Вы ответили не правильно! 😢
      Правильный ответ: ${resFromBack.correctGuess.guess_correct}
      \n `;
      answerP.style.display = "unset";
      setTimeout(() => {
        answerP.style.display = "none";
      }, 3000);
      setTimeout(() => {
        const questionP = event.target.querySelector("p");
        questionP.id = resFromBack.nextQuestion.id;
        questionP.innerText = resFromBack.nextQuestion.question;
      }, 3005);
    }
  });
}
