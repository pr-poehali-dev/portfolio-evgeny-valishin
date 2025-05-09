
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contactInfo = [
    {
      title: "Адрес",
      icon: "MapPin",
      items: ["г. Москва, ул. Строителей, д. 12, офис 304"]
    },
    {
      title: "Телефон",
      icon: "Phone",
      items: ["+7 (999) 123-45-67", "+7 (495) 987-65-43"]
    },
    {
      title: "Email",
      icon: "Mail",
      items: ["valishin@expertise.ru", "info@building-expert.ru"]
    },
    {
      title: "Часы работы",
      icon: "Clock",
      items: ["Пн-Пт: 9:00 - 18:00", "Сб-Вс: По предварительной записи"]
    }
  ];

  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12 fade-in">Контакты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь со мной</CardTitle>
                <CardDescription>Заполните форму ниже, и я свяжусь с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Имя</label>
                      <input
                        id="name"
                        className="w-full p-2 border rounded-md"
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Телефон</label>
                      <input
                        id="phone"
                        className="w-full p-2 border rounded-md"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-2 border rounded-md"
                      placeholder="example@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Сообщение</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-2 border rounded-md"
                      placeholder="Опишите ваш запрос..."
                    />
                  </div>
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">Отправить запрос</Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
                <CardDescription>Вы также можете связаться со мной напрямую</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Icon name={info.icon} className="text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      {info.items.map((item, idx) => (
                        <p key={idx} className="text-gray-600">{item}</p>
                      ))}
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

export default ContactSection;
