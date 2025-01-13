import MenuCardComponent from "@/components/MenuCardComponent.jsx";

function MenuContainerComponent() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <MenuCardComponent />
            <MenuCardComponent />
            <MenuCardComponent />
            <MenuCardComponent />
            <MenuCardComponent />
            <MenuCardComponent />
            <MenuCardComponent />
            <MenuCardComponent />
            <MenuCardComponent />
            <MenuCardComponent />
            <MenuCardComponent />
            <MenuCardComponent />
        </div>
    );
}

export default MenuContainerComponent;