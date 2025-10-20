import { useCreateParcelMutation } from "@/redux/features/auth/auth.api";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Parcel = () => {
  const { register, handleSubmit, reset } = useForm();
  const [createParcel, { isLoading }] = useCreateParcelMutation();

  const onSubmit = async (data) => {
    try {
      await createParcel({
        receiverId: data.receiverId,
        parcelType: data.parcelType,
        weight: parseFloat(data.weight),
        imageURL: data.imageURL,
        pickupAddress: data.pickupAddress,
        deliveryAddress: data.deliveryAddress,
        fee: parseFloat(data.fee),
      }).unwrap();

      toast.success("Parcel created successfully!");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to create parcel.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-background shadow-md rounded-xl p-6 border">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Create New Parcel
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label>Receiver ID</label>
        <input
          {...register("receiverId", { required: true })}
          placeholder="Receiver ID"
          className="w-full border rounded-lg p-2"
        />
        <label>Parcel Type</label>
        <input
          {...register("parcelType", { required: true })}
          placeholder="Parcel Type"
          className="w-full border rounded-lg p-2"
        />
        <label>Image URL</label>
        <input
          {...register("imageURL", { required: true })}
          placeholder="Image URL"
          className="w-full border rounded-lg p-2"
        />
        <label>Weight (kg)</label>
        <input
          {...register("weight", { required: true })}
          type="number"
          step="0.1"
          placeholder="Weight (kg)"
          className="w-full border rounded-lg p-2"
        />
        <label>Pickup Address</label>
        <input
          {...register("pickupAddress", { required: true })}
          placeholder="Pickup Address"
          className="w-full border rounded-lg p-2"
        />
        <label>Delivery Address</label>
        <input
          {...register("deliveryAddress", { required: true })}
          placeholder="Delivery Address"
          className="w-full border rounded-lg p-2"
        />
        <label>Fee (BDT)</label>
        <input
          {...register("fee", { required: true })}
          type="number"
          placeholder="Fee (BDT)"
          className="w-full border rounded-lg p-2"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          {isLoading ? "Creating..." : "Create Parcel"}
        </button>
      </form>
    </div>
  );
};

export default Parcel;
