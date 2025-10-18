import {
  useParcelBlockMutation,
  useParcelInfoQuery,
  useParcelUnblockMutation,
} from "@/redux/features/auth/auth.api";

const AllParcels = () => {
  const {
    data: parcelInfo,
    isLoading,
    isError,
  } = useParcelInfoQuery(undefined);
  const [blockParcel, { isLoading: isBlocking }] = useParcelBlockMutation();
  const [unblockParcel, { isLoading: isUnblocking }] =
    useParcelUnblockMutation();

  if (isLoading) return <p>Loading parcels...</p>;
  if (isError) return <p>Failed to load parcels.</p>;

  const handleBlock = async (id: string) => {
    console.log("Blocking parcel with ID:", id);
    await blockParcel(id);
  };
  const handleUnblock = async (id: string) => {
    console.log("Unblocking parcel with ID:", id);
    await unblockParcel(id);
  };

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6">All Parcels</h1>

      {parcelInfo?.data?.length ? (
        <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {parcelInfo.data.map((parcel) => (
            <div
              key={parcel.id}
              className="max-w-sm w-full mx-auto bg-background border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={
                    parcel.imageUrl ||
                    "https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                  }
                  alt={parcel.itemName || "Parcel"}
                  className="h-56 w-full object-cover"
                />
                <button className="absolute top-4 right-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span className="sr-only">Wishlist</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-5 text-foreground">
                <div className="flex items-center justify-between text-sm text-gray-700">
                  <p>${parcel.fee || "49.99"}</p>
                  <p>{parcel.status}</p>
                  <p>{parcel.weight || "2.5"} kg</p>
                </div>

                <h3 className="mt-2 text-lg font-semibold">
                  Parcel Type: {parcel.parcelType}
                </h3>

                <p className="mt-1 text-sm  line-clamp-2">
                  Tracking ID: {parcel.trackingId}
                </p>
                <p className="mt-1 text-sm  line-clamp-2">
                  Pickup: {parcel.pickupAddress || "Not specified."}
                </p>
                <p className="mt-1 text-sm  line-clamp-2">
                  Delivery: {parcel.deliveryAddress || "Not specified."}
                </p>

                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex gap-2">
                    {/* Unblock Button */}
                    <button
                      onClick={() => handleUnblock(parcel._id)}
                      disabled={!parcel.isBlocked || isUnblocking} // Only active if parcel is currently blocked
                      className={`w-full rounded px-4 py-2 text-sm font-medium transition hover:scale-105 ${
                        parcel.isBlocked
                          ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      {isUnblocking
                        ? "Unblocking..." // while request is in progress
                        : parcel.isBlocked
                        ? "Unblock"
                        : "Unblocked"}
                    </button>

                    {/* Block Button */}
                    <button
                      onClick={() => handleBlock(parcel._id)}
                      disabled={parcel.isBlocked || isBlocking} // Disable if already blocked
                      className={`w-full rounded px-4 py-2 text-sm font-medium transition hover:scale-105 ${
                        parcel.isBlocked
                          ? "bg-gray-400 text-white cursor-not-allowed"
                          : "bg-red-700 text-white hover:bg-red-800"
                      }`}
                    >
                      {isBlocking
                        ? "Blocking..." // while request is in progress
                        : parcel.isBlocked
                        ? "Blocked"
                        : "Block"}
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <button className="w-full rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition hover:scale-105">
                      Edit
                    </button>
                    <button className="w-full rounded bg-red-700 px-4 py-2 text-sm font-medium text-white transition hover:scale-105">
                      Delete
                    </button>
                  </div>
                  <button className="w-full rounded bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:scale-105">
                    Take Action
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No parcels found.</p>
      )}
    </div>
  );
};

export default AllParcels;
