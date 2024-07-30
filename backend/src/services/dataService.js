const { Actor, HttpAgent } = require('@dfinity/agent');
const { idlFactory } = require('../../declarations/data_preprocessing');

const agent = new HttpAgent();
const dataPreprocessingActor = Actor.createActor(idlFactory, { agent, canisterId: process.env.DATA_PREPROCESSING_CANISTER_ID });

exports.preprocessData = async (data) => {
    try {
        const normalizedData = await dataPreprocessingActor.normalizeData([data.cases, data.deaths, data.recoveries]);
        const cleanedData = await dataPreprocessingActor.removeOutliers(normalizedData, 2.5);

        return {
            ...data,
            normalizedCases: cleanedData[0],
            normalizedDeaths: cleanedData[1],
            normalizedRecoveries: cleanedData[2]
        };
    } catch (error) {
        console.error('Error preprocessing data:', error);
        throw error;
    }
};