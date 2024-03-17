import PropTypes from 'prop-types';

const Cooks = ({ item, handleAddPrepare }) => {
    const { recipe_id, recipe_name, preparing_time, calories } = item || {};
    
    
    return (
        <div className=' flex justify-around list-decimal'>
            <li>{recipe_name}</li>
            <li>{preparing_time}</li>
            <li>{calories}</li>
            <button onClick={() =>handleAddPrepare(recipe_id, item)} className='btn btn-accent'>preparing</button>

        </div>
    );
};

Cooks.propTypes = {
    cooks: PropTypes.object
}
export default Cooks;