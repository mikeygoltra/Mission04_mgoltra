﻿using Microsoft.AspNetCore.Mvc;
using Mission04_mgoltra.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_mgoltra.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult gradeCalculator()
        {
            return View();
        }

        [HttpPost]
        public IActionResult gradeCalculator(gradeCalculatorModel model)
        {
            return View();
        }

    }
}
