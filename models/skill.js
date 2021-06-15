const skills = [
    {id: 124578, skill: 'Exceptional at organizing and time management'},
    {id: 235689, skill: 'Great at problem solving'},
    {id: 134679, skill: 'JavaScript'},
    {id: 215487, skill: 'CSS'},
    {id: 326598, skill: 'Python'},
    {id: 951357, skill: 'Django'}
];

module.exports = {
    getOne,
    getAll
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}