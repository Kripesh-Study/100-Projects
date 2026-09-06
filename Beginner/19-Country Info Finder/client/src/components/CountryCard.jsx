import React, { useState } from 'react';
import { MapPin , Users} from 'lucide-react'; // or wherever your icons come from


const CountryCard = ({ country }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-5 border border-gray-100">
    <div className="flex items-start gap-4">
      <span className="text-4xl leading-none">{country.flag.emoji}</span>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-lg text-gray-800 truncate">{country.names.common}</h3>
        <div className="mt-2 space-y-1.5">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span className="truncate">Capital: {country.capitals[0]?.name}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span>Area: {country.area.kilometers}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);



export default CountryCard;