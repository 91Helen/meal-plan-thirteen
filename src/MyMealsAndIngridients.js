const MyMealsAndIngridients =({selectedDay, updateDay}) => {
   
   
   if(!selectedDay) return <p>Plan your week ahead of time!</p>

    const editMyMeal = (myInput,value) => {
      updateDay({
    ...selectedDay,
     [myInput] :value
})
    }
   

   return <div className="whole-plan">
     
<input
type="text"
className="myInput"
placeholder='Today is ....'
id = 'title'
value={selectedDay.title}
onChange= {(e) => editMyMeal('title', e.target.value)}
/>

<textarea
placeholder = 'Write your meal plan here'
id="mealForADay"
value={selectedDay.mealForADay}
onChange= {(e) => editMyMeal('mealForADay', e.target.value)}
/>

<textarea
placeholder='List of ingredients'
id="ingredients"
value = {selectedDay.ingredients}
onChange= {(e) => editMyMeal('ingredients', e.target.value)}
/>
        </div>   
}

export default MyMealsAndIngridients;
