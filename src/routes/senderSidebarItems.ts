import Cancel_Parcel from "@/pages/Sender/Cancel_Parcel";
import Parcel from "@/pages/Sender/Parcel";
import { SenderParcels } from "@/pages/Sender/SenderParcels";
import type { ISidebarItem } from "@/types";

export const senderSidebarItems: ISidebarItem[] = [
  {
    title: "Parcel Management",
    items: [
      {
        title: "Create Parcel",
        url: "/sender/create-parcel",
        component: Parcel,
      },
      {
        title: "Cancel Parcel",
        url: "/sender/cancel-parcel",
        component: Cancel_Parcel,
      },
      {
        title: "Parcel Status",
        url: "/sender/parcel-status",
        component: SenderParcels,
      },
    ],
  },
];