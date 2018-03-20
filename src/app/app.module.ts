import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";


import { AppComponent } from './app.component';
import { TabList } from "./tabs/TabList.component";
import { AddTab } from "./addTab/addTab.component";
import { TabsMain } from "./tabs/tabsmain.component";
import { ViewTab } from "./viewTab/viewTab.component";
import { Login } from "./login/login.component";

import { DataService } from "./shared/dataService";

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

let routes = [
    { path: "", component: TabsMain },
    { path: "login", component: Login },
    { path: "viewTab", component: ViewTab },
    { path: "addTab", component: AddTab }
];

@NgModule({
    declarations: [
        AppComponent,
        TabList,
        AddTab,
        TabsMain,
        ViewTab,
        Login
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: false // for Debugging of the Routes
        })
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
