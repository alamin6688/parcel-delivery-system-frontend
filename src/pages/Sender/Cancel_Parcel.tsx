import Loader from "@/components/Loader/Loader";
import {
  useCancelParcelMutation,
  useSenderParcelInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useState } from "react";
import { toast } from "sonner";

const Cancel_Parcel = () => {
  const [parcelId, setParcelId] = useState("");

  // Define a Parcel type to avoid implicit any
  type Parcel = {
    _id: string;
    status?: string | null;
    parcelType?: string | null;
    trackingId?: string | null;
    // add other fields as needed
  };

  // Fetch sender's parcels
  const {
    data: parcelResponse,
    isLoading: isLoadingParcels,
    isError,
  } = useSenderParcelInfoQuery(undefined);
  const parcels: Parcel[] = (parcelResponse?.data as Parcel[]) || [];

  // Cancel parcel mutation
  const [cancelParcel, { isLoading: isCancelling }] = useCancelParcelMutation();

  // Only show parcels that can be cancelled (not dispatched or already cancelled)
  const cancellableParcels = parcels.filter((p: Parcel) => {
    const status = p.status?.toUpperCase();
    return (
      status !== "DISPATCHED" && status !== "CANCELED" && status !== "DELIVERED"
    );
  });

  const handleCancel = async () => {
    if (!parcelId) return toast.error("Please select a parcel to cancel.");

    try {
      await cancelParcel(parcelId).unwrap(); // Call mutation
      toast.success("Parcel cancelled successfully.");
      setParcelId("");
      // reset dropdown selection
      // The parcel will be removed automatically via:
      // 1) optimistic update in the API slice (recommended)
      // 2) or by query invalidation (invalidatesTags: ["PARCEL"])
    } catch (err) {
      console.error(err);
      toast.error("Failed to cancel parcel. Make sure it’s not dispatched.");
    }
  };

  if (isLoadingParcels)
    return (
      <p className="text-center mt-4">
        <div className="flex items-center justify-center min-h-screen">
          <Loader />
        </div>
      </p>
    );
  if (isError)
    return (
      <p className="text-center mt-4 text-red-600">Failed to fetch parcels.</p>
    );

  return (
    <div className="max-w-md mx-auto mt-10 bg-background border shadow-md rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Cancel Parcel</h2>

      {/* Dropdown to select parcel */}
      <select
        value={parcelId}
        onChange={(e) => setParcelId(e.target.value)}
        className="w-full border rounded-lg p-2 mb-4 bg-background"
      >
        <option value="">Select Parcel</option>
        {cancellableParcels.map((parcel) => (
          <option key={parcel._id} value={parcel._id}>
            {parcel.parcelType} - {parcel.status} -{" "}
            {parcel.trackingId ? parcel.trackingId.slice(-5) : "N/A"}
          </option>
        ))}
      </select>

      <button
        onClick={handleCancel}
        disabled={isCancelling || !parcelId}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
      >
        {isCancelling ? "Cancelling..." : "Cancel Parcel"}
      </button>
    </div>
  );
};

export default Cancel_Parcel;
