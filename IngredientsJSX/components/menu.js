import Recipe from './recipe'

//A stateless functional component for a Menu of Recipes
const Menu = ({recipes}) =>
<article>
    <header>
        <h1>Recipes!!</h1>
    </header>
    <div className="recipes">
        { recipes.map((recipe,i) =>
            <Recipe key={i} {...recipe} />)
        }
    </div>
</article>

export default Menu