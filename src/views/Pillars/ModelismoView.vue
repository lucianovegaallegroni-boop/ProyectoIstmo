<template>
  <div class="modelismo-view bg-background text-on-surface">
    <!-- Desktop Layout -->
    <main class="hidden md:block pt-20">
      <!-- 1. Hero Section -->
      <section class="relative h-[870px] flex items-center overflow-hidden bg-primary-container">
        <div class="absolute inset-0 z-0">
          <img class="w-full h-full object-cover opacity-60" alt="Ultra detailed macro shot of a hand-painted resin bust with dramatic teal and orange rim lighting in a professional studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuAMJvWnJoulU4syVNAA8jMbycIuCxCAXrs9-vrtVLErIknHkMLKQxGV4Aq30V2vnvTHe7P3aJB0E8uQm8CweMYiqfM0yqXocUecur5LRhTtlYJSVOOjrrbXK7Lz9oKIj4v4NSsjhVLdC8gYLOzN_DILD-uGpHrpAfxWTiZz_SRl0b3FT6PMsQEGDaYqJ54nrt5Wf_f0j4I66pu8j6kJNbarNazFxY_1J_SjW35KywoyKnb3KFiygBZ01hsIv6DuSVv7aeCeMaogBj"/>
          <div class="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-80"></div>
        </div>
        <div class="container mx-auto px-12 relative z-10">
          <div class="max-w-2xl">
            <span class="text-secondary-fixed font-bold tracking-widest uppercase text-sm mb-4 block">The Master Craft</span>
            <h1 class="text-7xl font-extrabold text-white font-headline leading-tight mb-6 tracking-tighter">
              Modelismo
            </h1>
            <p class="text-2xl text-on-primary-container font-light leading-relaxed mb-10">
              Donde la precisión se une al arte. Herramientas y pigmentos curados para el modelista de élite.
            </p>
            <div class="flex gap-4">
              <button class="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-lg font-bold editorial-shadow hover:scale-105 transition-transform">
                Explorar Colección
              </button>
              <button class="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all">
                Ver Tutoriales
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Professional Paints -->
      <section class="py-24 bg-surface-container-low">
        <div class="container mx-auto px-12">
          <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div class="max-w-xl">
              <h2 class="text-4xl font-extrabold text-primary font-headline tracking-tight mb-4">Professional Paints</h2>
              <p class="text-on-surface-variant leading-relaxed">Pigmentos de alta densidad y medios técnicos diseñados para transiciones perfectas y efectos hiperrealistas.</p>
            </div>
            <a class="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform" href="#">
              Ver todas las gamas <span class="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <!-- Paint Card -->
            <div v-for="paint in paints" :key="paint.sku" class="group relative overflow-hidden rounded-xl bg-surface-container-lowest editorial-shadow">
              <div class="aspect-[16/9] overflow-hidden">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" :src="paint.image"/>
              </div>
              <div class="p-8">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <h3 class="text-2xl font-bold text-primary mb-2">{{ paint.name }}</h3>
                    <p class="text-on-surface-variant text-sm">{{ paint.description }}</p>
                  </div>
                  <span class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{{ paint.badge }}</span>
                </div>
                <div class="flex justify-between items-center mt-6">
                  <span class="text-3xl font-bold text-primary">{{ paint.price }}€</span>
                  <button 
                    @click="addToCart(paint)"
                    class="bg-primary text-white p-3 rounded-lg hover:bg-primary-container transition-colors"
                  >
                    <span class="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Precision Tools -->
      <section class="py-24 bg-white">
        <div class="container mx-auto px-12">
          <h2 class="text-4xl font-extrabold text-primary font-headline tracking-tight mb-16 text-center">Precision Tools</h2>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Tool Card -->
            <div 
              v-for="tool in tools" 
              :key="tool.sku"
              class="p-10 rounded-2xl transition-all duration-300 group relative cursor-pointer"
              :class="tool.isFeatured ? 'bg-primary text-white editorial-shadow' : 'bg-surface-container-low hover:bg-surface-container'"
              @click="addToCart(tool)"
            >
              <div 
                class="w-16 h-16 rounded-xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110"
                :class="tool.isFeatured ? 'bg-secondary-container text-white' : 'bg-primary-container text-white'"
              >
                <span class="material-symbols-outlined text-3xl">{{ tool.icon }}</span>
              </div>
              <h3 class="text-xl font-bold mb-4" :class="!tool.isFeatured && 'text-primary'">{{ tool.name }}</h3>
              <p class="text-sm leading-relaxed mb-6" :class="tool.isFeatured ? 'text-on-primary-container' : 'text-on-surface-variant'">{{ tool.description }}</p>
              <div class="flex justify-between items-center mt-auto">
                <span class="text-2xl font-bold" :class="tool.isFeatured ? 'text-secondary-fixed' : 'text-primary'">{{ tool.price }}€</span>
                <span class="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">add_shopping_cart</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. The Vault -->
      <section class="py-24 bg-surface-container-highest">
        <div class="container mx-auto px-12">
          <div class="bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row editorial-shadow">
            <div class="lg:w-1/2 h-[600px] relative">
              <img class="w-full h-full object-cover" alt="A magnificent resin sculpture of a dragon landing on a rocky peak, unpainted, showing incredible anatomical detail and scale texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP4ut2nI_MTbGzSAc1_v6-A8sABvzrz3mQfKMWrux-cyWn8HVNK4xKHBHE6hYV1ZTMqyZOyb9sQDJS45NrRS_9XLNmyLxZRHil3BxGenGO7OY7IVxcVG9YSr8f8B6FG26ppgasWToikh8dGy6wk3R3SBnMYq9YTgAUCoXc5Ebj0INDeWV9xAG9YNvF3um2hdzV9CGdaVZJlkCtvdMoxKRXmNvOTlMr6sRK2nz5ykybxomQPj9yT9s9J8pzxfA7-7HDC0NYYppz2Dmv"/>
              <div class="absolute top-8 left-8">
                <span class="glass-card px-6 py-2 rounded-full border border-primary/20 text-primary font-bold text-sm">THE VAULT: PIEZA ÚNICA</span>
              </div>
            </div>
            <div class="lg:w-1/2 p-16 flex flex-col justify-center">
              <h4 class="text-secondary font-bold tracking-[0.2em] mb-4">MASTERPIECE EDITION</h4>
              <h3 class="text-5xl font-extrabold text-primary font-headline mb-8 tracking-tighter">Aethelgard Dragon</h3>
              <p class="text-on-surface-variant leading-relaxed text-lg mb-8">
                Una obra maestra de la ingeniería digital y el diseño fantástico. Esculpida por artesanos de renombre mundial, esta pieza de 45cm redefine los límites del modelismo de fantasía. Resina de alta fidelidad con 84 componentes individuales.
              </p>
              <div class="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <span class="text-xs uppercase font-bold text-slate-400 block mb-1">Escala</span>
                  <span class="text-xl font-bold text-primary">1/12 (Collectors)</span>
                </div>
                <div>
                  <span class="text-xs uppercase font-bold text-slate-400 block mb-1">Dificultad</span>
                  <span class="text-xl font-bold text-primary">Nivel Experto</span>
                </div>
              </div>
              <div class="flex items-center justify-between pt-8 border-t border-surface-container">
                <div>
                  <span class="text-sm text-on-surface-variant">Precio de Lanzamiento</span>
                  <div class="text-4xl font-bold text-primary">{{ dragonMasterpiece.price }}€</div>
                </div>
                <button 
                  @click="addToCart(dragonMasterpiece)"
                  class="bg-secondary-container text-on-secondary-container px-12 py-5 rounded-xl font-extrabold hover:scale-105 active:scale-95 transition-all editorial-shadow"
                >
                  ADQUIRIR AHORA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Join the Guild -->
      <section class="py-24 container mx-auto px-12">
        <div class="bg-gradient-to-r from-primary to-primary-container rounded-[2rem] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 editorial-shadow">
          <div class="relative z-10 max-w-xl text-center lg:text-left">
            <h2 class="text-4xl lg:text-5xl font-extrabold text-white font-headline mb-6 tracking-tight">Join the Guild</h2>
            <p class="text-on-primary-container text-xl leading-relaxed mb-8">
              Acceso prioritario a lanzamientos limitados, descuentos permanentes y una comunidad de maestros modelistas.
            </p>
            <div class="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div class="flex items-center gap-3 text-white font-medium">
                <span class="material-symbols-outlined text-secondary-fixed">workspace_premium</span>
                -15% En Pinceles
              </div>
              <div class="flex items-center gap-3 text-white font-medium">
                <span class="material-symbols-outlined text-secondary-fixed">local_shipping</span>
                Envío Prioritario
              </div>
            </div>
          </div>
          <div class="relative z-10 w-full lg:w-auto">
            <button class="w-full lg:w-auto bg-white text-primary px-12 py-6 rounded-full font-extrabold text-lg hover:bg-secondary-fixed transition-colors">
              Suscribirse a la Hermandad
            </button>
          </div>
          <!-- Decorative Background Element -->
          <div class="absolute right-0 bottom-0 opacity-20 translate-x-1/4 translate-y-1/4">
            <span class="material-symbols-outlined text-[30rem] text-white">token</span>
          </div>
        </div>
      </section>
    </main>

    <!-- Mobile Layout -->
    <main class="block md:hidden pt-16 pb-32">
      <!-- Hero Section -->
      <section class="relative w-full aspect-[4/5] flex items-end overflow-hidden">
        <img alt="Modelismo Hero" class="absolute inset-0 w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD52sXiMCG1nKQa7BzYA3nYMOFCPSajHFTdSK49Jit5-kFvRUM5Cm5NKg4bDQltRzztoSW1A-_yAg1TNA3J3veSrolQLtQueV6njJYcvR47RHSHEsIm22EuiIXQ_a8mWiY2IlGLEySfkr88Jc3n2419OSyIVesz5AP0mDD73zqHQoqII0h62KDORFGQe2edgn8JFa9y-GNUfs4MplWj_r3RnqhUN7m9PU08uYQcv2PzoPVnsQU06ahhk8ZAbmMUg6VRDM2bU9ZRwFyR"/>
        <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
        <div class="relative z-10 p-8 w-full">
          <span class="inline-block px-3 py-1 mb-4 text-[10px] font-extrabold tracking-[0.2em] uppercase bg-secondary-container text-on-secondary-container rounded-full">Istmo Pillar</span>
          <h1 class="text-5xl font-extrabold text-white tracking-tighter leading-none mb-4">Modelismo</h1>
          <p class="text-on-primary-container text-lg max-w-xs font-medium leading-relaxed">Where precision meets artistry. Forge your legends in detail.</p>
        </div>
      </section>

      <!-- Professional Paints -->
      <section class="mt-12 px-6">
        <div class="flex items-baseline justify-between mb-8">
          <h2 class="text-2xl font-extrabold tracking-tight text-primary">Professional Paints</h2>
          <span class="text-xs font-bold uppercase tracking-widest text-secondary">View All</span>
        </div>
        <div class="flex overflow-x-auto gap-6 pb-6 no-scrollbar">
          <div 
            v-for="paint in paints" 
            :key="paint.sku" 
            class="flex-none w-64 group"
            @click="addToCart(paint)"
          >
            <div class="aspect-square bg-surface-container-highest rounded-xl mb-4 overflow-hidden shadow-none transition-all duration-300 group-hover:shadow-[0_24px_40px_rgba(28,27,27,0.06)]">
              <img :src="paint.image" class="w-full h-full object-cover"/>
            </div>
            <h3 class="font-bold text-on-surface">{{ paint.name }}</h3>
            <p class="text-sm text-on-surface-variant">{{ paint.description }}</p>
            <p class="font-bold text-primary mt-1">{{ paint.price }}€</p>
          </div>
        </div>
      </section>

      <!-- Precision Tools -->
      <section class="mt-16 bg-surface-container-low py-12">
        <div class="px-6 mb-8">
          <h2 class="text-2xl font-extrabold tracking-tight text-primary">Precision Tools</h2>
          <p class="text-sm text-on-surface-variant mt-1">Master every cut and assembly.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 px-6">
          <div 
            v-for="(tool, index) in tools" 
            :key="tool.sku"
            class="p-6 rounded-xl flex items-center justify-between group transition-all duration-300 bg-surface-container-lowest"
            :class="index === 0 ? 'col-span-2' : 'col-span-1 flex-col items-start'"
            @click="addToCart(tool)"
          >
            <div :class="index !== 0 && 'mb-4'">
              <span class="material-symbols-outlined text-secondary mb-2" style="font-variation-settings: 'FILL' 1;">{{ tool.icon }}</span>
              <h3 class="font-bold" :class="index === 0 ? 'text-lg' : 'text-sm'">{{ tool.name }}</h3>
              <p v-if="index === 0" class="text-xs text-on-surface-variant">{{ tool.description }}</p>
              <p class="text-xs font-bold text-primary mt-1">{{ tool.price }}€</p>
            </div>
            <img v-if="index === 0" :src="tool.image" class="w-20 h-20 object-cover rounded-lg"/>
          </div>
        </div>
      </section>

      <!-- The Vault -->
      <section class="mt-16 px-6">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-3xl font-extrabold tracking-tighter text-primary">The Vault</h2>
            <p class="text-on-surface-variant font-medium">Curated Masterpieces</p>
          </div>
          <div class="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
            <span class="material-symbols-outlined text-primary">token</span>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-8">
          <div class="relative group" @click="addToCart(dragonMasterpiece)">
            <div class="aspect-[16/10] bg-surface-container-highest rounded-2xl overflow-hidden relative">
              <img :src="dragonMasterpiece.image" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
              <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full">
                <span class="text-[10px] font-bold text-white tracking-widest uppercase">{{ dragonMasterpiece.badge }}</span>
              </div>
            </div>
            <div class="mt-4 flex justify-between items-start">
              <div>
                <h3 class="text-xl font-bold text-on-surface">{{ dragonMasterpiece.name }}</h3>
                <p class="text-sm text-on-surface-variant">Masterpiece Edition</p>
              </div>
              <span class="text-primary font-extrabold">{{ dragonMasterpiece.price }}€</span>
            </div>
          </div>

          <!-- Join the Guild (Mobile) -->
          <div class="bg-primary p-8 rounded-3xl text-white relative overflow-hidden">
            <div class="relative z-10">
              <h3 class="text-2xl font-bold mb-2">Join the Guild</h3>
              <p class="text-primary-fixed opacity-90 text-sm mb-6 leading-relaxed">Early access to monthly drops and exclusive painting masterclasses.</p>
              <button class="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-lg font-bold text-sm tracking-wide shadow-lg">Become a Member</button>
            </div>
            <div class="absolute -bottom-8 -right-8 opacity-10">
              <span class="material-symbols-outlined text-[120px]" style="font-variation-settings: 'FILL' 1;">precision_manufacturing</span>
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

const paints = [
  {
    sku: 'MOD-PAINT-01',
    name: "Chroma Prime Set",
    price: 64.95,
    description: "Gama metálica de base acrílica con acabado espejo.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbZ1RdSdB_okhzhs0_evsuUvYkKlnIiP_5761HgZZZywDKCnuWC-Y0okqlV3TYikl55BuqYnVourAQVn4-Qi0qkNftilQhyQ-tH-h8oZrbO_xUObavKsZDCDqv4btcLzcQHzO3o5nucmm6zUHHKKubLNUip0eTpBf3ocSWW7o4RIrYFh438_5k2BRraQ-qlV32g4APW44t_FPsR5dPwietH8A8LkqymsUm1jKRyLCiZa_AnCZvmf7Eq19_shF7fzgkf6KxBAEoK_ZR',
    badge: 'Premium'
  },
  {
    sku: 'MOD-PAINT-02',
    name: "Shadow Textures",
    price: 42.50,
    description: "Pastas técnicas para terrenos y efectos de envejecimiento extremo.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx-DGIiOk3j35-LLaaM3lo4jr2gCWarI0E5dTencHoNcgkLmDKNVwjTKOUtzcIV325LTss3dgjpq7XfeEdXn2QloXPnhC7FImWvnRrzpjlRJPAjf-ek-BKiqurk_GmP78EzrwgS-uYwhrzxptjB0err3rZV38hb7dgOs0x2pMHiMAJgr2jWkXa6huSDzHNLpIM4xunV7gQwGBgfNwLawIjoOSslDEKS1r50rcbsTPztvbYT7HJofhpPbTn21_cCOGgSbUr6qzj_dlp',
    badge: 'Técnico'
  }
]

const tools = [
  {
    sku: 'MOD-TOOL-01',
    name: "Apex Nipper 2.0",
    price: 59.00,
    description: "Alicates de corte ultra-fino de una sola hoja. Corte quirúrgico.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvLlhfLDrAkvkfQ_T91rxTs3WMjLkI45yc08XAcDiyy19MCTA9Dp0FKlB9IRtkw94IUp3XmKxIgEgSldAhNO0mLnHj_v_yIiar8-VvycJ16OelCRkCIVkI1PKtjn3dkfpfLOPILTO-LFrO3FeGkcUZWGVeNDFrQQ9qmtD_yKh0yjjAax84x6a3JsskTOYgRkCDg3F_XxfckHZ-_jTTviGL3MfbiQo176fDXe08LoQf5YsuK2HX2FNAPXgDxOOWODsOUSxfeGocrI1z',
    icon: 'precision_manufacturing'
  },
  {
    sku: 'MOD-TOOL-02',
    name: "Sable Series",
    price: 85.00,
    description: "Pinceles de pelo de marta Kolinsky seleccionados a mano.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs8WT26kuLc5yILa4ovwi3AsrPH7AVssW-cclkDS9sGEjRfpd5_pf5A5mPPNcyXYVFQHPuKviaLrmZ-gQ27vwu46UW0nUPRMCW0P0QOAv4JcPN8aWpCW4RuXmkhjtCW8OZcOSXL6BHT2iN7u1Slrr3xmTyIwzQ-JabEFsviwIgdxGKSjW_JOs3ULGeMi2luua_7FSU28q1fepJfyTmebxVulUwcJd6NCKg5NBpLS2XegfXAVmm-U7YC1RL9KrVpnc3sjjpxwnbqp23',
    icon: 'brush',
    isFeatured: true
  },
  {
    sku: 'MOD-TOOL-03',
    name: "Fine Scriber",
    price: 34.50,
    description: "Herramienta de grabado para re-panelado de maquetas.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs8WT26kuLc5yILa4ovwi3AsrPH7AVssW-cclkDS9sGEjRfpd5_pf5A5mPPNcyXYVFQHPuKviaLrmZ-gQ27vwu46UW0nUPRMCW0P0QOAv4JcPN8aWpCW4RuXmkhjtCW8OZcOSXL6BHT2iN7u1Slrr3xmTyIwzQ-JabEFsviwIgdxGKSjW_JOs3ULGeMi2luua_7FSU28q1fepJfyTmebxVulUwcJd6NCKg5NBpLS2XegfXAVmm-U7YC1RL9KrVpnc3sjjpxwnbqp23',
    icon: 'architecture'
  }
]

const dragonMasterpiece = {
  sku: 'MOD-VAULT-01',
  name: "Aethelgard Dragon",
  price: 289.00,
  description: "Una obra maestra de la ingeniería digital y el diseño fantástico.",
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP4ut2nI_MTbGzSAc1_v6-A8sABvzrz3mQfKMWrux-cyWn8HVNK4xKHBHE6hYV1ZTMqyZOyb9sQDJS45NrRS_9XLNmyLxZRHil3BxGenGO7OY7IVxcVG9YSr8f8B6FG26ppgasWToikh8dGy6wk3R3SBnMYq9YTgAUCoXc5Ebj0INDeWV9xAG9YNvF3um2hdzV9CGdaVZJlkCtvdMoxKRXmNvOTlMr6sRK2nz5ykybxomQPj9yT9s9J8pzxfA7-7HDC0NYYppz2Dmv',
  badge: 'MASTERPIECE'
}
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
}
.editorial-shadow {
  box-shadow: 0 24px 40px -12px rgba(28, 27, 27, 0.06);
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
