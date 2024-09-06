<!--
INSTRUCTION: Summary: HTML file that describes the header section including:
INSTRUCTION: 1. Site branding with a logo on the left.
INSTRUCTION: 2. Desktop navigation menu with links to different pages in the middle.
INSTRUCTION: 3. Desktop sign-in and sign-up links on the right.
-->

<template>
  <header class="w-full z-30" id="header-section-container">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 bg-opacity-30 bg-pink-100 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Site Branding -->
        <div id="site-branding" class="flex-1">
          <a id="logo-link" class="inline-flex" href="index.html" aria-label="Cruip">
            <img id="logo-image" class="max-w-none" src="./images/logo.svg" width="38" height="38" alt="Stellar">
          </a>
        </div>

        <!-- Desktop Navigation -->
        <nav id="desktop-navigation" class="hidden md:flex md:grow">
          <ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center">
            <li>
              <a
                id="Home-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-purple-700 hover:text-pink-500"
                href="Home.html"
              >
                Home
              </a>
            </li>
            <li>
              <a
                id="Browse-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-purple-700 hover:text-pink-500"
                href="Browse.html"
              >
                Browse
              </a>
            </li>
            <li>
              <a
                id="Sell-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-purple-700 hover:text-pink-500"
                href="Sell.html"
              >
                Sell
              </a>
            </li>
            <li>
              <a
                id="About Us-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-purple-700 hover:text-pink-500"
                href="About Us.html"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                id="Contact-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-purple-700 hover:text-pink-500"
                href="Contact.html"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <!-- Desktop Sign In & Sign Up Links -->
        <ul id="desktop-sign-in-links" class="flex-1 flex justify-end items-center">
          <li>
            <a
              id="sign-in-link"
              class="font-medium text-sm whitespace-nowrap transition duration-150 ease-in-out text-purple-700 hover:text-pink-500"
              href="signin.html"
            >
              Sign in
            </a>
          </li>
          <li class="ml-6">
            <a
              id="sign-up-link"
              class="btn-sm transition duration-150 ease-in-out w-full group relative text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 rounded-full px-4 py-2 shadow-lg"
              href="signup.html"
            >
              <span class="relative inline-flex items-center"> Sign up <span id="sign-up-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-pink-200">-&gt;</span> </span>
            </a>
          </li>
        </ul>

        <!-- Hadoken Button -->
        <div class="flex-1 flex justify-end items-center ml-4">
          <button
            id="hadoken-button"
            class="btn-sm transition duration-150 ease-in-out text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 rounded-full px-4 py-2 shadow-lg"
          >
            Hadoken
          </button>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden flex items-center ml-4">
          <button
            id="hamburger-button"
            class="hamburger"
            :class="{ active: expanded }"
            @click.stop="expanded = !expanded"
            aria-controls="mobile-nav"
            :aria-expanded="expanded"
          >
            <span class="sr-only">Menu</span>
            <svg id="hamburger-icon" class="w-5 h-5 fill-current transition duration-150 ease-in-out text-purple-700 hover:text-pink-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <rect y="2" width="20" height="2" rx="1" />
              <rect y="9" width="20" height="2" rx="1" />
              <rect y="16" width="20" height="2" rx="1" />
            </svg>
          </button>

          <nav
            id="mobile-nav"
            class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
            x-ref="mobileNav"
            :style="expanded ? 'max-height: ' + $refs.mobileNav.scrollHeight + 'px; opacity: 1' : 'max-height: 0; opacity: .8'"
            @click.outside="expanded = false"
            @keydown.escape.window="expanded = false"
            x-cloak
          >
            <ul id="mobile-nav-list" class="bg-opacity-70 bg-pink-100 backdrop-filter backdrop-blur-lg rounded-lg px-4 py-1.5 shadow-lg">
              <li>
                <a id="mobile-Home-link" class="flex font-medium text-sm py-1.5 text-purple-700 hover:text-pink-500" href="Home.html">Home</a>
              </li>
              <li>
                <a id="mobile-Browse-link" class="flex font-medium text-sm py-1.5 text-purple-700 hover:text-pink-500" href="Browse.html">Browse</a>
              </li>
              <li>
                <a id="mobile-Sell-link" class="flex font-medium text-sm py-1.5 text-purple-700 hover:text-pink-500" href="Sell.html">Sell</a>
              </li>
              <li>
                <a id="mobile-About Us-link" class="flex font-medium text-sm py-1.5 text-purple-700 hover:text-pink-500" href="About Us.html">About Us</a>
              </li>
              <li>
                <a id="mobile-Contact-link" class="flex font-medium text-sm py-1.5 text-purple-700 hover:text-pink-500" href="Contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PurpleHeaderComponent",
  data() {
    return {
      expanded: false,
      tab: null,
    };
  },
};
</script>
