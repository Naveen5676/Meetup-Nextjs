import { MongoClient } from "mongodb";
// /api/new-meetup

//res- response objects req- request objects
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://new-user31:EXEY2T9sVmiwh1Nm@cluster0.pepc9yq.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);//insert one takes an object as input 

    console.log(result);

    client.close();

    res.status(201).json({message : 'meetup inserted!'});
  }
  
}
export default handler;
