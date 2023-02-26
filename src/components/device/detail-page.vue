<template>
  <div class="d-flex flex-column flex-column-fluid">
    <!--begin::Toolbar-->
    <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
      <!--begin::Toolbar container-->
      <div id="kt_app_toolbar_container" class="app-container container-xxl d-flex flex-stack">
        <!--begin::Page title-->
        <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
          <!--begin::Title-->
          <h1 class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">تمام پارامتر های دستگاه</h1>
          <!--end::Title-->
          <!--begin::Breadcrumb-->

          <!--end::Breadcrumb-->
        </div>
        <!--end::Page title-->

      </div>
      <!--end::Toolbar container-->
    </div>
    <div id="kt_app_content_container" class="app-container container-xxl">


       <div id="kt_app_content_container" class="app-container container-xxl">


      <div class="row g-12 g-xl-12">
        <!--begin::Col-->
        <div class="col-xl-12 mb-xl-12" >
          <!--begin::لیست ها Widget 19-->
          <div class="card card-flush h-xl-100">
            <!--begin::Heading-->

            <div
                class="card-header rounded bgi-no-repeat bgi-size-cover bgi-position-y-top bgi-position-x-center align-items-start h-250px"
                style="background-image:url('/assets/media/svg/shapes/top-green.png')" data-theme="light" >
              <!--begin::Title-->


              <h3 class="card-title align-items-start flex-column text-white pt-15">
                <span class="fw-bold fs-2x mb-3">{{  this.$route.params.name }}</span>

              </h3>

              <!--end::Title-->

            </div>
            <!--end::Heading-->
            <!--begin::Body-->
            <div class="card-body mt-n20">
              <!--begin::Stats-->
              <div class="mt-n20 position-relative">
                <!--begin::Row-->
                <div class="row g-3 g-lg-6">
                  <!--begin::Col-->
                  <div class="col-2" v-for="item in detail" v-bind:key="item.id">
                    <!--begin::آیتمs-->
                    <div class="bg-gray-100 bg-primary bg-opacity-70 rounded-2 px-6 py-5">
                      <!--begin::Symbol-->
                      <div class="symbol  me-5 mb-8" >
																		<span class="symbol-label" style="width: 90px ; height: 36px">
																			<!--begin::Svg Icon | path: icons/duotune/medicine/med005.svg-->
																			<span class="svg-icon svg-icon-1 svg-icon-primary">
																{{item.name}}
																			</span>
                                      <!--end::Svg Icon-->
																		</span>
                      </div>
                      <!--end::Symbol-->
                      <!--begin::Stats-->
                      <div class="m-0">
                        <!--begin::شماره کارت-->
                        <span class="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1"> {{ item.gain }}{{item.symbol}} </span>
                        <!--end::شماره کارت-->
                        <!--begin::Desc-->
                        <span class="text-white fw-semibold fs-6">دسته : {{item.category_name }}</span>
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
  </div>
</template>

<script>
export default {
  name: "detail-page",
  data() {
    return {
      detail: []
    }
  },
  mounted() {
    this.GetDeviceDetail()
  }, methods: {
    GetDeviceDetail() {
      const sendId = this.$route.params.id
      this.$store.dispatch("GetDeviceDetail", sendId).then(res => {
        console.log(res)
        res[0].map(c=>{
          if(c.symbol == "Degree"){
            c.symbol = "°"
          }
        })
        this.detail = res[0]
      })

    }

  }
}
</script>

<style scoped>

</style>