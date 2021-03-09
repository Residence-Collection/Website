import React from 'react';
import AStep from './AStep';

function ServiceSteps(props) {

     const steps = [
          { num: 1, heading: "Survey & Design", description: "The process starts with our survey executive visiting your site and taking the measurement and discussing the right solution for you." },
          { num: 2, heading: "Fabrication & Delivery", description: "Our trust lies in the technologically, sound machinery and selection of the best glazing and hardware. After the fabrication, uPVC windows and doors are delivered at the site." },
          { num: 3, heading: "Installation & Maintenance", description: "Our trained staff ensures smooth installation and take you through the operations. After you move-in to your home, we are there for you to rectify any issues, all free for the first year." },
          { num: 4, heading: "Post-sale Service", description: "If you face any issue with the functioning at any point, you can simply raise a request. Once you raise a request, our technicians personally visit your home and resolve the problem." }
     ];

     return (
          <div className="service-steps">
               {
                    steps.map((step) => {
                         return <AStep key={step.heading} stepNum={step.num} stepHeading={step.heading} stepDescription={step.description} />
                    })
               }
          </div>
     );
}
export default ServiceSteps;