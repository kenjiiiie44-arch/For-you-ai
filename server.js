const express = require("express");
const path = require("path");
const OpenAI = require("openai");

const app = express();
const PORT = process.env.PORT || 3000;
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(express.json({limit:"10mb"}));
app.use(express.static(path.join(__dirname,"public")));

app.post("/api/ask", async (req,res)=>{
  try{
    const question = String(req.body.question || "").trim();
    if(!question) return res.status(400).json({error:"Question is required."});

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
      input: [
        {role:"system", content:"You are For You, a friendly AI study assistant. Explain answers clearly and simply for students. Match the student's language when possible."},
        {role:"user", content:question}
      ]
    });

    res.json({answer: response.output_text || "Sorry, no answer was returned."});
  }catch(err){
    console.error(err);
    res.status(500).json({error:"AI request failed. Check your API key and server settings."});
  }
});

app.listen(PORT,()=>console.log(`For You running on http://localhost:${PORT}`));
