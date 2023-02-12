<template>

  <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
    <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
     <header-nav-component></header-nav-component>

      <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
        <!--begin::Main-->
        <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
          <!--begin::Content wrapper-->
          <router-view></router-view>
          <!--end::Content wrapper-->
          <!--begin::Footer-->

          <footer-nav-component></footer-nav-component>
          <!--end::Footer-->
        </div>
        <!--end:::Main-->
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "index-page",
}
</script>

<style scoped>

</style>