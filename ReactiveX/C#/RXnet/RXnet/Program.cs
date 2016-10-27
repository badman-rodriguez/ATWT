using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

using System.Reactive;
using System.Reactive.Linq;
using System.Reactive.Threading;

namespace RXnet
{
    class Program
    {
       /* public static void Main()
        {

            var oneNumberPerSecond = Observable.Interval(TimeSpan.FromSeconds(1));

            var lowNums = from n in oneNumberPerSecond
                          where n < 5
                          select n;

            Console.WriteLine("Numbers < 5:");

            lowNums.Subscribe(lowNum =>
            {
                Console.WriteLine(lowNum);
            });

            Console.ReadKey();
        }*/

         class TimeIndex
         {
             public TimeIndex(int index, DateTimeOffset time)
             {
                 Index = index;
                 Time = time;
             }
             public int Index { get; set; }
             public DateTimeOffset Time { get; set; }
         }

         static void Main()
         {
             var clock = Observable.Interval(TimeSpan.FromSeconds(1))
                 .Select((time, index) => new TimeIndex(index, DateTimeOffset.Now));

             clock.Subscribe(timeIndex =>
             {
                 Console.WriteLine(
                     "The time is now {0:T}.  This is event number {1}.",
                     timeIndex.Time,
                     timeIndex.Index);
             });

             Console.ReadKey();
         }
        // Generates events with interval that alternates between 250ms and 1000ms every 5 events
      }
}
