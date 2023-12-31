
// fetching the datas
fetch("./faqs-data.json")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((data) => {
      // create the accordions
      const accordion = document.createElement("div");
      accordion.className = "accordion";
      const accordionQuestion = document.createElement("div");
      accordionQuestion.className = "accordion-question";
      const questionTitle = document.createElement("h2");
      questionTitle.appendChild(document.createTextNode(data.question));
      accordionQuestion.appendChild(questionTitle);
      const questionIcon = document.createElement("img");
      questionIcon.className = "question-icon";
      questionIcon.src = data.icon;
      accordionQuestion.appendChild(questionIcon);
      accordion.appendChild(accordionQuestion);
      const accordionAnswer = document.createElement("div");
      accordionAnswer.className = "accordion-answer";
      const answerParagraph = document.createElement("p");
      answerParagraph.appendChild(document.createTextNode(data.answer));
      accordionAnswer.appendChild(answerParagraph);
      accordion.appendChild(accordionAnswer);
      document.querySelector(".faqs-container").appendChild(accordion);

      // accordion functionality
      accordionQuestion.addEventListener('click', () => {
        // I just a need a true / false
        let x = accordionQuestion.classList.toggle('fake-toggle-i-need-another-solution');

        if(x){
          accordionAnswer.style.maxHeight = accordionAnswer.scrollHeight + 'px'
          questionIcon.src = 'assets/images/icon-minus.svg';
        }else{
          accordionAnswer.style.maxHeight = 0;
          questionIcon.src = 'assets/images/icon-plus.svg';
        }
      });

    })
  );
