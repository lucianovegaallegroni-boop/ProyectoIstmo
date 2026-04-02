<template>
  <div class="admin-orders">
    <!-- Desktop Layout -->
    <div class="hidden md:flex bg-surface text-on-surface min-h-screen text-left w-full">
      <!-- SideNavBar Integration -->
      <!-- SideNavBar Integration -->
      <AdminSidebar />

      <!-- Main Content Canvas -->
      <main class="ml-64 min-h-screen flex-1">
        <!-- TopNavBar Integration -->
        <header class="flex items-center justify-between px-8 w-full h-16 sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
          <div class="flex items-center gap-4 flex-1">
            <div class="relative w-full max-w-md group">
              <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
              <input type="text" placeholder="Global search..." class="w-full pl-10 pr-4 py-2 bg-surface-container-high border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"/>
            </div>
          </div>
          <div class="flex items-center gap-6">
            <div class="flex items-center gap-4">
              <button class="p-2 hover:bg-surface-container rounded-full transition-colors relative cursor-pointer outline-none border-none bg-transparent">
                <span class="material-symbols-outlined text-on-surface-variant" data-icon="notifications">notifications</span>
                <span class="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
              </button>
              <button class="p-2 hover:bg-surface-container rounded-full transition-colors cursor-pointer outline-none border-none bg-transparent">
                <span class="material-symbols-outlined text-on-surface-variant" data-icon="help_outline">help_outline</span>
              </button>
            </div>
            <div class="h-8 w-[1px] bg-outline-variant/30"></div>
            <div class="flex items-center gap-3">
              <div class="text-right hidden xl:block">
                <p class="text-sm font-bold leading-none">Admin User</p>
                <p class="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Store Manager</p>
              </div>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi6OC0HxHSKNG0P2TvknPik8JtZFS5b3UtPnlEVkuOul4w7cbDosSm6QcBCV3F-RI5JPTl56Ou8QU0qFi4vULV_ZMUly0YBluyGLJN949S9txmUEnsku2xw4cBXoPN1m62tJ2qNTtPtqnB2Fm2oQe5klA4CnM7zNzJeh-xWHN2CormWu3shnvGYPlIK2e88dMPDNd673Y51CO1uW1EN8gewUAlzmMVa5BWTW0fKHIydrjPaDKbjY64PgyQkAFIfsmdgD3b4r16HZ65" alt="Admin Profile" class="w-10 h-10 rounded-full object-cover border-2 border-surface-container-highest shadow-sm"/>
            </div>
          </div>
        </header>

        <!-- Page Header & Metrics Section -->
        <div class="px-8 py-8">
          <div class="flex items-end justify-between mb-8">
            <div>
              <h2 class="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Gestión de Pedidos</h2>
              <p class="text-on-surface-variant">Supervisa y procesa las ventas de Istmo Games.</p>
            </div>
            <button class="flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/10 border-none outline-none cursor-pointer">
              <span class="material-symbols-outlined">add</span>
              Nuevo Pedido
            </button>
          </div>

          <!-- Bento Metrics -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
              <div class="flex items-center justify-between mb-4">
                <div class="p-3 bg-primary-container/10 rounded-xl">
                  <span class="material-symbols-outlined text-primary">analytics</span>
                </div>
                <span class="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">+12%</span>
              </div>
              <p class="text-on-surface-variant text-sm font-medium mb-1">Total de Pedidos</p>
              <h3 class="text-2xl font-black">1,284</h3>
            </div>

            <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
              <div class="flex items-center justify-between mb-4">
                <div class="p-3 bg-secondary-container/10 rounded-xl">
                  <span class="material-symbols-outlined text-secondary">pending_actions</span>
                </div>
                <span class="text-xs font-bold text-secondary bg-secondary-container/10 px-2 py-1 rounded-full">Atención</span>
              </div>
              <p class="text-on-surface-variant text-sm font-medium mb-1">Pendientes</p>
              <h3 class="text-2xl font-black">42</h3>
            </div>

            <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
              <div class="flex items-center justify-between mb-4">
                <div class="p-3 bg-blue-100 rounded-xl">
                  <span class="material-symbols-outlined text-blue-600">local_shipping</span>
                </div>
              </div>
              <p class="text-on-surface-variant text-sm font-medium mb-1">Enviados Hoy</p>
              <h3 class="text-2xl font-black">18</h3>
            </div>

            <div class="bg-primary text-on-primary p-6 rounded-2xl shadow-xl shadow-primary/20 relative overflow-hidden flex flex-col justify-between">
              <div class="relative z-10">
                <div class="flex items-center justify-between mb-4">
                  <div class="p-3 bg-white/20 rounded-xl">
                     <span class="material-symbols-outlined text-white">payments</span>
                  </div>
                </div>
                <p class="text-white/70 text-sm font-medium mb-1">Ventas Totales</p>
                <h3 class="text-2xl font-black">$42,500.00</h3>
              </div>
              <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>

          <!-- Search and Filter Bar -->
          <div class="bg-surface-container-low rounded-2xl p-4 mb-6 flex flex-wrap items-center gap-6">
            <div class="relative flex-1 min-w-[300px]">
              <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input type="text" placeholder="Buscar por ID, cliente o producto..." class="w-full pl-12 pr-4 py-3 bg-white border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none"/>
            </div>
            <div class="flex items-center bg-white p-1 rounded-xl shadow-sm">
              <button class="px-5 py-2 text-sm font-bold bg-primary text-on-primary rounded-lg border-none outline-none cursor-pointer">Todos</button>
              <button class="px-5 py-2 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors border-none outline-none cursor-pointer bg-transparent">Pendiente</button>
              <button class="px-5 py-2 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors border-none outline-none cursor-pointer bg-transparent">Enviado</button>
              <button class="px-5 py-2 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors border-none outline-none cursor-pointer bg-transparent">Entregado</button>
              <button class="px-5 py-2 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors border-none outline-none cursor-pointer bg-transparent">Cancelado</button>
            </div>
            <button class="flex items-center gap-2 px-4 py-3 bg-white rounded-xl text-sm font-bold border border-outline-variant/20 hover:bg-surface-container-high transition-colors outline-none cursor-pointer">
              <span class="material-symbols-outlined text-sm">filter_list</span>
              Más filtros
            </button>
          </div>

          <!-- Orders Table Container -->
          <div class="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-surface-container-low/50 border-b border-outline-variant/10">
                  <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Orden ID</th>
                  <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Cliente</th>
                  <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Fecha</th>
                  <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Productos</th>
                  <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">Total</th>
                  <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Estado</th>
                  <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-center">Acciones</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-outline-variant/10">
                <tr class="hover:bg-surface-container-low/30 transition-colors group">
                  <td class="px-6 py-5 font-bold text-primary text-sm">#IST-4821</td>
                  <td class="px-6 py-5">
                    <div class="flex items-center gap-3">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG5px638D9U1kWVkkNXbUK-wWtuZtArc_LUsCniOSvbyQoAPBAay-QiHYI4gE14NUh4u7xukT7T3p_3CZASsVgDmz7eFCg865qjrBHu4K4Xu53EycJPbuYUE3JyYKYrCz0jjwS8-9KHfC-jYpZSl0W8Ct_nYWRAhnEytgTO-hRzThnsBnXmBwPpvWJ6WGuFmeuEd0Rsu3oKc5LCg0b_yHsOCVIWjAzRdff102OlxNkxIbMMwYwhDkpP4YJZ99S-NMKXT8EkV5cPOV3" alt="Avatar" class="w-8 h-8 rounded-full object-cover"/>
                      <span class="text-sm font-semibold">Elena Rodríguez</span>
                    </div>
                  </td>
                  <td class="px-6 py-5 text-sm text-on-surface-variant">12 Oct, 2023</td>
                  <td class="px-6 py-5">
                    <div class="flex items-center -space-x-2">
                       <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAPF8IepuM0n9dNuMqQ_vxBf2HVOHus6XDefFmdhaQXuGx62QJ2joBlRFoP8NeszYnORo9_kPftT1PhWt2Kr9BFrT8f3sL8yn9de6gwVwfg2ItOtlUcyizW8On7M4O3lVw-Nn0YRG6jw9cu3uOGGxSWfGdCl9up0kUg1EEDmeDFC1RfxDA8iDuU4Q09-ShWHe9yNINVoCtToAWXgBgT3irwWlDpdQtIfulUqBFa-PkVD56EIQ5r1-5EQa3MP72FAQeu38vijt55Nyz" alt="Product" class="w-8 h-8 rounded-lg object-cover ring-2 ring-white"/>
                       <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZuf-6QZ78RqDcd59zI8AN9whXoc4-oUj4XOJUC-m6_qr4vJQIE4zzdzK8ftqWxY3CJrM5ZP4cX9GG_M__KcWNwxLd3nZ0qxfhFsSg-8d6W1RhRV2ylO-ykNL8JojHpFjs4zsQBFMs61Fm1ktPcHt1HmlSTM_mVnJqKHZBZCTvU9y9H9EHRIDmyDGDwXSSZAkk_daS_MwNkNWUGSeoT3qU40d2ffYZ49cuo5Yr7DeY-pp5JAEuVFoOQZ1TLaep1c4m6rk118MfA9a8" alt="Product" class="w-8 h-8 rounded-lg object-cover ring-2 ring-white"/>
                       <div class="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-[10px] font-bold ring-2 ring-white">+1</div>
                    </div>
                  </td>
                  <td class="px-6 py-5 text-sm font-black text-right">$85.00</td>
                  <td class="px-6 py-5">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-secondary-container/10 text-secondary">
                      <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> Pendiente
                    </span>
                  </td>
                  <td class="px-6 py-5 text-center">
                    <div class="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button class="px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/10 rounded-lg transition-colors border-none bg-transparent cursor-pointer">Ver Detalles</button>
                      <button class="p-1.5 hover:bg-surface-container rounded-lg text-on-surface-variant border-none bg-transparent cursor-pointer">
                        <span class="material-symbols-outlined text-sm">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr class="hover:bg-surface-container-low/30 transition-colors group">
                  <td class="px-6 py-5 font-bold text-primary text-sm">#IST-4820</td>
                  <td class="px-6 py-5">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-xs font-bold">MR</div>
                      <span class="text-sm font-semibold">Marco Rivas</span>
                    </div>
                  </td>
                  <td class="px-6 py-5 text-sm text-on-surface-variant">12 Oct, 2023</td>
                  <td class="px-6 py-5">
                    <div class="flex items-center">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuArQkqgQyLvxHIvNeihVfl-FsSyeP4ZFOcyLKJ-DX3VsZk5mrgZF7XWmPsW-i68e4qUdkKI1pFO89kcgImvjaHPri-OvKHeeyKhxiemie60Cm21MTBoFy5ylrfBF8w6kT4bwkGa4agBUIVicaFZfPsMwuKHKXp8GGMf1_jVxw_8U_XSo_KMq6feN1Z8j4Kb6vC8LLTLxTe9-KQARit1spUH8wfSExfqLxvI_p4KauN13TvHHd7VYwAOLI1YwH3lC3ndaqGxjrjSTkki" alt="Product" class="w-8 h-8 rounded-lg object-cover ring-2 ring-white" />
                      <span class="ml-2 text-xs text-on-surface-variant truncate max-w-[100px]">Ajedrez Premium</span>
                    </div>
                  </td>
                  <td class="px-6 py-5 text-sm font-black text-right">$120.50</td>
                  <td class="px-6 py-5">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-blue-100 text-blue-600">
                      <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Enviado
                    </span>
                  </td>
                  <td class="px-6 py-5 text-center">
                    <div class="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button class="px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/10 rounded-lg transition-colors border-none bg-transparent cursor-pointer">Ver Detalles</button>
                      <button class="p-1.5 hover:bg-surface-container rounded-lg text-on-surface-variant border-none bg-transparent cursor-pointer">
                         <span class="material-symbols-outlined text-sm">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr class="hover:bg-surface-container-low/30 transition-colors group">
                  <td class="px-6 py-5 font-bold text-primary text-sm">#IST-4819</td>
                  <td class="px-6 py-5">
                    <div class="flex items-center gap-3">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn_djJEgEpBnoJreIysBLUb6PXm66xErl2f8JqFl0hJXpdKwpUNZO5vhbN8aMW2Yi2NsERLez_Nn0GVBQBaG2oYEvrT972H0vFICdAlOxGxZoNCpBqNBZaJc3HTiioj7haRBIXyIAVQU6cIWntJo3O8RnpcFdTX3CpzgUqrIhP68VmOuEv-CqOquXs-Q8LLjTWmJcsYi-PsL6e8DsZaVFXPkf4_OFl3NAQ75PDQihkpeAhxDj0UPAV26d5Wiy7ABl9gcQuHnNUYp1d" alt="Avatar" class="w-8 h-8 rounded-full object-cover"/>
                      <span class="text-sm font-semibold">Samuel Vega</span>
                    </div>
                  </td>
                  <td class="px-6 py-5 text-sm text-on-surface-variant">11 Oct, 2023</td>
                  <td class="px-6 py-5">
                    <div class="flex items-center -space-x-2">
                       <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmSmYX6QG3sWLN9SBcqrq6PLxizpAmQY2j2Gji9CP9DztBsRfPwYcSnea18BtwkLUXCOGej4YPMXPENdn1eN0m_plm8EiCmRdETcBAwOpVMYe7E1wEM9Uk7KKUDS_G49gIHEHzb15Eo0A6cCQtF_NECHWJqRpex3u8PD-6u80ekk8vGsbdvB6GkJnI5EQsHgUMkbir_QoP5HQ0UhThPStSGkq7yJKkweia_OFT7MJ8QBBPoX1ZDnUuXGDbqeolsVwfWuVBWhqQjMgw" alt="Product" class="w-8 h-8 rounded-lg object-cover ring-2 ring-white" />
                       <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAth_h3YaLfAQpUDAXoBCfAt37-AX1Etbl1y697VzeBstUNTDzkIcYMX-wO9A_FiikOcQPXIjaU9Hz5gsf0RfU09pfzXgWEFtuH8IVDnf43fd1p29HWym6Fyx1hymQj6ro-M-DfJGBgsqxO9mrt43pX4X0fZY37AR3SWEk8tgJCBbLzl7-x8SvPmupUhajqyXEBP20Rzy5mOlh7BldG4HQaCuGRAfZvvScjwOnwBm4yzwC8unQuMXwRMy7w-U_7VVrLUmdqzi24VuGX" alt="Product" class="w-8 h-8 rounded-lg object-cover ring-2 ring-white" />
                    </div>
                  </td>
                  <td class="px-6 py-5 text-sm font-black text-right">$45.00</td>
                  <td class="px-6 py-5">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-green-100 text-green-700">
                       <span class="w-1.5 h-1.5 rounded-full bg-green-700"></span> Entregado
                    </span>
                  </td>
                  <td class="px-6 py-5 text-center">
                    <div class="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button class="px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/10 rounded-lg transition-colors border-none bg-transparent cursor-pointer">Ver Detalles</button>
                      <button class="p-1.5 hover:bg-surface-container rounded-lg text-on-surface-variant border-none bg-transparent cursor-pointer">
                         <span class="material-symbols-outlined text-sm">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>

                <tr class="hover:bg-surface-container-low/30 transition-colors group">
                  <td class="px-6 py-5 font-bold text-primary text-sm">#IST-4818</td>
                  <td class="px-6 py-5">
                    <div class="flex items-center gap-3">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxjhHI3cD-VzSiGXGEaYmXZKRndfCl6hVpoEkhrZupP1f-xB6vZjJ3kTpd2dlHbLD7iJm40DtUpyqKffoe7gFWwac3r-X7psXLOpNPU1hD2xGzKLTYjEi4zoVEVzzL9AlLTnDdQXTOlLjoI4T-LPUSiymSs9bsvGfkXfegGNBIBTfgnCByBi7yGm-w6eW45b23SOwEJaxjTnNGT2JYS8ZOzjjcrJezPzvVOhDFu1hqIK8mc785vc8ihcCjpuNBQlYqrYJlV9Bh8kQH" alt="Avatar" class="w-8 h-8 rounded-full object-cover"/>
                      <span class="text-sm font-semibold">Lucía Méndez</span>
                    </div>
                  </td>
                  <td class="px-6 py-5 text-sm text-on-surface-variant">11 Oct, 2023</td>
                  <td class="px-6 py-5">
                    <div class="flex items-center">
                       <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZW6-rT9e87Q_BqS1eTPQA6Kl3gHa_QDoYiHIqWMFCDyFt0hPhXjRHc23J9ywi2T0QIqS35GVGS_3BHeESBn27fTPiT76TCiO5MVw4X-xc4nEBLsk233SiBKSL-5b6mtkWP3Nik-MD6FaTIMx9bnSQFPwBXs_m-98Ki0sTWOBRjI4arC5CXjV8cPwiEEBKo0NE25ZsMAuPMAK_iGIUPtche4Z8muXgUQAgQJCYVCrCOgYc101g0wQWDhGHYg0MDRJYHrmrm166OZHj" alt="Product" class="w-8 h-8 rounded-lg object-cover ring-2 ring-white" />
                       <span class="ml-2 text-xs text-on-surface-variant truncate max-w-[100px]">Kit VR Quest</span>
                    </div>
                  </td>
                  <td class="px-6 py-5 text-sm font-black text-right">$299.99</td>
                  <td class="px-6 py-5">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-red-100 text-red-600">
                      <span class="w-1.5 h-1.5 rounded-full bg-red-600"></span> Cancelado
                    </span>
                  </td>
                  <td class="px-6 py-5 text-center">
                    <div class="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button class="px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/10 rounded-lg transition-colors border-none bg-transparent cursor-pointer">Ver Detalles</button>
                      <button class="p-1.5 hover:bg-surface-container rounded-lg text-on-surface-variant border-none bg-transparent cursor-pointer">
                         <span class="material-symbols-outlined text-sm">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- Table Footer / Pagination -->
            <div class="px-6 py-4 bg-surface-container-low/30 flex items-center justify-between border-t border-outline-variant/10">
              <p class="text-xs text-on-surface-variant font-medium">Mostrando 1-4 de 1,284 pedidos</p>
              <div class="flex items-center gap-2">
                <button class="p-2 hover:bg-white rounded-lg transition-colors disabled:opacity-50 border-none outline-none cursor-pointer bg-transparent" disabled>
                   <span class="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button class="w-8 h-8 flex items-center justify-center bg-primary text-on-primary rounded-lg text-xs font-bold border-none outline-none cursor-pointer">1</button>
                <button class="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg text-xs font-bold border-none outline-none cursor-pointer bg-transparent">2</button>
                <button class="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg text-xs font-bold border-none outline-none cursor-pointer bg-transparent">3</button>
                <span class="px-1 text-on-surface-variant">...</span>
                <button class="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg text-xs font-bold border-none outline-none cursor-pointer bg-transparent">42</button>
                <button class="p-2 hover:bg-white rounded-lg transition-colors border-none outline-none cursor-pointer bg-transparent">
                  <span class="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Mobile Layout -->
    <div class="md:hidden bg-surface text-on-surface min-h-[100dvh] pb-32 flex flex-col w-full text-left">
      <!-- TopAppBar -->
      <header class="sticky top-0 w-full z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none transition-all">
        <div class="flex items-center justify-between px-6 py-4 w-full">
          <div class="flex items-center gap-4">
            <button class="active:scale-95 duration-150 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-full border-none outline-none bg-transparent cursor-pointer">
               <span class="material-symbols-outlined text-sky-900 dark:text-sky-400">menu</span>
            </button>
            <h1 class="text-xl font-extrabold text-sky-900 dark:text-sky-100 font-['Plus_Jakarta_Sans'] tracking-tight">Gestión de Pedidos</h1>
          </div>
          <div class="flex items-center gap-2">
            <button class="active:scale-95 duration-150 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-full border-none outline-none bg-transparent cursor-pointer">
              <span class="material-symbols-outlined text-sky-900 dark:text-sky-400">search</span>
            </button>
          </div>
        </div>
      </header>

      <main class="px-6 py-6 space-y-8 flex-1">
        <!-- Search & Filter Bar -->
        <section class="space-y-4">
          <div class="flex gap-3">
            <div class="relative flex-grow group">
              <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">search</span>
              <input type="text" placeholder="Buscar pedidos..." class="w-full pl-12 pr-4 py-3.5 bg-surface-container-high rounded-xl border-none focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline transition-all outline-none"/>
            </div>
            <button class="flex items-center justify-center p-3.5 bg-surface-container-high rounded-xl text-primary hover:bg-surface-container-highest transition-colors active:scale-95 border-none outline-none cursor-pointer">
              <span class="material-symbols-outlined">filter_list</span>
            </button>
          </div>
          
          <!-- Quick Filters -->
          <div class="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
            <button class="px-5 py-2 rounded-full bg-primary text-on-primary text-sm font-semibold whitespace-nowrap border-none outline-none cursor-pointer">Todos</button>
            <button class="px-5 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-semibold whitespace-nowrap hover:bg-surface-container-highest transition-colors border-none outline-none cursor-pointer">Pendiente</button>
            <button class="px-5 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-semibold whitespace-nowrap hover:bg-surface-container-highest transition-colors border-none outline-none cursor-pointer">Enviado</button>
            <button class="px-5 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-semibold whitespace-nowrap hover:bg-surface-container-highest transition-colors border-none outline-none cursor-pointer">Entregado</button>
          </div>
        </section>

        <!-- Order List -->
        <div class="space-y-4">
          <!-- Order Card 1: Pendiente -->
          <div class="group relative bg-surface-container-lowest rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-all cursor-pointer border border-outline-variant/10">
            <div class="flex justify-between items-start mb-4">
              <div>
                <p class="text-[10px] uppercase tracking-widest font-bold text-outline mb-1">Orden #IST-4821</p>
                <h3 class="text-lg font-bold text-on-surface">Carlos Ruiz</h3>
              </div>
              <span class="px-3 py-1 bg-secondary-container/15 text-secondary font-bold text-xs rounded-lg">Pendiente</span>
            </div>
            <div class="flex items-center gap-4 py-3">
              <div class="w-14 h-14 rounded-xl overflow-hidden bg-surface-container-highest">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMjjk5BGbYY62CEBO3BKL6a-NMxg9nFQvrO8Jgv5D-2ORr8IoXRkRfIo384YfLeU-MCfoBlGAfiYl-BrO4h9yDWH0fq3SmmD34DlDtMGBXSPrjtaIwyGoxOZ6udn1bRetV0xjk9TC9y9yf1lerPU3FecI2UZGvgEvx7OOsfinX-AkcliyfxG80Ozzbnw4eXLhhuDeuCO3Jtn5yLenFo2spNhrl5h60gJYXHmMjH_OBROHxNfzLc3v230_pLs4uyILI-vheaYZrJzCr" alt="Product" class="w-full h-full object-cover"/>
              </div>
              <div class="flex-grow">
                <p class="text-sm text-on-surface-variant font-medium">Terraforming Mars + 2 expansiones</p>
                <p class="text-xs text-outline mt-0.5">14 Oct, 2023 &bull; 3 items</p>
              </div>
              <div class="text-right">
                <p class="text-lg font-extrabold text-primary">$85.00</p>
              </div>
            </div>
            <div class="mt-2 flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-tight">
               <span>Ver detalles</span>
               <span class="material-symbols-outlined text-[16px]">chevron_right</span>
            </div>
          </div>

          <!-- Order Card 2: Enviado -->
          <div class="group relative bg-surface-container-lowest rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-all cursor-pointer border border-outline-variant/10">
            <div class="flex justify-between items-start mb-4">
              <div>
                <p class="text-[10px] uppercase tracking-widest font-bold text-outline mb-1">Orden #IST-4822</p>
                <h3 class="text-lg font-bold text-on-surface">Elena Martínez</h3>
              </div>
              <span class="px-3 py-1 bg-primary/10 text-primary font-bold text-xs rounded-lg">Enviado</span>
            </div>
            <div class="flex items-center gap-4 py-3">
              <div class="w-14 h-14 rounded-xl overflow-hidden bg-surface-container-highest">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiZsdQFRnxCv1u_qT0g9s-TZJG-hkG4rvFckG5l7J4yiTr_eQ-H_NWjCSsmnsL12bvp_lhrp10_8YclUmrANNER4ioEFx6lgtt3PdDOo6pgg3jHHAqGzthIU4UfagY-DximrOesUl50g-3LCTWPXmEzjDgGg4NMgl5cQCCoJgh8wUjMfRkANZu7fl64SieexjoQabaU1-5OfNn81-VWIfk-14ia242HsX5upvaXVZiRxfrNjtxP0qJQFkoWf7kJ58bCeu6NqV4yAsK" alt="Product" class="w-full h-full object-cover"/>
              </div>
              <div class="flex-grow">
                <p class="text-sm text-on-surface-variant font-medium">Wingspan Collector's Box</p>
                <p class="text-xs text-outline mt-0.5">13 Oct, 2023 &bull; 1 item</p>
              </div>
              <div class="text-right">
                <p class="text-lg font-extrabold text-primary">$120.50</p>
              </div>
            </div>
             <div class="mt-2 flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-tight">
               <span>Rastrear envío</span>
               <span class="material-symbols-outlined text-[16px]">local_shipping</span>
            </div>
          </div>

          <!-- Order Card 3: Entregado -->
          <div class="group relative bg-surface-container-lowest rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-all cursor-pointer border border-outline-variant/10">
            <div class="flex justify-between items-start mb-4">
              <div>
                <p class="text-[10px] uppercase tracking-widest font-bold text-outline mb-1">Orden #IST-4819</p>
                <h3 class="text-lg font-bold text-on-surface">Andrés Bello</h3>
              </div>
              <span class="px-3 py-1 bg-emerald-100 text-emerald-700 font-bold text-xs rounded-lg">Entregado</span>
            </div>
            <div class="flex items-center gap-4 py-3">
              <div class="w-14 h-14 rounded-xl overflow-hidden bg-surface-container-highest">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqHfWJPz4DGTIiBlJxW62bCGKVfmkUqxdAmd0qMo0EGrTKmaEx0MjD3LQehgFj9aY3jpNxHojN-byK16J5hKg6WuDKUQBpu8CuL4WdQrK52bro5J6AKCZ_WzcHqJghBUtNBx41cqJScWnoWhrNNnlNCs9oaq517-NjwwhUECAeJwnAS8L29pXdA6KI0PEE1Y_Hc49l4E3sD1aDNdd5y2nsJLWdJs-2iZJwbwH5dNhSLpiaXhlEv0AoglnG9PKn_8yAWgPxs-hCt_xn" alt="Product" class="w-full h-full object-cover"/>
              </div>
              <div class="flex-grow">
                <p class="text-sm text-on-surface-variant font-medium">Set de dados de metal Arcanis</p>
                <p class="text-xs text-outline mt-0.5">11 Oct, 2023 &bull; 2 items</p>
              </div>
              <div class="text-right">
                <p class="text-lg font-extrabold text-primary">$45.00</p>
              </div>
            </div>
          </div>

          <!-- Order Card 4: Cancelado -->
          <div class="group relative bg-surface-container-lowest rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-all cursor-pointer opacity-70 border border-outline-variant/10">
            <div class="flex justify-between items-start mb-4">
              <div>
                <p class="text-[10px] uppercase tracking-widest font-bold text-outline mb-1">Orden #IST-4815</p>
                <h3 class="text-lg font-bold text-on-surface">Sofía Lara</h3>
              </div>
              <span class="px-3 py-1 bg-surface-container-highest text-outline font-bold text-xs rounded-lg">Cancelado</span>
            </div>
            <div class="flex items-center gap-4 py-3">
               <div class="w-14 h-14 rounded-xl overflow-hidden bg-surface-container-highest grayscale">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe_e2BOw3TQrXhRye0CACuBtpCtViqz1nb3wcv0i6bxnj0YqJg1rtDpmJbYORw5bhiV4cX_RythF0k0365843m_lc1s5Vv55ofxQqOasghU-ZXOYMwoXef1r94uR8ZWHkuyq8P_ac1N89haPyhWbBID5aYvgRUIl_1SgrSs1gB0lbj7huO_MF9fuFnEYQcZ3EEpftqYeAuTnMq4Gq97pBa6Vc0lkKizucs6KWarwkQs6I5coM62n6px2wN0V1Ieqkx74st-SkObGii" alt="Product" class="w-full h-full object-cover"/>
               </div>
               <div class="flex-grow">
                 <p class="text-sm text-on-surface-variant font-medium">Catan: Starfarers Edition</p>
                 <p class="text-xs text-outline mt-0.5">08 Oct, 2023 &bull; 1 item</p>
               </div>
               <div class="text-right">
                 <p class="text-lg font-extrabold text-primary">$95.00</p>
               </div>
            </div>
          </div>
        </div>

        <!-- Pagination / Load More -->
        <div class="flex justify-center pt-4">
          <button class="group flex items-center gap-3 px-8 py-4 bg-surface-container-high rounded-2xl hover:bg-surface-container-highest transition-all duration-300 border-none outline-none cursor-pointer">
            <span class="text-sm font-bold text-primary">Cargar más pedidos</span>
            <span class="material-symbols-outlined text-primary group-hover:translate-y-1 transition-transform border-none outline-none cursor-pointer bg-transparent">keyboard_double_arrow_down</span>
          </button>
        </div>
      </main>

      <!-- BottomNavBar -->
      <AdminBottomNav />

      <!-- Contextual FAB -->
      <button class="fixed right-6 bottom-28 w-14 h-14 bg-secondary text-on-secondary rounded-full flex items-center justify-center shadow-2xl shadow-secondary/30 hover:scale-105 active:scale-95 transition-all z-50 border-none justify-center">
        <span class="material-symbols-outlined text-2xl">add_shopping_cart</span>
      </button>

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
.tap-highlight-transparent {
  -webkit-tap-highlight-color: transparent;
}
</style>
