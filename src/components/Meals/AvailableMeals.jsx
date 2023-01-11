import React from 'react';
import MealItem from "./MealItem/MealItem.jsx";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
    {
        id: 'm5',
        name: 'Pasta',
        description: 'Italian pasta',
        price: 14.99,
    }
];
const AvailableMeals = () => (
    <section>
        <div className="row">
            {DUMMY_MEALS.map(meal => (
              <div className="col-md-6 col-lg-4 col-xl-3 my-2"  key={meal.id}>
                  <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
              </div>
            ))}
        </div>
    </section>
);

export default AvailableMeals;

