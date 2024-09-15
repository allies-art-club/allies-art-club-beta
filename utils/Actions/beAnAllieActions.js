const handleSubmitContactUs = async (values, csrf, dispatch) => {
  console.log("Submitting data to the server:", values, csrf); // Log the data being sent

  try {
    console.log("Form submitted successfully.");

    console.log("Preparing to send POST request.");

    const result = await fetch("/api/contactUs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "csrf-token": csrf,
      },
      credentials: "include",
      body: JSON.stringify(values),
    });

    console.log("Fetch request completed. Status:", result.status);
    var res = await result.json();
    console.log(res);
    if (res.error) {
      throw new Error("Contact us request failed");
    }
  } catch (e) {
    dispatch({
      type: "ERROR_AMEND",
      payload: {
        page: "contactUs",
        message:
          "Failed to send message. We are working to fix this. Please try again later",
      },
    });
    throw new Error("Failure");
  }
};

const handleSubmitMember = async (values, csrf, dispatch) => {
  try {
    const result = await fetch("/api/postMember", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "csrf-token": csrf,
      },
      credentials: "include",
      body: JSON.stringify(values),
    });
    var res = await result.json();
    if (res.error) {
      throw new Error("Membership request failed");
    }
  } catch (e) {
    dispatch({
      type: "ERROR_AMEND",
      payload: {
        page: "member",
        message:
          "Membership request failed. We are working to fix this. Please try again later.",
      },
    });
    throw new Error("failed");
  }
};
const handleError = (page, message, dispatch) => {
  dispatch({
    type: "ERROR_AMEND",
    payload: {
      page: page,
      message: message,
    },
  });
};

export { handleSubmitContactUs, handleSubmitMember, handleError };
