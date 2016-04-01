using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Cors;

[assembly: OwinStartup(typeof(LocationSvc.App_Start.Startup))]
namespace LocationSvc.App_Start
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCors(CorsOptions.AllowAll);
        }
    }
}