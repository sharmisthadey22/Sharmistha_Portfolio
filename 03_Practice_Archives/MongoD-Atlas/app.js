import { MongoClient } from "mongodb";

const url = "mongodb+srv://sharmisthdecodes:shar1994<db_password>@cluster0.4tppys1.mongodb.net/?appName=Cluster0";
const dbName = "StudentDB";

async function connectDB() {
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        
        return db;
    } catch (error) {
        console.error("Connection failed", error);
    }
}

async function run() {
    const client = await connectDB();
    const db = client.db(dbName);
    const collection = db.collection("student");

    const studentData = await collection.find({}).toArray();
    console.log(studentData);
}

run();