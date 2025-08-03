import { ConstructionQuote } from "@/components/ConstructionQuote";

const Index = () => {
  const sampleData = {
    projectName: "Kitchen Renovation",
    clientName: "John & Jane Smith",
    projectAddress: "1234 Main Street, Los Angeles, CA 90210",
    projectType: "Interior Renovation",
    date: "January 15, 2024",
    salesperson: "Mike Johnson",
    quoteDate: "January 10, 2024",
    scopeOfWork: "Complete kitchen renovation including cabinet installation, countertop replacement, electrical work, plumbing updates, flooring installation, and painting. Work includes removal of existing fixtures and disposal of debris.",
    cost: "$45,500"
  };

  return (
    <div className="min-h-screen bg-gray-light py-8">
      <div className="container mx-auto px-4">
        <ConstructionQuote data={sampleData} />
      </div>
    </div>
  );
};

export default Index;
