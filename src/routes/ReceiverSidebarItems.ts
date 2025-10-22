import IncomingParcels from "@/pages/Receiver/IncomingParcels";
import type { ISidebarItem } from "@/types";

export const receiverSidebarItems: ISidebarItem[] = [
  {
    title: "Parcel Management",
    items: [
      {
        title: "Incoming parcels",
        url: "parcel/incoming",
        component: IncomingParcels,
      },
    ],
  },
];
