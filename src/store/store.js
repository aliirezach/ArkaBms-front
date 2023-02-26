import {createStore} from 'vuex'
import AuthorizationModule from './modules/authorization/authorization-module';
import DeviceModule from './modules/device/device-module';

export const store = createStore({
    state() {

    }, modules: {

        AuthorizationModule,
        DeviceModule
    }

})