import { commonAPI } from "./commonAPI";
import SERVER_URL from "./serverURL";

//register
export const registerAPI = async(student)=>{
    return await commonAPI("POST",`${SERVER_URL}/registered`,student,"")
}

//get student details
export const getStudentDetailsAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/get-student-details`,"","")
}