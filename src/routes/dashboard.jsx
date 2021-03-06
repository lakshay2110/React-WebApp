import Monitor from "views/Monitor/Monitor";
import UserProfile from "views/UserProfile/UserProfile";
import Ingestion from "views/Ingestion/Ingestion";
import Catalog from "views/Catalog/Catalog";
import Icons from "views/Icons/Icons";
import Maps from "views/Maps/Maps";
import Pipelines from "views/PipelineTemplates/PipelineTemplates";
import Upgrade from "views/Upgrade/Upgrade";

const dashboardRoutes = [
  {
    path: "/monitor",
    name: "Monitor",
    icon: "pe-7s-graph",
    component: Monitor
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/ingestion",
    name: "Ingestion",
    icon: "pe-7s-cloud-upload",
     component: Ingestion
  },
  {
    path: "/catalog",
    name: "Catalog",
    icon: "pe-7s-news-paper",
    component: Catalog
  },
  //{ path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
  //{ path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
  {
    path: "/pipelines",
      name: "Pipelines",
      icon: "pe-7s-play",
      component: Pipelines
  },
  //{
  //  upgrade: true,
  //  path: "/upgrade",
  //  name: "Upgrade to PRO",
  //  icon: "pe-7s-rocket",
  //  component: Upgrade
  //},
  { redirect: true, path: "/", to: "/monitor", name: "Monitor" }
];

export default dashboardRoutes;
