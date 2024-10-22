import StudentCard from "./Component/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-4  bg-gray-100 min-h-screen">
      <StudentCard
        name="Shahid Ali"
        rollNo="00370195"
        distanceLearning="No"
        city="Karachi"
        center="Governer House Karachi"
        campus="Main"
        daysTime="Monday - 02:00 PM - 05:00 PM"
        batch="Batch 1" 
      />
      <br />
      <StudentCard
        name="Subhan Kaladi"
        rollNo="00306343"
        distanceLearning="No"
        city="Karachi"
        center="Governer House Karachi"
        campus="Main"
        daysTime="Monday - 02:00 PM - 05:00 PM"
        batch="Batch 1" 
      />
      <br />
      <StudentCard
        name="Dilbar Ali"
        rollNo="00247910"
        distanceLearning="No"
        city="Karachi"
        center="Governer House Karachi"
        campus="Main"
        daysTime="Wednesday - 02:00 PM - 05:00 PM"
        batch="Batch 1" 
      />
    </div>
  );
}