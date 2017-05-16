using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FoodAndMovieMashup.Models
{
    public class SavedHistory
    {
        [Key]
        public int SavedHistoryID { get; set; }
        public string Terms { get; set; }
    }
}
