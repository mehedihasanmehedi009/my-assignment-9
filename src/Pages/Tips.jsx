 import React from 'react';
 const petData =  [
  {
    "id": 1,
    "title": "Keep Your Pet Warm",
    "description": "During the chilly winter months, make sure your pet stays warm and comfortable. Use cozy blankets, pet sweaters, or heated beds to help them maintain body temperature. Always keep their sleeping area dry and away from cold drafts.",
  
  },
  {
    "id": 2,
    "title": "Dress Them Warmly",
    "description": "If your pet has short or thin fur, cold weather can be especially harsh. Dress them in warm pet clothing like sweaters or jackets when going outside. Avoid overly tight outfits, and ensure their paws are protected from cold surfaces or frost.",
     
  },
  {
    "id": 3,
    "title": "Groom Regularly",
    "description": "Regular grooming is essential in winter to keep your pet’s coat clean, healthy, and warm. Brushing removes loose fur and improves blood circulation. Avoid over-bathing, as it can strip away natural oils and make the skin dry or flaky.",
    
  },
  {
    "id": 4,
    "title": "Provide Proper Nutrition",
    "description": "Winter increases your pet’s energy needs as their body works harder to stay warm. Offer high-quality, nutrient-rich food that supports their metabolism. Always keep fresh water available, as hydration is just as important in cold weather.",
    
  }
]


 const Tips = () => {
    return (
        <div>
               <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Winter Pet Care Tips ❄️
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {petData.map((pet) => (
          <div
            key={pet.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-indigo-700">
                {pet.title}
              </h3>
              <p className="text-gray-600 text-sm">{pet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
 };
 
 export default Tips;