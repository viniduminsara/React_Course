import PageContent from "../components/PageContent";
import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    let title = 'An error occurred';
    let message = 'Something went wrong!';

    if (error.status === 500){
        message = error.message;
    }

    if (error.status === 404){
        title = 'Not Found!';
        message = 'Could not find resource or page.'
    }

    return (
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
    )
}

export default ErrorPage;
