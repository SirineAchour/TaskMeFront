import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import DashboardClient from "@/pages/client/DashboardClient.vue";
import UserProfile from "@/pages/UserProfile.vue";
import History from "@/pages/history/History.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import NewTask from "@/pages/client/NewTask.vue";
import PostAdd from "@/pages/client/PostAdd.vue";
import Homepage from "@/pages/Homepage.vue";
import playground from "@/pages/playground.vue";

const routes = [
  {
    path: "/test",
    component: playground,
  },
  {
    path: "/",
    component: Homepage,
  },

  {
    path: "/client",
    component: DashboardLayout,
    redirect: "/client/dashboard-client",
    children: [
      {
        path: "/client/dashboard-client",
        name: "DashboardClient",
        component: DashboardClient
      },
      {
        path: "/client/user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "/client/newtask",
        name: "New Task",
        component: NewTask
      },
      {
        path: "/client/postadd",
        name: "Post Add",
        component: PostAdd
      },
      {
        path: "/client/history",
        name: "History",
        component: History
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      }
    ]
  }
  /*,
  {
    path: "/worker",
    component: DashboardLayout,
    redirect: "/worker/dashboard-worker",
    children: [
      {
        path: "/worker/dashboard-worker",
        name: "DashboardWorker",
        component: DashboardWorker
      },
      {
        path: "/worker/user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "/client/history",
        name: "History",
        component: History
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      }, 
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      }
    ]
  }*/
];

export default routes;
