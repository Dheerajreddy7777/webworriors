const menuBtn=document.getElementById("menuBtn")
const sidebar=document.getElementById("sidebar")
const closeBtn=document.getElementById("closeBtn")
const overlay=document.getElementById("overlay")

function openMenu(){
    sidebar.classList.add("active")
    overlay.classList.add("active");
    menuBtn.setAttribute("aria-expanded", "true");
}
function closeMenu() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
}
menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});


const searchForm = document.getElementById("search");
const foodInput = document.getElementById("foodname");
const mealResults = document.getElementById("mealResults");
const message = document.getElementById("message");
const resultsTitle = document.getElementById("resultsTitle");

searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const foodName = foodInput.value.trim();

    if (foodName === "") {
        return;
    }

    const mealsSection = document.getElementById("mealsSection");
    mealsSection.classList.add("show");

    try {
        const url =
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(foodName)}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch meals");
        }

        const data = await response.json();

        if (!data.meals) {
            message.textContent = "No meals found. Try another name.";
            document.getElementById("mealsSection")
                .scrollIntoView({ behavior: "smooth" });
            return;
        }

        message.textContent = `Found ${data.meals.length} meal(s).`;

        data.meals.forEach(function (meal) {
            const card = document.createElement("div");
            card.classList.add("meal-card");
            card.dataset.mealId = meal.idMeal;

            const image = document.createElement("img");
            image.src = meal.strMealThumb;
            image.alt = meal.strMeal;
            image.loading = "lazy";

            const title = document.createElement("h3");
            title.textContent = meal.strMeal;

            card.appendChild(image);
            card.appendChild(title);

            mealResults.appendChild(card);
        });

        document.getElementById("mealsSection")
            .scrollIntoView({ behavior: "smooth" });

    } catch (error) {
        console.error(error);
        message.textContent =
            "Something went wrong. Please try again.";
    }
});


const categoriesGrid = document.getElementById("categoriesGrid");
const categoryMessage = document.getElementById("categoryMessage");

async function loadCategories() {
    categoryMessage.textContent = "Loading categories...";

    try {
        const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }

        const data = await response.json();

        categoriesGrid.innerHTML = "";

        data.categories.forEach(function (category) {
            const item = document.createElement("div");
            item.classList.add("category-item");
            item.dataset.category = category.strCategory;

            const image = document.createElement("img");
            image.src = category.strCategoryThumb;
            image.alt = category.strCategory;
            image.loading = "lazy";

            const label = document.createElement("span");
            label.textContent = category.strCategory;

            item.appendChild(image);
            item.appendChild(label);

            categoriesGrid.appendChild(item);
        });

        categoryMessage.textContent = "";

    } catch (error) {
        console.error(error);
        categoryMessage.textContent =
            "Unable to load categories. Please try again.";
    }
}

loadCategories();

async function loadMealsByCategory(categoryName) {
    const mealsSection = document.getElementById("mealsSection");

    mealsSection.classList.add("show");


    resultsTitle.textContent = categoryName.toUpperCase() + " MEALS";
    mealResults.innerHTML = "";
    message.textContent = "Loading meals...";


    closeMenu();

    try {
        const url =
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(categoryName)}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch category meals");
        }

        const data = await response.json();

        if (!data.meals) {
            message.textContent = "No meals found in this category.";
            return;
        }

        message.textContent = `Found ${data.meals.length} meal(s).`;

        data.meals.forEach(function (meal) {
            const card = document.createElement("div");
            card.classList.add("meal-card");
            card.dataset.mealId = meal.idMeal;

            const image = document.createElement("img");
            image.src = meal.strMealThumb;
            image.alt = meal.strMeal;
            image.loading = "lazy";

            const title = document.createElement("h3");
            title.textContent = meal.strMeal;

            card.appendChild(image);
            card.appendChild(title);

            mealResults.appendChild(card);
        });

        mealsSection.scrollIntoView({ behavior: "smooth" });

    } catch (error) {
        console.error(error);
        message.textContent =
            "Unable to load meals. Please try again.";
    }
}

const categoryList = document.getElementById("categoryList");

categoryList.addEventListener("click", function (event) {
    const link = event.target.closest("a[data-category]");

    if (!link) {
        return;
    }

    event.preventDefault();

    const categoryName = link.dataset.category;

    loadMealsByCategory(categoryName);
});

categoriesGrid.addEventListener("click", function (event) {
    const categoryItem = event.target.closest(".category-item");

    if (!categoryItem) {
        return;
    }

    const categoryName = categoryItem.dataset.category;

    loadMealsByCategory(categoryName);
});



const mealDetails = document.getElementById("mealDetails");
const mealDetailsContent = document.getElementById("mealDetailsContent");
const backBtn = document.getElementById("backBtn");

mealResults.addEventListener("click", function (event) {
    const card = event.target.closest(".meal-card");

    if (!card) {
        return;
    }

    const mealId = card.dataset.mealId;

    if (mealId) {
        loadMealDetails(mealId);
    }
});

async function loadMealDetails(mealId) {
    mealDetails.classList.add("show");
    mealDetailsContent.textContent = "Loading meal details...";

    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch meal details");
        }

        const data = await response.json();
        const meal = data.meals?.[0];

        if (!meal) {
            mealDetailsContent.textContent = "Meal details not found.";
            return;
        }

        const ingredients = [];

        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`]?.trim();
            const measure = meal[`strMeasure${i}`]?.trim();

            if (ingredient) {
                ingredients.push(`${measure || ""} ${ingredient}`.trim());
            }
        }

        mealDetailsContent.innerHTML = `
            <div class="meal-detail-content">
                <h2>${meal.strMeal}</h2>

                <p>
                    ${meal.strCategory || ""}
                    ${meal.strArea ? " • " + meal.strArea : ""}
                </p>

                <img
                    class="meal-detail-image"
                    src="${meal.strMealThumb}"
                    alt="${meal.strMeal}"
                >

                <h3>Ingredients</h3>
                <ul>
                    ${ingredients.map(item => `<li>${item}</li>`).join("")}
                </ul>

                <h3>Instructions</h3>
                <p>${meal.strInstructions || "No instructions available."}</p>
            </div>
        `;

        mealDetails.scrollIntoView({ behavior: "smooth" });

    } catch (error) {
        console.error(error);
        mealDetailsContent.textContent =
            "Unable to load meal details. Please try again.";
    }
}

backBtn.addEventListener("click", function () {
    mealDetails.classList.remove("show");

    document.getElementById("mealsSection")
        .scrollIntoView({ behavior: "smooth" });
});
