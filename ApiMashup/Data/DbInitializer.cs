using FoodAndMovieMashup.Models;
using System;
using System.Linq;

namespace FoodAndMovieMashup.Data
{
    public static class DbInitializer
    {
        public static void Initialize(UserProfileContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Users.Any())
            {
                return;   // DB has been seeded
            }

            var users = new User[]
            {
                new User{FirstMidName="Carson",LastName="Alexander",Email="1@1.com", SavedHistoryID=3},
                new User{FirstMidName="Meredith",LastName="Alonso",Email="1@1.com", SavedHistoryID=1},
                new User{FirstMidName="Arturo",LastName="Anand",Email="1@1.com", SavedHistoryID=4},
                new User{FirstMidName="Gytis",LastName="Barzdukas",Email="1@1.com", SavedHistoryID=2},
                new User{FirstMidName="Yan",LastName="Li",Email="1@1.com", SavedHistoryID=7},
                new User{FirstMidName="Peggy",LastName="Justice",Email="1@1.com", SavedHistoryID=5},
                new User{FirstMidName="Laura",LastName="Norman",Email="1@1.com", SavedHistoryID=6},
                new User{FirstMidName="Nino",LastName="Olivetto",Email="1@1.com", SavedHistoryID=8}
            };
            foreach (User user_object in users)
            {
                context.Users.Add(user_object);
            }
            context.SaveChanges();

            var savedHistories = new SavedHistory[]
            {
                new SavedHistory{Terms="cake, donut, cheese"},
                new SavedHistory{Terms="cake, donut, cheese"},
                new SavedHistory{Terms="ham, taco, juice"},
                new SavedHistory{Terms="oat bars, lasagna, potatoes"},
                new SavedHistory{Terms="eggs, potatoes, bacon"},
                new SavedHistory{Terms="pudding, pops, rabbit"},
                new SavedHistory{Terms="mashmallows, ice cream, pie"}
            };
            foreach (SavedHistory sh in savedHistories)
            {
                context.SavedHistories.Add(sh);
            }
            context.SaveChanges();
        }
    }
}
