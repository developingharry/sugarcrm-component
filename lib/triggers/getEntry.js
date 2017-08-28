'use strict';

const trigger = require('../baseTrigger');
const sugarCRM = require('../sugarcrm');

exports.process = ProcessTrigger;

async function ProcessTrigger(msg, cfg, snapshot) {
    return await trigger(this, cfg.module, cfg, snapshot);
}

exports.modules = async function getModules(cfg) {
    const instance = new sugarCRM(cfg, this);
    return await instance.getModules();
};