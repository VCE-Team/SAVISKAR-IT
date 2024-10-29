import React from 'react';

const SummarySection = () => {
  return (
    <section className="bg-white p-10">
      <h2 className="text-3xl font-bold mb-8">Ticket Sales Update: Overview of Sales Progress</h2>
      <div className="md:flex md:space-x-10">
        <div className="flex-1">
          <h3 className="text-xl font-bold">What They Say</h3>
          <p className="mt-2 text-gray-500">18,921 (reviews)</p>
          <div className="mt-4">
            <button className="bg-teal-400 text-white px-4 py-2 rounded">See All Testimonials</button>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">Ticket Sales</h3>
          <p className="mt-2 text-gray-500">Product sale has increased by more than 80.16%.</p>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">Number of Visitors</h3>
          <p className="mt-2 text-gray-500">Visitor Volume Escalation: Observing Rising Numbers with Precision</p>
        </div>
      </div>
    </section>
  );
}

export default SummarySection;