import { Router } from "express";
import favorite from "../modules/favorite.services";
import AuthenticateUser from "../utils/AuthenticateUser";

const FavoriteRoute = Router();

FavoriteRoute.post("/", AuthenticateUser, favorite.AddFavorite);
FavoriteRoute.get("/", AuthenticateUser, favorite.GetFavorite);
FavoriteRoute.delete("/", AuthenticateUser, favorite.RemoveFromFavorite);

export default FavoriteRoute;