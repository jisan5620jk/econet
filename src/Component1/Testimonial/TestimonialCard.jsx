/* eslint-disable react/prop-types */
// components/TestimonialCard.jsx
const TestimonialCard = ({ image, name, role, text, active }) => (
  <div
    className={`testimonial-card transition-all duration-300 ease-in-out rounded-xl shadow p-6 mx-4 my-2 h-[200px] flex flex-col justify-center ${
      active ? "bg-pink-200" : "bg-gray-200"
    }`}
  >
    <div className="flex items-center mb-2">
      <img src={image} alt={name} className="w-10 h-10 rounded-full mr-3" />
      <div>
        <h4 className="font-semibold text-base">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
    <p className="text-gray-700 text-sm">{text}</p>
  </div>
);

export default TestimonialCard;
