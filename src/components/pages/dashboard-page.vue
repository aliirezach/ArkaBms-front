<template>
  <div class="d-flex flex-column flex-column-fluid">
    <!--begin::Toolbar-->
    <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
      <!--begin::Toolbar container-->
      <div id="kt_app_toolbar_container" class="app-container container-xxl d-flex flex-stack">
        <!--begin::Page title-->
        <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
          <!--begin::Title-->
          <h1 class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">داشبورد</h1>
          <!--end::Title-->
          <!--begin::Breadcrumb-->

          <!--end::Breadcrumb-->
        </div>
        <!--end::Page title-->

      </div>
      <!--end::Toolbar container-->
    </div>


    <div id="kt_app_content_container" class="app-container container-xxl">


      <div class="row g-5 g-xl-10">
        <!--begin::Col-->
        <div class="col-xl-4 mb-xl-10" v-for="device in GetDeviceList" v-bind:key="device.id">
          <!--begin::لیست ها Widget 19-->
          <div class="card card-flush h-xl-100">
            <!--begin::Heading-->

            <div
                class="card-header rounded bgi-no-repeat bgi-size-cover bgi-position-y-top bgi-position-x-center align-items-start h-250px"
                style="background-image:url('/assets/media/svg/shapes/top-green.png')" data-theme="light" >
              <!--begin::Title-->
              <router-link :to="{name: 'DeviceDetail' , params:{id: device.id , name :device.name }}" >

              <h3 class="card-title align-items-start flex-column text-white pt-15">
                <span class="fw-bold fs-2x mb-3">{{ device.name }}</span>

              </h3>
              </router-link>
              <!--end::Title-->
              <!--begin::Toolbar-->
              <div class="card-toolbar pt-5">
                <!--begin::Menu-->
                <button
                    class="btn btn-sm btn-icon btn-active-color-primary btn-color-white bg-white bg-opacity-25 bg-hover-opacity-100 bg-hover-white bg-active-opacity-25 w-20px h-20px"
                    data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                  <!--begin::Svg Icon | path: icons/duotune/general/gen052.svg-->
                  <span class="svg-icon svg-icon-4">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
																	<rect x="10" y="10" width="4" height="4" rx="2" fill="currentColor"></rect>
																	<rect x="17" y="10" width="4" height="4" rx="2" fill="currentColor"></rect>
																	<rect x="3" y="10" width="4" height="4" rx="2" fill="currentColor"></rect>
																</svg>
															</span>
                  <!--end::Svg Icon-->
                </button>


              </div>
              <!--end::Toolbar-->
            </div>
            <!--end::Heading-->
            <!--begin::Body-->
            <div class="card-body mt-n20">
              <!--begin::Stats-->
              <div class="mt-n20 position-relative">
                <!--begin::Row-->
                <div class="row g-3 g-lg-6">
                  <!--begin::Col-->
                  <div class="col-4">
                    <!--begin::آیتمs-->
                    <div class="bg-gray-100 bg-primary bg-opacity-70 rounded-2 px-6 py-5">
                      <!--begin::Symbol-->
                      <div class="symbol symbol-30px me-5 mb-8">
																		<span class="symbol-label">
																			<!--begin::Svg Icon | path: icons/duotune/medicine/med005.svg-->
																			<span class="svg-icon svg-icon-1 svg-icon-primary">
																			<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g
                                          id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
                                                                                         stroke-linecap="round"
                                                                                         stroke-linejoin="round"></g><g
                                          id="SVGRepo_iconCarrier"> <path class="success"
                                                                          d="m 5 7 v 6 h 3 v -1 c 0 -0.53125 0.210938 -1.039062 0.585938 -1.414062 l 2.414062 -2.414063 v -1.171875 z m 0 0"
                                                                          fill="#acddf9"></path> <path
                                          d="m 7 0 c -1 0 -1 1 -1 1 v 1 h -1 s -0.707031 -0.015625 -1.445312 0.355469 c -0.742188 0.371093 -1.554688 1.3125 -1.554688 2.644531 v 8 s -0.015625 0.707031 0.355469 1.449219 c 0.371093 0.738281 1.3125 1.550781 2.644531 1.550781 h 5 v -2 h -5 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 6 c 0.554688 0 1 0.445312 1 1 v 2 h 2 v -2 c 0 -1.332031 -0.8125 -2.273438 -1.550781 -2.644531 c -0.742188 -0.371094 -1.449219 -0.355469 -1.449219 -0.355469 h -1 v -1 c 0 -1 -1 -1 -1 -1 z m 6 8 v 0.007812 c -0.265625 -0.003906 -0.519531 0.101563 -0.707031 0.285157 l -3 3 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 v 1 h 3.132812 l -0.964843 1.445312 c -0.105469 0.164063 -0.164063 0.359376 -0.160157 0.554688 h -0.007812 v 1 h 1 v -0.003906 c 0.265625 0 0.519531 -0.101563 0.707031 -0.289063 l 3 -3 c 0.1875 -0.1875 0.289063 -0.441406 0.289063 -0.707031 h 0.003906 v -1 h -3.128906 l 0.960937 -1.445312 c 0.109375 -0.164063 0.167969 -0.359376 0.167969 -0.554688 v -1 z m 0 0"
                                          fill="#009ef7"></path> </g></svg>
																			</span>
                                      <!--end::Svg Icon-->
																		</span>
                      </div>
                      <!--end::Symbol-->
                      <!--begin::Stats-->
                      <div class="m-0">
                        <!--begin::شماره کارت-->
                        <span class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">37</span>
                        <!--end::شماره کارت-->
                        <!--begin::Desc-->
                        <span class="text-white fw-semibold fs-6">ولتاژ</span>
                        <!--end::Desc-->
                      </div>
                      <!--end::Stats-->
                    </div>
                    <!--end::آیتمs-->
                  </div>
                  <div class="col-4">
                    <!--begin::آیتمs-->
                    <div class="bg-gray-100 bg-primary bg-opacity-70 rounded-2 px-6 py-5">
                      <!--begin::Symbol-->
                      <div class="symbol symbol-30px me-5 mb-8">
																		<span class="symbol-label">
																			<!--begin::Svg Icon | path: icons/duotune/medicine/med005.svg-->
																			<span class="svg-icon svg-icon-1 svg-icon-primary">
																			<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g
                                          id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
                                                                                         stroke-linecap="round"
                                                                                         stroke-linejoin="round"></g><g
                                          id="SVGRepo_iconCarrier"> <path class="success"
                                                                          d="m 5 7 v 6 h 3 v -1 c 0 -0.53125 0.210938 -1.039062 0.585938 -1.414062 l 2.414062 -2.414063 v -1.171875 z m 0 0"
                                                                          fill="#acddf9"></path> <path
                                          d="m 7 0 c -1 0 -1 1 -1 1 v 1 h -1 s -0.707031 -0.015625 -1.445312 0.355469 c -0.742188 0.371093 -1.554688 1.3125 -1.554688 2.644531 v 8 s -0.015625 0.707031 0.355469 1.449219 c 0.371093 0.738281 1.3125 1.550781 2.644531 1.550781 h 5 v -2 h -5 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 6 c 0.554688 0 1 0.445312 1 1 v 2 h 2 v -2 c 0 -1.332031 -0.8125 -2.273438 -1.550781 -2.644531 c -0.742188 -0.371094 -1.449219 -0.355469 -1.449219 -0.355469 h -1 v -1 c 0 -1 -1 -1 -1 -1 z m 6 8 v 0.007812 c -0.265625 -0.003906 -0.519531 0.101563 -0.707031 0.285157 l -3 3 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 v 1 h 3.132812 l -0.964843 1.445312 c -0.105469 0.164063 -0.164063 0.359376 -0.160157 0.554688 h -0.007812 v 1 h 1 v -0.003906 c 0.265625 0 0.519531 -0.101563 0.707031 -0.289063 l 3 -3 c 0.1875 -0.1875 0.289063 -0.441406 0.289063 -0.707031 h 0.003906 v -1 h -3.128906 l 0.960937 -1.445312 c 0.109375 -0.164063 0.167969 -0.359376 0.167969 -0.554688 v -1 z m 0 0"
                                          fill="#009ef7"></path> </g></svg>
																			</span>
                                      <!--end::Svg Icon-->
																		</span>
                      </div>
                      <!--end::Symbol-->
                      <!--begin::Stats-->
                      <div class="m-0">
                        <!--begin::شماره کارت-->
                        <span class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">37</span>
                        <!--end::شماره کارت-->
                        <!--begin::Desc-->
                        <span class="text-white fw-semibold fs-6">ولتاژ</span>
                        <!--end::Desc-->
                      </div>
                      <!--end::Stats-->
                    </div>
                    <!--end::آیتمs-->
                  </div>
                  <div class="col-4">
                    <!--begin::آیتمs-->
                    <div class="bg-gray-100 bg-primary bg-opacity-70 rounded-2 px-6 py-5">
                      <!--begin::Symbol-->
                      <div class="symbol symbol-30px me-5 mb-8">
																		<span class="symbol-label">
																			<!--begin::Svg Icon | path: icons/duotune/medicine/med005.svg-->
																			<span class="svg-icon svg-icon-1 svg-icon-primary">
																			<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g
                                          id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
                                                                                         stroke-linecap="round"
                                                                                         stroke-linejoin="round"></g><g
                                          id="SVGRepo_iconCarrier"> <path class="success"
                                                                          d="m 5 7 v 6 h 3 v -1 c 0 -0.53125 0.210938 -1.039062 0.585938 -1.414062 l 2.414062 -2.414063 v -1.171875 z m 0 0"
                                                                          fill="#acddf9"></path> <path
                                          d="m 7 0 c -1 0 -1 1 -1 1 v 1 h -1 s -0.707031 -0.015625 -1.445312 0.355469 c -0.742188 0.371093 -1.554688 1.3125 -1.554688 2.644531 v 8 s -0.015625 0.707031 0.355469 1.449219 c 0.371093 0.738281 1.3125 1.550781 2.644531 1.550781 h 5 v -2 h -5 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 6 c 0.554688 0 1 0.445312 1 1 v 2 h 2 v -2 c 0 -1.332031 -0.8125 -2.273438 -1.550781 -2.644531 c -0.742188 -0.371094 -1.449219 -0.355469 -1.449219 -0.355469 h -1 v -1 c 0 -1 -1 -1 -1 -1 z m 6 8 v 0.007812 c -0.265625 -0.003906 -0.519531 0.101563 -0.707031 0.285157 l -3 3 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 v 1 h 3.132812 l -0.964843 1.445312 c -0.105469 0.164063 -0.164063 0.359376 -0.160157 0.554688 h -0.007812 v 1 h 1 v -0.003906 c 0.265625 0 0.519531 -0.101563 0.707031 -0.289063 l 3 -3 c 0.1875 -0.1875 0.289063 -0.441406 0.289063 -0.707031 h 0.003906 v -1 h -3.128906 l 0.960937 -1.445312 c 0.109375 -0.164063 0.167969 -0.359376 0.167969 -0.554688 v -1 z m 0 0"
                                          fill="#009ef7"></path> </g></svg>
																			</span>
                                      <!--end::Svg Icon-->
																		</span>
                      </div>
                      <!--end::Symbol-->
                      <!--begin::Stats-->
                      <div class="m-0">
                        <!--begin::شماره کارت-->
                        <span class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">37</span>
                        <!--end::شماره کارت-->
                        <!--begin::Desc-->
                        <span class="text-white fw-semibold fs-6">ولتاژ</span>
                        <!--end::Desc-->
                      </div>
                      <!--end::Stats-->
                    </div>
                    <!--end::آیتمs-->
                  </div>
                  <div class="col-4">
                    <!--begin::آیتمs-->
                    <div class="bg-gray-100 bg-primary bg-opacity-70 rounded-2 px-6 py-5">
                      <!--begin::Symbol-->
                      <div class="symbol symbol-30px me-5 mb-8">
																		<span class="symbol-label">
																			<!--begin::Svg Icon | path: icons/duotune/medicine/med005.svg-->
																			<span class="svg-icon svg-icon-1 svg-icon-primary">
																			<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g
                                          id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
                                                                                         stroke-linecap="round"
                                                                                         stroke-linejoin="round"></g><g
                                          id="SVGRepo_iconCarrier"> <path class="success"
                                                                          d="m 5 7 v 6 h 3 v -1 c 0 -0.53125 0.210938 -1.039062 0.585938 -1.414062 l 2.414062 -2.414063 v -1.171875 z m 0 0"
                                                                          fill="#acddf9"></path> <path
                                          d="m 7 0 c -1 0 -1 1 -1 1 v 1 h -1 s -0.707031 -0.015625 -1.445312 0.355469 c -0.742188 0.371093 -1.554688 1.3125 -1.554688 2.644531 v 8 s -0.015625 0.707031 0.355469 1.449219 c 0.371093 0.738281 1.3125 1.550781 2.644531 1.550781 h 5 v -2 h -5 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 6 c 0.554688 0 1 0.445312 1 1 v 2 h 2 v -2 c 0 -1.332031 -0.8125 -2.273438 -1.550781 -2.644531 c -0.742188 -0.371094 -1.449219 -0.355469 -1.449219 -0.355469 h -1 v -1 c 0 -1 -1 -1 -1 -1 z m 6 8 v 0.007812 c -0.265625 -0.003906 -0.519531 0.101563 -0.707031 0.285157 l -3 3 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 v 1 h 3.132812 l -0.964843 1.445312 c -0.105469 0.164063 -0.164063 0.359376 -0.160157 0.554688 h -0.007812 v 1 h 1 v -0.003906 c 0.265625 0 0.519531 -0.101563 0.707031 -0.289063 l 3 -3 c 0.1875 -0.1875 0.289063 -0.441406 0.289063 -0.707031 h 0.003906 v -1 h -3.128906 l 0.960937 -1.445312 c 0.109375 -0.164063 0.167969 -0.359376 0.167969 -0.554688 v -1 z m 0 0"
                                          fill="#009ef7"></path> </g></svg>
																			</span>
                                      <!--end::Svg Icon-->
																		</span>
                      </div>
                      <!--end::Symbol-->
                      <!--begin::Stats-->
                      <div class="m-0">
                        <!--begin::شماره کارت-->
                        <span class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">37</span>
                        <!--end::شماره کارت-->
                        <!--begin::Desc-->
                        <span class="text-white fw-semibold fs-6">ولتاژ</span>
                        <!--end::Desc-->
                      </div>
                      <!--end::Stats-->
                    </div>
                    <!--end::آیتمs-->
                  </div>
                  <div class="col-4">
                    <!--begin::آیتمs-->
                    <div class="bg-gray-100 bg-primary bg-opacity-70 rounded-2 px-6 py-5">
                      <!--begin::Symbol-->
                      <div class="symbol symbol-30px me-5 mb-8">
																		<span class="symbol-label">
																			<!--begin::Svg Icon | path: icons/duotune/medicine/med005.svg-->
																			<span class="svg-icon svg-icon-1 svg-icon-primary">
																			<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g
                                          id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
                                                                                         stroke-linecap="round"
                                                                                         stroke-linejoin="round"></g><g
                                          id="SVGRepo_iconCarrier"> <path class="success"
                                                                          d="m 5 7 v 6 h 3 v -1 c 0 -0.53125 0.210938 -1.039062 0.585938 -1.414062 l 2.414062 -2.414063 v -1.171875 z m 0 0"
                                                                          fill="#acddf9"></path> <path
                                          d="m 7 0 c -1 0 -1 1 -1 1 v 1 h -1 s -0.707031 -0.015625 -1.445312 0.355469 c -0.742188 0.371093 -1.554688 1.3125 -1.554688 2.644531 v 8 s -0.015625 0.707031 0.355469 1.449219 c 0.371093 0.738281 1.3125 1.550781 2.644531 1.550781 h 5 v -2 h -5 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 6 c 0.554688 0 1 0.445312 1 1 v 2 h 2 v -2 c 0 -1.332031 -0.8125 -2.273438 -1.550781 -2.644531 c -0.742188 -0.371094 -1.449219 -0.355469 -1.449219 -0.355469 h -1 v -1 c 0 -1 -1 -1 -1 -1 z m 6 8 v 0.007812 c -0.265625 -0.003906 -0.519531 0.101563 -0.707031 0.285157 l -3 3 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 v 1 h 3.132812 l -0.964843 1.445312 c -0.105469 0.164063 -0.164063 0.359376 -0.160157 0.554688 h -0.007812 v 1 h 1 v -0.003906 c 0.265625 0 0.519531 -0.101563 0.707031 -0.289063 l 3 -3 c 0.1875 -0.1875 0.289063 -0.441406 0.289063 -0.707031 h 0.003906 v -1 h -3.128906 l 0.960937 -1.445312 c 0.109375 -0.164063 0.167969 -0.359376 0.167969 -0.554688 v -1 z m 0 0"
                                          fill="#009ef7"></path> </g></svg>
																			</span>
																		</span>
                      </div>
                      <!--end::Symbol-->
                      <!--begin::Stats-->
                      <div class="m-0">
                        <!--begin::شماره کارت-->
                        <span class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">37</span>
                        <!--end::شماره کارت-->
                        <!--begin::Desc-->
                        <span class="text-white fw-semibold fs-6">ولتاژ</span>
                        <!--end::Desc-->
                      </div>
                      <!--end::Stats-->
                    </div>
                    <!--end::آیتمs-->
                  </div>
                  <div class="col-4">
                    <!--begin::آیتمs-->
                    <div class="bg-gray-100 bg-primary bg-opacity-70 rounded-2 px-6 py-5">
                      <!--begin::Symbol-->
                      <div class="symbol symbol-30px me-5 mb-8">
																		<span class="symbol-label">
																			<!--begin::Svg Icon | path: icons/duotune/medicine/med005.svg-->
																			<span class="svg-icon svg-icon-1 svg-icon-primary">
																			<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g
                                          id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
                                                                                         stroke-linecap="round"
                                                                                         stroke-linejoin="round"></g><g
                                          id="SVGRepo_iconCarrier"> <path class="success"
                                                                          d="m 5 7 v 6 h 3 v -1 c 0 -0.53125 0.210938 -1.039062 0.585938 -1.414062 l 2.414062 -2.414063 v -1.171875 z m 0 0"
                                                                          fill="#acddf9"></path> <path
                                          d="m 7 0 c -1 0 -1 1 -1 1 v 1 h -1 s -0.707031 -0.015625 -1.445312 0.355469 c -0.742188 0.371093 -1.554688 1.3125 -1.554688 2.644531 v 8 s -0.015625 0.707031 0.355469 1.449219 c 0.371093 0.738281 1.3125 1.550781 2.644531 1.550781 h 5 v -2 h -5 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 6 c 0.554688 0 1 0.445312 1 1 v 2 h 2 v -2 c 0 -1.332031 -0.8125 -2.273438 -1.550781 -2.644531 c -0.742188 -0.371094 -1.449219 -0.355469 -1.449219 -0.355469 h -1 v -1 c 0 -1 -1 -1 -1 -1 z m 6 8 v 0.007812 c -0.265625 -0.003906 -0.519531 0.101563 -0.707031 0.285157 l -3 3 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 v 1 h 3.132812 l -0.964843 1.445312 c -0.105469 0.164063 -0.164063 0.359376 -0.160157 0.554688 h -0.007812 v 1 h 1 v -0.003906 c 0.265625 0 0.519531 -0.101563 0.707031 -0.289063 l 3 -3 c 0.1875 -0.1875 0.289063 -0.441406 0.289063 -0.707031 h 0.003906 v -1 h -3.128906 l 0.960937 -1.445312 c 0.109375 -0.164063 0.167969 -0.359376 0.167969 -0.554688 v -1 z m 0 0"
                                          fill="#009ef7"></path> </g></svg>
																			</span>
                                      <!--end::Svg Icon-->
																		</span>
                      </div>
                      <!--end::Symbol-->
                      <!--begin::Stats-->
                      <div class="m-0">
                        <!--begin::شماره کارت-->
                        <span class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">37</span>
                        <!--end::شماره کارت-->
                        <!--begin::Desc-->
                        <span class="text-white fw-semibold fs-6">ولتاژ</span>
                        <!--end::Desc-->
                      </div>
                      <!--end::Stats-->
                    </div>
                    <!--end::آیتمs-->
                  </div>
                  <div class="col-4">
                    <!--begin::آیتمs-->
                    <div class="bg-gray-100 bg-primary bg-opacity-70 rounded-2 px-6 py-5">
                      <!--begin::Symbol-->
                      <div class="symbol symbol-30px me-5 mb-8">
																		<span class="symbol-label">
																			<!--begin::Svg Icon | path: icons/duotune/medicine/med005.svg-->
																			<span class="svg-icon svg-icon-1 svg-icon-primary">
																			<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g
                                          id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
                                                                                         stroke-linecap="round"
                                                                                         stroke-linejoin="round"></g><g
                                          id="SVGRepo_iconCarrier"> <path class="success"
                                                                          d="m 5 7 v 6 h 3 v -1 c 0 -0.53125 0.210938 -1.039062 0.585938 -1.414062 l 2.414062 -2.414063 v -1.171875 z m 0 0"
                                                                          fill="#acddf9"></path> <path
                                          d="m 7 0 c -1 0 -1 1 -1 1 v 1 h -1 s -0.707031 -0.015625 -1.445312 0.355469 c -0.742188 0.371093 -1.554688 1.3125 -1.554688 2.644531 v 8 s -0.015625 0.707031 0.355469 1.449219 c 0.371093 0.738281 1.3125 1.550781 2.644531 1.550781 h 5 v -2 h -5 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 6 c 0.554688 0 1 0.445312 1 1 v 2 h 2 v -2 c 0 -1.332031 -0.8125 -2.273438 -1.550781 -2.644531 c -0.742188 -0.371094 -1.449219 -0.355469 -1.449219 -0.355469 h -1 v -1 c 0 -1 -1 -1 -1 -1 z m 6 8 v 0.007812 c -0.265625 -0.003906 -0.519531 0.101563 -0.707031 0.285157 l -3 3 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 v 1 h 3.132812 l -0.964843 1.445312 c -0.105469 0.164063 -0.164063 0.359376 -0.160157 0.554688 h -0.007812 v 1 h 1 v -0.003906 c 0.265625 0 0.519531 -0.101563 0.707031 -0.289063 l 3 -3 c 0.1875 -0.1875 0.289063 -0.441406 0.289063 -0.707031 h 0.003906 v -1 h -3.128906 l 0.960937 -1.445312 c 0.109375 -0.164063 0.167969 -0.359376 0.167969 -0.554688 v -1 z m 0 0"
                                          fill="#009ef7"></path> </g></svg>
																			</span>
                                      <!--end::Svg Icon-->
																		</span>
                      </div>
                      <!--end::Symbol-->
                      <!--begin::Stats-->
                      <div class="m-0">
                        <!--begin::شماره کارت-->
                        <span class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">37</span>
                        <!--end::شماره کارت-->
                        <!--begin::Desc-->
                        <span class="text-white fw-semibold fs-6">ولتاژ</span>
                        <!--end::Desc-->
                      </div>
                      <!--end::Stats-->
                    </div>
                    <!--end::آیتمs-->
                  </div>
                  <div class="col-4">
                    <!--begin::آیتمs-->
                    <div class="bg-gray-100 bg-primary bg-opacity-70 rounded-2 px-6 py-5">
                      <!--begin::Symbol-->
                      <div class="symbol symbol-30px me-5 mb-8">
																		<span class="symbol-label">
																			<!--begin::Svg Icon | path: icons/duotune/medicine/med005.svg-->
																			<span class="svg-icon svg-icon-1 svg-icon-primary">
																			<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g
                                          id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
                                                                                         stroke-linecap="round"
                                                                                         stroke-linejoin="round"></g><g
                                          id="SVGRepo_iconCarrier"> <path class="success"
                                                                          d="m 5 7 v 6 h 3 v -1 c 0 -0.53125 0.210938 -1.039062 0.585938 -1.414062 l 2.414062 -2.414063 v -1.171875 z m 0 0"
                                                                          fill="#acddf9"></path> <path
                                          d="m 7 0 c -1 0 -1 1 -1 1 v 1 h -1 s -0.707031 -0.015625 -1.445312 0.355469 c -0.742188 0.371093 -1.554688 1.3125 -1.554688 2.644531 v 8 s -0.015625 0.707031 0.355469 1.449219 c 0.371093 0.738281 1.3125 1.550781 2.644531 1.550781 h 5 v -2 h -5 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 6 c 0.554688 0 1 0.445312 1 1 v 2 h 2 v -2 c 0 -1.332031 -0.8125 -2.273438 -1.550781 -2.644531 c -0.742188 -0.371094 -1.449219 -0.355469 -1.449219 -0.355469 h -1 v -1 c 0 -1 -1 -1 -1 -1 z m 6 8 v 0.007812 c -0.265625 -0.003906 -0.519531 0.101563 -0.707031 0.285157 l -3 3 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 v 1 h 3.132812 l -0.964843 1.445312 c -0.105469 0.164063 -0.164063 0.359376 -0.160157 0.554688 h -0.007812 v 1 h 1 v -0.003906 c 0.265625 0 0.519531 -0.101563 0.707031 -0.289063 l 3 -3 c 0.1875 -0.1875 0.289063 -0.441406 0.289063 -0.707031 h 0.003906 v -1 h -3.128906 l 0.960937 -1.445312 c 0.109375 -0.164063 0.167969 -0.359376 0.167969 -0.554688 v -1 z m 0 0"
                                          fill="#009ef7"></path> </g></svg>
																			</span>
                                      <!--end::Svg Icon-->
																		</span>
                      </div>
                      <!--end::Symbol-->
                      <!--begin::Stats-->
                      <div class="m-0">
                        <!--begin::شماره کارت-->
                        <span class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">37</span>
                        <!--end::شماره کارت-->
                        <!--begin::Desc-->
                        <span class="text-white fw-semibold fs-6">ولتاژ</span>
                        <!--end::Desc-->
                      </div>
                      <!--end::Stats-->
                    </div>
                    <!--end::آیتمs-->
                  </div>
                  <!--end::Col-->
                  <!--begin::Col-->
                  <div class="col-6">
                    <!--begin::آیتمs-->
                    <div class="bg-gray-100 bg-danger bg-opacity-70 rounded-2 px-6 py-5">
                      <!--begin::Symbol-->
                      <div class="symbol symbol-30px me-5 mb-8">
																		<span class="symbol-label">
																			<!--begin::Svg Icon | path: icons/duotune/finance/fin001.svg-->
																			<span class="svg-icon svg-icon-1 svg-icon-primary">
																				<svg fill="#009ef7" height="200px" width="200px" version="1.1" id="Layer_1"
                                             xmlns="http://www.w3.org/2000/svg"
                                             xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001"
                                             xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                                            id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                            stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path
                                            d="M281.12,353.354V42.221C281.12,18.941,262.18,0,238.899,0c-23.282,0-42.221,18.941-42.221,42.221v311.133 c-26.391,15.093-42.646,42.761-42.756,73.36c-0.078,21.959,8.481,42.96,24.097,59.132c15.624,16.179,36.315,25.453,58.26,26.115 c0.886,0.026,1.767,0.04,2.649,0.04c22.227-0.001,43.14-8.461,59.142-23.987c16.642-16.149,25.806-37.809,25.806-60.992 C323.875,396.291,307.619,368.505,281.12,353.354z M286.905,476.506c-13.496,13.095-31.316,20.003-50.142,19.427 c-17.741-0.534-34.507-8.072-47.21-21.226c-12.701-13.152-19.661-30.176-19.597-47.937c0.093-26.181,14.773-49.723,38.31-61.438 c2.724-1.355,4.444-4.136,4.444-7.177V42.221c0-14.44,11.748-26.188,26.188-26.188c14.44,0,26.188,11.748,26.188,26.188v315.935 c0,3.042,1.721,5.821,4.444,7.177c23.632,11.762,38.311,35.4,38.311,61.689C307.842,445.831,300.407,463.405,286.905,476.506z"></path> </g> </g> <g> <g> <path
                                            d="M246.915,376.889V93.528c0-4.427-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.589-8.017,8.017v283.361 c-24.2,3.855-42.756,24.866-42.756,50.133c0,27.995,22.777,50.772,50.772,50.772c27.995,0,50.772-22.777,50.772-50.772 C289.671,401.755,271.115,380.744,246.915,376.889z M238.899,461.761c-19.155,0-34.739-15.584-34.739-34.739 c0-19.155,15.584-34.739,34.739-34.739s34.739,15.584,34.739,34.739C273.638,446.177,258.054,461.761,238.899,461.761z"></path> </g> </g> <g> <g> <path
                                            d="M350.063,256.534h-42.756c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h42.756 c4.427,0,8.017-3.589,8.017-8.017S354.492,256.534,350.063,256.534z"></path> </g> </g> <g> <g> <path
                                            d="M332.961,213.778h-25.653c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h25.653 c4.427,0,8.017-3.589,8.017-8.017C340.978,217.368,337.388,213.778,332.961,213.778z"></path> </g> </g> <g> <g> <path
                                            d="M350.063,171.023h-42.756c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h42.756 c4.427,0,8.017-3.589,8.017-8.017C358.08,174.612,354.492,171.023,350.063,171.023z"></path> </g> </g> <g> <g> <path
                                            d="M332.961,128.267h-25.653c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h25.653 c4.427,0,8.017-3.589,8.017-8.017C340.978,131.856,337.388,128.267,332.961,128.267z"></path> </g> </g> <g> <g> <path
                                            d="M350.063,85.511h-42.756c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h42.756 c4.427,0,8.017-3.589,8.017-8.017C358.08,89.101,354.491,85.511,350.063,85.511z"></path> </g> </g> </g></svg>
																			</span>
                                      <!--end::Svg Icon-->
																		</span>
                      </div>
                      <!--end::Symbol-->
                      <!--begin::Stats-->
                      <div class="m-0">
                        <!--begin::شماره کارت-->
                        <span class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">6</span>
                        <!--end::شماره کارت-->
                        <!--begin::Desc-->
                        <span class="text-white fw-semibold fs-6">دما</span>
                        <!--end::Desc-->
                      </div>
                      <!--end::Stats-->
                    </div>
                    <!--end::آیتمs-->
                  </div>
                  <!--end::Col-->
                  <!--begin::Col-->
                  <div class="col-6">
                    <!--begin::آیتمs-->
                    <div class="bg-gray-100 bg-warning  bg-opacity-70 rounded-2 px-6 py-5">
                      <!--begin::Symbol-->
                      <div class="symbol symbol-30px me-5 mb-8">
																		<span class="symbol-label">
																			<!--begin::Svg Icon | path: icons/duotune/general/gen020.svg-->
																			<span class="svg-icon svg-icon-1 svg-icon-primary">
																			<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g
                                          id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
                                                                                         stroke-linecap="round"
                                                                                         stroke-linejoin="round"></g><g
                                          id="SVGRepo_iconCarrier"> <rect x="6" y="6" width="36" height="36" rx="3"
                                                                          fill="#acddf9" stroke="#009ef7"
                                                                          stroke-width="4" stroke-linecap="round"
                                                                          stroke-linejoin="round"></rect> <path
                                          d="M12 25H15L19 14L22 36L27 23L31 29L34 25H37" stroke="white" stroke-width="4"
                                          stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
																			</span>
                                      <!--end::Svg Icon-->
																		</span>
                      </div>
                      <!--end::Symbol-->
                      <!--begin::Stats-->
                      <div class="m-0">
                        <!--begin::شماره کارت-->
                        <span class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">4,7</span>
                        <!--end::شماره کارت-->
                        <!--begin::Desc-->
                        <span class="text-gray-500 fw-semibold fs-6">جریان</span>
                        <!--end::Desc-->
                      </div>
                      <!--end::Stats-->
                    </div>
                    <!--end::آیتمs-->
                  </div>
                  <!--end::Col-->
                  <!--begin::Col-->
                  <div class="col-6">
                    <!--begin::آیتمs-->
                    <div class="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5">
                      <!--begin::Symbol-->
                      <div class="symbol symbol-30px me-5 mb-8">
																		<span class="symbol-label">
																			<!--begin::Svg Icon | path: icons/duotune/general/gen013.svg-->
																			<span class="svg-icon svg-icon-1 svg-icon-primary">
																				<svg viewBox="0 0 1024 1024" class="icon" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g
                                            id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
                                                                                           stroke-linecap="round"
                                                                                           stroke-linejoin="round"></g><g
                                            id="SVGRepo_iconCarrier"><path
                                            d="M339.7 882.5C196.6 882.5 80.2 766.1 80.2 623c0-133.2 204.8-395.1 228.2-424.5 5.8-7.3 14.5-11.6 23.8-11.7 9.4-0.1 18.1 3.9 24.1 11 1.5 1.8 37.7 44.8 82.2 105.2 10.1 13.8 7.2 33.2-6.6 43.3-13.8 10.1-33.2 7.2-43.3-6.6-21.3-29-40.9-54-55.3-72.1-69.2 92-191.2 271.5-191.2 355.4 0 108.9 88.6 197.6 197.6 197.6S537.3 731.9 537.3 623c0-17.1 13.9-31 31-31s31 13.9 31 31c-0.1 143.1-116.5 259.5-259.6 259.5z"
                                            fill="#009ef7"></path><path
                                            d="M363.7 468.8c-27.9 59.7-46.8 115.7-46.8 158.4 0 164.6 133.4 298 298 298s298-133.4 298-298c0-12.8-1.9-26.9-5.5-41.9-327.2 33.9-284.9-194.9-543.7-116.5z"
                                            fill="#acddf9"></path><path
                                            d="M333.6 567.6c-38.2 239.9 123 357.7 287.3 357.7 92.8 0 144.9-12.1 199.6-78.6-261.5 20.7-428.7-99.2-486.9-279.1z"
                                            fill="#acddf9"></path><path
                                            d="M614.9 956.1C433.5 956.1 286 808.5 286 627.2c0-173.4 283.4-532.4 295.5-547.6 5.8-7.3 14.5-11.6 23.8-11.7 9.3-0.1 18.1 3.9 24.1 11 2 2.3 49 58.2 106.8 136.6 10.1 13.8 7.2 33.2-6.6 43.3-13.8 10.1-33.2 7.2-43.3-6.6-31.8-43.2-60.6-79.8-79.9-103.7C517 266.1 347.9 512.3 347.9 627.2c0 147.2 119.8 267 267 267s267-119.8 267-267c0-29.7-13.2-87.9-76.4-196.2-8.6-14.8-3.6-33.7 11.2-42.3 14.8-8.6 33.7-3.6 42.3 11.2 57.1 97.9 84.8 172.2 84.8 227.4 0 181.3-147.6 328.8-328.9 328.8z"
                                            fill="#009ef7"></path></g></svg>
																			</span>
                                      <!--end::Svg Icon-->
																		</span>
                      </div>
                      <!--end::Symbol-->
                      <!--begin::Stats-->
                      <div class="m-0">
                        <!--begin::شماره کارت-->
                        <span class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">822</span>
                        <!--end::شماره کارت-->
                        <!--begin::Desc-->
                        <span class="text-gray-500 fw-semibold fs-6">رطوبت</span>
                        <!--end::Desc-->
                      </div>
                      <!--end::Stats-->
                    </div>
                    <!--end::آیتمs-->
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Row-->
              </div>
              <!--end::Stats-->
            </div>
            <!--end::Body-->
          </div>
          <!--end::لیست ها Widget 19-->
        </div>
        <!--end::Col-->
        <!--begin::Col-->

        <!--end::Col-->
      </div>

    </div>
  </div>
</template>

<script>
// import {io} from 'socket.io-client';

export default {
  name: "dashboard-page", created() {


    this.GetMyDevices();


  }, data() {
    return {
      deviceInfo: []
    }
  },
  mounted() {
    this.GetDataFromSocket()

  },
  computed: {


    GetDeviceList() {
      return this.$store.getters.GetDevices

    }
  }, methods: {
    GetMyDevices() {

      this.$store.dispatch('GetAllDevice');
      // return "alireza";
    },

    GetDataFromSocket() {
      // const socket = io('http://localhost:8080');
      //
      //
      // socket.on('connect_error', () => {
      //   console.log("connect_error")
      // });
      // socket.on('connect', () => {
      //   console.log("connect")
      // });
      //
      // socket.on('connection', (data) => {
      //   console.log(data)
      //   console.log("data")
      // });
      // socket.on('data', (data) => {
      //   this.deviceInfo = data
      // });
    }


  }

}
</script>

<style scoped>

</style>