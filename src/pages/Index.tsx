
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Плавное появление элементов при загрузке
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('show');
      }, 100 * index);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Навигационная панель */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-900">Валишин Е.Р.</h1>
          <div className="flex gap-6">
            <a href="#services" className="text-gray-600 hover:text-blue-900 transition duration-300">Услуги</a>
            <a href="#about" className="text-gray-600 hover:text-blue-900 transition duration-300">О себе</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-900 transition duration-300">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Главная секция */}
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

      {/* Услуги */}
      <section id="services" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12 fade-in">Предоставляемые услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="fade-in">
              <CardHeader>
                <div className="mb-4 text-blue-900">
                  <Icon name="ClipboardCheck" size={48} />
                </div>
                <CardTitle>Техническая экспертиза</CardTitle>
                <CardDescription>Комплексная оценка технического состояния зданий и сооружений</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Оценка конструкций и инженерных систем</li>
                  <li>Выявление дефектов и повреждений</li>
                  <li>Определение причин возникновения проблем</li>
                  <li>Рекомендации по устранению недостатков</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="fade-in">
              <CardHeader>
                <div className="mb-4 text-blue-900">
                  <Icon name="FileSearch" size={48} />
                </div>
                <CardTitle>Строительный контроль</CardTitle>
                <CardDescription>Контроль качества выполнения строительно-монтажных работ</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Проверка соответствия нормативным документам</li>
                  <li>Контроль качества материалов</li>
                  <li>Мониторинг сроков выполнения работ</li>
                  <li>Выявление отклонений от проекта</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="fade-in">
              <CardHeader>
                <div className="mb-4 text-blue-900">
                  <Icon name="Scale" size={48} />
                </div>
                <CardTitle>Судебная экспертиза</CardTitle>
                <CardDescription>Проведение судебных строительно-технических экспертиз</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Исследования по определению суда</li>
                  <li>Оценка стоимости ущерба</li>
                  <li>Определение причин аварий</li>
                  <li>Экспертные заключения для судебных споров</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* О себе */}
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
                <div className="flex items-center">
                  <Icon name="GraduationCap" className="mr-2 text-blue-900" />
                  <p>Высшее строительное образование</p>
                </div>
                <div className="flex items-center">
                  <Icon name="Certificate" className="mr-2 text-blue-900" />
                  <p>Аттестованный эксперт СРО</p>
                </div>
                <div className="flex items-center">
                  <Icon name="Briefcase" className="mr-2 text-blue-900" />
                  <p>Более 100 успешно выполненных экспертиз</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Сертификаты и лицензии</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-md flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Icon name="FileCheck" className="text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Свидетельство СРО №12345</h4>
                      <p className="text-sm text-gray-500">Допуск к работам по экспертизе строительных объектов</p>
                    </div>
                  </div>
                  <div className="p-4 border rounded-md flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Icon name="Award" className="text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Аттестация Минстроя</h4>
                      <p className="text-sm text-gray-500">Квалификационный аттестат эксперта</p>
                    </div>
                  </div>
                  <div className="p-4 border rounded-md flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Icon name="FileText" className="text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Свидетельство судебного эксперта</h4>
                      <p className="text-sm text-gray-500">Право проведения судебных строительных экспертиз</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
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
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Icon name="MapPin" className="text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Адрес</h4>
                      <p className="text-gray-600">г. Москва, ул. Строителей, д. 12, офис 304</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Icon name="Phone" className="text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Телефон</h4>
                      <p className="text-gray-600">+7 (999) 123-45-67</p>
                      <p className="text-gray-600">+7 (495) 987-65-43</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Icon name="Mail" className="text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">valishin@expertise.ru</p>
                      <p className="text-gray-600">info@building-expert.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Icon name="Clock" className="text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Часы работы</h4>
                      <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-gray-600">Сб-Вс: По предварительной записи</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Валишин Е.Р.</h2>
              <p className="text-blue-200">Эксперт по строительству, член СРО</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-blue-200 transition duration-300">
                <Icon name="Facebook" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition duration-300">
                <Icon name="Instagram" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition duration-300">
                <Icon name="Linkedin" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition duration-300">
                <Icon name="Youtube" />
              </a>
            </div>
          </div>
          <Separator className="my-6 bg-blue-800" />
          <div className="text-center text-blue-200">
            <p>© {new Date().getFullYear()} Все права защищены. Валишин Евгений Рифкатович</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Index;
