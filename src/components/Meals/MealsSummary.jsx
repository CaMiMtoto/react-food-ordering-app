import React from 'react';
import {IconToolsKitchen2} from "@tabler/icons";

const MealsSummary = () => (
    <section className="text-white">
        <h1>
            Yummy, Delicious Food
        </h1>
        <div className="typewriter">
            <h1 className="mb-4 ">
                Delivered To You
            </h1>
        </div>
        <p>
            Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner
            at home.
        </p>
        <p>
            All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
        </p>
        <a href="#" className="btn btn-success rounded-pill px-4 border-2 border-white fw-bold">
            <IconToolsKitchen2 className="me-2"/>
            Order Now
        </a>
    </section>
);

export default MealsSummary;