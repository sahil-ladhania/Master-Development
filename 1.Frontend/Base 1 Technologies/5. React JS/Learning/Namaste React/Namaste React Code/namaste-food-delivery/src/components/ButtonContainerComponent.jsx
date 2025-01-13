import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog.jsx";
import { Filter, SortAsc, Truck, Star, Leaf, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

function ButtonContainerComponent() {
    return (
        <>
            <div className="space-x-2 flex flex-wrap mb-8">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                            <Filter className="mr-2 h-4 w-4"/>
                            Filter
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogTitle className="text-lg font-semibold">Filter Options</DialogTitle>
                        <DialogDescription className="mt-2 space-y-4">
                            <div>
                                <h3 className="text-md font-semibold">Ratings</h3>
                                <select className="w-full mt-1 p-2 border rounded">
                                    <option value="4.0">4.0+</option>
                                    <option value="4.5">4.5+</option>
                                    <option value="5.0">5.0</option>
                                </select>
                            </div>
                            <div>
                                <h3 className="text-md font-semibold">Veg or Nonveg</h3>
                                <div className="flex space-x-4 mt-1">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2"/>
                                        Veg
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2"/>
                                        Non-Veg
                                    </label>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-md font-semibold">Delivery Time</h3>
                                <select className="w-full mt-1 p-2 border rounded">
                                    <option value="15">15 mins</option>
                                    <option value="30">30 mins</option>
                                    <option value="45">45 mins</option>
                                </select>
                            </div>
                        </DialogDescription>
                        <div className="flex justify-end mt-4">
                            <Button className="bg-orange-600 text-white hover:bg-orange-700">Apply</Button>
                        </div>
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                            <SortAsc className="mr-2 h-4 w-4"/>
                            Sort By
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogTitle className="text-lg font-semibold">Sort Options</DialogTitle>
                        <DialogDescription className="mt-2 space-y-4">
                            <div>
                                <h3 className="text-md font-semibold">Delivery Time</h3>
                                <select className="w-full mt-1 p-2 border rounded">
                                    <option value="asc">Shortest First</option>
                                    <option value="desc">Longest First</option>
                                </select>
                            </div>
                            <div>
                                <h3 className="text-md font-semibold">Rating</h3>
                                <select className="w-full mt-1 p-2 border rounded">
                                    <option value="asc">Lowest First</option>
                                    <option value="desc">Highest First</option>
                                </select>
                            </div>
                            <div>
                                <h3 className="text-md font-semibold">Cost</h3>
                                <select className="w-full mt-1 p-2 border rounded">
                                    <option value="lowtohigh">Low to High</option>
                                    <option value="hightolow">High to Low</option>
                                </select>
                            </div>
                        </DialogDescription>
                        <div className="flex justify-end mt-4">
                            <Button className="bg-orange-600 text-white hover:bg-orange-700">Apply</Button>
                        </div>
                    </DialogContent>
                </Dialog>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Truck className="mr-2 h-4 w-4"/>
                    Fast Delivery
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Star className="mr-2 h-4 w-4"/>
                    Rating 4.0+
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Leaf className="mr-2 h-4 w-4"/>
                    Pure Veg
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    <IndianRupee className="mr-2 h-4 w-4"/>
                    Rs.300-600
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    <IndianRupee className="mr-2 h-4 w-4"/>
                    Less Than Rs.300
                </Button>
            </div>
        </>
    );
}

export default ButtonContainerComponent;