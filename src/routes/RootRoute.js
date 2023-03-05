import { Outlet } from 'react-router-dom';
import MainHeader from "../components/MainHeader";

function RouteRoute() {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    );
}

export default RouteRoute;