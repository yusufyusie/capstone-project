import displayMeals from './getMeals.js';
import mealCard from './mealCard.js';

const URL = '';

const mealDisplay = async () => {
    const response = await fetch(URL);
    const likes = await response.json();
  
    const data = await displayMeals();
    data.meals.forEach((meal) => {
      let likeNum = 0;
      likes.forEach((item) => {
        if (item.item_id === meal.idMeal) {
          likeNum = item.likes;
        }
      });
      mealCard(meal.strMeal, meal.idMeal, meal.strMealThumb, likeNum, meal.strTags);
    });
  };
  export default mealDisplay;