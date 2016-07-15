'use strict';
/* eslint-disable no-underscore-dangle */
const Joi = require('joi');

class Executor {
    /**
     * Constructor for Executor
     * @method constructor
     * @param  {Object}    config Configuration
     * @return {Executor}
     */
    constructor(config) {
        this.config = config;
    }

    /**
     * Validate the config for _start method
     * @method start
     * @param {Object} config               Configuration
     * @param {String} config.buildId       Build id
     * @param {String} config.jobId         Job id
     * @param {String} config.pipelineId    Pipeline id
     * @param {String} config.container     Container
     * @param {String} config.scmUrl        Scm url
     * @param {Function} callback           Function to call when done
     */
    start(config, callback) {
        const schema = Joi.object().keys({
            buildId: Joi.string().required(),
            jobId: Joi.string().required(),
            pipelineId: Joi.string().required(),
            container: Joi.string().required(),
            scmUrl: Joi.string().required()
        });

        const result = Joi.validate(config, schema);

        if (result.error) {
            return callback(result.error);
        }

        return this._start(config, callback);
    }

    /**
     * Start the executor
     * @method _start
     * @param {Object} config               Configuration
     * @param {String} config.buildId       Build id
     * @param {String} config.jobId         Job id
     * @param {String} config.pipelineId    Pipeline id
     * @param {String} config.container     Container
     * @param {String} config.scmUrl        Scm url
     * @param {Function} callback
     */
    _start(config, callback) {
        callback(new Error('not implemented'));
    }

    /**
     * Validate the config for _stop method
     * @method stop
     * @param {Object} config               Configuration
     * @param {String} config.buildId       Build id
     * @param {String} config.jobId         Job id
     * @param {String} config.pipelineId    Pipeline id
     * @param {String} config.container     Container
     * @param {String} config.scmUrl        Scm url
     * @param {Function} callback           Function to call when done
     */
    stop(config, callback) {
        const schema = Joi.object().keys({
            buildId: Joi.string().required(),
            jobId: Joi.string().required(),
            pipelineId: Joi.string().required(),
            container: Joi.string().required(),
            scmUrl: Joi.string().required()
        });

        const result = Joi.validate(config, schema);

        if (result.error) {
            return callback(result.error);
        }

        return this._stop(config, callback);
    }

    /**
     * Stop the executor
     * @method _stop
     * @param {Object} config               Configuration
     * @param {String} config.buildId       Build id
     * @param {String} config.jobId         Job id
     * @param {String} config.pipelineId    Pipeline id
     * @param {String} config.container     Container
     * @param {String} config.scmUrl        Scm url
     * @param {Function} callback
     */
    _stop(config, callback) {
        callback(new Error('not implemented'));
    }

    /**
     * Validate config for _stream method
     * @method stream
     * @param {Object} config               Configuration
     * @param {String} config.buildId       Build id
     * @param {Function} callback           Function to call when done
     */
    stream(config, callback) {
        const schema = Joi.object().keys({
            buildId: Joi.string().required()
        });

        const result = Joi.validate(config, schema);

        if (result.error) {
            return callback(result.error);
        }

        return this._stream(config, callback);
    }

    /**
     * Stream logs
     * @method _stream
     * @param {Object} config               Configuration
     * @param {String} config.buildId       Build id
     * @param {Function} callback           Function to call when done
     */
    _stream(config, callback) {
        callback(new Error('not implemented'));
    }
}

module.exports = Executor;