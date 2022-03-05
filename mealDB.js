const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clear search fields value
    searchField.value = '';

    if (searchText == '') {

    } else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(response => response.json())
            .then(data => displaySearchResult(data.meals));
    }

}

const displaySearchResult = (meals) => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
            </div>
            <div class="card-footer">
                <small class="text-muted">${meal.strMeasure4}</small>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}


const loadMealDetails = (mealID) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayMealDetails(data.meals[0]));
}


const displayMealDetails = (meal) => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
    <div class="card" class="w-50 mx-auto my-5">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go Details</a>
        </div>
    </div>
    `;
    mealDetails.appendChild(mealDiv);
}