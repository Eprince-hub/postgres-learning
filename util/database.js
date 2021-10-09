import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

// // // this line below will Read in the environment variables
// // // in the .env file , making it possible to connect to postgresSQL

dotenvSafe.config();

// the line below connects us to postgresSQL

const sql = postgres();

sql` SELECT 1;`.then((result) => console.log(result)); // testing the database

// getting all the products from the database

export async function getProducts() {
  const products = await sql`
  SELECT * FROM products;
  `;
  return products.map((product) => {
    return camelcaseKeys(product);
  });
}

/*
// then we go to the server side props and use the function to get all users as follows:
// const {getUsers} = await import('../../util/database)

// and then assign it to a variable as follows:
// const users = await getUsers()
// we are doing this to align it with the variable we already have in the get serverside props
// to match and don't break our code.


// also need to do the same thing in our dynamic pages where we get the single users as follows:
// in other to do this we will need to make a function that will get single users so that we dont
// import all the users from the database at once so we do it as follows:


export async function getUser(id) {
  const users = await sql`
  SELECT
  *
 FROM
 users
 WHERE id = ${id}
  `;

  return camelcaseKeys(users[0])
}


// and then we use the above created function as so:
const {getUser}= await import(../../util/database);

const singleUser = await getUser(context.query.userId);


// and also do it in every page where we are getting users with the server side props from the database:

*/

// I don't need the below data again because i am getting the data now from the database.
/* export const productsData = [
  {
    id: '1',
    name: 'MacBook',
    price: 1400,
    image: 'https://i.imgur.com/aSAQnVC.jpg',
  },
  {
    id: '2',
    name: 'MacBook',
    price: 7400,
    image: 'https://i.imgur.com/aSAQnVC.jpg',
  },
  {
    id: '3',
    name: 'MacBook',
    price: 4400,
    image: 'https://i.imgur.com/aSAQnVC.jpg',
  },
  {
    id: '4',
    name: 'MacBook',
    price: 4400,
    image: 'https://i.imgur.com/aSAQnVC.jpg',
  },
  {
    id: '5',
    name: 'MacBook',
    price: 4400,
    image: 'https://i.imgur.com/aSAQnVC.jpg',
  },
  {
    id: '6',
    name: 'MacBook',
    price: 4400,
    image: 'https://i.imgur.com/aSAQnVC.jpg',
  },
  {
    id: '7',
    name: 'MacBook',
    price: 4400,
    image: 'https://i.imgur.com/aSAQnVC.jpg',
  },
  {
    id: '8',
    name: 'MacBook',
    price: 4400,
    image: 'https://i.imgur.com/aSAQnVC.jpg',
  },
  {
    id: '9',
    name: 'MacBook',
    price: 4400,
    image: 'https://i.imgur.com/aSAQnVC.jpg',
  },
  {
    id: '10',
    name: 'MacBook',
    price: 4400,
    image: 'https://i.imgur.com/aSAQnVC.jpg',
  },
];
 */
