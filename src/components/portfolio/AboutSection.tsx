
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const certifications = [
    {
      title: "Свидетельство СРО №12345",
      description: "Допуск к работам по экспертизе строительных объектов",
      icon: "FileCheck"
    },
    {
      title: "Аттестация Минстроя",
      description: "Квалификационный аттестат эксперта",
      icon: "Award"
    },
    {
      title: "Свидетельство судебного эксперта",
      description: "Право проведения судебных строительных экспертиз",
      icon: "FileText"
    }
  ];

  const qualifications = [
    { icon: "GraduationCap", text: "Высшее строительное образование" },
    { icon: "Certificate", text: "Аттестованный эксперт СРО" },
    { icon: "Briefcase", text: "Более 100 успешно выполненных экспертиз" }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12 fade-in">О себе</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 fade-in">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Валишин Евгений Рифкатович</h3>
            <p className="text-gray-600 mb-4">
              Эксперт по строительству с более чем 15-летним опытом в отрасли. Специализируюсь на проведении строительно-технических экспертиз различной сложности.
            </p>
            <p className="text-gray-600 mb-4">
              Являюсь действующим членом саморегулируемой организации (СРО) экспертов в области строительства, что подтверждает мой профессиональный статус и компетентность.
            </p>
            <div className="space-y-2">
              {qualifications.map((item, index) => (
                <div key={index} className="flex items-center">
                  <Icon name={item.icon} className="mr-2 text-blue-900" />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Сертификаты и лицензии</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 border rounded-md flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Icon name={cert.icon} className="text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{cert.title}</h4>
                      <p className="text-sm text-gray-500">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
