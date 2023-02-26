import {defineAsyncComponent} from 'vue'

const IndexComponent = defineAsyncComponent((() => import("../components/index/index-page")));
const LoginComponent = defineAsyncComponent((() => import("../components/index/login-page")));
const DashboardComponent = defineAsyncComponent((() => import("../components/pages/dashboard-page")));
const DeviceDetail = defineAsyncComponent((() => import("../components/device/detail-page")));
export const Route = [


    {
        path: '/login',
        component: LoginComponent,
        name: "login"

    },
    {
        path: '/',
        component: IndexComponent,
        children: [

            {
                path: '/',
                component: DashboardComponent,
                name: "dashboard"

            },
            {
                path: '/Device/Detail/:id/:name',
                component: DeviceDetail,
                name: "DeviceDetail"

            }

        ]
    }
    //         {
    //             path: '/Account/List',
    //             component: AccountsListComponent,
    //             name: "AccountList"
    //
    //         },
    //         {
    //             path: '/Account/OpenPositions',
    //             component: AccountsOpenPositionComponent,
    //             name: "AccountOpenPositions"
    //
    //         },
    //         {
    //             path: '/Account/Transfers/:id',
    //             component: AccountsTransfersComponent,
    //             name: "AccountTransfers"
    //
    //         },
    //         {
    //             path: '/Account/Balance/:id/:name',
    //             component: AccountsBalanceComponent,
    //             name: "AccountBalance"
    //
    //         },
    //         {
    //             path: '/Account/DepositWithdraw',
    //             component: AccountsDepositWithdrawComponent,
    //             name: "AccountDepositWithdraw"
    //
    //         },
    //         {
    //             path: '/Order/MarketStopOrders',
    //             component: PlaceMarketStopOrderComponent,
    //             name: "OrderMarketStopOrders"
    //
    //         },
    //         {
    //             path: '/Order/MarketOrder',
    //             component: PlaceMarketOrderComponent,
    //             name: "OrderMarketOrder"
    //
    //         },
    //         {
    //             path: '/Order/LastOrder',
    //             component: LastOrderComponent,
    //             name: "OrderLastOrder"
    //
    //         },
    //         {
    //             path: '/Order/FillOrder/:id/:name',
    //             component: FillOrderComponent,
    //             name: "OrderFillOrder"
    //
    //         },
    //         {
    //             path: '/Order/PnlOrder/:id/:name',
    //             component: PnlOrderComponent,
    //             name: "OrderPnlOrder"
    //
    //         },
    //         {
    //             path: '/Management/User',
    //             component: UserManagerComponent,
    //             name: "UserManagement"
    //
    //         },
    //         {
    //             path: '/Management/Accounts',
    //             component: AccountManagerComponent,
    //             name: "AccountManagement"
    //
    //         },
    //         {
    //             path: '/Management/Symbols',
    //             component: SymbolManagerComponent,
    //             name: "SymbolManagement"
    //
    //         },
    //         {
    //             path: '/Management/Strategy',
    //             component: StrategyManagerComponent,
    //             name: "StrategyManagement"
    //
    //         },
    //         {
    //             path: '/Management/Number',
    //             component: NumberManagerComponent,
    //             name: "NumberManagement"
    //
    //         },
    //         {
    //             path: '/Management/CapitalManager/AccountFound',
    //             component: AccountFoundCapitalManagerComponent,
    //             name: "AccountFoundCapitalManagerManagement"
    //
    //         },
    //         {
    //             path: '/Management/CapitalManager/FullBalance',
    //             component: FullBalanceCapitalManagerComponent,
    //             name: "FullBalanceCapitalManagerManagement"
    //
    //         },
    //         {
    //             path: '/Management/CapitalManager/AxisBase',
    //             component: AxisBaseCapitalManagerComponent,
    //             name: "AxisBaseCapitalManagerManagement",
    //
    //
    //
    //         }
    //
    //     ]
    // },
    // {
    //     path: '/404',
    //     component: Error404Component,
    //     name: "404"
    // },
    // {
    //     path: '/:pathMatch(.*)*',
    //     redirect: '/404'
    // },


]