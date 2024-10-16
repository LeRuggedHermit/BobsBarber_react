import "./map.css";

const GoogleMapEmbed = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23115.161488319307!2d170.19613475396386!3d-43.59831270065962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2bc942c210e0b5%3A0x57c2c688089855d1!2sTasman%20Glacier!5e0!3m2!1ssv!2sse!4v1724495486790!5m2!1ssv!2sse"
        width="600"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        id="g_map"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
