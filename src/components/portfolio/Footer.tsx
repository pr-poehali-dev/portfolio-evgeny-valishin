
import React from "react";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "Linkedin", url: "#" },
    { name: "Youtube", url: "#" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Валишин Е.Р.</h2>
            <p className="text-blue-200">Эксперт по строительству, член СРО</p>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="text-white hover:text-blue-200 transition duration-300"
                aria-label={link.name}
              >
                <Icon name={link.name} />
              </a>
            ))}
          </div>
        </div>
        <Separator className="my-6 bg-blue-800" />
        <div className="text-center text-blue-200">
          <p>© {currentYear} Все права защищены. Валишин Евгений Рифкатович</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
