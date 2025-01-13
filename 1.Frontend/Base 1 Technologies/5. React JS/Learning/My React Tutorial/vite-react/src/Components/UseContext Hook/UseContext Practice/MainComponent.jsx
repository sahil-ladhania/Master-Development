import {useContext} from "react";
import {ThemeContext} from "./Context.jsx";

function MainComponent() {
    const {theme , toggleTheme} = useContext(ThemeContext)
    return (
        <>
            <div className="p-80" style={{
                background: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
                height: '100vh'
            }}>
                <p className="mb-6 text-orange-800">Current Theme : {theme}</p>
                <button className="bg-amber-300 p-4 rounded" onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </>
    );
}

export default MainComponent;