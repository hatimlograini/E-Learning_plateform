<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'a@a.com',
            'password' => bcrypt('a')
        ]);
        $user = User::create([
            'name' => 'user',
            'email' => 'u@u.com',
            'password' => bcrypt('u')
        ]);

        $users = factory(User::class, 5)->create();
    }
}
