using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using MySQL.Data.EntityFrameworkCore.Extensions;
using FoodAndMovieMashup.Data;
using FoodAndMovieMashup.Models;

namespace FoodAndMovieMashup
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContext<UserProfileContext>(options =>
                options.UseMySQL(Configuration.GetConnectionString("DBConnection")));

            services.AddDbContext<UserProfileContext>(opt => opt.UseInMemoryDatabase());

            services.AddMvc();

            services.AddScoped<IUserRepo, UserApi>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, UserProfileContext context)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            /*
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapRoute("somename", "sname/{*action}",
                    defaults: new { controller = "SomeName", action = "Action" });
            });
                {*action} = catch all
             */

            // This only runs default route
            app.UseMvcWithDefaultRoute();

            /*
             * UseMvc does not directly define any routes, it adds a placeholder 
             * to the route collection for the attribute route. 
             * The overload UseMvc(Action<IRouteBuilder>) lets you add your own 
             * routes and also supports attribute routing.
             * 
             * UseMvc and all of its variations adds a placeholder for the attribute route - 
             * attribute routing is always available regardless of how you 
             * configure UseMvc. UseMvcWithDefaultRoute defines a default 
             * route and supports attribute routing. 
             * */



            DbInitializer.Initialize(context);
        }
    }
}
