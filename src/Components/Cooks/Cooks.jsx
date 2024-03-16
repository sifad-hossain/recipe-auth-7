import PropTypes from 'prop-types';

const Cooks = ({ item }) => {
    const { recipe_name, preparing_time, calories } = item || {};
    console.log(recipe_name);
    return (
        <div className=' flex justify-around list-decimal'>
            <li>{recipe_name}</li>
            <li>{preparing_time}</li>
            <li>{calories}</li>
            <button className='btn btn-accent'>preparing</button>
        </div>
    );
};

Cooks.propTypes = {
    cooks: PropTypes.object
}
export default Cooks;