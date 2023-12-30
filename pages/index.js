import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 5, 12345 Some City",
//     description: "This is a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some address 10, 12345 Some City",
//     description: "This is a second meetup!",
//   },
// ];

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React meetups</title>
        <meta
          name="description"
          content="Browase a huge list of highly active react meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

// this fucntion will run during build process and when revalidaet is specefied in sec
export async function getStaticProps() {
  //fecth data from api

  const client = await MongoClient.connect(
    "mongodb+srv://new-user31:EXEY2T9sVmiwh1Nm@cluster0.pepc9yq.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray(); //find will return all they collection and to array to get they data in array

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(), //tostring is used to convert an object to string,
      })),
    },
    //revalidate will re-render this page after 10 sec
    revalidate: 10,
  };
}

//this fucntion will not run during build process but insted on will run on they server not in they client
// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;
// //fetch data from api
// return {
//   props:{
//     meetups:DUMMY_MEETUPS
//   }
// }
// }
