// Make a call to the following endpoint:
// https://breakingbadapi.com/api/characters/6
// Display the name, image and status of the character returned.

const detailsContainer = document.querySelector(".details");

const url = "https://breakingbadapi.com/api/characters/6";

async function characterDisplay() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const data = result[0];
    // for (let i = 0; i < data.length; i++) {
    //   // console.log(results[i].name);
    //   // console.log(results[i].rating);
    //   // console.log(results[i].tags.length);

    //   if (i === 15) {
    //     break;
    //   }

    //   if (
    //     data[i].teamName.startsWith("C") ||
    //     data[i].teamName.startsWith("c")
    //   ) {
    //     continue;
    //   }

    detailsContainer.innerHTML += `<div>
                                      <h3 class="details name">Name: ${data.name}</h3>
                                      <div class="details image" style="background-image: url(${data.img})"></div>
                                      <p class="details status">Status: ${data.status}</p>
                                   </div>`;
    console.log("Success");
    const loader = document.querySelector(".loader");
    loader.classList.remove("loader");
  } catch (error) {
    console.log(error, "An error occurred");
    resultsContainer.innerHTML = "An error occurred when calling the API";
  } finally {
    console.log("Done!");
  }
}
characterDisplay();
