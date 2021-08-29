


const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);


    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url).then(res => res.json()).then(data => displaySearchResult(data.meals))

    searchField.value = '';
}

const displaySearchResult = (meals) => {
    const searchResult = document.getElementById('search-result');
    //searchResult.innerHTML = '';
    searchResult.textContent = '';
    meals.forEach(meal => {
        //console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                </div>
        </div>
        `
        searchResult.appendChild(div);
    })
}

const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url).then(res => res.json()).then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = detail => {
    console.log(detail);
    const mealDetail = document.getElementById('meal-detail');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${detail.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${detail.strMeal}</h5>
                <p class="card-text">${detail.strInstructions.slice(0, 250)}</p>
                <a href="${detail.strYoutube}" class="btn btn-success">Go to youtube</a>
            </div>
    `;
    mealDetail.appendChild(div);
}