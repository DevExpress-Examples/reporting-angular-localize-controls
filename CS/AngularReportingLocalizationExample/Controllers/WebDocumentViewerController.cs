﻿using DevExpress.Web.Mvc.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularReportingLocalizationExample.Controllers
{
    public class WebDocumentViewerController : WebDocumentViewerApiControllerBase
    {
        // GET: WebDocumentViewerApi
        public ActionResult Index()
        {
            return View();
        }
        public override ActionResult Invoke()
        {
            var result = base.Invoke();
            Response.AppendHeader("Access-Control-Allow-Origin", "*");
            return result;
        }
    }
}