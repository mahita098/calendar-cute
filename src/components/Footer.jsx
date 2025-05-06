import React from "react";

export default function Footer() {
  return (
    <div className="w-fit mx-auto flex items-center mt-8">
      <img className="w-14 pb-2" src="../images/cute-girl.gif" alt="" />
      <p className="text-md text-gray-500">Made by</p>

      <a
        className="hover:underline text-gray-500 ml-1 rounded flex items-center"
        target="_blank"
        href="https://mahitaprofile.vercel.app/"
      >
        Mahita
      </a>
    </div>
  );
}
