const express = require("express");
const validateBody = require("../../middleware/validateBody");
const ctrl = require("../../controllers/usersController");
const { schema } = require("../../models/user");
const authenticate = require("../../middleware/authentification");

const router = express.Router();

router.post("/register", validateBody(schema.registerSchema), ctrl.register);

router.post("/login", validateBody(schema.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/:id/subscription",
  authenticate,
  validateBody(schema.subscriptionSchema),
  ctrl.subscription
);

module.exports = router;
