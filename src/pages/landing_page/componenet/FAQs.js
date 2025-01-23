// import React, { useState } from 'react';

// const FAQs = () => {
  
//   const [openFAQ, setOpenFAQ] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenFAQ(openFAQ === index ? null : index);
//   };

//   // FAQs Data
//   const faqs = [
//     { question: 'How Do I Buy a Home?', answer: 'You can start by getting pre-approved for a mortgage and then work with a realtor to find a suitable home.' },
//     { question: 'What Should I Look for When Choosing a Realtor?', answer: 'Look for experience, local market knowledge, and a good reputation in the industry.' },
//     { question: 'What Is a Home Appraisal, and Why Is It Important?', answer: 'A home appraisal determines the value of the home, which is essential for lenders during the mortgage process.' },
//     { question: 'How Does the Mortgage Approval Process Work?', answer: 'The process includes applying, submitting documents, credit checks, and underwriting before approval.' },
//     { question: 'What Are Closing Costs, and Who Pays for Them?', answer: 'Closing costs are fees associated with finalizing the mortgage. Both buyers and sellers may pay a portion.' },
//   ];

//   return (
//     <div className="max-w-7xl my-10 ml-28 px-4">
//       {/* Title */}
//       <h2 className="text-3xl font-bold text-center mb-2">FAQs</h2>
//       <p className="text-gray-500 text-center mb-6">Frequently Asked Questions</p>

    
//       <div>
//         {faqs.map((faq, index) => (
//           <div key={index} className="border-t border-gray-300 ">
//             <button
//               className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
//               onClick={() => toggleFAQ(index)}
//             >
//               <span className="text-lg font-medium">{faq.question}</span>
//               <span className="text-green-500 text-2xl">
//                 {openFAQ === index ? '−' : '+'}
//               </span>
//             </button>
//             {openFAQ === index && (
//               <div className="text-gray-600 pb-4">
//                 <p>{faq.answer}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Bottom Border */}
//       <div className="border-t border-gray-300"></div>
//     </div>
//   );
// };

// export default FAQs;


import React, { useState } from 'react';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // FAQs Data
  const faqs = [
    { question: 'How Do I Buy a Home?', answer: 'You can start by getting pre-approved for a mortgage and then work with a realtor to find a suitable home.' },
    { question: 'What Should I Look for When Choosing a Realtor?', answer: 'Look for experience, local market knowledge, and a good reputation in the industry.' },
    { question: 'What Is a Home Appraisal, and Why Is It Important?', answer: 'A home appraisal determines the value of the home, which is essential for lenders during the mortgage process.' },
    { question: 'How Does the Mortgage Approval Process Work?', answer: 'The process includes applying, submitting documents, credit checks, and underwriting before approval.' },
    { question: 'What Are Closing Costs, and Who Pays for Them?', answer: 'Closing costs are fees associated with finalizing the mortgage. Both buyers and sellers may pay a portion.' },
  ];

  return (
    <div className="container  mx-auto my-10 px-4  ">
      <div className='px-20'>

      <h2 className="text-3xl font-bold text-center pt-10 pb-5">FAQs</h2>
      <p className="text-gray-500 text-center pb-20">Frequently Asked Questions</p>

      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="border-t border-gray-300">
            <button
              className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="text-green-500 text-2xl">
                {openFAQ === index ? '−' : '+'}
              </span>
            </button>
            {openFAQ === index && (
              <div className="text-gray-600 pb-4">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
      {/* Title */}

      {/* Bottom Border */}
      <div className="border-t border-gray-300"></div>
    </div>
  );
};

export default FAQs;
