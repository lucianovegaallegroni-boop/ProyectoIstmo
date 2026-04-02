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
          <!-- Card Item -->
          <div 
            v-for="card in eliteCards" 
            :key="card.sku" 
            class="group relative bg-surface-container-lowest rounded-xl overflow-hidden p-4 flex flex-col gap-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            @click="addToCart(card)"
          >
            <div class="relative h-80 rounded-lg overflow-hidden bg-surface-container-highest">
              <img class="w-full h-full object-cover" :src="card.image"/>
              <div v-if="card.badge" class="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-black uppercase text-primary border border-primary/10">
                  {{ card.badge }}
              </div>
            </div>
            <div class="space-y-1">
              <div class="flex justify-between items-center">
                <span class="text-xs font-bold text-secondary uppercase tracking-tighter">{{ card.rarity }}</span>
                <span v-if="card.grade" class="px-2 py-0.5 bg-green-100 text-green-800 text-[10px] font-bold rounded">{{ card.grade }}</span>
              </div>
              <h3 class="text-lg font-bold text-on-surface">{{ card.name }}</h3>
              <div class="flex justify-between items-center">
                <p class="text-2xl font-black text-primary">${{ card.price }}</p>
                <span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">add_shopping_cart</span>
              </div>
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
              <span class="text-4xl font-black">${{ scarletVoidBox.price }}</span>
              <span class="text-primary-fixed/60 line-through text-xl font-bold">$179.99</span>
              <span class="text-secondary-container font-bold text-sm">Case Price (6 Boxes)</span>
            </div>
            <div class="flex gap-4">
              <button 
                @click="addToCart(scarletVoidBox)"
                class="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-xl font-extrabold text-xl hover:brightness-110 active:scale-95 transition-all"
              >
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
          <!-- Accessory Card -->
          <div v-for="item in accessories" :key="item.sku" class="flex gap-6 items-center p-6 bg-surface-container-low rounded-2xl group hover:bg-surface-container-high transition-colors">
            <div class="w-32 h-32 flex-shrink-0 bg-surface-container-highest rounded-xl overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" :src="item.image"/>
            </div>
            <div class="flex-grow space-y-2">
              <h4 class="text-xl font-bold text-on-surface">{{ item.name }}</h4>
              <p class="text-primary font-black">${{ item.price }}</p>
              <button 
                @click="addToCart(item)"
                class="w-full py-2 bg-primary text-white rounded-lg font-bold text-sm hover:brightness-125 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
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
          <div 
            class="col-span-2 bg-surface-container-lowest rounded-xl p-4 shadow-sm relative overflow-hidden group"
            @click="addToCart(eliteCards[0])"
          >
            <div class="absolute top-4 right-4 z-20">
              <div class="glass-card px-2 py-1 rounded-lg text-[10px] font-bold text-primary flex items-center gap-1 border border-white/40">
                <span class="material-symbols-outlined text-[12px]" data-icon="workspace_premium" style="font-variation-settings: 'FILL' 1;">workspace_premium</span>
                LIMITED
              </div>
            </div>
            <div class="aspect-[16/9] rounded-lg bg-surface-container-highest mb-4 overflow-hidden">
              <img :src="eliteCards[0].image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div class="flex justify-between items-center">
              <div>
                <h4 class="font-bold text-sm text-on-surface">{{ eliteCards[0].name }}</h4>
                <p class="text-xs text-secondary font-bold">{{ eliteCards[0].grade }}</p>
              </div>
              <div class="text-right">
                <p class="text-lg font-extrabold text-primary">${{ eliteCards[0].price }}</p>
              </div>
            </div>
          </div>
          <!-- Secondary Rarity Items -->
          <div 
            v-for="card in eliteCards.slice(1, 3)" 
            :key="card.sku"
            class="bg-surface-container-low rounded-xl p-3 flex flex-col"
            @click="addToCart(card)"
          >
            <div class="aspect-square rounded-lg bg-surface-container-highest mb-3 overflow-hidden">
              <img :src="card.image" class="w-full h-full object-cover"/>
            </div>
            <h4 class="font-bold text-[11px] text-on-surface truncate">{{ card.name }}</h4>
            <p class="text-[10px] text-on-surface-variant font-bold">${{ card.price }}</p>
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
          <!-- Pack -->
          <div class="min-w-[140px] flex-shrink-0" @click="addToCart(scarletVoidBox)">
            <div class="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 shadow-lg">
              <img :src="scarletVoidBox.image" class="w-full h-full object-cover"/>
              <div class="absolute bottom-2 left-2 right-2 glass-card py-1 text-center rounded-lg">
                <span class="text-[9px] font-black text-primary">SCARLET VOID</span>
              </div>
            </div>
            <p class="text-[11px] font-bold text-on-surface">Scarlet Void Case</p>
            <p class="text-[10px] text-on-surface-variant">${{ scarletVoidBox.price }}</p>
          </div>
        </div>
      </section>

      <!-- Competitive Accessories -->
      <section class="px-6 py-10">
        <h3 class="text-2xl font-bold font-headline text-primary tracking-tight mb-6">Competitive Accessories</h3>
        <div class="flex flex-col gap-4">
          <!-- Accessory Card -->
          <div 
            v-for="item in accessories" 
            :key="item.sku"
            class="flex items-center gap-4 bg-surface-container-lowest p-3 rounded-xl shadow-sm"
          >
            <div class="w-20 h-20 rounded-lg bg-surface-container-highest overflow-hidden flex-shrink-0">
              <img :src="item.image" class="w-full h-full object-cover"/>
            </div>
            <div class="flex-grow">
              <h4 class="font-bold text-sm text-on-surface">{{ item.name }}</h4>
              <p class="text-xs text-on-surface-variant mb-2">{{ item.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-primary font-extrabold text-sm">${{ item.price }}</span>
                <button 
                  @click="addToCart(item)"
                  class="bg-secondary-container text-on-secondary-container rounded-full w-8 h-8 flex items-center justify-center"
                >
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
import { useCart } from '../../composables/useCart'

const { addToCart } = useCart()

const eliteCards = [
  {
    sku: 'TCG-ELITE-01',
    name: "Celestial Arcanist",
    price: 1250.00,
    description: "Grade 10 Pristine - Ultra Rare",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOXNlZEUxLSLQxrznUNEP5Soh4qyopTmXWPlVjO7DE_KCnPEEBR2DW91posiHAeP4mvcuEwixRYGby9BVvlyMv9AGir7WBiYeHE6zEr8EEGLM5NVVBTTTmA-VVIfgFp2xdEQp3i4FVo16dBpgRYsAqi6vHN3_Z1-6dIoPbHxUtjoBzh9DzBqOpmIssRwP159sPRpDKiTWVCpCFeN6VAz6L2EiWJk9lCIXan8CxOAzzQ5ipO-2DCf_Ea9FG9vKqY9_cX1ejRZZz_58t',
    badge: 'Limited',
    rarity: 'Ultra Rare',
    grade: 'Grade 10 Pristine'
  },
  {
    sku: 'TCG-ELITE-02',
    name: "Void Mech Dragon",
    price: 890.00,
    description: "Grade 9.5 Mint - Legendary",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ7VpdwwnAAjPjY-7QfCWFAX4OKT10s45EE9GHdFu-nNMR1THGNxswqBEywSTeoDAR7vRFX51VHPRZaIetCP-V82te9xbbo8iNaTvukJdeMlcv5h7ZGCTlviWEDnXb5yH0MvknHHLVi2_WTK8WFLEBsv799KPTqSs68sM_AVAsnBJtU5JnrDXAZtNPk99LTuDC-9oXwGllGY04ERhHICjG5_j_AAo9nvhz0EodpgUp-dRk84M3WzBQZPpor3hK56VYkH4JDqHrjMXq',
    rarity: 'Legendary',
    grade: 'Grade 9.5 Mint'
  },
  {
    sku: 'TCG-ELITE-03',
    name: "Ironclad Vanguard",
    price: 2400.00,
    description: "Grade 10 Pristine - Mythic Rare",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbomaOeidm8dcL29q4CVBVi5Vp_B3L6IxzddHwpwFdFg8uGaDK1HDiQkPnwMm0AlR7qzj2W1D0cWG-oysn3sbv17fOIqYi3dmXH67bYrqUV6oF5theDAwkdinB4cunp6GVDYVvUc4OOKxowtOSRyRdQeN_u7y8t_4ivYWNiSOxII49u_ro6Gcb0h7xAwEGAsgUHapQp8709ud9gTQU6fNCBFgWn3OAybfsdqP7_ZkrapB7XDBAVDRTel9xu-WMKLBOXrPY-CG3CGZg',
    badge: 'Limited',
    rarity: 'Mythic Rare',
    grade: 'Grade 10 Pristine'
  },
  {
    sku: 'TCG-ELITE-04',
    name: "Spectral Singularity",
    price: 640.00,
    description: "Grade 9.0 Exc - Secret Rare",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIo2kTBY6_Vw8BFZJQFEV-j_p__07TQfONKwLcRnpL7CGjeYxunaHTICGh4UKJJBK-9wsmPbq4ueFgGbGOU2I-tVPeROQ0jFKo8ttjGoJjmStc53fLndav2zC9YwsjXQsVfiPIFmkIFzhxFQ3IEvFuhNQBmsLamgkkrgT9f-E-FFrVjvp2QgAQ5I7oHjIq4AnEV2W14fWZz5zqjxjTnlzb8HWdOGzwgYnfc-jGEFObm189-Xw5WLGyx3CyxKWLxl-ejPXbBJb_6XR_',
    rarity: 'Secret Rare',
    grade: 'Grade 9.0 Exc'
  }
]

const scarletVoidBox = {
  sku: 'TCG-BOX-01',
  name: "Scarlet Void: The Awakening - Case",
  price: 149.99,
  description: "Case Price (6 Boxes). Dive into the abyss with 160 new cards.",
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoFNQwTCrmrTKczZ01yMConMZI_54jsghRV_zutBwmtakCbIKvvyeh2N1qr2dT6feKRovBIWRrOQUHSOVj8mN5x2azqXP01qikv3rhLLsicMndOFQR7wmYf8BxgNGWMvhGTSQ31ri0CW2tnJQZJpJ_3j3T1icBx6WhVkz15fFeI-2vkmciz5XF7b7npSHhp50kps_2dsW5SJuPwCKiaKLDFWCluJy6grL7g1W-zj235K5gqC6GgX_3txvxTEur6YrShGPyQtvMMJFp'
}

const accessories = [
  {
    sku: 'TCG-ACC-01',
    name: "Arena Vault Box",
    price: 34.99,
    description: "Premium leather-bound deck box for trading cards.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2EJDTW7QqfTsHcPmsfPbMU3UoKdxmGUaqJohoAV-MM893qEW7N6BNGw9YyS0AencA4saH5FTjQcHtjDtzY5YrbJLhjTJpqgUGDxSbDF9BwXqxbHzfVjQEVZs-uZ5FfUJHZVIB9RfIOsO1hQZPZYHNlHbFQOw6RXqAs13_-EMO-FYMGOoN3lkhUdD8Qme4YHYqoQETkXNW3yi0G25EdQdbxiqO5CK2xuvFpSYoSsfeHxQYHVJZo-Kwk9kiax2xomz5-glo83k5kiIu'
  },
  {
    sku: 'TCG-ACC-02',
    name: "Master Grade Sleeves",
    price: 12.99,
    description: "Non-reflective matte finish card sleeves.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF2Q8HxAEftjE51IhtL-1YHbac2XBe8PsjzNvVHGQW4Txat7aReVg2S34YdZqSMHTjKMftYQcyABP9KrTMrxaUgF6cuZrit3gfHOW260XUkas4azUZPs7uat5TBLoew9wIa7yxoJV1-2GJGsW-LXrVd1nPEfO4awYKVERB3pzhXdsj8di9mjuG6NCS79t8lQHFhdF8GqtfxBt1NwBnnXdgpF1KDZ3qic7quCYK9nF4qBkq70jKVM1hGYFJI2Yudz55MV0r_v_Mqh1U'
  },
  {
    sku: 'TCG-ACC-03',
    name: "Arena Playmat",
    price: 29.99,
    description: "High-density rubber playmat for trading cards.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx60_AnY28acdEhTSU9sbAFD0El6Qq_YV_-v1I-caJpAIu7DOEo3EeQCuVfizozBOpTzDx0a8mBZk0QjXQcCCkjfdVAOTyLEERZfJIXQGdpwx9o2l9kwfNbDk54sf5fLb733q6WwttwI2RNDoFSmGE8NWKc4-XrsgRa4yxxvdw60aEjxr_RrPnxWraNBOudLeiUDo20AUB-cZA96v6Egxlp6bztCnyqnBMqug-HQBVKTYD46jOTIrAOS7dBEghok0YgO9TsSSkmMEi'
  }
]
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
