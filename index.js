capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const dictionary = (word) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd43f97539fmsh341c574ee79664cp145caejsne6d056dd153d',
            'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
    };

    fetch('https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=' + word, options)
        .then(response => response.json())
        .then((response) => {
            // console.log(response.list[0].word)
            spinn.style.display = "none";
            wordheading.innerHTML = capitalizeFirstLetter(response.list[0].word)
            // console.log(list)
            addEles(response)
        })
        .catch(err => console.error(err));
}

const addEles = (response) => {
    if(document.getElementById("searchResult").innerHTML===""){
        // document.getElementById("searchResult").innerHTML = "";
        for (let i = 0; i < response.list.length; i++) {
            document.getElementById("searchResult").innerHTML += `<div class="col-sm-6">
            <h4 class="fw-semibold mb-0">Word : ${capitalizeFirstLetter(response.list[i].word)}</h4>
            <p class="text-muted"><small class="text-muted">Definition</small> : ${response.list[i].definition}</p>
            <p class="text-muted"><small class="text-muted">Definition by</small> : ${response.list[i].author}</p>

            </div>`;
        }
    } else{
        document.getElementById("searchResult").innerHTML = "";
        for (let i = 0; i < response.list.length; i++) {
            document.getElementById("searchResult").innerHTML += `<div class="col-sm-6">
            <h4 class="fw-semibold mb-0">Word : ${capitalizeFirstLetter(response.list[i].word)}</h4>
            <p class="text-muted"><small class="text-muted">Definition</small> : ${response.list[i].definition}</p>
            <p class="text-muted"><small class="text-muted">Definition by</small> : ${response.list[i].author}</p>

            </div>`;
        }
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    spinn.style.display = "block";
    dictionary(search.value);
})