/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

// Example of adding more items and scenarios
const hasSword = true; // New item added
const hasStaff = false; // Another item
const hasTent = true; // New item for camping
const hasFood = false; // New item for sustenance

// Scenario: You aproach a cave adnd decide to enter it or not.
// If entering the cave, decide if you wish to carry a torch or a sword.

console.log("You approach a dark cave. Do you enter? (yes/no) ");
const enterCave = readline.question().toLowerCase();

if (enterCave === "yes") {
  console.log("The cave entrance is dark and narrow. Do you want to use a torch or a sword? (torch/sword) ");
  const equipmentChoice = readline.question().toLowerCase();

  if (equipmentChoice === "torch" && hasTorch) {
    console.log("You light up the cave with your torch and safely explore its depths.");
  } else if (equipmentChoice === "sword" && hasSword) {
    console.log("You bravely enter the cave with your sword drawn, ready for any danger.  A swarm of bats catches you off guard and you fall to your death in the confusion.");
  } else {
    console.log("You enter the cave unprepared and get lost.");
  }
}

// If you do not enter the cave, you can explore nearby.
// You see a small stream nearby and decide to follow it or you see a large tree and decide to climb it, or you can choose to do nothing and just setup camp.

if (enterCave === "no") {
  
  console.log("You decide to explore the area around the cave.");
  console.log("You see a small stream and a large tree. Do you follow the stream or climb the tree? Or do nothing? (stream/tree)");
  const exploreChoice = readline.question().toLowerCase();

  if (exploreChoice === "stream" && hasMap) {
    console.log("You follow the stream since it's listed on you map and you find a hidden treasure chest at the river's edge!");
  } else if (exploreChoice === "tree" && hasSword) {
    console.log("You climb the tree and get a better view of your surroundings. but your sword weighs you down an a branch snaps, you fall to your death.");
  } else {
    console.log("You decide to stay where you are and setup camp to rest for the night.");
  }
}

// While camping you can opt to eat or sleep make a deicion with an or statement based on inventory.
// You have no food so you must decide to sleep or hunt for food.
// If your hunt is a sucess you will have food to eat and can rest well.
console.log("In order to setup camp you must setup your shelter and find food.");
if (hasTent || hasFood) {
  console.log("You setup your tent but don't have any food to eat. You can either sleep or go hunting for food. (sleep/hunt)");
  const campChoice = readline.question().toLowerCase();

  if (campChoice === "sleep") {
    console.log("You decide to sleep in your tent. You wake up refreshed but hungry.");
  } else if (campChoice === "hunt" && hasFood) {
    const hasFood = true; // Simulating a successful hunt
    console.log("You go hunting and successfully catch some food. You cook it over the campfire and enjoy a hearty meal before sleeping.");
  }
  else if (campChoice === "hunt" && !hasFood) {
    console.log("You go hunting but return empty-handed. You have to sleep on an empty stomach, dreaming of food.");
  } else {
    console.log("You decide to do nothing and end up restless all night.");
  }
}