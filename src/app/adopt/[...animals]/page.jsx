import animalsData from "@/data/animals";

export default async function animalInfo({ params }) {
  const { animals } = await params;
  let animalId = animals[1];

  animalId = animalsData.find((animal) => animal.id === animalId);
  console.log(animalId);

  return <div>my post: {animals}</div>;
}
