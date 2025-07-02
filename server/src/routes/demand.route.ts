import { Router } from "express";
import demand from "../modules/most-demand.services";

const DemandRoute = Router();
DemandRoute.post("/", demand.AddFavorite);
DemandRoute.get("/", demand.GetDemandedProduct);

export default DemandRoute;