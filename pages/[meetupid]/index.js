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
