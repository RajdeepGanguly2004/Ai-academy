// import { API } from "../backend";
import axios from "axios";
const API = 'https://app.nowsupport.ai/api/v1/';

export const answerGpt = async (test) => {
  const config = {
    method: "post",
    url: `${API}chatgpt/`,
    data:{
        text: test.searching,
        conv_id: "",
        conversation: 0,
        new_chat: true,
    },
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axios(config);
};
