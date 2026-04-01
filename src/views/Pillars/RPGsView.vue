<template>
  <div class="rpgs-view bg-surface text-on-surface">
    <!-- Desktop Layout -->
    <main class="hidden md:block pt-16">
      <!-- Hero Section -->
      <section class="relative h-[870px] flex items-center overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img class="w-full h-full object-cover" data-alt="cinematic low angle shot of a majestic ancient fantasy temple hidden in a misty mountain valley with sunbeams piercing through clouds" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPkU4lWc-1TbaSslRt20_ktsMCtijIXINakzSvAjIy5LtgH52W6tScB4wGRlti154CuQ5-vxftJD3n417hg5j_fset8U2owcYTYsaqDnDxTmk5_6oa9UHM4dIh6Wnfi4xEnSi07WK8ZSRop7OHRnnMlXC2jBlmKfZ4ClokiaQOUTqaSiLWfqnxL_vMdgoCrZIkH37nS4G-RgxiDVcOeCKgHJaiqpk3Z30LxEgqsDcUCwF4MDY-x5CdrVA9ygzdqUpWmegdPI_bWxII"/>
          <div class="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
        </div>
        <div class="relative z-10 px-24 max-w-4xl">
          <span class="text-secondary-fixed text-sm font-bold tracking-[0.3em] uppercase mb-4 block">Editorial Collection</span>
          <h1 class="text-white text-8xl font-extrabold tracking-tighter leading-none mb-8 font-headline">RPGs</h1>
          <p class="text-on-primary-container text-xl max-w-xl mb-10 leading-relaxed font-light">
              Enter the curated arena of collaborative storytelling. From grimdark depths to high-fantasy peaks, your odyssey begins with a single roll.
          </p>
          <button class="bg-gradient-to-r from-primary to-primary-container text-white px-10 py-5 rounded-lg font-bold tracking-tight hover:shadow-xl transition-all active:scale-95">
              Start Your Journey
          </button>
        </div>
      </section>

      <!-- Essential Core Books -->
      <section class="py-24 px-12 bg-surface-container-low">
        <div class="max-w-[1920px] mx-auto">
          <div class="flex items-end justify-between mb-16 px-12">
            <div>
              <h2 class="text-primary text-5xl font-black tracking-tighter font-headline">Essential Core Books</h2>
              <div class="h-1.5 w-24 bg-secondary mt-4"></div>
            </div>
            <p class="text-on-surface-variant font-medium max-w-md text-right">The foundations of every great campaign. Masterwork tomes for the dedicated chronicler.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-12">
            <!-- Book Card 1 -->
            <div class="group bg-surface-container-lowest p-6 rounded-xl hover:shadow-2xl transition-all duration-500">
              <div class="aspect-[3/4] rounded-lg overflow-hidden mb-6 bg-surface-container-highest relative">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="aged leather bound fantasy book with intricate gold embossing and silver metal corners on a dark wooden table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPsnyvm45V8AdKV6BKw4K1Ve0ZTClhhJ9zgY9NWWNIdw-Ri5olDg_EBN4vvuKsqygIlNdRU6xnfGAs69emwJRrAQHQUoN7RxY-RqttOtJvBAy7qRBg2TYV4dJ2PFLmec9Hf1cfJm1ENEaIENkD92NpYW1TXpvrpdyrbHbL7fWQwDfKYcI9nwR22l1XE9v6_7myEN_p6VCyn2dA6hzH_6-2hLc5Q92jngMjRRCrAnBrxSoBwyjtFyl0kz9Vi0uycis1vWndbpXNoK4O"/>
                <div class="absolute top-4 right-4 backdrop-blur-md bg-white/20 px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-widest">Masterwork</div>
              </div>
              <h3 class="text-primary text-2xl font-bold mb-2">The Chronicler's Tome</h3>
              <p class="text-on-surface-variant mb-6 text-sm">The definitive guide to world-building and lore preservation.</p>
              <div class="flex justify-between items-center">
                <span class="text-secondary font-black text-xl">$59.99</span>
                <button class="material-symbols-outlined bg-surface-container text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-colors">add_shopping_cart</button>
              </div>
            </div>
            <!-- Book Card 2 -->
            <div class="group bg-surface-container-lowest p-6 rounded-xl hover:shadow-2xl transition-all duration-500">
              <div class="aspect-[3/4] rounded-lg overflow-hidden mb-6 bg-surface-container-highest relative">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="mysterious dark fantasy tome with glowing purple runes and velvet textures in a dimly lit library setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlTY3WWGXWSmhylR5YgHwO3SfYBsUQnPlJS99rMGkEL5aW3NPwxbSusC_0SHXURNZGNFMnb5MMK9n0hATySvZxzU58OUjV7gYZngl7lc5SP8UkywWX6cG3vvqLcEb7PBjCMQsJFHTdeccyN0mu2oOK0zUywHGNf8zOSfI11GXCVFiqi-dDioeR6zIlilRh6-AFP7gN6aSTsQ0z629RcwdciOrdX83jf4LOmDVSx56Mhr4bYLvA3wRfVyiDsPwT3epLmzhBKzChtf4s"/>
              </div>
              <h3 class="text-primary text-2xl font-bold mb-2">Path of Shadows</h3>
              <p class="text-on-surface-variant mb-6 text-sm">Advanced mechanics for stealth, intrigue, and the darker arts.</p>
              <div class="flex justify-between items-center">
                <span class="text-secondary font-black text-xl">$44.99</span>
                <button class="material-symbols-outlined bg-surface-container text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-colors">add_shopping_cart</button>
              </div>
            </div>
            <!-- Book Card 3 -->
            <div class="group bg-surface-container-lowest p-6 rounded-xl hover:shadow-2xl transition-all duration-500">
              <div class="aspect-[3/4] rounded-lg overflow-hidden mb-6 bg-surface-container-highest relative">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="ancient blue manuscript with celestial maps and glowing silver constellations on thick parchment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6EzHiFued1FKT2AKXQr9cca1aZEz-GeAJJkfV535q5TmQU20OwmKcjsKEbISF-gcS0NdD_--fYvJcDc0FlZaAoPPP2FscQ2Zua54kC083uq4nzIkqdRi6glk2PyAdt3HVguGb-QfQHziB8hvEdgQfA2bbPF4O7BIDkaoxS6C9zwhPg4nxW-SAmywo3jNO6dpoYguRKJXb5A6SdjLw2SaozlTt9bMMgth4IR5-hfUsK-psfLnDgauealhq0ta5nCFSuUP3dLuZxhSA"/>
              </div>
              <h3 class="text-primary text-2xl font-bold mb-2">Arcane Origins</h3>
              <p class="text-on-surface-variant mb-6 text-sm">A deep dive into the primal sources of magic and spellcrafting.</p>
              <div class="flex justify-between items-center">
                <span class="text-secondary font-black text-xl">$49.99</span>
                <button class="material-symbols-outlined bg-surface-container text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-colors">add_shopping_cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Handcrafted Dice -->
      <section class="py-24 px-12 bg-surface">
        <div class="max-w-[1920px] mx-auto grid grid-cols-12 gap-12">
          <div class="col-span-4 flex flex-col justify-center">
            <h2 class="text-primary text-6xl font-black tracking-tighter leading-none mb-6 font-headline">Handcrafted Dice</h2>
            <p class="text-on-surface-variant text-lg mb-8 leading-relaxed">Engineered for balance, designed for legend. These aren't just tools; they are the artifacts of your destiny.</p>
            <a class="text-secondary font-bold flex items-center group" href="#">
                View Entire Collection 
                <span class="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
            </a>
          </div>
          <div class="col-span-8 grid grid-cols-3 gap-6">
            <!-- Dice 1 -->
            <div class="bg-surface-container-low rounded-xl p-4 group">
              <div class="aspect-square rounded-lg overflow-hidden mb-4 bg-surface-container-highest">
                <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="close-up of nebula themed translucent dnd dice with swirls of purple, blue, and gold flakes on a reflective surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhHT8W-iZdeJpsIhTwS35Rltq39IV3s2Bfh0iNLb6zfp7xXa_1GUB2EPhRtmeuCJOsQt-R-8xwFmOfMDIhXukhSlb4KeFhoFtjdfeOO5xjac1B8OI84bdfz9TjAIDgPjh8Fk5NgI-wrOo2zAxG8KJ0lvR78wF7K8HSvqgN_MGlj_qA6qri_3Jll74AhncyLHAW35O5eQqRHEUqDOvlnFZcGivOiId0sFLHcX5Ijivumk0Ctu0ZpEglPINx69eyZc0cxgN2MxjndWcK"/>
              </div>
              <h4 class="font-bold text-primary">Nebula Shard Set</h4>
              <p class="text-xs text-on-surface-variant mb-4">Acrylic & Cosmos Dust</p>
              <span class="text-secondary-container bg-on-secondary-container/10 px-3 py-1 rounded-full text-sm font-bold">$35.00</span>
            </div>
            <!-- Dice 2 -->
            <div class="bg-surface-container-low rounded-xl p-4 group">
              <div class="aspect-square rounded-lg overflow-hidden mb-4 bg-surface-container-highest">
                <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="heavy solid brass 20-sided die with deeply engraved numbers and a weathered vintage patina" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfl_52hIK16w0n43gQM_Yr4Q7CI5XkLypwmm68XpcvDH9zMiZE3js-jtY2SCC4aIFvvD6K999y0Mt3WWDeMDoowUgS3HX79uhxl6XgOlqcKR38iGSfSniu0VHZht5pvKHypfoz2raZlV2ZSMzMwUMTmdRvgAgOmnmv_6yQBlM7XVWQEzrXjDcN0lR-5OQwzrmgD5QS29yj7LKz8pfTbUzkZwTNhKdpttMwKqZiBdGs-vzvsXjTYrR70TH9ysbnIKWhyIGKoByYRLO3"/>
              </div>
              <h4 class="font-bold text-primary">Solid Brass D20</h4>
              <p class="text-xs text-on-surface-variant mb-4">Pure Aged Brass</p>
              <span class="text-secondary-container bg-on-secondary-container/10 px-3 py-1 rounded-full text-sm font-bold">$18.00</span>
            </div>
            <!-- Dice 3 -->
            <div class="bg-surface-container-low rounded-xl p-4 group">
              <div class="aspect-square rounded-lg overflow-hidden mb-4 bg-surface-container-highest">
                <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="minimalist handcrafted ebony wood dice set with silver inlay numbers sitting on a dark linen cloth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4FN7lAh8xkYNH4nYLL4MQW--P7I-qPUTrSgV0TRyRxaDQXzm8PipRPzhGhN-D_Z1uVq7MSopAE3Nz6qXNCxhQukUl9Wq8eBwt6CU9opCTFNwEVHNKF7sxnpPZMNNvDnd0b99LNK_VSxOBzQO0U3ZxGLnJ0KXaQzPeXVK96OZoQtkEeTL9cacQGed9EJOk3MMBvE0zv2y3QCJ9yoi1AvxtDdBylxmpLR49cwWXTPHqULRZwWo0cETmOkaH55DNkcXlzhxIcD91fDGP"/>
              </div>
              <h4 class="font-bold text-primary">Ebony Wood Set</h4>
              <p class="text-xs text-on-surface-variant mb-4">Polished African Ebony</p>
              <span class="text-secondary-container bg-on-secondary-container/10 px-3 py-1 rounded-full text-sm font-bold">$85.00</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Campaign Modules -->
      <section class="py-24 px-12 bg-surface-container-low">
        <div class="max-w-[1920px] mx-auto flex gap-12">
          <!-- Featured Module -->
          <div class="flex-1 relative rounded-2xl overflow-hidden group">
            <img class="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000" data-alt="atmospheric cinematic shot of a ruined gothic castle fortress at night under a blood red moon with flickering torches" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArY8vuUk3fie2EPxrBHTG0KiE_YS69f1gFg4tLTYqrwALJEK3FB0mpzbEkOoUOoyKSHylWCRFSatLxyDJBekDrU7zTYJ-23jiqIqEsla68XmhmV-MQS7iS-idbRsbKIZKZXzPL2lIjty2Lscp7j7dIj0XBbiUBGUMlh3UcXKGGFUaG1eEABia75zObqQ27a4r1FfZe_kttTIzABi2Yc2g7jkoWIksT-qOy5so-DS9UQ9vZM3g8kg-iQ_rprP2nWhurg_0kKaL09XBm"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-12">
              <span class="bg-error text-white text-xs font-bold px-4 py-1 rounded-full w-fit mb-4">Trending Module</span>
              <h2 class="text-white text-5xl font-black mb-4 font-headline">Siege of the Crimson Hold</h2>
              <p class="text-slate-300 text-lg mb-8 max-w-lg">An epic level 5-10 adventure spanning across the scarred plains of the North. Includes 4 massive battlemaps.</p>
              <button class="bg-white text-primary px-8 py-4 rounded-lg font-bold w-fit hover:bg-slate-100 transition-colors">Claim Module</button>
            </div>
          </div>
          <!-- Weekly Adventure -->
          <div class="w-1/3 bg-primary-container rounded-2xl p-12 flex flex-col justify-between border-4 border-primary/20">
            <div>
              <div class="material-symbols-outlined text-orange-400 text-5xl mb-6">auto_awesome</div>
              <h3 class="text-white text-4xl font-bold mb-4 tracking-tight font-headline">Weekly Adventure</h3>
              <p class="text-on-primary-container leading-relaxed mb-8">Every Monday, we release a curated one-shot adventure for our members. High stakes, unique mechanics, zero prep.</p>
              <ul class="space-y-4 mb-8">
                <li class="flex items-center text-white/80">
                  <span class="material-symbols-outlined text-orange-400 mr-3 text-sm">check_circle</span>
                  Digital Battlemaps
                </li>
                <li class="flex items-center text-white/80">
                  <span class="material-symbols-outlined text-orange-400 mr-3 text-sm">check_circle</span>
                  Pre-generated NPC Stats
                </li>
                <li class="flex items-center text-white/80">
                  <span class="material-symbols-outlined text-orange-400 mr-3 text-sm">check_circle</span>
                  Original Soundtracks
                </li>
              </ul>
            </div>
            <button class="w-full border-2 border-orange-400 text-orange-400 py-4 rounded-lg font-bold hover:bg-orange-400 hover:text-white transition-all">Subscribe to Weekly Drops</button>
          </div>
        </div>
      </section>

      <!-- Digital Library Banner -->
      <section class="mx-12 my-24 bg-surface rounded-3xl overflow-hidden relative border border-outline-variant/15">
        <div class="flex items-center">
          <div class="w-1/2 p-20 z-10">
            <h2 class="text-primary text-5xl font-black tracking-tight mb-6 font-headline">Digital Library Access</h2>
            <p class="text-on-surface-variant text-xl mb-10 leading-relaxed">Take your campaigns anywhere. Sync your physical purchases with our digital vault. Access high-res maps, lore expansions, and automated character sheets on any device.</p>
            <div class="flex gap-4">
              <button class="bg-primary text-white px-8 py-4 rounded-lg font-bold">Launch Library</button>
              <button class="text-primary font-bold px-8 py-4 flex items-center group">
                  Learn How It Works 
                  <span class="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">chevron_right</span>
              </button>
            </div>
          </div>
          <div class="w-1/2 h-[500px] relative">
            <img class="w-full h-full object-cover" data-alt="sleek modern digital tablet showing a fantasy world map interface on a minimalist desk with warm ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjmhxtm6eA5CX6xk9nMVUTGxReQr60wASW0yMXBMrxcEfoZR_VZlRQY7PrOKX24EphB5l4c9ZZ3KGjrzEEBGzZj2DTBcVqWkymNJBlX6SYoIbRKuas6cUoBlpk6cn4LntcB8HucegZHf1rk-Hmn_gjJp8ImPoDsqfpf81VSH6R_YdeHgnPguA8m5LNC5uHOXtBARptZZJa0QFLj1lxlKPUqoAE8pLjRz0cwS45WCbxLB2v632w9yjz1ioxlCDcimv0KZ89tx3q1ywh"/>
            <div class="absolute inset-0 bg-gradient-to-l from-transparent to-surface"></div>
          </div>
        </div>
      </section>

      <!-- Ready to Roll? Section -->
      <section class="py-32 px-12 text-center bg-slate-950 relative overflow-hidden">
        <div class="absolute inset-0 opacity-20">
          <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#265478_0%,transparent_70%)]"></div>
        </div>
        <div class="relative z-10">
          <h2 class="text-white text-7xl font-black tracking-tighter mb-8 font-headline">Ready to Roll?</h2>
          <p class="text-sky-300/80 text-xl max-w-2xl mx-auto mb-12">Join the inner circle of the ISTMO arena. Exclusive content, early access to limited sets, and a community of serious hobbyists await.</p>
          <div class="flex justify-center gap-6">
            <button class="bg-secondary-container text-white px-12 py-5 rounded-lg font-bold text-lg hover:scale-105 transition-transform">Become a Member</button>
            <button class="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">Browse All Gear</button>
          </div>
        </div>
      </section>
    </main>

    <!-- Mobile Layout -->
    <main class="block md:hidden pt-16 pb-24">
      <!-- Hero Section -->
      <section class="relative h-[530px] flex items-center px-6 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img class="w-full h-full object-cover brightness-[0.4] contrast-125" data-alt="Cinematic wide shot of a mysterious ancient stone altar in a deep misty blue forest with golden glowing runes and magical dust" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkvgR0RIDEQKaG4yKwLCIkllQDFixE7K9cbk2DBjJb7USyG5nF1f5lb07jlR-WUqTsPPlxfITol2erMqVvDhLscPyHrKlLVXxo7J2CXFr62aKhzsrPLgSbFdcKcY4LLtLaabN0S8ALuwV6wzEF-ZM0vhJckWyWWns15OVS0NwcWVY_GcWXMCU2nY-1eDeWaBtasUBEzqPpddp3uvYJ6NVpmadzSD55GO7PQsZpabprI3NONvInrZ846AcRopYX1Sf0teKuZTsxvrvw"/>
          <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-primary/20"></div>
        </div>
        <div class="relative z-10 w-full">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 backdrop-blur-md border border-secondary-container/30 mb-4">
            <span class="w-2 h-2 rounded-full bg-secondary-container"></span>
            <span class="text-[10px] font-bold uppercase tracking-widest text-secondary-container">New Realm Awaits</span>
          </div>
          <h1 class="text-5xl font-extrabold text-on-background tracking-tighter mb-2 leading-none font-headline">RPGs</h1>
          <p class="text-on-surface-variant max-w-[280px] text-sm leading-relaxed mb-6 italic">Forge your destiny in worlds woven from imagination and shadow.</p>
          <button class="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded-lg font-bold text-sm shadow-xl active:scale-95 transition-transform">
              Start Your Journey
          </button>
        </div>
      </section>

      <!-- Essential Core Books (Editorial Layout) -->
      <section class="px-6 py-10 bg-surface">
        <div class="flex items-baseline justify-between mb-8">
          <div>
            <h2 class="text-2xl font-extrabold tracking-tight text-primary uppercase font-headline">Essential Core Books</h2>
            <div class="h-1 w-12 bg-secondary-container mt-1"></div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-8">
          <!-- Highlight Card -->
          <div class="relative group">
            <div class="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-highest">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close up of a weathered leather bound grimoire with embossed gold filigree patterns sitting on a dark wooden table with candle light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPoVeKwai_CRwzO077aA8inqmx_Bivzu5BzU4Zt0eWE3hkwXgWDj6DT_4XMcIhhNy4vC5TBaGIR4W9pir0Gygc7rCBBDbrZ1B2ksFfV20kEtEXUTTURisIIZRy1XyE6b3hXkw4g32zKUond9UHMJZ5LkW3gpw2OwuMa8Xw71Y6syxpOG5dN6u39chuVekvESh7gMln6lGRVEeg_f380SDQXBI-hNLqOKsOrJBqK_hKqmVPu9dDjVtwxmt3CqbfAv-5qxdhQ7PSWFQ1"/>
              <div class="absolute top-4 right-4 glass-effect px-3 py-1 rounded-full text-[10px] font-bold uppercase text-primary">Masterwork</div>
            </div>
            <div class="mt-4 flex justify-between items-start">
              <div>
                <h3 class="font-bold text-lg text-on-surface">The Chronicler's Tome</h3>
                <p class="text-xs text-on-surface-variant">The definitive guide to world-building and lore.</p>
              </div>
              <span class="text-secondary font-bold">$54.99</span>
            </div>
          </div>
          <!-- Secondary Scroll -->
          <div class="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            <div class="min-w-[200px] bg-surface-container-lowest p-4 rounded-xl shadow-sm">
              <div class="aspect-square rounded-lg bg-surface-container mb-3 overflow-hidden">
                <img class="w-full h-full object-cover" data-alt="Minimalist design of a heavy black book with silver lettering titled Shadows and Light in a studio lighting setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO4OSfot9kZ_d1SZkNMf_BK5a-52vrJV-qVYZaiV3FfHiiJ89Xa4dEkvX5XEYbhJbLv-Ca6mwWmTm73FHLd3qWmxhVzuEk7QY3OweFNMkvrLPmhVdo6fpP8QTEjQ0zyEwbBSXVoCtTLkIrbSm-o-543iuX4ElMwdjLMZhEC8l2qyFTuM3BOmXEMYQ_7KCcbsehRFU4K4R6-QXNOocI_eKjheYGe3zXTJ9WJej96dMgCQkX-h5nyoxEY_SDH2TxYxZDZj9zzMFQaWO4"/>
              </div>
              <h4 class="font-bold text-sm">Path of Shadows</h4>
              <p class="text-[11px] text-on-surface-variant mb-2">Advanced Stealth Mechanics</p>
              <span class="text-xs font-bold text-primary">$39.00</span>
            </div>
            <div class="min-w-[200px] bg-surface-container-lowest p-4 rounded-xl shadow-sm">
              <div class="aspect-square rounded-lg bg-surface-container mb-3 overflow-hidden">
                <img class="w-full h-full object-cover" data-alt="Vintage style hardcover book with a glowing blue crystal embedded in the center sitting on an old map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ5vvpqae4leh2yO-uMMY878sqIkTpUhvrzF8x-Fj2z-T-ibWodkGyMxRkly8hRNPb-ZK0alziCq34xaFaixb-T-Wmq0EjVhAlu7hxOeuA5ytyBPmxOSYpPDsypMnhhTYFzzcN2QhgB3q1Opy-PWpHjDpfxb_4bXkX6BQBjgVoKxcY19sXHEMQjeqkD9V1ZrknkDM_ftgwFm-xBEnZ_9tNBfeBQTtROgX2O0g4jw5-9BcHxLd-B0pIIsWq95HsCbQXu6cNzDPfcuWJ"/>
              </div>
              <h4 class="font-bold text-sm">Arcane Origins</h4>
              <p class="text-[11px] text-on-surface-variant mb-2">Spellcasting Fundamentals</p>
              <span class="text-xs font-bold text-primary">$45.00</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Handcrafted Dice (Tonal Layering Section) -->
      <section class="bg-surface-container-low py-12 px-6">
        <div class="mb-8 text-center">
          <span class="text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant">Precision Engineering</span>
          <h2 class="text-3xl font-extrabold tracking-tight text-on-surface mt-2 font-headline">Handcrafted Dice</h2>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-2 relative h-48 rounded-2xl overflow-hidden bg-primary-container">
            <img class="w-full h-full object-cover opacity-60" data-alt="A set of sharp edge resin dice with shimmering blue and gold flakes inside, macro photography with bokeh background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4yMA_RwFWwNkcYCEi19TjK0K63_3_tkihQfaSFOOLng2AF2CJxWEdb2ELSrwRZCvdcXD1zHGU_sGuJzC2J0xbqATVVlm_NkDSjIp5sYKzBegNIBlmKmf3f7V2BaUi3LYPEnxLeco4jacY_gz26vqptZ31yT8aXz1uZn_PdKhqPvMn2dYvoYRIqlAdNQJOYYo1ZHcHOLPn53i0hU4mMzvMhhNuibIiFmLRySCgNsV3ndGGa2BcW8I4vv7RCKtFu0iP3ubAVzVFMewJ"/>
            <div class="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 class="text-on-primary font-bold text-xl">Nebula Shard Set</h3>
              <p class="text-on-primary-container text-xs">Sharp-edged premium resin</p>
            </div>
          </div>
          <div class="bg-surface-container-lowest p-4 rounded-2xl">
            <div class="aspect-square rounded-xl bg-surface-container mb-3 overflow-hidden">
              <img class="w-full h-full object-cover" data-alt="Single d20 dice made of solid polished brass with intricate engravings on a dark slate surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNOC7uTcaHK6_Enna7NJQklf2vBLZb6Wm97LPtuj2RlqUHcto5YoFOF1XEKCtRrc2S0HtXqHd_EKlFM-LFql84ZHqBNVoLK28wNB7gwKKuxr9Qn4bjvz9GLJBCrL7ve4ZmAm_iFOthShcBvkuA2jdZS52RX1Ok9K8H8FfKxwg_kSnAmhj7bu3kM74uhHGNeAbgVps4angILRr1yi0EXvru1CFMJhXA_bG46_mpzKeSx5ccT7i1VRfW9l6mILmameO7KwhvsMyabd-p"/>
            </div>
            <p class="font-bold text-xs">Solid Brass D20</p>
            <p class="text-secondary text-[10px] font-bold">$22.00</p>
          </div>
          <div class="bg-surface-container-lowest p-4 rounded-2xl">
            <div class="aspect-square rounded-xl bg-surface-container mb-3 overflow-hidden">
              <img class="w-full h-full object-cover" data-alt="A set of carved wooden dice made of dark ebony wood with white painted numbers in a soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Ef0daBmXvBmBn-nHu1bWAauPjRTS11H816OW8uoD2Pka7TOSkAqoJzJQaJsSaoavF-5KfsOTeLVeGeCuHizrF7oSwXnUJFEfrUxk7ydhe4QImOgTbTrGAcbMPYRviBah6ZrQvoaU6AsWdFa07PX6xiUMIeo8DI9pvjq-V53aYQitfl85y-xxPnpr-C3R5-NST3AWpM3miAQQiW6S35xt8iJP5Au3OBsWIz1py-zxSsf_HG5ziQRAlffoxxOq--HLeJUmLBtkMRQz"/>
            </div>
            <p class="font-bold text-xs">Ebony Wood Set</p>
            <p class="text-secondary text-[10px] font-bold">$48.00</p>
          </div>
        </div>
      </section>

      <!-- Campaign Modules (Asymmetric Bento Grid) -->
      <section class="px-6 py-12 bg-surface">
        <h2 class="text-2xl font-extrabold tracking-tight text-on-surface mb-8 font-headline">Campaign Modules</h2>
        <div class="grid grid-cols-12 gap-4 h-[500px]">
          <div class="col-span-7 bg-surface-container-highest rounded-2xl overflow-hidden relative group">
            <img class="w-full h-full object-cover" data-alt="Atmospheric painting of a gothic castle silhouette against a massive blood red moon in a starry night sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5Yfz3sSBHQfmZPd_hZLLm53QcBK6AfJDRn90P0tCaqDDfDtbc5id_OifGrnr77fQvg6ORUIB3MAZWPDEMG0THr1w24G1ROuTe-t0azQQKKRLyGUhh05732Q2k0KUCUcSrGttCS0IQhFIt3tqVpptJQYNqLDZwL6QcPeDWZGn2F0Puxl9p5-nDFY5Q3b7aXFm2bzgul-sjP8u-pDcgjo6dX3oA_dLM2luXSsm78zzTu1DU4kzmnVIj6yMc7cmT8Hk2I1dtxRtERCs8"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
              <h4 class="text-white font-bold text-sm">Siege of the Crimson Hold</h4>
              <div class="flex items-center gap-1 mt-1">
                <span class="text-[9px] text-white/70">Level 5-10</span>
              </div>
            </div>
          </div>
          <div class="col-span-5 grid grid-rows-2 gap-4">
            <div class="bg-surface-container-high rounded-2xl overflow-hidden relative">
              <img class="w-full h-full object-cover" data-alt="Icy mountain peak with a hidden cave entrance glowing with a faint blue light in a blizzard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHpB_4LgUIa04qeoArqxBp4S5dHctuQZAfS4rmnMjbKcSjx-L6evLsfWCVqhonBvJLRAWv3vq9GSZ0QMH-YAYlujf8vFWU7cQIec0jW2HsPj383dIe0h1IAvh4EWNwyUSbT7rpBBomA67CLb41ydsXUKpSWpYqZr7U30VRgI3mhHaTZ69LauajeLNiWyJq1_Uk7PDcsdgaw_thi9QEhDZ8B0dYFnS63paPHSNsUNxbmFESqblLbxRG-vK5oYq2o-CdMeW-JGQ9ylbY"/>
              <div class="absolute inset-0 bg-black/30 p-3">
                <span class="text-[10px] font-bold text-white uppercase bg-error px-2 py-0.5 rounded">Cold</span>
              </div>
            </div>
            <div class="bg-primary rounded-2xl p-4 flex flex-col justify-center">
              <p class="text-on-primary font-bold text-xs mb-1">Weekly Adventure</p>
              <p class="text-on-primary-container text-[10px] leading-tight">Join our Discord for live GM sessions every Friday.</p>
              <span class="material-symbols-outlined text-secondary-container mt-2 text-xl">campaign</span>
            </div>
          </div>
          <div class="col-span-12 h-32 bg-surface-container-low rounded-2xl p-6 flex items-center justify-between">
            <div>
              <h4 class="font-bold text-on-surface">Digital Library Access</h4>
              <p class="text-xs text-on-surface-variant">Over 200 modules at your fingertips.</p>
            </div>
            <button class="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center">
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      <!-- CTA Footer -->
      <section class="px-6 py-12 text-center">
        <h3 class="text-xl font-bold text-on-surface mb-2 font-headline">Ready to Roll?</h3>
        <p class="text-sm text-on-surface-variant mb-8 px-8">Join thousands of players in the world's most immersive storytelling collective.</p>
        <div class="flex flex-col gap-3">
          <button class="bg-secondary-container text-on-secondary-container font-bold py-4 rounded-xl shadow-lg shadow-secondary-container/20">Become a Member</button>
          <button class="bg-surface-container-lowest text-primary border border-outline-variant/30 font-bold py-4 rounded-xl">Browse All Gear</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.glass-effect {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.8);
}
@media (prefers-color-scheme: dark) {
  .glass-effect {
    background: rgba(15, 23, 42, 0.8);
  }
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
