import express, { Application, Request, Response } from "express";
import { Users } from "./entities/User.entity";
import { Todo } from "./entities/Todo.entity";
import { UserRepo } from "./repositories/User.repo";
import { TodoRepo } from "./repositories/Todo.repo";
import { myDataSource } from "./database/connection";
import cors from "cors";
import stripe from "stripe";
import { SubsRepo } from "./repositories/Subs.repo"

const stripeService = new stripe(
  "sk_test_51NXatrJinvaPgVXfZUk09leKGOFFydKOi17Micbt1Yy1c4rHpgP1SPPAGZCPxeYuLSc4Gp4vuAFM59s6l5DbvwA700588QE9kX",
  { apiVersion: "2022-11-15" }
);

const app: Application = express();

app.use(express.json());
app.use(cors());



app.post("/subs", async (req, res) => {
  let { amount, title } = req.body;
  try {
    const subs = await SubsRepo.create({
      amount,
      title
    });
    console.log("Subscription", subs);
    res.json({
      message: "Subscription created successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Create Subscription Failed",
      success: false,
    });
  }
});


app.post("/subs/:id", async (req, res) => {
  const { id } = req.params;
  let { amount, title } = req.body;
  try {
    const subs = await SubsRepo.findOne({
      where: { id },
    });
    SubsRepo.save({ amount });
    console.log("Subscription", subs);
    res.json({
      message: "Subscription edited successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Edit Subscription Failed",
      success: false,
    });
  }
});

app.post("/payment", cors(), async (req, res) => {
  let { amount, id, user_id } = req.body;
  try {
    const payment = await stripeService.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Payment",
      payment_method: id,
      confirm: true,
    });

    const user = await UserRepo.findOne({ where: { id: user_id } });
    user!.balance = user?.balance + amount;

    if (user) {
      await UserRepo.save(user);
    }

    console.log("Payment", payment);
    res.json({
      message: "Payment was successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
});

app.get("/users", async (req: Request, res: Response): Promise<void> => {
  const users: Users[] = await UserRepo.find({
    relations: {
      subs: true,
    },
  });

  res.json({ users });
});


app.post("/users", async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  const user: Users = UserRepo.create({ username, password });
  await UserRepo.save(user);

  res.json({ user });
});

const bootstrap = async (): Promise<void> => {
  await myDataSource.initialize();

  app.listen(4000, () => {
    console.log(4000);
  });
};

bootstrap();
