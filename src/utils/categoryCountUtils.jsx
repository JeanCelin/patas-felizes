import animalsData from "@/data/animals";

export function getCategoryCounts() {
  const dogsCount = animalsData.filter(animal => animal.category === "dogs").length;
  const catsCount = animalsData.filter(animal => animal.category === "cats").length;
  const othersCount = animalsData.filter(animal => animal.category === "others").length;

  return {
    dogs: dogsCount,
    cats: catsCount,
    others: othersCount,
  };
}
