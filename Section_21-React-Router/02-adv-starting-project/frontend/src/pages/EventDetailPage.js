import {json, redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {

    const eventDetails = useRouteLoaderData('event-details');

    return (
        <EventItem event={eventDetails}/>
    )
}

export default EventDetailPage;

export const loader = async ({ request, params }) => {

    const response = await fetch('http://localhost:8080/events/' + params.eventId);

    if (!response.ok) {
        throw json({ message: 'Could not fetch event details.'}, {status: 500});
        // return { isError: true, message: 'Could not fetch events.'}
    } else {
        const resData = await response.json();
        return resData.event;
    }
}

export const action = async ({ request, params }) => {
    const response = await fetch('http://localhost:8080/events/' + params.eventId, {
        method: request.method,
    });

    if (!response.ok) {
        throw json({ message: 'Could not delete event.'}, {status: 500});
        // return { isError: true, message: 'Could not fetch events.'}
    }

    return redirect('/events');
}
