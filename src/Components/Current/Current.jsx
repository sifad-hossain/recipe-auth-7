import Cooks from "../Cooks/Cooks";

const Current = ({ sifat, handleAddPrepare }) => {
    const { recipe_name, preparing_time, calories } = Current;



    return (
        <div>
            <h2 className="border-b-2 border-dotted mt-4 text-2xl font-semibold flex justify-around  mb-4" >Currently cooking: </h2>

            <table className=" w-[80%] mx-auto">
                <thead>
                    <tr className="bg-blue-gray-100 text-gray-700">
                        <th className="py-3 px-4 text-left ">Name</th>
                        <th className="py-3 px-4 text-left">Time</th>
                        <th className="py-3 px-4 text-left">Calories</th>
                    </tr>
                </thead>
            </table>


            <Cooks handleAddPrepare={handleAddPrepare}></Cooks>
           
        </div>

    );
};

export default Current;