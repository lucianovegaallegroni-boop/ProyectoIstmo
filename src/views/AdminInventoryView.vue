<template>
  <div class="admin-inventory">
    <!-- Desktop Layout -->
    <div class="hidden md:flex bg-surface text-on-surface min-h-screen text-left w-full">
      <!-- SideNavBar -->
      <AdminSidebar />

      <!-- Main Content Area -->
      <main class="ml-64 flex-1 flex flex-col min-h-screen">
        <!-- TopAppBar -->
        <header class="w-full sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none">
          <div class="flex justify-between items-center px-8 py-4 w-full">
            <h1 class="font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-xl text-sky-900 dark:text-sky-400">Inventario</h1>
            <div class="flex items-center gap-6">
              <div class="relative w-80">
                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                <input type="text" placeholder="Buscar productos, SKUs..." class="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"/>
              </div>
              <div class="flex items-center gap-4">
                <button class="relative p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
                  <span class="material-symbols-outlined" data-icon="notifications">notifications</span>
                  <span class="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
                </button>
                <button class="p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
                  <span class="material-symbols-outlined" data-icon="settings">settings</span>
                </button>
                <div class="h-8 w-8 rounded-full overflow-hidden border border-slate-200">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCzJTC4Eq_KDpMtcvuwrP-GxrnnSqu4DrVnPZXt-S4NlDh2xB3pLgESnsBAHfGxeF8U7QEYdd6vRhe667waZxK-vKBmiep04uQnffdhkObBmtl27rT_fbGonA1k_e8p2OhzR0PnROosFywghNZi71i9BaWp1RXEuix6fmddic3FT-cDnoI1w8fdPooPa_uzIuY1jMxiBu0fo3a9Z64fjDUXjFhknHKVuhq2n7L9WYWj-UPb0mH5QRhpeWlJ2EWZ_yflVFelvyBIZ3S" alt="Admin Profile Avatar" class="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
          </div>
        </header>

        <!-- Content Canvas -->
        <div class="p-8 space-y-8 bg-surface-container-low/30">
          <!-- Metric Cards -->
          <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-surface-container-lowest p-6 rounded-xl border-none shadow-sm flex items-center justify-between group hover:shadow-md transition-shadow cursor-default">
              <div>
                <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Total SKUs</p>
                <h3 class="text-3xl font-black text-on-surface">1,284</h3>
                <p class="text-xs text-green-600 font-bold mt-2 flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">trending_up</span>
                  +12% este mes
                </p>
              </div>
              <div class="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span class="material-symbols-outlined text-3xl" data-icon="inventory">inventory</span>
              </div>
            </div>

            <div class="bg-surface-container-lowest p-6 rounded-xl border-none shadow-sm flex items-center justify-between group hover:shadow-md transition-shadow cursor-default">
              <div>
                <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Stock Bajo</p>
                <h3 class="text-3xl font-black text-on-surface">24</h3>
                <p class="text-xs text-secondary font-bold mt-2">Requiere atención inmediata</p>
              </div>
              <div class="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <span class="material-symbols-outlined text-3xl" data-icon="warning">warning</span>
              </div>
            </div>

            <div class="bg-surface-container-lowest p-6 rounded-xl border-none shadow-sm flex items-center justify-between group hover:shadow-md transition-shadow cursor-default">
              <div>
                <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Valor Inventario</p>
                <h3 class="text-3xl font-black text-on-surface">$42,500</h3>
                <p class="text-xs text-slate-500 font-medium mt-2">Basado en MSRP actual</p>
              </div>
              <div class="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                <span class="material-symbols-outlined text-3xl" data-icon="payments">payments</span>
              </div>
            </div>
          </section>

          <!-- Table & Filters Section -->
          <section class="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden flex flex-col border border-slate-100">
            <!-- Advanced Filter Bar -->
            <div class="p-6 border-b border-slate-50 flex flex-wrap items-center justify-between gap-4 bg-slate-50/50">
              <div class="flex items-center gap-3">
                <div class="relative">
                  <select class="appearance-none pl-4 pr-10 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 focus:ring-primary focus:border-primary cursor-pointer outline-none">
                    <option>Todas las Categorías</option>
                    <option>Juegos de Mesa</option>
                    <option>Cartas Coleccionables</option>
                    <option>Miniaturas</option>
                    <option>Accesorios</option>
                  </select>
                  <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                </div>
                <div class="relative">
                  <select class="appearance-none pl-4 pr-10 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 focus:ring-primary focus:border-primary cursor-pointer outline-none">
                    <option>Estado: Todos</option>
                    <option>En Stock</option>
                    <option>Stock Bajo</option>
                    <option>Agotado</option>
                  </select>
                  <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                </div>
                <button class="px-4 py-2 text-sm font-bold text-primary hover:bg-primary-fixed/30 rounded-lg transition-colors flex items-center gap-2">
                  <span class="material-symbols-outlined text-lg">filter_list</span>
                  Más Filtros
                </button>
              </div>
              <div class="flex items-center gap-2">
                <button class="p-2 text-slate-400 hover:text-primary transition-colors">
                  <span class="material-symbols-outlined">file_download</span>
                </button>
                <button class="p-2 text-slate-400 hover:text-primary transition-colors">
                  <span class="material-symbols-outlined">print</span>
                </button>
              </div>
            </div>

            <!-- Data Table -->
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-slate-50/80 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100">
                    <th class="px-6 py-4">Producto</th>
                    <th class="px-6 py-4">SKU</th>
                    <th class="px-6 py-4">Categoría</th>
                    <th class="px-6 py-4">Precio (MSRP)</th>
                    <th class="px-6 py-4">Stock</th>
                    <th class="px-6 py-4">Estado</th>
                    <th class="px-6 py-4 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr class="hover:bg-slate-50/50 transition-colors group">
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-lg bg-surface-container-highest overflow-hidden">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_dwZypleUsSIDRgs7XPNKzczMhXPz0dhDFnmPyQnsmitmCCEVLnG3EMmaR3c4oeQYmrLqB3vOqVmZZrxW7h4NI9Gy4qaAfSGlc_5c-7V6DBCXSCNy9_foCFx7NoLjgc_SbePFIsoxkNJuzYshdU1eh_JmaN9v-_GoTN-5GrNMMOyWY7a08l1-fAYZAVgKnkpuObEBBNQ1o8lVUD0SZD39AIDgbgS3i-ZvJyHGygKlJULvzyumENg5lQSXDQz4OnG8E51Po9S_TeiY" alt="Gloomhaven Board Game" class="w-full h-full object-cover"/>
                        </div>
                        <div>
                          <p class="font-bold text-on-surface leading-tight">Gloomhaven: Jaws of the Lion</p>
                          <p class="text-xs text-slate-500">Edición en Español</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm font-mono text-slate-600">GH-JOTL-01</td>
                    <td class="px-6 py-4">
                      <span class="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-black uppercase tracking-wider">Juegos de Mesa</span>
                    </td>
                    <td class="px-6 py-4 font-bold text-on-surface">$54.99</td>
                    <td class="px-6 py-4">
                      <div class="flex flex-col gap-1">
                        <span class="text-sm font-bold text-on-surface">42 unidades</span>
                        <div class="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div class="bg-green-500 h-full" style="width: 85%"></div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-1.5 text-green-600 font-bold text-xs">
                        <span class="w-2 h-2 rounded-full bg-green-500"></span>
                        In Stock
                      </div>
                    </td>
                    <td class="px-6 py-4 text-right">
                      <div class="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button class="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all border-none bg-transparent cursor-pointer outline-none">
                          <span class="material-symbols-outlined text-xl">edit</span>
                        </button>
                        <button class="p-2 text-slate-400 hover:text-error hover:bg-error/10 rounded-lg transition-all border-none bg-transparent cursor-pointer outline-none">
                          <span class="material-symbols-outlined text-xl">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  
                  <tr class="hover:bg-slate-50/50 transition-colors group">
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-lg bg-surface-container-highest overflow-hidden">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsp0MndAiPSH_JANRFGIrv25gTxzEGj-cCers-VtQ5QsESmhK8uTOae_6EGgYgXQPl0LadsTeDGCd-gMK2U3Tg_h-i7gcGuGj6kcU_RjwQf1hMe79mbS8JJ8Vesa1WnBy9VnOaDLwfhuXFSVj4Bw4fRZrRT5kcJ09ElRS6w5UqQyH7gwZYh6NKm9YhHVhlUkBMc2HEo30yksnjaWw9FfLhapAnGkK9Y3BIyQ9bgXupy_zpNxK6Tpuk33VeSjcSucBhz131Yn6PD4TL" alt="Magic" class="w-full h-full object-cover"/>
                        </div>
                        <div>
                          <p class="font-bold text-on-surface leading-tight">MTG: March of the Machine</p>
                          <p class="text-xs text-slate-500">Draft Booster Box</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm font-mono text-slate-600">MTG-MOM-BB</td>
                    <td class="px-6 py-4">
                      <span class="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-black uppercase tracking-wider">Cartas</span>
                    </td>
                    <td class="px-6 py-4 font-bold text-on-surface">$119.00</td>
                    <td class="px-6 py-4">
                      <div class="flex flex-col gap-1">
                        <span class="text-sm font-bold text-on-surface">5 unidades</span>
                        <div class="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div class="bg-secondary h-full" style="width: 15%"></div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-1.5 text-secondary font-bold text-xs">
                        <span class="w-2 h-2 rounded-full bg-secondary"></span>
                        Low Stock
                      </div>
                    </td>
                    <td class="px-6 py-4 text-right">
                      <div class="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button class="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all border-none bg-transparent cursor-pointer outline-none">
                          <span class="material-symbols-outlined text-xl">edit</span>
                        </button>
                        <button class="p-2 text-slate-400 hover:text-error hover:bg-error/10 rounded-lg transition-all border-none bg-transparent cursor-pointer outline-none">
                          <span class="material-symbols-outlined text-xl">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr class="hover:bg-slate-50/50 transition-colors group">
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-lg bg-surface-container-highest overflow-hidden">
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm2uEZyuH3UjCS6pzL1jCgoj5bFKphX5o67yQIta7MM3svNI5mAhRXBTnZ81QiQd6fROHoekN0pb2LwkUlms0uwfRdjWMoNVhCv9mq-i3LEn_POJ942SOXDC4_oPCprtebhyAu01V6mKo1vGhuryRXIVhJLail1F7rkEqzSwsRNhTpWMMSwIESNtWkh-k4ZrsK0qYuNECtnAnuNkp2suNSH0epYwImyx58NyBRDqI5-g9u-_HCan0DBfPwN3q-z7xhLSM4fp46QEzb" alt="D&D Player's Handbook" class="w-full h-full object-cover"/>
                        </div>
                        <div>
                          <p class="font-bold text-on-surface leading-tight">D&amp;D 5th Ed: Player's Handbook</p>
                          <p class="text-xs text-slate-500">Core Rulebook</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm font-mono text-slate-600">DND-PHB-05</td>
                    <td class="px-6 py-4">
                      <span class="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black uppercase tracking-wider">Libros / RPG</span>
                    </td>
                    <td class="px-6 py-4 font-bold text-on-surface">$49.95</td>
                    <td class="px-6 py-4">
                      <div class="flex flex-col gap-1">
                        <span class="text-sm font-bold text-on-surface">0 unidades</span>
                        <div class="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div class="bg-red-500 h-full" style="width: 0%"></div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-1.5 text-error font-bold text-xs">
                        <span class="w-2 h-2 rounded-full bg-error"></span>
                        Out of Stock
                      </div>
                    </td>
                    <td class="px-6 py-4 text-right">
                      <div class="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button class="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all border-none bg-transparent cursor-pointer outline-none">
                          <span class="material-symbols-outlined text-xl">edit</span>
                        </button>
                        <button class="p-2 text-slate-400 hover:text-error hover:bg-error/10 rounded-lg transition-all border-none bg-transparent cursor-pointer outline-none">
                          <span class="material-symbols-outlined text-xl">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <!-- Pagination -->
            <div class="p-6 border-t border-slate-50 bg-slate-50/30 flex items-center justify-between">
              <p class="text-xs font-semibold text-slate-500">Mostrando 1-10 de 1,284 productos</p>
              <div class="flex items-center gap-2">
                <button class="p-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-white hover:text-primary transition-all disabled:opacity-50" disabled>
                  <span class="material-symbols-outlined">chevron_left</span>
                </button>
                <button class="w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold shadow-md shadow-primary/20">1</button>
                <button class="w-8 h-8 rounded-lg text-slate-600 text-xs font-bold hover:bg-white transition-all">2</button>
                <button class="w-8 h-8 rounded-lg text-slate-600 text-xs font-bold hover:bg-white transition-all">3</button>
                <span class="text-slate-400 px-1">...</span>
                <button class="w-8 h-8 rounded-lg text-slate-600 text-xs font-bold hover:bg-white transition-all">128</button>
                <button class="p-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-white hover:text-primary transition-all">
                  <span class="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </section>
        </div>

        <footer class="mt-auto py-6 px-8 text-center">
          <p class="text-xs text-slate-400 font-medium tracking-wide">© 2024 Istmo Games — Gestión de Inventario Editorial Premium</p>
        </footer>
      </main>
    </div>

    <!-- Mobile Layout -->
    <div class="md:hidden bg-background min-h-[100dvh] pb-24 text-left w-full flex flex-col">
      <!-- TopAppBar -->
      <header class="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm h-20 flex items-center justify-between px-6">
        <div class="flex items-center gap-4">
          <router-link to="/" class="text-sky-900 dark:text-sky-400 active:scale-95 duration-200">
            <span class="material-symbols-outlined" data-icon="menu">menu</span>
          </router-link>
          <h1 class="font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-xl text-sky-950 dark:text-white">Inventory</h1>
        </div>
        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx3TalIcOrf5wiZ-wYn8g3IrSWyIQ-iEuMPr0Lnhwj1fJg_wUDga1MvnDjdhdxgn1n-HYoBZ6EHF2Yl1wUxj2LAlWdQzSApIgUVScmqD0KMDtjDmR_6nAEM8JcBOekCJAJ4ZaXDpG1BJSXnvIoqSgF-Z6JknNz6178D78Wp4z-ag_D5yfVo2b2WpajpzU8Yn9HDSgg1OrO-avpS3BMw5gif92FfZ5l6SZZQj0d7gp73kiW9IlxmLQ6Dj1ULSXlqEZBujITxWTXRnv2" alt="Admin User Profile" class="w-full h-full object-cover"/>
        </div>
      </header>

      <main class="pt-24 px-4 space-y-6 flex-1">
        <!-- Search Section -->
        <section class="relative">
          <div class="flex items-center bg-surface-container-high rounded-xl px-4 py-3 shadow-sm group focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <span class="material-symbols-outlined text-outline" data-icon="search">search</span>
            <input type="text" placeholder="Find specific products..." class="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline ml-2 text-sm outline-none"/>
            <button class="text-outline hover:text-primary transition-colors cursor-pointer border-none bg-transparent">
              <span class="material-symbols-outlined" data-icon="filter_list">filter_list</span>
            </button>
          </div>
        </section>

        <!-- Dynamic Tabs -->
        <nav class="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button class="whitespace-nowrap px-6 py-2.5 rounded-full bg-primary text-on-primary text-sm font-bold shadow-md shadow-primary/20 border-none outline-none">
            All Items
          </button>
          <button class="whitespace-nowrap px-6 py-2.5 rounded-full bg-surface-container-low text-on-surface-variant text-sm font-semibold hover:bg-surface-container-highest transition-colors border-none outline-none">
            Low Stock
          </button>
          <button class="whitespace-nowrap px-6 py-2.5 rounded-full bg-surface-container-low text-on-surface-variant text-sm font-semibold hover:bg-surface-container-highest transition-colors border-none outline-none">
            Out of Stock
          </button>
        </nav>

        <!-- Stats Overview -->
        <div class="grid grid-cols-2 gap-3">
          <div class="bg-primary-container p-4 rounded-xl flex flex-col justify-between h-28 relative overflow-hidden">
            <span class="material-symbols-outlined absolute -right-2 -bottom-2 text-6xl text-white/10" data-icon="inventory_2">inventory_2</span>
            <span class="text-on-primary-container text-xs font-bold uppercase tracking-widest opacity-80">Total Skus</span>
            <span class="text-white text-3xl font-extrabold tracking-tight">1,284</span>
          </div>
          <div class="bg-secondary-container p-4 rounded-xl flex flex-col justify-between h-28 relative overflow-hidden">
            <span class="material-symbols-outlined absolute -right-2 -bottom-2 text-6xl text-white/10" data-icon="warning">warning</span>
            <span class="text-on-secondary-container text-xs font-bold uppercase tracking-widest opacity-80">Alerts</span>
            <span class="text-white text-3xl font-extrabold tracking-tight">12</span>
          </div>
        </div>

        <!-- Product List -->
        <div class="space-y-4">
          <h3 class="text-on-surface font-bold text-lg px-1">Recent Products</h3>
          
          <div class="bg-surface-container-lowest p-4 rounded-xl shadow-[0_4px_20px_0_rgba(0,0,0,0.02)] flex gap-4 items-start relative border-l-4 border-secondary-container">
            <div class="w-16 h-16 bg-surface-container-highest rounded-lg overflow-hidden flex-shrink-0">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCrkavWyYFwTY5opSQckLApidTw9oJwmFlG5ctdDLYIo-pWB50K6dWkSGfquoLUMahHPp0pJgHusjPf2W9Jt2ojMdrCXgbc5YJMYQxCmqIgWlnMb-uhTtB92G7Y-ZiANv_DzrM8ug8ldMQM7xglpYjl2qq9fvfXXXiGyFEwNkR-kWYw6lt7Mg6WxWokFVAaox6C6juTokLRTc0F1HTEL1QrTWqmlTxBmmRnhIJOD2XY44P50eWj9R002-FoSLLAjdVp7V6-zyAQ2yq" alt="Eldritch" class="w-full h-full object-cover"/>
            </div>
            <div class="flex-grow min-w-0">
              <div class="flex justify-between items-start">
                <h4 class="font-bold text-on-surface truncate pr-2">Eldritch Omens: Deluxe Edition</h4>
                <span class="bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Low Stock</span>
              </div>
              <p class="text-xs text-outline font-medium">SKU: EO-DLX-001</p>
              <div class="mt-2 flex items-end justify-between">
                <div>
                  <span class="text-primary font-extrabold text-lg">$89.99</span>
                  <span class="text-outline-variant text-[10px] ml-1">MSRP</span>
                </div>
                <div class="flex items-center gap-1 bg-surface-container-low px-3 py-1 rounded-lg">
                  <span class="text-xs font-bold text-secondary">8</span>
                  <span class="text-[10px] text-outline">left</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-2 ml-1">
              <button class="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors border-none bg-transparent cursor-pointer">
                <span class="material-symbols-outlined text-xl" data-icon="edit_square">edit_square</span>
              </button>
              <button class="p-2 text-error hover:bg-error/10 rounded-lg transition-colors border-none bg-transparent cursor-pointer">
                <span class="material-symbols-outlined text-xl" data-icon="delete">delete</span>
              </button>
            </div>
          </div>

          <div class="bg-surface-container-lowest p-4 rounded-xl shadow-[0_4px_20px_0_rgba(0,0,0,0.02)] flex gap-4 items-start relative">
            <div class="w-16 h-16 bg-surface-container-highest rounded-lg overflow-hidden flex-shrink-0">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3_IvGKZwpVo5xtcmTRuaJZJ0-Wkl8U9kwjT5QO79OchEZybMD-rSaNqYfJB3ReniTeZwv64AwjYEdczPbful83iBQDxg-tiR3O06XDADRuyw-Z6oe6HPAn2y-t7RH7ihhSBBp3ojMBgaZPQP_LShc6LDbyZdZnHT9y1UhElQj-tWUblZHCf8qTmEVaQ1NP8I045YGD_9YRQ-FoTsrqWOQsBUtMXQ9vJrObEeqxttX4vh8LuqG7vbaK4TZhqnh7WnhKx1P4Dae4XR3" alt="Starship" class="w-full h-full object-cover"/>
            </div>
            <div class="flex-grow min-w-0">
              <div class="flex justify-between items-start">
                <h4 class="font-bold text-on-surface truncate pr-2">Star-Ship Command Deck</h4>
                <span class="bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">In Stock</span>
              </div>
              <p class="text-xs text-outline font-medium">SKU: SS-CMD-042</p>
              <div class="mt-2 flex items-end justify-between">
                <div>
                  <span class="text-primary font-extrabold text-lg">$24.50</span>
                </div>
                <div class="flex items-center gap-1 bg-surface-container-low px-3 py-1 rounded-lg">
                  <span class="text-xs font-bold text-primary">142</span>
                  <span class="text-[10px] text-outline">units</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-2 ml-1">
              <button class="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors border-none bg-transparent cursor-pointer">
                <span class="material-symbols-outlined text-xl" data-icon="edit_square">edit_square</span>
              </button>
              <button class="p-2 text-error hover:bg-error/10 rounded-lg transition-colors border-none bg-transparent cursor-pointer">
                <span class="material-symbols-outlined text-xl" data-icon="delete">delete</span>
              </button>
            </div>
          </div>

          <div class="bg-surface-container-lowest p-4 rounded-xl shadow-[0_4px_20px_0_rgba(0,0,0,0.02)] flex gap-4 items-start relative opacity-70 grayscale-[0.5]">
            <div class="w-16 h-16 bg-surface-container-highest rounded-lg overflow-hidden flex-shrink-0">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPTRGKmt1cFR44Wn8G9x9wdi6jVJOqxgfPSBe5cWeUEghBbVW1wzaN4HDvjN-V8JSZkMBtBXdRUyMiYjQVBzdIgkEkS7y7oIhsgRuX6qRCTsUA_7CbSWGvpcJzcM2C-TsZ1VeCXD732rBxWcTtFHyfMOt5AKgkJOLxLSvxB8P1dd_Va9rv2EFt0iye5XT8eAZ4eoZjEMNyXMYw28H8axJIQc3eDYEltzwPfDkqY6r8z1PCyRsSlvirwEva6FBe7ZhmaAulzSoMy1bA" alt="Dice" class="w-full h-full object-cover"/>
            </div>
            <div class="flex-grow min-w-0">
              <div class="flex justify-between items-start">
                <h4 class="font-bold text-on-surface truncate pr-2">Void-Forged Metal Dice</h4>
                <span class="bg-error-container text-on-error-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Out of Stock</span>
              </div>
              <p class="text-xs text-outline font-medium">SKU: VF-MTL-99</p>
              <div class="mt-2 flex items-end justify-between">
                <div>
                  <span class="text-primary font-extrabold text-lg">$45.00</span>
                </div>
                <div class="flex items-center gap-1 bg-error-container/30 px-3 py-1 rounded-lg">
                  <span class="text-xs font-bold text-error">0</span>
                  <span class="text-[10px] text-error/70">left</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-2 ml-1">
              <button class="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors border-none bg-transparent cursor-pointer">
                <span class="material-symbols-outlined text-xl" data-icon="edit_square">edit_square</span>
              </button>
              <button class="p-2 text-error hover:bg-error/10 rounded-lg transition-colors border-none bg-transparent cursor-pointer">
                <span class="material-symbols-outlined text-xl" data-icon="delete">delete</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <!-- Floating Action Button -->
      <router-link to="/admin/inventory/upload" class="fixed bottom-24 right-6 w-16 h-16 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-2xl shadow-xl shadow-primary/40 flex items-center justify-center active:scale-90 duration-200 z-[60]">
        <span class="material-symbols-outlined text-3xl" data-icon="add">add</span>
      </router-link>

      <!-- Bottom Navigation Shell -->
      <AdminBottomNav />
    </div>
  </div>
</template>

<script setup>
import AdminSidebar from '@/components/AdminSidebar.vue'
import AdminBottomNav from '@/components/AdminBottomNav.vue'
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
