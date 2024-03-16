import PropTypes from 'prop-types';

const Cooks = ({item}) => {
    const {recipe_name, preparing_time, calories} = item||{};
    console.log(recipe_name);
    return (
        <div>
            <h3>{recipe_name}</h3>
            <p>{preparing_time}</p>
            <p>{calories}</p>
        </div>
    );
};

Cooks.propTypes ={
    cooks: PropTypes.object
}
export default Cooks;