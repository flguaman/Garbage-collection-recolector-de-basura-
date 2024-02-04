const royal = {
  title: "Objects to escape the war at night",
  owners: "Queen Victoria and Prince Albert",
  carriage: {
    type: "Carriage",
    color: "Black",
    seats: 4,
    box: {
      material: "Wood",
      lock: "Gold",
      bag: {
        material: "Velvet",
        color: "Red",
        lantern: {
          material: "Steel",
          handle: "Ivory",
        },
      },
    },
  },
};

const questions = [
  {
    question: "To escape, what would they need to take?",
    options: ["a) A carriage", "b) The rusty sword", "c) A goose"],
    answer: "a",
    propertyToRemove: "carriage",
  },
  {
    question: "What other object would be useful inside the carriage?",
    options: ["a) A bucket of water", "b) A book of poetry", "c) The box"],
    answer: "c",
    propertyToRemove: "box",
  },
  {
    question: "What is inside the box?",
    options: ["a) The bag", "b) Dead batteries", "c) They don't need batteries"],
    answer: "a",
    propertyToRemove: "bag",
  },
  {
    question: "What is inside the bag to escape at night?",
    options: ["a) Clothes", "b) Lantern", "c) Nothing"],
    answer: "b",
    propertyToRemove: "lantern",
  },
];

let score = 0;
const deletedObjects = [];

function askQuestion(index) {
  if (index >= questions.length) {
    let finalMessage = `Congratulations! You have completed the game. Your score is ${score}/${questions.length}.\n\n`;
    const remainingObjects = Object.keys(royal).filter((key) => key !== "title" && key !== "owners" && royal[key] !== null);
    if (remainingObjects.length > 0) {
      finalMessage += "Remaining objects:\n";
      remainingObjects.forEach((key) => {
        finalMessage += `- ${key}\n`;
      });
    } else {
      finalMessage += "They have no more objects to escape the war.\n";
    }
    document.body.innerHTML = `
      <h1>${royal.title}</h1>
      <p>Owners: ${royal.owners}</p>
      <pre>${JSON.stringify(royal, null, 2)}</pre>
      <p>${finalMessage}</p>
      <p>Deleted objects: ${JSON.stringify(deletedObjects)}</p>
    `;
  } else {
    const currentQuestion = questions[index];
    const response = prompt(`${currentQuestion.question}\n\n${currentQuestion.options.join("\n")}\n\nAnswer:`);
    if (response && response.toLowerCase() === currentQuestion.answer) {
      alert("Correct answer!\n\n");
      score++;
    } else {
      alert("Incorrect answer.\n\n");
      delete royal[currentQuestion.propertyToRemove];
      deletedObjects.push(currentQuestion.propertyToRemove);
      royal[currentQuestion.propertyToRemove] = null;
    }
    askQuestion(index + 1);
  }
}

askQuestion(0);