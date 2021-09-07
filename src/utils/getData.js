
const getData = async (name) => {
    const data = require('../data/' + name + '.json');
    return data;
}

export default getData;