﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LocationSvc.Controllers
{
    public class LocationController : ApiController
    {
        public Models.Location GetLocation(string cityName)
        {
            return new Models.Location() { Latitude = 10, Longitude = 20 };
        }
    }
}