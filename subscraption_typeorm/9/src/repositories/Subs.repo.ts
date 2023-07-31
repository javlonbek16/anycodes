import {myDataSource} from "../database/connection";
import {Subs} from "../entities/Subscription.entity";
export const SubsRepo = myDataSource.getRepository(Subs);
