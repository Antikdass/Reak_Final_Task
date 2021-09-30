import Users from "../components/users/users";
import Home from "../pages/Home/Home";
import Posts from "../components/posts/posts";
import Info from "../pages/Info/Info";

export const routes = [{
    path: '/',
    component: Home,
    exact: true
},
    {
        path: '/users',
        component: Users,
        exact: true
    },
    {
        path: '/posts',
        component: Posts,
        exact: true
    },
    {
        path: '/users/:id',
        component:Info,
        exact: true
    }
]