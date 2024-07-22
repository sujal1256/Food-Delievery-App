async function useFetch(API) {
    const json = await fetch(API);    
    const data = await json.json();
    
    return data;
  }

export default useFetch;