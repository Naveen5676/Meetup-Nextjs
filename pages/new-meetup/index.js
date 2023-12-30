import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function newmeetuppage(){
    const router = useRouter();
    async function addMeetupHandler(enetredMeetupData){
        //console.log(enetredMeetupData);
        const res = await fetch('/api/new-meetup',{
            method: 'POST',
            body: JSON.stringify(enetredMeetupData),
            headers:{
                'Content-Type':'application/json'
            }
        });

        const data = await res.json();
        console.log(data);

        router.push('/')

    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}
export default newmeetuppage