import  router  from './../api/router/index';
import  express,{ Application } from 'express';

export const modules =async(app:Application)=>{
    app.use(express.json());
    app.use(router)
}