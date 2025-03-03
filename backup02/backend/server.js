const app=require('./src/app');
const dotenv=require('dotenv')

dotenv.config();
const config=require('./src/config/config')


const port= config.PORT;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})