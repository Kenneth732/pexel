    const apiKey = 'uDsaNoiARkVeopRASv9XPIXAT9zPDZ4OPP4Hf6UypKcwoHfRlOaJJ08G';




       const fetchData = useCallback(() => {
        const query = searchInput;
        const mediaType = selectedOption?.value;

        if (query && mediaType) {
            fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=10&media_type=${mediaType}`, {
                method: 'GET',
                headers: {
                    'Authorization': apiKey,
                },
            })
                .then(response => response.json())
                .then(data => {
                    setSearchResults(data.photos);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [searchInput, selectedOption, apiKey]);




<form onSubmit={handleFormSubmit}>
  <select className='select_photo_video'>
    <option value="sunny">Photo</option>
    <option value="rainy">Video</option>
  </select>
  <input
    type="text"
    placeholder="Search for free photos"
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
  />
  <button type="submit">Search</button>
</form>
