// import { query } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    answer: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session } = req.body;

    if (!prompt) {
        res.status(400).json({ answer: "No prompt provided" });
        return;
    }

    if (!chatId) {
        res.status(400).json({ answer: "No chatId provided" });
        return;
    }

    // ChatGPT Query
    const response = await query(prompt, chatId, model);

    res.status(200).json({ name: "John Doe" });
}