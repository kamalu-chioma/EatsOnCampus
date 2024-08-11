import { Food } from './app/components/shared/models/food';

export const sample_foods: Food[] = [
    {
        id: '1',
        name: 'Grilled Salmon',
        price: 15.99,
        tags: ['seafood', 'grilled'],
        favorite: true,
        stars: 4,
        imageUrl: 'assets/grilled_salmon.PNG',
        origins: ['Norway', 'Canada'],
        cookTime: '20 minutes'
    },
    {
        id: '2',
        name: 'Caprese Salad',
        price: 9.99,
        tags: ['salad', 'vegetarian'],
        favorite: false,
        stars: 3,
        imageUrl: 'assets/caparese-salad.PNG',
        origins: ['Italy'],
        cookTime: '10 minutes'
    },
    {
        id: '3',
        name: 'Beef Burger',
        price: 12.49,
        tags: ['burger', 'beef'],
        favorite: true,
        stars: 4.5,
        imageUrl: 'assets/Beef_burger.PNG',
        origins: ['USA', 'Australia'],
        cookTime: '15 minutes'
    },
    {
        id: '4',
        name: 'Vegetable Stir Fry',
        price: 11.29,
        tags: ['stir fry', 'vegetarian'],
        favorite: false,
        stars: 3.5,
        imageUrl: 'assets/veggy_stir_fry.PNG',
        origins: ['China', 'Thailand'],
        cookTime: '12 minutes'
    },
    {
        id: '5',
        name: 'Chocolate Cake',
        price: 7.99,
        tags: ['dessert', 'chocolate'],
        favorite: true,
        stars: 4.7,
        imageUrl: 'assets/chocolate-cake.PNG',
        origins: ['France', 'Belgium'],
        cookTime: '30 minutes'
    }
];
