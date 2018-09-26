import DashboardPage from "./components/Dashboard/index";
import CategoryPage from "./components/Category/index";
import ProductPage from "./components/Product/product";
import InsertCategoryPage from "./components/Category/insert";

export default[
    { path: "/", component : DashboardPage},
    { path: "/categories", component : CategoryPage},
    { path: "/products", component : ProductPage},
    { path: "/categories/insert", component : InsertCategoryPage},
];