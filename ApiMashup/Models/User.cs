using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FoodAndMovieMashup.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }

        public string LastName { get; set; }
        public string FirstMidName { get; set; }
        public string Email { get; set; }
        // ? = nullable
        public int? SavedHistoryID { get; set; }
        public Banned? Banned { get; set; }
    }

    public enum Banned
    {
        Yes, No
    }

}
