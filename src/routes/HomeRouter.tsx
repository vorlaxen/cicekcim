import Layout from "@/components/layout/Layout";
import Contact from "@/pages/Contact/Contact";
import Home from "@/pages/Home/Home";

export const homeRoutes = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true, element: <Home />
            },
            {
                path: "/contact-us", element: <Contact />
            },
        ],
    }
];
