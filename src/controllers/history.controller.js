import History from '../models/History'

export const createHistory = async (req,res)=>{
   
    const {user, obs, healthState } = req.body

    const newHistory = new History ({user,obs,healthState});
     
    const historySaved = await newHistory.save()

    res.status(201).json(historySaved)

}

export const getHistory = async (req,res)=>{
   const history= await History.find();
   res.json(history)
}

export const getHistoryById = async (req,res)=>{
   const history=await History.findById(req.params.historyId);
   res.status(200).json(history)
}  

export const updateHistoryById = async (req,res)=>{
 const updatedHistory = await History.findByIdAndUpdate(req.params.historyId,req.body,{
     new: true
 })
 res.status(200).json(updatedHistory);
}

export const deleteHistoryById = async (req,res)=>{
  const {historyId} = req.params;
   await History.findByIdAndDelete(req.params.historyId)
  res.status(204).json();
} 