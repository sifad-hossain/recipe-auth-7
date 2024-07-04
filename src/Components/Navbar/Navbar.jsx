import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="mx-auto w-5/6">

            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">Recipe Calories</Link>
                </div>

                <div className=" mx-[250px]  ">
                    <ul className="menu menu-vertical lg:menu-horizontal  rounded-box gap-x-7">
                        <Link to="/">Home</Link>
                        <li>Recipes</li>
                        <li>About</li>
                        <Link to="/signIn">SignIn</Link>
                        <Link to="/signUp">SignUp</Link>
                    </ul>
                </div>


                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img className="bg-green-600" alt="Tailwind CSS Navbar component" src="https://i.ibb.co/rwt3WzB/login.png" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Navbar;