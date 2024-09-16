import EventForm from "../components/EventForm";
import {useRouteLoaderData} from "react-router-dom";

const EditEventPage = () => {

    const eventDetails = useRouteLoaderData('event-details');

    return (
        <EventForm event={eventDetails} method='patch'/>
    )
}

export default EditEventPage;
