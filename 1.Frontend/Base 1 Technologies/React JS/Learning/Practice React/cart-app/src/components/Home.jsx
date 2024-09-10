import { CartState } from "../context/Context.jsx";
import SingleProduct from "./SingleProduct.jsx";
import Filters from "./Filters.jsx";

function Home() {
    const { state: { products } } = CartState();
    const { state: { cart } } = CartState();
    console.log(products);
    console.log(cart);

    return (
        <div className="flex">
            {/* Filters Tab on Left */}
            <div className="w-64">
                <Filters />
            </div>

            {/* Products List */}
            <div className="flex-1 p-4 bg-gray-100 min-h-screen">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
                    {
                        products.map((product) => (
                            <SingleProduct key={product.id} prod={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;