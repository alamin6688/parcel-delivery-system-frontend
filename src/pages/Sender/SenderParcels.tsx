import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import { useSenderParcelInfoQuery } from "@/redux/features/auth/auth.api";
import { Link } from "react-router";

export const SenderParcels = () => {
  const {
    data: parcelResponse,
    isLoading,
    isError,
  } = useSenderParcelInfoQuery(undefined);
  const parcels = parcelResponse?.data || [];

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  if (isError)
    return (
      <p className="text-center mt-6 text-red-500">Failed to fetch parcels.</p>
    );

  if (parcels.length === 0) {
    return <p className="text-center mt-6 text-gray-600">No parcels found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-background rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">My Parcels</h2>

      <div className="space-y-6">
        {parcels.map((parcel) => (
          <div
            key={parcel._id}
            className="border rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 p-4 hover:shadow-sm transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg">{parcel.parcelType}</h3>
              <span
                className={`px-3 py-1 text-sm rounded-full ${
                  parcel.status === "CANCELED"
                    ? "bg-red-100 text-red-600"
                    : parcel.status === "DISPATCHED"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {parcel.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              <strong>Pickup:</strong> {parcel.pickupAddress}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Delivery:</strong> {parcel.deliveryAddress}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Tracking ID:</strong> {parcel.trackingId}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Fee:</strong> ৳{parcel.fee}
            </p>

            {/* Status Logs */}
            <div className="mt-4 border-t pt-3 text-right">
              {/* <h4 className="text-sm font-medium text-gray-700 mb-2">
                Status Logs:
              </h4> */}
              {/* <ul className="text-sm text-gray-600 space-y-1">
                {parcel.statusLogs.map((log, index) => (
                  <li key={index} className="flex justify-between">
                    <span>• {log.note}</span>
                    <span className="text-gray-400 text-xs">
                      {new Date(log.updatedAt).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: true,
                      })}
                    </span>
                  </li>
                ))}
              </ul> */}
              <Button>
                <Link
                  to={`/sender/parcel/${parcel._id}/status-log`}
                  className="text-white "
                >
                  View Status Log
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
