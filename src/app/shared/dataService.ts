import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Tab } from "./tab";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(private http: Http) {

    }

    private token: string = "";
    private tokenExpiration: Date;

    public tabs: Tab[] = [];
    public tab: Tab;

    public loadTabs(): Observable<Tab[]> {
        return this.http.get("/api/tabs" )
            .map((result: Response) => this.tabs = result.json());
    }

    public getTabById(id) {
        return this.http.get("/api/tabs/" + id)
            .map((result: Response) => this.tab = result.json());
    }

    public addTab(tabToAdd) {
        return this.http.post("/api/tabs", tabToAdd)
            .map(response => {
                return true
            });
    }

    public deleteTab(id) {
        return this.http.delete("/api/tabs/" + id)
            .subscribe((res) => { return true });
    }

    public get LoginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();

    }

    public getTabsBySearch(searchTerm) {
        return this.http.get("/api/tabSearch/" + searchTerm)
            .map((result: Response) => this.tabs = result.json());
    }

    public login(creds) {
        return this.http.post("/account/createtoken", creds)
            .map(response => {
                let tokenInfo = response.json();
                this.token = tokenInfo.token;
                this.tokenExpiration = tokenInfo.expiration;
                return true
            });
    }
}