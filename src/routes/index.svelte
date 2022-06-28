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
    <a href="https://brijr.dev">I'm</a> a Creative Developer living in Salt Lake City, Utah! I specialize in <a class="hover:text-orange-200 text-orange-300" href="https://webflow.com">Webflow</a>, <a class="hover:text-orange-200 text-orange-300" href="https://svelte.dev">SvelteKit</a>, and <a class="hover:text-orange-200 text-orange-300"  href="https://wordpress.com">Wordpress</a>.
</h2>

<p class="py-4">I'm passionate about design, product, technology, usability, branding, and marketing. I obtained a Bachelor's in Advertising and Marketing from <a class="hover:text-orange-200 text-orange-300" href="https://byu.edu">Brigham Young University</a> and I am currently obtaining a Master's degree in Product Managment and Development at the <a class="hover:text-orange-200 text-orange-300" href="https://umd.edu">University of Maryland</a>.</p>

<p class="pb-4">I currently work at <a class="hover:text-orange-200 text-orange-300" href="https://tackle.io">Tackle.io</a> as Creative Web Developer on the Brand and Marketing team. I also own <a class="hover:text-orange-200 text-orange-300" href="https://ziondesign.io">Zion Design</a> a web design and development company located in Draper, Utah. I've worked with hundreds of clients on projects big and small.</p>

<p class="text-2xl mt-12">You can find out more about me below!</p>
<div class="h-px bg-slate-100 w-1/4 my-8"></div>


<Buttons/>

<Links/>


<p>Want to get in contact?</p>
<a class="text-orange-400" href="mailto:me@brijr.dev">Shoot me an Email!</a>
<p class="mt-12 text-sm">© Bridger Tower, 1998-Present</p>