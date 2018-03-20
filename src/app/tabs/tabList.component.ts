import { Component, OnInit } from "@angular/core" 
import { DataService } from "../shared/dataService";
import { DisplayTab } from "../shared/displayTab";
import { Router } from "@angular/router";

@Component({
    selector: "tab-list",
    templateUrl: "tablist.component.html",
    styleUrls: [ "tablist.component.css" ]
})
export class TabList implements OnInit {
    public tabs: DisplayTab[];
    public searchTerm = "";

    constructor(private data: DataService, private router: Router) {
        this.tabs = data.tabs;
    }


    ngOnInit() {
        this.data.loadTabs()
            .subscribe(() => this.tabs = this.data.tabs);
    }

    onSelectTab(id) {
        this.router.navigate(["viewTab", { id: id }]);
    }

    onSelectNewTab() {
        this.router.navigate(["addTab"]);
    }

    onSearch() {
        if (this.searchTerm == "") {
            alert("Please enter a search term");
        }
        else {
            this.data.getTabsBySearch(this.searchTerm)
                .subscribe(() => this.tabs = this.data.tabs);
        }          
    }
}