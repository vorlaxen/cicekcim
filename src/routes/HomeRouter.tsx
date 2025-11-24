import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home/Home";

export const homeRoutes = [
    {
        path: '/',
        element: <Layout/>,
        children: [{ index: true, element: <Home /> }],
    }
];
