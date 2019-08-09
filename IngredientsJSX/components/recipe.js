import IngredientsList from './ingredientsList'
import Instructions from './instructions'
    
//A stateless functional component for an individual Recipe
const Recipe = ({name, ingredients, steps}) => 
<section id={name.toLowerCase().replace(/   /g, "-")}>
<h1>{name}</h1>
    <IngredientsList list={ingredients} />
    <Instructions title="Cooking instructions" steps={steps}/>
</section>
export default Recipe