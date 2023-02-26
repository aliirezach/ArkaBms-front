<template>
  <div class="d-flex flex-column flex-root" id="kt_app_root">
    <!--begin::احراز هویت - ورود -->
    <div class="d-flex flex-column flex-lg-row flex-column-fluid">
      <!--begin::Body-->
      <div class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
        <!--begin::Form-->
        <div class="d-flex flex-center flex-column flex-lg-row-fluid">
          <!--begin::Wrapper-->
          <div class="w-lg-500px p-10">
            <!--begin::Form-->
            <form class="form w-100" novalidate="novalidate" id="kt_sign_in_form"
                  data-kt-redirect-url="../../demo1/dist/index.html" action="#">
              <!--begin::Heading-->
              <div class="text-center mb-11">
                <!--begin::Title-->
                <h1 class="text-dark fw-bolder mb-3">ورود</h1>
                <!--end::Title-->
                <!--begin::Subtitle-->
                <div class="text-gray-500 fw-semibold fs-6">نرم افزار مانیتورینگ باتری آرکا</div>
                <!--end::Subtitle=-->
              </div>
              <!--begin::Heading-->
              <!--begin::Login options-->

              <!--end::Login options-->
              <!--begin::Separator-->

              <!--end::Separator-->
              <!--begin::Input group=-->
              <div class="fv-row mb-8">
                <!--begin::ایمیل-->
                <input type="text" placeholder="نام کاربری" name="username" autocomplete="off" v-model="Username"
                       class="form-control bg-transparent"/>
                <!--end::ایمیل-->
              </div>
              <!--end::Input group=-->
              <div class="fv-row mb-3">
                <!--begin::password-->
                <input type="password" placeholder="کلمه عبور" name="password" autocomplete="off" v-model="Password"
                       class="form-control bg-transparent"/>
                <!--end::password-->
              </div>
              <!--end::Input group=-->
              <!--begin::Wrapper-->

              <!--end::Wrapper-->
              <!--begin::ثبت button-->
              <div class="d-grid mb-10">
                <button type="submit" id="kt_sign_in_submit" class="btn btn-primary" v-on:click.prevent="LoginUser">
                  <!--begin::Indicator label-->
                  <span class="indicator-label" >ورود</span>
                  <!--end::Indicator label-->
                  <!--begin::Indicator progress-->
                  <span class="indicator-progress">لطفا صبر کنید...
										<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                  <!--end::Indicator progress-->
                </button>
              </div>
              <!--end::ثبت button-->
              <!--begin::ثبت نام-->

              <!--end::ثبت نام-->
            </form>
            <!--end::Form-->
          </div>
          <!--end::Wrapper-->
        </div>
        <!--end::Form-->
        <!--begin::Footer-->

        <!--end::Footer-->
      </div>
      <!--end::Body-->
      <!--begin::کناری-->
      <div class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
           style="background-image: url(assets/media/misc/auth-bg.png)">
        <!--begin::Content-->
        <div class="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
          <!--begin::Logo-->
          <a href="../../demo1/dist/index.html" class="mb-0 mb-lg-12">
            <img alt="Logo" src="/assets/media/logos/arka.png" class="h-60px h-lg-75px"/>
          </a>
          <!--end::Logo-->
          <!--begin::Image-->
          <img class="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20"
               src="assets/media/misc/auth-screens.png" alt=""/>
          <!--end::Image-->
          <!--begin::Title-->
          <h1 class="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7">ARKA BMS</h1>
          <!--end::Title-->
          <!--begin::Text-->
          <div class="d-none d-lg-block text-white fs-base text-center"></div>
          <!--end::Text-->
        </div>
        <!--end::Content-->
      </div>
      <!--end::کناری-->
    </div>
    <!--end::احراز هویت - ورود-->
  </div>
</template>

<script>
export default {
  name: "login-page",
  data() {
    return {
      Username: "",
      Password: "",

    };
  },
  methods: {
    LoginUser() {
      // console.log(Math.random())
      const LoginObj = {
        username: this.Username,
        password: this.Password
      };
      const loginRes = this.$store.dispatch('SignInUser', LoginObj);
      loginRes.then(res => {
        console.log(44444,res)
        if (res === false) {
          this.$swal.fire({
            icon: 'error',
            title: 'خطا',
            text: 'نام کاربری یا پسورد اشتباه است',
          });
        }
      });

    },
  },
}
</script>

<style scoped>

</style>