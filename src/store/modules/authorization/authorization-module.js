import axios from "axios";
import {Router} from "@/main";
import jwtDecode from "jwt-decode";

const state = {
    IsUserAuthenticated: false,
    UserRoles: [],
    UserId: '',
    UserStationId: '',
    UserUsername: '',
    UserName: '',
    UserLastName: '',
    Role: '',

};

const getters = {

    //
    GetUserFullName(state) {
        return state.UserName + " " + state.UserLastName;
    },
    // GetUserRoles(state) {
    //     return state.UserRoles;
    // }

};


const mutations = {

    SetCookie(state, LoginResult) {

        localStorage.setItem("token", LoginResult)

    },
    SetUserUsername(state, username) {
        state.UserUsername = username;
    },
    SetUserName(state, name) {
        state.UserName = name;
    },
    SetUserLastName(state, lastName) {
        state.UserLastName = lastName;
    },
    SetUserAuthenticated(state, IsAuth) {
        state.IsUserAuthenticated = IsAuth;
    },
    SetUserRoles(state, roles) {
        state.UserRoles = roles
    },
    SetUserId(state, id) {
        state.UserId = id
    },
    SetUserStationId(state, stationId) {
        state.UserStationId = stationId
    }

};

const actions = {

    SignInUser(context, LoginObj) {

        return axios.post("login", {}, {
            auth: {
                username: LoginObj.username,
                password: LoginObj.password
            }
        }).then((result) => {

            if (result.status === 200) {


                const payload = jwtDecode(result.data.accessToken)

                context.commit('SetCookie', result.data.accessToken);
                context.commit('SetUserName', payload.name);
                context.commit('SetUserLastName', payload.last_name);
                context.commit('SetUserId', payload.id);
                context.commit('SetUserStationId', payload.station_id);
                context.commit('SetUserUsername', payload.user_name);
                context.commit('SetUserRoles', JSON.parse(payload.permissions));
                context.commit('SetUserAuthenticated', true);
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
                Router.push('/')
                // return true


            } else {
                console.log("fail auth")
                return false
            }

        }).catch(() => {


            return false

        });


    },
    LogOut(context) {
        context.commit('SetCookie', '');
        context.commit('SetUserAuthenticated', false);
        Router.push('/login')
    },
    // CheckToken(context) {
    //     let token = localStorage.getItem("token")
    //     if (token !== '') {
    //         //context.commit('SetUserUsername' , result.body.username);
    //         context.commit('SetUserAuthenticated', true);
    //     } else {
    //         localStorage.setItem("token", '')
    //         context.commit('SetUserAuthenticated', false);
    //         Router.push('/login')
    //     }
    // },
    CheckAuth(context) {
        axios.get('welcome')
            .then(result => {


                if (result.status === 200) {
                    const access_token = localStorage.getItem("token")
                    const payload = jwtDecode(access_token)
                    context.commit('SetUserName', payload.name);
                    context.commit('SetUserLastName', payload.last_name);
                    context.commit('SetUserId', payload.id);
                    context.commit('SetUserStationId', payload.station_id);
                    context.commit('SetUserUsername', payload.user_name);
                    context.commit('SetUserRoles', JSON.parse(payload.permissions));
                    context.commit('SetUserAuthenticated', true);
                    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
                    // context.commit('SetUserAuthenticated', true);
                    // const fullName = result.data.first_name + " " + result.data.last_name;
                    // context.commit('SetUserFullName', fullName);
                    // context.commit('SetUserRoles', result.data.roles);
                    // if (Router.name === 'login') {
                    //     Router.push('/')
                    // }
                } else if (result.status > 400 || result.status == undefined) {


                    context.commit('SetCookie', '');
                    context.commit('SetUserAuthenticated', false);
                    Router.push('/login')
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




