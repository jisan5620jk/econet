const Map = () => {
  return (
    <section className="px-2 md:px-4 lg:px-8 pb-2 md:pb-4 lg:pb-8 overflow-hidden fade-up">
      <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[20px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d615750.1120117789!2d34.09446658476134!3d31.50847548965568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f054e542767%3A0x7ff98dc913046392!2sGaza!5e0!3m2!1sen!2sbd!4v1748773470312!5m2!1sen!2sbd"
          width="100%"
          height="auto"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[580px]"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
