let formData = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Destructure the incoming form data and check if necessary fields exist
    const { title, description, imgUrl, news } = req.body;

    if (!title || !description || !imgUrl || !news) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Store the incoming form data
    formData.push({ title, description, imgUrl, news });

    return res.status(200).json({ message: 'Data saved successfully' });
  } else if (req.method === 'GET') {
    // Get the search query from the URL (if present)
    const { search } = req.query;

    if (search) {
      // If a search term is provided, filter the data based on title or description
      const filteredData = formData.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase())
      );
      return res.status(200).json(filteredData); // Return filtered data
    } else {
      // If no search term is provided, return all data
      return res.status(200).json(formData);
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
