import {Router} from 'express'
const router=Router()

import * as historyCtrl from '../controllers/history.controller' 

router.post('/',historyCtrl.createHistory)

router.get('/',historyCtrl.getHistory)

router.get('/:historyId',historyCtrl.getHistoryById)

router.put('/:historyId',historyCtrl.updateHistoryById)

router.delete('/:historyId',historyCtrl.deleteHistoryById)

export default router;

