import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// this fucntion will run during build process
export async function getStaticProps() {
  //fecth data from api
  return {
    props: {
      meetups: DUMMY_MEETUPS,
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
