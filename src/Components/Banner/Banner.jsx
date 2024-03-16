

const Banner = () => {
    return (
        <div className=" mx-auto w-5/6">


            <div className=" w-[100%] h-[630px] bg-no-repeat object-cover " style={{ backgroundImage: 'url(https://i.ibb.co/Wz2PDPN/Rectangle-1.png)' }}>
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" mt-56">
                        <h1 className=" text-5xl font-bold mx-auto">Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className="mt-8">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
                        <div className=" flex gap-5 ml-[250px] mt-4">
                            <button className="btn btn-success text-black">Explore Now</button>
                            <button className="btn btn-outline text-white">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;


