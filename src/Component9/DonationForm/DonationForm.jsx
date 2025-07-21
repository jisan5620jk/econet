import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import { GoArrowRight } from "react-icons/go";
import subtitleIcon from "/images/sub-title-icon.png";
import shape from "/images/charity-donation-shape.png";
import shape2 from "/images/charity-donation-form-shape.png";
import donationFormImg from "/images/charity-donation-form-img.png";

const DonationForm = () => {
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
    <section className="relative z-10 before:absolute before:bg-[url(/images/charity-donation-form-bg.png)] before:left-0 before:top-0 before:w-full before:h-[72%] before:bg-cover before:bg-no-repeat before:bg-center pt-[140px] -mt-7">
      <div className="Container relative z-10">
        <div className="text-center mb-[98px]">
          <h5 className="zoom-in font-Outfit text-lg font-medium leading-7 text-PrimaryColor-0 px-5 py-[3px] inline-flex items-center gap-2 border border-PrimaryColor-0 rounded-full">
            <img src={subtitleIcon} alt="Icon" draggable={false} /> Give
            Donation
          </h5>
          <h1 className="font-Outfit font-semibold text-xl leading-7 sm:text-[34px] sm:leading-[42px] md:text-[44px] md:leading-[52px] lg:text-[30px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[50px] 2xl:leading-[58px] text-white mt-3.5">
            Open Your Heart Lend a Hand
            <br />
            Donate Your Love
          </h1>
        </div>
        <div className="bg-BodyBg-0 rounded-[30px] relative before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-[calc(100%-40px)] before:bg-PrimaryColor-0 before:rounded-[30px] before:-z-10 after:absolute after:-top-10 after:left-1/2 after:-translate-x-1/2 after:h-full after:w-[calc(100%-80px)] after:bg-white/20 after:rounded-[30px] after:-z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[30px] overflow-hidden">
            <div>
              <img src={donationFormImg} alt="Donation Form Image" draggable={false} />
            </div>
            <div className="py-[67px] 2xl:pr-[60px]">
              {/* Donation Tab Content */}
              <h2 className="font-Outfit text-4xl leading-[44px] font-semibold text-HeadingColor-0">
                Give Your Love Donation <br /> For Humanity
              </h2>
              {/* Donation Amount */}
              <div className="mt-10">
                <h5 className="font-Outfit font-medium text-HeadingColor-0 text-2xl mb-5">
                  Your Donation
                </h5>
                <div className="flex items-center bg-white rounded-full px-3 py-2 border border-SecondaryColor-0/10 w-full">
                  <span className="size-10 rounded-full flex items-center justify-center bg-PrimaryColor-0 text-white text-lg mr-3">
                    <FaDollarSign />
                  </span>
                  <input
                    type="text"
                    className="flex-1 outline-none bg-transparent font-Outfit text-[22px] text-HeadingColor-0"
                    value={customAmount || amount}
                    onChange={handleCustomInput}
                    placeholder="Enter Amount"
                  />
                </div>

                {/* Preset Amount Buttons */}
                <div className="flex flex-wrap gap-1 justify-between mt-6">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => handleAmountClick(amt)}
                      className={`px-[30px] py-1 rounded-full font-Outfit text-lg font-medium border transition-all ${
                        amount === amt
                          ? "border-PrimaryColor-0 text-PrimaryColor-0"
                          : "border-gray-300 text-HeadingColor-0"
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
                    className={`px-[30px] py-1 rounded-full font-Outfit text-lg font-medium border transition-all ${
                      customAmount && !presetAmounts.includes(amount)
                        ? "border-PrimaryColor-0 text-PrimaryColor-0"
                        : "border-gray-300 text-HeadingColor-0"
                    }`}
                  >
                    Custom
                  </button>
                </div>
              </div>
              {/* Payment Methods */}
              <div className="mt-[52px]">
                <h4 className="font-Outfit font-medium text-HeadingColor-0 text-2xl mb-5">
                  Select Payment Method
                </h4>
                <div className="flex flex-wrap gap-8 mb-11">
                  {[
                    { label: "Test Donation", value: "test" },
                    { label: "Credit Card", value: "card" },
                    { label: "Offline Donation", value: "offline" },
                  ].map((method) => (
                    <button
                      type="button"
                      key={method.value}
                      onClick={() => setSelectedMethod(method.value)}
                      className="group flex items-center gap-2 font-NotoSans text-lg transition-all duration-500"
                    >
                      <span className="relative w-5 h-5">
                        {/* Hidden native radio */}
                        <input
                          type="radio"
                          name="payment"
                          checked={selectedMethod === method.value}
                          onChange={() => setSelectedMethod(method.value)}
                          className="sr-only"
                        />
                        {/* Custom circle */}
                        <span
                          className={`block w-full h-full rounded-full border transition-all duration-500 ${
                            selectedMethod === method.value
                              ? "border-PrimaryColor-0"
                              : "border-SecondaryColor-0/20"
                          }`}
                        />
                        {/* Inner dot */}
                        {selectedMethod === method.value && (
                          <span className="absolute top-1/2 left-1/2 size-3 bg-PrimaryColor-0 rounded-full -translate-x-1/2 -translate-y-1/2" />
                        )}
                        {selectedMethod !== method.value && (
                          <span className="absolute top-1/2 left-1/2 size-3 bg-SecondaryColor-0/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
                        )}
                      </span>

                      <span>{method.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <PrimaryButton as="link" href="/about">
                Donate Now <GoArrowRight size={22} />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-10 top-[14%] left-[19%]">
        <img
          src={shape}
          alt="Image Shape"
          draggable={false}
          className="animate-wiggle"
          style={{ animationDuration: "6s" }}
        />
      </div>
      <div className="absolute z-10 top-[14%] right-[19%]">
        <img
          src={shape2}
          alt="Image Shape"
          draggable={false}
          className="animate-rotateX"
          style={{ animationDuration: "6s" }}
        />
      </div>
    </section>
  );
};

export default DonationForm;
