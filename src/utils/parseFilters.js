export const parseFilters = (query) => {

const parseInFilter = (unknow) => {
if(typeof unknow !== 'string')return;
const parseInt = parseInt(unknow);
if(Number.isNaN(parseInt)) return;
return parseInt;

};

    return {
         minAge: parseInFilter(query.minAge),
          maxAge:parseInFilter(query.minAge),
          gender: query.gender,
          avgMark: query.avgMark,
          onDuty: query.onDuty
    };
};
