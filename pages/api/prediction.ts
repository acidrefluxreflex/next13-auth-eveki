import nc from "next-connect";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const APIs = [
  "https://hf.space/embed/izumo/Loyal-AI-Core/+/api/predict",
  "https://hf.space/embed/izumo/Loyal-AI-Core-2/+/api/predict",
  "https://hf.space/embed/izumo/Loyal-AI-Core-3/+/api/predict",
];

var rand = Math.floor(Math.random() * APIs.length);
var url = APIs[rand];

const handler = nc().post(async (req: NextApiRequest, res: NextApiResponse) => {
  const post_comentarios = req.body;
  const response = await axios.post(url, post_comentarios);
  //console.log(response.data);
  res.json(response.data);
});

export default handler;
