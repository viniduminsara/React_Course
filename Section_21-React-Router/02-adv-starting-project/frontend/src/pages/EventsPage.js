import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

function EventsPage() {

    const events = useLoaderData();

    if (events.isError) {
        return <p>{events.message}</p>
    }


    return (
        <>
            <EventsList events={events} />
        </>
    );
}

export default EventsPage;

export const loader = async () => {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not fetch events.'}), {status: 500});
        // return { isError: true, message: 'Could not fetch events.'}
    } else {
        const resData = await response.json();
        return resData.events;
    }
}
