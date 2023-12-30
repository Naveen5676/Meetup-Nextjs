import { Fragment } from "react";
import { MongoClient, ObjectId } from "mongodb";
import Meetupdetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";

export default function Meetupdetails(props) {
  return (
    <Fragment>
      <Head>
      <title>{props.meetup.title}</title>
        <meta
          name="description"
          content={props.meetup.description}
        />
      </Head>
    <Meetupdetail
      image={props.meetup.image}
      title={props.meetup.title}
      address={props.meetup.address}
      description={props.meetup.description}
    />
    </Fragment>
  );
}

export async function getStaticPaths() {
  
  const client = await MongoClient.connect(
    "mongodb+srv://new-user31:EXEY2T9sVmiwh1Nm@cluster0.pepc9yq.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, {_id:1}).toArray();

  client.close()
  return {
    fallback: false,
    paths:meetups.map(meetup=>({params:{meetupid: meetup._id.toString()}}))
    //  [
    //   { params: { meetupid: "m1" } },
    //   { params: { meetupid: "m2" } },
    //   { params: { meetupid: "m3" } },
    // ],
  };
}

export async function getStaticProps(context) {
  const meetupID = context.params.meetupid;

  const client = await MongoClient.connect(
    "mongodb+srv://new-user31:EXEY2T9sVmiwh1Nm@cluster0.pepc9yq.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedmeetup = await meetupsCollection.findOne({_id:new ObjectId(meetupID)});//findone is used to find one single object
    //wrap meetupId arounf ObjectId beacuse to convert string to object 
  client.close()
  //console.log(meetupID);
  return {
    props: {
      meetup: {
        id:selectedmeetup._id.toString(),
        title:selectedmeetup.title,
        address:selectedmeetup.address,
        image:selectedmeetup.image,
        description:selectedmeetup.description
      },
    },
  };
}
