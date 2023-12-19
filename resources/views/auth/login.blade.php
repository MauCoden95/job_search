<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="{{ asset('js/main.js') }}" defer></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            clifford: '#da373d',
          }
        }
      }
    }
  </script>
 <script src="https://kit.fontawesome.com/7483adbd94.js" crossorigin="anonymous"></script>
    <title>Job Search - Login</title>
</head>
<body>
    <header class="w-full h-24 bg-blue-950">
        <div class="w-5/6 h-full m-auto text-white flex items-center justify-between">
                <a href="http://localhost:5173/" className="text-xl" style="font-size: 1.7rem;">
                    Job Search
                    <i class="fas fa-briefcase"></i>
                </a>

                <span className="text-2xl" style="font-size: 1.7rem;">
                    LOGIN   
                </span>
        </div>
    </header>

    <section class="w-2/5 h-16 p-1 bg-gray-300 m-auto my-10 rounded-full flex">
        <button id="btnCandidate" class="w-2/4 h-full bg-gray-500 transition cursor-pointer rounded-s-full">Login candidato</button>
        <button id="btnCompany" class="w-2/4 h-full transition cursor-pointer rounded-e-full">Login empresa</button>
    </section>

    <section class="w-full min-h-0">
        <div id="login-candidate" class="block w-5/6 h-full m-auto py-5 text-white flex items-center justify-evenly">
              <img class="w-2/5" src="/img/programmer.png" alt="Programador">
              <form class="w-2/5" method="POST" action="{{ route('login') }}">
                @csrf
                

                <!-- Email Address -->
                <div>
                    <x-input-label class="text-lg" for="email" :value="__('Correo Electrónico')" />
                    <x-text-input id="email" class="block border-2 border-black mt-1 w-full p-2 text-black" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
                    <x-input-error :messages="$errors->get('email')" class="mt-2" />
                </div>

                <!-- Password -->
                <div class="mt-4">
                    <x-input-label class="text-lg" for="password" :value="__('Contraseña')" />

                    <x-text-input id="password" class="block border-2 border-black mt-1 w-full p-2 text-black"
                                    type="password"
                                    name="password"
                                    required autocomplete="current-password" />

                    <x-input-error :messages="$errors->get('password')" class="mt-2" />
                </div>

               

                <div class="flex items-center justify-end mt-4">
                    @if (Route::has('password.request'))
                        <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('password.request') }}">
                            {{ __('Olvidó su contraseña?') }}
                        </a>
                    @endif

                    <x-primary-button class="ms-3">
                        {{ __('Ingresar') }}
                    </x-primary-button>
                </div>
            </form>
        </div>

        <div id="login-company" class="hidden w-5/6 h-full m-auto py-5 text-white flex items-center justify-evenly">
              <img class="w-2/5" src="/img/company.png" alt="Programador">
              <form class="w-2/5" method="POST" action="{{ route('login') }}">
                @csrf

                <!-- Email Address -->
                <div>
                    <x-input-label class="text-lg" for="email" :value="__('Correo Electrónico')" />
                    <x-text-input id="email" class="block border-2 border-black mt-1 w-full p-2 text-black" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
                    <x-input-error :messages="$errors->get('email')" class="mt-2" />
                </div>

                <!-- Password -->
                <div class="mt-4">
                    <x-input-label class="text-lg" for="password" :value="__('Contraseña')" />

                    <x-text-input id="password" class="block border-2 border-black mt-1 w-full p-2 text-black"
                                    type="password"
                                    name="password"
                                    required autocomplete="current-password" />

                    <x-input-error :messages="$errors->get('password')" class="mt-2" />
                </div>

               

                <div class="flex items-center justify-end mt-4">
                    @if (Route::has('password.request'))
                        <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('password.request') }}">
                            {{ __('Olvidó su contraseña?') }}
                        </a>
                    @endif

                    <x-primary-button class="ms-3">
                        {{ __('Ingresar') }}
                    </x-primary-button>
                </div>
            </form>
        </div>
    </section>

    <section class="w-2/6 min-h-0 py-2 m-auto my-10 flex items-center justify-evenly">
        <a href="#"><i class="fab fa-facebook text-4xl hover:text-blue-800"></i></a>
        <a href="#"><i class="fab fa-linkedin text-4xl hover:text-blue-500"></i></a>
        <a href="#"><i class="fab fa-twitter text-4xl hover:text-blue-300"></i></a>
        <a href="#"><i class="fab fa-instagram-square text-4xl hover:text-violet-500"></i></a>
        <a href="#"><i class="fab fa-youtube text-4xl hover:text-red-600"></i></a>
    </section>

    @include('layouts.footer')
</body>
</html>