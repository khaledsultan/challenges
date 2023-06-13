console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    let response = await fetch(url);
    response = await response.json();
    let values = response.results[2].skin_color;
    console.log(response);
    console.log(values);
  } catch (error) {
    return;
  }
}

fetchData();
