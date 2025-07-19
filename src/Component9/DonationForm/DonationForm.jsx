import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";

const DonationForm = () => {
  const [selectedTab, setSelectedTab] = useState("donation");
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("test");

  const presetAmounts = [100, 150, 200, 300];

  const handleAmountClick = (value) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomInput = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setCustomAmount(value);
    setAmount(Number(value));
  };

  return (
    <section className="relative z-10 before:absolute before:bg-[url(/images/charity-donation-form-bg.png)] before:left-0 before:top-0 before:w-full before:h-full before:bg-cover before:bg-no-repeat before:bg-center py-20">
      <div className="Container relative z-10">
        <div className="bg-[url(/images/charity-donation-form-box-bg.png)] grid grid-cols-1 lg:grid-cols-2 relative before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-[calc(100%-40px)] before:bg-PrimaryColor-0 before:rounded-[30px] before:-z-10 after:absolute after:-top-10 after:left-1/2 after:-translate-x-1/2 after:h-full after:w-[calc(100%-80px)] after:bg-white/20 after:rounded-[30px] after:-z-20">
          <div></div>
          <div className="p-6 rounded-xl shadow-md">
            {/* Tabs */}
            <div className="flex border-b border-gray-300 mb-6">
              <button
                className={`px-4 py-2 font-semibold ${
                  selectedTab === "donation"
                    ? "border-b-4 border-green-500 text-green-700"
                    : "text-gray-500"
                }`}
                onClick={() => setSelectedTab("donation")}
              >
                Donation
              </button>
              {/* Add more tabs if needed */}
            </div>

            {/* Donation Tab Content */}
            {selectedTab === "donation" && (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Give Your Love Donation <br /> For Humanity
                </h2>

                {/* Donation Amount */}
                <div className="mt-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your Donation
                  </label>
                  <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-inner w-full max-w-md">
                    <span className="text-green-600 text-lg mr-2">
                      <FaDollarSign />
                    </span>
                    <input
                      type="text"
                      className="flex-1 outline-none bg-transparent text-lg text-gray-800"
                      value={customAmount || amount}
                      onChange={handleCustomInput}
                      placeholder="Enter Amount"
                    />
                  </div>

                  {/* Preset Amount Buttons */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {presetAmounts.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => handleAmountClick(amt)}
                        className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                          amount === amt
                            ? "border-green-500 text-green-600"
                            : "border-gray-300 text-gray-600"
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                    <button
                      onClick={() => {
                        setCustomAmount("");
                        setAmount("");
                      }}
                      className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                        customAmount && !presetAmounts.includes(amount)
                          ? "border-green-500 text-green-600"
                          : "border-gray-300 text-gray-600"
                      }`}
                    >
                      Custom
                    </button>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-700 mb-3">
                    Select Payment Method
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { label: "Test Donation", value: "test" },
                      { label: "Credit Card", value: "card" },
                      { label: "Offline Donation", value: "offline" },
                    ].map((method) => (
                      <button
                        key={method.value}
                        onClick={() => setSelectedMethod(method.value)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                          selectedMethod === method.value
                            ? "bg-green-100 text-green-700 border-green-500"
                            : "bg-white text-gray-600 border-gray-300 hover:border-green-400"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={selectedMethod === method.value}
                          onChange={() => setSelectedMethod(method.value)}
                          className="accent-green-500"
                        />
                        {method.label}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationForm;
