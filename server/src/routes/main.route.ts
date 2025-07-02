import { Router } from "express";
import UserRoute from "./user.route";
import search from "../modules/search";
import DemandRoute from "./demand.route";
import FavoriteRoute from "./favorite.route";

const MainRoute = Router();
MainRoute.use("/user", UserRoute);
MainRoute.get("/search", search);
MainRoute.use("/demand", DemandRoute);
MainRoute.use("/favorite", FavoriteRoute);

export default MainRoute;