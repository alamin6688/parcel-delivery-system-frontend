import Parcel from "@/pages/Sender/Parcel";
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
    ],
  },
];