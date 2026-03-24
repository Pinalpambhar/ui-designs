import { Bookmark } from "lucide-react";

const Cards = () => {
  const cardData = [
    {
      logourl:
        "https://i.pinimg.com/736x/29/f6/41/29f641b507ccb60bb7a62a830b988736.jpg",
      company: "Amazon",
      posted: "5 days ago",
      position: "Senior UI/UX Designer",
      jobtype1: "Part-Time",
      jobtype2: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India",
      isSaved: false,
    },
    {
      logourl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcE_Z8y5RZPBVPRTPwLuMlCMli6c2GI2QCQg&s",
      company: "Google",
      posted: "30 days ago",
      position: "Graphics Designer",
      jobtype1: "Part-Time",
      jobtype2: "Flexible Schedule",
      salary: "$120-150/hr",
      location: "Pune, India",
      isSaved: true,
    },
    {
      logourl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmFvIuKSaMh8KMbYD4uZF5Sq4WM2EKUEaDw&s",
      company: "Dribble",
      posted: "18 days ago",
      position: "Senior Motion Designer",
      jobtype1: "Contract",
      jobtype2: "Remote",
      salary: "$85/hr",
      location: "Chennai, India",
      isSaved: false,
    },
    {
      logourl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoVAw4JchHt4wlwLsHAHJO0rVBiTr1Qr1PfQ&s",
      company: "Figma",
      posted: "5 days ago",
      position: "UX Designer",
      jobtype1: "Full-Time",
      jobtype2: "In Office",
      salary: "$200-250/hr",
      location: "Bangalore, India",
      isSaved: true,
    },
    {
      logourl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCJpAHzn91VMfwirwAbAmV-ONO02UjmCj2w&s",
      company: "Apple",
      posted: "5 days ago",
      position: "Software Engineer - II",
      jobtype1: "Contract",
      jobtype2: "Remote",
      salary: "$100/hr",
      location: "Hyderabad, India",
      isSaved: false,
    },
    {
      logourl: "https://img.icons8.com/color/200/microsoft.png",
      company: "Microsoft",
      posted: "10 days ago",
      position: "Software Engineer - I",
      jobtype1: "Full-Time",
      jobtype2: "In Office",
      salary: "$100/hr",
      location: "Gandhinagar, India",
      isSaved: true,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 bg-gray-100 p-10">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="min-w-[350px] bg-white rounded-4xl shadow py-3 px-5"
        >
          <div className="flex justify-between items-start pt-2">
            <div className="w-15 h-15 border border-double rounded-full border-gray-400 p-2">
              <img
                src={card.logourl}
                alt={card.company}
                className="object-cover rounded-full"
              />
            </div>
            <button
              className={`flex text-sm items-center justify-around cursor-pointer hover:bg-gray-100 hover:text-black px-3 py-1 gap-1  rounded-md ${
                card.isSaved ? "text-black font-bold bg-gray-200" : "text-gray-400 border border-gray-400"
              }`}
            >
              {card.isSaved ? "Saved" : "Save"}
              {card.isSaved ? <Bookmark size={18} stroke="black" fill="black"/> : <Bookmark size={18}/>}
            </button>
          </div>

          <div className="py-7 px-3 pb-25">
            <span className="text-xl font-semibold">{card.company}</span>
            <span className="text-xs px-1 text-gray-400">{card.posted}</span>

            <p className="text-2xl font-bold">{card.position}</p>

            <div className="flex items-center justify-start text-md gap-2 pt-4">
              <button className="bg-gray-100 rounded-md px-3 py-1">
                {card.jobtype1}
              </button>
              <button className="bg-gray-100 rounded-md px-3 py-1">
                {card.jobtype2}
              </button>
            </div>
          </div>

          <hr className="text-gray-200" />

          <div className="flex justify-between py-5 px-3 text-center">
            <div className="text-start">
              <p className="font-bold text-xl">{card.salary}</p>
              <p className="text-sm text-gray-400">{card.location}</p>
            </div>

            <button className="bg-gray-900 text-white px-6 py-2 rounded-md cursor-pointer">
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
