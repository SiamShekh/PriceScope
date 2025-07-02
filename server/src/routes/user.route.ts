import { Router } from "express";
import user from "../modules/user.services";

const UserRoute = Router();
UserRoute.post("/signup",user.Registration);

export default UserRoute;