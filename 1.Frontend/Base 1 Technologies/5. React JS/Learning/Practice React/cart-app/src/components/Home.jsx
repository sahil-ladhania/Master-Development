import { CartState } from "../context/Context.jsx";
import SingleProduct from "./SingleProduct.jsx";
import Filters from "./Filters.jsx";

function Home() {
    const {
        state: { products } , productState : {byStock , byFastDelivery , searchQuery , sort}
    } = CartState();

    const transformProducts = () => {
        let sortedProducts = products;
        if(sort){
            sortedProducts.sort((a,b) => {
                sort === 'lowToHigh' ? a.price - b.price : b.price - a.price;
            })
        }
        if(!byStock){
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }
        if(byFastDelivery){
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
        }
        if(searchQuery){
            sortedProducts = sortedProducts.filter((prod) =>
                prod.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        return sortedProducts;
    }
    const myProd = transformProducts();

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
                        myProd.map((product) => (
                            <SingleProduct key={product.id} prod={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;