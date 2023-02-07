using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_mgoltra.Models
{
    public class gradeCalculatorModel
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a valid number between 0 and 100 for assignments")]
        public int Assignments { get; set; }
        [Range(0, 100, ErrorMessage = "Please enter a valid number between 0 and 100 for group projects")]
        public int GroupProjects { get; set; }
        [Range(0, 100, ErrorMessage = "Please enter a valid number between 0 and 100 for quizzes")]
        public int Quizzes { get; set; }
        [Range(0, 100, ErrorMessage = "Please enter a valid number between 0 and 100 for midterm")]
        public int Midterm { get; set; }
        [Range(0, 100, ErrorMessage = "Please enter a valid number between 0 and 100 for final")]
        public int Final { get; set; }
        [Range(0, 100, ErrorMessage = "Please enter a valid number between 0 and 100 for INTEX")]
        public int INTEX { get; set; }

    }
}
