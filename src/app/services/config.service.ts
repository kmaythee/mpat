import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConfigService {
    private base: string = './assets';
    private config: any = null;
    
    constructor(private http: Http) { }

    private handleError(err: any) {
        console.error(err.statusText);
        return Observable.throw(err.json().error || 'Error on configuration');
    }

    // On load the configuration
    public load() {
        let result = this.http.get(`${this.base}/config.json`).toPromise().then(data => {
            let ret = data.json();
            if (ret == null) {
                console.error('Error to get config with api service');
                return;
            }
            this.config = ret;
        }, this.handleError);
        return result;
    }

    // On get config data
    public getConfig(): any {
        return this.config;
    }
}
