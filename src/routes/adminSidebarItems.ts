// import AddDivision from "@/pages/Admin/AddDivision";
// import AddTour from "@/pages/Admin/AddTour";
// import AddTourType from "@/pages/Admin/AddTourType";
// import AllParcels from "@/pages/Admin/AllParcels";
import ParcelStatusLog from "@/pages/Sender/ParcelStatusLog";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const AllParcels = lazy(() => import("@/pages/Admin/AllParcels"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "All Parcels",
        url: "/admin/all-parcels",
        component: AllParcels,
      },
      {
        // title: "Parcel Status Log",
        url: `/admin/parcel/:id/status-log`,
        component: ParcelStatusLog,
      },
    ],
  },
];
