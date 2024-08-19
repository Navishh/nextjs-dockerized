// import { CardProps } from "@/app/types";
// import Link from "next/link";
// import React from "react";

// const Card: React.FC<CardProps> = ({ title, content, linkText, linkHref }) => {
//   return (
//     <div className="p-6 bg-gray-100 rounded-lg shadow-md">
//       <h2 className="mb-4 text-2xl font-bold text-gray-800">{title}</h2>
//       <p className="mb-4 text-gray-600">{content}</p>
//       {linkHref && (
//         <Link
//           href={linkHref}
//           className="text-lg text-blue-500 hover:underline"
//           rel="noopener noreferrer"
//           target="_blank"
//         >
//           {linkText}
//         </Link>
//       )}
//     </div>
//   );
// };

// export default Card;

import { CardProps } from "@/app/types";
import Link from "next/link";
import React from "react";

const Card: React.FC<CardProps> = ({ title, content, linkText, linkHref }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-bold text-gray-800 md:text-2xl">
        {title}
      </h2>
      <p className="mb-4 text-gray-600">{content}</p>
      {linkHref && (
        <Link
          href={linkHref}
          className="text-blue-500 text-md md:text-lg hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default Card;
