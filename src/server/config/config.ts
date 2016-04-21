/// <reference path="../../../typings/nconf/nconf.d.ts" />


import nconf = require('nconf');

export class Config {
    private current;
    constructor() {
        nconf.argv().env().file({ file: "./config.json" });
        this.current = nconf;
    }

    public get(key: string) {
        return this.current.get(key);
    }
}
