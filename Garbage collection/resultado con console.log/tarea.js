alert("Welcome to 'Escaping the War at Night'!\n\nQueen Victoria and Prince Albert need your help to escape the war.");

const royal = {
  title: "Objects to escape the war at night",
  owners: "Queen Victoria and Prince Albert",
  carriage: {
    type: "Berline",
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
    propertyToDelete: "carriage",
  },
  {
    question: "What other object would be useful inside the carriage?",
    options: ["a) A bucket of water", "b) A book of poetry", "c) The box"],
    answer: "c",
    propertyToDelete: "box",
  },
  {
    question: "What is inside the box?",
    options: ["a) The bag", "b) Bad batteries", "c) No need for batteries"],
    answer: "a",
    propertyToDelete: "bag",
  },
  {
    question: "What is inside the bag to escape at night?",
    options: ["a) Clothing", "b) Lantern", "c) Nothing"],
    answer: "b",
    propertyToDelete: "lantern",
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
      finalMessage += "They no longer have objects to escape from the war.\n";
    }
    alert(finalMessage);
    console.log("Deleted objects:", deletedObjects);
  } else {
    const currentQuestion = questions[index];
    const response = prompt(`${currentQuestion.question}\n\n${currentQuestion.options.join("\n")}\n\nAnswer:`);
    if (response && response.toLowerCase() === currentQuestion.answer) {
      alert("Correct answer!\n\n");
      score++;
    } else {
      alert("Incorrect answer.\n\n");
      delete royal[currentQuestion.propertyToDelete];
      deletedObjects.push(currentQuestion.propertyToDelete);
      royal[currentQuestion.propertyToDelete] = null; 
    }
    askQuestion(index + 1);
  }
}

askQuestion(0);
