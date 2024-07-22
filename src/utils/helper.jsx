export function filterData(searchText, rests) {
  return rests.filter((res) => {
    // console.log(  res.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
    return res.info?.name?.toLowerCase().includes(searchText.toLowerCase());
  });
}
