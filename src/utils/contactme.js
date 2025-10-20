import emailjs from "@emailjs/browser";

export const contactInfo = {
  email: "razgrisss41@gmail.com",
  phone: "+54 113-116-4111",
  location: "Buenos Aires, Argentina",
  linkedin: "https://www.linkedin.com/in/christian-javier-rizzo/",
  github: "https://github.com/Razgrizxx",
};

// EmailJS Configuration
// Sign up at https://www.emailjs.com/ and get your credentials
const EMAILJS_CONFIG = {
  serviceId: "service_m34d5sq", // Replace with your EmailJS service ID
  templateId: "template_hntswco", // Replace with your EmailJS template ID
  publicKey: "xJgvjkFBokozXGNtP", // Replace with your EmailJS public key
};

export const handleContactSubmit = async (formData) => {
  try {
    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: contactInfo.email, // Your email address
      },
      EMAILJS_CONFIG.publicKey
    );

    console.log("Email sent successfully:", response);
    return {
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("Failed to send message. Please try again later.");
  }
};
