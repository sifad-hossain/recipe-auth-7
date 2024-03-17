import PropTypes from 'prop-types';

const Food = ({ food, handleAddToCook }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = food;

    return (
        <div className=' space-y-2 bottom-5  w-[390px] border-2 border-slate-300 mb-4'>
            <div className=' ml-4 mt-2'>
                <img className=' rounded-2xl' src={recipe_image} alt={`cover picture of the title {recepie_name}`} />
                <h4 className=' text-2xl font-semibold mb-2'>{recipe_name}</h4>
                <p className='mb-2'>{short_description}</p>
                <p className=' text-lg font-medium mb-2'>ingredients:{ingredients.length}</p>
                <ul>
                    {ingredients.map(i => <li>{i}</li>)}
                </ul>
                <div className=' flex gap-5 mb-2'>
                    <div className='flex'>
                        <img className=' w-[25px]' src="../../../public/image/timePlase.png" alt="" />
                        <h3>{preparing_time}</h3>
                    </div>
                    <div className='flex'>
                        <img className='w-[15px]' src="../../../public/image/fire.png" alt="" />
                        <p>{calories}</p>
                    </div>
                </div>
                <button onClick={() => handleAddToCook(food)} className=" mb-2 mt-2 text-base w-28 h-9 bg-green-600 text-white relative overflow-hidden group z-10 hover:text-white duration-1000 rounded-full"><span className="absolute bg-green-600size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-green-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Want to Cook</button>

            </div>
        </div>


    );
};
Food.PropTypes = {
    food: PropTypes.object.isRequired,
    handleAddToCook: PropTypes.func
}
export default Food;