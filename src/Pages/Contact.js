import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { name, email, phone,linkdein,github,mail } = contactDetails;
  return (
    <main className="container mx-auto max-width section">
      <h3 className="text-left text-2xl md:text-xl lg:text-3xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Name : <span className="text-center text-2xl md:text-xl lg:text-3xl text-gradient font-semibold md:font-bold pt-1 md:pt-10 md:pb-6" >{name} </span>
      </h3>
      <br></br>

      <h3 className="text-left text-2xl md:text-xl lg:text-3xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Mail to : <span className="text-center text-xl md:text-xl lg:text-3xl text-gradient font-semibold md:font-bold pt-1 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </span>
      </h3>
      <br></br>
      <h3 className="text-left text-2xl md:text-xl lg:text-3xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
      Call me @ <span className="text-center text-xl md:text-xl lg:text-3xl text-gradient font-semibold md:font-bold pt-1 md:pt-10 md:pb-6">
        <a href={`tel:${phone}`}>{phone}</a>
      </span>
      </h3>
      <br></br>

      <h3 className="text-left text-2xl md:text-xl lg:text-3xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
      Connect with me :  <span className="text-center text-xl md:text-xl lg:text-3xl text-gradient font-semibold md:font-bold pt-1 md:pt-10 md:pb-6">
      <a href={`LinkedIn :${linkdein}`}>{linkdein}</a>
      </span>
      </h3>
      
      
    </main>
  );
}

export default Contact;
