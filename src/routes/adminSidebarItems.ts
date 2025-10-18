// import AddDivision from "@/pages/Admin/AddDivision";
// import AddTour from "@/pages/Admin/AddTour";
// import AddTourType from "@/pages/Admin/AddTourType";
// import AllParcels from "@/pages/Admin/AllParcels";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const AllParcels = lazy(() => import("@/pages/Admin/AllParcels"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "All Parcels",
        url: "/admin/all-parcels",
        component: AllParcels,
      },
    ],
  },
  // {
  //   title: "Tour Management",
  //   items: [
  //     {
  //       title: "Add Tour Type",
  //       url: "/admin/add-tour-type",
  //       component: AddTourType,
  //     },
  //     {
  //       title: "Add Division",
  //       url: "/admin/add-division",
  //       component: AddDivision,
  //     },
  //     {
  //       title: "Add Tour",
  //       url: "/admin/add-tour",
  //       component: AddTour,
  //     },
  //   ],
  // },
];
