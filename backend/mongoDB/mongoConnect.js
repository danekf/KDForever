//init .env into process.env for DB_URI
require("dotenv").config();

const { MongoClient } = require("mongodb");

//connect to mongoDB at DB URI supplied
const client = new MongoClient(process.env.DB_URI);

async function getConfirmedGuests() {
  try {
    const database = client.db('GuestInfo');
    const guests = database.collection('Guests');

    //Query for all guests confirmed accepted and add to an array.
    const query = { accepted: true };
    const guest = await guests.find(query).toArray();

    console.log(guest);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
getConfirmedGuests().catch(console.dir);
