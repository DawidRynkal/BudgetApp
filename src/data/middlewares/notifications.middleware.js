import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notificationMiddleware = () => next => action => {
    if (action.message && (/(.*)_(SUCCESS)/).test(action.type)) {

        toast.success(action.message, {
            position: toast.POSITION.TOP_CENTER
        });
    }

    next(action);
}

export default notificationMiddleware;