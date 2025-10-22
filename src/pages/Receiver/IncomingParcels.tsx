import Loader from "@/components/Loader/Loader";
import { useGetIncomingParcelsQuery } from "@/redux/features/auth/auth.api";
import { Link } from "react-router";

const IncomingParcels = () => {
  const { data, isLoading, isError } = useGetIncomingParcelsQuery(undefined);

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
