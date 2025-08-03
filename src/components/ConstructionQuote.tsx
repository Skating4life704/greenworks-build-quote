import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface QuoteData {
  projectName?: string;
  clientName?: string;
  projectAddress?: string;
  projectType?: string;
  date?: string;
  salesperson?: string;
  quoteDate?: string;
  scopeOfWork?: string;
  cost?: string;
}

interface ConstructionQuoteProps {
  data?: QuoteData;
}

export const ConstructionQuote = ({ data = {} }: ConstructionQuoteProps) => {
  const {
    projectName = "",
    clientName = "",
    projectAddress = "",
    projectType = "",
    date = "",
    salesperson = "",
    quoteDate = "",
    scopeOfWork = "Insert description of project here",
    cost = "$XXX,XXX"
  } = data;

  return (
    <div className="max-w-4xl mx-auto bg-background shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-primary to-green-primary/90 p-8 text-primary-foreground">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/a5ea3fc1-de66-4922-b07d-cc1336026867.png" 
              alt="Green Works Logo" 
              className="h-16 w-auto bg-white p-2 rounded"
            />
          </div>
          <div className="text-right text-sm text-black">
            <p>Contractor License #: 936962 • State of California</p>
            <p>20720 Ventura Blvd #270 Woodland Hills CA, 91364</p>
            <p className="font-semibold">888-513-8444</p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Project Information */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-green-primary mb-4 border-b border-green-primary/20 pb-2">
            Project Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-3">
              <div className="flex">
                <span className="font-medium text-gray-dark w-32">Project Name:</span>
                <span className="text-gray-medium">{projectName || "_".repeat(30)}</span>
              </div>
              <div className="flex">
                <span className="font-medium text-gray-dark w-32">Client Name:</span>
                <span className="text-gray-medium">{clientName || "_".repeat(30)}</span>
              </div>
              <div className="flex">
                <span className="font-medium text-gray-dark w-32">Project Address:</span>
                <span className="text-gray-medium">{projectAddress || "_".repeat(30)}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex">
                <span className="font-medium text-gray-dark w-32">Project Type:</span>
                <span className="text-gray-medium">{projectType || "_".repeat(30)}</span>
              </div>
              <div className="flex">
                <span className="font-medium text-gray-dark w-32">Date:</span>
                <span className="text-gray-medium">{date || "_".repeat(30)}</span>
              </div>
              <div className="flex">
                <span className="font-medium text-gray-dark w-32">Salesperson:</span>
                <span className="text-gray-medium">{salesperson || "_".repeat(30)}</span>
              </div>
              <div className="flex">
                <span className="font-medium text-gray-dark w-32">Quote Date:</span>
                <span className="text-gray-medium">{quoteDate || "_".repeat(30)}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* General Provisions */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-green-primary mb-4 border-b border-green-primary/20 pb-2">
            General Conditions & Provisions
          </h2>
          
          <div className="space-y-6 text-sm text-gray-dark leading-relaxed">
            <div>
              <h3 className="font-semibold text-base mb-2">Vacancy and Parking</h3>
              <p>Areas impacted by construction must be vacated and cleared by the client prior to the start of work. Please note that the construction may affect parking spaces.</p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">Compliance with Codes and Regulations</h3>
              <p>The contractor will adhere to all relevant codes and regulations. If any discrepancies arise between these codes and the project contract documents or plans, the more stringent requirements will apply. Any additional costs incurred as a result of these requirements will be the responsibility of the client.</p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">Sanitation</h3>
              <p>A portable toilet will be provided by Green Works Construction at the job site throughout the construction process to ensure sanitation standards are met.</p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">Field Supervision</h3>
              <p>A Green Works representative will oversee all field inspections to ensure compliance with project requirements.</p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">Post-Construction Cleaning</h3>
              <p>Upon completion of the project, Greenworks will provide a cleaning crew to ensure the property is left in room sweep condition.</p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">Fees</h3>
              <p>The client will be responsible for any city fees, inspection fees, permit fees, and other public body fees, including parking permits should they arise.</p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">Additional Permit Fees</h3>
              <p>Any extra service fees related to permits, including additional trips to the city, are not included in the price and will be the responsibility of the client.</p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">Payment Schedule</h3>
              <p>The payment schedule does not directly correlate to the value of specific work items. The payment amount represents the overall progress of construction and is not tied to individual line items.</p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">Lead and Asbestos Testing</h3>
              <p>In compliance with the Residential Lead-Based Paint Hazard Reduction Act of 1992 (Public Law 102-550) and OSHA's Asbestos Construction Standard (29 CFR 1926.1101), contractors are required to perform lead and asbestos testing on homes built before 1978. The cost for these tests is included in the bid. Testing is mandatory unless the homeowner can provide a report showing negative findings for both lead and asbestos. If the tests return positive results, the homeowner will be fully responsible for the costs of remediation.</p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">Tariff and Material Price Increases</h3>
              <p>In the event costs increase by ten percent (10%) or more as a result of a change in the Standards, labor costs, material costs, rent, custom charges, taxes, import or export duties, tariffs, freight costs or utility rates, Seller shall provide Buyer documentation supporting such cost increases or decreases in a form reasonably satisfactory to Buyer. Upon Buyer's reasonable satisfaction and confirmation of the increased or decreased costs, the increased or decreased costs shall be reflected in a subsequent written memorandum signed by the Parties and expressly referring to this Agreement. Any increase or decrease in purchase price shall become effective thirty (30) days after Buyer and Seller determine such increase or decrease. Neither Party may exercise this provision more than once in any six (6) month period. In any such review, Seller will disclose the prior (e.g., as of the Effective Date or as of the last evaluation) values of all of the above variables as well as the current values of all of the above.</p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">Responsibility for Unspecified Items</h3>
              <p>The Client acknowledges and agrees that any items, services, or materials not expressly identified in the Scope of Work or Exclusions List, including but not limited to any additional work or unforeseen requirements, shall be the sole responsibility of the Client. Greenworks shall not be liable for any costs associated with such items, unless otherwise agreed to in writing or through a formal change order executed by both parties.</p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">1.3. Drawing and Specifications</h3>
              <p>Scope of work shall be that as shown at the drawing and specification that will be prepared by XXXXX XXXXX.</p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">1.4. Cost</h3>
              <p>The work will be done in strict accordance with applicable codes and ordinances and to the full satisfaction and acceptance of the client for the sum of {cost} dollars and 00 cents to be paid in accordance with the payment schedule provisions of the state of California.</p>
            </div>
          </div>
        </Card>

        {/* Scope of Work */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-green-primary mb-4 border-b border-green-primary/20 pb-2">
            Scope of Work
          </h2>
          <div className="bg-gray-light p-4 rounded-md min-h-[200px]">
            <p className="text-gray-medium italic">{scopeOfWork}</p>
          </div>
        </Card>

        {/* Pricing & Payment Schedule */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-green-primary mb-4 border-b border-green-primary/20 pb-2">
              Pricing
            </h2>
            <div className="space-y-4">
              <div className="text-center p-6 bg-green-light rounded-lg">
                <p className="text-sm text-gray-medium mb-2">Total Project Cost</p>
                <p className="text-3xl font-bold text-green-primary">{cost}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-green-primary mb-4 border-b border-green-primary/20 pb-2">
              Payment Schedule
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span>Contract Signing:</span>
                <span className="font-medium">_____% </span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Material Delivery:</span>
                <span className="font-medium">_____% </span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>50% Completion:</span>
                <span className="font-medium">_____% </span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Final Completion:</span>
                <span className="font-medium">_____% </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Signature Section */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-green-primary mb-6 border-b border-green-primary/20 pb-2">
            Signatures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="font-semibold text-gray-dark">Salesman</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-medium">Name:</label>
                  <div className="border-b border-gray-300 h-8"></div>
                </div>
                <div>
                  <label className="text-sm text-gray-medium">Signature:</label>
                  <div className="border-b border-gray-300 h-8"></div>
                </div>
                <div>
                  <label className="text-sm text-gray-medium">Date:</label>
                  <div className="border-b border-gray-300 h-8"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-gray-dark">Client</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-medium">Name:</label>
                  <div className="border-b border-gray-300 h-8"></div>
                </div>
                <div>
                  <label className="text-sm text-gray-medium">Signature:</label>
                  <div className="border-b border-gray-300 h-8"></div>
                </div>
                <div>
                  <label className="text-sm text-gray-medium">Date:</label>
                  <div className="border-b border-gray-300 h-8"></div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="border-t border-green-primary/20 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/a5ea3fc1-de66-4922-b07d-cc1336026867.png" 
                alt="Green Works Logo" 
                className="h-12 w-auto"
              />
              <div className="text-sm">
                <p className="font-semibold text-green-primary">GREEN WORKS Construction & Design Inc</p>
                <p className="text-gray-medium">Contractor License #: 936962 • State of California</p>
                <p className="text-gray-medium">20720 Ventura Blvd #270 Woodland Hills CA, 91364 • 888-513-8444</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};