import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DxReportDesignerModule } from 'devexpress-reporting-angular';
import 'devexpress-reporting/dx-richedit';
import deAnalyticMessages from "../dx-analytics-core.de.json";
import deReportingMessages from "../dx-reporting.de.json";

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
	CommonModule, 
	RouterOutlet,
	DxReportDesignerModule],
  templateUrl: './app.component.html',
  styleUrls: [
    "../../node_modules/ace-builds/css/ace.css",
    "../../node_modules/ace-builds/css/theme/dreamweaver.css",
    "../../node_modules/ace-builds/css/theme/ambiance.css",
    "../../node_modules/devextreme/dist/css/dx.light.css",
    "../../node_modules/devexpress-richedit/dist/dx.richedit.css",
    "../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css",
    "../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.light.css",
    "../../node_modules/@devexpress/analytics-core/dist/css/dx-querybuilder.css",
    "../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css",
    "../../node_modules/devexpress-reporting/dist/css/dx-reportdesigner.css"
]
})

export class AppComponent {
	title = 'DXReportDesignerSample';
	getDesignerModelAction = "/ReportDesigner/GetReportDesignerModel";
	reportName = "Products";
	host = 'http://localhost:56742/';
  CustomizeLocalization(event) {
    event.args.LoadMessages(deAnalyticMessages);
    event.args.LoadMessages(deReportingMessages);
  }
}
