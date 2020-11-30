 import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
 import reducer from './store/reducer'
 import logger from './store/middleware/logger'
 import toast from './store/middleware/toast'
 import api from './store/middleware/api'

 export default function(){
     return configureStore({
         reducer,
         middleware:[
             ...getDefaultMiddleware(),
             logger('Console'),
             toast,
             api
            ],
        });

 }
