import PropTypes from 'prop-types';



const Food = ({ food, handleAddToCook }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = food;

    return (


        <div className=' space-y-2 bottom-5  w-[400px]'>
            <img src={recipe_image} alt={`cover picture of the title {recepie_name}`} />
            <h4 className=' text-2xl font-semibold'>{recipe_name}</h4>
            <p>{short_description}</p>
            <p className=' text-lg font-medium'>ingredients:{ingredients.length}</p>
            <ul>
                {ingredients.map(i => <li>{i}</li>)}
            </ul>
            <div className=' flex gap-5'>
                <h3>{preparing_time}</h3>
                <p>{calories}</p>
            </div>
            <button onClick={() => handleAddToCook(food)} className="text-lg w-32 h-14 bg-green-600 text-white relative overflow-hidden group z-10 hover:text-white duration-1000 rounded-full"><span className="absolute bg-green-600size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-green-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Want to Cook</button>
           
        </div>


    );
};
Food.PropTypes = {
    food: PropTypes.object.isRequired,
    handleAddToCook: PropTypes.func
}
export default Food;