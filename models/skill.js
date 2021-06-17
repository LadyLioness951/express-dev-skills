const skills = [
    {id: 124578, skill: 'Exceptional at organizing and time management'},
    {id: 235689, skill: 'Great at problem solving'},
    {id: 326598, skill: 'Attention to detail is impecable'},
    {id: 134679, skill: 'JavaScript'},
    {id: 215487, skill: 'CSS'},
    {id: 951357, skill: 'Django'}
];

module.exports = {
    getOne,
    getAll, 
    create,
    deleteOne,
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}

function create(newSkill) {
    newSkill.id = Date.now() % 8000000;
    skills.push(newSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}
