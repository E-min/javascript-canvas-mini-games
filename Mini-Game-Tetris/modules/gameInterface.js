const hoverInfo = document.getElementById("info");
const infoContainer = document.querySelector(".container__game-score");

const createInfoBuble = () => {
  // Create the main <div> element with class "info--score"
  const infoScoreDiv = document.createElement("div");
  infoScoreDiv.classList.add("info--score");

  // Create the text node for the first sentence
  const textNode = document.createTextNode(
    "On clearing rows, scores of cubes by color:"
  );

  // Create an array of color-score mappings
  const colorScores = [
    { color: "purple", score: 10 },
    { color: "blue", score: 20 },
    { color: "cyan", score: 30 },
    { color: "green", score: 40 },
    { color: "orange", score: 50 },
    { color: "red", score: 60 },
    { color: "yellow", score: 70 },
  ];

  // Create a <br> element
  const br = document.createElement("br");

  // Append the first sentence to the main <div>
  infoScoreDiv.appendChild(textNode);

  // Append the line break (<br>) element to the main <div>
  infoScoreDiv.appendChild(br);

  // Iterate through the color-score mappings and create <em> and <br> elements for each
  colorScores.forEach((colorScore) => {
    const em = document.createElement("em");
    em.textContent = colorScore.color + ": " + colorScore.score + " points";
    infoScoreDiv.appendChild(em);
    infoScoreDiv.appendChild(br.cloneNode());
  });

  // Append the main <div> to the document body
  infoContainer.appendChild(infoScoreDiv);
};
//create info buble event listeners
hoverInfo.addEventListener("mouseenter", () => {
  createInfoBuble();
});
hoverInfo.addEventListener("mouseleave", () => {
  const infoScoreDiv = document.querySelector(".info--score");
  infoContainer.removeChild(infoScoreDiv);
});
