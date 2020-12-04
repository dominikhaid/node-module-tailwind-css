import globalCss from `./global.css`

function App() {
  return (
    <div class="relative bg-gray-200">
    <div class="absolute inset-0 flex flex-col" aria-hidden="true">
      <div class="flex-1 bg-gray-100"></div>
      <div class="flex-1 bg-gray-200"></div>
    </div>
    <div class="relative max-w-5xl mx-auto">
      <div class="flex flex-col min-h-screen lg:flex-row lg:items-center lg:p-8">
        <div class="flex flex-col flex-grow bg-white lg:shadow-2xl lg:rounded-lg lg:overflow-hidden">
          <div class="flex-grow flex flex-col justify-center p-12">
            <div class="flex items-center">
              <svg class="h-10 sm:h-12" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30 14c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C33.744 27.09 36.808 30.2 43.5 30.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C39.756 17.11 36.692 14 30 14zM16.5 30.2C9.3 30.2 4.8 33.8 3 41c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C20.244 43.29 23.308 46.4 30 46.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C26.256 33.31 23.192 30.2 16.5 30.2z" fill="url(#logo-gradient)"/>
                <defs>
                  <linearGradient id="logo-gradient" x1="1.5" y1="14" x2="57" y2="46" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2298BD"/>
                    <stop offset="1" stop-color="#0ED7B5"/>
                  </linearGradient>
                </defs>
              </svg>
              <svg class="h-10 ml-4" viewBox="0 0 196 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="fill-current text-gray-800" clip-rule="evenodd" d="M13.996 28.652H9.284v9.12c0 2.432 1.596 2.394 4.712 2.242V43.7c-6.308.76-8.816-.988-8.816-5.928v-9.12H1.684V24.7H5.18v-5.104l4.104-1.216v6.32h4.712v3.952zM31.958 24.7h4.104v19h-4.104v-2.736c-1.444 2.014-3.686 3.23-6.65 3.23-5.168 0-9.462-4.37-9.462-9.994 0-5.662 4.294-9.994 9.462-9.994 2.964 0 5.206 1.216 6.65 3.192V24.7zm-6.004 15.58c3.42 0 6.004-2.546 6.004-6.08 0-3.534-2.584-6.08-6.004-6.08-3.42 0-6.004 2.546-6.004 6.08 0 3.534 2.584 6.08 6.004 6.08zm16.948-18.43c-1.444 0-2.622-1.216-2.622-2.622a2.627 2.627 0 0 1 2.622-2.622 2.627 2.627 0 0 1 2.622 2.622c0 1.406-1.178 2.622-2.622 2.622zM40.85 43.7v-19h4.104v19H40.85zm8.854 0V15.96h4.104V43.7h-4.104zm30.742-19h4.332l-5.966 19h-4.028l-3.952-12.806-3.99 12.806h-4.028l-5.966-19h4.332l3.686 13.11 3.99-13.11h3.914l3.952 13.11 3.724-13.11zm9.424-2.85c-1.444 0-2.622-1.216-2.622-2.622a2.627 2.627 0 0 1 2.622-2.622 2.627 2.627 0 0 1 2.622 2.622c0 1.406-1.178 2.622-2.622 2.622zM87.818 43.7v-19h4.104v19h-4.104zm18.848-19.494c4.256 0 7.296 2.888 7.296 7.828V43.7h-4.104V32.452c0-2.888-1.672-4.408-4.256-4.408-2.698 0-4.826 1.596-4.826 5.472V43.7h-4.104v-19h4.104v2.432c1.254-1.976 3.306-2.926 5.89-2.926zm26.752-7.106h4.104v26.6h-4.104v-2.736c-1.444 2.014-3.686 3.23-6.65 3.23-5.168 0-9.462-4.37-9.462-9.994 0-5.662 4.294-9.994 9.462-9.994 2.964 0 5.206 1.216 6.65 3.192V17.1zm-6.004 23.18c3.42 0 6.004-2.546 6.004-6.08 0-3.534-2.584-6.08-6.004-6.08-3.42 0-6.004 2.546-6.004 6.08 0 3.534 2.584 6.08 6.004 6.08zm23.864 3.914c-5.738 0-10.032-4.37-10.032-9.994 0-5.662 4.294-9.994 10.032-9.994 3.724 0 6.954 1.938 8.474 4.902l-3.534 2.052c-.836-1.786-2.698-2.926-4.978-2.926-3.344 0-5.89 2.546-5.89 5.966 0 3.42 2.546 5.966 5.89 5.966 2.28 0 4.142-1.178 5.054-2.926l3.534 2.014c-1.596 3.002-4.826 4.94-8.55 4.94zm15.314-14.25c0 3.458 10.222 1.368 10.222 8.398 0 3.8-3.306 5.852-7.41 5.852-3.8 0-6.536-1.71-7.752-4.446l3.534-2.052c.608 1.71 2.128 2.736 4.218 2.736 1.824 0 3.23-.608 3.23-2.128 0-3.382-10.222-1.482-10.222-8.284 0-3.572 3.078-5.814 6.954-5.814 3.116 0 5.7 1.444 7.03 3.952l-3.458 1.938c-.684-1.482-2.014-2.166-3.572-2.166-1.482 0-2.774.646-2.774 2.014zm17.518 0c0 3.458 10.222 1.368 10.222 8.398 0 3.8-3.306 5.852-7.41 5.852-3.8 0-6.536-1.71-7.752-4.446l3.534-2.052c.608 1.71 2.128 2.736 4.218 2.736 1.824 0 3.23-.608 3.23-2.128 0-3.382-10.222-1.482-10.222-8.284 0-3.572 3.078-5.814 6.954-5.814 3.116 0 5.7 1.444 7.03 3.952l-3.458 1.938c-.684-1.482-2.014-2.166-3.572-2.166-1.482 0-2.774.646-2.774 2.014z"/>
              </svg>
            </div>
            <div class="md:pl-16 pl-0">
              <h1 class="sm:font-light text-2xl sm:text-3xl md:text-4xl text-gray-900 mt-6">Welcome to your first Tailwind project!</h1>
              <p class="sm:text-xl text-gray-600 mt-3 leading-relaxed">The file you're looking at is the <span class="font-mono bg-gray-200 text-sm sm:text-base text-gray-700 subpixel-antialiased px-1 rounded">index.html</span> file in the repository you just cloned. If you used <span class="font-mono bg-gray-200 text-sm sm:text-base text-gray-700 subpixel-antialiased px-1 rounded">npm run serve</span> to view this page, try editing that file to see this page automatically update with your changes.</p>
            </div>
          </div>
          <div class="bg-gray-100 border-t-2 border-gray-200">
            <div class="flex flex-wrap">
              <div class="flex flex-col px-12 py-10 w-full sm:w-1/2 sm:border-r sm:border-b border-gray-200">
                <div class="flex flex-grow">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-8 w-8 md:h-10 md:w-10 md:-my-1">
                      <g>
                        <path class="fill-current text-gray-400" d="M12 21a2 2 0 0 1-1.41-.59l-.83-.82A2 2 0 0 0 8.34 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a5 5 0 0 1 4 2v16z" />
                        <path class="fill-current text-gray-700" d="M12 21V5a5 5 0 0 1 4-2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4.34a2 2 0 0 0-1.42.59l-.83.82A2 2 0 0 1 12 21z" />
                      </g>
                    </svg>
                  </div>
                  <div class="leading-relaxed flex flex-col ml-4 md:ml-6">
                    <h2 class="font-medium text-gray-800 text-lg">Documentation</h2>
                    <p class="text-gray-600 mt-1 text-sm md:text-base">Get familiar with Tailwind’s utility-first approach and start building awesome stuff.</p>
                    <div class="pt-1 mt-auto">
                      <a class="inline-flex items-center text-teal-600 hover:text-teal-800" href="https://tailwindcss.com/docs">
                        <span class="text-sm md:text-base font-semibold">Explore the docs</span>
                        <svg class="fill-current w-4 h-4 ml-2" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.2929 1.70711C10.9024 1.31658 10.9024 0.683418 11.2929 0.292893C11.6834 -0.0976311 12.3166 -0.0976311 12.7071 0.292893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L12.7071 11.7071C12.3166 12.0976 11.6834 12.0976 11.2929 11.7071C10.9024 11.3166 10.9024 10.6834 11.2929 10.2929L14.5858 7Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-12 py-10 w-full sm:w-1/2 border-t-2 sm:border-t-0 sm:border-l sm:border-b border-gray-200">
                <div class="flex flex-grow">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-8 w-8 md:h-10 md:w-10 md:-my-1">
                      <path class="fill-current text-gray-400" d="M3 6l9 4v12l-9-4V6zm14-3v2c0 1.1-2.24 2-5 2s-5-.9-5-2V3c0 1.1 2.24 2 5 2s5-.9 5-2z" />
                      <polygon class="fill-current text-gray-700" points="21 6 12 10 12 22 21 18" />
                    </svg>
                  </div>
                  <div class="flex flex-col leading-relaxed ml-4 md:ml-6">
                    <h2 class="font-medium text-gray-800 text-lg">Component Examples</h2>
                    <p class="text-gray-600 mt-1 text-sm md:text-base">Browse pre-built components using Tailwind’s utility classes. </p>
                    <div class="pt-1 mt-auto">
                      <a class="inline-flex items-center text-teal-600 hover:text-teal-800" href="https://tailwindcss.com/components">
                        <span class="text-sm md:text-base font-semibold">Browse examples</span>
                        <svg class="fill-current w-4 h-4 ml-2" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.2929 1.70711C10.9024 1.31658 10.9024 0.683418 11.2929 0.292893C11.6834 -0.0976311 12.3166 -0.0976311 12.7071 0.292893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L12.7071 11.7071C12.3166 12.0976 11.6834 12.0976 11.2929 11.7071C10.9024 11.3166 10.9024 10.6834 11.2929 10.2929L14.5858 7Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-12 py-10 w-full sm:w-1/2 border-t-2 sm:border-r sm:border-t border-gray-200">
                <div class="flex flex-grow">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-8 w-8 md:h-10 md:w-10 md:-my-1">
                      <path class="fill-current text-gray-400" d="M9 22c.19-.14.37-.3.54-.46L17.07 14H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9zM4 2h4a2 2 0 0 1 2 2v14a4 4 0 1 1-8 0V4c0-1.1.9-2 2-2zm2 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                      <path class="fill-current text-gray-700" d="M11 18.66V7.34l2.07-2.07a2 2 0 0 1 2.83 0l2.83 2.83a2 2 0 0 1 0 2.83L11 18.66z" />
                    </svg>
                  </div>
                  <div class="flex flex-col leading-relaxed ml-4 md:ml-6">
                    <h2 class="font-medium text-gray-800 text-lg">Resources</h2>
                    <p class="text-gray-600 mt-1 text-sm md:text-base">A collection of assets and resources to help supercharge your Tailwind workflow.</p>
                    <div class="pt-1 mt-auto">
                      <a class="inline-flex items-center text-teal-600 hover:text-teal-800" href="https://tailwindcss.com/resources">
                        <span class="text-sm md:text-base font-semibold">Find resources</span>
                        <svg class="fill-current w-4 h-4 ml-2" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.2929 1.70711C10.9024 1.31658 10.9024 0.683418 11.2929 0.292893C11.6834 -0.0976311 12.3166 -0.0976311 12.7071 0.292893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L12.7071 11.7071C12.3166 12.0976 11.6834 12.0976 11.2929 11.7071C10.9024 11.3166 10.9024 10.6834 11.2929 10.2929L14.5858 7Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-12 py-10 w-full sm:w-1/2 border-t-2 sm:border-l sm:border-t border-gray-200">
                <div class="flex flex-grow">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-8 w-8 md:h-10 md:w-10 md:-my-1">
                      <path class="fill-current text-gray-400" d="M20.3 12.04l1.01 3a1 1 0 0 1-1.26 1.27l-3.01-1a7 7 0 1 1 3.27-3.27zM11 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      <path class="fill-current text-gray-700" d="M15.88 17.8a7 7 0 0 1-8.92 2.5l-3 1.01a1 1 0 0 1-1.27-1.26l1-3.01A6.97 6.97 0 0 1 5 9.1a9 9 0 0 0 10.88 8.7z" />
                    </svg>
                  </div>
                  <div class="flex flex-col leading-relaxed ml-4 md:ml-6">
                    <h2 class="font-medium text-gray-800 text-lg">Community</h2>
                    <p class="text-gray-600 mt-1 text-sm md:text-base">Connect and learn from other Tailwind users in the community.</p>
                    <div class="pt-1 mt-auto">
                      <a class="inline-flex items-center text-teal-600 hover:text-teal-800" href="https://tailwindcss.com/community">
                        <span class="text-sm md:text-base font-semibold">Connect</span>
                        <svg class="fill-current w-4 h-4 ml-2" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.2929 1.70711C10.9024 1.31658 10.9024 0.683418 11.2929 0.292893C11.6834 -0.0976311 12.3166 -0.0976311 12.7071 0.292893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L12.7071 11.7071C12.3166 12.0976 11.6834 12.0976 11.2929 11.7071C10.9024 11.3166 10.9024 10.6834 11.2929 10.2929L14.5858 7Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;

