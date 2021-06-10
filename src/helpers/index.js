export const buildQuery = (params) => {
    return Object.entries(params)
      .map((item) => item.join("="))
      .join("&");
};

export const parseQuery = (params) => {
    let clearData = {};

    Object.entries(params).forEach(([key, value]) => {
        if (value === undefined || value === null) return;

        clearData[key] = value;
    });

    return buildQuery({
        ...clearData,
    });
};