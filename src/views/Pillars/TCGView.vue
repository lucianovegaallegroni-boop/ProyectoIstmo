<template>
  <div class="tcg-view bg-surface text-on-surface">
    <!-- Desktop Layout -->
    <main class="hidden md:block pb-24">
      <!-- Hero Section: Cinematic Banner -->
      <section class="relative w-full h-[819px] flex items-center overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img class="w-full h-full object-cover" data-alt="dramatic cinematic view of a glowing legendary dragon trading card floating in a futuristic dark blue digital void with floating particles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVcV5trpdYugsGViA356zoY0y6-6MTyYs3mcWVrEaFdhK18Fauoj1LCRO1CxFFjr-HYJS63oqzeEuiIasuvgYs2xpGWoToDyzuJQBPykEt-gDMADgl4RMSUoQS1UuKsJo_YOl7qLWe5cKx9W7B8Se3VIZaNGQQpyHq3IGuq2r212Fjlw6_UP48UTYnJ8EfxKGSn0vO_UsWjTrYwgUAghJB9p6nNI6BF_e-Gariw0RjubISE95TldaVCYirVQpjCfVVaqisvXxqTcYR"/>
          <div class="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
        </div>
        <div class="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
          <div class="max-w-2xl space-y-6">
            <span class="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-black uppercase tracking-widest">
                New Release
            </span>
            <h1 class="text-7xl font-extrabold text-white tracking-tighter leading-none font-headline">
                Trading Cards
            </h1>
            <p class="text-xl text-primary-fixed leading-relaxed font-medium max-w-lg">
                Experience the pulse of the arena with rare finds and competitive edge. Curated selections for the ultimate collector.
            </p>
            <div class="pt-4 flex gap-4">
              <button class="px-8 py-4 bg-secondary-container text-on-secondary-container rounded-lg font-bold text-lg hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-secondary-container/20">
                  Explore the Vault
              </button>
              <button class="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
                  View Rankings
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Elite Rarity Section: Bento/Horizontal Grid -->
      <section class="max-w-screen-2xl mx-auto px-8 mt-24">
        <div class="flex justify-between items-end mb-12">
          <div class="space-y-2">
            <h2 class="text-4xl font-extrabold tracking-tighter text-primary font-headline">Elite Rarity</h2>
            <p class="text-on-surface-variant font-medium">Sought-after specimens from the vault.</p>
          </div>
          <a class="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all" href="#">
              View Catalog <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Card 1 -->
          <div class="group relative bg-surface-container-lowest rounded-xl overflow-hidden p-4 flex flex-col gap-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div class="relative h-80 rounded-lg overflow-hidden bg-surface-container-highest">
              <img class="w-full h-full object-cover" data-alt="high quality grading slab containing a holographic trading card featuring a celestial wizard in dynamic pose" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOXNlZEUxLSLQxrznUNEP5Soh4qyopTmXWPlVjO7DE_KCnPEEBR2DW91posiHAeP4mvcuEwixRYGby9BVvlyMv9AGir7WBiYeHE6zEr8EEGLM5NVVBTTTmA-VVIfgFp2xdEQp3i4FVo16dBpgRYsAqi6vHN3_Z1-6dIoPbHxUtjoBzh9DzBqOpmIssRwP159sPRpDKiTWVCpCFeN6VAz6L2EiWJk9lCIXan8CxOAzzQ5ipO-2DCf_Ea9FG9vKqY9_cX1ejRZZz_58t"/>
              <div class="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-black uppercase text-primary border border-primary/10">
                  Limited
              </div>
            </div>
            <div class="space-y-1">
              <div class="flex justify-between items-center">
                <span class="text-xs font-bold text-secondary uppercase tracking-tighter">Ultra Rare</span>
                <span class="px-2 py-0.5 bg-green-100 text-green-800 text-[10px] font-bold rounded">Grade 10 Pristine</span>
              </div>
              <h3 class="text-lg font-bold text-on-surface">Celestial Arcanist</h3>
              <p class="text-2xl font-black text-primary">$1,250.00</p>
            </div>
          </div>
          <!-- Card 2 -->
          <div class="group relative bg-surface-container-lowest rounded-xl overflow-hidden p-4 flex flex-col gap-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div class="relative h-80 rounded-lg overflow-hidden bg-surface-container-highest">
              <img class="w-full h-full object-cover" data-alt="shiny trading card in plastic sleeve showing a mechanical dragon breathing blue fire against a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ7VpdwwnAAjPjY-7QfCWFAX4OKT10s45EE9GHdFu-nNMR1THGNxswqBEywSTeoDAR7vRFX51VHPRZaIetCP-V82te9xbbo8iNaTvukJdeMlcv5h7ZGCTlviWEDnXb5yH0MvknHHLVi2_WTK8WFLEBsv799KPTqSs68sM_AVAsnBJtU5JnrDXAZtNPk99LTuDC-9oXwGllGY04ERhHICjG5_j_AAo9nvhz0EodpgUp-dRk84M3WzBQZPpor3hK56VYkH4JDqHrjMXq"/>
            </div>
            <div class="space-y-1">
              <div class="flex justify-between items-center">
                <span class="text-xs font-bold text-secondary uppercase tracking-tighter">Legendary</span>
                <span class="px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold rounded">Grade 9.5 Mint</span>
              </div>
              <h3 class="text-lg font-bold text-on-surface">Void Mech Dragon</h3>
              <p class="text-2xl font-black text-primary">$890.00</p>
            </div>
          </div>
          <!-- Card 3 -->
          <div class="group relative bg-surface-container-lowest rounded-xl overflow-hidden p-4 flex flex-col gap-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div class="relative h-80 rounded-lg overflow-hidden bg-surface-container-highest">
              <img class="w-full h-full object-cover" data-alt="rare vintage trading card with golden borders featuring a traditional knight with detailed metallic armor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbomaOeidm8dcL29q4CVBVi5Vp_B3L6IxzddHwpwFdFg8uGaDK1HDiQkPnwMm0AlR7qzj2W1D0cWG-oysn3sbv17fOIqYi3dmXH67bYrqUV6oF5theDAwkdinB4cunp6GVDYVvUc4OOKxowtOSRyRdQeN_u7y8t_4ivYWNiSOxII49u_ro6Gcb0h7xAwEGAsgUHapQp8709ud9gTQU6fNCBFgWn3OAybfsdqP7_ZkrapB7XDBAVDRTel9xu-WMKLBOXrPY-CG3CGZg"/>
              <div class="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-black uppercase text-primary border border-primary/10">
                  Limited
              </div>
            </div>
            <div class="space-y-1">
              <div class="flex justify-between items-center">
                <span class="text-xs font-bold text-secondary uppercase tracking-tighter">Mythic Rare</span>
                <span class="px-2 py-0.5 bg-green-100 text-green-800 text-[10px] font-bold rounded">Grade 10 Pristine</span>
              </div>
              <h3 class="text-lg font-bold text-on-surface">Ironclad Vanguard</h3>
              <p class="text-2xl font-black text-primary">$2,400.00</p>
            </div>
          </div>
          <!-- Card 4 -->
          <div class="group relative bg-surface-container-lowest rounded-xl overflow-hidden p-4 flex flex-col gap-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div class="relative h-80 rounded-lg overflow-hidden bg-surface-container-highest">
              <img class="w-full h-full object-cover" data-alt="abstract holographic texture of a high grade trading card with shimmering rainbow light reflecting off a dark surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIo2kTBY6_Vw8BFZJQFEV-j_p__07TQfONKwLcRnpL7CGjeYxunaHTICGh4UKJJBK-9wsmPbq4ueFgGbGOU2I-tVPeROQ0jFKo8ttjGoJjmStc53fLndav2zC9YwsjXQsVfiPIFmkIFzhxFQ3IEvFuhNQBmsLamgkkrgT9f-E-FFrVjvp2QgAQ5I7oHjIq4AnEV2W14fWZz5zqjxjTnlzb8HWdOGzwgYnfc-jGEFObm189-Xw5WLGyx3CyxKWLxl-ejPXbBJb_6XR_"/>
            </div>
            <div class="space-y-1">
              <div class="flex justify-between items-center">
                <span class="text-xs font-bold text-secondary uppercase tracking-tighter">Secret Rare</span>
                <span class="px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold rounded">Grade 9.0 Exc</span>
              </div>
              <h3 class="text-lg font-bold text-on-surface">Spectral Singularity</h3>
              <p class="text-2xl font-black text-primary">$640.00</p>
            </div>
          </div>
        </div>
      </section>

      <!-- New Booster Packs Section: Featured Area -->
      <section class="max-w-screen-2xl mx-auto px-8 mt-24">
        <div class="bg-primary text-white rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-2xl">
          <div class="p-16 flex flex-col justify-center gap-8">
            <div class="space-y-4">
              <span class="text-on-primary-container font-black tracking-[0.2em] uppercase text-sm">New Expansion Drop</span>
              <h2 class="text-6xl font-extrabold tracking-tighter leading-tight font-headline">Scarlet Void:<br/>The Awakening</h2>
              <p class="text-primary-fixed text-lg font-medium opacity-90 max-w-md leading-relaxed">
                  Dive into the abyss with 160 new cards. Featuring the first-ever "Void-Glass" holos and secret rare reprints of arena favorites.
              </p>
            </div>
            <div class="flex items-baseline gap-4">
              <span class="text-4xl font-black">$149.99</span>
              <span class="text-primary-fixed/60 line-through text-xl font-bold">$179.99</span>
              <span class="text-secondary-container font-bold text-sm">Case Price (6 Boxes)</span>
            </div>
            <div class="flex gap-4">
              <button class="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-xl font-extrabold text-xl hover:brightness-110 active:scale-95 transition-all">
                  Pre-Order Scarlet Void
              </button>
              <button class="bg-white/10 border border-white/20 px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/20 transition-all">
                  Explore Set List
              </button>
            </div>
          </div>
          <div class="relative bg-surface-container-highest min-h-[500px]">
            <img class="absolute inset-0 w-full h-full object-cover" data-alt="premium sealed trading card booster boxes stacked neatly with vibrant red and dark blue graphic design labels" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoFNQwTCrmrTKczZ01yMConMZI_54jsghRV_zutBwmtakCbIKvvyeh2N1qr2dT6feKRovBIWRrOQUHSOVj8mN5x2azqXP01qikv3rhLLsicMndOFQR7wmYf8BxgNGWMvhGTSQ31ri0CW2tnJQZJpJ_3j3T1icBx6WhVkz15fFeI-2vkmciz5XF7b7npSHhp50kps_2dsW5SJuPwCKiaKLDFWCluJy6grL7g1W-zj235K5gqC6GgX_3txvxTEur6YrShGPyQtvMMJFp"/>
            <div class="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary"></div>
          </div>
        </div>
      </section>

      <!-- Competitive Accessories Section -->
      <section class="max-w-screen-2xl mx-auto px-8 mt-24">
        <div class="mb-12">
          <h2 class="text-4xl font-extrabold tracking-tighter text-primary font-headline">Competitive Accessories</h2>
          <p class="text-on-surface-variant font-medium mt-2">Arm yourself with professional-grade tournament gear.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Accessory 1 -->
          <div class="flex gap-6 items-center p-6 bg-surface-container-low rounded-2xl group hover:bg-surface-container-high transition-colors">
            <div class="w-32 h-32 flex-shrink-0 bg-surface-container-highest rounded-xl overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="premium leather-bound deck box for trading cards in deep navy blue with magnetic closure and elegant logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2EJDTW7QqfTsHcPmsfPbMU3UoKdxmGUaqJohoAV-MM893qEW7N6BNGw9YyS0AencA4saH5FTjQcHtjDtzY5YrbJLhjTJpqgUGDxSbDF9BwXqxbHzfVjQEVZs-uZ5FfUJHZVIB9RfIOsO1hQZPZYHNlHbFQOw6RXqAs13_-EMO-FYMGOoN3lkhUdD8Qme4YHYqoQETkXNW3yi0G25EdQdbxiqO5CK2xuvFpSYoSsfeHxQYHVJZo-Kwk9kiax2xomz5-glo83k5kiIu"/>
            </div>
            <div class="flex-grow space-y-2">
              <h4 class="text-xl font-bold text-on-surface">Arena Vault Box</h4>
              <p class="text-primary font-black">$34.99</p>
              <button class="w-full py-2 bg-primary text-white rounded-lg font-bold text-sm hover:brightness-125 transition-all active:scale-95 flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-sm" data-icon="add_shopping_cart">add_shopping_cart</span>
                Add to Cart
              </button>
            </div>
          </div>
          <!-- Accessory 2 -->
          <div class="flex gap-6 items-center p-6 bg-surface-container-low rounded-2xl group hover:bg-surface-container-high transition-colors">
            <div class="w-32 h-32 flex-shrink-0 bg-surface-container-highest rounded-xl overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="close up of premium matte card sleeves in various colors with high clarity and textured finish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF2Q8HxAEftjE51IhtL-1YHbac2XBe8PsjzNvVHGQW4Txat7aReVg2S34YdZqSMHTjKMftYQcyABP9KrTMrxaUgF6cuZrit3gfHOW260XUkas4azUZPs7uat5TBLoew9wIa7yxoJV1-2GJGsW-LXrVd1nPEfO4awYKVERB3pzhXdsj8di9mjuG6NCS79t8lQHFhdF8GqtfxBt1NwBnnXdgpF1KDZ3qic7quCYK9nF4qBkq70jKVM1hGYFJI2Yudz55MV0r_v_Mqh1U"/>
            </div>
            <div class="flex-grow space-y-2">
              <h4 class="text-xl font-bold text-on-surface">Master Grade Sleeves</h4>
              <p class="text-primary font-black">$12.99</p>
              <button class="w-full py-2 bg-primary text-white rounded-lg font-bold text-sm hover:brightness-125 transition-all active:scale-95 flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-sm" data-icon="add_shopping_cart">add_shopping_cart</span>
                Add to Cart
              </button>
            </div>
          </div>
          <!-- Accessory 3 -->
          <div class="flex gap-6 items-center p-6 bg-surface-container-low rounded-2xl group hover:bg-surface-container-high transition-colors">
            <div class="w-32 h-32 flex-shrink-0 bg-surface-container-highest rounded-xl overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="top down view of a heavy rubber playmat for trading cards with artistic celestial landscape print" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx60_AnY28acdEhTSU9sbAFD0El6Qq_YV_-v1I-caJpAIu7DOEo3EeQCuVfizozBOpTzDx0a8mBZk0QjXQcCCkjfdVAOTyLEERZfJIXQGdpwx9o2l9kwfNbDk54sf5fLb733q6WwttwI2RNDoFSmGE8NWKc4-XrsgRa4yxxvdw60aEjxr_RrPnxWraNBOudLeiUDo20AUB-cZA96v6Egxlp6bztCnyqnBMqug-HQBVKTYD46jOTIrAOS7dBEghok0YgO9TsSSkmMEi"/>
            </div>
            <div class="flex-grow space-y-2">
              <h4 class="text-xl font-bold text-on-surface">Arena Playmat</h4>
              <p class="text-primary font-black">$29.99</p>
              <button class="w-full py-2 bg-primary text-white rounded-lg font-bold text-sm hover:brightness-125 transition-all active:scale-95 flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-sm" data-icon="add_shopping_cart">add_shopping_cart</span>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Mobile Layout -->
    <main class="block md:hidden pb-12 pt-4">
      <!-- Hero Section -->
      <section class="relative overflow-hidden px-6 pt-8 pb-12">
        <div class="relative z-10">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest mb-4">
              Pillar: Istmo Games
          </div>
          <h2 class="text-4xl font-extrabold text-primary leading-tight font-headline tracking-tighter mb-4">Trading Cards</h2>
          <p class="text-on-surface-variant text-base mb-8 max-w-[280px]">Experience the pulse of the arena with rare finds and competitive edge.</p>
          <button class="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-bold text-sm shadow-xl active:scale-95 transition-transform">
              Explore the Vault
          </button>
        </div>
        <!-- Asymmetric Hero Visual -->
        <div class="absolute -right-12 top-10 w-64 h-80 rotate-12 z-0">
          <div class="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <img alt="Rare Card" class="w-full h-full object-cover" data-alt="close-up of a holographic trading card with vibrant iridescent reflections, mythical creature artwork, and sharp crystalline details" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKf9LH1lhpXGRvPMMjrZ8wH4D1UJAuUKUlQE3l_eriPsLLzR06EJDNoZHM1hB_7nr8s0H7lykJPnv9ldH4IFwqR5BaDKdlDpfve0a-hWdB7f2oBQzccUEhb2ept05xdGb2amUIjLaqwGURUeLgNhe53aqmgreQawoNbYxHKHOrLRa_mbpEy0vHIBogjeYnu_Aq4XrhUloDlYa3fKzV11vThhRWzJWTE0XKYKu8p1rG3je305k_D33Jo7MAM6cy8F8h8H_ug33bc_PS"/>
            <div class="absolute inset-0 holo-shimmer opacity-50"></div>
          </div>
        </div>
      </section>

      <!-- Elite Rarity Bento Section -->
      <section class="px-6 py-8">
        <div class="flex items-end justify-between mb-6">
          <div>
            <h3 class="text-2xl font-bold font-headline text-primary tracking-tight">Elite Rarity</h3>
            <p class="text-xs text-on-surface-variant font-medium">Curated high-value singles</p>
          </div>
          <span class="material-symbols-outlined text-primary" data-icon="stars">stars</span>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <!-- Main Featured Card -->
          <div class="col-span-2 bg-surface-container-lowest rounded-xl p-4 shadow-sm relative overflow-hidden group">
            <div class="absolute top-4 right-4 z-20">
              <div class="glass-card px-2 py-1 rounded-lg text-[10px] font-bold text-primary flex items-center gap-1 border border-white/40">
                <span class="material-symbols-outlined text-[12px]" data-icon="workspace_premium" style="font-variation-settings: 'FILL' 1;">workspace_premium</span>
                LIMITED
              </div>
            </div>
            <div class="aspect-[16/9] rounded-lg bg-surface-container-highest mb-4 overflow-hidden">
              <img alt="Elite Card" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="dramatic macro shot of a rare trading card featuring a celestial dragon, glowing nebula background, deep blues and purples" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDogzDdDTm8uCpAzvGD80X0RxcOM0kZcNSCFgo6fTw5S92uCMwZxE6Wd9L9RVCjy5q4tfO5ttlZ5qvFQAvIR4Dk8BAKxuJAEt1p5yJyoUSsPtXPD-RsiavVLBu2DGfGE7s31p7Q0DTEiH-ENrG3yhlroUk1o3ybWE_W6vtvuMjdtBf-eZwVPeVc6IUuyM6uQWnouHSgevLWFya1ra0fgZWPyYDtyMhfZzKggmZ_pXrEky3Ilgw2PkfLkn4l6V0V1_EGYc28RFSQUqnR"/>
            </div>
            <div class="flex justify-between items-center">
              <div>
                <h4 class="font-bold text-sm text-on-surface">Astral Leviathan</h4>
                <p class="text-xs text-secondary font-bold">Grade 10 Pristine</p>
              </div>
              <div class="text-right">
                <p class="text-lg font-extrabold text-primary">$1,240</p>
              </div>
            </div>
          </div>
          <!-- Secondary Rarity Items -->
          <div class="bg-surface-container-low rounded-xl p-3 flex flex-col">
            <div class="aspect-square rounded-lg bg-surface-container-highest mb-3 overflow-hidden">
              <img alt="Rarity 2" class="w-full h-full object-cover" data-alt="close up of a vintage collectible card with worn edges and intricate fantasy character illustration in warm sepia tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD04g1ttuoCOJgYMojF6Yh8E-GLD4cl9ny9FzrbhVfEnKiLMtSleQAG2rIMoLzKecgsLaaR0VTA5khSWbhFAjVINDC77E86JdwUDL_Jd7dxWO5ODcBFzGRje5aXlRnJArCBAELiBX5hVWnxOHiB44NDk4unsIeGLMVatTegplRWyCgiHrKevJ_XU6e1LWXHaOl8l-gKmVz9XwumzuGxYP5bGKNwjLKsDclxqt-XBWjuMraCvpHRToUdmsSlOzwJ3HCdDvp-Wy6-lZQG"/>
            </div>
            <h4 class="font-bold text-[11px] text-on-surface truncate">Shadow Stalker</h4>
            <p class="text-[10px] text-on-surface-variant font-bold">$340.00</p>
          </div>
          <div class="bg-surface-container-low rounded-xl p-3 flex flex-col">
            <div class="aspect-square rounded-lg bg-surface-container-highest mb-3 overflow-hidden">
              <img alt="Rarity 3" class="w-full h-full object-cover" data-alt="shimmering golden trading card lying on a dark textured surface with sharp diagonal lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7kufr5VM2E4eIBnLy3qVKaZ2YTXr1h8rGMZ-3GdR0AlIb2OBoZq0bOJ4lEnDzrhxVyMDbpJSr7XikcA0roBKzZUodgcLQ1I8HcFyGpd0x3yfVuGNSb483L80lZVnhOFI5zqTM8HFoVFgLwq6B97B-AadhN8ktJvUS3s8QNgC7m8hl0iwgOmtmwRdsTUFIt6bOOXgqmYDRUVWz5Ia3geu4Sg9qhT-GILCejPdbeN8iDWDsu8EUl1m2V-CxBS-HGPR7zR44o5yFFSnh"/>
            </div>
            <h4 class="font-bold text-[11px] text-on-surface truncate">Golden Aegis</h4>
            <p class="text-[10px] text-on-surface-variant font-bold">$215.50</p>
          </div>
        </div>
      </section>

      <!-- New Booster Packs - Tonal Shift Section -->
      <section class="bg-surface-container-low py-10 px-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-2xl font-bold font-headline text-primary tracking-tight">New Booster Packs</h3>
          <button class="text-xs font-bold text-primary flex items-center gap-1">
              VIEW ALL
              <span class="material-symbols-outlined text-[16px]" data-icon="chevron_right">chevron_right</span>
          </button>
        </div>
        <div class="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
          <!-- Pack 1 -->
          <div class="min-w-[140px] flex-shrink-0">
            <div class="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 shadow-lg">
              <img alt="Pack 1" class="w-full h-full object-cover" data-alt="vibrant foil booster pack packaging with explosive energy graphics and futuristic typography in neon orange and blue" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5Yx21J3THL3aznZx_nwQYckuS0_c8Y8nTNtvMPmLKhDHgmR-4EDd5OegHa-tJZixSw4wCkm0LgSJ5_FcDpd_VkXIl53OJYauyV94hMdZ28I8hwsuMnHkXYzYeIPaX9NG1LPOL78GY_2l-vjBrz-TnixAOMhC_jYxGg_xe5hHbl8cDaoki5fJgxR8BJyf5RAjTVftMWrIl2ACY2Gh2q97XKPzQ7MpIcSWLXRxK8pfXesV75sUgWKHPrn5oJPw9RzuP3475Yf_ckpDY"/>
              <div class="absolute bottom-2 left-2 right-2 glass-card py-1 text-center rounded-lg">
                <span class="text-[9px] font-black text-primary">SCARLET VOID</span>
              </div>
            </div>
            <p class="text-[11px] font-bold text-on-surface">Display Box (36)</p>
            <p class="text-[10px] text-on-surface-variant">$119.99</p>
          </div>
          <!-- Pack 2 -->
          <div class="min-w-[140px] flex-shrink-0">
            <div class="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 shadow-lg">
              <img alt="Pack 2" class="w-full h-full object-cover" data-alt="sealed trading card booster pack with dragon theme and metallic silver highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwfuiYDH2N2zRAeQUcboXdNEVf-EsOxYWvBcjxUNA7qJ0wbUkLfVjwzuRlRUNpw3pxym_CbZHjJAS82-v_Y2dme5IElQq5fcehMJawm6HiQgL2tabKlaS_rG2QIf_GnG6P52Yeh2XUTi0WiZab5s85LsDOISaeA3D0VZ4pHPCgPihKMCAcR_Sekq09WzLmXPfkPzGEq-hZ_zciILQw4DAFkTzxY250E_NFP82WL1OLva1wcJ8oJV7jklw0PS8LcT-O2gW_XZhx-pIi"/>
              <div class="absolute bottom-2 left-2 right-2 glass-card py-1 text-center rounded-lg">
                <span class="text-[9px] font-black text-primary">TITAN REIGN</span>
              </div>
            </div>
            <p class="text-[11px] font-bold text-on-surface">Individual Pack</p>
            <p class="text-[10px] text-on-surface-variant">$4.50</p>
          </div>
          <!-- Pack 3 -->
          <div class="min-w-[140px] flex-shrink-0">
            <div class="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 shadow-lg">
              <img alt="Pack 3" class="w-full h-full object-cover" data-alt="gaming booster pack with cybernetic artwork and electric blue lightning effects" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ4jMhJekeDkrCwSFXDS4xMN01ATAuayCxVPeA_JbnAeylw0BcV7UAr1-de6j5DBYkFjnIqlEoPKFnFggHxFrfikKQhrgSk0UTAyfjWy0R2ViAzqLshTanDkseGHag_-512E7S5OSbyssfViPU5o3ep5jWVVl6UnIg-KohZxm9nBk_eoQIkHQeUlifmMmwZwg4u55gwZl1kMdeVmUU92exkeTHjmVrtMpX4JwXE6t9r9NlkKCwrXbf67hp9F89lJHhmr15kVE3_NMa"/>
              <div class="absolute bottom-2 left-2 right-2 glass-card py-1 text-center rounded-lg">
                <span class="text-[9px] font-black text-primary">CYBER CORE</span>
              </div>
            </div>
            <p class="text-[11px] font-bold text-on-surface">Elite Bundle</p>
            <p class="text-[10px] text-on-surface-variant">$65.00</p>
          </div>
        </div>
      </section>

      <!-- Competitive Accessories -->
      <section class="px-6 py-10">
        <h3 class="text-2xl font-bold font-headline text-primary tracking-tight mb-6">Competitive Accessories</h3>
        <div class="flex flex-col gap-4">
          <!-- Accessory 1 -->
          <div class="flex items-center gap-4 bg-surface-container-lowest p-3 rounded-xl shadow-sm">
            <div class="w-20 h-20 rounded-lg bg-surface-container-highest overflow-hidden flex-shrink-0">
              <img alt="Accessory 1" class="w-full h-full object-cover" data-alt="high-quality matte black card sleeves and a premium leather deck box on a minimalist surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByUd9Ayb6pZf-UxBNiHOTY4IVdADgCV9fS9Gra2rUo9EL5ow2jcYoRwNd7p_eMGtcP9njkCZjpboQP1lqh6b0G31sDguJ0SHa6bapYdqpXICcZx-dX8FgwlEM0q0NA4ih1O83Gfwt3atPIGGY8BdQkKRAhssh60CI6YpBg6bhPmo-Jf-lbINGSwJjPthbEhhUQMyXVJO20VqpuAIP5rtQIG1mkW_7Fzdn6asCwvNFe98G-aVdMlA0X8sHSdOi49IDLrVgfHLbfJAwf"/>
            </div>
            <div class="flex-grow">
              <h4 class="font-bold text-sm text-on-surface">Master Grade Sleeves</h4>
              <p class="text-xs text-on-surface-variant mb-2">Non-reflective matte finish</p>
              <div class="flex items-center justify-between">
                <span class="text-primary font-extrabold text-sm">$12.99</span>
                <button class="bg-secondary-container text-on-secondary-container rounded-full w-8 h-8 flex items-center justify-center">
                  <span class="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                </button>
              </div>
            </div>
          </div>
          <!-- Accessory 2 -->
          <div class="flex items-center gap-4 bg-surface-container-lowest p-3 rounded-xl shadow-sm">
            <div class="w-20 h-20 rounded-lg bg-surface-container-highest overflow-hidden flex-shrink-0">
              <img alt="Accessory 2" class="w-full h-full object-cover" data-alt="professional gaming playmat with a cosmic arena illustration and non-slip rubber backing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADNSVbbz7_74JvVeIVwx-Umbxa0TEUJjOjZUUlI-6Mh6D5ljhQkBIGtNoj3WnoMKoguvtD4V4dHHImBc0adZCpDEU9d8XwoE1q-gYNzW9oqA4ZPUsMX1_2DGeRqRg91_tweNj8iZG26jJLYxL_hGYaiotOZDNi4I2QeTUSIURQRGNIYJwqgSmpl4sv4HkyHmOLm7fGDNYCAqImRZYBjbwnC8NUKGUeRlvLq5-ufbs2mf-nKKgYi0tqiSvE6OnuSwGWf4UIODvQ_00E"/>
            </div>
            <div class="flex-grow">
              <h4 class="font-bold text-sm text-on-surface">Arena Playmat</h4>
              <p class="text-xs text-on-surface-variant mb-2">High-density rubber base</p>
              <div class="flex items-center justify-between">
                <span class="text-primary font-extrabold text-sm">$24.50</span>
                <button class="bg-secondary-container text-on-secondary-container rounded-full w-8 h-8 flex items-center justify-center">
                  <span class="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.holo-shimmer {
  background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
  background-size: 200% 200%;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
