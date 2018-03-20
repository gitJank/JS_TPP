import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Tab } from "../shared/tab";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: "viewTab",
    templateUrl: "viewTab.component.html",
    styleUrls: ['viewTab.component.css']
})
export class ViewTab {

    public tab: Tab;
    public tabId: any;

    constructor(public data: DataService, public router: Router, private route: ActivatedRoute, private domSanitizer: DomSanitizer ) {
        this.tab = data.tab;

        this.route.params.subscribe((params: Params) => {
            this.tabId = params['id'];
        });

        this.data.getTabById(this.tabId)
            .subscribe(() => this.tab = this.data.tab);
    }

    onSelectBack() {
        this.router.navigate([""]);
    }

    onSelectDelete() {
        var success = this.data.deleteTab(this.tabId);
        this.router.navigate(["tab-list"]);
    }
}