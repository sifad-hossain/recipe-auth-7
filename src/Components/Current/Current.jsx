import Cooks from "../Cooks/Cooks";

const Current = ({sifat, handleAddPrepare}) => {  
    const { recipe_name, preparing_time, calories } = Current;
    

    
    return (
        <div>
            <h2 className="border-b-2 border-dotted mt-4 text-2xl font-semibold">Currently cooking: </h2>
            <Cooks  handleAddPrepare={handleAddPrepare}></Cooks>
            <div className=' flex justify-around list-decimal'>
            <li>{recipe_name}</li>
            <li>{preparing_time}</li>
            <li>{calories}</li>
            </div>
            </div>
        
    );
};

export default Current;