function mostFrequentItemCount(collection) {
  if (!collection.length) return 0;
  const result = collection.reduce((acc, num) => {
    const count = acc[num] ?? 0;
    return {
      ...acc,
      [num]: count + 1,
    };
  }, {});
  return Math.max(...Object.values(result));
}

console.log(mostFrequentItemCount([1]));
