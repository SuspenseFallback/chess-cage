export const throw_err = (code = "", message) => {
  console.error(`Error ${code}: ${message}`);
  throw new Error(message);
};

export const throw_warning = (message, return_value) => {
  console.warn("Warning: " + message);
  return return_value;
};
