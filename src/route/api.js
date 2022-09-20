import express from "express";
import APIController from "../controllers/APIController";

let router = express.Router();

const initAPIRoute = (app) => {
  router.get("/res", APIController.getResponse);

  return app.use("/api/v1/", router);
};

export default initAPIRoute;
