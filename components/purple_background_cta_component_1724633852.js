<template>
  <section id="cta-section-container">
    <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-gradient-to-br from-pink-500 to-purple-700">
      <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg">

        <!-- Radial gradient -->
        <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
          <div id="radial-gradient-outer" class="bg-pink-500 absolute inset-0 translate-z-0 rounded-full blur-[120px] opacity-70"></div>
          <div id="radial-gradient-inner" class="absolute w-1/3 h-1/3 translate-z-0 rounded-full blur-[60px] bg-purple-400"></div>
        </div>

        <!-- Blurred shape -->
        <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" class="#A855F7" />
                <stop offset="100%" class="6366F1" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
          </svg>
        </div>

        <!-- Content -->
        <div id="content" class="max-w-3xl mx-auto text-center">
          <div id="content-subtitle" class="flex">
            <div id="content-subtitle-text" class="flex-1 font-medium text-lg pb-3 text-pink-300">
              Discover the Value in Waste
            </div>
          </div>
          <div class="flex" id="content-title-container">
            <h2 id="content-title" class="flex-1 h2 text-4xl font-bold pb-4 text-white">
              Turn Trash into Treasure
            </h2>
          </div>
          <div class="flex" id="content-body-container">
            <p id="content-body" class="flex-1 text-lg mb-8 text-pink-100">
              Join our revolutionary marketplace where one person's garbage becomes another's gold. Buy, sell, and trade unwanted items to reduce waste and find hidden gems.
            </p>
          </div>
          <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group text-purple-900 bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-200 hover:to-purple-200 rounded-full px-6 py-3 shadow-lg">
            Get Started
            <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-purple-700">-&gt;</span>
          </a>

          <!-- Image addition -->
          <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Waste_Trading_Platform_1724633849/main/images/1edfae117bbf4c599c88d9696d71d955.jpeg" alt="Treasure from Trash" class="mt-8 rounded-lg shadow-lg w-full object-cover">

          <!-- Santa Contact Form -->
          <form id="santa-contact-form" class="mt-8 space-y-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div>
              <label for="name" class="block text-sm font-medium text-pink-200">Name</label>
              <input type="text" id="name" name="name" class="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white bg-opacity-20 text-white placeholder-pink-200">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-pink-200">Email</label>
              <input type="email" id="email" name="email" class="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white bg-opacity-20 text-white placeholder-pink-200">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-pink-200">Message to Santa</label>
              <textarea id="message" name="message" rows="4" class="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white bg-opacity-20 text-white placeholder-pink-200"></textarea>
            </div>
            <div>
              <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-purple-900 bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-200 hover:to-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                Send to Santa
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PurpleBackgroundCtaComponent",
  data() {
    return {
      expanded: false,
      tab: null
    };
  },
  methods: {
    // Santa contact form submission method
    submitSantaForm(event) {
      event.preventDefault();
      const name = this.$refs.name.value;
      const email = this.$refs.email.value;
      const message = this.$refs.message.value;
      console.log('Sending message to Santa:', { name, email, message });
      // Add your form submission logic here
    }
    // End of Santa contact form submission method
  }
};
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>