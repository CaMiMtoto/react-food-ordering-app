import mealsImage from '../../assets/gnocchi-1d16725.jpg';
import heroImage from '../../assets/hero-img.png';
import {IconToolsKitchen2} from "@tabler/icons";
import MealsSummary from "../Meals/MealsSummary.jsx";

function HomeHero(props) {
    return (
        <div className="py-5 ">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <MealsSummary/>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="hero-img">
                            {/*<img src={} alt="hero-img" class="img-fluid tw-h-52"/>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default HomeHero;