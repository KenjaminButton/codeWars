function josephus(items,k){
  //   Base case for an empty array
  if (items.length === 0) {
    return []
  }
  
  const results = []
  let index = 0;
  
  while (items.length > 0) {
    // Splice the array
    index = (index + k - 1) % items.length
    results.push(items.splice(index, 1)[0])
  }
  return results
}

/*
describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(josephus([1,2,3,4,5,6,7,8,9,10],1),[1,2,3,4,5,6,7,8,9,10])
Test.assertSimilar(josephus([1,2,3,4,5,6,7,8,9,10],2),[2, 4, 6, 8, 10, 3, 7, 1, 9, 5])
Test.assertSimilar(josephus(["C","o","d","e","W","a","r","s"],4),['e', 's', 'W', 'o', 'C', 'd', 'r', 'a'])
Test.assertSimilar(josephus([1,2,3,4,5,6,7],3),[3, 6, 2, 7, 5, 1, 4])
Test.assertSimilar(josephus([],3),[])
  });
});

*/