import express from "express";

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
export const getArticle = async (req, res) => {
    try{
        const url = 'https://newsapi.org/v2/everything?'
        +`q="Self Love"&`
        +'from=2023-11-30&'
        +'to=2023-11-30&'
        +'language=en&'
        +'sortBy=relevancy&'
        +'pageSize=10&'
        +'apiKey=acf763dd12cb4aba89fab8f09dfbbac3';

        const response = await fetch(url);
        const data = await response.json();
        res.json({data});
    } 
    catch {
        console.error("There is an error while fetching the topic", error)
        response.status(500).json({
            error: "Internal Server Error"
        })
    }
}