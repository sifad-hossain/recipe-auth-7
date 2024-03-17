import Cooks from "../Cooks/Cooks";

const Current = ({ sifat, handleAddPrepare, current }) => {
    return (
        <div>
            <h2 className="border-b-2 border-dotted mt-4 text-2xl font-semibold flex justify-around  mb-4" >Currently cooking:{current?.length} </h2>

            <table className=" w-[80%] mx-auto  ">
                <thead>
                    <tr className="bg-blue-gray-100 text-gray-700">
                        <th className="py-3 px-4 text-left ">Name</th>
                        <th className="py-3 px-4 text-left">Time</th>
                        <th className="py-3 px-4 text-left">Calories</th>
                    </tr>
                </thead>
                 
            </table>
                    {
                        current.map(index => <tr key={index.recepie_id} className="bg-blue-gray-100 text-gray-700">
                            <div className="flex justify-around  w-[100%]">
                            <ol  className="list-decimal ">
                            <li className="py-3 px-4 text-left list-inside">{index.recipe_name}</li>
                            </ol>
                            <p className="py-3 px-4 text-left">{index.preparing_time}</p>
                            <p className="py-3 px-4 text-left">{index.calories}</p>
                            </div>
                        </tr>)
                    }

           
           
        </div>
    );
};

export default Current;