const checkResponse = (res: Response, errText: string) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(errText));
};

export { checkResponse };
