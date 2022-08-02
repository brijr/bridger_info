<script>
    import Buttons from "./components/Buttons.svelte";
    import Links from "./components/Links.svelte";
</script>

<!-- Logo -->
<a class="flex items-center" href="/">
    <img class="w-32 h-full -mb-32" src="brijr.PNG" alt="brijr logo">
</a>

<!-- Image Section -->
<section class="mb-12 h-96 bg-cover bg-[url('https://images.unsplash.com/photo-1611880968158-11b415f20864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDgwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1200&q=60')]"></section>

<!-- H1 and Intro -->
<h1 class="text-4xl">Who is Bridger Tower?<br>
    <span class="text-xl hidden">I'm a Creative Developer living in Salt Lake City, Utah! I specialize in <a href="https://webflow.com">Webflow</a>, <a href="https://svelte.dev">SvelteKit</a>, and <a href="https://wordpress.com">Wordpress</a>.</span>
</h1>

<div class="h-px bg-slate-100 w-1/4 my-8"></div>

<h2 class="my-4 font-light text-xl">
    <a href="https://brijr.dev">I'm</a> a Creative Developer living in Salt Lake City, Utah! I specialize in <a class="hover:text-orange-700 transition-all text-orange-500" href="https://webflow.com">Webflow</a>, <a class="hover:text-orange-700 transition-all text-orange-500" href="https://svelte.dev">SvelteKit</a>, and <a class="hover:text-orange-700 transition-all text-orange-500"  href="https://wordpress.com">Wordpress</a>.
</h2>

<a class="bg-slate-300 py-4 px-4 block rounded-xl hover:pl-8 transition-all text-lg flex items-center" href="https://www.craft.do/s/M1mkiWWvmlkSX6">
    <i class="h-full bg-slate-200 mr-4 rounded-xl h-12 w-12 flex items-center justify-center	 text-[#222]"> 
        <svg width="auto" height="2.5rem" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 9.75C4.75 8.64543 5.64543 7.75 6.75 7.75H17.25C18.3546 7.75 19.25 8.64543 19.25 9.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V9.75Z"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.75 7.5V6.75C8.75 5.64543 9.64543 4.75 10.75 4.75H13.25C14.3546 4.75 15.25 5.64543 15.25 6.75V7.5"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13.25H19"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.75 11.75V14.25"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.25 11.75V14.25"></path>
        </svg>
    </i>
    <div>
        Resume of Bridger Tower
        <p class="text-sm">Click here to see my Resume.</p>
    </div>
</a>

<p class="py-4">I'm passionate about design, product, technology, usability, branding, and marketing. I obtained a Bachelor's in Advertising and Marketing from <a class="hover:text-orange-700 transition-all text-orange-500" href="https://byu.edu">Brigham Young University</a> and I am currently obtaining a Master's degree in Product Managment and Development at the <a class="hover:text-orange-700 transition-all text-orange-500" href="https://umd.edu">University of Maryland</a>.</p>

<p class="pb-4">I currently work at <a class="hover:text-orange-700 transition-all text-orange-500" href="https://tackle.io">Tackle.io</a> as Creative Web Developer on the Brand and Marketing team. I also own <a class="hover:text-orange-700 transition-all text-orange-500" href="https://ziondesign.io">Zion Design</a> a web design and development company located in Draper, Utah. I've worked with hundreds of clients on projects big and small.</p>

<p class="text-2xl mt-12">You can find out more about me below!</p>
<div class="h-px bg-slate-100 w-1/4 my-8"></div>


<Buttons/>

<Links/>


<p>Want to get in contact?</p>
<a class="text-orange-400" href="mailto:me@brijr.dev">Shoot me an Email!</a>
<p class="mt-12 text-sm">© Bridger Tower, 1998-Present</p>