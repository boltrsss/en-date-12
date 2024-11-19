// var backgroundColor = ["rgb(129, 175, 227)", "#1c1d38"];
let activeIndex = 0;
let activeIndexForSecondModal = 0;

let questions = document.getElementById("modal-questions");
let secondDom = document.getElementById("second");
let modalQuestionTop = document.getElementById("modalTop");

fixStepIndicator(activeIndex);

// these are the sample data for question and their corresponding answer

var questionList = [
  {
    id: 1,
    question:
      "Many of these milfs are desperate single moms and cheating wives looking for some fun. They could be your neighbors or someone you know. Do you agree to keep the identity of these milfs a secret?",
    answer: "",
  },
  {
    id: 2,
    question:
      'These milfs have asked us to not allow men that are seeking a "relationship". They only desire quick sex. Not dating. Do you agree to this request?',
    answer: "",
  },
  {
    id: 3,
    question:
      "Do you agree to use a condom when having sex with a partner you meet on our site?",
    answer: "",
  },
  {
    id: 4,
    question:
      "Each day that you check your account you will likely have multiple sex requests from milfs on our site, will you be comfortable with this?",
    answer: "",
  },
];

var questionListForSecondModal = [
  {
    id: 1,
    question: "What type of body turns you on?",
    answerList: [
      { id: 1, name: "MILF" },
      { id: 2, name: "Big Boobs" },
      { id: 3, name: "Big Ass" },
      { id: 4, name: "BBW" },
      { id: 5, name: "Skinny" },
      { id: 6, name: "Regular" },
      { id: 7, name: "Other" },
    ],
    checkedAnswer: [],
  },
  {
    id: 2,
    question: "What age of milf fits you best?",
    answerList: [
      { id: 1, name: "18-25" },
      { id: 2, name: "25-32" },
      { id: 3, name: "32-37" },
      { id: 4, name: "37-45" },
      { id: 5, name: "45 and above" },
    ],
    checkedAnswer: [],
  },
  {
    id: 3,
    question: "What type of relationship are you looking for?",
    answerList: [
      { id: 1, name: "One Night Stand" },
      { id: 2, name: "Sex on multiple occasions" },
      { id: 3, name: "Regular sex" },
      { id: 4, name: "Dating" },
      { id: 5, name: "Marriage" },
    ],
    checkedAnswer: [],
  },
  {
    id: 4,
    question: "Distance between you and her?",
    answerList: [
      { id: 1, name: "Within Walking distance" },
      { id: 2, name: "Same city" },
      { id: 3, name: "Nearby cities are OK" },
      { id: 4, name: "Same country" },
      { id: 5, name: "Doesn't matter" },
    ],
    checkedAnswer: [],
  },
  {
    id: 5,
    question: "Thank You.",
    answerList: [],
  },
];

// trigger the content change on click on any part of first page
const contentChangeFunction = (e) => {
  e.stopPropagation();
  let body = document.body;

  let firstPage = document.getElementById("firstPage");
  let secondPage = document.getElementById("secondPage");

  firstPage.style.display = "none";
  secondPage.style.display = "flex";
  // body.style.background = backgroundColor[1];

  questions.innerHTML = questionList[activeIndex].question;
};
firstPage.addEventListener("click", contentChangeFunction);

function fixStepIndicator(n) {
  x = document.getElementsByClassName("step");

  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");

    if (i === n) {
      x[n].className += " active";
    }

    if (i > n) {
      x[i].className.replace("active", "");
    }
  }
}

// function that handles the yes no click event

function yesNoHandler(aggree) {
  if (activeIndex > 2) {
    var thirdPageContent = document.getElementById("thirdPageContent");

    let activeRadioContent =
      questionListForSecondModal[activeIndexForSecondModal];

    var sampleDom = document.createElement("div");
    var modalButtonDom = document.getElementById("modalButtons");
    var thirdPageChild = document.getElementById("thirdPageContentChild");
    var letButton = document.getElementById("leftButton");
    var rightButton = document.getElementById("rightButton");
    var leftButtonContainer = document.getElementById("leftButtonContainer");
    var thirdPageContentChoose = document.getElementById(
      "thirdPageContentChoose"
    );

    questions.style.display = "none";
    thirdPageContent.style.display = "flex";

    var NextContainer = document.createElement("div");
    var nextImageContainer = document.createElement("div");

    var nextImage = document.createElement("img");
    nextImageContainer.appendChild(nextImage);
    nextImage.setAttribute("src", "./image/next.png");

    NextContainer.innerHTML = "<div>Next</div>";

    NextContainer.appendChild(nextImageContainer);
    nextImage.className = "nextButtonImage";
    secondDom.insertBefore(thirdPageContent, modalButtonDom);
    letButton.innerHTML = `<div id="next"><p>Next</p></div> <div id="nextIcon"><img src="arrowIcon.svg"></img></div>`;

    leftButtonContainer.style.flex = "unset";
    leftButtonContainer.style.padding = "8px 10px";
    leftButtonContainer.style.margin = "0 auto";

    rightButton.style.display = "none";

    // To cretae the checkbox with coreespondng label dynamically

    var datacollect = [];

    var checkBoxAnswerCollect = [];

    for (i = 0; i < activeRadioContent.answerList.length; i++) {
      var checkBox = document.createElement("input");
      var label = document.createElement("label");
      var checkboxContainer = document.createElement("div");
      var label = document.createElement("label");
      checkBox.type = "checkbox";

      checkBox.name = activeRadioContent.answerList[i].name;
      checkBox.value = activeRadioContent.answerList[i].name;

      checkBox.id = activeRadioContent.answerList[i].name;

      datacollect.push(checkBox);

      label.id = activeRadioContent.answerList[i].name;
      label.name = activeRadioContent.answerList[i].name;
      label.value = activeRadioContent.answerList[i].name;
      label.className = "customCheckbox";
      label.htmlFor = activeRadioContent.answerList[i].name;
      label.textContent = activeRadioContent.answerList[i].name;
      checkboxContainer.appendChild(checkBox);
      checkboxContainer.appendChild(label);
      checkboxContainer.className = "checkbox-container";
      sampleDom.appendChild(checkboxContainer);
      sampleDom.id = "thirdPageContentChild";
      sampleDom.className = "thirdPage-content-checkBoxList";
    }

    datacollect.forEach((item) => {
      item.addEventListener("change", (el) => {
        if (el.target.checked) {
          questionListForSecondModal[
            activeIndexForSecondModal - 1
          ].checkedAnswer.push(el.target.name);
        }
      });
    });

    if (activeIndexForSecondModal === 0) {
      thirdPageContent.append(thirdPageChild);

      thirdPageChild.replaceWith(sampleDom);
    } else if (activeIndexForSecondModal === 4) {
      thirdPageContentChoose.remove();

      // var aTag = document.createElement("a");
      // aTag.setAttribute("href", "https://tkr.1ondate.com/cool.php?lp=1");
      // aTag.innerHTML = "<p>Continue</p>" + '<img src="arrowIcon.svg"></img>';

      // // NextContainer = aTag;

      // NextContainer.innerHTML = aTag;

      // letButton.innerHTML = aTag.innerHTML;

      // if (activeIndexForSecondModal === 4) {
      //   letButton.addEventListener("click", () => {
      //     aTag.click();
      //   });
      // }

      if (activeIndexForSecondModal >= 4) {
        document.getElementById("next").style.display = "none";
        letButton.style.display = "none";
        document.getElementById("nextIcon").style.display = "none";
        document.getElementById("continueButton").style.display = "flex";
      }

      // for thank you paragraph on last section

      thirdPageChild.innerHTML =
        "<p>Based on your answers you may now see our list and photos of milfs who are in your area. Please keep their identity a secret</p>" +
        "<p> Click on the 'Continue' button bellow to join our site and begin searching for milfs who live near you</p>";
    } else {
      thirdPageChild.replaceWith(sampleDom);
    }

    // to change the question content

    modalQuestionTop.innerHTML =
      questionListForSecondModal[activeIndexForSecondModal].question;
    activeIndexForSecondModal = activeIndexForSecondModal + 1;
  }

  // To get the user choosed option

  if (activeIndex < 4) {
    if (aggree === 1) {
      questionList[activeIndex].answer = "yes";
      activeIndex = activeIndex + 1;
    } else if (aggree === -1) {
      questionList[activeIndex].answer = "no";
      activeIndex = activeIndex + 1;
    }

    questions.innerHTML = questionList[activeIndex].question;
  }

  fixStepIndicator(activeIndex);
}
