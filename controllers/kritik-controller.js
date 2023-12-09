import express from 'express';
import  {createKritik}  from "../services/Kritik.js";

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
export const PostKritik = async (request, response) => {
    const { name, kritik } = request.body

    const critic = await createKritik(name, kritik)

    response.json(critic)
}