import { api } from "../services/api";

const taskAPi = {
    getAllTasks: async () => {
       const { data } = await api.get("/tasks") 
       return data
    },
    
    postTask: async (task: models.Task) => {
        const { data } = await api.post("/tasks", task)
        return data
    },
    
    updateTask: async (task: Partial<models.Task>, taskId: number) => {
        const { data } = await  api.patch(`tasks/${taskId}`, task)
        return data
    },
    
    deleteTask: async (taskId: number) => {
        const { data } = await api.delete(`tasks/${taskId}`)
        return data
    }
}

export default taskAPi