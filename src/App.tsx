import "./App.css";
import img1 from "./assets/img1.jpg";
import cart from "./assets/icon-cart.svg";

function App() {
    return (
        <div className="bg-cream h-screen items-center flex justify-center ">
            <div className="flex w-2/3 h-1/2   justify-center flex-col lg:flex-row ">
                <div className="">
                    <img
                        src={img1}
                        className="object-cover h-full w-full aspect-video object-center lg:aspect-auto center"
                        alt="photo"
                    />
                </div>
                <div className="bg-white height flex flex-col justify-center p-5">
                    <p className="font-Montserrat tracking-widest mb-5">
                        Perfume
                    </p>
                    <p className=" font-Fraunces text-4xl font-extrabold leading-10">
                        Gabrielle Essence
                        <br /> Eau De Parfum
                    </p>
                    <p className="my-5 font-Montserrat text-gray-500">
                        A floral, solar and voluptuous interpretation compose
                        <br />
                        by Olivier Polge, Perfumer-Creator for the House of
                        CHANEL.
                    </p>
                    <div className="mb-5 flex items-center gap-4">
                        <p className="font-Fraunces text-4xl  items-center font-extrabold text-cyan">
                            $149.99
                        </p>
                        <span className="line-through text-gray-500 text-[14px]">
                            $169.99
                        </span>
                    </div>
                    <div className="bg-cyan cursor-pointer ease-in duration-300 transition flex hover:bg-black items-center justify-center w-full p-5 rounded-xl">
                        <img src={cart} alt="cart" />
                        <p className="text-white font-Montserrat">
                            Add to cart
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
