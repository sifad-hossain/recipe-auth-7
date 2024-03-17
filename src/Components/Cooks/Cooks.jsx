import PropTypes from 'prop-types';

const Cooks = ({ item, handleAddPrepare }) => {
    const { recipe_id, recipe_name, preparing_time, calories } = item || {};

    return (
        <div className=' flex justify-around mb-4'>
           <ol className=' list-decimal'>
           <li className=' list-inside'>{recipe_name}</li>
           </ol>
            <p>{preparing_time}</p>
            <p>{calories}</p>
            <button onClick={() => handleAddPrepare(recipe_id, item)} className='btn btn-accent
             text-base w-20 h-9  '>preparing</button>

        </div>
    );
};

Cooks.propTypes = {
    cooks: PropTypes.object
}
export default Cooks;