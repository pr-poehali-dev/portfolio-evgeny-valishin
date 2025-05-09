
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { LucideProps } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  items: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, items }) => {
  return (
    <Card className="fade-in">
      <CardHeader>
        <div className="mb-4 text-blue-900">
          <Icon name={icon} size={48} />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
