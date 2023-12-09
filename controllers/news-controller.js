import express from 'express';
import { readNewsSelfTopic, 
        readNewsSocietyTopic, 
        readNewsRelationTopic } from '../services/News.js';

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
export const getSelfItems = async (request, response) => {

    const newsItems = await readNewsSelfTopic()

    response.status(200).json(newsItems)
}


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
export const getSocietyItems = async (request, response) => {

    const newsItems = await readNewsSocietyTopic()

    response.status(200).json(newsItems)
}


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
export const getRelationItems = async (request, response) => {

    const newsItems = await readNewsRelationTopic()

    response.status(200).json(newsItems)
}