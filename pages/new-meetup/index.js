import { useRouter } from 'next/router';
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";
import Head from "next/head";

function Newmeetuppage() {
  const router = useRouter();
  async function addMeetupHandler(enetredMeetupData) {
    //console.log(enetredMeetupData);
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enetredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title>Add a New Meetups</title>
        <meta
          name="description"
          content="Add your own Meetups"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}
export default Newmeetuppage;
