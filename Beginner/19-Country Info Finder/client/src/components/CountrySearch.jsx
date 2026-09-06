import { useEffect, useState } from "react";
import { Globe, Search, ChevronDown } from 'lucide-react'; // or wherever your icons come from
import CountryCard from "./CountryCard";







const CountrySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryData, setCountryData] = useState([])
  
  useEffect(()=>{
    const fetchingCountry = async () =>{
      const res1 = await  fetch(
    `https://api.restcountries.com/countries/v5?limit=100`,
    { headers: { 'Authorization': 'Bearer rc_live_25b016c64dcc415d84f3a6805e0ed932' } })

    const data1 = await res1.json();

    setCountryData(data1.data.objects)

    const res2 = await fetch(
    `https://api.restcountries.com/countries/v5?limit=100&offset=100`,
    { headers: { 'Authorization': 'Bearer rc_live_25b016c64dcc415d84f3a6805e0ed932' } })

    const data2 = await res2.json();

    setCountryData(prev => [...prev, ...data2.data.objects])
    
    }
    fetchingCountry();
  },[])
  console.log(countryData)
  const filteredCountries = countryData.filter(country =>
    country.names.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Auto-select if exact match
    const exactMatch = countryData.find(c => c.name.toLowerCase() === value.toLowerCase());
    setSelectedCountry(exactMatch || null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
            <Globe className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Discover countries around the world
          </h1>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Search for any country to see its flag, capital, area, and more.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-md border border-gray-200">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Results / Selected Country */}
        <div className="max-w-2xl mx-auto">
          {selectedCountry ? (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Selected Country
                </h2>
                <button
                  onClick={() => {
                    setSelectedCountry(null);
                    setSearchTerm('');
                  }}
                  className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Clear
                </button>
              </div>
              <CountryCard country={selectedCountry} />
            </div>
          ) : (
            searchTerm && filteredCountries.length === 0 && (
              <div className="text-center py-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <p className="text-gray-500">No countries found matching "{searchTerm}"</p>
              </div>
            )
          )}

          {/* Country List (shown when no selection or search term) */}
          {!selectedCountry && (
            <div>
              {!searchTerm && (
                <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                  All Countries
                </h2>
              )}
              <div className="space-y-3">
                {filteredCountries.map((country) => (
                  <div
                    key={country.name}
                    onClick={() => {
                      setSelectedCountry(country);
                      setSearchTerm(country.name);
                    }}
                    className="cursor-pointer transition-all duration-200 hover:scale-[1.01]"
                  >
                    <CountryCard country={country} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountrySearch;