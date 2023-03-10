import React from "react";
import Work from "../Components/Work";
import { personalDetails, eduDetails, workDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
         Educational details
        </h1>
        <p className="text-content lg:max-w-3xl">{personalDetails.about}</p>
      
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Duration }) => (
            <Work
              position={Position}
              company={Company}
              duration={Duration}
            />
          ))
        )}
      </section>
      <br></br>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
        Roles and responsibilities
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work 
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      
    </main>
  );
}

export default About;
