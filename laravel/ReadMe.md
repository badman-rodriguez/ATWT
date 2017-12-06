# ATWT Laravel Project

### Installation
- Requirements:  
	- Composer
	- Vagrant
	- Homestead/Laravel [https://laravel.com/docs/5.5/homestead](https://laravel.com/docs/5.5/homestead)

What to know with vagrant
- `vagrant up` starts the instance
- `vagrant halt`  gracefully stops the instance
- `vagrant ssh` ssh into your instance
- `vagrant destroy`  It'll stop the instance, power it down, and remove all of the guest hard disks.
- `vagrant ssh-config` will provide necessary details for tools like MySQL Workbench or SQL Pro

Example:
```                                                                                                     Host homestead
HostName 127.0.0.1                                                                                                            
User vagrant                                                                                                                  
Port 2222                                                                                                                     
UserKnownHostsFile /dev/null                                                                                                  
StrictHostKeyChecking no                                                                                                      
PasswordAuthentication no                                                                                                     
IdentityFile /c/Users/xxxxxxx/Documents/laravel-project/Homestead/.vagrant/machines/homestead-7/virtualbox/private_key
IdentitiesOnly yes                                                                                                            
LogLevel FATAL                                                                                                                
ForwardAgent yes                                                                                                                                                                                                                                            
```
#### Homestead YAML file
This is to specify the site folder locally and have it point to vagrant, and map the site url & have it point to the public folder of laravel.

Example:
```
ip: "192.168.10.10"
memory: 2048
cpus: 1
provider: virtualbox

authorize: ~/.ssh/id_rsa.pub

keys:
    - ~/.ssh/id_rsa

folders:
    - map: ~/Documents/websites/atwt-laravel
      to: /home/vagrant/code

sites:
    - map: allthingswebtech.app
      to: /home/vagrant/code/public

databases:
    - homestead
```

# Laravel Migrations and Seeding

- `php artisan make:migration table_name`
- `php artisan migrate`
- `php artisan migrate:rollback`
- `php artisan migrate:refresh`
- `php artisan make:seeder SeedName`
- `php artisan db:seed`
- `php artisan db:seed --class=SpecificSeeder`
- `php artisan migrate:fresh --seed`

- Use MySqlWorkbench or SqlPro to see database changes

# Laravel Model
- `php artisan make:model`
- `php artisan make:model MODELNAME --migration`
- [https://laravel.com/docs/5.5/eloquent-relationships](https://laravel.com/docs/5.5/eloquent-relationships)

# Laravel Routes & Controllers
- `Route::get` `Route::post` `Route::put` `Route::patch`
- `Route::middleware`
- `Route::resource`
- `Route::group`

-`php artisan make:controller`

# Laravel Views
- Blade Syntax
- view('name', ['property' => data']);
	- name will equal name.blade.php in the views folder

# Laravel Cheatsheet
- [http://cheats.jesse-obrien.ca/](http://cheats.jesse-obrien.ca/)
