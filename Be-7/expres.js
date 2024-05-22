import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())

const blogSchema  = new mongoose.Schema({
    title: String, // String is shorthand for {type: String}
    price:Number,
    img:String,
  });
  const BlogModel  = mongoose.model('men', blogSchema);
app.get('/men', async (req, res) => {
    const blog = await BlogModel.find()
  res.send(blog)
})
app.get('/men/:id', async (req, res) => {
    const {id}=req.params
    const blog = await BlogModel.findById(id)
  res.send(blog)
})
app.delete('/men/:id', async (req, res) => {
    const {id}=req.params
    const blog = await BlogModel.findByIdAndDelete(id)
  res.send(blog)
})

app.put('/men/:id', async (req, res) => {
    const {id}=req.params
    const body =req.body
    const blog = await BlogModel.findByIdAndUpdate(id,body)
  res.send(blog)
})

app.post('/men', async (req, res) => {
    const body =req.body
    const blog =  new BlogModel(body)
    await blog.save()
  res.send(blog)
})
mongoose.connect('mongodb+srv://NiyazovAsad:Niyazovesed2004@ourdb.n1ga79r.mongodb.net/')
.then(()=>console.log("connected"))
.catch(()=>console.log("Not connected"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})