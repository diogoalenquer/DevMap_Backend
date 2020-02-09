module.exports = (arrayAsString) => {
    return arrayAsString.split(',').map(x => x.trim());
};