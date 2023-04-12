import { createRouter, type RouteRecordRaw, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/layout/index.vue')

export const constRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/dashboard",
    component: Layout,
    children: [
      {
        path: "dashboard",
        component: () => import('@/views/dashboard/index.vue'),
        name: "Dashboard",
        meta: {
          title: '首页',
          icon: 'House',
          affix: true
        }
      }
    ]
  },
  {
    path: "/unocss",
    component: Layout,
    redirect: "/unocss/index",
    children: [
      {
        path: "index",
        component: () => import('@/views/unocss/index.vue'),
        name: "UnoCss",
        meta: {
          title: 'unocss',
          icon: 'Star',
          affix: true
        }
      }
    ]
  },
  {
    path: "/table",
    component: Layout,
    redirect: "/table/element-plus",
    meta: {
      title: '表格',
      icon: 'Grid'
    },
    children: [
      {
        path: "element-plus",
        component: () => import('@/views/table/element-plus/index.vue'),
        name: "ElementPlus",
        meta: {
          title: "element-plus",
        }
      },
      {
        path: "vxe-table",
        component: () => import('@/views/table/vxe-table/index.vue'),
        name: "VxeTable",
        meta: {
          title: "vxe-table",
        }
      }
    ]
  },
  {
    path: "/menu",
    component: Layout,
    redirect: "/menu/menu1",
    name: "Menu",
    meta: {
      title: "多级菜单",
      icon: 'Grid'
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/menu/menu1/index.vue"),
        redirect: "/menu/menu1/menu1-1",
        name: "Menu1",
        meta: {
          title: "menu1"
        },
        children: [
          {
            path: "menu1-1",
            component: () => import("@/views/menu/menu1/menu1-1/index.vue"),
            name: "Menu1-1",
            meta: {
              title: "menu1-1"
            }
          },
          {
            path: "menu1-2",
            component: () => import("@/views/menu/menu1/menu1-2/index.vue"),
            redirect: "/menu/menu1/menu1-2/menu1-2-1",
            name: "Menu1-2",
            meta: {
              title: "menu1-2"
            },
            children: [
              {
                path: "menu1-2-1",
                component: () => import("@/views/menu/menu1/menu1-2/menu1-2-1/index.vue"),
                name: "Menu1-2-1",
                meta: {
                  title: "menu1-2-1"
                }
              },
              {
                path: "menu1-2-2",
                component: () => import("@/views/menu/menu1/menu1-2/menu1-2-2/index.vue"),
                name: "Menu1-2-2",
                meta: {
                  title: "menu1-2-2"
                }
              }
            ]
          },
          {
            path: "menu1-3",
            component: () => import("@/views/menu/menu1/menu1-3/index.vue"),
            name: "Menu1-3",
            meta: {
              title: "menu1-3"
            }
          }
        ]
      },
      {
        path: "menu2",
        component: () => import("@/views/menu/menu2/index.vue"),
        name: "Menu2",
        meta: {
          title: "menu2"
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constRoutes
})

export default router