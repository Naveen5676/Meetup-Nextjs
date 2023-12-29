import { Fragment } from "react";
import Meetupdetail from "../../components/meetups/MeetupDetail";

export default function Meetupdetails() {
  return (
    <Meetupdetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
      title="A First meetup"
      address="some street 5 , some city"
      description="the meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { meetupid: "m1" } },
      { params: { meetupid: "m2" } },
      { params: { meetupid: "m3" } },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupID = context.params.meetupid;
  console.log(meetupID);
  return {
    props: {
      meetup: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        id: meetupID,
        title: "A First meetup",
        address: "some street 5 , some city",
        description: "the meetup description",
      },
    },
  };
}
