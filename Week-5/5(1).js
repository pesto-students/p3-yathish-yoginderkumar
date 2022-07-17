const urlFromInput = document.getElementById("url");
const displayData = document.getElementById("data");
async function getUsersAsyncAwait() {
  const resultFromApi = await fetch(urlFromInput.value);
  const results = {};
  if (resultFromApi.status !== 200) {
    results[
      "error"
    ] = `Got an error from the API with ${resultFromApi.status} error code`;
  } else {
    const jsonedData = await resultFromApi.json();
    results["data"] = jsonedData;
  }
  return results;
}

async function* fetchUsers() {
  while (true) {
    const results = {};
    let request = await fetch(urlFromInput.value);
    if (request.status !== 200) {
      results[
        "error"
      ] = `Got an error from the API with ${request.status} error code`;
    } else {
      let jsonedData = await request.json();
      results["data"] = jsonedData;
    }
    yield results;
  }
}

const asyncAwaitBtn = document.getElementById("asyncAwait");
const generatorsBtn = document.getElementById("generators");
const getUsersFromGenerator = fetchUsers();

asyncAwaitBtn.addEventListener("click", async function () {
  const { data, error } = await getUsersAsyncAwait();
  displayData.innerHTML = JSON.stringify(data || error);
});

generatorsBtn.addEventListener("click", function () {
  getUsersFromGenerator.next().then(({ value }) => {
    const { data, error } = value;
    displayData.innerHTML = JSON.stringify(data || error);
  });
});
