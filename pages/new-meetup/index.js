import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function newmeetuppage(){
    function addMeetupHandler(enetredMeetupData){
        console.log(enetredMeetupData);
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}
export default newmeetuppage