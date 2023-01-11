import './App.scss'
import Header from './components/Layout/Header'
import HomeHero from "./components/Layout/HomeHero.jsx";
import heroImage from "./assets/hero-img.png";
import AvailableMeals from "./components/Meals/AvailableMeals.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {

    return (
        <>
            <Cart/>
            <div className="tw-bg-no-repeat  tw-bg-right tw-bg-80"
                 style={{backgroundImage: `linear-gradient(rgba(0, 30, 0, 0.8), rgba(0, 10, 0, 0.5)),url(${heroImage})`}}>
                <Header/>
                <HomeHero/>
            </div>
            <div className="container my-3">
                <AvailableMeals/>
            </div>
        </>
    )
}

export default App
