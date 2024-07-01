export const parseNumber = (unknow) => {
if (typeof unknow !== 'string')
return;
};

export const parsePaginationParams = (query) => {
const { page, perPage } = query;

return {
     page: parseNumber(page),
     perPage: parseNumber(perPage) };
};
