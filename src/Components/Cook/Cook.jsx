import PropTypes from 'prop-types';
import Cooks from '../Cooks/Cooks';
import Current from '../Current/Current';









const Cook = ({ cook, handleAddPrepare}) => {

  



    return (
        <div className="md:w-1/3 items-center text-center  border-2 border-green-600">
            <h2 className=" border-b-2 mt-4 text-2xl font-semibold">Want to cook:{cook?.length}</h2>


            <table className=" w-[80%] mx-auto">
                <thead>
                    <tr className="bg-blue-gray-100 text-gray-700">
                        <th className="py-3 px-4 text-left ">Name</th>
                        <th className="py-3 px-4 text-left">Time</th>
                        <th className="py-3 px-4 text-left">Calories</th>
                    </tr>
                </thead>
            </table>
            {
                cook?.length > 0 && cook?.map(item  => <Cooks key={item?.recipe_id} handleAddPrepare={handleAddPrepare} item={item}></Cooks>)
            }

            <Current></Current>
        </div>

    );
};
Cook.PropTypes = {
    cook: PropTypes.array
}
export default Cook;