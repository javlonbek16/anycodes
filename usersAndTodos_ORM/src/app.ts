import { modules } from './start/modules';
import { run } from './start/run';

import express, { Application } from 'express';

const app: Application = express();
modules(app)
run(app)





