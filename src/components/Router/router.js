import FirstPage from "../Pages/FirstPage/FirstPage";
import SecondPage from "../Pages/SecondPage/SecondPage";
import Error from "../Pages/Error/Error";

export const routes = [
    {path: '/first-page', component: FirstPage, exact: true},
    {path: '/second-page', component: SecondPage, exact: true},
    {path: '/error', component: Error, exact: true},
]