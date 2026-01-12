import { Component, ViewEncapsulation } from '@angular/core';
import { DxReportDesignerModule } from 'devexpress-reporting-angular';
import 'devexpress-reporting/dx-richedit';
import deAnalyticMessages from "../dx-analytics-core.de.json";
import deReportingMessages from "../dx-reporting.de.json";

@Component({
  selector: 'app-root',
  imports: [DxReportDesignerModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.html',
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
export class App {
  title = 'DXReportDesignerSample';
    getDesignerModelAction = "/DXXRD/GetDesignerModel"
    reportName = "TestReport";
    host = 'http://localhost:5000/';
    CustomizeLocalization(event) {
      event.args.LoadMessages(deAnalyticMessages);
      console.log("XXXXX");
      event.args.LoadMessages(deReportingMessages);
  }
}
