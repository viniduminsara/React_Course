import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';

function EditEventPage() {
  const data = useRouteLoaderData('event-detail');
  console.log('debug data', data)

  return <EventForm method="patch" event={data.event}/>;
}

export default EditEventPage;
