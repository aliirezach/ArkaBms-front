// import axios from "axios";

import axios from "axios";


const state = {
    devices: []
};


const getters = {


    GetDevices(state) {
        return state.devices;
    },
    // GetUserRoles(state) {
    //     return state.UserRoles;
    // }

};

const mutations = {


    SetDevices(state, deviceList) {
        state.devices = deviceList
    }

};


const actions = {


    GetAllDevice(context) {
        axios.get('devices')
            .then(result => {


                if (result.status === 200) {
                    context.commit("SetDevices", result.data)

                }
            }).catch(reason => {
            console.log(reason)
        });
    },
    GetDeviceDetail(context,id) {
      return  axios.get(`devicedetails?device_id=${id}`)
            .then(result => {


                if (result.status === 200) {
                    return  result.data

                }
            }).catch(reason => {
            console.log(reason)
        });
    },

    // CheckAccessRole(context, accessList) {
    //     const roles = context.getters.GetUserRoles
    //     const isAccess = accessList.some(c => roles.includes(c))
    //     return isAccess
    // }

};


export default {
    state,
    getters,
    mutations,
    actions
}
