import { useEffect } from "react";
import { useState } from "react";
import Food from "../Food/Food";
import PropTypes from 'prop-types';

const Foods = ({handleAddToCook}) => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('recepies.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h2 className="4xl">Foods {foods.length}</h2>
            <div className=' grid grid-cols-2'>
            {
                foods.map(food => <Food
                    key={food.recipe_id}
                    food={food}
                    handleAddToCook={handleAddToCook}
                    >
                </Food>)
            }
            </div>
        </div>
    );
};
Foods.propTypes = {
    handleAddToCook: PropTypes.func
}
export default Foods;