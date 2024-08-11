const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5200;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const client = new MongoClient(process.env.DB_URI);

client.connect()
  .then(() => {
    console.log('Connected to MongoDB');
    const db = client.db('JobPortal');
    const jobCollections = db.collection('users');

    // Post a job
    app.post('/post-job', async (req, res) => {
      const body = req.body;
      body.createdAt = new Date();
      console.log('Data to be inserted:', body); // Log the data being inserted

      try {
        const result = await jobCollections.insertOne(body);
        console.log('Insert result:', result); // Log the result
        if (result.insertedId) {
          return res.status(200).send(result);
        } else {
          return res.status(404).send({
            message: "Cannot insert, try again later",
            status: false,
          });
        }
      } catch (error) {
        console.error("Error inserting job:", error.message);
        res.status(500).send({ message: "Internal Server Error", status: false });
      }
    });

    // Get all jobs
    app.get('/all-jobs', async (req, res) => {
      const jobs = await jobCollections.find({}).toArray();
      res.send(jobs);
    });

    //get single job using id
    app.get("/all-jobs/:id", async(req, res) => {
      const id = req.params.id;
      const job = await jobCollections.findOne({
        _id: new ObjectId(id)
      })
      res.send(job)
    })


    //get jobs by email
    app.get("/myJobs/:email", async (req,res) => {
       // console.log(req.params.email)
       const jobs = await jobCollections.find({postedBy : req.params.email }).toArray();
       res.send(jobs)
    }) 


     // Delete a job
    app.delete("job/:id", async(req, res) =>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const result = await jobCollections.deleteOne(filter);
      res.send(result)
    })

    // Update a Job
    app.patch("/update.job/:id", async(req, res) => {
      const id = req.params.id;
      const jobDate = req.body;
      const filter = {_id: new objectId(id)};
      const options = {upsert: true};
      const updateDoc = {
        $set:{
          ...jobData
        },
      };

      const result = await jobsCollections.updateOne(filter, updateDoc, options)
      res.send(result)
    })
  


    app.listen(port, () => {
      console.log(`Connected to database, on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
  });
