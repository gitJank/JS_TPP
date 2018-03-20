import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Tab } from "../shared/tab";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "addTab",
  templateUrl: "addTab.component.html",
  styleUrls: ['addTab.component.css']
})
export class AddTab {

   
    public errorMessage = "";

    constructor(public data: DataService, public router: Router, private route: ActivatedRoute) {
        
    }

    public tabToAdd = {
        songArtist: "",
        songName: "",
        tabBody: "",
        type: ""
    };

    onSelectCancel() {
        this.router.navigate([""]);
    }

    addTab() {
        this.data.addTab(this.tabToAdd)
            .subscribe(success => {
                if (success) {
                        this.router.navigate(["/"])
                }
            }, err => this.errorMessage = "Failed to login")
    }
    
}