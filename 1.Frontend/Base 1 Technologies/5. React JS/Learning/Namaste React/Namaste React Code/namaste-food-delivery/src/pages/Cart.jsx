import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

function Cart() {
    const cartItems = [
        {
            id: 1,
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/gyjleaxantrzv8uxfqtv',
            name: 'Item 1',
            price: 100,
            qty: 1,
        },
        {
            id: 2,
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/gyjleaxantrzv8uxfqtv',
            name: 'Item 2',
            price: 200,
            qty: 2,
        },
        {
            id: 3,
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/gyjleaxantrzv8uxfqtv',
            name: 'Item 3',
            price: 150,
            qty: 1,
        },
        {
            id: 4,
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/gyjleaxantrzv8uxfqtv',
            name: 'Item 4',
            price: 150,
            qty: 1,
        },
        {
            id: 5,
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/gyjleaxantrzv8uxfqtv',
            name: 'Item 5',
            price: 200,
            qty: 4,
        },
        {
            id: 6,
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/gyjleaxantrzv8uxfqtv',
            name: 'Item 6',
            price: 250,
            qty: 3,
        },
    ];

    return (
        <div className="flex p-6 space-x-6">
            <div className="w-2/3">
                <Table className="border border-gray-200">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Subtotal</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {cartItems.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                </TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>
                                    <input
                                        type="number"
                                        value={item.qty}
                                        className="w-16 p-1 border border-gray-300 rounded"
                                        readOnly
                                    />
                                </TableCell>
                                <TableCell>{item.price} Rs</TableCell>
                                <TableCell>{item.price * item.qty} Rs</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="w-1/3 p-4 bg-slate-200 shadow-lg rounded border border-gray-200">
                <Card className="p-4">
                    <h2 className="text-3xl font-bold mb-4">Cart Summary</h2>
                    <div className="mb-2">
                        <span className="font-semibold">Total Items: </span>
                        <span className="font-semibold text-orange-600">6</span>
                    </div>
                    <div className="mb-4">
                        <span className="font-semibold">Total Price: </span>
                        <span className="font-semibold text-orange-600">1000.Rs</span>
                    </div>
                    <Button className="w-full bg-orange-500 font-lg hover:bg-orange-400" variant="primary">
                        Proceed to Checkout
                    </Button>
                </Card>
            </div>
        </div>
    );
}

export default Cart;