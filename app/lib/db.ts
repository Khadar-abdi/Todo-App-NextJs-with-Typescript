import mongoose from 'mongoose'

let connection : typeof mongoose
const url = process.env.MONGOURL as string;
const connectToDB= async()=>{

    try {
        
        
            if(!connection){
                connection = await mongoose.connect(url)
            }
            return connection
    } catch (error) {

        throw new Error(error as any).message
        
    }

}

export default  connectToDB