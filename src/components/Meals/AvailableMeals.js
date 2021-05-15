import classes from './AvailableMeals.module.css';
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Goan Fish Curry (Xitti Kodi)',
      description: 'The Goan fish curry or the Xitti Kodi is the staple diet of every Goan making it a famous food of Goa',
      price: 180.00,
    },
    {
      id: 'm2',
      name: 'Shark Ambot Tik',
      description: 'Ambot Tik is a Portuguese influenced Goan food!',
      price: 350.00,
    },
    {
      id: 'm3',
      name: 'Feijoada - Red Beans With Pork',
      description: 'This dish is a stew of red beans and pork.',
      price: 200.00,
    },
    {
      id: 'm4',
      name: 'Chicken Xacuti',
      description: 'Chicken Xacuti consists of poppy seeds and Kashmiri red chillies. This is yet another Portuguese influenced famous Goan food',
      price: 230.00,
    },
    {
      id: 'm5',
      name: 'Goan Pork Vindaloo',
      description: '"Vin" comes from the word vinegar and "ahlo" means garlic in Portuguese.',
      price: 300.00,
    },
    {
      id: 'm6',
      name: 'Chicken Cafreal',
      description: 'Cafreal chicken is a spicy green coloured dish that will leave your mouth watering.',
      price: 280.00,
    },
    {
      id: 'm7',
      name: 'Samarachi Kodi',
      description: 'Samarachi Kodi is a dish prepared during the monsoons. It is a dry prawn curry!.',
      price: 180.00,
    },
    {
      id: 'm8',
      name: 'Prawns Xeque Xeque',
      description: 'Prawns Xeque Xeque is an exotic dish of prawns, coconut milk, tomatoes, green chillies and onions.',
      price: 220.00,
    },
    {
      id: 'm9',
      name: 'Crab Xacuti',
      description: 'Crab Xacuti is a famous dish of Goan Food. Preparation of this dish is similar to that of Chicken Xacuti.',
      price: 400.00,
    },
    {
      id: 'm10',
      name: 'Fish Recheado',
      description: '"Recheado" means "stuffed" in Portuguese. Another Portuguese influenced dish that consists of a stuffed pomfret or any other fish with tangy masala and onions.',
      price: 400.00,
    },
  ];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => <MealItem 
    id={meal.id}
    key={meal.id} 
    name={meal.name} 
    desc={meal.description} 
    price={meal.price} />);

   return <section className={classes.meals}>
    <Card>
      <ul>
          {mealsList}
      </ul>
      </Card>
   </section>
};


export default AvailableMeals;