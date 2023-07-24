const skills = [
    {id: 125223, skill: 'Run'},
    {id: 127904, skill: 'dance'},
    {id: 139608, skill: 'walk dog'}
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
   
  };

  function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.done = false;
    skills.push(skill);
  }

  function getAll() {
    return skills;
  }

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
  }