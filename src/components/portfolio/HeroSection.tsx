
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 fade-in">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Экспертная оценка строительства</h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">Валишин Евгений Рифкатович</h2>
        <p className="text-lg text-gray-500 mb-8">
          Профессиональная экспертиза и оценка строительных объектов, качества выполненных работ и технического состояния зданий и сооружений. Член СРО с многолетним опытом в строительстве.
        </p>
        <div className="flex gap-4">
          <Button className="bg-blue-900 hover:bg-blue-800" size="lg">
            Заказать консультацию
          </Button>
          <Button variant="outline" size="lg">
            Узнать больше
          </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-80 h-80 bg-gray-200 rounded-full overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
            alt="Евгений Валишин"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
