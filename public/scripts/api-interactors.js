const getData = async url => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`HTTP error ${response.status}: ${errorMessage}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
};

const postData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (response.status !== 200) {
      throw new Error((await response.json()).message);
    }
    return response;
  } catch (err) {
    return err;
  }
};

const putData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (response.status !== 200) {
      throw new Error((await response.json()).message);
    }
    return response;
  } catch (err) {
    return err;
  }
};

const deleteData = async url => {
  try {
    const response = await fetch(url, {
      method: "DELETE"
    });
    return response;
  } catch (err) {
    console.error(err);
  }
};

export { getData, postData, putData, deleteData };
