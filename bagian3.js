const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" },
    ],
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" },
    ],
  },
];

const allTagsNested = products.map((p) => p.tags);

function findProductsByTag(products, tag) {
  return products.filter((p) => p.tags.includes(tag));
}

const reviewCounts = products.map((p) => ({
  id: p.id,
  title: p.title,
  totalReviews: p.reviews.length,
}));

const rating5Reviews = products.flatMap((p) =>
  p.reviews.filter((r) => r.rating === 5),
);
const averageRatings = products.map((p) => {
  const total = p.reviews.reduce((sum, r) => sum + r.rating, 0);
  const avg = p.reviews.length > 0 ? total / p.reviews.length : 0;

  return {
    id: p.id,
    title: p.title,
    calculatedRating: parseFloat(avg.toFixed(2)),
  };
});
const mostReviewedProduct = products.reduce((prev, current) =>
  current.reviews.length > prev.reviews.length ? current : prev,
);

const allRatingsFlat = products.flatMap((p) => p.reviews.map((r) => r.rating));

console.log("1. All Tags Nested:", allTagsNested);
console.log(
  "2. Find Products by Tag 'mobile':",
  findProductsByTag(products, "mobile"),
);
console.log("3. Review Counts:", reviewCounts);
console.log("4. Rating 5 Reviews:", rating5Reviews);
console.log("5. Calculated Average Ratings:", averageRatings);
console.log("6. Most Reviewed Product:", mostReviewedProduct.title);
console.log("7. All Ratings Flat:", allRatingsFlat);
