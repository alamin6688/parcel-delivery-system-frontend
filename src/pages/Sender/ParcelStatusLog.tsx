import Loader from "@/components/Loader/Loader";
import { useStatusLogQuery } from "@/redux/features/auth/auth.api";
import { useParams } from "react-router-dom";

const ParcelStatusLog = () => {
  const { id } = useParams<{ id: string }>();
  console.log("Parcel ID:", id);

  const { data, isLoading, isError } = useStatusLogQuery(id!, { skip: !id });

  if (!id) return <p>Invalid parcel ID.</p>;
  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  if (isError) return <p>Error loading parcel log.</p>;

  // Adjust for MongoDB $date structure
  const logs = Array.isArray(data?.data?.statusLogs)
    ? data.data.statusLogs
    : [];

  if (logs.length === 0) return <p>No status logs found.</p>;

  return (
    <div className="w-full mx-auto mt-6 p-4 bg-background border shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Parcel Status Log
      </h2>

      {[...logs].reverse().map((log, index) => (
        <div
          key={index}
          className="border-b py-2 grid gap-2 grid-cols-1 md:grid-cols-2"
        >
          <p>
            <strong>{logs.length - index}.</strong> <strong>Status:</strong>{" "}
            {log.status}
          </p>
          <p>
            <strong>Note:</strong> {log.note}
          </p>

          <p>
            <strong>Updated At:</strong>{" "}
            {new Date(log.updatedAt).toLocaleString("en-US", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            })}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ParcelStatusLog;
