<template>
  <div class="admin-inventory-upload">
    <!-- Desktop Layout -->
    <div class="hidden md:flex bg-surface text-on-surface font-body overflow-hidden h-screen text-left w-full">
      <!-- SideNavBar -->
      <AdminSidebar />

      <!-- Main Canvas -->
      <main class="ml-64 flex-1 flex flex-col h-screen bg-surface overflow-hidden">
        <!-- TopAppBar -->
        <header class="h-16 px-8 flex justify-between items-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl fixed top-0 right-0 w-[calc(100%-256px)] z-40 shadow-sm shadow-slate-200/50">
          <div class="flex items-center space-x-4">
            <span class="material-symbols-outlined text-primary">search</span>
            <input type="text" placeholder="Search inventory..." class="bg-transparent border-none focus:ring-0 text-sm font-medium w-64 outline-none"/>
          </div>
          <div class="flex items-center space-x-6">
            <button class="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
              <span class="material-symbols-outlined">notifications</span>
            </button>
            <button class="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
              <span class="material-symbols-outlined">help_outline</span>
            </button>
            <div class="flex items-center space-x-3 pl-4 border-l border-surface-dim">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPKsUlqLCCaq7V765VYSgRWG9KrNSsfA-kFwldTupN7ZWQ76Bv6iPOVV3X1aeHvNYKyzQI_CkZJwwlMc6llX-rQe0vFuY7mG9yi1Dtke-A3wxMNRXyCWFxqB8zIMiWy-JAfbUtgiJ4RoQVY9sL2poEhFxs87jlSkDDrvMuk1547u-dcUuxtrQYt6kJwJX7pTS_OW2T4I1TpGt1tFQIMExey7Yh0jCo6K0qcyB8mMhewYEvYMBmr468t5_BB0nE-DJ5J1_cFvKEKr_S" alt="Administrator Profile" class="w-8 h-8 rounded-full border-2 border-primary/20" />
              <span class="text-sm font-bold text-primary">Admin HQ</span>
            </div>
          </div>
        </header>

        <!-- Product Content Area -->
        <div class="mt-16 p-8 flex-1 overflow-y-auto pb-32 no-scrollbar">
          <header class="mb-10">
            <nav class="flex space-x-2 text-xs font-semibold text-slate-400 mb-2">
              <span>Inventory</span>
              <span>/</span>
              <span class="text-primary">Add New Product</span>
            </nav>
            <h2 class="text-4xl font-extrabold tracking-tight text-primary">Subida de Inventario</h2>
            <p class="text-slate-500 mt-1">Create a new premium listing for the curated game arena.</p>
          </header>

          <div class="grid grid-cols-12 gap-10">
            <!-- Left Column: Media -->
            <section class="col-span-5 space-y-6">
              <div 
                @click="triggerFileUpload"
                class="group relative aspect-square w-full rounded-xl bg-surface-container-low flex flex-col items-center justify-center border-2 border-dashed border-outline-variant hover:border-primary transition-all overflow-hidden cursor-pointer"
              >
                <div class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <img v-if="imagePreview" :src="imagePreview" class="absolute inset-0 w-full h-full object-cover" />
                <template v-else>
                  <span class="material-symbols-outlined text-5xl text-outline mb-4">image</span>
                  <div class="text-center">
                    <p class="font-bold text-primary">Cover Image</p>
                    <p class="text-xs text-slate-400 px-10">Drag and drop high-res game art. Recommend 2000x2000px.</p>
                  </div>
                </template>
                <input 
                  type="file" 
                  id="file-upload" 
                  class="hidden" 
                  accept="image/*"
                  @change="handleImageSelect"
                />
                <button 
                  @click.stop="triggerFileUpload"
                  class="mt-6 bg-white text-primary text-xs font-bold px-4 py-2 rounded shadow-sm hover:shadow-md transition-all z-10"
                >
                  {{ imagePreview ? 'Change Photo' : 'Upload Photo' }}
                </button>
              </div>
              
              <div class="grid grid-cols-4 gap-4">
                <div class="aspect-square rounded-xl bg-surface-container-low flex items-center justify-center border border-outline-variant/30 hover:border-primary transition-all cursor-pointer">
                  <span class="material-symbols-outlined text-outline">add</span>
                </div>
                <div class="aspect-square rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-center overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAFbQtDq2aB2K-OXaIpGOR6zluFVntA7Ep9gw26Nkpjr7iD8U-WQvN8VqpySEH7rrQHKLGWfiyv2CObWQLNmoMMfalosAteMH5c13HcNNqwsZS9wq890rZoN1KA1LtUYn-ffnow9_C4H59Qq2sibcgwQb_KYqiWOuZHBH2v3naaYSDCl3ldpQbN7t1WyMFLkph3A1u8gtQgYfN3ygdYbGE0uWKwpLZ8zXrMOL3FZT-sfn14K4PrmV7HZe4HQG0-vWP47ZBC--tU0il" alt="Game board close up" class="w-full h-full object-cover"/>
                </div>
                <div class="aspect-square rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-center overflow-hidden relative">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSCyQHbIJoWrpQTnFvOVWLEcpomZk9xuXV5qDK9OafX3JPJhgamp4Tq9SGHfR5lx00iEL4U7F1GdW0cGaeknncIBfcNjGenB3W4L_sJz-eYwIHGeuUjUVTDn931e-LjkRoWFeQVs7Hu0_WT09Tr6fHMAP00S_74-AkNtK9bYUfTkP6XD9cX1-m5xCyxSOySEz7zcQ6lrqAj_V2zgNb9-cmmsMMUN6A1utBiSN0ZueaKVQHgReFJGoz0IVUpQ10PqULHz-ZTqGqU7Z" alt="Game card detail" class="w-full h-full object-cover"/>
                  <div class="absolute inset-0 bg-primary/20 flex items-center justify-center cursor-pointer">
                    <span class="material-symbols-outlined text-white">delete</span>
                  </div>
                </div>
                <div class="aspect-square rounded-xl bg-surface-container-low flex items-center justify-center border border-outline-variant/30 cursor-pointer">
                   <span class="material-symbols-outlined text-outline">more_horiz</span>
                </div>
              </div>

              <div class="p-6 bg-primary-container/10 rounded-xl">
                <h4 class="font-bold text-primary mb-2 flex items-center">
                  <span class="material-symbols-outlined mr-2 text-lg">info</span>
                  Editorial Tips
                </h4>
                <p class="text-xs text-on-primary-fixed-variant leading-relaxed">
                  For "The Curated Arena," use neutral backgrounds for primary product shots. Action shots should emphasize tactile components and premium card quality.
                </p>
              </div>
            </section>

            <!-- Right Column: Form -->
            <section class="col-span-7 space-y-10">
              <!-- Basic Info -->
              <div class="space-y-6">
                <div class="flex items-center space-x-2 border-b-2 border-primary/5 pb-2">
                  <span class="material-symbols-outlined text-secondary">edit_note</span>
                  <h3 class="font-extrabold text-primary uppercase tracking-wider text-xs">Basic Information</h3>
                </div>
                <div class="space-y-4">
                  <div class="group">
                    <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 ml-1 group-focus-within:text-primary transition-colors">Product Name</label>
                    <input v-model="product.name" type="text" placeholder="e.g. Gloomhaven: Jaws of the Lion" class="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 text-on-surface placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 transition-all font-medium outline-none"/>
                  </div>
                  <div class="group">
                    <label class="block text-[10px] font-black uppercase text-slate-400 mb-2 ml-1">Category</label>
                    <div class="flex flex-wrap gap-2">
                      <button 
                        v-for="cat in categories" 
                        :key="cat"
                        @click="product.category = cat"
                        class="px-4 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95 shadow-sm"
                        :class="product.category === cat ? 'bg-primary text-white' : 'bg-surface-container-highest text-slate-600 hover:bg-primary/10'"
                      >
                        {{ cat }}
                      </button>
                    </div>
                  </div>
                  <div class="group">
                    <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 ml-1">Description</label>
                    <textarea v-model="product.description" rows="5" placeholder="Narrative description of the gameplay, theme, and contents..." class="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 text-on-surface placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 transition-all font-medium leading-relaxed resize-none outline-none"></textarea>
                  </div>
                </div>
              </div>

              <!-- Inventory & Logistics -->
              <div class="space-y-6">
                <div class="flex items-center space-x-2 border-b-2 border-primary/5 pb-2">
                  <span class="material-symbols-outlined text-secondary">inventory</span>
                  <h3 class="font-extrabold text-primary uppercase tracking-wider text-xs">Inventory & Logistics</h3>
                </div>
                <div class="grid grid-cols-2 gap-6">
                  <div class="group">
                    <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 ml-1">SKU</label>
                    <input v-model="product.sku" type="text" placeholder="IG-GH-001" class="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 text-on-surface placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 transition-all font-medium outline-none"/>
                  </div>
                  <div class="group">
                    <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 ml-1">Barcode</label>
                    <div class="relative">
                      <input v-model="product.barcode" type="text" placeholder="Scan or enter UPC" class="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 pr-10 text-on-surface placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 transition-all font-medium outline-none"/>
                      <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-primary cursor-pointer">barcode_scanner</span>
                    </div>
                  </div>
                </div>
                <div class="group">
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-2 ml-1">Stock Quantity</label>
                  <div class="flex items-center bg-surface-container-high rounded-lg w-fit p-1">
                    <button @click="product.stock_quantity > 0 && product.stock_quantity--" class="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition-colors text-primary active:scale-90">
                      <span class="material-symbols-outlined">remove</span>
                    </button>
                    <input v-model.number="product.stock_quantity" type="number" class="w-16 bg-transparent border-none text-center font-bold text-primary focus:ring-0 outline-none"/>
                    <button @click="product.stock_quantity++" class="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition-colors text-primary active:scale-90">
                      <span class="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Pricing -->
              <div class="space-y-6">
                <div class="flex items-center space-x-2 border-b-2 border-primary/5 pb-2">
                  <span class="material-symbols-outlined text-secondary">payments</span>
                  <h3 class="font-extrabold text-primary uppercase tracking-wider text-xs">Pricing & Margins</h3>
                </div>
                <div class="grid grid-cols-2 gap-6">
                  <div class="group">
                    <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 ml-1">Retail Price ($)</label>
                    <input v-model.number="product.price" type="number" step="0.01" placeholder="0.00" class="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 text-on-surface placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 transition-all font-medium outline-none"/>
                  </div>
                  <div class="group">
                    <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 ml-1">Unit Cost ($)</label>
                    <input v-model.number="product.cost" type="number" step="0.01" placeholder="0.00" class="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 text-on-surface placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 transition-all font-medium outline-none"/>
                  </div>
                </div>
              </div>

              <!-- Visibility Toggle -->
              <div class="p-6 bg-surface-container-low rounded-xl flex items-center justify-between">
                <div>
                  <h4 class="font-bold text-primary">Public Visibility</h4>
                  <p class="text-xs text-slate-500">Should this product be visible on the store front immediately?</p>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-xs font-bold transition-colors" :class="product.status === 'draft' ? 'text-primary' : 'text-slate-400'">Draft</span>
                  <button 
                    @click="product.status = product.status === 'published' ? 'draft' : 'published'"
                    class="w-12 h-6 rounded-full relative p-1 transition-colors cursor-pointer outline-none"
                    :class="product.status === 'published' ? 'bg-secondary-container' : 'bg-slate-200'"
                  >
                    <div 
                      class="w-4 h-4 bg-white rounded-full absolute top-1 shadow-sm transition-all"
                      :class="product.status === 'published' ? 'right-1' : 'left-1'"
                    ></div>
                  </button>
                  <span class="text-xs font-bold transition-colors" :class="product.status === 'published' ? 'text-primary' : 'text-slate-400'">Published</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        <!-- Sticky Bottom Action Bar -->
        <footer class="fixed bottom-0 right-0 w-[calc(100%-280px)] h-20 bg-white/95 backdrop-blur-md border-t border-surface-dim px-8 flex items-center justify-between z-40">
          <div class="flex items-center space-x-4">
            <span v-if="isSubmitting" class="flex items-center text-xs text-primary font-bold animate-pulse">
              <span class="material-symbols-outlined text-sm mr-1">sync</span>
              Publishing in progress...
            </span>
            <span v-else class="flex items-center text-xs text-slate-400 font-semibold">
              <span class="material-symbols-outlined text-sm mr-1">check_circle</span>
              Form Ready
            </span>
          </div>
          <div class="flex items-center space-x-4">
            <button @click="product.status = 'draft'; handlePublish()" class="px-8 py-3 rounded-lg text-primary font-bold text-sm hover:bg-primary/5 transition-all">
              Save Draft
            </button>
            <button 
              @click="product.status = 'published'; handlePublish()"
              :disabled="isSubmitting"
              class="px-10 py-3 rounded-lg bg-gradient-to-r from-primary to-primary-container text-white font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 disabled:opacity-50 disabled:translate-y-0"
            >
              {{ isSubmitting ? 'Publishing...' : 'Publish Product' }}
            </button>
          </div>
        </footer>
      </main>
    </div>

    <!-- Mobile Layout -->
    <div class="md:hidden flex flex-col bg-surface text-on-surface min-h-screen pb-32 text-left w-full">
      <!-- Top App Bar -->
      <header class="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl flex justify-between items-center px-6 py-4 shadow-sm shadow-slate-200/50">
        <div class="flex items-center gap-4">
          <router-link to="/" class="text-blue-900 dark:text-blue-200 hover:bg-slate-100/50 p-2 rounded-lg transition-colors active:scale-95 duration-200">
            <span class="material-symbols-outlined">close</span>
          </router-link>
          <h1 class="font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-xl text-blue-950 dark:text-white">Upload</h1>
        </div>
        <div class="flex items-center gap-3">
          <button>
             <span class="material-symbols-outlined text-blue-900">more_vert</span>
          </button>
        </div>
      </header>

      <main class="pt-20 px-4 space-y-8">
        <!-- Image Upload Section -->
        <section class="space-y-4">
          <div class="w-full aspect-[4/3] rounded-xl bg-surface-container-high flex flex-col items-center justify-center border-2 border-dashed border-outline-variant relative overflow-hidden group hover:border-primary transition-all cursor-pointer">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8Vu-qSmAwTIFEyfSNJCH3g-yaKS5I6-UlPkrRhEexWyv-Feed2mgJDSiT5cL1hwcMbRV7EWt3gVAvAe9liUqPKjcAyuZBCLc2HBn2ZYHROGFRyM0wC7kB2VcJPisHzRCJ0uOSDU7xAjylKEn1Jlz6auIsB3ANxJcd9UB1VCT4n3rCaCtv4QXIFM_5HO3P1InvLqM2E1pHkTbj5mrLSkHRAAsHdyihDCd_dAZDgkfYUxvYNOA62yYIfjo25diGZog34HU1PGabQkuK" alt="Product Preview" class="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" />
            <div class="z-10 flex flex-col items-center text-center p-6">
              <div class="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-4 text-on-primary-container">
                <span class="material-symbols-outlined text-3xl">add_a_photo</span>
              </div>
              <p class="font-bold text-primary">Añadir fotos principales</p>
              <p class="text-sm text-outline mt-1">Arrastra o pulsa para subir imágenes (Máx 5MB)</p>
            </div>
          </div>
          
          <!-- Thumbnail Gallery -->
          <div class="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            <div class="min-w-[80px] h-20 rounded-lg bg-surface-container-lowest flex items-center justify-center border border-primary/10 cursor-pointer">
              <span class="material-symbols-outlined text-primary">add</span>
            </div>
            <div class="min-w-[80px] h-20 rounded-lg bg-surface-container-highest overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmU6FmgdtnR3nCx6E57w3yN0zQX211B3eMrzbulRoTzjkvuZWgk_pWDJ5i3tQwEh7eiz0ggLzBemfOWXLeTxbtTfrTSbi9vfbF4wRk7pDr1JVU3W5cQAGcLcU3SNZMrzcQliFqNoylrheLhYiCESI2tCGODWGyacsfqw2HyPUrbStTmMkCgYGa8PvaUb_qAr_a31bX6fOZNkaVD1b2W5LkFibtAnlPbejKvF_O4deN-fVxtqLNdUgrh5ki_7wsnnQX9bbbCCt83ZKv" alt="Dice" class="w-full h-full object-cover" />
            </div>
            <div class="min-w-[80px] h-20 rounded-lg bg-surface-container-highest overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_hi7cn31IJ6vgyfj_89MHtxAhc-emeDZKsEHKxE2e32GERCnsMHnlDcAN9VNz0qxktUkowLs5ZD0mQMazy1WFBjaOfi2_CCk_tPaq8kFqtq6bgJJv3fRT9M6SgN95176X1E4nICOoycECX-ZB8SPsxxgHos-5g0QnocTom0lP5zHBhZdvtl8vye3IVfxZHx-rQfm0rjFKa2Lde5SaKyNydqhjC-lSGiclckn4XfZ0E6lMHY-0H4q-pO2kupZWWf-iFe8yDZnaQiQ4" alt="Tokens" class="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <!-- Información Básica Section -->
        <section class="space-y-6">
          <div class="flex items-center gap-2">
            <span class="w-1 h-6 bg-secondary-container rounded-full"></span>
            <h2 class="text-lg font-extrabold tracking-tight text-primary">Información Básica</h2>
          </div>
          <div class="space-y-4">
            <div class="group">
              <label class="block text-xs font-bold text-outline mb-1 ml-1 uppercase tracking-widest">Nombre del Producto</label>
              <input type="text" placeholder="Ej: Gloomhaven: Jaws of the Lion" class="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline/60 font-medium outline-none"/>
            </div>
            <div>
              <label class="block text-xs font-bold text-outline mb-2 ml-1 uppercase tracking-widest">Categoría</label>
              <div class="flex flex-wrap gap-2">
                <button class="px-4 py-2 rounded-full bg-primary text-on-primary text-sm font-semibold shadow-sm">Estrategia</button>
                <button class="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-medium hover:bg-surface-container-highest transition-colors">Cartas</button>
                <button class="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-medium hover:bg-surface-container-highest transition-colors">Rol</button>
                <button class="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-medium hover:bg-surface-container-highest transition-colors">Miniaturas</button>
              </div>
            </div>
            <div class="group">
              <label class="block text-xs font-bold text-outline mb-1 ml-1 uppercase tracking-widest">Descripción</label>
              <textarea rows="4" placeholder="Describe los componentes, la temática y el estado del juego..." class="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline/60 font-medium resize-none outline-none"></textarea>
            </div>
          </div>
        </section>

        <!-- Inventario y Logística Section -->
        <section class="space-y-6">
          <div class="flex items-center gap-2">
            <span class="w-1 h-6 bg-primary rounded-full"></span>
            <h2 class="text-lg font-extrabold tracking-tight text-primary">Inventario y Logística</h2>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="group">
              <label class="block text-xs font-bold text-outline mb-1 ml-1 uppercase tracking-widest">SKU</label>
              <input type="text" placeholder="GH-001" class="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline/60 font-medium outline-none"/>
            </div>
            <div class="group">
              <label class="block text-xs font-bold text-outline mb-1 ml-1 uppercase tracking-widest">Código de Barras</label>
              <div class="relative">
                <input type="text" placeholder="Escanear" class="w-full bg-surface-container-high border-none rounded-lg p-4 pr-10 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline/60 font-medium outline-none"/>
                <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-primary/60 cursor-pointer">barcode_scanner</span>
              </div>
            </div>
          </div>
          <div class="bg-surface-container-low rounded-xl p-6 flex items-center justify-between">
            <div>
              <p class="font-bold text-primary">Stock Disponible</p>
              <p class="text-xs text-outline font-medium">Unidades físicas en almacén</p>
            </div>
            <div class="flex items-center gap-4 bg-surface-container-lowest rounded-full p-1 border border-outline-variant/30">
              <button class="w-10 h-10 rounded-full flex items-center justify-center text-primary active:scale-90 transition-transform">
                <span class="material-symbols-outlined">remove</span>
              </button>
              <input type="number" value="12" class="text-xl font-extrabold text-on-surface w-10 text-center bg-transparent border-none outline-none focus:ring-0"/>
              <button class="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center active:scale-90 transition-transform shadow-md shadow-primary/20">
                <span class="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Precios Section -->
        <section class="space-y-6">
          <div class="flex items-center gap-2">
            <span class="w-1 h-6 bg-secondary-container rounded-full"></span>
            <h2 class="text-lg font-extrabold tracking-tight text-primary">Precios</h2>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="group">
              <label class="block text-xs font-bold text-outline mb-1 ml-1 uppercase tracking-widest">Precio Venta</label>
              <div class="relative">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-primary">$</span>
                <input type="number" placeholder="0.00" class="w-full bg-surface-container-high border-none rounded-lg p-4 pl-8 focus:ring-2 focus:ring-primary/20 text-on-surface font-extrabold outline-none"/>
              </div>
            </div>
            <div class="group">
              <label class="block text-xs font-bold text-outline mb-1 ml-1 uppercase tracking-widest">Costo Base</label>
              <div class="relative">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-outline">$</span>
                <input type="number" placeholder="0.00" class="w-full bg-surface-container-high border-none rounded-lg p-4 pl-8 focus:ring-2 focus:ring-primary/20 text-on-surface font-extrabold outline-none"/>
              </div>
            </div>
          </div>
          <div class="p-4 rounded-lg bg-primary-container/10 border border-primary/5 flex items-center gap-3">
            <span class="material-symbols-outlined text-primary">info</span>
            <p class="text-xs font-medium text-primary-container">El margen de beneficio proyectado es del <span class="font-bold">42%</span> basado en el precio actual.</p>
          </div>
        </section>
      </main>

      <!-- Fixed Action Bar -->
      <div class="fixed bottom-0 left-0 w-full z-50 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-2xl">
        <div class="max-w-md mx-auto flex gap-3">
          <button class="flex-1 py-4 px-6 rounded-xl font-bold text-primary hover:bg-slate-100/50 transition-colors active:scale-95 duration-200">
            Guardar Borrador
          </button>
          <button class="flex-[2] py-4 px-6 rounded-xl bg-primary text-on-primary font-extrabold shadow-lg shadow-primary/20 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
            <span>Publicar Producto</span>
            <span class="material-symbols-outlined text-sm">rocket_launch</span>
          </button>
        </div>
      </div>
      <AdminBottomNav />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'
import AdminSidebar from '@/components/AdminSidebar.vue'
import AdminBottomNav from '@/components/AdminBottomNav.vue'

const router = useRouter()
const isSubmitting = ref(false)
const imageFile = ref(null)
const imagePreview = ref(null)

const product = reactive({
  name: '',
  category: 'Strategy',
  description: '',
  sku: '',
  barcode: '',
  stock_quantity: 0,
  price: 0,
  cost: 0,
  status: 'published'
})

const categories = ['Strategy', 'Card Games', 'RPG', 'Family', 'Miniatures']

const handleImageSelect = (event) => {
  const file = event.target.files[0]
  if (file) {
    imageFile.value = file
    imagePreview.value = URL.createObjectURL(file)
  }
}

const triggerFileUpload = () => {
  document.getElementById('file-upload').click()
}

const handlePublish = async () => {
  if (!product.name || !product.sku || !product.price) {
    alert('Please fill in all required fields (Name, SKU, Price)')
    return
  }

  isSubmitting.value = true
  try {
    let imageUrl = null

    // 1. Upload image if selected
    if (imageFile.value) {
      const fileExt = imageFile.value.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
      const filePath = fileName // Subir directamente a la raíz del bucket

      const { data, error: uploadError } = await supabase.storage
        .from('products')
        .upload(filePath, imageFile.value, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) {
        console.error('Detalles del error de subida:', uploadError)
        throw new Error(`Error al subir imagen: ${uploadError.message}`)
      }

      const { data: { publicUrl } } = supabase.storage
        .from('products')
        .getPublicUrl(filePath)
      
      imageUrl = publicUrl
    }

    // 2. Insert product into DB
    const { error: insertError } = await supabase
      .from('products')
      .insert({
        name: product.name,
        category: product.category,
        description: product.description,
        sku: product.sku,
        barcode: product.barcode,
        stock_quantity: product.stock_quantity,
        price: product.price,
        cost: product.cost,
        status: product.status,
        image_url: imageUrl
      })

    if (insertError) throw insertError

    alert('Product published successfully!')
    router.push('/admin/inventory')
  } catch (err) {
    console.error('Error publishing product:', err.message)
    alert('Error publishing product: ' + err.message)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
