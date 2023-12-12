import {News} from '../model/index.js';

export const readNewsSelfTopic = async () => {
    return await News.findAll({ where: { topics: 'Self Love'}});
}

export const readNewsSocietyTopic = async () => {
    return await News.findAll({ where: { topics: 'Society'}});
}

export const readNewsRelationTopic = async () => {
    return await News.findAll({ where: { topics: 'Relationships'}});
}

export const readNewsIndividual = async (request) => {
    return await News.findOne({ where: { id: request}})
}

export const readNewsRandom = async (request) => {
    return await News.findAll()
}