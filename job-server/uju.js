
const express = require('express');
require ("dotenv").config();
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");

const port = process.env.PORT || 9000;

// Log environment variables to check if they are loaded correctly
console.log('PORT:', process.env.PORT);
console.log('DB_URI:', process.env.DB_URI);

//middleware
app.use(express.json())
app.use(cors())


// connect to MongoDB
mongoose.connect(process.env.DB_URI)
.then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// create db
 //const db = client.db("JobPortal")
// const jobscollections = db.collection("users")

// Define the job collection
const jobCollections = mongoose.connection.collection('jobs');

//Post a job
app.post('/post-job', async(req, res) => {
  const body = req.body;
  body.createAt = new Date();
  console.log('Insert result:', result);

  try{
  const result = await jobCollections.insertOne(body);
  console.log('Insert result:', result);
  if(result.insertedId) {
    return res.status(200).send(result);
  }else {
    return res.status(404).send({
      message:"can not insert try again later",
      status: false
    });
  } 
}catch (error) {
  console.error("Error inserting job:", error.message);
  res.status(500).send({ message: "Internal Server Error", status: false });
}
});

// get all jobs
app.get('/all-jobs', async(req, res) => {
  const jobs = await jobCollections.find({}).toArray()
  res.send(jobs)
})

app.listen(port, () => {
  console.log(`Connected to database, on port ${port}`)

})