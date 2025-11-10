import React from "react";

export default function FoodDetails({
  food = {
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    name: "Homemade Vegetable Pasta",
    quantity: "3 portions",
    pickupLocation: "123 Green St, Riverside",
    expireDate: "2025-11-20",
    donor: {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      avatar:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop",
    },
  },
  onRequest,
}) {
  const handleRequest = () => {
    if (typeof onRequest === "function") {
      onRequest(food);
    } else {
      // Fallback behavior for now
      alert("Food request submitted!");
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-base-100">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-[360px] object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl p-6 shadow-xl bg-base-100">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{food.name}</h1>
            <p className="text-base-content/70">
              Freshly prepared and ready to share. Please check the expiry and
              pickup details before requesting.
            </p>
          </div>

          <div className="rounded-2xl p-6 shadow-xl bg-base-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DetailItem label="Quantity" value={food.quantity} />
              <DetailItem label="Pickup Location" value={food.pickupLocation} />
              <DetailItem label="Expire Date" value={food.expireDate} />
            </div>
          </div>

          <div className="rounded-2xl p-6 shadow-xl bg-base-100 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-14 h-14 rounded-full ring ring-primary/30 ring-offset-2 ring-offset-base-100 overflow-hidden">
                  <img src={food.donor?.avatar} alt={food.donor?.name} />
                </div>
              </div>
              <div>
                <p className="font-semibold text-lg">
                  {food.donor?.name || "Unknown Donor"}
                </p>
                <p className="text-sm text-base-content/70">
                  {food.donor?.email || "No email provided"}
                </p>
              </div>
            </div>

            <button
              onClick={handleRequest}
              className="btn btn-primary btn-wide"
            >
              Request Food
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailItem({ label, value }) {
  return (
    <div className="p-4 rounded-xl bg-base-200">
      <p className="text-sm text-base-content/70">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}


