import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import {
  useConfirmParcelDeliveryMutation,
  useGetIncomingParcelsQuery,
} from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

const IncomingParcels = () => {
  const { data, isLoading, isError } = useGetIncomingParcelsQuery(undefined);
  const [confirmDelivery, { isLoading: confirming }] =
    useConfirmParcelDeliveryMutation();

  const handleConfirm = async (id: string, status: string) => {
    if (status === "REQUESTED" || status === "APPROVED") {
      toast.warning(
        "Please wait — your parcel is on the way. You can confirm once it's in transit."
      );
      return;
    }
    //  Prevent confirmation if NOT IN_TRANSIT or DISPATCHED
    if (status !== "IN_TRANSIT" && status !== "DISPATCHED") {
      toast.error(
        "You can only confirm delivery once the parcel is in transit or dispatched."
      );
      return;
    }

    try {
      await confirmDelivery(id).unwrap();
      toast.success("Delivery confirmed successfully!");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to confirm delivery");
    }
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );

  if (isError) return <p>Failed to load incoming parcels.</p>;

  const parcels = data?.data || [];

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6">Incoming Parcels</h1>

      {parcels.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {parcels.map((parcel) => (
            <div key={parcel._id} className="border rounded-lg p-4 shadow">
              <h2 className="font-semibold">{parcel.parcelType}</h2>
              <p>Status: {parcel.status}</p>
              <p>Tracking ID: {parcel.trackingId}</p>
              <p>Delivery Address: {parcel.deliveryAddress}</p>
              <Button
                onClick={() => handleConfirm(parcel._id, parcel.status)}
                disabled={parcel.status === "DELIVERED"}
                className={`px-4 py-2 rounded text-white transition ${
                  parcel.status === "DELIVERED"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {parcel.status === "DELIVERED"
                  ? "Delivered"
                  : "Confirm Delivery"}
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p>No incoming parcels found.</p>
      )}
    </div>
  );
};

export default IncomingParcels;
