
import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      title: "Техническая экспертиза",
      description: "Комплексная оценка технического состояния зданий и сооружений",
      icon: "ClipboardCheck",
      items: [
        "Оценка конструкций и инженерных систем",
        "Выявление дефектов и повреждений",
        "Определение причин возникновения проблем",
        "Рекомендации по устранению недостатков"
      ]
    },
    {
      title: "Строительный контроль",
      description: "Контроль качества выполнения строительно-монтажных работ",
      icon: "FileSearch",
      items: [
        "Проверка соответствия нормативным документам",
        "Контроль качества материалов",
        "Мониторинг сроков выполнения работ",
        "Выявление отклонений от проекта"
      ]
    },
    {
      title: "Судебная экспертиза",
      description: "Проведение судебных строительно-технических экспертиз",
      icon: "Scale",
      items: [
        "Исследования по определению суда",
        "Оценка стоимости ущерба",
        "Определение причин аварий",
        "Экспертные заключения для судебных споров"
      ]
    }
  ];

  return (
    <section id="services" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12 fade-in">Предоставляемые услуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
