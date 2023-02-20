const {
    response
} = require('express')

const stacksModel = require('../dataModels/stacks.model');

const getStacks = (req, res = response) => {
    stacksModel.getStacks().then((data) => {
        res.json(data)
    });
}

const postStacks = (req, res = response) => {
    stacksModel.postStacks(req,res);
}

const deleteStacks = (req, res = response) => {
    stacksModel.deleteStacks(req,res);
}

const updateStacks = (req, res = response) => {
    stacksModel.updateStacks(req,res);
}

module.exports = {
    getStacks,
    postStacks,
    deleteStacks,
    updateStacks    
}